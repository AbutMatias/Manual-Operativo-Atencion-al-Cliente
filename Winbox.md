# ¿Qué es Winbox?

 Es una aplicación utilizada para configurar y administrar dispositivos de red MikroTik.

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

<img width="1913" height="395" alt="image" src="https://github.com/user-attachments/assets/a89cf51d-548c-4a1a-8e08-5758671decea" />


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
<img width="1759" height="594" alt="image" src="https://github.com/user-attachments/assets/8d3b82be-5d93-4436-b2c1-e4eeeba20837" />

---

## Wireless

Configuración de redes inalámbricas.
<img width="1860" height="627" alt="image" src="https://github.com/user-attachments/assets/dd74d8f4-9ad1-40ac-b91b-f2c6dd3168b0" />

### Registration
Muestra dispositivos conectados a la red.
<img width="1718" height="563" alt="image" src="https://github.com/user-attachments/assets/3a06d838-53c1-4424-b8e7-fcea8a6b010c" />

### Access List
Controla qué dispositivos pueden conectarse (por MAC, IP, etc).
<img width="1804" height="713" alt="image" src="https://github.com/user-attachments/assets/50de7a7f-1b99-4651-bb69-daaebefd150c" />

### Security Profile
Configura seguridad WiFi:

- Contraseña
- Tipo de autenticación
- Encriptación
<img width="1364" height="568" alt="image" src="https://github.com/user-attachments/assets/4988dffd-d979-4e7f-afce-dd70f1f2f430" />

### Channels
Permite definir canales de transmisión personalizados.
<img width="1172" height="581" alt="image" src="https://github.com/user-attachments/assets/3548f50b-366b-48f7-b95a-79a001073c82" />

---

## Bridge

Permite unir múltiples interfaces en una sola red lógica.
<img width="1676" height="621" alt="image" src="https://github.com/user-attachments/assets/fbff7a7d-002b-4ba3-a8f8-ebb0d899c0a6" />

### Ports
Define qué interfaces forman parte del bridge.
<img width="1668" height="700" alt="image" src="https://github.com/user-attachments/assets/0be149fd-d968-473e-b352-3f9149d22b6d" />

### Host
Muestra dispositivos conectados.

Estados importantes:

- **DL (Dynamic Local):** MAC local de la interfaz
- **D (Dynamic):** dispositivos conectados al otro lado
<img width="1291" height="635" alt="image" src="https://github.com/user-attachments/assets/0b0d9226-b5a3-44c9-82b4-59ec917e007f" />

---

## IP
<img width="746" height="773" alt="image" src="https://github.com/user-attachments/assets/c4d686ec-583c-4078-bb87-71921716f066" />

### ARP
Muestra relación IP ↔ MAC de los dispositivos en la red.
<img width="834" height="769" alt="image" src="https://github.com/user-attachments/assets/b403e61f-e634-417d-a237-30dbaf65b212" />

---

### Address
Configuración de direcciones IP en interfaces.
<img width="1432" height="752" alt="image" src="https://github.com/user-attachments/assets/a9e8bb00-2ea2-4516-8a86-9e30d6f033ed" />

---

### DHCP Client
Permite que el router obtenga IP automáticamente.
<img width="886" height="677" alt="image" src="https://github.com/user-attachments/assets/cd6de3d3-1f98-4c39-9a5e-1cd2831a3b1f" />

---

### DHCP Server
Asigna IP automáticamente a dispositivos de la red.
<img width="906" height="610" alt="image" src="https://github.com/user-attachments/assets/9fad7229-342e-494e-9aba-f4d192daba15" />

---

### Firewall
Permite crear reglas de seguridad para tráfico entrante y saliente.
<img width="1704" height="699" alt="image" src="https://github.com/user-attachments/assets/1e57544d-f5fd-4b76-8f0a-87b9c409e78d" />

---

### Hotspot
Control de acceso a la red con autenticación de usuarios.
<img width="1152" height="607" alt="image" src="https://github.com/user-attachments/assets/45da255c-f077-4fc2-913b-f44dbc187e4d" />

---

### Routes
Tabla de rutas del router (cómo se enruta el tráfico).
<img width="1105" height="716" alt="image" src="https://github.com/user-attachments/assets/2f0c03a7-52fe-4d2c-baef-2db5b47073f6" />

---

### Neighbors
Muestra dispositivos detectados en la red local:

- IP
- MAC
- Uptime
- Modelo
- Firmware
<img width="1239" height="630" alt="image" src="https://github.com/user-attachments/assets/2c33f7bd-7c1e-4cf8-9016-08834f2be3e3" />

---

## System

### Identity
Nombre del router.
<img width="841" height="580" alt="image" src="https://github.com/user-attachments/assets/89af86dc-f7b7-45b1-8196-c49219dafef7" />

### Reboot
Reinicia el equipo.
<img width="489" height="691" alt="image" src="https://github.com/user-attachments/assets/733b846a-c382-402e-a279-bdb1c3f5cee0" />

### Reset Configuration
Restablece el equipo a fábrica.

Opciones avanzadas:

- Sin configuración por defecto
- Ejecución de scripts al reiniciar
<img width="464" height="645" alt="image" src="https://github.com/user-attachments/assets/42950201-0d08-484c-b88d-6883ce025814" />

### Resources
Información general del equipo.
<img width="946" height="665" alt="image" src="https://github.com/user-attachments/assets/5f1aff9a-6328-4411-9774-8995cfdcc6c3" />

### RouterBoard
Información del hardware y firmware.
<img width="822" height="626" alt="image" src="https://github.com/user-attachments/assets/849ff86d-1936-4f4e-9cb3-8bd5d4f6daa5" />

### Scripts / Scheduler
Automatización de tareas.
<img width="939" height="680" alt="image" src="https://github.com/user-attachments/assets/a0dcce0f-933f-431c-ad70-8c725cb2671e" />

### Users
Gestión de usuarios y permisos.
<img width="1110" height="692" alt="image" src="https://github.com/user-attachments/assets/053ceeda-b1ea-4276-b2c0-ea805ca63856" />

---

## Queues

Control de tráfico de red (QoS):

- Prioridad de tráfico
- Limitación de ancho de banda
- Reglas por IP o protocolo
<img width="975" height="807" alt="image" src="https://github.com/user-attachments/assets/51b5587b-18cb-46e2-8856-50acfbf8729b" />

---

## Log

Registro de eventos del sistema:

- Errores
- Alertas
- Actividad del sistema
<img width="1180" height="737" alt="image" src="https://github.com/user-attachments/assets/3ab9ccff-606d-4942-82a0-f33f46fb607c" />

---

# Tools

## Ping
Prueba conectividad y latencia.
<img width="1061" height="694" alt="image" src="https://github.com/user-attachments/assets/bddcfe59-d0cf-4af5-8fc8-1874e08064b4" />

---

## Telnet
Acceso remoto por línea de comandos.

Incluye:

- MAC Telnet (conexión por MAC en MikroTik)
<img width="935" height="578" alt="image" src="https://github.com/user-attachments/assets/6db18836-44ad-41f5-ac68-4b30940d17b0" />

---

## Traceroute
Muestra la ruta que sigue un paquete hasta su destino.

Permite detectar:

- Congestión
- Caídas de red
- Problemas intermedios
<img width="1408" height="667" alt="image" src="https://github.com/user-attachments/assets/2662c185-139e-46c7-bdb5-49eedfd701ea" />

---

## Torch
Monitoreo en tiempo real del tráfico de red.
<img width="1358" height="621" alt="image" src="https://github.com/user-attachments/assets/98b7d764-92d2-47f6-bd61-091630fc5e29" />

---

## Profile
Muestra consumo de CPU por procesos.
<img width="855" height="698" alt="image" src="https://github.com/user-attachments/assets/e056800e-0a03-4820-a51e-ca9110dd82fd" />

---

## Graphing
Gráficos de rendimiento de red:

- Tráfico
- Uso de CPU
- Cuellos de botella
<img width="1186" height="633" alt="image" src="https://github.com/user-attachments/assets/65993bdc-60d8-493f-b514-8b65a82a2319" />
