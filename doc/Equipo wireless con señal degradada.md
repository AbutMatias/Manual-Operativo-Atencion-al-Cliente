# Equipo cliente con calidad degradada (Wireless)

## Contexto

Actualmente existe documentación vinculada al criterio de calidad degradada, pero la comparativa integral del diagnóstico **"Equipo cliente con calidad degradada"** muestra que en la práctica todavía hay diferencias operativas entre casos similares.

Se observan variaciones en:

- validaciones previas a derivar
- profundidad del diagnóstico remoto
- forma de documentar el síntoma del cliente
- evidencia solicitada
- criterios de derivación
- trazabilidad entre atención, registro y escalamiento
- registro de contacto, disponibilidad y continuidad del caso

Esto hace que casos equivalentes puedan gestionarse con distinto nivel de validación y con distinto nivel de detalle al momento de derivar.

---

# Necesidad de actualización

Hoy no queda unificado en un mismo flujo:

- qué validar antes de derivar
- qué pruebas remotas realizar
- qué información técnica registrar
- cómo documentar el síntoma y el hallazgo
- cómo escalar correctamente el reclamo
- cómo tratar los casos con cobertura de Fibra Óptica

---

# Objetivo

Actualizar la documentación actual con un criterio más operativo para el diagnóstico **"Equipo cliente con calidad degradada"**.

La actualización busca:

- conservar los umbrales técnicos vigentes
- ordenar las validaciones mínimas
- formalizar las pruebas remotas obligatorias
- unificar criterios de derivación
- dejar más claro qué registrar en cada caso
- incorporar el tratamiento operativo cuando el cliente tiene cobertura de Fibra Óptica

---

# Equipo cliente con calidad degradada

Cuando el equipo cliente presenta degradación en la calidad del servicio y se observan señales por lo general inferiores a **-70 dBm** (por ejemplo, **-80 dBm**) o una **calidad de transferencia inferior al 50%**, se debe generar un reclamo de:

- **"Equipo cliente con calidad degradada"**
- **"Equipo cliente con señal degradada"**
- **"Equipo cliente con calidad wireless degradada"**

(según la nomenclatura utilizada por el sistema).

Este criterio también aplica cuando el cliente informa:

- lentitud
- cortes
- microcortes
- intermitencia
- mala señal
- falta de conexión

siempre que el problema esté asociado al enlace wireless, al CPE o a la calidad del servicio.

---

# 1. Identificación del problema

La degradación puede detectarse por señal, calidad o comportamiento del servicio, pero **el diagnóstico nunca debe basarse únicamente en la potencia de señal**.

Siempre se debe diferenciar entre:

- síntoma reportado por el cliente
- pruebas realizadas
- hallazgo técnico
- motivo de derivación

Antes de continuar registrar:

- desde cuándo ocurre
- si es permanente o intermitente
- si afecta a todos los dispositivos o solamente a uno
- si ocurre cerca y lejos del router
- si afecta WiFi, cableado o ambos
- dispositivos involucrados

---

# 2. Verificaciones obligatorias

## 2.1 Validación inicial con el cliente

Registrar:

- descripción del síntoma
- teléfono de contacto (WhatsApp u otro alternativo)
- antecedentes de visitas
- antecedentes de reclamos similares

---

## 2.2 Verificación física guiada

Cuando corresponda solicitar al cliente:

- revisión de puertos
- revisión del POE
- revisión del cable UTP
- revisión del adaptador de corriente
- revisión del esquema de conexión
- reconexión de cables
- reinicio eléctrico del router o antena

Cuando aporte valor al diagnóstico solicitar:

- foto del router
- foto de conexiones
- captura del error
- captura de redes WiFi visibles

---

## 2.3 Ping en corto (AP ↔ Cliente)

Realizar un ping directo desde el AP hacia:

- el cliente afectado
- otros clientes pertenecientes al mismo AP

### Interpretación

**Si solamente falla el cliente afectado:**

- posible problema puntual del enlace
- probable necesidad de visita técnica
- evaluar migración a Fibra Óptica como solución (verificar cobertura)

**Si fallan varios clientes:**

- posible problema general del AP

---

### IMPORTANTE: ARP del AP

Para que el ping sea válido:

- la MAC del cliente debe encontrarse correctamente registrada en el ARP del AP

Esto garantiza que el tráfico sea realmente:

**AP ↔ Cliente**

Si la MAC no está registrada:

- el tráfico puede pasar por el CRF
- los valores de pérdida o latencia dejan de ser representativos

#### Estado de la MAC

- Dinámica → aparece con **D**
- Estática → no posee **D**

#### Si la MAC no corresponde o no existe

No es posible realizar un ping directo desde el AP.

En ese caso realizar las pruebas desde el equipo frontend hacia:

- AP
- Cliente

Registrar expresamente en el reclamo:

- el ARP del CPE no está correctamente cargado en el AP
- no fue posible realizar pruebas directas desde el AP

#### Ejemplo

Cliente wireless

- IP: `10.150.160.197`
- MAC: `E4:8D:8C:E4:8C:39`

---

## 2.4 Bandwidth Test

Realizar un test de ancho de banda.

Verificar:

- si alcanza la velocidad contratada
- si existen pérdidas durante la prueba
- comportamiento general del enlace

---

## 2.5 Validaciones técnicas adicionales

Siempre que sea posible revisar y registrar:

- cadenas degradadas
- pérdida en corto
- pérdida hacia host
- valores Tx/Rx
- uptime del equipo
- interfaz utilizada
- señal de instalación
- calidad de transferencia
- comparación con otros clientes del mismo AP
- comportamiento anómalo del CPE
- comportamiento anómalo del enlace

---

## 2.6 Revisión de historial y contexto

Antes de derivar revisar:

- reclamos anteriores
- visitas técnicas previas
- presencia de árboles u obstáculos
- construcciones nuevas
- necesidad de poda
- tormentas
- viento
- sobrecalentamiento del router
- condiciones previamente diagnosticadas
- señal históricamente aceptada
- afectaciones generales en curso

---

# 3. Criterios de derivación

## 3.1 Cuándo derivar

Derivar cuando la calidad del servicio realmente se encuentre degradada y requiera intervención técnica.

La derivación puede sustentarse en:

- maniobras remotas sin resultado
- mala señal
- calidad inferior al 50 %
- cadenas degradadas
- pérdida en corto
- pérdida hacia host
- enlace degradado
- necesidad de revisión domiciliaria
- contexto físico que afecte el enlace

---

## 3.2 Casos donde no corresponde este diagnóstico

No utilizar este diagnóstico cuando:

- el inconveniente pertenece únicamente al dispositivo del cliente
- el problema corresponde solamente al WiFi interno
- existe una configuración incorrecta del equipo local sin degradación del enlace

---

## 3.3 Casos con factores externos

Si existen factores externos que afectan el servicio:

- derivar según corresponda
- dejar documentado el factor detectado
- evaluar baja técnica cuando aplique

### Ejemplo

Cliente rural con señal de **-72 dBm** desde la instalación, condición conocida y aceptada previamente. En estos casos deberá analizarse el contexto antes de derivar automáticamente.

---

# 4. Información obligatoria a registrar

El reclamo debe contener:

- síntoma informado
- desde cuándo ocurre
- alcance del problema
- dispositivos afectados
- tipo de conexión involucrada
- pruebas remotas realizadas
- resultado de cada prueba
- hallazgo técnico
- evidencia recibida
- disponibilidad horaria
- contacto principal
- contacto alternativo
- motivo de derivación
- siguiente paso informado al cliente

---

# 5. Evidencia

Cuando sea necesaria evidencia registrar:

- qué evidencia fue solicitada
- si fue recibida
- qué información aportó

Puede solicitarse:

- foto del router
- foto del POE
- foto de conexiones
- captura del error
- captura de redes WiFi
- SSID
- banda utilizada (2.4 GHz o 5 GHz)
- dispositivo utilizado para la prueba

---

# 6. Clientes con cobertura de Fibra Óptica

**Siempre verificar cobertura de Fibra Óptica antes de derivar.**

Si el cliente posee cobertura:

- no derivar a Diagnóstico de Redes por degradación wireless
- generar la Actualización a Fibra Óptica (AFO / Actualización Tecnológica, según el procedimiento vigente)
- vincular la AFO con el reclamo
- vincular el reclamo con la AFO
- solicitar prioridad a Coordinación según el circuito establecido

---

# 7. Comunicación con el cliente

Informar de manera clara:

- qué verificaciones se realizaron
- cuál fue el hallazgo
- por qué se deriva el caso
- cuál será el siguiente paso

No informar plazos que no estén confirmados por el circuito operativo correspondiente.
