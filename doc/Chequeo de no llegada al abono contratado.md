# Chequeo de no llegada al abono contratado

Checklist básico antes de derivar un reclamo a otro sector.

---

## 1. Verificación del router

- Verificar acceso al router del cliente
- Confirmar configuración correcta de WiFi:
  - Red 2.4 GHz activa
  - Red 5 GHz activa

- Verificar firmware:
  - Debe estar actualizado

---

## 2. Pruebas de velocidad

### Prueba por cable
- Conectar un equipo directo al router
- Ejecutar test de velocidad

### Prueba por WiFi
- Conectarse a red 5 GHz
- Hacer test cerca del router

### Historial
- Revisar pruebas en el portal ISP

---

## 3. Verificación de negociación

- ONU:
  - Debe negociar a 1 Gbps

- Router:
  - WAN a 1 Gbps
  - LAN a 1 Gbps

---

## 4. Equipos del cliente

- Verificar cantidad de dispositivos conectados
- Confirmar que los dispositivos soporten la velocidad contratada
- Identificar posibles limitaciones de hardware

---

## 5. Señal WiFi

- Medir intensidad de señal en distintos puntos del domicilio
- Detectar interferencias externas o internas

---

## 6. Configuración de QoS

- Verificar que no exista limitación por QoS en el router
- Revisar configuración de:
  - CRF
  - Q_workers

---

## 7. Pruebas de diagnóstico

- Ping:
  - Verificar latencia
  - Detectar pérdida de paquetes

- Traceroute:
  - Identificar saltos con problemas

- Bandwidth test:
  - Ejecutar desde router hacia destino externo
