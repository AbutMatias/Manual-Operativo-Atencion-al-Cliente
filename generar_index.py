import json
import re
from pathlib import Path


DOCS_DIR = Path("doc")
OUTPUT_FILE = Path("index.json")


def limpiar_nombre(nombre):

    return re.sub(
        r"\.md$",
        "",
        nombre,
        flags=re.IGNORECASE
    )


def generar_tags(nombre, contenido):

    texto = (
        nombre
        + " "
        + contenido[:5000]
    ).lower()


    palabras = re.findall(
        r"[a-záéíóúñü0-9]{3,}",
        texto
    )


    ignorar = {
        "para",
        "como",
        "desde",
        "esta",
        "este",
        "con",
        "los",
        "las",
        "del",
        "una",
        "uno",
        "por",
        "que",
        "sus",
        "más",
        "más",
        "cliente",
        "servicio",
        "equipo"
    }


    resultado = []


    for palabra in palabras:

        if palabra in ignorar:
            continue

        if palabra not in resultado:
            resultado.append(palabra)


    return resultado[:15]


def generar_indice():

    documentos = []


    if not DOCS_DIR.exists():

        raise FileNotFoundError(
            "No existe la carpeta doc/"
        )


    archivos = sorted(
        DOCS_DIR.rglob("*.md"),
        key=lambda archivo:
            archivo.as_posix().lower()
    )


    for archivo in archivos:

        contenido = archivo.read_text(
            encoding="utf-8"
        )


        ruta = archivo.as_posix()


        nombre = limpiar_nombre(
            archivo.name
        )


        tags = generar_tags(
            nombre,
            contenido
        )


        documentos.append({

            "nombre": nombre,

            "path": ruta,

            "tags": tags,

            "contenido": contenido

        })


    OUTPUT_FILE.write_text(

        json.dumps(
            documentos,
            ensure_ascii=False,
            indent=2
        ),

        encoding="utf-8"

    )


    print(
        f"Índice generado correctamente: {len(documentos)} documentos"
    )


if __name__ == "__main__":

    generar_indice()
