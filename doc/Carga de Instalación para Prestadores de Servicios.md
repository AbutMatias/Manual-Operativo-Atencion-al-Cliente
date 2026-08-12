# Carga de Instalación para Prestadores de Servicios

## Convenios Vigentes

Actualmente el convenio aplica para los siguientes prestadores:

- Misión Digital
- Cooperativa Eléctrica El Perdido
- Cooperativa Eléctrica de Indio Rico

---

# Explicación del Proceso para Prestadores

## Origen del Pedido de Instalación

Los prestadores generan la orden de instalación desde:

https://eternetonline.eternet.cc/Login.aspx

### Paso 1: Iniciar sesión

Ingresar con las credenciales correspondientes.

### Paso 2: Completar los datos de la solicitud

Se visualizará la pantalla de carga de datos.

![Image](./imagenes/1a89a5fa-1187-4729-9576-08f0fa61d20c.jpg)

<br><br><br>

### Paso 3: Generar la solicitud

Al seleccionar **Siguiente**, se genera la solicitud de instalación.

Como resultado:

- Se envía una notificación por correo electrónico.
- Se genera automáticamente el pedido de instalación en SSAK para su procesamiento.

La solicitud llega al correo:

`ventas@eternet.cc`

Mostrando el nombre y apellido o razón social del cliente.

![image](./imagenes/1b53c0c3-2afb-408c-b5f9-91e6fb032719.jpg)



---

# Proceso de Carga en SSAK

## Paso 1 - Buscar la instalación

En SSAK ingresar a:

`Instalaciones → Instalaciones confirmadas en Entidades`

![image](./imagenes/1b5a46d4-1367-4d90-abbb-e26af06bf48a.jpg)



Al ingresar se visualizará un listado con:

- Instalaciones pendientes.
- Instalaciones confirmadas.
- Número de ID de cada solicitud.

### Recomendación

Ordenar el listado por ID de instalación en forma descendente para localizar rápidamente la solicitud más reciente.

---

## Paso 2 - Confirmar instalación

Ingresar a:

`Acciones → Confirmar Instalación`

Se mostrará la información cargada por el prestador.

### Completar únicamente:

- Latitud
- Longitud

Luego presionar **Aceptar**.

![image](./imagenes/1bc4b066-54e1-46f2-a0ab-7eda5fc2e67e.jpg)

<br><br><br>

![image](./imagenes/1d39df25-8e32-4855-af8e-76cba1a6e5d7.jpg)

<br><br><br>

> [!NOTE]
> No es necesario dar de alta al cliente manualmente en el sistema. El alta se genera automáticamente al confirmar la instalación.

---

## Paso 3 - Crear la Issue en GitHub

Una vez confirmada la instalación en SSAK, se debe cargar la Issue correspondiente utilizando el formulario de instalación.

### Formulario

- Tipo: **Nueva Instalación**
- Repositorio: **Coordinación**
- Etiqueta: **Instalación**

Ejemplo de título:

```text
Cliente #XXX - Razón Social - Instalación
