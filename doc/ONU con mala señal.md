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
> <img width="1901" height="656" alt="image" src="https://github.com/user-attachments/assets/88681c2d-5e1d-4101-85d0-6c8477ce6822" />
> <img width="1554" height="577" alt="image" src="https://github.com/user-attachments/assets/4763e203-8af7-4acb-bb07-ab2330d7426a" />


---

# Paso 2. Verificar que la ONU sea la correcta

Comprobar:

- La MAC corresponde al cliente.
- La ONU está registrada.
- El estado de la ONU es el esperado.

Si la ONU no está registrada, continuar con el procedimiento correspondiente y no con este diagnóstico.
Si la ONU esta registrada en Grafana figurara luego de buscarla. Como en la siguente imagen.
> <img width="1909" height="630" alt="image" src="https://github.com/user-attachments/assets/34626505-68c2-43e6-a411-81aaa717c7fd" />

---

# Paso 3. Revisar la señal óptica actual

Consultar los valores actuales de la ONU.

Verificar:

- RX
- TX

Comprobar si los valores se encuentran dentro de los rangos normales.

Registrar los valores obtenidos.
En el ejemplo, se verifica una señal extremadamente baja. En la mayoría de las redes GPON, una ONU deja de funcionar correctamente alrededor de -27 a -28 dBm.
> <img width="1547" height="581" alt="image" src="https://github.com/user-attachments/assets/97e7e397-78a3-45ed-963f-cf5f8b1b8506" />

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
> <img width="1541" height="584" alt="image" src="https://github.com/user-attachments/assets/4c254804-9b93-4090-9df9-abae2bf41017" />

---

# Paso 5. Revisar el historial de eventos

Consultar los eventos registrados por la ONU.

Verificar:

- Fecha y hora de las desconexiones.
- Cantidad de eventos.
- Si las desconexiones coinciden con cambios en la señal.

Registrar los resultados.

En el ejemplo, se verifica flapeos en la señal optica:
> <img width="1551" height="583" alt="image" src="https://github.com/user-attachments/assets/baf199fd-aa28-48e0-9593-627261c8a1b4" />

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

> <img width="1551" height="526" alt="image" src="https://github.com/user-attachments/assets/f8629238-88d2-43f5-90a6-cccac70f67a5" />


---

## Evento Dying Gasp

Indica que la ONU perdió alimentación o se reinició.

Puede deberse a:

- Corte de luz.
- Fuente desconectada.
- Reinicio del equipo.

Este evento **no significa necesariamente** que exista una mala señal óptica.

Consultar al cliente si sufrió cortes de energía antes de continuar.

> <img width="1548" height="578" alt="image" src="https://github.com/user-attachments/assets/a7b2caa2-e7d4-4af7-a0fc-31e20f1f3240" />

---

# Paso 7. Revisar el puerto Ethernet

Verificar el estado del puerto Ethernet de la ONU.

Comprobar:

- Si el puerto tiene enlace.
- Si aparecen alarmas de conexión o desconexión.

Si la señal óptica es correcta pero el puerto Ethernet presenta problemas, continuar con el procedimiento correspondiente a red interna o router.

> <img width="1547" height="562" alt="image" src="https://github.com/user-attachments/assets/039d379b-a78d-49ca-b3d9-b6325b24b307" />

---

# Paso 8. Revisar la tabla MAC

Abrir la tabla MAC de la ONU.

Verificar que aparezca la MAC del router del cliente.

Si no aparece y la señal óptica es correcta, la falla probablemente no sea de señal.
> <img width="1569" height="548" alt="image" src="https://github.com/user-attachments/assets/5eab2441-7bde-43c0-acf9-34fa97b95e90" />
> <img width="544" height="220" alt="image" src="https://github.com/user-attachments/assets/5b0ecf9d-d644-4be4-af3d-e5acc2b04e70" />

---

# Paso 9. Confirmar el diagnóstico

Considerar **ONU con mala señal** cuando se observe alguno de estos casos:

- RX o TX fuera de los valores normales.
- Señal inestable.
- Variaciones frecuentes en el historial.
- Eventos LOSI recurrentes.
- Desconexiones relacionadas con cambios en la señal.

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
