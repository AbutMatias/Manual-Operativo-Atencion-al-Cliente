# Guía de Diagnóstico para Problemas en Impresoras

## Introducción

Esta guía ayuda a diagnosticar y resolver problemas comunes en impresoras de forma ordenada y paso a paso.

Las impresoras solo necesitan conexión a la red interna (WiFi o cable Ethernet) para obtener una IP y poder comunicarse con otros dispositivos dentro de la misma red. No requieren acceso a Internet para imprimir en la mayoría de los casos.

---

## 1. Identificación del dispositivo

Antes de comenzar el diagnóstico, es fundamental identificar correctamente la impresora.

### Solicitar al cliente:
- Dirección MAC o IP del dispositivo
- Marca y modelo de la impresora
- Desconectar la impresora de la red durante 2 minutos y volver a conectarla

### Verificar en el router:
- Tabla DHCP (leases)
- Logs del sistema
- Conexiones en bridge o interfaces LAN/WiFi

---

## 2. Problemas de conexión

Los problemas pueden presentarse tanto en conexión WiFi como en conexión por cable Ethernet.

---

# CONEXIÓN POR WIFI

## Paso 1: Verificar detección de red
Consultar al cliente si la impresora detecta redes WiFi disponibles.

---

## Caso A: No detecta redes WiFi

Realizar las siguientes verificaciones en orden:

1. Verificar que el WiFi esté activado en la impresora
2. Comprobar que no esté en modo avión o deshabilitado
3. Realizar reinicio eléctrico del equipo
4. Restablecer la configuración de fábrica de la impresora
5. Reinstalar controladores en la computadora si es necesario

---

## Caso B: Detecta redes WiFi

1. Intentar conexión a la red WiFi
2. Verificar contraseña ingresada
3. Confirmar que la red sea 2.4 GHz (muchas impresoras no soportan 5 GHz)
4. Ajustar parámetros de seguridad si es necesario (recomendado WPA2)
5. Reintentar la conexión

---

## WPS (uso no recomendado)

El uso de WPS debe considerarse únicamente como último recurso.

Puede generar problemas de seguridad y compatibilidad con otros dispositivos.

Si la impresora obtiene IP correctamente, se recomienda siempre configuración manual.

---

# CONEXIÓN POR LAN (ETHERNET)

## Paso 1: Verificación física

1. Comprobar si hay link en el puerto del router
2. Si hay link, verificar tráfico en la interfaz
3. Si no hay link:
   - Desconectar y reconectar ambos extremos del cable
   - Probar con otro cable Ethernet

---

## Paso 2: Verificación de IP

1. Revisar si la impresora aparece en DHCP leases
2. Confirmar que tenga IP válida dentro del rango de red
3. Verificar gateway y máscara de subred

---

# PROBLEMAS FRECUENTES

## La impresora no aparece en DHCP

Posibles causas:
- IP fija configurada en la impresora
- Error de configuración de red interna
- Problema de cableado o WiFi

Solución:
- Verificar configuración manual de IP
- Confirmar que esté dentro del rango de red
- Reiniciar impresora y router

---

## La impresora está conectada pero no imprime

1. Verificar que PC e impresora estén en la misma red
2. Hacer ping a la IP de la impresora
3. Reinstalar drivers
4. Verificar impresora como predeterminada

---

# SOLUCIONES GENERALES

- Reiniciar impresora y router
- Reconfigurar conexión WiFi
- Probar conexión por cable Ethernet
- Reinstalar controladores
- Verificar asignación correcta de IP

---

# CUANDO DERIVAR A SOPORTE

Derivar a soporte técnico cuando:

- La impresora no obtiene IP en ningún escenario
- No hay link físico en conexión por cable
- Persisten errores luego de restauración de fábrica
- Se detectan problemas generales de red en el cliente
