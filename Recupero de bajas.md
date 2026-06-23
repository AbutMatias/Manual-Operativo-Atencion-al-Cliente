# Proceso de recupero de bajas

Ante una solicitud de baja **voluntaria**, y luego de aplicar los intentos de retención establecidos sin éxito, se inicia el **proceso de recupero de clientes**.

Este proceso se gestiona mediante una aplicación en **PowerApps**.

---

# Flujo general del recupero

El proceso se compone de **tres intentos escalonados** de contacto con el cliente.

---

# Primer intento de recupero (Día 2)

## Acción:
- A los **2 días** de registrada la baja, se envía una **plantilla de WhatsApp**.

## Oferta:
- **35% de descuento**
- Por **4 meses**

## Resultado:

### Si el cliente acepta:
- Se envía notificación a **Onboarding**
- Se solicita suspensión de la baja
- Se aplican ajustes en la cuenta

<img width="503" height="313" alt="image" src="https://github.com/user-attachments/assets/cc4d2597-321f-4a2b-bc5c-6012e923d56d" />

---

# Segundo intento de recupero (Día 7)

## Acción:
- A los **7 días** de la baja, se envía una segunda plantilla.

## Oferta:
- **40% de descuento**
- Por **6 meses**

## Resultado:

### Si el cliente acepta:
- Se repite el mismo flujo del primer intento:
  - Notificación a Onboarding
  - Suspensión de baja
  - Ajuste de cuenta
 
<img width="468" height="297" alt="image" src="https://github.com/user-attachments/assets/8ada713d-590c-4ce4-9b5e-8d8b95dadb69" />


---

# Tercer intento de recupero (Día 12)

## Acción:
- A los **12 días** de la baja
- Se realiza **llamada telefónica final**

## Objetivo:
- Último intento de retención
- Identificar correctamente el motivo real de la baja
- Validar coherencia con el motivo registrado por el vendedor

---

## Resultado final:

### Si el cliente acepta:
- Onboarding suspende la baja
- Se aplican ajustes correspondientes

### Si el cliente rechaza:
- Se continúa con el proceso de baja definitivo
- Se coordina retiro de equipos en comodato
- Posible derivación a Coordinación (Interno 644)

---

# Importante

Si el cliente acepta la restitución del servicio:

- Se debe notificar a **Administración**
- Para proceder con la **refacturación correspondiente**
- Hasta resolución del caso documentado en:
  https://github.com/Eternet/SSAK47.Issues/issues/43

  <img width="1746" height="691" alt="image" src="https://github.com/user-attachments/assets/8080b1ff-0bb8-4892-92ab-6aa8ceb4f30e" />


---

# Resumen del flujo

- Día 2 → 35% (WhatsApp)
- Día 7 → 40% (WhatsApp)
- Día 12 → Llamada final
- Si acepta → Onboarding reactiva servicio
- Si rechaza → Baja definitiva + retiro de equipos

---

# Aplicación de Recupero de Bajas

Para gestionar el proceso de **recupero de clientes dados de baja**, contamos con una aplicación desarrollada en **PowerApps**.

🔗 Acceso a la app:  
https://apps.powerapps.com/play/dd4aaaa5-ec83-49fc-b806-29ffeed21057?tenantId=ecd40e14-b48a-4861-9586-38cdc9ee127d&source=portal&screenColor=RGBA%280%2C176%2C240%2C1%29&skipAppMetadata=true#%23

---

# Arquitectura del sistema

La aplicación se encuentra integrada con **SharePoint**, donde se almacena toda la información de seguimiento.

## Listas utilizadas

| Lista | Descripción |
|------|-------------|
| Usuarios | Usuarios habilitados para utilizar la APP |
| Listado de Recupero de bajas | Base principal de seguimiento de gestiones |

---

# Pantalla principal: Gestión de recuperos

La pantalla principal se divide en dos partes:

- **Listado de gestiones (izquierda)**  
- **Detalle de la gestión seleccionada (derecha)**  

Cada registro muestra su **estado actual dentro del proceso de recupero**.
<img width="1636" height="923" alt="image" src="https://github.com/user-attachments/assets/5d4c1c04-f78a-4319-9032-fabf78088aaa" />

---

# Detalle de una gestión

Al seleccionar una gestión, se visualizan y pueden modificarse los siguientes campos:

## Campos editables

- **WhatsApp**
  - Permite modificar el número de contacto
  - Al cambiarlo, el estado vuelve a *“Sin iniciar”*

- **Estado de solicitud de baja**
  - Pendiente
  - Efectivizada

- **Porcentaje de descuento**
  - 35%
  - 40%

- **Cantidad de meses**
  - 4 meses
  - 6 meses

-  **Estado de recupero**

### Estados automáticos:
- **Sin iniciar** → Registro nuevo sin contacto
- **Primer mensaje enviado** → WhatsApp inicial enviado
- **Segundo mensaje enviado** → Segundo contacto realizado

### Estados manuales:
- **Llamada realizada** → Solo luego del segundo mensaje
- **Acepta oferta** → Cliente acepta permanencia
- **Rechaza oferta** → Cliente rechaza propuesta
- **Cancelado** → Error o registro inválido

- **Fecha último contacto**
  - Se actualiza automáticamente en cada cambio de estado

- **Observaciones**
  - Campo libre para notas del caso

---

# Filtros del listado

El listado puede filtrarse por:

## Estado
- Permite ver gestiones según su etapa

## Acciones de contacto

- **Ver todos**
- **En fecha para primer contacto**
  - Estado: *Sin iniciar*
  - ≥ 2 días desde la baja

- **En fecha para segundo contacto**
  - Estado: *Primer mensaje enviado*
  - ≥ 5 días desde contacto

- **En fecha para llamada**
  - Estado: *Segundo mensaje enviado*
  - ≥ 5 días desde último contacto

---

# Envío de WhatsApp

El botón de envío aparece solo si:

- Estado: **Sin iniciar** o **Primer mensaje enviado**
- Hay **descuento seleccionado**
- Hay **cantidad de meses definida**

## Flujo

1. Click en enviar
2. Popup de confirmación con datos del cliente
3. Validación de información
4. Envío del mensaje

El cliente recibe automáticamente la propuesta de recupero.
<img width="1632" height="922" alt="image" src="https://github.com/user-attachments/assets/ccdab693-9d55-43e6-b3e1-60e1f4248e50" />
<img width="751" height="296" alt="image" src="https://github.com/user-attachments/assets/8facd557-6541-46f1-a95e-ab7750c7206f" />


---

# Alta de nuevas gestiones

Desde la pantalla secundaria se pueden crear nuevas gestiones ingresando:

- Datos del cliente
- Contacto WhatsApp
- Propuesta de descuento
- Condiciones del recupero
<img width="1635" height="922" alt="image" src="https://github.com/user-attachments/assets/6c9d7794-0dd8-45e5-8320-40e528a39168" />

Al guardar:
- El registro queda en estado **“Sin iniciar”**
<img width="1629" height="921" alt="image" src="https://github.com/user-attachments/assets/d2b5c184-4c87-4202-be7a-0461b531d884" />

---
