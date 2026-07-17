# Equipo cliente desenlazándose

## Contexto

Actualmente existen diferencias en la forma de diagnosticar y documentar los casos de **"Equipo cliente desenlazándose"**, lo que genera distintos criterios de validación, derivación y registro para situaciones similares.

Este procedimiento unifica las verificaciones técnicas, las pruebas remotas y la documentación obligatoria antes de derivar el caso.

---

# Objetivo

Establecer un procedimiento único para diagnosticar y gestionar reclamos donde un equipo wireless pierde el enlace con el punto de acceso (AP) de forma intermitente, descartando previamente un reinicio del equipo o una afectación general del AP.

---

# ¿Cuándo corresponde este diagnóstico?

Generar el reclamo:

**"Equipo cliente desenlazándose"**

Cuando el equipo cliente:

- pierde el enlace con el AP de forma intermitente;
- vuelve a enlazar sin reiniciarse;
- mantiene el **Uptime** continuo (no vuelve a cero);
- presenta eventos repetitivos de desconexión y reconexión en los logs del AP.

> **Importante:** Si el **Uptime** se reinicia, evaluar el diagnóstico **"Equipo cliente reiniciándose"**.

---

# Protocolo de verificación

## Paso 1 - Verificar una posible afectación general

Antes de analizar el equipo cliente, confirmar que el inconveniente no corresponda al AP.

Verificar:

- clientes conectados al mismo AP;
- reclamos recientes;
- alarmas o incidencias generales.

**Si varios clientes presentan el mismo comportamiento, gestionar el caso como una afectación general del AP.**

---

## Paso 2 - Confirmar el desenlace

Verificar desde las herramientas de gestión:

- pérdida intermitente de gestión;
- recuperación automática del enlace;
- **Uptime** continuo;
- ausencia de reinicios.

Confirmar con el cliente:

- desde cuándo ocurre;
- frecuencia del problema;
- si se recupera automáticamente;
- si comenzó luego de tormentas, vientos o movimientos del equipo;
- si existen antecedentes similares.

---

## Paso 3 - Revisar los logs y el estado del enlace

Verificar:

- eventos de desconexión y reconexión;
- frecuencia y horarios de los eventos;
- estabilidad del enlace;
- RSSI, CCQ, TX/RX Rate y demás parámetros disponibles;
- coincidencia entre los logs y el síntoma informado por el cliente.

Registrar cualquier valor fuera de los parámetros esperados.

---

## Paso 4 - Reinicio eléctrico

Solicitar al cliente:

1. Desconectar la alimentación del equipo.
2. Esperar aproximadamente 30 segundos.
3. Volver a conectarlo.

Luego verificar:

- si enlaza correctamente;
- si mantiene estabilidad;
- si reaparecen los desenlaces.

---

## Paso 5 - Evaluar el diagnóstico

Corresponde este diagnóstico cuando:

- el equipo pierde el enlace de forma recurrente;
- el **Uptime** permanece continuo;
- los logs evidencian desconexiones repetitivas;
- se descartan reinicios del equipo y una afectación general del AP.

---

## Paso 6 - Cobertura de Fibra Óptica

Antes de derivar el reclamo, verificar si el domicilio posee cobertura de Fibra Óptica.

### Si posee cobertura

- no derivar el caso a Redes;
- generar la Actualización Tecnológica (AFO);
- vincular la AFO con el reclamo;
- solicitar prioridad según el procedimiento vigente.

### Si no posee cobertura

Continuar con la derivación técnica.

---

## Paso 7 - Resolución

### Si el problema se resolvió

- registrar las pruebas realizadas;
- confirmar la estabilidad del enlace;
- cerrar el reclamo según el procedimiento vigente.

### Si el problema persiste

Derivar para revisión técnica cuando:

- continúe la pérdida del enlace;
- los logs evidencien desconexiones repetitivas;
- sea necesaria una verificación presencial.

---

# Casos en los que no corresponde este diagnóstico

No utilizar este diagnóstico cuando:

- varios clientes del mismo AP presentan el mismo comportamiento;
- el **Uptime** se reinicia;
- el inconveniente pertenece a la red interna del cliente;
- no existe evidencia técnica de pérdidas intermitentes del enlace.

---

# Información obligatoria del reclamo

Registrar:

- síntoma reportado;
- fecha aproximada de inicio;
- frecuencia y horarios del inconveniente;
- validación del AP;
- estado del **Uptime**;
- revisión de los logs;
- calidad del enlace;
- pruebas realizadas;
- resultado de cada prueba;
- hallazgos técnicos;
- motivo de la derivación o resolución;
- contacto principal o alternativo;
- disponibilidad horaria;
- validación de cobertura de Fibra Óptica;
- número de AFO, cuando corresponda.

---

# Comunicación al cliente

Informar:

- qué verificaciones se realizaron;
- cuál fue el hallazgo técnico;
- qué acción se tomó;
- cuál será el siguiente paso.

No informar plazos que no hayan sido confirmados por el circuito operativo vigente.
