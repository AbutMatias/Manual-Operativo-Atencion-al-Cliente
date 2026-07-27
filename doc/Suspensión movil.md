### Proceso de corte por falta de pago de telefonía móvil
_Ejemplo:_

1) Emisión de la factura de mayo Internet + Móvil.
2) CFP por morosidad el 25/05 aproximadamente.
3) Suspensión de las líneas en situación de CFP al día 05/06 por las facturas de mayo o anteriores. Para esto, filtramos el listado Celulares ▶️ Listado de Facturas pendientes de pago > Filtrar por (en este caso) Todas las facturas anteriores al 01/06, y CFP verdadero.
4) Una vez que tenemos el listado de las líneas a las cuales debemos realizar la suspensión, tenemos dos opciones:
                 - Aplicar una suspensión de 30 días.
                 - Aplicar una suspensión de 60 días.
5) El día 27/06, se dan de baja las líneas de dicho listado, que bajo los mismos filtros (CFP y fecha de factura anterior al 01/06) continúan con facturas impagas.

   ![image](https://github.com/user-attachments/assets/5bb24d17-72f3-490f-b5ac-98fb53bca2a2)

   _¿Cómo se realiza la suspensión?_ 📵
   
   **Claro:** Se envía el listado de las líneas con factura pendiente de pago al gestor, detallando la suspensión que se les aplicará.
   
   **Movistar:** Se envía el listado a la operadora por WhatsApp/Ticket en plataforma.

   🔸**Aguardamos la confirmación de ambas compañías para informar mediante un Issue a los sectores que puedan recibir consultas por estas líneas (Atención al Cliente, Comercial, Administración). En el Issue se detallarán los clientes con CFP y se incluirá un formulario de reconexión en caso de que ya hayan abonado lo pendiente.**

   👉[Issue de referencia - Ejemplo](https://github.com/Eternet/Back-Office-Administrativo/issues/50)

   ### Proceso de alta a una línea cortada por falta de pago de telefonía móvil ✔

   Una vez que el cliente se contacta para informar que abonó su deuda con Eternet, el asesor deberá cargar el siguiente [FORMULARIO DE RECONEXIÓN](https://github.com/Eternet/Comercial.Movil/issues/new?assignees=&labels=Reconexi%C3%B3n+linea+movil&projects=&template=Reconexion_movil.yml&title=Cliente+%23+XXX+-+Raz%C3%B3n+Social+-+Consulta).  Una vez cargado, el Back Office enviará a los gestores de las compañías móviles la solicitud de reconexión de la línea, que, dependiendo de la suspensión aplicada, vendrá con el recargo en la facturación.
