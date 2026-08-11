# Gestión de Problemas Generales o Masivos

## ¿Qué es un problema general o masivo?

Se considera un problema general o masivo cuando varios clientes comienzan a reportar el mismo inconveniente o inconvenientes similares en un período corto de tiempo.

La detección puede ser:

- Preventiva: identificada internamente antes de recibir reclamos.
- Activa: detectada a partir del ingreso de múltiples reclamos de clientes.

---

# Cómo actuar ante un problema general

## Mantener la calma

Lo primero es evitar conclusiones apresuradas.

Debemos:

1. Analizar la información disponible.
2. Intentar identificar patrones comunes.
3. Documentar cualquier dato relevante.
4. Escalar la situación rápidamente si no comprendemos el alcance del problema.

---

## Distribución de tareas

Si ingresan muchos reclamos simultáneamente:

- Una persona continúa respondiendo consultas de clientes.
- Otra persona realiza el análisis técnico e intenta identificar el origen del inconveniente.

Si no es posible realizar un diagnóstico inicial, igualmente se debe informar la situación al referente correspondiente.

---
# Comunicación con Clientes

## Información a solicitar

Realizar preguntas simples y concretas:

### Error observado

- ¿Qué mensaje de error aparece?
- ¿Qué ocurre exactamente?

### Alcance del problema 

- ¿Sucede en todos los dispositivos?
- ¿Sucede solamente en uno?

### Servicios afectados

- ¿Ocurre en todas las páginas o aplicaciones?
- ¿Cuáles funcionan?
- ¿Cuáles no funcionan?

### Datos adicionales

- Marca y modelo del dispositivo.
- Horario aproximado en que comenzó el problema.

---

# Pruebas Técnicas Recomendadas

## Verificar Hotspot

- Revisar registros de conexión.
- Confirmar si el cliente está validando correctamente.

## Si se puede ingresar al router

Realizar:

### Prueba de conectividad

- Ping a Google u otro destino externo.

### Revisión de logs

- Verificar errores o eventos recientes.

### Traceroute

- Realizar trazas hacia los destinos afectados.
- Identificar el salto donde comienza la pérdida.

---

## Comparar con otros clientes 

Buscar clientes con características similares desde NETMAP y WINBOX:

- Mismo rango de IP.
- Misma localidad.
- Mismo NOC.
- Misma tecnología de acceso.

Realizar pruebas equivalentes.

---

## Comparación externa

Siempre que sea posible:

- Probar desde otro proveedor de internet.
- Utilizar una VPN.
- Comparar resultados.

---

# Información a Recolectar

Para identificar patrones comunes registrar:

- Hora del reclamo.
- Localidad.
- Dirección IP.
- Tipo de IP (NAT o pública).
- NOC.
- Tipo de conexión.
- Tipo de router.
- Servicio afectado.
- Descripción del problema.

---

# Durante la Investigación

Mientras el problema continúa:

- Seguir atendiendo reclamos.
- Continuar recopilando información.
- Actualizar la Issue.
- Buscar patrones comunes.
- Compartir hallazgos con los sectores involucrados.

Los clientes con conocimientos técnicos pueden aportar información valiosa para el diagnóstico.

---


# Comunicación Interna

Una comunicación rápida y clara permite reducir tiempos de resolución y evitar reclamos innecesarios.

Ante cualquier duda:

- Informar.
- Escalar.
- Documentar.

No esperar a tener toda la información para reportar una situación potencialmente masiva.

---

## Creación de Issue

Todo problema general debe estar acompañado por una Issue.

La Issue debe contener:

- Descripción del problema.
- Diagnóstico preliminar.
- Alcance estimado.
- Información recopilada hasta el momento.

### Importante

La Issue debe crearse lo antes posible, incluso si todavía se dispone de poca información.

Posteriormente debe actualizarse cada vez que aparezcan nuevos datos relevantes.

- Ante caidas CUALQUIER punto en The Dude, crear Issue en: https://github.com/Eternet/Redes/issues/new?template=Issue+en+blanco.md Y arrobar/poner en copia a BackOffice Tecnico y Atencion a Clientes.

# Ejemplo Issue:
BAHIA BLANCA - hEX PoE Tanque ADP - Sin respuesta



- Una breve explicacion de lo sucedido sumado con una captura de la situacion y se agrega Label de la localidad.



- Se verifica desde WinBox agregando captura y descripcion de lo sucedido.
  

- En este caso al ser del secto Bahia Blanca se verifica desde la web EDES para asegurar si es un corte de luz. (En este caso no lo fue) y se pone en copia a BackOffice Tecnico y Atencion a Clientes.


- Ejemplo desde EDES de caso que sea corte de luz en el area, figura con el tiempo de resolucion informado por EDES:


--- 

# Gestión de inconvenientes generales y creación de reclamos

## 1. Creación del Issue

Cuando se detecta un inconveniente general que afecta a varios clientes, primero se debe crear un **Issue** para registrar y realizar el seguimiento del problema.

### Ejemplo de Issue

**BAHIA BLANCA - hEX PoE Tanque ADP - Sin respuesta**

En el Issue se debe incluir:

* **Título:** Localidad + equipo/sector afectado + inconveniente.
* **Descripción breve:** Explicar qué sucede y desde cuándo se detecta.
* **Captura de pantalla:** Adjuntar evidencia de la situación.
* **Label:** Agregar el label correspondiente a la localidad.



> <img width="989" height="369" alt="image" src="https://github.com/user-attachments/assets/8d4384e0-abd5-4ac6-b2ff-45e5f8bcda72" />
> <img width="1280" height="566" alt="image" src="https://github.com/user-attachments/assets/bd68d3a9-6c39-4a35-9bc5-b5e9ad3cfdba" />
---

### Verificación desde WinBox

Una vez creado el Issue:

1. Ingresar a **WinBox**.
2. Buscar el equipo afectado.
3. Realizar las verificaciones correspondientes.
4. Adjuntar una **captura de WinBox**.
5. Agregar una descripción indicando qué se verificó y cuál fue el resultado.



> <img width="877" height="767" alt="image" src="https://github.com/user-attachments/assets/6215f03f-e321-475b-9a96-cced040877da" />


---

### Verificación de cortes de energía

Cuando el inconveniente corresponde al sector **Bahía Blanca**, se debe verificar también el estado del suministro eléctrico desde la página de **EDES**.

El objetivo es determinar si el inconveniente puede estar relacionado con un corte de energía en la zona.

Si **NO existe un corte de energía**, dejar constancia de la verificación.

Si **EXISTE un corte de energía**, registrar la información proporcionada por EDES, incluyendo el tiempo estimado de resolución informado.


> <img width="1044" height="519" alt="image" src="https://github.com/user-attachments/assets/4321d089-a53f-4a43-bda7-a6913af3e0c8" />

En caso de que exista un corte:


> <img width="853" height="289" alt="image" src="https://github.com/user-attachments/assets/c7448cd5-7806-4efa-9882-4dcc9a1a22ca" />

**Información proporcionada por EDES:**

> *[INDICAR TIEMPO ESTIMADO DE RESOLUCIÓN]*

Se debe poner en copia a:

* **BackOffice Técnico**
* **Atención al Cliente**

---

# 2. Creación del Reclamo

### Primer cliente afectado

El **primer cliente que ingresa con el inconveniente general** será utilizado para crear el nuevo reclamo.

Al crear el reclamo:

1. Crear un **Nuevo Reclamo**.
2. En la descripción, indicar el **título del Issue** creado anteriormente.
3. Seleccionar el sector correspondiente: **Atención al Cliente**.

**📷 Captura de creación del Reclamo:**

> <img width="1919" height="879" alt="image" src="https://github.com/user-attachments/assets/17a51fa9-b0c2-4aea-b2a0-954b5fa4968b" />

**📷 Captura de la descripción del Reclamo:**

> <img width="966" height="760" alt="image" src="https://github.com/user-attachments/assets/3a115977-bb65-4aba-8850-4fdb9872d67e" />

---

# 3. Agregar clientes afectados al Reclamo general

Cuando otros clientes informen el mismo inconveniente, **no es necesario crear un reclamo independiente para cada uno**.

Se deben asociar al reclamo general ya creado.

### Procedimiento

1. Ingresar a la pestaña **Reclamos**.
2. Hacer **click derecho → Abrir Consulta**.
3. Se abrirá una planilla con los reclamos generados.
4. Filtrar por la **fecha en la que fue creado el reclamo general**.
5. Buscar el reclamo creado anteriormente.
6. Hacer **click derecho → Agregar Cliente al Reclamo**.
7. Seleccionar el cliente afectado.

**📷 Captura - Pestaña Reclamos:**

> <img width="1904" height="847" alt="image" src="https://github.com/user-attachments/assets/22b40b07-25a0-44db-a28d-e81011d3b271" />

**📷 Captura - Abrir Consulta:**

> <img width="1791" height="870" alt="image" src="https://github.com/user-attachments/assets/3d8b3f85-8566-4e8c-80f9-d0a8a4e4d637" />

**📷 Captura - Filtro por fecha:**

> <img width="1626" height="667" alt="image" src="https://github.com/user-attachments/assets/3348de41-bdb3-402d-9e79-9303f6322c02" />

**📷 Captura - Agregar Cliente al Reclamo:**

> <img width="1829" height="483" alt="image" src="https://github.com/user-attachments/assets/d8a8ea91-b8eb-489a-a888-5debf28fdcc4" />

---

# 4. Creación del mensaje general

El mensaje general será enviado a los clientes afectados.

Se debe crear y alojar en el grupo de **Teams de Atención al Cliente**, para que los compañeros puedan utilizarlo al momento de informar a los clientes.

El mensaje debe utilizar el **mismo número del reclamo creado anteriormente en SSKA**.

**📷 Captura - Mensaje general en Teams - Captura - Número de Reclamo en SSKA:**

> <img width="929" height="259" alt="image" src="https://github.com/user-attachments/assets/e4e6a5b6-79a0-4f0f-8032-cb66970efd99" />


---

# 5. Informar por WhatsApp

Una vez registrado el inconveniente, se debe informar al sector correspondiente mediante WhatsApp.

### Grupo REDES

Los inconvenientes relacionados con la red deben informarse en el grupo **REDES**.

El mensaje debe ser:

* Conciso.
* Claro.
* Incluir el **link del Issue creado anteriormente**.
* Indicar brevemente qué está sucediendo.

**📷 Captura - Comunicación en grupo REDES:**

> <img width="690" height="405" alt="image" src="https://github.com/user-attachments/assets/042aa612-f1bc-4040-9258-24705e48013d" />

### Grupo SERVIDORES

En casos de caídas de **Hotspots**, **CRF** o casos extremos relacionados con servidores, se debe informar en el grupo **SERVIDORES**.


---

# Flujo resumido

**Detectar inconveniente general**
↓
**Crear Issue**
↓
**Realizar verificaciones técnicas en WinBox**
↓
**Verificar corte de energía cuando corresponda**
↓
**Crear reclamo con el primer cliente afectado**
↓
**Relacionar el Issue con el reclamo**
↓
**Agregar los demás clientes afectados al mismo reclamo**
↓
**Crear mensaje general en Teams**
↓
**Informar por WhatsApp al sector correspondiente**
↓
**Realizar seguimiento hasta la resolución**


---

# Importante

Cuando ocurra un problema general que no esté correctamente documentado:

- El sector involucrado deberá generar documentación nueva o mejorar la existente.
- Puede solicitar colaboración a los equipos que participaron en la resolución.
- La documentación debe quedar disponible para futuros incidentes similares.
