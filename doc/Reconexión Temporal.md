
# Reconexión temporal de un cliente (72 horas)

Para otorgar una reconexión temporal de **72 horas**, seguir el siguiente procedimiento.

## 1. Ingresar a Swagger

Acceder a:

https://api.eternet.cc/swagger/index.html?urls.primaryName=Customers

Luego abrir el endpoint:

**/Customers/ReconnectServiceSuspension**

> <img width="1867" height="815" alt="image" src="./imagenes/ae77e67e-6690-4b2f-b471-9e843bdae134.png" />


---

## 2. Habilitar la edición

Hacer clic en **Try it out** para habilitar el formulario.

> <img width="1857" height="888" alt="image" src="./imagenes/af39b9d5-a281-4e7b-84bd-00e89cf2d43d.png" />


---

## 3. Completar el formulario

Completar los siguientes campos:

- **customerId:** ingresar el número de abonado del cliente.
- **observations:** ingresar el motivo de la reconexión temporal.
- **force:** dejar el valor en **false**.

Una vez completados los datos, hacer clic en **Execute**.

> <img width="1670" height="770" alt="image" src="./imagenes/afc9f20a-c02b-4231-94bf-9fe1ec4a981a.png" />


---

## 4. Verificar el resultado

### Reconexión exitosa

Si el cliente cumple las condiciones para recibir la reconexión temporal y no posee una reconexión previa vigente o ya utilizada, la operación se completará correctamente.

### Error

Si el cliente **ya utilizó una reconexión temporal** o **no corresponde realizarla**, el sistema devolverá un mensaje de error indicando el motivo.

> <img width="1647" height="842" alt="image" src="./imagenes/b2992550-5e90-4e83-bcd2-8c5e137667bb.png" />
