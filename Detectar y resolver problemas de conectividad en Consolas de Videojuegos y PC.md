# Guía para problemas de conectividad en Consolas de Videojuegos y PC

## Introducción

Esta guía ayuda a diagnosticar y resolver problemas comunes de conexión, navegación o lentitud en PC o consolas de videojuegos de forma ordenada y paso a paso.

---

> [!TIP]
> Como información complementaria se pueden consultar las siguientes guías:
> - [Saturación de ancho de banda](https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/Saturación%20de%20ancho%20de%20banda.md)
> - [Chequeo de acceso a un sitio web o servidor](https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/Chequeo%20de%20acceso%20a%20un%20sitio%20web%20o%20servidor.md)
> - [Chequeo de dispositivo puntual](https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/Chequeo%20de%20un%20dispositivo%20puntual.md)

---

## 1. Identificación del dispositivo

Antes de comenzar el diagnóstico, es fundamental identificar correctamente el equipo.

### Solicitar al cliente:
- Dirección MAC o IP del dispositivo
- Marca y modelo de la PC o consola
- Desconectar el dispositivo de la red durante 2 minutos y volver a conectarlo

### Verificar en el router:
- Servidor DHCP (leases)
- Logs del sistema
- Conexiones por bridge o interfaces LAN/WiFi

---

## 2. Problemas de conexión

---

# SIN CONEXIÓN

## Conexión por LAN

1. Verificar link en la interfaz del router
2. Si hay link, revisar tráfico y negociación
3. Si no hay link:
   - Desconectar y reconectar ambos extremos del cable
   - Probar otro cable Ethernet

---

## Conexión por WiFi

1. Verificar si el dispositivo detecta redes WiFi

### Si NO detecta redes:
- Reiniciar el dispositivo
- Verificar fecha y hora del sistema
- Verificar modo avión o desactivación de red
- Probar con otro ISP (datos móviles)

### Si SÍ detecta redes:
- Intentar conexión a la red
- Verificar contraseña
- Confirmar red 2.4 GHz si aplica
- Ajustar seguridad del router si es necesario (WPA2 recomendado)



---

# SIN NAVEGACIÓN

## Conexión por LAN

1. Verificar puerto con bridge configurado
2. Reiniciar PC o consola
3. Cambiar puerto del router
4. Verificar actualizaciones del sistema operativo

---

## Conexión por WiFi

1. Reiniciar dispositivo
2. Verificar actualizaciones del sistema y apps
3. Olvidar red y reconectar
4. Verificar configuración WiFi (frecuencia, canal, seguridad)

---

## Verificación de firewall (Windows u otros sistemas)

### Posibles pruebas:
- Desactivar temporalmente el firewall
- Verificar si el problema persiste sin filtros de red
- Probar nuevamente la conexión

### Consideraciones:
- El firewall protege el dispositivo contra accesos no deseados
- Debe reactivarse luego de la prueba

---

# LENTITUD O CORTES

## Conexión por LAN

1. Verificar negociación del puerto
2. Probar otro puerto del router
3. Probar otro cable Ethernet
4. Verificar actualizaciones del sistema

---

## Conexión por WiFi

1. Verificar señal:
   - Óptima: -40 dBm
   - Buena: -60 dBm
   - Mala: -80 dBm

2. Verificar actualizaciones del sistema y apps
3. Probar otra aplicación o servicio
4. Reiniciar dispositivo
5. Revisar configuración WiFi (canales y frecuencia)


---

## 3. Notas importantes

> [!NOTE]
> Existen guías internas adicionales para diagnóstico en dispositivos:
> - Ver negociación de placa de red
> - Forzar DHCP en adaptador
> - Desactivar firewall temporalmente

---

> [!IMPORTANT]
> Si otros dispositivos funcionan correctamente en la red, el problema probablemente es específico del equipo del cliente y no del router.

---

## 4. Soluciones posibles

- Conectar por cable Ethernet en lugar de WiFi
- Mejorar cobertura WiFi (repetidores o reubicación del equipo)
- Cambio de router a modo CPE si el cliente lo solicita
- Diagnóstico avanzado por servicio técnico
- Evaluación de limitaciones del hardware del dispositivo
