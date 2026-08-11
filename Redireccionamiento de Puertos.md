# Guía para el Proceso de Redireccionamiento de Puertos (Port Forwarding)

## Introducción

En Eternet, el redireccionamiento de puertos permite que un cliente pueda acceder desde internet a dispositivos dentro de su red local, como:

- Cámaras de seguridad
- DVR / NVR
- Consolas de videojuegos
- Servidores o PC

Este proceso requiere dos partes:

1. Configuración en nuestros sistemas (realizada por Servicio Técnico)
2. Configuración en el router o web de autogestión del cliente

---

## Importante

- Para que funcione correctamente, deben existir ambas configuraciones.
- Si solo se configura en la web, puede no funcionar si falta la regla en el router.
- Si solo se configura en el router, puede no ser accesible desde fuera de la red.

---

## ¿Qué es Port Forwarding?

Es una configuración que permite que una conexión desde internet llegue a un dispositivo específico dentro de la red del cliente.

Ejemplo:

Internet → Router → Cámara (IP interna)

---

## Rol de Atención al Cliente

Atención al Cliente NO configura routers.

Su función es:

- Recibir la solicitud
- Verificar que los datos estén completos
- Derivar el caso a Servicio Técnico

---

## Datos que debe proporcionar el cliente

Antes de derivar el caso, se deben solicitar:

- Número de cliente y razón social
- IP LAN del dispositivo (ej: 192.168.1.50)
- Puertos a abrir
- Protocolo (TCP, UDP o ambos)
- Tipo de dispositivo (cámara, consola, DVR, etc.)

---

## Condiciones importantes

> [!NOTE]
>
> - No se puede realizar en routers Photon PTF3262C-ONU
> - Si el cliente está NATeado, primero se debe migrar a IP pública
> - Si el router es del cliente, él mismo debe hacer la configuración

---

## Flujo de atención

### Paso 1: Recepción del pedido

Se consulta al cliente si ya tiene los datos necesarios.

---

### Paso 2: Si el cliente tiene los datos

Se debe:

- Verificar que la información esté completa
- Completar el formulario de solicitud:

👉 Nueva solicitud de forward de puertos  
https://github.com/Eternet/Servicio.Tecnico/issues/new?assignees=&labels=Forward&template=9+-+Solicitud+de+forward.yml

- Derivar a Servicio Técnico

---

### Paso 3: Si el cliente NO tiene los datos

Se debe indicar:

- Recolectar información
- O enviar correo a: sertec@eternet.cc

---

### Paso 4: Seguimiento

Atención al Cliente puede:

- Confirmar que la solicitud fue enviada
- Informar el estado al cliente si lo solicita
- Actuar como intermediario si hay demoras

---

## Qué NO hace Atención al Cliente

- No configura routers
- No define puertos ni protocolos
- No realiza cambios técnicos en equipos
- No abre puertos manualmente

---

## Diagrama del proceso

```mermaid
graph LR
A[Cliente solicita Port Forward] --> B[Solicitar datos del cliente]

B --> C{¿Datos completos?}

C -- No --> D[Solicitar información o derivar a email sertec@eternet.cc]
D --> Z[Fin]

C -- Sí --> E[Completar formulario de forward]
E --> F[Derivar a Servicio Técnico]

F --> G[ST configura el forward]
G --> H[Cliente realiza configuración de firewall web si corresponde]
H --> Z[Fin]
