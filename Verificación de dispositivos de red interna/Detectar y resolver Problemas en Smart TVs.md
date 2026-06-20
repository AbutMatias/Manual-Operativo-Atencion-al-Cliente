# Guía de Diagnóstico para Problemas en Smart TVs

## Introducción

Esta guía ayuda a diagnosticar y resolver problemas comunes de conexión, navegación o lentitud en Smart TVs de forma ordenada y paso a paso.

---


> [!TIP]
> Documentación complementaria:
- [Saturación de ancho de banda](https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/Saturación%20de%20ancho%20de%20banda.md)
- [Chequeo de acceso a sitios web o servidores](https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/Chequeo%20de%20acceso%20a%20un%20sitio%20web%20o%20servidor.md)  
- [Chequeo de dispositivo puntual](https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/Chequeo%20de%20un%20dispositivo%20puntual.md)

---

## 1. Identificación del dispositivo

Antes de comenzar, es fundamental identificar correctamente el equipo.

### Solicitar al cliente:
- Dirección MAC o IP del dispositivo
- Marca y modelo del Smart TV
- Desconectar el dispositivo de la red durante 2 minutos y volver a conectarlo

### Verificar en el router:
- Servidor DHCP (leases)
- Logs del sistema
- Bridge o interfaces LAN/WiFi

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

1. Verificar si el Smart TV detecta redes WiFi

### Si NO detecta redes:
- Desconectar el TV de la corriente y volver a encenderlo
- Verificar fecha y hora del sistema
- Verificar actualizaciones del sistema operativo
- Restablecer de fábrica como última opción (recomendación al cliente bajo su responsabilidad)

### Si SÍ detecta redes:
- Intentar conexión a la red
- Verificar contraseña
- Confirmar red 2.4 GHz si corresponde
- Ajustar seguridad del router si es necesario (WPA2 recomendado)

---

# SIN NAVEGACIÓN

## Conexión por LAN

1. Verificar puerto con bridge configurado
2. Reiniciar TV
3. Cambiar puerto del router
4. Verificar actualizaciones del sistema operativo
5. Restablecer de fábrica si persiste el problema

---

## Conexión por WiFi

1. Reiniciar TV
2. Verificar actualizaciones del sistema y apps
3. Olvidar red y reconectar
4. Verificar configuración WiFi (frecuencia, canal, seguridad)
5. Restablecer de fábrica si persiste el problema


---

# LENTITUD O CORTES

## Conexión por LAN

1. Verificar negociación del puerto
2. Probar otro puerto del router
3. Verificar cable Ethernet
4. Verificar actualizaciones del sistema
5. Restablecer de fábrica si persiste el problema

---

## Conexión por WiFi

1. Verificar señal:
   - Óptima: -40 dBm
   - Buena: -60 dBm
   - Mala: -80 dBm

2. Verificar actualizaciones del sistema y apps
3. Probar otra aplicación o servicio
4. Reiniciar TV
5. Revisar configuración WiFi (canales y frecuencia)
6. Restablecer de fábrica si persiste el problema

---

## 3. Notas importantes

> [!NOTE]
> Existen respuestas rápidas en sistemas internos que pueden ayudar en el diagnóstico:
> - ATCliente Problemas de rendimiento Smart TV

---

> [!IMPORTANT]
> Si otros dispositivos funcionan correctamente en la red, el problema probablemente es específico del Smart TV y no del router.

---

## 4. Soluciones posibles

- Conectar el TV por cable Ethernet en lugar de WiFi
- Mejorar cobertura WiFi (reubicación o repetidores)
- Uso de dispositivos externos como Chromecast en caso de sistemas obsoletos
- Cambio a CPE para gestión de IP pública del cliente
- Derivación a soporte técnico para diagnóstico avanzado
