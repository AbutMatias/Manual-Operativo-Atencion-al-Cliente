
# Verificar el estado de los sitios en Power Monitor (Grafana)

Cuando un sitio no pertenece al área de cobertura de **EDES** o se desea verificar su estado eléctrico, se puede consultar **Power Monitor** en Grafana.

## 1. Ingresar a Power Monitor

Acceder al panel **Power Monitor** en Grafana.

> <img width="1901" height="914" alt="image" src="https://github.com/user-attachments/assets/ea391ef7-d262-433e-ac95-04711f22756c" />
---

## 2. Abrir la sección Sitios

Seleccionar la opción **Sitios**.

> <img width="1902" height="699" alt="image" src="https://github.com/user-attachments/assets/6d1a4195-96d7-4184-87e2-ba861d7d72c9" />

---

## 3. Seleccionar una localidad

Se mostrará un listado con todas las localidades monitoreadas.

Seleccionar la localidad que se desea consultar.

> <img width="1887" height="896" alt="image" src="https://github.com/user-attachments/assets/cd9adcdc-f795-4304-b412-6bd9470690a1" />

---

## 4. Verificar los valores del sitio

Al abrir una localidad se visualizarán los datos del sistema de alimentación del sitio.

Los principales indicadores son:

- **Voltaje de entrada:** tensión de alimentación eléctrica.
- **Capacidad de baterías:** nivel de carga disponible.
- **Descarga de baterías (A):** corriente consumida por las baterías.
- **Voltaje de salida:** tensión entregada por el sistema.
- **Consumo (W):** potencia consumida por el sitio.

> <img width="1907" height="923" alt="image" src="https://github.com/user-attachments/assets/45cae15e-7b79-4219-ba4d-85be1dd3a337" />
> <img width="1910" height="797" alt="image" src="https://github.com/user-attachments/assets/a1534253-a522-4d71-b740-21d4fc12d582" />

---

## Interpretación rápida

- **Hay voltaje de entrada:** el sitio posee suministro eléctrico.
- **No hay voltaje de entrada y las baterías se están descargando:** el sitio se encuentra funcionando con batería debido a un corte de energía.
- **No hay voltaje de entrada y las baterías están agotadas:** el sitio probablemente se encuentre fuera de servicio.
- **Consumo en 0 W o valores anormales:** puede indicar que el sitio está apagado o presenta una falla.

> <img width="1843" height="891" alt="image" src="https://github.com/user-attachments/assets/330c951b-6372-4c44-b031-39df68385461" />
