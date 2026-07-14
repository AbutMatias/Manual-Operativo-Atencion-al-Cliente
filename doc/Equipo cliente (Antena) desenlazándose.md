# Equipo cliente desenlazándose

## Objetivo

Establecer un procedimiento único para diagnosticar y gestionar reclamos donde un equipo wireless pierde el enlace con el Access Point (AP) de manera intermitente.

---

# ¿Cuándo corresponde este diagnóstico?

Generar el reclamo:

**"Equipo cliente desenlazándose"**

Cuando el equipo del cliente:

- pierde el enlace con el AP de forma intermitente
- vuelve a enlazar sin reiniciarse
- el uptime permanece activo (no vuelve a cero)
- los logs muestran eventos repetitivos de desconexión y reconexión

---

# Protocolo paso a paso

## Paso 1 — Verificar si existe una afectación general

Antes de analizar el equipo del cliente, confirmar que el inconveniente no corresponda al Access Point (AP).

### Verificar

- Clientes conectados al mismo AP.
- Reclamos recientes del mismo AP.
- Alarmas o fallas generales del AP.

### Si el inconveniente afecta a varios clientes

No corresponde continuar con este protocolo.

Derivar el caso como una posible afectación general del AP según el procedimiento vigente.

### Si solamente afecta al cliente

Continuar con el siguiente paso.

---

## Paso 2 — Confirmar que el equipo se está desenlazando

Desde las herramientas de gestión verificar:

- El equipo deja de responder de forma intermitente.
- Luego vuelve a responder.
- El uptime permanece activo.
- No existen reinicios del equipo.

Si se cumplen estas condiciones, el problema corresponde a un **desenlace del equipo cliente**.

---

## Paso 3 — Obtener información del cliente

Consultar y registrar:

- ¿Desde cuándo ocurre?
- ¿Con qué frecuencia sucede?
- ¿Sucede todos los días?
- ¿En determinados horarios?
- ¿Se recupera solo?
- ¿Comenzó luego de tormentas o fuertes vientos?
- ¿Se realizaron movimientos del equipo o de la antena?
- ¿Ya ocurrió anteriormente?

Registrar toda la información en el reclamo.

---

## Paso 4 — Revisar los logs del AP

Ingresar al Access Point donde se encuentra asociado el cliente.

Verificar:

- Eventos de desconexión.
- Eventos de reconexión.
- Cantidad de desenlaces.
- Frecuencia del problema.
- Horarios en los que ocurre.
- Repetición del patrón.

Confirmar que los eventos coincidan con lo informado por el cliente.

---

## Paso 5 — Verificar la calidad del enlace

Revisar el estado actual del enlace.

Controlar:

- RSSI.
- CCQ.
- TX Rate.
- RX Rate.
- MCS o Data Rate.
- Noise Floor (si la tecnología lo permite).
- Tiempo de enlace.
- Calidad general del enlace.

Registrar cualquier valor fuera de los parámetros normales.

---

## Paso 6 — Verificar la estabilidad del equipo

Mientras se monitorea el equipo comprobar si:

- responde correctamente
- pierde la gestión
- vuelve a responder sin reiniciarse
- presenta nuevos desenlaces

Registrar el comportamiento observado.

---

## Paso 7 — Solicitar reinicio eléctrico

Solicitar al cliente:

1. Desconectar la alimentación eléctrica del equipo.
2. Esperar aproximadamente 30 segundos.
3. Volver a conectar la alimentación.

Esperar que el equipo vuelva a enlazar.

---

## Paso 8 — Verificar nuevamente

Una vez que el equipo vuelva a enlazar comprobar:

- Si enlazó correctamente.
- Si mantiene estabilidad.
- Si reaparecen desenlaces.
- Si continúan registrándose eventos en los logs.

---

## Paso 9 — Verificar cobertura de Fibra Óptica

Antes de generar cualquier derivación verificar si el domicilio posee cobertura de Fibra Óptica.

### Si posee cobertura

No derivar el caso a Redes por desenlace wireless.

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

- pruebas realizadas
- resultados obtenidos
- estabilidad posterior al reinicio

Mantener monitoreo cuando corresponda.

Cerrar el reclamo si el problema no vuelve a repetirse.

### Si el inconveniente continúa

Derivar para revisión técnica.

Solicitar la verificación de:

- Equipo cliente.
- Orientación de la antena.
- Soporte.
- Cableado.
- Conectores.
- Fuente de alimentación.
- Reemplazo del equipo si corresponde.

---

# Información obligatoria del reclamo

Antes de finalizar verificar que el reclamo incluya:

- Síntoma informado por el cliente.
- Fecha aproximada de inicio.
- Frecuencia del inconveniente.
- Horarios en los que ocurre.
- Validación del AP.
- Revisión de logs.
- Estado del uptime.
- Calidad del enlace.
- Pruebas realizadas.
- Resultado de cada prueba.
- Hallazgos técnicos.
- Disponibilidad horaria.
- Contacto principal.
- Contacto alternativo.
- Motivo de la derivación.
- Próximo paso informado al cliente.
- Validación de cobertura de Fibra Óptica.
- Número de AFO (si corresponde).

---

# Comunicación al cliente

Informar siempre:

- Qué verificaciones se realizaron.
- Qué se detectó durante el diagnóstico.
- Qué acción se tomó.
- Cuál será el siguiente paso.

No informar plazos que no hayan sido confirmados por el circuito operativo correspondiente.


