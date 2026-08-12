# Diagnóstico - ONU con mala señal

## Objetivo

Determinar si la falla corresponde realmente a una mala señal óptica antes de derivar el caso.

---

# Paso 1. Ingresar a la OLT

1. Ingresar a **Grafana**.
2. Abrir la carpeta **OLTs**.
3. Seleccionar la **OLT** correspondiente a la zona del cliente. (**ZTE**: Tres Arroyos. **SOPTO**: Bahia Blanca, Balcarce, Benito Juarez, Cascallares, Chaves, Claromeco, Indio Rico, Orense, Reta y San Cayetano)
4. Obtener la **MAC de la ONU** desde SSKA.
5. Ingresar la MAC en el buscador.
6. Presionar **QUERY**.
> <img width="1901" height="656" alt="image" src="./imagenes/70f56007-16b2-4231-b12d-a648d697d63b.png" />
> <img width="1554" height="577" alt="image" src="./imagenes/71911608-6d7a-4b24-9dd3-43edb8b98304.png" />


---

# Paso 2. Verificar que la ONU sea la correcta

Comprobar:

- La MAC corresponde al cliente.
- La ONU está registrada.
- El estado de la ONU es el esperado.

Si la ONU no está registrada, continuar con el procedimiento correspondiente y no con este diagnóstico.
Si la ONU esta registrada en Grafana figurara luego de buscarla. Como en la siguente imagen.
> <img width="1909" height="630" alt="image" src="./imagenes/7264b129-fb60-47ec-8bbe-b77e8c4da09a.png" />

---

# Paso 3. Revisar la señal óptica actual

Consultar los valores actuales de la ONU.

Verificar:

- RX
- TX

Comprobar si los valores se encuentran dentro de los rangos normales.

Registrar los valores obtenidos.
En el ejemplo, se verifica una señal extremadamente baja. En la mayoría de las redes GPON, una ONU deja de funcionar correctamente alrededor de -27 a -28 dBm.
> <img width="1547" height="581" alt="image" src="./imagenes/733b846a-c382-402e-a279-bdb1c3f5cee0.png" />

---

# Paso 4. Revisar el historial de señal

Abrir el gráfico de señales históricas.

Verificar:

- Si la señal se mantiene estable.
- Si presenta caídas frecuentes.
- Si empeoró con el tiempo.
- Si las caídas coinciden con el horario informado por el cliente.

Siempre comparar la señal actual con el historial antes de diagnosticar una mala señal.

En el ejemplo, se verifica flapeos en la señal optica:
> <img width="1541" height="584" alt="image" src="./imagenes/738621b0-d184-4a1e-a31e-aea0b4244e6a.png" />

---

# Paso 5. Revisar el historial de eventos

Consultar los eventos registrados por la ONU.

Verificar:

- Fecha y hora de las desconexiones.
- Cantidad de eventos.
- Si las desconexiones coinciden con cambios en la señal.

Registrar los resultados.

En el ejemplo, se verifica flapeos en la señal optica:
> <img width="1551" height="583" alt="image" src="./imagenes/76b400b5-0865-446b-863b-68c709dd0770.png" />

---

# Paso 6. Identificar el tipo de evento

## Evento LOSI

Indica pérdida de señal óptica.

Puede deberse a:

- Problema en la fibra.
- Conector desconectado.
- Falta de señal óptica.

Si existen eventos LOSI, registrar:

- Fecha y hora.
- Cantidad de eventos.
- Estado actual de la señal.

> <img width="1551" height="526" alt="image" src="./imagenes/78a5a8df-21e7-439e-97c2-18fd9cf73987.png" />


---

## Evento Dying Gasp

Indica que la ONU perdió alimentación o se reinició.

Puede deberse a:

- Corte de luz.
- Fuente desconectada.
- Reinicio del equipo.

Este evento **no significa necesariamente** que exista una mala señal óptica.

Consultar al cliente si sufrió cortes de energía antes de continuar.

> <img width="1548" height="578" alt="image" src="./imagenes/78de9a68-3e04-47a4-9556-7a57bc2a65a9.png" />

---

# Paso 7. Revisar el puerto Ethernet

Verificar el estado del puerto Ethernet de la ONU.

Comprobar:

- Si el puerto tiene enlace.
- Si aparecen alarmas de conexión o desconexión.

Si la señal óptica es correcta pero el puerto Ethernet presenta problemas, continuar con el procedimiento correspondiente a red interna o router.

> <img width="1547" height="562" alt="image" src="./imagenes/7a57e8f7-7fb6-47ee-bf86-90875f0c2fce.png" />

---

# Paso 8. Revisar la tabla MAC

Abrir la tabla MAC de la ONU.

Verificar que aparezca la MAC del router del cliente.

Si no aparece y la señal óptica es correcta, la falla probablemente no sea de señal.
> <img width="1569" height="548" alt="image" src="./imagenes/7aef5379-4303-4763-a395-212cf8eda523.png" />
> <img width="544" height="220" alt="image" src="./imagenes/7b9bf717-b821-4dc1-948c-b7bc36344ae3.png" />

---

# Paso 9. Confirmar el diagnóstico

Considerar **ONU con mala señal** cuando se observe alguno de estos casos:

- RX o TX fuera de los valores normales.
- Señal inestable.
- Variaciones frecuentes en el historial.
- Eventos LOSI recurrentes.
- Desconexiones relacionadas con cambios en la señal.
- Comparación con otro cliente de la misma CD.

Si el problema corresponde a alimentación, router, cableado interno o Ethernet, utilizar el procedimiento correspondiente.

---

# Paso 10. Registrar la información

Antes de derivar, registrar:

- MAC de la ONU.
- OLT consultada.
- Estado de la ONU.
- Valores de RX y TX.
- Resultado del historial de señal.
- Eventos encontrados.
- Estado del puerto Ethernet.
- Resultado de la tabla MAC.
- Motivo de la derivación.

---

# Resumen rápido

1. Ingresar a Grafana y abrir la OLT.
2. Buscar la ONU por MAC.
3. Verificar que esté registrada.
4. Revisar RX y TX.
5. Comparar la señal con el historial.
6. Revisar los eventos.
7. Diferenciar LOSI de Dying Gasp.
8. Verificar Ethernet y tabla MAC.
9. Confirmar si realmente es una mala señal.
10. Registrar toda la información antes de derivar.
