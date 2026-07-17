# Equipo cliente reiniciándose

## Contexto

Actualmente existen diferencias en la forma de diagnosticar y documentar los casos de **"Equipo cliente reiniciándose"**, lo que genera distintos criterios de validación, derivación y registro para situaciones similares.

Este procedimiento unifica las verificaciones técnicas, las pruebas remotas y la documentación obligatoria antes de derivar el caso.

---

# Objetivo

Establecer un procedimiento único para diagnosticar y gestionar reclamos donde el equipo wireless del cliente presenta reinicios constantes, descartando previamente una pérdida de enlace, una afectación general del punto de acceso (AP) o una falla de la red interna del cliente.

---

# ¿Cuándo corresponde este diagnóstico?

Generar el reclamo:

**"Equipo cliente reiniciándose"**

Cuando el equipo cliente:

- pierde gestión y vuelve a responder con el **Uptime** reiniciado;
- reinicia de forma constante o intermitente;
- presenta cortes de servicio ocasionados por el reinicio del equipo;
- el cliente informa que la antena o el router que la alimenta se reinicia repetidamente.

> **Importante:** Si el equipo vuelve a responder sin reiniciarse y el **Uptime** permanece continuo, evaluar el diagnóstico **"Equipo cliente desenlazándose"**.

---

# Protocolo de verificación

## Paso 1 - Verificar una posible afectación general

Antes de analizar el equipo cliente, confirmar que el inconveniente no corresponda a una falla del AP.

Verificar:

- clientes conectados al mismo AP;
- reclamos recientes del mismo AP;
- alarmas o incidencias generales.

**Si el inconveniente afecta a varios clientes, no continuar con este procedimiento y gestionar el caso como una afectación general del AP.**

---

## Paso 2 - Confirmar el reinicio

Verificar desde las herramientas de gestión:

- pérdida de gestión del equipo;
- recuperación del equipo;
- **Uptime** reiniciado;
- reinicio del contador de tiempo.

Confirmar con el cliente:

- desde cuándo ocurre;
- frecuencia del problema;
- si el equipo se apaga o solamente pierde conexión;
- si el servicio vuelve automáticamente;
- si hubo tormentas, cortes de energía, reemplazo de fuente o problemas eléctricos.

Si el **Uptime** no se reinicia, evaluar otro diagnóstico.

---

## Paso 3 - Identificar el tipo de alimentación

Determinar cómo recibe alimentación el equipo:

- inyector PoE;
- router MikroTik con **PoE Out**;
- otro sistema autorizado por la empresa.

---

## Paso 4 - Confirmación técnica

Siempre que sea posible registrar:

- valor del **Uptime**;
- frecuencia de los reinicios;
- hora aproximada del evento;
- repetición durante el monitoreo;
- dirección IP;
- información técnica disponible.

Si el cliente reemplazó la fuente de alimentación, verificar que sea compatible con el equipo instalado.

---

## Paso 5 - Validaciones comunes

Solicitar al cliente:

- probar otra toma de corriente;
- fotografías del equipo, conexiones, fuente o LEDs, cuando sean necesarias;
- confirmar el resultado de cada prueba.

---

## Paso 6 - Equipos con inyector PoE

Verificar:

- conexión del cable proveniente de la antena al puerto **PoE**;
- conexión del cable hacia el router al puerto **LAN**;
- estado del cable UTP;
- estado del inyector PoE;
- estado de la fuente de alimentación;
- cambio del inyector a otra toma de corriente.

Luego verificar:

- si el equipo vuelve a enlazar;
- si mantiene estabilidad;
- si el **Uptime** vuelve a reiniciarse;
- si reaparecen los reinicios.

---

## Paso 7 - Equipos con PoE Out (MikroTik)

Solicitar al cliente:

- desconectar y volver a conectar el cable del puerto **PoE Out** (habitualmente el puerto 5);
- cambiar el transformador del router a otra toma de corriente.

> Si el router MikroTik se reinicia, la antena también se reiniciará.

Luego verificar:

- si el router continúa reiniciándose;
- si la antena continúa reiniciándose;
- si el servicio permanece estable.

---

## Paso 8 - Validaciones complementarias

Cuando corresponda revisar:

- estado del cableado;
- empalmes;
- conectores;
- puertos;
- fuente de alimentación;
- dispositivos conectados;
- síntomas en televisión, telefonía u otros equipos;
- evidencia visual recibida.

Si es necesario realizar maniobras remotas que interrumpan momentáneamente el servicio, informar previamente al cliente y solicitar su conformidad.

---

## Paso 9 - Evaluación del diagnóstico

El diagnóstico **"Equipo cliente reiniciándose"** corresponde únicamente cuando exista evidencia de reinicios reales del equipo, confirmados mediante el reinicio del **Uptime** y luego de descartar:

- pérdida de enlace;
- afectación general del AP;
- problemas de la red interna del cliente.

El diagnóstico debe sustentarse en el conjunto de las verificaciones realizadas y no en un único evento aislado.

---

## Paso 10 - Cobertura de Fibra Óptica

Antes de derivar el reclamo, verificar si el domicilio posee cobertura de Fibra Óptica.

### Si posee cobertura

- no derivar el caso a Redes por reinicios del enlace wireless;
- generar la Actualización Tecnológica (AFO);
- vincular la AFO con el reclamo;
- vincular el reclamo con la AFO;
- solicitar prioridad según el circuito vigente.

### Si no posee cobertura

Continuar con la derivación técnica.

---

## Paso 11 - Resolución

### Si el problema se resolvió

- registrar todas las pruebas realizadas;
- monitorear durante un período superior al intervalo habitual de reinicio informado;
- confirmar que la falla no vuelva a repetirse;
- registrar la resolución según el procedimiento vigente.

### Si el problema persiste

Derivar para verificación técnica en sitio cuando:

- persistan los reinicios luego de las pruebas remotas;
- existan indicios de falla en la alimentación o el hardware;
- sea necesaria una revisión presencial.

---

# Casos en los que no corresponde este diagnóstico

No utilizar este diagnóstico cuando:

- el **Uptime** permanece continuo;
- el problema corresponde a un desenlace del equipo;
- varios clientes del mismo AP presentan el mismo comportamiento;
- el inconveniente pertenece únicamente al router interno o a la red doméstica;
- no existe evidencia técnica de reinicios reales.

---

# Información obligatoria del reclamo

Registrar:

- síntoma reportado;
- fecha aproximada de inicio;
- frecuencia de los reinicios;
- comportamiento constante o intermitente;
- valor del **Uptime**;
- tipo de alimentación;
- validación del AP;
- pruebas remotas realizadas;
- pruebas realizadas con el cliente;
- resultado de cada prueba;
- evidencia técnica y visual;
- hallazgo técnico;
- motivo de la derivación o resolución;
- contacto principal o alternativo;
- disponibilidad horaria;
- acción informada al cliente;
- validación de cobertura de Fibra Óptica;
- número de AFO, cuando corresponda.

---

# Comunicación al cliente

Informar siempre:

- qué verificaciones se realizaron;
- cuál fue el hallazgo técnico;
- qué acción se tomó;
- si el inconveniente quedó resuelto o será derivado;
- cuál será el siguiente paso.

No informar plazos que no hayan sido confirmados por el circuito operativo vigente.
