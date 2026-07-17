# Equipo cliente con calidad degradada (Wireless)

## Contexto

Actualmente existen diferencias en la forma de diagnosticar y documentar los casos de **"Equipo cliente con calidad degradada"**, lo que genera distintos criterios de validación, derivación y registro para situaciones similares.

Este procedimiento unifica las verificaciones técnicas, las pruebas remotas y la documentación obligatoria antes de derivar el caso.

---

# Objetivo

Establecer un procedimiento único para diagnosticar y gestionar reclamos donde el enlace wireless del cliente presenta degradación de calidad, descartando inconvenientes propios de la red interna, los dispositivos del cliente o una afectación general del punto de acceso (AP).

---

# ¿Cuándo corresponde este diagnóstico?

Generar el reclamo:

- **"Equipo cliente con calidad degradada"**
- **"Equipo cliente con señal degradada"**
- **"Equipo cliente con calidad wireless degradada"**

(según la nomenclatura utilizada por el sistema).

Este diagnóstico corresponde cuando el enlace presenta una o más de las siguientes condiciones:

- Señal inferior a **-70 dBm**.
- Calidad de transferencia inferior al **50 %**.
- Cadenas degradadas.
- Pérdida de paquetes.
- Enlace inestable.
- Velocidad inferior a la esperada debido a la calidad del enlace.

También aplica cuando el cliente informa:

- lentitud;
- cortes o microcortes;
- intermitencia;
- mala señal;
- falta de conexión.

> **Importante:** La señal por sí sola no determina el diagnóstico. Debe evaluarse el estado general del enlace.

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

## Paso 2 - Obtener información del cliente

Registrar:

- síntoma informado;
- fecha aproximada de inicio;
- si el problema es permanente o intermitente;
- dispositivos afectados;
- tipo de conexión involucrada (WiFi, cableada o ambas);
- antecedentes de reclamos o visitas técnicas;
- contacto alternativo.

---

## Paso 3 - Verificación física guiada

Solicitar al cliente revisar:

- cableado UTP;
- inyector PoE o fuente de alimentación;
- puertos y conexiones;
- router y equipo wireless.

Cuando corresponda:

- reiniciar el router o el equipo wireless;
- solicitar fotografías del equipo, conexiones o capturas del error.

---

## Paso 4 - Verificar el enlace

Realizar:

- ping en corto desde el AP al cliente y a otros clientes del mismo AP;
- prueba de ancho de banda (Bandwidth Test).

Antes del ping, confirmar que la MAC del cliente esté registrada correctamente en la tabla ARP del AP.

Si la MAC no está registrada:

- realizar las pruebas desde el equipo frontend;
- dejar constancia de que el ARP no permite una prueba representativa desde el AP.

---

## Paso 5 - Verificaciones técnicas

Siempre que sea posible revisar:

- RSSI;
- CCQ;
- SNR (cuando esté disponible);
- Tx/Rx;
- cadenas;
- Uptime;
- pérdida en corto;
- pérdida hacia host;
- calidad del enlace;
- comparación con otros clientes del mismo AP.

Registrar los valores relevantes y cualquier anomalía detectada.

---

## Paso 6 - Revisar el contexto

Verificar:

- historial de reclamos;
- condiciones de instalación;
- obstáculos físicos;
- árboles o construcciones;
- tormentas o vientos fuertes;
- sobrecalentamiento del equipo;
- afectaciones generales en curso.

---

## Paso 7 - Evaluar el diagnóstico

Corresponde este diagnóstico cuando las verificaciones evidencian degradación del enlace, como:

- señal o calidad por debajo de los parámetros aceptables;
- pérdida de paquetes;
- cadenas degradadas;
- inestabilidad del enlace;
- bajo rendimiento asociado a la calidad del enlace.

El diagnóstico debe sustentarse en el conjunto de las pruebas realizadas y no en un único valor aislado.

---

## Paso 8 - Cobertura de Fibra Óptica

Antes de derivar el reclamo, verificar si el domicilio posee cobertura de Fibra Óptica.

### Si posee cobertura

- no derivar el caso a Redes por degradación wireless;
- generar la Actualización Tecnológica (AFO);
- vincular la AFO con el reclamo;
- solicitar prioridad según el procedimiento vigente.

### Si no posee cobertura

Continuar con la derivación técnica.

---

## Paso 9 - Resolución

### Si el problema se resolvió

- registrar las pruebas realizadas;
- confirmar la estabilidad del servicio;
- cerrar el reclamo según el procedimiento vigente.

### Si el problema persiste

Derivar para revisión técnica cuando:

- continúe la degradación del enlace;
- las pruebas remotas confirmen anomalías;
- sea necesaria una verificación presencial.

---

# Casos en los que no corresponde este diagnóstico

No utilizar este diagnóstico cuando:

- el inconveniente corresponde a una afectación general del AP;
- el problema se limita a la red interna o a un dispositivo del cliente;
- no existe evidencia técnica de degradación del enlace.

---

# Información obligatoria del reclamo

Registrar:

- síntoma reportado;
- fecha aproximada de inicio;
- alcance del problema;
- dispositivos afectados;
- tipo de conexión;
- validación del AP;
- resultado del ping en corto;
- estado del ARP;
- resultado del Bandwidth Test;
- valores técnicos obtenidos;
- evidencia técnica o visual;
- pruebas realizadas;
- hallazgo técnico;
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
- si el inconveniente quedó resuelto o será derivado;
- cuál será el siguiente paso.

No informar plazos que no hayan sido confirmados por el circuito operativo vigente.
