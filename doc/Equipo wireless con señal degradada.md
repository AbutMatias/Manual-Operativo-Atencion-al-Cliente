# Equipo cliente con calidad degradada (Wireless)

## Objetivo

Establecer un procedimiento único para diagnosticar y gestionar reclamos donde el enlace wireless del cliente presenta degradación de calidad, afectando el funcionamiento normal del servicio.

---

# ¿Cuándo corresponde este diagnóstico?

Generar el reclamo:

- **"Equipo cliente con calidad degradada"**
- **"Equipo cliente con señal degradada"**
- **"Equipo cliente con calidad wireless degradada"**

(según la nomenclatura utilizada por el sistema).

Este diagnóstico corresponde cuando se observa una degradación del enlace wireless, por ejemplo:

- Señal inferior a **-70 dBm** (ejemplo: **-80 dBm**).
- Calidad de transferencia inferior al **50 %**.
- Cadenas degradadas.
- Pérdidas elevadas.
- Enlace inestable.

También aplica cuando el cliente informa:

- Lentitud.
- Cortes.
- Microcortes.
- Intermitencia.
- Mala señal.
- Falta de conexión.

> **Importante:** La potencia de señal por sí sola no determina el diagnóstico. Siempre debe evaluarse el estado general del enlace.

---

# Protocolo paso a paso

## Paso 1 — Confirmar que no exista una afectación general

Antes de analizar el cliente verificar el estado del Access Point (AP).

### Verificar

- Otros clientes conectados al mismo AP.
- Reclamos recientes del mismo AP.
- Alarmas o afectaciones generales.

### Si varios clientes presentan el mismo inconveniente

No continuar con este protocolo.

Derivar el caso como una posible afectación general del AP según el procedimiento vigente.

### Si solamente afecta al cliente

Continuar con el diagnóstico.

---

## Paso 2 — Obtener información del cliente

Consultar y registrar:

- Desde cuándo ocurre.
- Si el problema es permanente o intermitente.
- Si afecta a todos los dispositivos o solamente a uno.
- Si ocurre cerca o lejos del router.
- Si afecta conexiones WiFi, cableadas o ambas.
- Dispositivos involucrados.
- Antecedentes de reclamos similares.
- Antecedentes de visitas técnicas.

Registrar también un teléfono de contacto alternativo.

---

## Paso 3 — Realizar una verificación física guiada

Solicitar al cliente revisar:

- Cable UTP.
- Inyector PoE.
- Adaptador de corriente.
- Puertos del router.
- Conexiones.
- Esquema de cableado.

Si corresponde, solicitar:

- Reinicio eléctrico del router.
- Reinicio del equipo wireless.

Cuando aporte valor al diagnóstico solicitar evidencia:

- Fotografía del router.
- Fotografía del PoE.
- Fotografía de conexiones.
- Captura del error.
- Captura de las redes WiFi visibles.

---

## Paso 4 — Realizar un Ping en corto (AP ↔ Cliente)

Desde el Access Point realizar un ping hacia:

- El cliente afectado.
- Otros clientes del mismo AP.

### Interpretación

#### Si solamente falla el cliente

Posible:

- Enlace degradado.
- Problema puntual del CPE.
- Necesidad de revisión técnica.

Evaluar cobertura de Fibra Óptica antes de derivar.

#### Si fallan varios clientes

Posible afectación general del AP.

No continuar con este protocolo individual.

---

## Paso 5 — Verificar el ARP del AP

Antes de interpretar el ping confirmar que:

- La MAC del cliente se encuentre correctamente registrada en el ARP del AP.

Esto garantiza que el tráfico corresponda realmente a:

**AP ↔ Cliente**

### Si la MAC no está registrada

No es posible realizar una prueba representativa desde el AP.

Realizar las pruebas desde el equipo frontend hacia:

- AP.
- Cliente.

Registrar expresamente:

- El ARP del cliente no está correctamente cargado.
- No fue posible realizar pruebas directas desde el AP.

---

## Paso 6 — Realizar un Bandwidth Test

Ejecutar un test de ancho de banda.

Verificar:

- Velocidad alcanzada.
- Existencia de pérdidas.
- Estabilidad durante la prueba.
- Comportamiento general del enlace.

Registrar los resultados.

---

## Paso 7 — Revisar el estado técnico del enlace

Siempre que sea posible verificar:

- RSSI.
- Calidad de transferencia.
- CCQ.
- Tx Rate.
- Rx Rate.
- Cadenas degradadas.
- Pérdida en corto.
- Pérdida hacia host.
- Uptime.
- Interfaz utilizada.
- Señal registrada durante la instalación.
- Comparación con otros clientes del mismo AP.
- Comportamiento general del CPE.
- Comportamiento general del enlace.

Registrar todos los hallazgos relevantes.

---

## Paso 8 — Revisar el historial del cliente

Antes de derivar revisar:

- Reclamos anteriores.
- Visitas técnicas previas.
- Señal histórica.
- Condiciones aceptadas durante la instalación.
- Obstáculos nuevos.
- Árboles.
- Construcciones.
- Necesidad de poda.
- Tormentas.
- Vientos fuertes.
- Sobrecalentamiento del router.
- Afectaciones generales en curso.

Analizar el contexto antes de decidir la derivación.

---

## Paso 9 — Verificar cobertura de Fibra Óptica

Antes de generar cualquier derivación verificar si el domicilio posee cobertura de Fibra Óptica.

### Si posee cobertura

No derivar el caso a Diagnóstico de Redes por degradación wireless.

Realizar:

- Actualización Tecnológica (AFO).
- Vincular la AFO al reclamo.
- Vincular el reclamo con la AFO.
- Solicitar prioridad a Coordinación según el procedimiento vigente.

Finalizar el diagnóstico.

### Si NO posee cobertura

Continuar con la derivación técnica.

---

## Paso 10 — Resolver el caso

### Si el problema quedó resuelto

Registrar:

- Pruebas realizadas.
- Resultados obtenidos.
- Evidencia recopilada.
- Confirmación de estabilidad.

Cerrar el reclamo según el procedimiento vigente.

### Si el problema continúa

Derivar para revisión técnica.

Solicitar la verificación de:

- Equipo cliente.
- Orientación de la antena.
- Calidad del enlace.
- Cableado.
- Conectores.
- Obstáculos físicos.
- Estado del soporte.
- Reemplazo del equipo si corresponde.

---

# Información obligatoria del reclamo

Antes de finalizar verificar que el reclamo incluya:

- Síntoma informado por el cliente.
- Fecha aproximada de inicio.
- Alcance del problema.
- Dispositivos afectados.
- Tipo de conexión involucrada.
- Validación del AP.
- Resultado del Ping en corto.
- Estado del ARP.
- Resultado del Bandwidth Test.
- Calidad del enlace.
- Señal.
- CCQ.
- Calidad de transferencia.
- Evidencia técnica observada.
- Evidencia visual solicitada o recibida.
- Pruebas realizadas.
- Resultado de cada prueba.
- Hallazgos técnicos.
- Disponibilidad horaria.
- Contacto principal.
- Contacto alternativo.
- Motivo de la derivación o resolución.
- Próximo paso informado al cliente.
- Validación de cobertura de Fibra Óptica.
- Número de AFO (si corresponde).

---

# Comunicación al cliente

Informar siempre:

- Qué verificaciones se realizaron.
- Qué se detectó durante el diagnóstico.
- Qué acción se tomó.
- Si el problema quedó resuelto o será derivado.
- Cuál será el siguiente paso.

No informar plazos que no hayan sido confirmados por el circuito operativo correspondiente.
