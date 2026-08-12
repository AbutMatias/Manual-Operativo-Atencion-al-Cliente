
# Verificar el estado de los sitios en Power Monitor (Grafana)

Cuando un sitio no pertenece al área de cobertura de **EDES** o se desea verificar su estado eléctrico, se puede consultar **Power Monitor** en Grafana.

## 1. Ingresar a Power Monitor

Acceder al panel **Power Monitor** en Grafana.

> <img width="1901" height="914" alt="image" src="./imagenes/8d3b82be-5d93-4436-b2c1-e4eeeba20837.jpg" />
---

## 2. Abrir la sección Sitios

Seleccionar la opción **Sitios**.

> <img width="1902" height="699" alt="image" src="./imagenes/8d4384e0-abd5-4ac6-b2ff-45e5f8bcda72.jpg" />

---

## 3. Seleccionar una localidad

Se mostrará un listado con todas las localidades monitoreadas.

Seleccionar la localidad que se desea consultar.

> <img width="1887" height="896" alt="image" src="./imagenes/8e0e7bb1-93fd-4274-9c6e-1cf24668558a.jpg" />

---

## 4. Verificar los valores del sitio

Al abrir una localidad se visualizarán los datos del sistema de alimentación del sitio.

Los principales indicadores son:

- **Voltaje de entrada:** tensión de alimentación eléctrica.
- **Capacidad de baterías:** nivel de carga disponible.
- **Descarga de baterías (A):** corriente consumida por las baterías.
- **Voltaje de salida:** tensión entregada por el sistema.
- **Consumo (W):** potencia consumida por el sitio.

> <img width="1907" height="923" alt="image" src="./imagenes/8e146429-b101-4391-bb5a-fe7757dcdda3.jpg" />
> <img width="1910" height="797" alt="image" src="./imagenes/8eba9128-c6cc-4c43-978e-9ba6aaa8e020.jpg" />

---

## Interpretación rápida

- **Hay voltaje de entrada:** el sitio posee suministro eléctrico.
- **No hay voltaje de entrada y las baterías se están descargando:** el sitio se encuentra funcionando con batería debido a un corte de energía.
- **No hay voltaje de entrada y las baterías están agotadas:** el sitio probablemente se encuentre fuera de servicio.
- **Consumo en 0 W o valores anormales:** puede indicar que el sitio está apagado o presenta una falla.

> <img width="1843" height="891" alt="image" src="./imagenes/8facd557-6541-46f1-a95e-ab7750c7206f.jpg" />
