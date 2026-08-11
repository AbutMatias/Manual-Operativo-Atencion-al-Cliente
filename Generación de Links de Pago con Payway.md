
# Generación de Links de Pago con Payway

Los links de pago permiten cobrar a clientes mediante tarjetas de crédito VISA y Mastercard utilizando la plataforma:

https://mi.payway.com.ar

> [!IMPORTANT]
> Los links generados son exclusivamente para pagos con tarjeta de crédito.

---

# Generación del Link de Pago

## 1. Ingresar a la opción de generación de links

Desde el menú principal seleccionamos **Generar Link de Pago**.

<img width="347" height="67" alt="image" src="https://github.com/user-attachments/assets/7f2aa180-39e2-4f85-9a21-8b8cf6871e40" />


---

## 2. Ingresar el monto a cobrar

Completar el importe correspondiente al pago que realizará el cliente.

<img width="305" height="115" alt="image" src="https://github.com/user-attachments/assets/b302b4ed-22d7-4eea-ba25-3486425a2592" />


---

## 3. Completar los datos del cliente

Aunque Payway permite generar el link sin estos datos, para Eternet este paso es obligatorio.

Se debe completar:

- Nombre y apellido
- Correo electrónico
- Información solicitada por el sistema

<img width="312" height="96" alt="image" src="https://github.com/user-attachments/assets/3e991f85-9be2-4404-8b12-830ca2fc7f65" />


---

## 4. Seleccionar la tarjeta

Elegir la tarjeta con la que el cliente realizará el pago.

Tarjetas habilitadas:

- VISA Crédito
- Mastercard Crédito

> [!IMPORTANT]
> No se utilizan tarjetas de débito mediante este procedimiento.

<img width="229" height="159" alt="image" src="https://github.com/user-attachments/assets/874f32b1-6057-49fa-9cda-17761d98366f" />


---

## 5. Seleccionar establecimiento

El sistema mostrará automáticamente el establecimiento correspondiente según la tarjeta elegida.

Normalmente aparecerá una única opción disponible.

<img width="321" height="84" alt="image" src="https://github.com/user-attachments/assets/e2feee54-5e18-47e4-a9f6-ef1cabbcab28" />


---

## 6. Seleccionar cantidad de cuotas

Elegir la cantidad de cuotas acordada con el cliente.

<img width="327" height="93" alt="image" src="https://github.com/user-attachments/assets/7264b129-fb60-47ec-8bbe-b77e8c4da09a" />

---

## 7. Crear el link

Una vez completados todos los campos, presionar **Crear Link**.

<img width="174" height="77" alt="image" src="https://github.com/user-attachments/assets/e2f1fd0b-f096-429b-9fd1-a4a33844249f" />

---

## 8. Compartir el link

Payway mostrará una pantalla desde donde podremos copiar el enlace y enviarlo al cliente.

La opción más práctica es utilizar **Copiar Link**.

<img width="340" height="521" alt="image" src="https://github.com/user-attachments/assets/6a5031df-af3f-4478-90e6-85d34aa14509" />


---

# Registro del Pago en el Sistema

La carga del pago se realiza de la misma forma que actualmente.

La única diferencia es que:

- La terminal utilizada debe ser la **Terminal Web**
- Número de terminal: **5**

> [!IMPORTANT]
> El pago solo debe registrarse cuando el estado figure como **APROBADO**.

<img width="799" height="83" alt="image" src="https://github.com/user-attachments/assets/6f1fab16-69cc-43bf-8c2a-0510b3431085" />


---

# Estados de los Links de Pago

Los links pueden encontrarse en distintos estados.

## Pendiente

El cliente aún no abrió el link o no inició el pago.

<img width="80" height="30" alt="image" src="https://github.com/user-attachments/assets/449067ec-33e1-4e0d-bab5-e7f73f54b5de" />


---

## Aprobado

El pago fue procesado correctamente.

<img width="79" height="29" alt="image" src="https://github.com/user-attachments/assets/4258ae15-3f97-48bb-96e0-2b33b6d10556" />


---

## Rechazado

La entidad emisora o la tarjeta rechazó la operación.

<img width="81" height="29" alt="image" src="https://github.com/user-attachments/assets/be59b425-d7ca-4168-aa6a-ac423e98b8d1" />


---

## Expirado

El cliente no abrió el link o dejó vencer el tiempo disponible para completar el pago.

<img width="76" height="30" alt="image" src="https://github.com/user-attachments/assets/93625170-eb4c-43ba-b71d-3b8ba1da92fd" />


---

# Consulta de Información del Pago

Todos los datos relacionados con un link pueden consultarse desde el historial.

Para ello:

1. Ingresar al historial de links.
2. Seleccionar el link correspondiente.
3. Visualizar el detalle de la operación.

<img width="1839" height="282" alt="image" src="https://github.com/user-attachments/assets/d060c110-c69b-4615-8ecd-ecf93fc77ba4" />


<img width="357" height="444" alt="image" src="https://github.com/user-attachments/assets/21dc3e16-33f6-4334-803a-da5d85748781" />


<img width="1152" height="648" alt="image" src="https://github.com/user-attachments/assets/8140d632-eb24-4770-87f3-6a9406dc2a3e" />


---

# Datos Importantes

## Restricción por tarjeta y cuotas

Cada link queda asociado a:

- Una tarjeta específica.
- Una cantidad de cuotas específica.

Si el cliente desea modificar alguno de estos datos, será necesario generar un nuevo link.

---

## Vigencia del Link

Los links poseen las siguientes condiciones:

- 24 horas para ser abiertos.
- Una vez abiertos, tienen una validez de 2 horas para completar el pago.

---

## Cierre de lotes

No es necesario realizar cierre de lotes:

- Ni en Payway.
- Ni en el sistema de gestión.

---

## Número de cupón

Para los pagos realizados mediante Terminal Web:

- No es necesario cargar número de cupón en el sistema.

---

# Resumen Rápido

| Concepto | Valor |
|-----------|-----------|
| Plataforma | Payway |
| URL | https://mi.payway.com.ar |
| Tarjetas habilitadas | VISA Crédito / Mastercard Crédito |
| Terminal sistema | 5 |
| Vigencia para abrir link | 24 horas |
| Vigencia luego de abrir | 2 horas |
| Carga del pago | Solo si figura APROBADO |
| Número de cupón | No requerido |

