# Proceso Intermedio de Tratamiento de Reclamos con Costo (Versión Transitoria)

## Objetivo

Durante el desarrollo de la nueva funcionalidad de automatización del tratamiento de reclamos con costo, se implementa un proceso intermedio de gestión manual.

Este proceso tiene como objetivo determinar si corresponde aplicar un cobro al cliente y realizar la prefacturación correspondiente.

---

## 1. Ingreso del reclamo en Atención al Cliente

### Proceso

- El reclamo es recibido por Atención al Cliente (AC).
- Se registra el reclamo en el sistema correspondiente.
- El representante informa al cliente que el reclamo podría tener costo, dependiendo del diagnóstico técnico.
- Se notifica que se realizará una visita técnica para evaluación.
- El caso se deriva a Coordinación.

---

## 2. Visita técnica al domicilio

### Proceso general

- Un técnico se dirige al domicilio del cliente según la derivación de Coordinación.
- El técnico evalúa el reclamo utilizando la grilla de criterios vigente.
- Se determina si corresponde aplicar costo o si entra en cobertura.

---

## Criterios de evaluación

### Sin costo

Aplica cuando el reclamo está dentro de la cobertura del servicio.

Ejemplos:

**A. Sin síntomas de manipulación del cliente**
- Equipos que dejan de responder.
- Reinicios espontáneos.
- Funcionamiento deficiente sin intervención externa.

**B. Desgaste por el paso del tiempo**
- Cables deteriorados por exposición.
- Ingreso de agua en cableado.

**C. Sin responsabilidad del cliente**
- Problemas en la entrada del servicio.
- Fibra óptica o UTP dañada por factores externos (ej: vehículos).
- Poda municipal.
- Problemas eléctricos derivados del proveedor.

---

### Con costo

Aplica cuando el problema se origina por causas ajenas a la cobertura del servicio.

Ejemplos:

**A. Equipos en comodato con mal uso**
- Daño por tormenta eléctrica.
- Problemas de tensión eléctrica.
- Manipulación del equipo.

**B. Fuente de alimentación dañada por mal uso**

**C. Manipulación de la instalación**
- Desconexión de equipos.
- Rotura de conectores.

**D. Recableados internos**
- Independientemente del motivo.

**E. Otros casos no contemplados**

---

## 3. Cálculo del costo fijo

El costo de la visita técnica se define como:

- 40% del valor del router.

### Valor de referencia

- Router: 37 USD (actualizable en base de datos)

### Cálculo

- Costo de visita técnica: 14.8 USD

> El técnico debe informar este costo al cliente en caso de corresponder.

---

## Clasificación de responsabilidades

| Tipo de gestión | Responsabilidad del cliente | Responsabilidad de Eternet |
|----------------|-----------------------------|-----------------------------|
| Reclamos | Costo fijo de visita técnica o presupuesto en casos corporativos/rurales | Sin costo |
| Mejora de cobertura | Venta de servicio WiFi (con costo de visita técnica) | Sin costo si es recableado por mala instalación original |
| Upgrade cambio router en comodato | Sin costo | N/A |
| Upgrade router propiedad del cliente | Costo fijo de visita técnica | N/A |

---

## 3. Prefacturación manual

- Servicio Técnico realiza la prefacturación manual del reclamo.
- Se cargan los valores correspondientes según diagnóstico técnico.
- Se genera la facturación al cliente.
- Se envía la factura correspondiente.

---

## Notas importantes

- Este proceso es transitorio hasta la implementación del sistema automatizado.
- Durante esta etapa, la validación de costos es manual.
- Es obligatorio informar correctamente los posibles costos al cliente.
- El seguimiento de valores se realiza con la tabla vigente.

---

## Casos especiales

Cuando el reclamo derive en trabajos de mayor complejidad (por ejemplo, red interna), se debe realizar un presupuesto previo siguiendo el procedimiento estándar de trabajos de red interna.
