# Consulta de Red Interna

## Introducción

Este procedimiento permite responder consultas relacionadas con la red interna del cliente, como:

- Cantidad de dispositivos conectados.
- Identificación de equipos conectados.
- Verificación de dispositivos por WiFi o cable.
- Detección de consumos inusuales.
- Consultas generales sobre la red local.

> [!IMPORTANT]
> La información disponible dependerá del tipo de router instalado. Los equipos MikroTik permiten obtener información más detallada que otros modelos.

## Identificación del Router

Antes de comenzar, debemos identificar qué tipo de router posee el cliente:

- MikroTik
- Vilo
- GLC
- Photon
- Router propio del cliente

Esto determinará qué información podremos obtener.

---

## Consulta de Cantidad de Dispositivos Conectados

### Equipos MikroTik

1. Ingresar al router mediante Winbox.
2. Dirigirse a:

   `IP` → `DHCP Server` → `Leases`

3. Verificar la cantidad de registros activos.

![image]

4. Cada registro representa un dispositivo que obtuvo una dirección IP del router.

Podemos observar:

- Dirección IP asignada.
- Dirección MAC.
- Nombre del dispositivo (si lo informa).
- Tiempo de concesión (Lease Time).

---

### Equipos Vilo, GLC o Photon

1. Ingresar a la administración del equipo.
2. Buscar la sección:

   - Clientes Conectados
   - Devices
   - Connected Devices
   - Lista de Clientes

3. Verificar la cantidad de dispositivos registrados.

![image]

---

## Identificación de Dispositivos

Una vez localizada la lista de equipos conectados podemos identificar:

- Celulares.
- Smart TV.
- Consolas.
- Computadoras.
- Cámaras.
- Impresoras.
- Repetidores.

La identificación puede realizarse mediante:

- Nombre del dispositivo.
- Dirección MAC.
- Dirección IP.

Si el cliente no reconoce algún dispositivo:

1. Solicitar que apague el equipo sospechoso.
2. Actualizar la lista.
3. Verificar si desaparece del listado.

---

## Verificación de Equipos por WiFi

### MikroTik

1. Ingresar a:

   `Wireless` → `Registration`

2. Verificar las estaciones conectadas.

![image]

Podremos observar:

- Dirección MAC.
- Señal.
- Tiempo conectado.
- Velocidad de enlace.
- Banda utilizada (2.4 GHz o 5 GHz).

---

## Verificación de Equipos por Cable

### MikroTik

1. Ingresar a:

   `Bridge` → `Hosts`

o

   `IP` → `DHCP Server` → `Leases`

2. Identificar dispositivos conectados mediante interfaces Ethernet.

3. También podemos observar actividad desde:

   `Interfaces`

![image]

Si una interfaz Ethernet muestra tráfico, existe un dispositivo conectado y transmitiendo datos.

---

## Verificación de Consumo de la Red

Si el cliente consulta qué dispositivo está utilizando más ancho de banda:

### MikroTik

1. Ingresar a:

   `Tools` → `Torch`

2. Seleccionar la interfaz principal (`brPrivada`).

3. Ejecutar la herramienta.

![image]

La ventana mostrará:

- IP de origen.
- IP de destino.
- Velocidad de descarga.
- Velocidad de subida.

Esto permite identificar qué dispositivo está generando mayor consumo.

---

## Consultas Frecuentes

### ¿Cuántos dispositivos soporta mi router?

Depende del modelo de router, aunque en condiciones normales los equipos pueden administrar decenas de dispositivos simultáneamente.

### ¿Muchos dispositivos conectados afectan la velocidad?

Sí. Cuantos más dispositivos utilicen internet al mismo tiempo, mayor será el consumo del ancho de banda disponible.

### ¿Puedo saber qué páginas visita un dispositivo?

No. Desde Atención al Cliente únicamente se puede verificar tráfico y consumo. No se visualiza el contenido específico de navegación.

### ¿Puedo bloquear dispositivos?

Solo si el router posee administración de Eternet y la tarea se encuentra contemplada dentro de los procedimientos vigentes.

---

## Conclusión

Con las verificaciones anteriores podremos:

- Determinar cuántos dispositivos están conectados.
- Identificar equipos por WiFi o cable.
- Detectar consumos elevados.
- Verificar actividad dentro de la red local.
- Responder consultas generales relacionadas con la red interna del cliente.
