


# Guía de diagnóstico y gestión de equipos Photon PTF3262C (ONU + Ethernet)

---

## 1. Identificación del cliente

Para acceder al equipo se utiliza la IP del cliente registrada en el sistema.

### Acceso

- Ingresar desde navegador a la IP del cliente

### Credenciales

- Usuario: admin
- Contraseña: Etnrouter2022

---

## 2. Verificar negociación en dispositivo cableado (Windows)

### Paso 1

Presionar:

```
Windows + R
```

Escribir:
```
ncpa.cpl
```

---

### Paso 2

- Se abre la ventana de conexiones de red
- Click derecho sobre la conexión activa
- Ir a:
  - Estado

---

### Resultado

Ahí se puede ver la velocidad de negociación del enlace.

---

### Nota importante

La Ether 2 de estos equipos es Fast Ethernet (100 Mbps), por lo que:

- No va a superar los 100 Mbps por cable
- Aunque el plan contratado sea mayor

---

## 3. Redes Wi-Fi

- Estos equipos emiten redes 2.4 GHz y 5 GHz por separado
- El roaming no es óptimo
- Se recomienda unificar SSID y contraseña en ambas bandas

Resultado esperado:
- El cliente ve una sola red Wi-Fi

---

## 4. Dispositivos conectados

### Ruta:

- Status
- User Info
- Active DHCP Clients

---

### Información disponible:

- MAC del dispositivo
- IP asignada

---

### Limitación:

No se puede saber si el cliente está conectado por:
- Cable
- Wi-Fi

Solo se ve el cliente DHCP

---

## 5. WPS

### Activación:

- Ir a la red Wi-Fi (2.4 o 5 GHz)
- Activar WPS si está deshabilitado
- Click en Start PBC

---

### Funcionamiento:

- El usuario tiene 2 minutos para conectarse
- Si no conecta, se debe repetir el proceso

---

## 6. Señal óptica (ONU)

### Ruta:

- Status
- PON Info
- Laser Device Info

---

### Dato importante:

- Rx Power (dBm) = nivel de señal óptica recibida

---

## 7. Reinicio del equipo

### Ruta:

- Management
- Device Manage
- Commit and Reboot

---

## Resumen de diagnóstico

- Luz verde fija:
  - Equipo funcionando correctamente

- Luz naranja:
  - Sin conexión a Internet

---

### Importante:

- Estos routers funcionan solo como HOST
- No deben usarse como sistema principal de Wi-Fi
- Deben seguir configuración estándar (Auto)

---

### Configuración estándar:

- Se aplica un archivo `.xml`
- Solo se modifican:
  - SSID
  - Contraseña

---

### No permitido:

- Modificar parámetros avanzados
- Cambiar configuración base

---

## Tratamiento de fallas

- Si es problema del router:
  - Derivar a soporte técnico con issue

- Si es problema del dispositivo del cliente:
  - Aplicar procedimientos estándar
  
## Nota adicional

Se puede ver el consumo de la línea en tiempo real desde el Hotspot donde autentica el cliente.

---
# Guía de diagnóstico – Router Photon PTW3202W

---

## 1. Identificación del cliente

Para ingresar al equipo, se utiliza la IP del cliente registrada en el sistema.

### Acceso

- Abrir navegador
- Ingresar la IP del cliente

### Credenciales

- Usuario: admin
- Contraseña: Etnrouter2022

---

## 2. Verificar negociación en Windows (cable)

### Paso 1

Presionar:

```
Windows + R
```

Escribir:
```
ncpa.cpl
```

---

### Paso 2

- Abrir la conexión de red activa
- Click derecho
- Ir a **Estado**

---

### Resultado

Ahí se ve la velocidad de conexión (negociación) entre PC y router.

---

### Nota importante

- El puerto Ether 2 es Fast Ethernet (100 Mbps)
- No superará los 100 Mbps por cable aunque el plan sea mayor

---

## 3. Redes Wi-Fi

- El equipo emite 2.4 GHz y 5 GHz por separado
- El roaming no es óptimo
- Se recomienda usar el mismo SSID y contraseña en ambas bandas

Resultado esperado:
- El cliente ve una sola red Wi-Fi

---

## 4. Dispositivos conectados y frecuencia

### Ruta:

- Menú principal
- Wireless
- Wireless Clients (por cada banda)

---

### Información disponible:

- Lista de dispositivos conectados
- Banda en la que están conectados (2.4 o 5 GHz)

---

## 5. DHCP Leases

### Ruta:

- Network
- LAN Setting
- Show Client

---

### Información disponible:

- IP asignada
- MAC del dispositivo
- Tiempo de renovación (1440 minutos / 24 hs)

---

## 6. Reinicio del equipo

### Ruta:

- Management
- Reboot
- Click en Reboot

---

## 7. WPS

### Uso:

Permite conectar dispositivos sin contraseña.

### Pasos:

- Activar WPS en la red (2.4 o 5 GHz)
- Presionar botón WPS (modo PBC)
- El usuario tiene 2 minutos para conectarse

Si no conecta:
- Repetir proceso

---

## Resumen de diagnóstico

- Luz verde fija:
  - Funcionamiento normal

- Luz naranja:
  - Sin conexión a Internet

---

## Reglas de operación

- El router Photon funciona como equipo HOST
- No debe usarse como solución principal de Wi-Fi en clientes
- Configuración siempre en modo automático

---

### Configuración estándar

- Se aplica archivo `.dat`
- Solo se modifican:
  - SSID
  - Contraseña

---

### Restricciones

- No modificar parámetros avanzados
- No cambiar configuración base sin autorización

---

## Escalamiento

Si hay falla:

- Derivar a soporte técnico mediante issue
- Seguir procedimiento estándar

---

## Nota adicional

Se puede ver el consumo de la línea en tiempo real desde el Hotspot donde autentica el cliente.

---

## Más información

https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/PTW3202W%20Características%20Generales%20y%20Operación.md




---

# Esquema de conexión con servicio FTTH y router Photon Dual

![image](https://github.com/user-attachments/assets/e11db660-ee56-49ae-96d7-ecc737e21ac4)


# Tutorial: [Link](https://www.youtube.com/watch?v=JZIR1azMiXA) 

# Esquema de conexión con servicio FTTH y router Photon


![image](https://github.com/user-attachments/assets/bb4fce75-3bd7-4709-9d09-de0aa4b161fd)

# Tutorial: [Link](https://www.youtube.com/watch?v=kiiyXDmYEoY) 

# Esquemas de conexión con servicio Wireless y router Photon

![image](https://github.com/user-attachments/assets/eed06019-9a22-492a-bf80-f4486e914616)

# Tutorial: [Link](https://www.youtube.com/watch?v=kiiyXDmYEoY) 

