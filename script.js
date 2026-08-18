/* =========================================================
   CONFIGURACIÓN
========================================================= */

const OWNER =
    "AbutMatias";

const REPO =
    "Manual-Operativo-Atencion-al-Cliente";

const BRANCH =
    "main";

const DOC_FOLDER =
    "doc";


const API =
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${DOC_FOLDER}`;


const RAW_URL =
    `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/`;


const GITHUB_URL =
    `https://github.com/${OWNER}/${REPO}/blob/${BRANCH}/`;


const INDEX_URL =
    "./index.json";


const README_URL =
    `${RAW_URL}README.md`;


/* =========================================================
   VARIABLES
========================================================= */

let documentos = [];

let categorias = [];

let searchTimer = null;

let documentoActual = null;


/* =========================================================
   ELEMENTOS
========================================================= */

const buscador =
    document.getElementById(
        "buscador"
    );


const clearSearch =
    document.getElementById(
        "clearSearch"
    );


const sidebar =
    document.getElementById(
        "sidebar"
    );


const sidebarOverlay =
    document.getElementById(
        "sidebarOverlay"
    );


const backToTop =
    document.getElementById(
        "backToTop"
    );


const loadingBar =
    document.getElementById(
        "loadingBar"
    );


const headerStatusText =
    document.getElementById(
        "headerStatusText"
    );


/* =========================================================
   UTILIDADES
========================================================= */

function escapeHTML(texto) {

    return String(texto || "")

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


function escapeRegex(texto) {

    return String(texto || "")
        .replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
        );

}


function limpiarEmoji(texto) {

    return String(texto || "")

        .replace(
            /[\u{1F300}-\u{1FAFF}]/gu,
            ""
        )

        .trim();

}


function normalizarRuta(ruta) {

    let resultado =
        String(ruta || "")
            .trim()
            .replace(
                /\\/g,
                "/"
            );


    resultado =
        resultado.replace(
            /^\.\/+/,
            ""
        );


    resultado =
        resultado.replace(
            /^\/+/,
            ""
        );


    return resultado
        .toLowerCase()
        .trim();

}


function obtenerNombreArchivo(path) {

    return String(path || "")

        .split("/")

        .pop()

        .replace(
            /\.md$/i,
            ""
        );

}


function ordenarDocumentos(a, b) {

    return String(a.nombre || "")
        .localeCompare(
            String(b.nombre || ""),
            "es",
            {
                sensitivity: "base"
            }
        );

}


/* =========================================================
   INICIO
========================================================= */

async function iniciar() {

    const status =
        document.getElementById(
            "status"
        );


    const estado =
        document.getElementById(
            "estado"
        );


    try {

        loadingBar.classList.add(
            "active"
        );


        status.textContent =
            "Cargando documentación...";


        headerStatusText.textContent =
            "Cargando...";


        estado.textContent =
            "...";


        /*
         * Primero intentamos cargar
         * index.json
         */

        const cargado =
            await cargarDesdeIndex();


        /*
         * Si index.json no existe,
         * usamos GitHub directamente.
         */

        if (!cargado) {

            await cargarDocumentosGitHub();

        }


        if (!documentos.length) {

            throw new Error(
                "No se encontraron documentos dentro de /doc"
            );

        }


        /*
         * README es opcional.
         */

        try {

            await cargarCategorias();

        } catch (error) {

            console.warn(
                "No se pudo cargar README.md:",
                error
            );


            categorias = [];


            generarCategoriasAutomaticas();

        }


        /*
         * Si README no tiene categorías,
         * generamos automáticamente.
         */

        if (!categorias.length) {

            generarCategoriasAutomaticas();

        }


        /*
         * Estadísticas
         */

        document.getElementById(
            "cantidad-documentos"
        ).textContent =
            documentos.length;


        document.getElementById(
            "cantidad-categorias"
        ).textContent =
            categorias.length;


        estado.textContent =
            "OK";


        headerStatusText.textContent =
            `${documentos.length} documentos`;


        status.textContent =
            `${documentos.length} documentos disponibles`;


        /*
         * Mostrar documentos
         */

        mostrarDocumentosIniciales();


        /*
         * Favoritos
         */

        mostrarFavoritos();


        /*
         * Historial
         */

        mostrarHistorial();


    } catch (error) {

        console.error(
            "Error inicializando:",
            error
        );


        estado.textContent =
            "ERROR";


        headerStatusText.textContent =
            "Error";


        status.textContent =
            "Error al cargar";


        document.getElementById(
            "resultados"
        ).innerHTML = `

            <div class="empty">

                <div class="empty-title">
                    No se pudo cargar la documentación
                </div>

                <br>

                ${escapeHTML(
                    error.message
                )}

                <br><br>

                <button
                    id="retryButton"
                    type="button"
                >
                    Reintentar
                </button>

            </div>

        `;


        document
            .getElementById(
                "retryButton"
            )
            .addEventListener(
                "click",
                iniciar
            );


    } finally {

        loadingBar.classList.remove(
            "active"
        );

    }

}


/* =========================================================
   INDEX.JSON
========================================================= */

async function cargarDesdeIndex() {

    try {

        const respuesta =
            await fetch(
                `${INDEX_URL}?v=${Date.now()}`,
                {
                    cache: "no-store"
                }
            );


        if (!respuesta.ok) {

            return false;

        }


        const data =
            await respuesta.json();


        if (!Array.isArray(data)) {

            return false;

        }


        documentos =
            data

                .filter(
                    documento =>
                        documento &&
                        documento.path
                )

                .map(
                    documento => ({

                        nombre:
                            documento.nombre ||
                            obtenerNombreArchivo(
                                documento.path
                            ),

                        path:
                            documento.path,

                        contenido:
                            documento.contenido ||
                            "",

                        url:
                            documento.url ||
                            `${RAW_URL}${documento.path}`

                    })
                );


        documentos.sort(
            ordenarDocumentos
        );


        console.log(
            `index.json cargado: ${documentos.length} documentos`
        );


        return documentos.length > 0;


    } catch (error) {

        console.warn(
            "No se pudo cargar index.json:",
            error
        );


        return false;

    }

}


/* =========================================================
   GITHUB
========================================================= */

async function cargarDocumentosGitHub() {

    documentos = [];


    await recorrerCarpeta(
        API
    );


    /*
     * Descargar contenido Markdown
     */

    await Promise.all(

        documentos.map(
            async documento => {

                try {

                    const respuesta =
                        await fetch(
                            documento.url,
                            {
                                cache: "no-store"
                            }
                        );


                    if (!respuesta.ok) {

                        throw new Error(
                            respuesta.status
                        );

                    }


                    documento.contenido =
                        await respuesta.text();


                } catch (error) {

                    console.warn(
                        "No se pudo cargar:",
                        documento.path
                    );


                    documento.contenido =
                        "";

                }

            }
        )

    );


    documentos.sort(
        ordenarDocumentos
    );


    console.log(
        `GitHub cargado: ${documentos.length} documentos`
    );

}


/* =========================================================
   RECORRER CARPETAS
========================================================= */

async function recorrerCarpeta(
    url
) {

    const respuesta =
        await fetch(
            `${url}${url.includes("?") ? "&" : "?"}v=${Date.now()}`,
            {
                cache: "no-store"
            }
        );


    if (!respuesta.ok) {

        throw new Error(
            `GitHub respondió ${respuesta.status}`
        );

    }


    const archivos =
        await respuesta.json();


    for (
        const archivo of archivos
    ) {


        /*
         * ARCHIVO MARKDOWN
         */

        if (

            archivo.type === "file" &&

            archivo.name
                .toLowerCase()
                .endsWith(".md")

        ) {

            documentos.push({

                nombre:
                    archivo.name.replace(
                        /\.md$/i,
                        ""
                    ),

                path:
                    archivo.path,

                url:
                    archivo.download_url,

                contenido:
                    ""

            });


            continue;

        }


        /*
         * CARPETA
         */

        if (
            archivo.type === "dir"
        ) {

            await recorrerCarpeta(
                archivo.url
            );

        }

    }

}


/* =========================================================
   README
========================================================= */

async function cargarCategorias() {

    const respuesta =
        await fetch(
            `${README_URL}?v=${Date.now()}`,
            {
                cache: "no-store"
            }
        );


    if (!respuesta.ok) {

        throw new Error(
            "No se pudo cargar README.md"
        );

    }


    const markdown =
        await respuesta.text();


    categorias =
        obtenerCategorias(
            markdown
        );


    mostrarCategorias();

}


/* =========================================================
   OBTENER CATEGORÍAS DEL README
========================================================= */

function obtenerCategorias(
    markdown
) {

    const resultado = [];


    const lineas =
        String(markdown || "")
            .split("\n");


    let categoriaActual =
        null;


    for (
        const linea of lineas
    ) {


        /*
         * ## Categoría
         */

        const categoria =
            linea.match(
                /^##\s+(.+)$/
            );


        if (categoria) {

            categoriaActual = {

                nombre:
                    categoria[1].trim(),

                documentos:
                    []

            };


            resultado.push(
                categoriaActual
            );


            continue;

        }


        if (!categoriaActual) {

            continue;

        }


        /*
         * - [Documento](ruta)
         */

        const enlace =
            linea.match(
                /^\s*[-*]\s+\[([^\]]+)\]\((.+)\)$/
            );


        if (enlace) {

            categoriaActual.documentos.push({

                nombre:
                    enlace[1].trim(),

                ruta:
                    limpiarRutaREADME(
                        enlace[2].trim()
                    ),

                importante:
                    false

            });


            continue;

        }


        /*
         * > [Documento](ruta)
         */

        const importante =
            linea.match(
                /^\s*>\s*\[([^\]]+)\]\((.+)\)$/
            );


        if (importante) {

            categoriaActual.documentos.push({

                nombre:
                    importante[1].trim(),

                ruta:
                    limpiarRutaREADME(
                        importante[2].trim()
                    ),

                importante:
                    true

            });

        }

    }


    return resultado.filter(
        categoria =>
            categoria.documentos.length > 0
    );

}


/* =========================================================
   LIMPIAR RUTA README
========================================================= */

function limpiarRutaREADME(
    ruta
) {

    let resultado =
        String(ruta || "")
            .trim();


    resultado =
        resultado.replace(
            /\\([()[\]])/g,
            "$1"
        );


    try {

        resultado =
            decodeURIComponent(
                resultado
            );

    } catch (error) {

        // Se mantiene la ruta original.

    }


    resultado =
        resultado.replace(
            /^\.\/+/,
            ""
        );


    resultado =
        resultado.replace(
            /^doc\//i,
            ""
        );


    return resultado
        .trim();

}


/* =========================================================
   CATEGORÍAS AUTOMÁTICAS
========================================================= */

function generarCategoriasAutomaticas() {

    const mapa =
        new Map();


    documentos.forEach(
        documento => {

            const partes =
                documento.path.split("/");


            let categoria =
                "General";


            if (
                partes.length >= 3
            ) {

                categoria =
                    partes[1];

            }


            if (
                !mapa.has(categoria)
            ) {

                mapa.set(
                    categoria,
                    []
                );

            }


            mapa
                .get(categoria)
                .push({

                    nombre:
                        documento.nombre,

                    ruta:
                        documento.path,

                    importante:
                        false

                });

        }
    );


    categorias =
        Array.from(
            mapa.entries()
        )

        .map(
            ([nombre, documentosCategoria]) => ({

                nombre:
                    limpiarEmoji(
                        nombre
                    ),

                documentos:
                    documentosCategoria.sort(
                        (a, b) =>
                            a.nombre.localeCompare(
                                b.nombre,
                                "es"
                            )
                    )

            })
        )

        .sort(
            (a, b) =>
                a.nombre.localeCompare(
                    b.nombre,
                    "es"
                )
        );


    mostrarCategorias();

}


/* =========================================================
   MOSTRAR CATEGORÍAS
========================================================= */

function mostrarCategorias() {

    const contenedor =
        document.getElementById(
            "categorias"
        );


    contenedor.innerHTML =
        "";


    if (!categorias.length) {

        contenedor.innerHTML = `

            <div class="nav-item">

                <span class="category-icon">
                    📄
                </span>

                Sin categorías

            </div>

        `;

        return;

    }


    categorias.forEach(
        categoria => {

            const categoriaElemento =
                document.createElement(
                    "div"
                );


            categoriaElemento.className =
                "sidebar-category";


            /*
             * TÍTULO
             */

            const titulo =
                document.createElement(
                    "div"
                );


            titulo.className =
                "nav-item sidebar-category-title";


            titulo.innerHTML = `

                <span class="category-icon">
                    📁
                </span>

                <span class="sidebar-category-name">

                    ${escapeHTML(
                        limpiarEmoji(
                            categoria.nombre
                        )
                    )}

                </span>

                <span class="category-count">
                    ${categoria.documentos.length}
                </span>

                <span class="sidebar-arrow">
                    ›
                </span>

            `;


            /*
             * CONTENIDO
             */

            const contenido =
                document.createElement(
                    "div"
                );


            contenido.className =
                "sidebar-category-content";


            titulo.addEventListener(
                "click",
                () => {

                    contenido.classList.toggle(
                        "open"
                    );


                    titulo.classList.toggle(
                        "expanded"
                    );

                }
            );


            categoriaElemento.appendChild(
                titulo
            );


            /*
             * DOCUMENTOS
             */

            categoria.documentos.forEach(
                documento => {

                    agregarDocumentoSidebar(
                        contenido,
                        documento
                    );

                }
            );


            categoriaElemento.appendChild(
                contenido
            );


            contenedor.appendChild(
                categoriaElemento
            );

        }
    );

}


/* =========================================================
   DOCUMENTO SIDEBAR
========================================================= */

function agregarDocumentoSidebar(
    contenedor,
    documento
) {

    const elemento =
        document.createElement(
            "div"
        );


    elemento.className =
        "sidebar-document";


    if (
        documento.importante
    ) {

        elemento.classList.add(
            "important"
        );

    }


    const favorito =
        esFavoritoPorRuta(
            documento.ruta
        );


    elemento.innerHTML = `

        <span>
            ${documento.importante ? "⚠️" : "📄"}
        </span>

        <span>
            ${escapeHTML(
                limpiarEmoji(
                    documento.nombre
                )
            )}
        </span>

        <span
            class="favorite-star ${
                favorito ? "active" : ""
            }"
            title="Favorito"
        >
            ${favorito ? "★" : "☆"}
        </span>

    `;


    elemento.addEventListener(
        "click",
        event => {

            const estrella =
                event.target.closest(
                    ".favorite-star"
                );


            if (estrella) {

                event.stopPropagation();


                alternarFavorito(
                    documento.ruta
                );


                const activo =
                    esFavoritoPorRuta(
                        documento.ruta
                    );


                estrella.textContent =
                    activo
                        ? "★"
                        : "☆";


                estrella.classList.toggle(
                    "active",
                    activo
                );


                return;

            }


            abrirDocumentoPorRuta(
                documento.ruta
            );

        }
    );


    contenedor.appendChild(
        elemento
    );

}


/* =========================================================
   BUSCAR DOCUMENTO POR RUTA
========================================================= */

function buscarDocumentoPorRuta(
    ruta
) {

    const normalizada =
        normalizarRuta(
            ruta
        );


    /*
     * Ruta exacta
     */

    let encontrado =
        documentos.find(
            documento =>
                normalizarRuta(
                    documento.path
                ) === normalizada
        );


    if (encontrado) {

        return encontrado;

    }


    /*
     * Agregando doc/
     */

    encontrado =
        documentos.find(
            documento =>
                normalizarRuta(
                    documento.path
                ) ===
                `doc/${normalizada}`
        );


    if (encontrado) {

        return encontrado;

    }


    /*
     * Buscar por nombre
     */

    const nombre =
        normalizada
            .split("/")
            .pop()
            .replace(
                /\.md$/i,
                ""
            );


    return documentos.find(
        documento =>
            normalizarRuta(
                documento.nombre
            ) === nombre
    );

}


/* =========================================================
   ABRIR DOCUMENTO POR RUTA
========================================================= */

function abrirDocumentoPorRuta(
    ruta
) {

    const documento =
        buscarDocumentoPorRuta(
            ruta
        );


    if (!documento) {

        alert(
            "No se encontró el documento:\n\n" +
            ruta
        );


        return;

    }


    abrirDocumento(
        documento.path
    );

}


/* =========================================================
   DOCUMENTOS INICIALES
========================================================= */

function mostrarDocumentosIniciales() {

    const resultados =
        documentos.map(
            documento => ({

                documento,

                contenido:
                    documento.contenido || "",

                puntos:
                    0

            })
        );


    mostrarResultados(
        resultados.slice(
            0,
            20
        ),
        ""
    );

}


/* =========================================================
   BÚSQUEDA
========================================================= */

buscador.addEventListener(
    "input",
    function () {

        const texto =
            this.value
                .trim()
                .toLowerCase();


        clearSearch.style.display =
            texto
                ? "block"
                : "none";


        clearTimeout(
            searchTimer
        );


        searchTimer =
            setTimeout(
                () => {

                    if (!texto) {

                        mostrarDocumentosIniciales();


                        document.getElementById(
                            "status"
                        ).textContent =
                            `${documentos.length} documentos disponibles`;


                        return;

                    }


                    buscarDocumentos(
                        texto
                    );

                },
                100
            );

    }
);


/* =========================================================
   BUSCAR DOCUMENTOS
========================================================= */

function buscarDocumentos(
    texto
) {

    const palabras =
        texto
            .split(/\s+/)
            .filter(Boolean);


    const resultados = [];


    documentos.forEach(
        documento => {

            const contenido =
                documento.contenido || "";


            const textoBusqueda = (

                documento.nombre +
                " " +
                documento.path +
                " " +
                contenido

            ).toLowerCase();


            let puntos =
                0;


            palabras.forEach(
                palabra => {

                    if (
                        textoBusqueda.includes(
                            palabra
                        )
                    ) {

                        puntos++;

                    }

                }
            );


            /*
             * Todas las palabras
             * deben aparecer.
             */

            if (
                puntos === palabras.length
            ) {

                resultados.push({

                    documento,

                    contenido,

                    puntos

                });

            }

        }
    );


    resultados.sort(
        (a, b) => {

            if (
                b.puntos !==
                a.puntos
            ) {

                return (
                    b.puntos -
                    a.puntos
                );

            }


            return ordenarDocumentos(
                a.documento,
                b.documento
            );

        }
    );


    mostrarResultados(
        resultados,
        texto
    );


    document.getElementById(
        "status"
    ).textContent =
        `${resultados.length} resultado(s)`;

}


/* =========================================================
   MOSTRAR RESULTADOS
========================================================= */

function mostrarResultados(
    resultados,
    texto
) {

    const contenedor =
        document.getElementById(
            "resultados"
        );


    contenedor.innerHTML =
        "";


    if (!resultados.length) {

        contenedor.innerHTML = `

            <div class="empty">

                <div class="empty-icon">
                    🔎
                </div>

                <div class="empty-title">
                    No encontramos resultados
                </div>

                <br>

                No existe ningún documento
                que contenga:

                <br><br>

                <strong>
                    "${escapeHTML(texto)}"
                </strong>

            </div>

        `;

        return;

    }


    resultados.forEach(
        resultado => {

            const fragmento =
                obtenerFragmento(
                    resultado.contenido,
                    texto
                );


            const elemento =
                document.createElement(
                    "div"
                );


            elemento.className =
                "result";


            elemento.innerHTML = `

                <div class="result-title">

                    <span class="result-title-icon">
                        📄
                    </span>

                    ${escapeHTML(
                        resultado.documento.nombre
                    )}

                </div>


                <div class="result-category">

                    📁

                    ${escapeHTML(
                        resultado.documento.path
                    )}

                </div>


                <div class="result-text">

                    ${resaltar(
                        fragmento,
                        texto
                    )}

                </div>


                <div class="result-actions">

                    <button
                        type="button"
                        class="read-button"
                    >
                        Leer documento →
                    </button>

                </div>

            `;


            elemento
                .querySelector(
                    ".read-button"
                )
                .addEventListener(
                    "click",
                    () => {

                        abrirDocumento(
                            resultado
                                .documento
                                .path
                        );

                    }
                );


            contenedor.appendChild(
                elemento
            );

        }
    );

}


/* =========================================================
   OBTENER FRAGMENTO
========================================================= */

function obtenerFragmento(
    contenido,
    texto
) {

    const limpio =
        String(
            contenido || ""
        )

        .replace(
            /[#>*_`]/g,
            " "
        )

        .replace(
            /\s+/g,
            " "
        )

        .trim();


    if (!texto) {

        return limpio.substring(
            0,
            300
        );

    }


    const posicion =
        limpio
            .toLowerCase()
            .indexOf(
                texto.toLowerCase()
            );


    if (
        posicion === -1
    ) {

        return limpio.substring(
            0,
            300
        );

    }


    const inicio =
        Math.max(
            0,
            posicion - 120
        );


    return limpio.substring(
        inicio,
        posicion +
        texto.length +
        250
    );

}


/* =========================================================
   RESALTAR
========================================================= */

function resaltar(
    texto,
    busqueda
) {

    let resultado =
        escapeHTML(
            texto
        );


    const palabras =
        busqueda
            .split(/\s+/)
            .filter(Boolean);


    palabras.forEach(
        palabra => {

            if (!palabra) {
                return;
            }


            const regex =
                new RegExp(
                    `(${escapeRegex(
                        palabra
                    )})`,
                    "gi"
                );


            resultado =
                resultado.replace(
                    regex,
                    "<mark>$1</mark>"
                );

        }
    );


    return resultado;

}


/* =========================================================
   ABRIR DOCUMENTO
========================================================= */

function abrirDocumento(
    path
) {

    const documento =
        documentos.find(
            item =>
                normalizarRuta(
                    item.path
                ) ===
                normalizarRuta(
                    path
                )
        );


    if (!documento) {

        alert(
            "Documento no encontrado"
        );


        return;

    }


    documentoActual =
        documento;


    /*
     * Cambiar pantalla
     */

    document.getElementById(
        "home"
    ).style.display =
        "none";


    document.getElementById(
        "documento"
    ).style.display =
        "block";


    /*
     * Datos
     */

    document.getElementById(
        "documentTitle"
    ).textContent =
        documento.nombre;


    document.getElementById(
        "documentPath"
    ).textContent =
        documento.path;


    /*
     * Contenido
     */

    const contenido =
        document.getElementById(
            "contenidoDocumento"
        );


    contenido.innerHTML =
        "<p>Cargando documento...</p>";


    try {

        const markdown =
            documento.contenido || "";


        contenido.innerHTML =
            marked.parse(
                markdown
            );


        configurarImagenes(
            contenido
        );


        configurarEnlaces(
            contenido
        );


        generarIndice(
            contenido
        );


    } catch (error) {

        console.error(
            error
        );


        contenido.innerHTML = `

            <div class="empty">

                <div class="empty-title">
                    Error al mostrar el documento
                </div>

                <br>

                ${escapeHTML(
                    error.message
                )}

            </div>

        `;

    }


    /*
     * GitHub
     */

    document.getElementById(
        "linkGithub"
    ).href =
        GITHUB_URL +
        documento.path
            .split("/")
            .map(
                encodeURIComponent
            )
            .join("/");


    /*
     * Favorito
     */

    actualizarBotonFavorito();


    /*
     * Historial
     */

    agregarHistorial(
        documento
    );


    /*
     * Scroll
     */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    /*
     * Cerrar sidebar en móvil
     */

    cerrarSidebar();


    /*
     * Hash
     */

    history.replaceState(
        null,
        "",
        `#documento=${encodeURIComponent(
            documento.path
        )}`
    );

}


/* =========================================================
   IMÁGENES
========================================================= */

function configurarImagenes(
    contenido
) {

    contenido
        .querySelectorAll("img")
        .forEach(
            img => {

                let src =
                    img.getAttribute(
                        "src"
                    );


                if (!src) {
                    return;
                }


                src =
                    src.trim();


                /*
                 * URL absoluta
                 */

                if (
                    src.startsWith(
                        "http://"
                    ) ||
                    src.startsWith(
                        "https://"
                    )
                ) {

                    img.src =
                        src;

                }

                /*
                 * Imagen local
                 */

                else {

                    let imagen =
                        src;


                    imagen =
                        imagen.replace(
                            /^\.\/+/,
                            ""
                        );


                    imagen =
                        imagen.replace(
                            /^\/+/,
                            ""
                        );


                    imagen =
                        imagen.replace(
                            /^doc\//i,
                            ""
                        );


                    if (
                        imagen
                            .toLowerCase()
                            .startsWith(
                                "imagenes/"
                            )
                    ) {

                        imagen =
                            imagen.replace(
                                /^imagenes\//i,
                                ""
                            );

                    }


                    try {

                        imagen =
                            decodeURIComponent(
                                imagen
                            );

                    } catch (error) {}

                    
                    img.src =
                        `${RAW_URL}doc/imagenes/${imagen}`;

                }


                img.loading =
                    "lazy";


                img.decoding =
                    "async";


                img.addEventListener(
                    "click",
                    () => {

                        window.open(
                            img.src,
                            "_blank"
                        );

                    }
                );

            }
        );

}


/* =========================================================
   ENLACES
========================================================= */

function configurarEnlaces(
    contenido
) {

    contenido
        .querySelectorAll("a")
        .forEach(
            link => {

                link.target =
                    "_blank";


                link.rel =
                    "noopener noreferrer";

            }
        );

}


/* =========================================================
   ÍNDICE DEL DOCUMENTO
========================================================= */

function generarIndice(
    contenido
) {

    const toc =
        document.getElementById(
            "tocContent"
        );


    toc.innerHTML =
        "";


    const encabezados =
        contenido.querySelectorAll(
            "h1, h2, h3, h4"
        );


    if (!encabezados.length) {

        toc.innerHTML = `

            <div class="empty-special">
                Sin índice
            </div>

        `;

        return;

    }


    encabezados.forEach(
        (heading, index) => {

            const id =
                `seccion-${index}`;


            heading.id =
                id;


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "toc-item";


            if (
                heading.tagName ===
                "H3"
            ) {

                item.classList.add(
                    "toc-h3"
                );

            }


            if (
                heading.tagName ===
                "H4"
            ) {

                item.classList.add(
                    "toc-h4"
                );

            }


            item.textContent =
                heading.textContent;


            item.addEventListener(
                "click",
                () => {

                    heading.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );


            toc.appendChild(
                item
            );

        }
    );

}


/* =========================================================
   VOLVER A INICIO
========================================================= */

function inicio() {

    document.getElementById(
        "home"
    ).style.display =
        "block";


    document.getElementById(
        "documento"
    ).style.display =
        "none";


    documentoActual =
        null;


    history.replaceState(
        null,
        "",
        window.location.pathname
    );


    document
        .querySelectorAll(
            ".nav-item"
        )
        .forEach(
            item =>
                item.classList.remove(
                    "active"
                )
        );


    document.getElementById(
        "navInicio"
    ).classList.add(
        "active"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   BUSCAR DESDE MENÚ
========================================================= */

function activarBusqueda() {

    inicio();


    buscador.focus();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   BUSCAR RÁPIDO
========================================================= */

function buscarRapido(
    texto
) {

    inicio();


    buscador.value =
        texto;


    clearSearch.style.display =
        "block";


    buscarDocumentos(
        texto.toLowerCase()
    );


    buscador.focus();

}


/* =========================================================
   LIMPIAR BÚSQUEDA
========================================================= */

clearSearch.addEventListener(
    "click",
    () => {

        buscador.value =
            "";


        clearSearch.style.display =
            "none";


        mostrarDocumentosIniciales();


        document.getElementById(
            "status"
        ).textContent =
            `${documentos.length} documentos disponibles`;


        buscador.focus();

    }
);


/* =========================================================
   FAVORITOS
========================================================= */

function obtenerFavoritos() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "manualFavoritos"
            ) || "[]"
        );

    } catch (error) {

        return [];

    }

}


function guardarFavoritos(
    favoritos
) {

    localStorage.setItem(
        "manualFavoritos",
        JSON.stringify(
            favoritos
        )
    );

}


function esFavoritoPorRuta(
    ruta
) {

    const favoritos =
        obtenerFavoritos();


    const normalizada =
        normalizarRuta(
            ruta
        );


    return favoritos.some(
        item =>
            normalizarRuta(
                item
            ) === normalizada
    );

}


function alternarFavorito(
    ruta
) {

    const favoritos =
        obtenerFavoritos();


    const normalizada =
        normalizarRuta(
            ruta
        );


    const indice =
        favoritos.findIndex(
            item =>
                normalizarRuta(
                    item
                ) === normalizada
        );


    if (
        indice >= 0
    ) {

        favoritos.splice(
            indice,
            1
        );

    } else {

        favoritos.push(
            ruta
        );

    }


    guardarFavoritos(
        favoritos
    );


    mostrarFavoritos();


    if (documentoActual) {

        actualizarBotonFavorito();

    }

}


function mostrarFavoritos() {

    const contenedor =
        document.getElementById(
            "favoritos"
        );


    const favoritos =
        obtenerFavoritos();


    contenedor.innerHTML =
        "";


    if (!favoritos.length) {

        contenedor.innerHTML = `

            <div class="empty-special">
                No hay favoritos
            </div>

        `;

        return;

    }


    favoritos.forEach(
        ruta => {

            const documento =
                buscarDocumentoPorRuta(
                    ruta
                );


            if (!documento) {
                return;
            }


            const elemento =
                document.createElement(
                    "div"
                );


            elemento.className =
                "special-item";


            elemento.innerHTML = `

                <span>
                    ⭐
                </span>

                <span>
                    ${escapeHTML(
                        documento.nombre
                    )}
                </span>

            `;


            elemento.addEventListener(
                "click",
                () =>
                    abrirDocumento(
                        documento.path
                    )
            );


            contenedor.appendChild(
                elemento
            );

        }
    );

}


document.getElementById(
    "favoriteDocument"
).addEventListener(
    "click",
    () => {

        if (!documentoActual) {
            return;
        }


        alternarFavorito(
            documentoActual.path
        );

    }
);


function actualizarBotonFavorito() {

    if (!documentoActual) {
        return;
    }


    const favorito =
        esFavoritoPorRuta(
            documentoActual.path
        );


    document.getElementById(
        "favoriteDocument"
    ).textContent =
        favorito
            ? "★ Favorito"
            : "☆ Favorito";

}


/* =========================================================
   HISTORIAL
========================================================= */

function obtenerHistorial() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "manualHistorial"
            ) || "[]"
        );

    } catch (error) {

        return [];

    }

}


function agregarHistorial(
    documento
) {

    let historial =
        obtenerHistorial();


    historial =
        historial.filter(
            item =>
                item.path !==
                documento.path
        );


    historial.unshift({

        path:
            documento.path,

        nombre:
            documento.nombre

    });


    historial =
        historial.slice(
            0,
            8
        );


    localStorage.setItem(
        "manualHistorial",
        JSON.stringify(
            historial
        )
    );


    mostrarHistorial();

}


function mostrarHistorial() {

    const contenedor =
        document.getElementById(
            "historial"
        );


    const historial =
        obtenerHistorial();


    contenedor.innerHTML =
        "";


    if (!historial.length) {

        contenedor.innerHTML = `

            <div class="empty-special">
                No hay documentos recientes
            </div>

        `;

        return;

    }


    historial.forEach(
        item => {

            const documento =
                buscarDocumentoPorRuta(
                    item.path
                );


            if (!documento) {
                return;
            }


            const elemento =
                document.createElement(
                    "div"
                );


            elemento.className =
                "special-item";


            elemento.innerHTML = `

                <span>
                    🕘
                </span>

                <span>
                    ${escapeHTML(
                        documento.nombre
                    )}
                </span>

            `;


            elemento.addEventListener(
                "click",
                () =>
                    abrirDocumento(
                        documento.path
                    )
            );


            contenedor.appendChild(
                elemento
            );

        }
    );

}


/* =========================================================
   MENÚ MOBILE
========================================================= */

document.getElementById(
    "menuButton"
).addEventListener(
    "click",
    () => {

        sidebar.classList.toggle(
            "open"
        );


        sidebarOverlay.classList.toggle(
            "show"
        );

    }
);


sidebarOverlay.addEventListener(
    "click",
    cerrarSidebar
);


function cerrarSidebar() {

    sidebar.classList.remove(
        "open"
    );


    sidebarOverlay.classList.remove(
        "show"
    );

}


/* =========================================================
   BÚSQUEDA SIDEBAR
========================================================= */

document.getElementById(
    "sidebarSearch"
).addEventListener(
    "input",
    function () {

        const texto =
            this.value
                .toLowerCase()
                .trim();


        document
            .querySelectorAll(
                "#categorias .sidebar-category"
            )
            .forEach(
                categoria => {

                    const visible =
                        categoria
                            .textContent
                            .toLowerCase()
                            .includes(
                                texto
                            );


                    categoria.style.display =
                        visible
                            ? "block"
                            : "none";


                    if (
                        texto &&
                        visible
                    ) {

                        const contenido =
                            categoria.querySelector(
                                ".sidebar-category-content"
                            );


                        const titulo =
                            categoria.querySelector(
                                ".sidebar-category-title"
                            );


                        if (contenido) {

                            contenido.classList.add(
                                "open"
                            );

                        }


                        if (titulo) {

                            titulo.classList.add(
                                "expanded"
                            );

                        }

                    }

                }
            );

    }
);


/* =========================================================
   ACCESOS RÁPIDOS
========================================================= */

document
    .querySelectorAll(
        ".quick-button"
    )
    .forEach(
        boton => {

            boton.addEventListener(
                "click",
                () => {

                    buscarRapido(
                        boton.dataset.search
                    );

                }
            );

        }
    );


/* =========================================================
   NAVEGACIÓN
========================================================= */

document.getElementById(
    "navInicio"
).addEventListener(
    "click",
    inicio
);


document.getElementById(
    "navBuscar"
).addEventListener(
    "click",
    activarBusqueda
);


document.getElementById(
    "backButton"
).addEventListener(
    "click",
    inicio
);


/* =========================================================
   BOTÓN VOLVER ARRIBA
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 350
        ) {

            backToTop.classList.add(
                "visible"
            );

        } else {

            backToTop.classList.remove(
                "visible"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================================
   ABRIR DOCUMENTO DESDE HASH
========================================================= */

function abrirDocumentoDesdeHash() {

    const hash =
        location.hash;


    if (
        !hash.startsWith(
            "#documento="
        )
    ) {

        return;

    }


    const ruta =
        decodeURIComponent(
            hash.substring(
                "#documento=".length
            )
        );


    const documento =
        buscarDocumentoPorRuta(
            ruta
        );


    if (documento) {

        abrirDocumento(
            documento.path
        );

    }

}


/* =========================================================
   INICIAR APLICACIÓN
========================================================= */

iniciar()
    .then(
        () => {

            abrirDocumentoDesdeHash();

        }
    );
