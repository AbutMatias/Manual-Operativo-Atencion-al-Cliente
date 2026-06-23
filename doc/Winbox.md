# ¿Qué es Winbox?

:contentReference[oaicite:0]{index=0} es una aplicación utilizada para configurar y administrar dispositivos de red MikroTik.

Ofrece una interfaz gráfica simple que permite acceder a todas las funciones del router, como:

- Configuración de interfaces de red
- Redes inalámbricas (WiFi)
- Direcciones IP
- Enrutamiento
- DHCP (cliente y servidor)
- Firewall
- Herramientas de diagnóstico (ping, traceroute, telnet)
- Control de tráfico (QoS)

---

## Dashboard (importante)

Siempre que trabajemos con Winbox debemos activar el **Dashboard** para monitoreo básico:

- **CPU:** uso del procesador en tiempo real
- **Uptime:** tiempo encendido del equipo
- **Date / Time:** fecha y hora del sistema
- **Memory:** uso de memoria

Esto ayuda a detectar problemas de rendimiento.

---

# Funcionalidades principales

## Interfaces

Permite configurar todas las interfaces del equipo:

- Ethernet
- WiFi
- Interfaces virtuales

Desde aquí se puede:

- Ver estado de enlaces
- Cambiar velocidad de negociación
- Diagnosticar fallas físicas

---

## Wireless

Configuración de redes inalámbricas.

### Registration
Muestra dispositivos conectados a la red.

### Access List
Controla qué dispositivos pueden conectarse (por MAC, IP, etc).

### Security Profile
Configura seguridad WiFi:

- Contraseña
- Tipo de autenticación
- Encriptación

### Channels
Permite definir canales de transmisión personalizados.

---

## Bridge

Permite unir múltiples interfaces en una sola red lógica.

### Ports
Define qué interfaces forman parte del bridge.

### Host
Muestra dispositivos conectados.

Estados importantes:

- **DL (Dynamic Local):** MAC local de la interfaz
- **D (Dynamic):** dispositivos conectados al otro lado

---

## IP

### ARP
Muestra relación IP ↔ MAC de los dispositivos en la red.

---

### Address
Configuración de direcciones IP en interfaces.

---

### DHCP Client
Permite que el router obtenga IP automáticamente.

---

### DHCP Server
Asigna IP automáticamente a dispositivos de la red.

---

### Firewall
Permite crear reglas de seguridad para tráfico entrante y saliente.

---

### Hotspot
Control de acceso a la red con autenticación de usuarios.

---

### Routes
Tabla de rutas del router (cómo se enruta el tráfico).

---

### Neighbors
Muestra dispositivos detectados en la red local:

- IP
- MAC
- Uptime
- Modelo
- Firmware

---

## System

### Identity
Nombre del router.

### Reboot
Reinicia el equipo.

### Reset Configuration
Restablece el equipo a fábrica.

Opciones avanzadas:

- Sin configuración por defecto
- Ejecución de scripts al reiniciar

### Resources
Información general del equipo.

### RouterBoard
Información del hardware y firmware.

### Scripts / Scheduler
Automatización de tareas.

### Users
Gestión de usuarios y permisos.

---

## Queues

Control de tráfico de red (QoS):

- Prioridad de tráfico
- Limitación de ancho de banda
- Reglas por IP o protocolo

---

## Log

Registro de eventos del sistema:

- Errores
- Alertas
- Actividad del sistema

---

# Tools

## Ping
Prueba conectividad y latencia.

---

## Telnet
Acceso remoto por línea de comandos.

Incluye:

- MAC Telnet (conexión por MAC en MikroTik)

---

## Traceroute
Muestra la ruta que sigue un paquete hasta su destino.

Permite detectar:

- Congestión
- Caídas de red
- Problemas intermedios

---

## Torch
Monitoreo en tiempo real del tráfico de red.

---

## Profile
Muestra consumo de CPU por procesos.

---

## Graphing
Gráficos de rendimiento de red:

- Tráfico
- Uso de CPU
- Cuellos de botella
