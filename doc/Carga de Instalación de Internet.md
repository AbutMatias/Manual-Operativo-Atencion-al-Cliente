# Carga de Instalación de Internet

# Introducción

En este documento se detalla el proceso completo de carga de una instalación de Internet, desde la identificación del cliente hasta la aplicación de bonificaciones o cobros correspondientes.

---

# Identificación del Cliente

Antes de cargar una instalación debemos verificar si el cliente ya existe en el sistema.

## Cliente Nuevo

Si se trata de un cliente nuevo, debemos crearlo previamente.

### Paso 1

Desde SSAK seleccionamos el botón `Nuevo Cliente`.

![image](https://github.com/user-attachments/assets/03619f25-62ed-4129-b7be-bbb70bbc1fa8)

---

### Paso 2

Completamos los datos básicos:

* DNI / CUIT
* Localidad
* Domicilio

![image](https://github.com/user-attachments/assets/a609492d-9897-4498-8b6e-2e2baf427154)

---

### Paso 3

Dentro de **Mantenimiento de Relaciones Comerciales**, luego de completar los datos, presionamos el botón `+`.

![image](https://github.com/user-attachments/assets/e282c478-f1dd-46b5-8f57-010042a39c4e)

---

> [!IMPORTANT]
> Solo podremos continuar si el cliente no posee deuda pendiente ni equipos pendientes de retiro.

---

# Proceso de Carga de la Instalación

## 🔸 Paso 1

En SSAK dirigirse a:

`Instalaciones` → `Asistente de Instalaciones`

Completar:

* Localidad
* Tipo: `Instalación Domiciliaria`

Luego seleccionar **Siguiente**.

![image](https://github.com/user-attachments/assets/f6c7b084-989c-410a-85cc-900b4feb8ec4)

---

## 🔸 Paso 2

Completar:

* Cargo de instalación.
* Tildar la opción `Sujeto a bonificación`.
* Seleccionar la tarifa.

El router en comodato se asigna automáticamente según la tarifa elegida.

![image](https://github.com/user-attachments/assets/b5bc5308-1c0b-4109-a70c-8f64bfc2d1ce)

---

## 🔸 Paso 3

Seleccionar el botón `Recuperar`.

En la ventana de búsqueda:

* Filtrar por DNI, CUIT o Razón Social.
* Localizar al cliente.
* Realizar doble clic para seleccionarlo.

Los datos se completarán automáticamente.

![image](https://github.com/user-attachments/assets/feae7501-5d61-4905-bd30-686732829a54)

![image](https://github.com/user-attachments/assets/cde0be64-e340-48dd-9672-9af0a22dba82)

---

## 🔸 Paso 4

### Obtención de Nodo Cercano

Ir a:

`Equipos de Red` → `Nodos` → `Nodos cercanos a un punto`

### Procedimiento

1. Ingresar la latitud y longitud del cliente.
2. Presionar el botón de búsqueda.
3. Identificar la CD más cercana.
4. Copiar los datos correspondientes.

### Completar la instalación

Cargar:

* Dirección.
* Altura.
* Latitud.
* Longitud.
* Observaciones para instaladores.
* Observaciones para técnicos.
* Datos de la CD más cercana.
* Cantidad de puertos totales y ocupados.
* Celular del cliente.
* Disponibilidad horaria.

Finalmente seleccionar **Finalizar**.

![image](https://github.com/user-attachments/assets/0f0243e2-2797-4d8d-9335-a334d8afdf24)

---

# Cobro o Bonificación de la Instalación

## 🔹 Paso 1

Buscar al cliente.

Ingresar al listado de instalaciones.

La instalación recién creada aparecerá con estado:

`Ventas`

![image](https://github.com/user-attachments/assets/ab62f0da-39f5-45bd-8da7-2e7892e34d90)

---

## 🔹 Paso 2

Hacer clic derecho sobre la instalación.

Seleccionar:

`Bonificaciones en cargos de instalación y/o abonos`

![image](https://github.com/user-attachments/assets/0104822a-d50e-45ad-8002-3fb451475bea)

---

## 🔹 Paso 3

Según lo acordado con el cliente, existen tres escenarios posibles.

### Bonificación Total del Cargo de Instalación

![image](https://github.com/user-attachments/assets/a0fa34a3-d7ff-4411-aa35-a896cbc25f60)

---

### Bonificación del 50% del Cargo de Instalación

![image](https://github.com/user-attachments/assets/3af71f8b-279b-4bc1-aab6-a2ebcbb32f48)

---

### Cobro Total de la Instalación

![image](https://github.com/user-attachments/assets/87e1d146-6331-49ff-ac67-a0210b64476c)

---

> [!NOTE]
> Si el cliente posee una deuda anterior, el proceso de carga es exactamente el mismo.
>
> Al momento de aplicar la bonificación se definirá si:
>
> * Se incorpora la deuda al cargo de instalación.
> * Se bonifica totalmente.
> * Se cobra parcialmente.

---

# Conceptos Importantes

> [!IMPORTANT]
> Es fundamental comprender la diferencia entre los campos **Nuevo Cargo de Instalación** y **Nuevo Anticipo**.

### Nuevo Cargo de Instalación

Corresponde al importe que el cliente abonará luego de realizada la instalación.

### Nuevo Anticipo

Corresponde al importe que el cliente debería abonar antes de la instalación.

> [!NOTE]
> En nuestro proceso actual primero se instala y luego se factura.
>
> Por este motivo el campo **Nuevo Anticipo** debe permanecer siempre en **0**.

---

# Resultado Esperado

Una vez aplicada la bonificación o el cobro correspondiente:

* La instalación debe cambiar su estado.
* Debe pasar de `Ventas` a `Sin Iniciar`.
* Quedará disponible para la gestión operativa y coordinación técnica.
