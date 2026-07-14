# Equipo cliente reiniciándose

## Objetivo

Establecer un procedimiento único para diagnosticar y gestionar reclamos donde el equipo wireless del cliente presenta reinicios constantes.

---

# ¿Cuándo corresponde este diagnóstico?

Generar el reclamo:

**"Equipo cliente reiniciándose"**

Cuando el equipo del cliente:

- pierde gestión y vuelve a responder con el uptime reiniciado
- reinicia de forma constante o intermitente
- presenta cortes de servicio ocasionados por el reinicio del equipo
- el cliente informa que la antena o el router que la alimenta se reinicia repetidamente

> **Importante:** Si el equipo vuelve a responder sin reiniciarse y el uptime permanece activo, no corresponde este diagnóstico. Evaluar si se trata de un **Equipo cliente desenlazándose** u otro tipo de inconveniente.

---

# Protocolo paso a paso

## Paso 1 — Verificar si existe una afectación general

Antes de analizar el equipo del cliente, confirmar que el inconveniente no corresponda a una falla del Access Point (AP).

### Verificar

- Clientes conectados al mismo AP.
- Reclamos recientes del mismo AP.
- Alarmas o fallas generales del AP.

### Si el inconveniente afecta a varios clientes

No continuar con este protocolo.

Derivar el caso como una posible afectación general del AP según el procedimiento vigente.

### Si solamente afecta al cliente

Continuar con el siguiente paso.

---

## Paso 2 — Confirmar que se trata de un reinicio real

Desde las herramientas de gestión verificar:

- El equipo deja de responder.
- Luego vuelve a responder.
- El uptime vuelve a cero.
- El contador de tiempo comienza nuevamente desde el inicio.

Confirmar además con el cliente:

- Desde cuándo ocurre.
- Cada cuánto tiempo sucede.
- Si el equipo se apaga completamente o simplemente pierde conexión.
- Si el servicio vuelve automáticamente.
- Si hubo tormentas, problemas eléctricos o cambios de fuente recientemente.

Si el uptime no se reinicia, evaluar otro diagnóstico.

---

## Paso 3 — Identificar el tipo de alimentación

Determinar cómo recibe alimentación el equipo.

Las opciones habituales son:

- Adaptador PoE (Inyector PoE).
- PoE Out desde un router MikroTik.
- Otro sistema de alimentación utilizado por la empresa.

Esta información determinará las pruebas a realizar.

---

## Paso 4 — Confirmar el reinicio mediante evidencia técnica

Siempre que sea posible verificar:

- Reinicio del uptime.
- Hora aproximada del reinicio.
- Frecuencia de los eventos.
- Repetición del problema durante la observación.
- Dirección IP y demás información técnica disponible.
- Compatibilidad de la fuente, si fue reemplazada.

Registrar toda la evidencia observada.

---

## Paso 5 — Realizar validaciones comunes

Solicitar al cliente:

- Fotografías del equipo si fueran necesarias.
- Fotografías de la fuente o transformador.
- Fotografías de las conexiones.
- Fotografías de los LEDs del equipo cuando corresponda.

Solicitar además:

- Conectar el equipo a otra toma de corriente.
- Confirmar el resultado de cada prueba antes de continuar.

---

## Paso 6 — Equipos alimentados mediante Adaptador PoE

Verificar con el cliente:

- Que el cable proveniente de la antena esté conectado al puerto **PoE** del inyector.
- Que el cable hacia el router esté conectado al puerto **LAN**.
- Que las conexiones estén firmes.
- Cambiar el inyector PoE a otra toma de corriente.
- Si reemplazó la fuente, validar que sea compatible.

Luego verificar desde gestión:

- Si el equipo vuelve a enlazar.
- Si mantiene estabilidad.
- Si el uptime vuelve a reiniciarse.
- Si reaparecen nuevos reinicios.

---

## Paso 7 — Equipos alimentados mediante PoE Out (MikroTik)

Solicitar al cliente:

- Desconectar y volver a conectar el cable de bajada del puerto **PoE Out** correspondiente.
- Cambiar el transformador del MikroTik a otra toma de corriente.

Recordar que:

> Si el MikroTik se reinicia, la antena también se reiniciará.

Luego verificar:

- Si el router continúa reiniciándose.
- Si la antena continúa reiniciándose.
- Si el servicio permanece estable.
- Si el comportamiento persiste.

---

## Paso 8 — Realizar validaciones complementarias

Revisar cuando corresponda:

- Estado del cableado.
- Existencia de empalmes.
- Estado de conectores.
- Estado de los puertos.
- Posibles falsos contactos.
- Síntomas en otros equipos eléctricos.
- Problemas en el router.
- Evidencia visual recibida.
- Si es necesario realizar maniobras remotas que interrumpan el servicio, solicitar autorización al cliente antes de efectuarlas.

---

## Paso 9 — Verificar cobertura de Fibra Óptica

Antes de generar cualquier derivación verificar si el domicilio posee cobertura de Fibra Óptica.

### Si posee cobertura

No derivar el caso a Redes por reinicios del enlace wireless.

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

### Si el inconveniente desapareció

Registrar:

- Todas las pruebas realizadas.
- Resultados obtenidos.
- Tiempo monitoreado.
- Confirmación de estabilidad.

Mantener monitoreo durante un período superior al intervalo habitual de reinicio informado por el cliente.

Si el problema no vuelve a repetirse, cerrar el reclamo según el procedimiento vigente.

### Si el inconveniente continúa

Derivar para revisión técnica en sitio.

Solicitar la verificación de:

- Equipo cliente.
- Fuente de alimentación.
- Inyector PoE.
- Router (cuando corresponda).
- Cableado.
- Conectores.
- Alimentación eléctrica.
- Reemplazo del equipo si corresponde.

---

# Información obligatoria del reclamo

Antes de finalizar verificar que el reclamo incluya:

- Síntoma informado por el cliente.
- Fecha aproximada de inicio.
- Frecuencia de los reinicios.
- Si son constantes o intermitentes.
- Confirmación de reinicio del uptime.
- Tipo de alimentación.
- Validación del AP.
- Evidencia técnica observada.
- Evidencia visual solicitada o recibida.
- Pruebas remotas realizadas.
- Pruebas realizadas con el cliente.
- Resultado de cada prueba.
- Validaciones complementarias.
- Hallazgos técnicos.
- Motivo de la derivación o resolución.
- Disponibilidad horaria.
- Contacto principal.
- Contacto alternativo.
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
