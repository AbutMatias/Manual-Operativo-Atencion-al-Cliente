# Router desconfigurado (respuesta del router pero sin acceso a internet)

## Introducción

Este diagnóstico aplica cuando el router responde correctamente, los dispositivos pueden conectarse a la red WiFi o por cable, pero no tienen acceso a internet.

Generalmente se identifica porque el cliente puede ver la red WiFi, conectarse a ella e incluso obtener una dirección IP, pero no logra navegar.

Un indicio frecuente es que el router haya perdido su configuración y esté funcionando con los parámetros de fábrica (SSID por defecto, contraseña por defecto o configuración incompleta).

---

## Paso 1: Confirmar el síntoma

Consultar al cliente:

- ¿Puede visualizar la red WiFi?
- ¿Puede conectarse a la red?
- ¿Todos los dispositivos presentan el mismo problema?
- ¿La red tiene el nombre habitual o cambió recientemente?
- ¿Observa nombres de red como:
  - MikroTik
  - TP-Link_XXXX
  - Mercusys_XXXX
  - Huawei_XXXX
  - ZTE_XXXX
  - Vilo_XXXX
  - Cualquier SSID de fábrica?

### Resultado

Si el cliente indica que la red cambió de nombre o volvió a los valores de fábrica, es muy probable que el router se haya desconfigurado o reiniciado.

---

## Paso 2: Verificar acceso al router

Ingresar al router desde la gestión correspondiente.

Verificar:

- Uptime
- Logs
- Interfaces activas
- Estado de WAN
- Bridge
- Configuración WiFi

### Verificaciones importantes

- ¿Existe configuración de WiFi personalizada?
- ¿Existe servidor DHCP?
- ¿Tiene IP WAN asignada?
- ¿Tiene ruta por defecto?
- ¿Tiene DNS configurado?

---

## Paso 3: Revisar el nombre de la red (SSID)

Verificar si el router presenta:

- SSID configurado por Eternet
- SSID personalizado del cliente
- SSID por defecto del fabricante

### Ejemplos de SSID de fábrica

- MikroTik
- TP-Link_XXXX
- Huawei-XXXX
- ZTE_XXXX
- Vilo_XXXX

### Resultado

Si aparece un SSID de fábrica, probablemente el equipo fue reseteado o perdió configuración.

---

## Paso 4: Verificar DHCP

Ingresar a:

### MikroTik

```
IP → DHCP Server
```

Comprobar:

- DHCP habilitado
- Pool de direcciones configurado
- Entrega correcta de IPs

### Resultado

Si no existe DHCP, los dispositivos podrán conectarse pero no navegar correctamente.

---

## Paso 5: Verificar IP WAN

Comprobar que el router obtenga dirección IP en la interfaz de internet.

### Verificar

- DHCP Client
- PPPoE (si corresponde)
- IP pública o privada asignada

### Resultado

Si no posee IP WAN:

- El problema puede estar entre el router y el CPE/ONU.
- Puede existir una desconfiguración de la interfaz WAN.

---

## Paso 6: Verificar DNS

Ingresar a:

```
IP → DNS
```

Comprobar:

- DNS configurados
- Permitir consultas remotas (si aplica)

### Resultado

Sin DNS configurado, el cliente puede tener conectividad pero no resolver páginas web.

---

## Paso 7: Realizar prueba de navegación

Desde el router:

### Ping por IP

```
8.8.8.8
```

### Ping por nombre

```
google.com
```

### Interpretación

- Responde IP pero no nombre → Problema DNS.
- No responde ninguno → Problema de salida a internet.
- Responden ambos → Revisar red interna.

---

## Paso 8: Verificar si hubo un reset

Revisar:

- Uptime reciente.
- Fecha de reinicio.
- Configuración por defecto.
- Logs disponibles.

### Indicios frecuentes

- Nombre WiFi cambiado.
- Contraseña WiFi de fábrica.
- Configuración inexistente.
- Cliente informa corte de energía previo.

---

## Diagnóstico

Se considera **Router Desconfigurado** cuando:

- El router responde correctamente.
- Los dispositivos se conectan.
- No existe acceso a internet.
- El equipo presenta configuración incompleta o de fábrica.
- Se detecta pérdida de configuración previa.

---

## Resolución

Si se confirma la desconfiguración:

- Registrar el diagnóstico.
- Informar al cliente que el equipo perdió configuración.
- Derivar a Servicio Técnico para reconfiguración.
