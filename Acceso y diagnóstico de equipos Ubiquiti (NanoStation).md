# Acceso y diagnóstico de equipos Ubiquiti (NanoStation)

---

## 1. Acceso al equipo

### Pasos:

- Ingresar la IP del equipo en el navegador
- Si no funciona en Chrome, probar:
  - Firefox
  - Internet Explorer

---

### Advertencia del navegador:

Es normal que aparezca un aviso de “sitio no seguro”.
Aceptar para continuar.

---

### Login:

Ingresar usuario y contraseña del equipo.

   - ![image](https://user-images.githubusercontent.com/93199172/218597141-a7fc7412-bd7f-4f34-90af-89b833a8bdea.png)
---

## 2. Pantalla principal

Una vez dentro, verificar:

- CPU
- Uptime
- SSID
- Cantidad de estaciones conectadas (si es AP)
- Calidad del enlace (CCQ)
- Interfaces LAN0 / LAN1

<img width="1470" height="850" alt="image" src="https://github.com/user-attachments/assets/17449644-5197-46e5-b87b-f3c08bf28afc" />

---

## 3. Interpretación básica

---

### CPU y Uptime

- CPU alta constante:
  - Posible saturación o problema del equipo

- Uptime:
  - Permite ver si el equipo se reinicia frecuentemente

---

### Interfaces LAN

- LAN0 / LAN1:
  - Verifica si hay enlace físico
  - Verifica negociación con el equipo conectado

---

## 4. Sección “Stations” (clientes WiFi)

Disponible en equipos AP.

Permite ver:

- Dispositivos conectados
- Señal (RSSI)
- Velocidad de enlace
- Uptime del cliente

<img width="940" height="827" alt="image" src="https://github.com/user-attachments/assets/0e5993aa-eee8-4126-849c-462e229729bc" />

---

### Uso en diagnóstico:

- Señal baja:
  - Problemas de cobertura o interferencia

- Clientes desconectándose:
  - Posible inestabilidad del enlace

---

## 5. Bridge Table (tabla de puentes)

Muestra las MAC detectadas por interfaz:

### WLAN0:
- Clientes conectados por WiFi

### LAN0 / LAN1:
- Equipos cableados

---

### Interpretación:

- Si no aparece LAN pero hay link:
  - Posible problema de cable o router

- Si aparece MAC del equipo padre:
  - Equipo funcionando como CPE

---

## 6. Herramienta Ping

Ubicación:
- Menú superior derecho → Tools → Ping

<img width="1784" height="820" alt="image" src="https://github.com/user-attachments/assets/b2992550-5e90-4e83-bcd2-8c5e137667bb" />

---

### Uso:

Completar:

- IP destino
- Cantidad de paquetes
- Tamaño (1500 bytes)

Luego iniciar test.

---

### Resultado esperado:

- Respuesta estable:
  - Enlace OK

- Pérdida o latencia alta:
  - Problema de señal o red

---

## 7. Pestaña Advanced

Permite ver y modificar:

- Negociación del enlace
- Parámetros avanzados de radio

---

### Uso:

- Solo modificar si se indica por soporte técnico
- Cambios incorrectos pueden degradar el enlace

<img width="993" height="720" alt="image" src="https://github.com/user-attachments/assets/6a96c101-5996-4585-8dd0-f33e0222ab6f" />

---

## 8. Pestaña System

---

### Funciones:

- Reinicio del equipo (Reboot)
- Cambio de nombre del dispositivo
- Cambio de credenciales
  
<img width="1105" height="849" alt="image" src="https://github.com/user-attachments/assets/9284cea1-df18-420b-90bd-25c7db4e6eeb" />

---

## 9. Pestaña Wireless (RADIUS)

---

### Verificación:

- Revisar si está activo:
  - RADIUS MAC Authentication

---

### Si está activo y no hay clientes:

1. Desactivar temporalmente
2. Guardar cambios (el equipo se reinicia)
3. Verificar si vuelven los clientes

---

### Resultados:

- Si funciona:
  - Notificar a Redes
  - Mantener configuración

- Si no funciona:
  - Volver a activar como estaba

---

## Resumen

Este equipo se diagnostica principalmente observando:

- CPU
- Uptime
- Señal de estaciones
- CCQ
- Tabla de MAC
- Estado de interfaces LAN

---
