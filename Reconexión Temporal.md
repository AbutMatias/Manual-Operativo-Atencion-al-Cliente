
# Reconexión temporal de un cliente (72 horas)

Para otorgar una reconexión temporal de **72 horas**, seguir el siguiente procedimiento.

## 1. Ingresar a Swagger

Acceder a:

https://api.eternet.cc/swagger/index.html?urls.primaryName=Customers

Luego abrir el endpoint:

**/Customers/ReconnectServiceSuspension**

> <img width="1867" height="815" alt="image" src="https://github.com/user-attachments/assets/a7f710f9-3b21-4fd7-b08f-8ef2fd9ed9e0" />


---

## 2. Habilitar la edición

Hacer clic en **Try it out** para habilitar el formulario.

> <img width="1857" height="888" alt="image" src="https://github.com/user-attachments/assets/0af1a7a5-67fa-4b6c-a727-4c49349a870c" />


---

## 3. Completar el formulario

Completar los siguientes campos:

- **customerId:** ingresar el número de abonado del cliente.
- **observations:** ingresar el motivo de la reconexión temporal.
- **force:** dejar el valor en **false**.

Una vez completados los datos, hacer clic en **Execute**.

> <img width="1670" height="770" alt="image" src="https://github.com/user-attachments/assets/990d8947-d03c-4637-80e2-b6878ec3a88d" />


---

## 4. Verificar el resultado

### Reconexión exitosa

Si el cliente cumple las condiciones para recibir la reconexión temporal y no posee una reconexión previa vigente o ya utilizada, la operación se completará correctamente.

### Error

Si el cliente **ya utilizó una reconexión temporal** o **no corresponde realizarla**, el sistema devolverá un mensaje de error indicando el motivo.

> <img width="1647" height="842" alt="image" src="https://github.com/user-attachments/assets/4cdee10e-61af-4e41-94f3-b7d1117d2420" />
