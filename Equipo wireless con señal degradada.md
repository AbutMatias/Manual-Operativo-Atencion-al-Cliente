# Equipo cliente con calidad degradada (Wireless)

# ¿Cuándo corresponde este diagnóstico?

Generar el reclamo:

- **"Equipo cliente con calidad degradada"**

Este diagnóstico corresponde cuando el enlace presenta una o más de las siguientes condiciones:

- señal inferior a **-70 dBm**;
- calidad de transferencia inferior al **50 %**;
- cadenas degradadas;
- pérdida de paquetes;
- enlace inestable;
- velocidad inferior a la esperada debido a la calidad del enlace.

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
- antecedentes de reclamos o visitas técnicas.

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

- dejar constancia de que el ARP no permite una prueba representativa desde el AP.

---

## Paso 5 - Verificaciones técnicas

Siempre que sea posible revisar:

- CCQ;
- Tx/Rx;
- cadenas;
- uptime;
- pérdida en corto;
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
- resultado del Bandwidth Test;
- valores técnicos obtenidos;
- evidencia técnica o visual;
- pruebas realizadas;
- hallazgo técnico;
- motivo de la derivación o resolución;
- validación de cobertura de Fibra Óptica;
  
---

# Comunicación al cliente

Informar:

- qué verificaciones se realizaron;
- cuál fue el hallazgo técnico;
- qué acción se tomó;
- si el inconveniente quedó resuelto o será derivado;
- cuál será el siguiente paso.

No informar plazos que no hayan sido confirmados por el circuito operativo vigente.
