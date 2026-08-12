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

![image](./imagenes/0e5993aa-eee8-4126-849c-462e229729bc.jpg)

---

### Paso 2

Completamos los datos básicos:

* DNI / CUIT
* Localidad
* Domicilio

![image](./imagenes/0edec2f0-14c9-4c43-ac5e-b7626dbf05fb.jpg)

---

### Paso 3

Dentro de **Mantenimiento de Relaciones Comerciales**, luego de completar los datos, presionamos el botón `+`.

![image](./imagenes/0f4d872d-f519-4e5d-8347-5950590b60ae.jpg)

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

![image](./imagenes/0fd2f131-4889-4f95-ac1c-b04318ac086c.jpg)

---

## 🔸 Paso 2

Completar:

* Cargo de instalación.
* Tildar la opción `Sujeto a bonificación`.
* Seleccionar la tarifa.

El router en comodato se asigna automáticamente según la tarifa elegida.

![image](./imagenes/103e57da-de44-481d-a5ef-e5b31afa5759.jpg)

---

## 🔸 Paso 3

Seleccionar el botón `Recuperar`.

En la ventana de búsqueda:

* Filtrar por DNI, CUIT o Razón Social.
* Localizar al cliente.
* Realizar doble clic para seleccionarlo.

Los datos se completarán automáticamente.

![image](./imagenes/122708de-9104-4e80-80eb-9cdac313c7aa.jpg)

![image](./imagenes/138329a6-fa64-45e3-9b94-6c84b91a8378.jpg)

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

![image](./imagenes/163d4eb2-fe78-4932-a5e5-09f443bf5b42.jpg)

---

# Cobro o Bonificación de la Instalación

## 🔹 Paso 1

Buscar al cliente.

Ingresar al listado de instalaciones.

La instalación recién creada aparecerá con estado:

`Ventas`

![image](./imagenes/164240992-294c4974-e789-4efe-ab7e-516bd96ebcf7.jpg)

---

## 🔹 Paso 2

Hacer clic derecho sobre la instalación.

Seleccionar:

`Bonificaciones en cargos de instalación y/o abonos`

![image](./imagenes/17449644-5197-46e5-b87b-f3c08bf28afc.jpg)

---

## 🔹 Paso 3

Según lo acordado con el cliente, existen tres escenarios posibles.

### Bonificación Total del Cargo de Instalación

![image](./imagenes/17a51fa9-b0c2-4aea-b2a0-954b5fa4968b.jpg)

---

### Bonificación del 50% del Cargo de Instalación

![image](./imagenes/18e2cdcf-28dc-4a64-8bec-65d76f458ef4.jpg)

---

### Cobro Total de la Instalación

![image](./imagenes/18e7fd97-8fe4-4c7f-9139-68ec5fc86da4.jpg)

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
