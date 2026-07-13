# Equipo cliente reiniciándose

## Contexto

Se observan variaciones en:

- validaciones previas a derivar
- forma de distinguir un reinicio real de una pérdida de enlace u otra afectación
- profundidad del diagnóstico remoto
- pruebas realizadas sobre alimentación, fuente, tomacorriente, puertos y cableado
- criterio para solicitar evidencia visual
- información técnica utilizada
- criterios para derivar, sostener pruebas remotas o resolver en línea
- tratamiento de reclamos adicionales detectados durante la misma atención
- información registrada en contacto y derivación
- trazabilidad entre atención, registro y escalamiento
- tratamiento de casos con cobertura de Fibra Óptica

Esto hace que casos equivalentes puedan gestionarse con distinto nivel de validación, distinto nivel de detalle documental y distinto criterio de resolución o derivación.

---

# Necesidad de actualización

Hoy no queda unificado en un mismo flujo:

- cuándo encuadrar el caso como **"Equipo cliente reiniciándose"**
- cómo confirmar que se trata de un reinicio real del equipo y no de una pérdida de enlace
- qué validaciones mínimas realizar antes de derivar
- qué pruebas aplicar según el tipo de alimentación del equipo
- cuándo solicitar evidencia visual
- qué información técnica registrar
- cuándo continuar pruebas remotas, derivar o resolver en línea
- cómo documentar correctamente el reclamo
- cómo tratar los casos con cobertura de Fibra Óptica

---

# Objetivo

Actualizar la documentación actual con un criterio más operativo para el diagnóstico **"Equipo cliente reiniciándose"**.

La actualización busca:

- conservar el criterio técnico vigente
- ordenar las validaciones mínimas
- formalizar las pruebas remotas y con el cliente
- unificar el criterio según el tipo de alimentación
- incorporar validaciones complementarias
- unificar criterios de resolución y derivación
- dejar más claro qué registrar en cada caso
- mejorar la trazabilidad entre atención, registro y escalamiento
- incorporar el tratamiento operativo cuando el cliente posee cobertura de Fibra Óptica

---

# Equipo cliente reiniciándose

Cuando el servicio se ve afectado por reinicios constantes del equipo wireless del cliente, se debe generar el reclamo:

**"Equipo cliente reiniciándose"**

---

# 1. Validación inicial

Antes de avanzar, confirmar que el problema corresponda a un reinicio real del equipo y no a una pérdida de enlace o a una afectación general.

## Verificación

- revisar si otros clientes del mismo AP presentan un comportamiento similar
- confirmar con el cliente desde cuándo ocurre
- relevar la frecuencia aproximada del problema
- confirmar si el equipo se apaga, reinicia o vuelve a responder luego del corte
- identificar el tipo de alimentación del equipo
- relevar si hubo tormentas, cambios de fuente, problemas eléctricos o antecedentes similares

Si el equipo vuelve a responder sin reiniciarse y el uptime no vuelve a cero, evaluar si corresponde otro diagnóstico.

---

# 2. Identificación del problema

Este tipo de falla suele detectarse cuando:

- se pierde la gestión del equipo de forma recurrente
- el equipo vuelve a aparecer con el uptime reiniciado
- el uptime se reinicia constantemente
- el cliente reporta cortes repetidos asociados al reinicio del equipo o del router que lo alimenta

Este comportamiento indica un reinicio real del equipo y no una pérdida de enlace.

Antes de derivar registrar:

- desde cuándo ocurre
- si el reinicio es constante o intermitente
- cada cuánto tiempo se repite
- si el servicio vuelve luego del reinicio
- si hubo reemplazo de fuente o transformador
- si existen otros síntomas asociados en el router, TV o dispositivos conectados

---

# 3. Confirmación técnica

Siempre que sea posible confirmar el comportamiento mediante evidencia técnica.

Verificar:

- si el uptime vuelve a cero durante la observación
- si el equipo retorna con el contador reiniciado
- frecuencia aproximada del evento
- si el reinicio vuelve a repetirse durante la revisión
- IP, uptime y demás información técnica disponible
- compatibilidad de la fuente cuando haya sido reemplazada

---

# 4. Pruebas con el cliente

Luego de identificar el tipo de alimentación realizar las siguientes validaciones.

## 4.1 Validaciones comunes

- solicitar fotografías de la etiqueta, conexiones o luces cuando sea necesario
- probar el equipo en otra toma de corriente
- confirmar el resultado de cada prueba antes de continuar

---

## 4.2 Equipos con adaptador PoE (Data + Power / Power Active)

- verificar que el cable de bajada esté correctamente conectado al puerto PoE del inyector
- cambiar el inyector PoE a otra toma de corriente
- considerar posibles problemas eléctricos en el domicilio
- si el cliente reemplazó la fuente, validar que sea compatible

Luego verificar:

- si el equipo vuelve a enlazar
- si mantiene estabilidad
- si el uptime vuelve a reiniciarse
- si reaparecen los reinicios

---

## 4.3 Equipos con PoE Out (MikroTik)

- desconectar y reconectar el cable de bajada del puerto PoE Out correspondiente (habitualmente el puerto 5 del MikroTik)
- cambiar el transformador del router a otra toma de corriente

En este tipo de conexión:

- si el router se reinicia, la antena también se reinicia

Luego verificar:

- si el servicio se estabiliza
- si el router vuelve a reiniciarse
- si la antena vuelve a reiniciarse
- si el comportamiento persiste

---

## 4.4 Validaciones complementarias

Cuando corresponda revisar además:

- estado del cableado
- existencia de empalmes
- conexiones a los puertos del router
- posibles conflictos de cableado interno
- dispositivos conectados
- síntomas adicionales en TV u otros equipos
- necesidad de solicitar evidencia visual
- autorización previa si es necesario realizar maniobras remotas que interrumpan momentáneamente el servicio

---

# 5. Resolución del caso

## Si el problema persiste

Derivar para verificación técnica en sitio.

## Si el problema se soluciona

- mantener monitoreo durante un período prudencial
- monitorear por un tiempo superior al intervalo habitual de reinicio informado por el cliente
- confirmar que la falla no vuelva a repetirse
- si existía una visita o derivación en curso y la falla quedó resuelta, registrarlo según el circuito vigente

---

# 6. Información obligatoria a registrar

Registrar en el reclamo:

- síntoma reportado por el cliente
- desde cuándo ocurre
- frecuencia aproximada del reinicio
- si es constante o intermitente
- si el uptime se reinicia
- tipo de alimentación
- pruebas remotas realizadas
- pruebas realizadas con el cliente
- resultado de cada prueba
- evidencia técnica observada
- evidencia visual solicitada o recibida
- validaciones complementarias realizadas
- motivo de derivación o resolución remota
- siguiente paso informado al cliente

---

# 7. Clientes con cobertura de Fibra Óptica

**Siempre verificar cobertura de Fibra Óptica antes de derivar.**

Si el cliente posee cobertura:

- no derivar a Redes por reinicios del enlace wireless
- generar la Actualización Tecnológica (AFO), según el procedimiento vigente
- vincular la AFO con el reclamo
- vincular el reclamo con la AFO
- solicitar prioridad a Coordinación según el circuito establecido

---

# 8. Comunicación con el cliente

Informar de manera clara:

- qué verificaciones se realizaron
- cuál fue el hallazgo
- por qué se deriva o se resuelve el caso
- cuál será el siguiente paso

No informar plazos que no estén confirmados por el circuito operativo correspondiente.
