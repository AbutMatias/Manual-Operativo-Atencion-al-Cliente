# Sin Respuesta General en una CD

## ¿Qué significa?

Si ninguno de los clientes de una Caja de Distribución (CD) tiene servicio y sus ONUs aparecen sin respuesta, es posible que exista una falla general en la red.

---

## Paso 1: Verificar energía eléctrica

Antes de revisar la red, confirmar con el cliente:

- Que tenga luz en la vivienda.
- Que la ONU esté encendida.
- Que el router esté encendido.
- El estado de la luz LOS de la ONU.

> **Importante:** Puede existir un corte eléctrico en la zona y el cliente reclamar utilizando un celular o notebook sin darse cuenta de que los equipos de internet están apagados.

---

## Paso 2: Confirmar si afecta a más clientes

Si hay pocos reclamos y el horario lo permite:

1. Revisar otros clientes de la misma CD.
2. Verificar si también están sin servicio.
3. Confirmar que sus equipos estén encendidos.

Si varios clientes presentan el mismo problema, probablemente se trate de una falla general.

---

## Paso 3: Revisar Netmap

Subir en el árbol de red para identificar dónde se origina el problema.

Verificar si la falla afecta:

- Una CD.
- Varias CD.
- Un puerto PON.
- Varios puertos PON.
- Una OLT completa.

---

## Paso 4: Escalar la incidencia

Si se detecta una falla general:

1. Crear un Issue para el área de Redes.
2. Etiquetar a `@Eternet/obras-distribucion-fibra-optica` `@Eternet/backofficetecnico` `@Eternet/atencion-al-cliente`.
3. Informar también por WhatsApp.

---

## Resumen Rápido

✅ Verificar energía eléctrica.

✅ Confirmar que ONU y router estén encendidos.

✅ Revisar otros clientes de la misma CD.

✅ Analizar la topología en Netmap.

✅ Escalar a Redes si la falla es general.
