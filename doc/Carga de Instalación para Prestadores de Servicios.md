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

![Image](https://github.com/user-attachments/assets/8b8d4507-f146-4565-9797-43618651ffe8)

<br><br><br>

### Paso 3: Generar la solicitud

Al seleccionar **Siguiente**, se genera la solicitud de instalación.

Como resultado:

- Se envía una notificación por correo electrónico.
- Se genera automáticamente el pedido de instalación en SSAK para su procesamiento.

La solicitud llega al correo:

`ventas@eternet.cc`

Mostrando el nombre y apellido o razón social del cliente.

![image](https://github.com/user-attachments/assets/7190cbf6-6152-4808-ac43-982b46070f65)



---

# Proceso de Carga en SSAK

## Paso 1 - Buscar la instalación

En SSAK ingresar a:

`Instalaciones → Instalaciones confirmadas en Entidades`

![image](https://github.com/user-attachments/assets/047967c3-52a2-4fc3-8ef1-6858e1c8de51)



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

![image](https://github.com/user-attachments/assets/1c38a00f-f587-4a92-aada-20b742b5fce0)

<br><br><br>

![image](https://github.com/user-attachments/assets/15808337-c14b-4024-8f82-1d55a413e788)

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
