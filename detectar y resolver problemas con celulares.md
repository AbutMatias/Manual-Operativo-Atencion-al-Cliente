# Guía para detectar y resolver problemas con celulares

---

## Introducción

Esta guía permite diagnosticar los problemas más frecuentes en celulares conectados a la red:

- Sin conexión
- Sin navegación
- Lentitud o microcortes
- Problemas de seguridad o autenticación

---

> [!TIP]
> Documentación complementaria:
- [Saturación de ancho de banda](https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/Saturación%20de%20ancho%20de%20banda.md)
- [Chequeo de acceso a sitios web o servidores](https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/Chequeo%20de%20acceso%20a%20un%20sitio%20web%20o%20servidor.md)  
- [Chequeo de dispositivo puntual](https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/Chequeo%20de%20un%20dispositivo%20puntual.md)

---

# 1. Identificación del dispositivo

Antes de cualquier diagnóstico:

## Solicitar al cliente
- MAC o IP del celular
- Marca y modelo del dispositivo
- Desconectar el WiFi por 2 minutos y volver a conectarlo para identificarlo en el sistema

---

## Verificación en router

- Revisar **DHCP Leases**
- Revisar **logs del router**
- Identificar IP asignada y MAC correspondiente

---

# 2. Sin conexión

## Si el celular NO detecta redes WiFi

- Verificar modo avión o WiFi apagado
- Reiniciar el dispositivo
- Verificar fecha y hora
- Revisar actualizaciones del sistema
- Probar con otra red o ISP

---

## Si detecta redes WiFi

- Intentar conexión
- Verificar contraseña
- Cambiar seguridad WiFi si es necesario
- Probar cambios de canal/frecuencia
- Verificar conexión con otros ISP

---

# 3. Sin navegación

- Reiniciar el celular
- Verificar fecha y hora
- Actualizar sistema operativo y apps
- Olvidar red WiFi y reconectar
- Revisar configuración WiFi del router

---

# 4. Lentitud o microcortes

## Verificación de señal

- Óptima: -40 dBm
- Buena: -60 dBm
- Mala: -80 dBm

---

## Pruebas

- Probar otras apps o servicios
- Reiniciar dispositivo
- Verificar frecuencia WiFi (2.4 / 5 GHz)
- Revisar canales y saturación

---

# 5. Seguridad y autenticación

## Problemas comunes

- Advertencias de seguridad en iPhone
- Fallas de autenticación WiFi

---

## Solución

- Configurar seguridad en:
  - WPA2-PSK
  - WPA3 (si está disponible)

---

# 6. Criterio de diagnóstico

Si:
- Otros dispositivos funcionan correctamente
- El router no presenta fallas
- La red funciona normalmente

Entonces:
- El problema se considera del dispositivo del cliente

---

# 7. Limitaciones del dispositivo

El rendimiento puede variar según:

- Gama baja:
  - Menor velocidad
  - Mayor latencia
  - Peor cobertura

- Gama alta:
  - Mejor estabilidad
  - Mayor velocidad real

---

# 8. Soluciones posibles al cliente

## Problemas de cobertura
- Cambio de bajada
- Reubicación del equipo
- Instalación de solución WiFi adicional

---

## Problemas de router percibido

- Ofrecer migración a CPE
- Permitir uso de router propio del cliente

---
