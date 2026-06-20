# Guía de Diagnóstico para Problemas en Cámaras o Equipos DVR

## Introducción (qué vamos a hacer)

En esta guía vamos a aprender a **detectar por qué una cámara o DVR no funciona correctamente**.

Vamos a revisar 3 cosas principales:

- Si la cámara tiene Internet
- Si el problema es del WiFi o del cable
- Si el problema es del dispositivo o del servicio

---

# 1. Identificar el dispositivo

Antes de tocar cualquier cosa, necesitamos saber qué tipo de cámara es.

## Preguntar al cliente:

- ¿Es cámara nueva o ya funcionaba antes?
- ¿Es WiFi o está conectada por cable?
- ¿Tiene DVR/NVR o es cámara directa?

## ¿Por qué es importante esto?

Porque:
- Si es nueva → puede ser problema de configuración
- Si antes funcionaba → puede ser señal, red o equipo dañado

---

# 2. Cámaras por WiFi

## Paso a paso de conexión

Si la cámara es WiFi, normalmente funciona así:

### Paso 1
Descargar la app de la cámara (ej: YCC365, IMOU, etc.)

### Paso 2
Conectar el celular a WiFi **2.4 GHz**

Importante:
- NO funciona bien con 5 GHz

### Paso 3
Resetear la cámara (si tiene botón)

### Paso 4
Agregar cámara desde la app
- Escanear QR o ingresar código

### Paso 5
Ingresar contraseña WiFi

### Paso 6
Esperar conexión

Si todo sale bien → se ve la cámara en vivo

---

## Problemas comunes en WiFi

### No conecta

Puede ser porque:
- Está en 5 GHz
- Contraseña mal escrita
- Señal mala

---

### Señal WiFi

- -40 dBm → excelente
- -60 dBm → normal
- -80 dBm → mala

---

## Soluciones rápidas

- Reiniciar cámara
- Cambiar WiFi a 2.4 GHz
- Acercar cámara al router
- Cambiar seguridad a WPA2
- Probar otra red

---

## Caso especial: YCC365

Si no conecta:

Configurar DNS 1 igual al gateway del router  
Volver a intentar conexión

<img width="609" height="602" alt="image" src="https://github.com/user-attachments/assets/ab43f757-2362-45f7-acc7-e72688806aca" />

---

## Router con SSID único (Vilo / otros)

Problema común:
- No separa 2.4 GHz y 5 GHz

Solución:
- Desactivar “Band Steering”
- O separar redes WiFi

---

# 3. Cámaras por cable (LAN)

Estas cámaras se conectan con cable o mediante DVR/NVR.

---

## Paso a paso de revisión

### Paso 1
Revisar cables conectados al router

### Paso 2
Ver si el DVR o cámara enciende

### Paso 3
Buscar IP en el router (DHCP leases)

### Paso 4
Ver si responde la IP

---

## Problemas comunes

### No aparece en el router

Puede ser:
- Cable malo
- IP fija configurada
- Problema de red

---

## Caso Hikvision + Vilo

Problema conocido:

No negocia bien la red

Solución:
- Forzar velocidad: **100M Full Duplex**

<img width="766" height="795" alt="image" src="https://github.com/user-attachments/assets/31a23ff4-d068-4392-96d8-ee61548cdb4b" />


---

# 4. Si no se ven las cámaras

## Acceso local

Probar desde navegador:
- http://IP-del-dvr
- Puerto 80 o el configurado

Si no abre:
- No hay conexión o puerto incorrecto

---

## Acceso remoto

Hay 2 formas:

### 1. Por nube (recomendado)
- No necesita configuración extra
- Funciona con o sin IP pública

---

### 2. Por IP pública
- Necesita abrir puertos (forward)

---

# 5. Cómo decidir qué hacer

## Derivar a Servicio Técnico si:

- No conecta WiFi después de pruebas
- No aparece en red por cable
- No se puede ver desde ningún lado

---

## Idea clave

Siempre pensar esto:

“¿Es problema de la cámara o de la red?”

- Si otros dispositivos funcionan → problema de cámara
- Si nada funciona → problema de red

---

# Resumen rápido

✔ WiFi → revisar banda + señal  
✔ LAN → revisar cable + IP  
✔ DVR → revisar acceso local o remoto  
✔ Si todo falla → derivar  

---
