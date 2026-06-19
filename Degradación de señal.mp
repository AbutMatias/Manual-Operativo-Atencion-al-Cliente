# Degradación de Señal

## ¿Qué significa?

Puede ocurrir que algunos clientes tengan internet, pero el servicio funcione mal debido a problemas de señal óptica.

En estos casos es necesario verificar las señales de las ONUs para determinar si existe una degradación en la red.

---

## Paso 1: Verificar el alcance del problema

Identificar si:

* El problema afecta a un solo cliente.
* A varios clientes de la misma CD.
* A una zona completa.

---

## Paso 2: Obtener las señales de las ONUs

Las señales pueden consultarse desde:

**SSAK → Equipos de Red → ONUs → Listado de ONUs**

Buscar por:

* CD
* Nodo Padre

> **Importante:** Siempre que sea posible, obtener las señales en tiempo real de las ONUs afectadas.

---

## Paso 3: Comparar con el DBM límite

Cada CD posee un valor máximo de señal admitido (DBM límite).

Comparar la señal de cada ONU con ese valor para determinar su estado.

### Señal Normal

* Igual o mejor que el DBM límite.
* No debería presentar inconvenientes.

### Señal con Problemas

* Supera levemente el DBM límite.
* Generalmente el servicio sigue funcionando.
* Debe monitorearse ya que puede empeorar.

### Señal Crítica

* Supera ampliamente el DBM límite.
* Puede provocar cortes, lentitud o inestabilidad.

---

## Paso 4: Buscar patrones

Verificar si varias ONUs presentan señales elevadas.

Si se observa un patrón de señales altas en una misma zona, CD o nodo:

➡️ Reportar el caso al área de Redes.

---

## Paso 5: Revisar logs de la OLT

Consultar los registros de la OLT para identificar eventos relacionados con la señal.

Prestar atención a:

* Pérdidas de registro.
* Reconexiones frecuentes.
* Eventos de desconexión de ONUs.

Estos eventos pueden indicar problemas de señal óptica.

---

## Cuándo escalar

Escalar al área de Redes cuando:

* Existan múltiples ONUs con señal crítica.
* Se detecte un patrón de degradación en una CD o nodo.
* Los logs de la OLT evidencien pérdidas de registro asociadas a problemas de señal.

---

## Resumen Rápido

✅ Obtener señales de las ONUs.

✅ Comparar contra el DBM límite.

✅ Identificar si la señal es Normal, Con Problemas o Crítica.

✅ Buscar patrones en varios clientes.

✅ Revisar logs de la OLT.

✅ Escalar a Redes si la degradación es general.
