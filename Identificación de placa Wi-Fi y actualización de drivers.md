# Identificación de placa Wi-Fi y actualización de drivers

## Introducción

Si el cliente no visualiza redes Wi-Fi (2.4 GHz o 5 GHz) del router LB-LINK, el problema puede estar relacionado con los controladores (drivers) de la placa de red.

También puede deberse a:
- El equipo no tiene adaptador Wi-Fi
- El sistema no lo reconoce correctamente
- Los drivers están desactualizados o dañados

Este problema es común en notebooks con placas como:
- Intel® Dual Band Wireless-AC 3160
- Intel® Dual Band Wireless-AC 3165

---

## Verificaciones previas

Antes de realizar cambios, confirmar:

- El equipo tiene adaptador Wi-Fi
- El sistema operativo lo detecta
- No hay errores en el administrador de dispositivos
- Existe compatibilidad con redes Wi-Fi del router

---

## Paso 1: Identificar la placa de red

### CMD

Abrir consola y ejecutar:

 ```
   netsh wlan show drivers
   ```

---

### PowerShell

Ejecutar:

   ```
   Get-NetAdapter 

   ```


---

### Datos a identificar

- Nombre del adaptador Wi-Fi
- Fabricante
- Versión del driver
- Fecha del driver

---

## Paso 2: Verificar estado del adaptador

Abrir:

 ```
ncpa.cpl
 ```


Verificar que exista “Wi-Fi” o “Wireless”.

Si no aparece:
- Puede estar deshabilitado
- Puede faltar driver
- Puede no tener placa instalada

---

## Paso 3: Descargar drivers

* [Intel® Dual Band Wireless-AC 3160 – Descargar driver](https://www.intel.com/content/www/us/en/support/articles/000005511/network-and-i-o/wireless.html)
* [Intel® Dual Band Wireless-AC 3165 – Descargar driver](https://www.intel.com/content/www/us/en/support/articles/000005511/network-and-i-o/wireless.html)

---

## Paso 4: Instalación del driver

1. Descargar el driver correspondiente
2. Ejecutar el instalador
3. Seguir los pasos del asistente
4. Reiniciar el equipo si lo solicita

---

## Paso 5: Verificación final

Confirmar que el equipo detecta:

- Red 2.4 GHz
- Red 5 GHz

Realizar prueba de conexión en ambas redes.

---

## Si el problema persiste

Posibles causas:

- Driver incorrecto
- Adaptador dañado
- Wi-Fi deshabilitado en BIOS
- Problema de hardware

En ese caso se recomienda revisión técnica.

---

## Importante

La instalación y verificación debe ser realizada por el cliente o un técnico con acceso al equipo.
