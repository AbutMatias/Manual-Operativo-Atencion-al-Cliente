# Diagnóstico de saturación de ancho de banda

## Introducción

Una de las causas más frecuentes de lentitud o cortes en la navegación es la saturación del ancho de banda contratado.

Esto ocurre cuando uno o varios dispositivos consumen gran parte de la capacidad disponible de la conexión, afectando al resto de los equipos de la red.

Es más común en:

* Conexiones wireless de baja velocidad.
* Planes de 30 Mbps o 50 Mbps.
* Hogares con muchos dispositivos conectados.

> Importante:
> La saturación puede producirse tanto por descarga como por subida de datos.

---

# Causas más comunes

## Descargas y actualizaciones

Algunas actividades pueden consumir gran parte del ancho de banda disponible:

* Descarga de juegos.
* Actualizaciones de Windows.
* Actualizaciones de consolas.
* Descarga de archivos grandes.

Si varios dispositivos realizan estas tareas al mismo tiempo, la conexión puede verse afectada.

---

## Streaming de video

Las plataformas de video consumen ancho de banda de forma constante.

Ejemplos:

* YouTube
* Netflix
* Disney+
* Prime Video

### Consumo aproximado

| Calidad       | Consumo      |
| ------------- | ------------ |
| SD            | 1 a 2 Mbps   |
| HD 720p       | 3 a 5 Mbps   |
| Full HD 1080p | 5 a 8 Mbps   |
| 4K            | 15 a 25 Mbps |

---

## Consumo simultáneo

Cuantos más dispositivos estén utilizando internet al mismo tiempo, mayor será el consumo total.

Ejemplos:

* Televisor reproduciendo Netflix.
* Celular viendo videos.
* PC descargando juegos.
* Cámara de seguridad transmitiendo.

Todo suma al consumo de la conexión.

---

# Cómo verificar una saturación

## Método rápido (Hotspot)

1. Ingresar al Hotspot correspondiente.
2. Ir a:

```text
IP > Hotspot > Hosts
```

3. Buscar la IP del cliente.
4. Revisar las columnas:

* Tx Rate (subida)
* Rx Rate (descarga)

Si los valores son cercanos a la velocidad contratada, probablemente exista saturación.

<img width="954" height="582" alt="image" src="https://github.com/user-attachments/assets/544e12b4-ef12-472e-90b1-378e9a621c1a" />


---

# Diagnóstico en routers MikroTik

Los routers MikroTik permiten identificar qué dispositivo está consumiendo ancho de banda.

## Ver tráfico en tiempo real

Ingresar a:

```text
Interfaces
```

Allí se puede observar:

* Consumo actual
* Picos de tráfico
* Si el consumo proviene de LAN o WiFi

<img width="1373" height="327" alt="image" src="https://github.com/user-attachments/assets/b514d0fc-88f2-4950-a377-e667c4c3310e" />


---

## Identificar qué equipo consume

### Utilizar Torch

1. Abrir Interfaces.
2. Clic derecho sobre:

```text
brPrivada
```

3. Seleccionar:

```text
Torch
```

La herramienta mostrará:

* IP de origen
* Consumo de subida
* Consumo de bajada

<img width="1702" height="842" alt="image" src="https://github.com/user-attachments/assets/cef2a226-bd23-468c-bc31-23d44b292043" />


---

## Identificar el dispositivo

Una vez obtenida la IP privada del equipo que más consume:

1. Ir a:

```text
IP > DHCP Server > Leases
```

2. Buscar la IP observada en Torch.

3. Identificar el dispositivo correspondiente.

---

# Recomendaciones para el cliente

Si se detecta saturación:

* Verificar que no existan descargas activas.
* Revisar actualizaciones de juegos o sistemas operativos.
* Reducir la cantidad de dispositivos conectados.
* Bajar la calidad de reproducción de video si es necesario.
* Considerar un plan de mayor velocidad si el consumo habitual supera la capacidad contratada.

---

# Resumen rápido

## El cliente reporta lentitud

1. Verificar consumo en Hotspot.
2. Confirmar si la conexión está saturada.
3. Si tiene MikroTik:

   * Revisar Interfaces.
   * Utilizar Torch.
   * Identificar el dispositivo que consume.
4. Informar al cliente la causa del consumo.
5. Brindar recomendaciones según el caso.
