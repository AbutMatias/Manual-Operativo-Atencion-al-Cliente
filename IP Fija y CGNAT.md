# Asignación de Direcciones IP

## Introducción

En la actualidad, las cuentas pueden recibir dos tipos de asignación de dirección IP:

- IP pública fija exclusiva  
- IP bajo CGNAT (Carrier-Grade NAT)

Actualmente, por defecto, **todas las cuentas son asignadas bajo CGNAT**, independientemente del segmento al que pertenezcan.

---

# Segmentos de servicio

## 🏘️ Segmento Hogar

En el segmento Hogar, la asignación de IP pública fija está sujeta a condiciones específicas.

### IP pública fija

El cliente podrá solicitar una IP pública fija siempre que:

- Tenga contratado el plan más alto disponible para su tecnología y localidad.

### Cambio de plan (downgrade)

- En caso de reducir el plan contratado, el cliente pierde automáticamente el beneficio de IP pública fija.
- Actualmente no es posible controlar ni restringir esta acción de forma automática.

### Restricciones técnicas

- No se permite la gestión personalizada de la red interna solicitando modo CPE.

### Evaluación de necesidad

Si el cliente requiere funcionalidades avanzadas, similares al segmento Empresa, se debe:

- Informar sus necesidades específicas.
- Evaluar costos.
- Adecuar la solución al tipo de servicio correspondiente.

### Costos

| Concepto | Valor |
|-----------|--------|
| Migración a IP pública fija | $0 |
| Retorno a CGNAT | $0 |

---

## 🏭 Segmento Empresa

En el segmento Empresa, las condiciones son más flexibles.

### IP pública fija

- Puede asignarse a clientes nuevos o existentes.
- Se asigna según requerimiento del servicio.

### Modo Bridge / CPE

- Incluye configuración en modo Bridge-CPE si es solicitado antes de la instalación.

### Costos

| Concepto | Valor |
|-----------|--------|
| Migración a IP pública fija o reversa | $0 |
| Migración a modo CPE | USD 14,80 |

---

# Consideraciones generales

> ⚠️ Importante

- Cuando el cliente administra su propia red interna, se reduce la capacidad de diagnóstico remoto por parte del soporte técnico.
- En estos casos, una visita técnica puede ser necesaria y podría generar costos adicionales.

---

# Migración a modo CPE

Para realizar la migración al modo CPE, se debe considerar:

- El cliente debe configurar manualmente la IP en:
  - Interfaz WAN del router, o
  - Placa de red del dispositivo (PC o servidor).

- Este tipo de configuración requiere conocimientos técnicos por parte del cliente o su equipo de IT.

---

# Requisitos para Bridge-CPE

Para solicitar modo Bridge-CPE:

- El cliente debe contar previamente con una IP pública asignada.

---
