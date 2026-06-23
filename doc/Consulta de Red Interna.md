# Consulta de Red Interna

## Introducción

Este procedimiento permite responder consultas relacionadas con la red interna del cliente, como:

- Cantidad de dispositivos conectados.
- Identificación de equipos conectados.
- Verificación de dispositivos por WiFi o cable.
- Detección de consumos inusuales.
- Diagnóstico de saturación interna.
- Problemas de conectividad local.

> [!IMPORTANT]
> La información disponible depende del tipo de router. MikroTik permite mayor nivel de detalle que equipos domésticos.

---

## Identificación del Router

Antes de comenzar:

- MikroTik
- Vilo
- GLC
- Photon
- Router del cliente

---

## Verificaciones iniciales (básicas)

Antes de ver dispositivos, revisar:

- Estado WAN (conectado / sin conexión)
- Uptime del router
- CPU y memoria
- Estado de interfaces
- Errores en interfaces (drops / CRC)
- Velocidad negociada de puertos

---

## Estado del sistema (MikroTik)

### Recursos

```bash
/system resource print
```
### Observar:

### Interfaces
- CPU usage
- Free memory
- Uptime
```
/interface monitor-traffic ether1
```
###  Observar:

- Saturación de tráfico
- Inestabilidad RX/TX
- Pérdida de paquetes en interfaz

Cantidad de dispositivos conectados
MikroTik (DHCP)
```
/ip dhcp-server lease print where status=bound
```
###  Wireless
```
/interface wireless registration-table print
```

###  Observar:

- Cantidad de dispositivos activos
- IP asignada
- MAC address
- Hostname (si está disponible)

##  Identificación de dispositivos

###  Permite identificar:

- Celulares
- PCs
- Smart TV
- Consolas
-Cámaras IP
- Impresoras
- Repetidores

###  Métodos:

- MAC address
- IP asignada
- Hostname

##  Verificación WiFi
```
/interface wireless registration-table
```

###  Observar:

- Señal (dBm)
- CCQ (calidad de enlace)
- TX/RX rate
- Tiempo conectado

###  Indicadores:

- Señal menor a -75 dBm → mala calidad
- CCQ bajo → interferencia o mala señal
- Retransmisiones → inestabilidad

###  Verificación por cable
```
/interface bridge host print
```
O
```
/ip dhcp-server lease print
```
###Observar:

- Tráfico por puerto
- MAC por interfaz
- Actividad LAN

## Consumo de red (Torch)
```
/tool torch interface=bridge
```

### Observar:

- IP origen
- IP destino
- TX/RX en tiempo real
- Dispositivos con mayor consumo

## Detección de saturación

### Observar:

- Uso constante del 100%
- Picos de tráfico
- Un solo dispositivo consumiendo todo
- Congestión en horarios específicos
- Verificación de DHCP
```
/ip dhcp-server lease print
```

### Observar:

- IP duplicadas
- Conflictos de asignación
- Leases expirados
- inestabilidad en asignación

## Detección de conflictos ARP
```
/ip arp print
```

### Observar:

- MAC duplicadas
- IP sin resolución estable
- Cambios constantes de MAC

## Detección de loops
```
/interface bridge host print
```

### Observar:

- MAC repetidas en múltiples puertos
- Incremento de broadcast
- Tráfico anormal en LAN

### Indicadores:

- Lentitud general de red
- CPU elevada en router
- Cortes intermitentes

Diagnóstico interno de conectividad
Ping al gateway
```
ping 192.168.1.1
```

### Observar:

- Pérdida interna
- Latencia estable

### Interpretación:

- Pérdida aquí → problema local (LAN / WiFi / router)
- Sin pérdida → problema externo (ISP)

## Diagnóstico avanzado
Tabla de hosts
```
/interface bridge host print
```
Interfaces activas
```
/interface print
```

Consultas frecuentes
¿Muchos dispositivos afectan la red?

Sí, consumen ancho de banda y recursos del router.

¿Se puede ver qué hace cada dispositivo?

Solo tráfico general, no contenido.

¿Por qué se cae el WiFi?
- Interferencia
- Saturación
- Mala señal
- Loops de red
- Exceso de dispositivos
