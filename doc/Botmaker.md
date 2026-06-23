# Botmaker

## ¿Qué es Botmaker?

Botmaker es una plataforma de comunicación digital que centraliza la recepción de conversaciones provenientes de múltiples canales, tales como:

- WhatsApp
- Facebook
- Facebook Messenger
- Instagram
- Instagram Direct
- Telegram
- Webchat

> A futuro podrían incorporarse nuevos canales.

Gracias a esta centralización, los clientes pueden comunicarse mediante cualquiera de los canales oficiales de Eternet y los representantes gestionan todas las conversaciones desde una única plataforma.

---

# Recorrido Visual

## Pantalla Principal

Una vez iniciada la sesión con la cuenta asignada, encontraremos tres sectores principales:

### Menú de navegación

Ubicado sobre el margen izquierdo.

La cantidad de opciones dependerá de los permisos del usuario. Habitualmente los representantes tienen acceso a:

- Chats
- Respuestas rápidas y Stickers
- Audiencias

### Listado de chats

Ubicado en la columna izquierda.

Permite visualizar:

- Conversaciones activas.
- Filtros.
- Herramientas de búsqueda.

### Chat seleccionado

Ubicado en el centro.

Muestra la conversación actualmente abierta.

### Información del contacto

Ubicada en el lateral derecho.

Contiene:

- Datos del cliente.
- Variables.
- Etiquetas.
- Notas internas.

---

## Vista General

<img width="1917" height="974" alt="image" src="https://github.com/user-attachments/assets/ffdd08d1-a157-45e4-8bad-df9a3895ca66" />


---

# Listado de Chats

Dentro del listado podemos visualizar:

- Nombre del contacto o razón social.
- Plataforma utilizada.
- Tiempo transcurrido desde el último mensaje.
- Estado de actividad.
- Iniciales del agente asignado.
- Estado del bot.

---

## Estados según tiempo de inactividad

| Color | Tiempo |
|---------|---------|
| 🟢 Verde | 0 a 5 minutos |
| 🟡 Amarillo | 5 a 10 minutos |
| 🔴 Rojo | Mas de 10 minutos |

---

## Agente asignado

Cuando un chat se encuentra asignado, se muestran las iniciales del representante.

<img width="202" height="71" alt="image" src="https://github.com/user-attachments/assets/ff55d87e-4c41-4abc-a32a-82f3d15e2839" />


---

## Bot desactivado

Cuando el chatbot está apagado aparece un indicador rojo.

<img width="100" height="100" alt="image" src="https://github.com/user-attachments/assets/76b400b5-0865-446b-863b-68c709dd0770" />

---

# Búsqueda de Chats

Es posible aplicar filtros para localizar conversaciones específicas.

### Buscar chats cerrados

Actualmente solo es posible buscar conversaciones cerradas de WhatsApp.

Procedimiento:

1. Ingresar el número completo incluyendo código de país.
2. Seleccionar el filtro **Usuarios con Texto**.

**Ejemplo:**

```text
+549XXXXXXXXXX
```

<img width="661" height="233" alt="image" src="https://github.com/user-attachments/assets/ddb63c11-3977-419e-80a9-bc16e177b5e1" />


---

# Chat Seleccionado

En la parte superior de cada conversación se muestran distintos accesos rápidos.

## Acciones disponibles

| Acción | Descripción |
|----------|----------|
| Desuscribir cliente | Impide el envío de notificaciones por WhatsApp |
| Marcar como corporativo | Asigna prioridad especial |
| Coordinar visita | Uso exclusivo de Coordinación |
| Cerrar conversación | Permite tipificar el cierre |
| Activar/Desactivar bot | Habilita o deshabilita respuestas automáticas |
| Menú de opciones | Acciones adicionales |

---

## Íconos

### Desuscribir cliente

<img width="100" height="100" alt="image" src="https://github.com/user-attachments/assets/eb6a1104-9aa5-45d2-852e-84431d5eef14" />


---

### Cliente corporativo

<img width="100" height="100" alt="image" src="https://github.com/user-attachments/assets/cdd9e965-139f-4a38-80db-c856e266f76a" />


---

### Coordinar visita

<img width="100" height="100" alt="image" src="https://github.com/user-attachments/assets/0beb3fa5-ca21-4ee7-87af-52802bb72fb9" />


---

### Cerrar conversación

**[INSERTAR IMAGEN: Ícono cerrar conversación]**

```text
Imagen: 183988090-d3dd1fe8-f499-4961-bb8a-fac37edcd31e
```

#### Opciones de cierre

- Conversación finalizada.
- Conversación abandonada por el usuario.
- Conversación finalizada (No clientes).

---

### Activar / Desactivar Bot

<img width="100" height="100" alt="image" src="https://github.com/user-attachments/assets/6b3a3720-eae0-4e82-a860-8cf29aea3712" />
<img width="100" height="100" alt="image" src="https://github.com/user-attachments/assets/3762534b-d52e-4a8a-b1a6-f35dcbecfe2c" />


---

### Menú de opciones

<img width="100" height="100" alt="image" src="https://github.com/user-attachments/assets/18e7fd97-8fe4-4c7f-9139-68ec5fc86da4" />


---

# Envío de Mensajes

Botmaker permite enviar:

- Texto
- Imágenes
- Audios
- PDFs
- Archivos
- Emojis
- Stickers

<img width="279" height="28" alt="image" src="https://github.com/user-attachments/assets/e8b54063-bd7f-4b2b-b237-962fc338df98" />


---

## Formato para WhatsApp

| Formato | Sintaxis |
|----------|----------|
| Negrita | `*Texto*` |
| Cursiva | `_Texto_` |
| Tachado | `~Texto~` |

---

## Respuestas rápidas

Cuando el cuadro de texto se encuentra vacío:

- Presionar `Enter`.
- O hacer clic en **Enviar**.

Se desplegará el listado de respuestas rápidas configuradas.

---

# Datos del Chat Seleccionado

En el lateral derecho se visualiza:

## Información general

- Nombre del contacto.
- Razón social (si está identificado).
- Etiquetas.
- Temas.
- Notas.

---

## Notas

Las notas:

- Se pueden crear.
- Se pueden editar.
- Se pueden eliminar.

Al agregarlas se visualizan dentro del chat mediante una nota amarilla visible únicamente para representantes.

---

## Variables

Botmaker registra automáticamente:

- Canal.
- Número telefónico.
- País.
- Datos de autenticación.

Además almacena hasta tres identificadores distintos:

- DNI
- CUIT
- Número de Cliente

Los representantes pueden modificarlos para normalizar la identificación del usuario.

---

# Co-Pilot

## ¿Qué es Co-Pilot?

- Botmaker Co-Pilot es una solución de inteligencia artificial que combina la tecnología de ChatGPT de OpenAI con los modelos de inteligencia artificial propios de Botmaker. Esta funcionalidad ayuda a los agentes a responder a las conversaciones de los usuarios de manera eficiente y precisa. De este modo, los agentes de atención pueden interactuar de manera más eficiente, ofreciendo respuestas más precisas y personalizadas en mucho menos tiempo. Asimismo, esta tecnología está diseñada para brindar respuestas bien pensadas y contextuales, mejorando continuamente en base a las interacciones con los usuarios.

## Ventajas y beneficios

La funcionalidad promete un aumento en la velocidad de atención de hasta 9 veces.

- Velocidad y eficiencia: Permite brindar respuestas rápidas y precisas a preguntas de los clientes con inteligencia artificial mediante disparadores de lenguaje natural.
- Optimización del tiempo: Permite ahorrar tiempo a los agentes y liberar recursos para realizar otras tareas.
- Mejora en la atención al cliente: Proporciona respuestas personalizadas e inmediatas mejorando la experiencia del usuario y aumentando su satisfacción 24/7


### [Video de ejemplo](https://www.youtube.com/watch?v=rPERLZcZs5E)

- ![image](https://user-images.githubusercontent.com/63564990/220926462-9855910a-8074-471c-b8f2-b317d8784abd.png)
   - Cabe destacar que las respuestas generadas por la IA pueden ser editadas antes de enviarse.

---

# Registro del Contacto Telefónico

Actualmente el proceso de identificación se realiza automáticamente.

Cuando un cliente inicia conversación:

1. Botmaker detecta su número.
2. Busca clientes asociados.
3. Muestra opciones para autenticarse.
4. El usuario selecciona la correcta.
5. Se ejecuta automáticamente el proceso de identificación (Set Name).

---

## Ejemplo de autenticación

<img width="1133" height="477" alt="image" src="https://github.com/user-attachments/assets/70f56007-16b2-4231-b12d-a648d697d63b" />


---

## Casos donde NO se registra automáticamente

Puede ocurrir cuando:

- Iniciamos nosotros el contacto.
- El número no existe en la base de contactos.
- El proceso de autenticación falla.

En estos casos debe utilizarse el procedimiento de registro manual mediante el botón del **lápiz**.


# Registro Manual de Clientes en Botmaker

## Introducción

Si bien el registro de clientes se encuentra automatizado, existen situaciones en las que un contacto no pasa por el proceso automático. Algunos ejemplos son:

- Cuando el número de teléfono no está asociado a ningún cliente.
- Cuando iniciamos nosotros el contacto con el cliente.
- Cuando el registro automático falla por algún motivo.

Para facilitar estos casos, Botmaker cuenta con una herramienta de acceso rápido que permite registrar manualmente al cliente y ejecutar el proceso de identificación (`SET NAME`) de forma simple.

---

## Procedimiento

Dentro del chat veremos un ícono con forma de **lápiz ✏️**.

Para registrar manualmente un cliente:

1. Hacer clic en **Editar** dentro de las variables del contacto.
2. En el campo **"Número de cliente Actual"**, ingresar un dato válido:
   - Número de cliente.
   - DNI.
   - CUIT.
3. Confirmar el cambio haciendo clic en el botón **☑️**.
4. Finalmente, hacer clic sobre el ícono del **lápiz ✏️**.

Una vez realizado este paso, el sistema ejecutará automáticamente el proceso de identificación y actualizará el nombre del contacto.

---

<img width="1196" height="760" alt="image" src="https://github.com/user-attachments/assets/103e57da-de44-481d-a5ef-e5b31afa5759" />


<img width="400" height="439" alt="image" src="https://github.com/user-attachments/assets/e5030d45-b7af-4123-8367-a3a2b480069d" />


---

## Consideraciones

- El número ingresado debe corresponder a un cliente existente en el sistema.
- Se puede utilizar indistintamente DNI, CUIT o Número de Cliente.
- El cambio de nombre se realiza únicamente después de presionar el botón del lápiz.
- Este procedimiento debe utilizarse únicamente cuando el registro automático no haya identificado correctamente al cliente.

---

# Registro Manual de Clientes en Botmaker

## Introducción

Si bien el registro del contacto telefónico se encuentra automatizado, existen situaciones en las que un cliente no pasa por el proceso de identificación automática.

Algunos ejemplos son:

- El número de teléfono no está asociado a ningún cliente.
- El representante inicia el contacto con el cliente.
- El cliente no completa correctamente el proceso de autenticación.

Para simplificar estos casos, se incorporó un acceso rápido dentro de Botmaker que permite registrar manualmente al cliente y ejecutar automáticamente el proceso de **Set Name**.

---

# Procedimiento

Dentro del chat veremos un ícono con forma de **lápiz**.

<img width="1196" height="760" alt="image" src="https://github.com/user-attachments/assets/7f0089da-4c20-4fe9-9076-a667b4914a73" />


Para registrar correctamente al cliente:

### 1. Editar las variables

Hacer clic en **Editar** dentro de la sección de variables del chat.

### 2. Completar el identificador

En el campo **Número de cliente Actual** ingresar alguno de los siguientes datos válidos:

- Número de Cliente
- DNI
- CUIT

### 3. Confirmar el cambio

Presionar el botón de confirmación **☑️** para guardar la modificación.

### 4. Ejecutar el registro

Hacer clic sobre el ícono del **lápiz**.

Botmaker realizará automáticamente el proceso de identificación y actualizará el nombre del contacto con los datos del cliente correspondiente.

---

<img width="400" height="439" alt="image" src="https://github.com/user-attachments/assets/32eba67a-8fb8-4b05-8479-c5d15f103191" />


---

# Resultado esperado

Una vez finalizado el procedimiento:

- El contacto quedará correctamente identificado.
- Se actualizará automáticamente el nombre mostrado en Botmaker.
- El cliente podrá ser reconocido en futuras interacciones.
- Se facilitará la trazabilidad y gestión de consultas dentro de la plataforma.

---

# Respuestas Rápidas en Botmaker

## Introducción

Las **respuestas rápidas** son mensajes predeterminados que permiten a los representantes agilizar la atención al cliente, evitando tener que redactar manualmente textos repetitivos.

Su uso mejora la eficiencia, reduce errores y estandariza la comunicación dentro del equipo.

---

# Acceso a la herramienta

Para acceder a las respuestas rápidas:

1. Ir al menú lateral izquierdo.
2. Entrar en **Conversaciones**.
3. Seleccionar **Respuestas rápidas y Stickers**.

<img width="437" height="284" alt="image" src="https://github.com/user-attachments/assets/fdfee7ad-6ce2-4b82-8827-ec5a000e8841" />


---

# Creación de una respuesta rápida

Para crear un nuevo mensaje:

1. Hacer clic en el botón **+ Agregar**.
2. Completar el formulario correspondiente.

<img width="550" height="436" alt="image" src="https://github.com/user-attachments/assets/7d6c398a-9708-40a4-a0a9-7a145e3f2fa9" />

---

## Campos del formulario

### Nombre del atajo
Identificador interno del mensaje.

Ejemplo:
- `saludo_inicial`
- `cierre_reclamo`

---

### Texto del mensaje

Contenido que se enviará al cliente al utilizar el atajo.

---

### Global

Permite definir si la respuesta rápida será:

- ✔️ **Global**: visible para todos los representantes.
- ❌ No global: visible solo para el usuario que la creó.

---

### Canales

Define en qué canales estará disponible.

> Recomendación: dejar siempre en **TODOS**.

---

### Colas de atención

Permite restringir el uso del mensaje por sector:

- Atención al Cliente
- Administración
- Comercial
- Otros

Cada cola representa un área específica de la empresa.

---

# Ejemplos

## Mensaje global

Disponible para todos los sectores.

<img width="549" height="496" alt="image" src="https://github.com/user-attachments/assets/baaf9b37-be27-4f18-80e5-c7c317cf3f5e" />


---

## Mensaje privado

Visible únicamente para el usuario que lo creó.

<img width="552" height="440" alt="image" src="https://github.com/user-attachments/assets/7d101f86-be6d-4744-b542-5fd6d47fb046" />

---

# Buenas prácticas

- Usar nombres claros y descriptivos.
- Mantener mensajes cortos y reutilizables.
- Evitar duplicados entre atajos.
- Revisar periódicamente los mensajes existentes.
- Usar “Global” solo cuando sea necesario estandarizar comunicación.

---

# Grupos de Usuarios en Botmaker

## Introducción

Botmaker permite la creación de **Grupos de Usuarios**, los cuales pueden utilizarse posteriormente para el envío de notificaciones masivas o segmentadas.

Estos grupos pueden ser:

- 📌 **Estáticos**: los usuarios se definen una sola vez y no cambian.
- 📌 **Dinámicos**: los usuarios se actualizan automáticamente según condiciones definidas.

Además, es posible crear grupos utilizando contactos ya existentes en Botmaker o importarlos mediante un archivo Excel.

---

# Creación de un nuevo grupo

Para crear un grupo de usuarios:

1. Acceder a la sección:  
   👉 https://go.botmaker.com/#/contactGroups

2. Hacer clic en **+ Nuevo grupo de usuarios**.

---

# Configuración del grupo

En la pestaña **Configuración**, se deben completar los campos obligatorios.

### Método recomendado: Excel

La forma más simple de creación es mediante la carga de un archivo Excel.

El archivo debe incluir:

- Número de WhatsApp (formato con 549)
- Variables adicionales necesarias para la notificación

Estas variables se utilizan luego para completar la plantilla de mensajes.
<img width="954" height="624" alt="image" src="https://github.com/user-attachments/assets/53b8e498-c7eb-4e0c-be73-3fc182315641" />

---

# Configuración de usuarios

Al avanzar a la pestaña **Usuarios**:

### 1. Selección de plantilla

Se debe elegir una plantilla de WhatsApp que se utilizará para el envío de notificaciones.

> La plantilla puede modificarse posteriormente si el grupo requiere múltiples tipos de notificación.

---

### 2. Mapeo de variables

Se deben asociar las columnas del Excel con las variables de la plantilla seleccionada.

Esto permite que cada usuario reciba el mensaje personalizado correctamente.

---

### 3. Carga del archivo

Se adjunta el archivo Excel y el sistema genera una **vista previa** de los datos.

<img width="956" height="707" alt="image" src="https://github.com/user-attachments/assets/fabd131f-54b9-42a1-b1ce-cd87d2a2b17c" />

<img width="931" height="638" alt="image" src="https://github.com/user-attachments/assets/51f30505-12fd-43bf-85f6-870e1893565b" />

---

# Validación del grupo

Antes de finalizar:

- Se verifica que los datos estén correctamente mapeados.
- Se revisa la vista previa de usuarios.

⚠️ Los números inválidos o incorrectos aparecerán en rojo y **no serán incluidos en el grupo**.

---

# Guardado

Una vez validada la información:

- Se guardan los cambios.
- El grupo queda listo para ser utilizado en campañas o notificaciones.

---

# Recomendaciones

- Usar siempre formato internacional (549...) para WhatsApp.
- Verificar el Excel antes de subirlo.
- Evitar duplicados en la lista de contactos.
- Nombrar los grupos de forma clara y descriptiva.

---

# Campañas y Notificaciones en Botmaker

## Introducción

Una vez configurado el **grupo de usuarios**, el siguiente paso es gestionar el envío de comunicaciones masivas mediante **Campañas y Notificaciones**.

👉 Acceso directo: https://go.botmaker.com/#/campaigns

Desde esta sección podemos buscar campañas existentes o crear nuevas según el tipo de notificación que necesitemos enviar.

---

# Selección o creación de campaña

## 1. Buscar campaña existente

Antes de crear una nueva campaña, se debe verificar si ya existe una con el mismo objetivo o tipo de comunicación.

---

## 2. Crear nueva campaña

Si no existe una campaña adecuada:

- Hacer clic en **+ Nueva Campaña** (esquina superior derecha).
- Completar los datos solicitados.

<img width="603" height="491" alt="image" src="https://github.com/user-attachments/assets/48a85cbf-e6be-4c7a-9d11-c815216a0112" />


---

## 3. Crear notificación dentro de la campaña

Dentro de la campaña seleccionada:

- Hacer clic en **+ Nueva Notificación**.

---

# Configuración de la notificación

## Nombre de la campaña

- Debe ser **único**.
- Se recomienda incluir la fecha si la campaña es periódica.

Ejemplo:
- `Corte de servicio - 23/06/2026`

---

## Grupo de usuarios

Seleccionar el **grupo previamente creado**.

Una vez seleccionado:

- Se puede previsualizar la cantidad de usuarios.
- Se verifica el canal de envío configurado.

---

# Mensaje

En esta sección:

- Se selecciona la **plantilla de WhatsApp**.
- Se puede cambiar si la campaña requiere otro mensaje.
- Se visualiza una **previsualización del contenido**.

⚠️ Si faltan datos en el grupo de usuarios, aparecerá una advertencia en rojo.

<img width="424" height="120" alt="image" src="https://github.com/user-attachments/assets/2b165c77-320c-424e-a130-8195d3419d6c" />


---

## Importante

La plantilla utilizada debe cumplir con:

- Categoría: **Notificaciones**
- Sin modificaciones posteriores a su aprobación

❗ Si no cumple estas condiciones, el envío puede fallar.

---

# Programación del envío

Se puede elegir entre:

- ⏰ Enviar inmediatamente
- 📅 Programar fecha y hora futura
- 🔁 Envíos periódicos

---

# Confirmación

Antes del envío final, el sistema muestra:

- Resumen de la campaña
- Cantidad de usuarios impactados
- Fecha y hora de envío

---

# Seguimiento de la campaña

Una vez enviada, se puede monitorear en tiempo real:

- Enviados
- Entregados
- Leídos
- Fallidos

<img width="975" height="397" alt="image" src="https://github.com/user-attachments/assets/c062e7c7-417b-4629-9868-01d02d48babe" />


---

## Exportación

También es posible descargar un reporte en formato **TSV** con el detalle de la campaña.

---

# Buenas prácticas

- Verificar siempre el grupo antes de enviar.
- Evitar duplicar campañas.
- Usar nombres claros y fechados.
- Revisar la plantilla antes de confirmar el envío.

---

# URLs cortas (etn.ar)

## Introducción

En Eternet utilizamos URLs cortas con el dominio **etn.ar** para facilitar la comunicación con clientes, especialmente en canales como WhatsApp (Botmaker).

Esto permite:

- Mensajes más breves
- Mayor legibilidad
- Menor cantidad de caracteres
- Mejor experiencia para el cliente

Ejemplo:

- URL completa: `https://www.eternet.com.ar/oficina-virtual/mis-facturas`
- URL corta: `https://etn.ar/Pagos`

---

# Listado de URLs cortas

## Redirecciones oficiales

| URL corta | URL destino |
|----------|-------------|
| https://etn.ar/Ver-mis-facturas | https://www.eternet.com.ar/oficina-virtual/mis-facturas |
| https://etn.ar/Pagos | https://www.eternet.com.ar/oficina-virtual/mis-facturas |
| https://etn.ar/Medios-de-pago | https://www.eternet.com.ar/lugares-de-pago |
| https://etn.ar/Rapipago-en-Whatsapp | https://wa.me/5491126217274?text=Hola,%20quiero%20pagar%20Eternet%20sin%20factura |
| https://etn.ar/Ripsa | https://www.ripsa.com.ar/PagosOnline |
| https://etn.ar/Rapipago | https://pagar.rapipago.com.ar/rapipagoWeb/pagos |
| https://etn.ar/Prontopago | https://pagoweb.prontopago.com.ar |
| https://etn.ar/firewall | https://www.eternet.com.ar/oficina-virtual/configurar-firewall |
| https://etn.ar/stream-tv | https://www.directvgo.com/ar/iniciar-sesion |
| https://etn.ar/debito | https://www.eternet.com.ar/oficina-virtual/adherir-debito |
| https://etn.ar/mudarme | https://www.eternet.com.ar/oficina-virtual/mudar-servicio |
| https://etn.ar/PagoFacil | https://pagosenlinea.pagofacil.com.ar |
| https://etn.ar/medios-de-contacto | https://www.eternet.com.ar/oficina-virtual/mis-medios-de-contacto |

---

# Recomendaciones de uso

- Usar siempre URLs cortas en canales de mensajería (Botmaker, WhatsApp).
- Verificar que el enlace corresponda al servicio correcto antes de enviarlo.
- Evitar escribir URLs completas si existe versión corta disponible.
- Mantener consistencia en la forma de escritura (respetar mayúsculas/minúsculas del slug).

---

# Nota

Algunas URLs pueden redirigir a servicios externos (ej: Rapipago, Ripsa, DirectTV Go), por lo que siempre se debe verificar su vigencia antes de utilizarlas en campañas o respuestas masivas.

---

# Tabla de ciudades para funnels

| ID Ciudad | Nombre                          |
|-----------|---------------------------------|
| 1         | Tres Arroyos                     |
| 2         | San Francisco                    |
| 3         | Orense                           |
| 4         | Claromeco                        |
| 5         | Chaves                           |
| 6         | Cascallares                      |
| 7         | Copetonas                        |
| 8         | Oriente                           |
| 9         | El Carretero                     |
| 10        | San Cayetano                      |
| 11        | De la Garma                      |
| 12        | Aparicio                         |
| 13        | Vazquez                           |
| 14        | Indio Rico                        |
| 20        | Coronel Dorrego                  |
| 21        | Pago Chico                        |
| 22        | Bahia Blanca                     |
| 23        | Juan N. Fernandez                 |
| 28        | Balneario Orense                 |
| 34        | Reta                              |
| 38        | El Perdido                       |
| 74        | Las Oscuras                       |
| 91        | Ochandio                          |
| 132       | Benito Juarez                    |
| 162       | Ramos Otero                       |
| 175       | Cerri                            |
| 176       | Medanos                           |
| 193       | La Union                          |
| 227       | Establecimiento Rural Flensborg  |
| 250       | Balcarce                         |

---

# Categorías de conversaciones (WhatsApp - Botmaker)

## Introducción

A partir del **1 de junio de 2023**, WhatsApp establece un nuevo esquema de categorización para las conversaciones entre empresas y usuarios.

Estas categorías determinan el tipo de conversación y su costo asociado.

---

# Tipos de conversaciones

## 🟦 Conversaciones iniciadas por la empresa

Requieren que el usuario haya interactuado o dado consentimiento previo.

### 1. Utilidad

Incluyen:

- Notificaciones transaccionales
- Actualizaciones de servicios
- Estados de facturación o procesos en curso
- Confirmaciones posteriores a una acción del cliente

📌 Ejemplo:
- Aviso de factura emitida
- Confirmación de pago
- Estado de instalación o servicio

---

### 2. Autenticación

Se utilizan para:

- Verificación de identidad
- Envío de códigos de acceso (OTP)
- Recuperación de cuentas
- Validación de usuario en procesos de login

📌 Ejemplo:
- Código de verificación para acceso a cuenta

---

### 3. Marketing

Incluye:

- Promociones
- Ofertas comerciales
- Invitaciones a acciones del cliente
- Comunicaciones informativas no transaccionales

📌 Regla clave:
Si no es **Utilidad** ni **Autenticación**, se considera **Marketing**.

---

## 🟩 Conversaciones iniciadas por el usuario

### 4. Servicio

Incluyen todas las conversaciones iniciadas por el cliente para:

- Consultas
- Reclamos
- Soporte técnico
- Gestión de servicios

📌 Ejemplo:
- “No tengo internet”
- “Quiero pagar mi factura”
- “Necesito ayuda con el router”

---

# Costos por conversación (Argentina)

| Categoría | Costo (USD) |
|-----------|-------------|
| Marketing | 0.0618 |
| Utilidad | 0.0408 |
| Autenticación | 0.0367 |
| Servicio | 0.0316 |

---

# Consideraciones importantes

- La correcta categorización impacta directamente en costos.
- Botmaker debe enviar plantillas correctamente clasificadas.
- Conversaciones iniciadas por el usuario siempre caen en categoría **Servicio**.
- Conversaciones iniciadas por la empresa deben seleccionarse correctamente según el objetivo.

---

# Resumen rápido

- 🟦 Empresa inicia → Utilidad / Autenticación / Marketing  
- 🟩 Usuario inicia → Servicio  
- 💰 Cada categoría tiene costo distinto  
