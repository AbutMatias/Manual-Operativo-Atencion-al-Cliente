# Router PTW3202W – Guía completa de configuración y diagnóstico

---

## 1. Acceso al equipo

### IP por defecto
```
http://192.168.1.254/
```

### Credenciales
- Usuario: admin
- Contraseña: stdONU101


---

## 2. Modo de operación (Router / Bridge)

Ruta:
- System
- Operation Mode

Opciones:
- Master Router (modo router)
- Slave Router (modo bridge)

---

## 3. Configuración en modo Router

---

### 3.1 WAN (Internet)

- Tipo de conexión:
  - DHCP (por defecto)
  - También soporta IP estática

- DNS:
  - Automático

### Opciones importantes:
- Enable Ping Access on WAN
- Enable Web Server Access on WAN

---

### Auto WAN

- Detecta automáticamente la interfaz WAN
- Tener en cuenta:
  - Puerto inferior es Fast Ethernet (100 Mbps)

---

## 3.2 LAN (Red interna)

- IP por defecto:
```
192.168.1.254
```


- DHCP Pool:
```
192.168.1.100 - 192.168.1.200
```

---

### DHCP reservas

Permite asignar IP fija a un dispositivo:

- IP
- MAC Address
- Comentario (opcional)

---

### Ver clientes DHCP

Ruta:
- Show Client

---

## 4. Wi-Fi (Wireless)

---

### General

- SSID y clave vienen en etiqueta del equipo
- SSID basado en últimos dígitos de MAC
- Clave por defecto: 12345678

---

### Características

- Múltiples SSID
- Site Survey (escaneo de redes)
- Schedule (horarios Wi-Fi)

---

## 4.1 Banda 5 GHz

- Estándar: A/N/AC
- Channel Width: 20 / 40 / 80 MHz
- Canal por defecto: 44

### Canales disponibles:
- 36 a 64 (según región)

---

### Configuración recomendada

- Channel: AUTO
- SSID: personalizado
- Clave: personalizada

---

### Seguridad

- WPA2 Mixed (TKIP / AES)

---

### Clientes conectados

Ruta:
- Wireless Clients

---

## 4.2 Banda 2.4 GHz

- Estándar: B/G/N
- Channel Width: 20 / 40 MHz
- Canal por defecto: 11

### Configuración recomendada

- Channel: AUTO
- SSID: igual que 5 GHz
- Clave: igual que 5 GHz

---

## 5. Firewall

---

### 5.1 WLAN Access Control

- Bloqueo por MAC

---

### 5.2 IP Filtering

- Bloquea tráfico por IP

---

### 5.3 MAC Filtering

- Bloqueo por MAC del dispositivo

---

### 5.4 URL Filtering

- Permitir o bloquear sitios web

---

### 5.5 Port Forwarding

- Redirección de puertos a IP interna
- Se requiere una regla por puerto

---

### 5.6 DMZ

- Expone una IP interna directamente a Internet

---

### 5.7 Control de clientes

- Limita velocidad por dispositivo (kbps)

---

## 6. Gestión del sistema

---

### Status

Muestra:
- Uptime
- Estado WAN
- Estado LAN
- Estado Wi-Fi

---

### Time Zone

- Requiere configuración manual
- Servidor NTP recomendado:

```
186.148.151.53
```


---

### Logs

- Deshabilitado por defecto
- Se pierde al reiniciar
- Información limitada:
  - Conexión WAN
  - Wi-Fi conexión/desconexión

---

### Firmware

- No hay firmware público disponible
- Versión de fábrica:

```
v3.4.16.5
```

---

### Backup y restore

- Save Settings (exportar configuración)
- Load Settings (importar .dat)
- Reset a fábrica

---

### Password

- Default: stdONU101
- Eternet: Etnrouter2022

---

### Reboot

- Reinicio del equipo desde interfaz

---

## 7. Mesh (EasyMesh)

---

### Estado

- Deshabilitado por defecto

---

## 7.1 Modo Master

- Activa Mesh
- Define tipo de conexión:
  - Wireless
  - Cableada

---

## 7.2 Enlace inalámbrico

Requisitos:
- Master en verde fijo
- Slave en estado estable

Proceso:
- Mantener botón 10 segundos en ambos equipos
- O usar Start PBC

Tiempo de sincronización:
- ~60 segundos

Estado correcto:
- LED verde fijo en ambos equipos

---

## 7.3 Enlace cableado

- Conectar por Ethernet inferior (Fast Ethernet)
- Solo 2 puertos disponibles por equipo

---

## 7.4 Topología

- Network Topology muestra estructura de red
- Se puede ver estado de cada nodo

---

## 7.5 Reglas importantes

- No aplicar archivo `.dat` en equipos slave
- No modificar configuración manual en nodos secundarios

---

## 8. Consideraciones finales

- El equipo funciona como router o bridge
- Debe respetarse configuración estándar
- No modificar parámetros sin autorización

---
  
