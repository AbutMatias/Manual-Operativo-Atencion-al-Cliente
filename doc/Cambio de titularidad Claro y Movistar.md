# Cambio de titularidad **Claro y Movistar**

Puntos importantes para tener en cuenta:

- **El cliente no debe tener equipos comprados contra factura en cuotas**
   -  Para poder migrar la línea a ETERNET debe terminar de pagar las cuotas de su teléfono. Cuando termine de pagar las cuotas se deberá contactar con ventas para que se realice la gestión.

-  **El cliente deberá tener la última factura emitida paga. No se puede realizar el CATIT con saldo en la cuenta del cliente.**
   -  En el caso de que al momento de la venta el cliente nos informe que todavía no pagó. Se le informará al cliente que es requisito indeclinable que el saldo de su cuenta este en 0 y que por este motivo no se podrá cargar el alta de la misma en sistema. El back office seguirá la gestión para cargarla cuando el cliente en cuestión haya abonado. ***En la app el vendedor carga la venta y la deja en estado: Deuda para que el Back continúe la gestión***
   -  En el caso de que el cliente nos haya informado erróneamente que realizó el pago de su factura, el área administrativa de claro rechazara dicha solicitud, El backoffice de Eternet debera volver a cargar la solicitud una vez registrado el pago. 
- **El cliente si o si tiene que tener abono contratado, tanto en Claro como en Movistar.** 
  -  Solo se puede realizar CATIT si la línea a migrar tiene **abono mensual** contratado.
  - En caso que el cliente tenga **prepago**, debe comunicarse con su proveedor (Claro o Movistar) y solicitar el cambio de su línea a un plan de abono. 
  - **Pagada la primera factura** de su abono ya esta en condiciones de solicitar el CATIT.

  ---

  # CATIT Claro - Documentación del Proceso de Cambio de Titularidad

## Tabla de Contenido

1. [Introducción](#Introducción)
2. [Registro Inicial en la APP](#Registro-Inicial-en-la-APP)
3. [Procedimiento Claro](#Procedimiento-Claro)
4. [Tareas del BackOffice](#Tareas-del-BackOffice)


## Introducción

Esta documentación proporciona un procedimiento detallado para gestionar cambios de titularidad de líneas telefónicas en el contexto de Claro y Eternet. Este proceso incluye varios pasos críticos como la entrada de datos en la APP, la solicitud via mail y  la confirmación mediante el BackOffice de la compañia. 

---

## Procedimiento

### Registro inicial de la solicitud

1. **Carga de la Solicitud de CATIT**: 
    - Registrar la solicitud de CATIT en la APP correspondiente.
    - Durante el proceso de alta de nuevas líneas, es crucial especificar el nombre del titular para cada línea telefónica.
    - Una sola solicitud puede contener múltiples números de línea con diferentes titularidades.

### Confirmación por parte de Claro

2. **Llamada de Verificación**:
    - Tras completar la carga de las líneas en la APP, un administrativo de Claro se comunicará con cada titular para verificar si acepta el cambio de línea o servicio

### Notificaciones Importantes al Cliente 

3. **Información Crítica a Comunicar al Cliente**:
    - El cliente debe ser informado de que recibirá una llamada de confirmación por parte de Claro.
    - La llamada vendrá de un número con código de área 011.
    - Si el titular tiene una preferencia horaria para recibir la llamada, ésta debe ser registrada en la APP.
    - Asegúrese de que la información del titular sea la correcta. No procederemos con la activación sin la confirmación del cliente.

### Casos Especiales y Resolución

4. **Gestión de Casos Especiales**:
    - Si el administrativo de Claro indica que el titular registrado es incorrecto, la gestión será automáticamente rechazada y pasará a estado "suspendido"
    - En ese caso, el Backoffice tomará el caso, que quedará en estado "suspendido", para corregir los datos. Una vez corregida la información, el estado cambiará a "Sin Iniciar".
    - Proceda con el paso 1 para volver a cargar los datos correctos.

      ### Tareas del Backoffice

    - La tarea final del Backoffice será replicar los datos indicados en el email enviado por el Gestor de Claro, ya sea la fecha de efectivización o si la línea, por algún motivo, no puede ingresar al corporativo.
    - En caso de que la línea no pueda ingresar, el Backoffice tomará la gestión, que quedará en estado "suspendido", "con deuda", para corregir los datos. Una vez corregida la información, el estado cambiará a "Sin 
      Iniciar".
    - En caso de que la línea ingrese correctamente al corporativo, el Gestor de Claro proporcionará una fecha de ingreso. Esta deberá ser trasladada a la App Móvil y se colocará en el campo de "Fecha de ejecución".
    - En la App Móvil podremos gestionar el ingreso de las líneas hasta el día 13 de cada mes. Al día siguiente, mediante un proceso de automatización, las líneas serán enviadas al SSAK para ser facturadas en la fecha 
      correspondiente. Las líneas ingresarán automáticamente a cada cuenta del cliente con sus respectivos planes.

      ---

      # CATIT Movistar - Documentación del Proceso de Cambio de Titularidad

## Tabla de Contenido

1. [Introducción](#Introducción)
2. [Registro Inicial en la APP](#Registro-Inicial-en-la-APP)
3. [Solicitud en el Portal de Movistar](#Solicitud-en-el-Portal-de-Movistar)
4. [Tareas del BackOffice](#Tareas-del-BackOffice)

## Introducción

Esta documentación proporciona un procedimiento detallado para gestionar cambios de titularidad de líneas telefónicas en el contexto de Movistar y Eternet. Este proceso incluye varios pasos críticos como la entrada de datos en la APP, la confirmación mediante el BackOffice y finalmente la solicitud en el portal de Movistar.

## Registro Inicial en la APP

1. **Carga de la Solicitud de CATIT**: 
    - Registrar la solicitud de CATIT en la APP correspondiente.
    - Solicitar frente y dorso del DNI de titular de la linea, para luego ser presentado junto al formulario de Movistar en su portal web.  
    - Durante el proceso de alta de nuevas líneas, es crucial especificar el nombre del titular para cada línea telefónica.
    - Una sola solicitud puede contener múltiples números de línea con diferentes titularidades.

>[!NOTE]
> Para replicar la firma del DNI solo es necesario usar el frente, pero para el envio del formulario a Movistar es necesario adjuntar frente y dorso. 
## Tareas del BackOffice

### Completar Formulario de Movistar

1. Rellenar el [formulario provisto por Movistar](https://github.com/Eternet/Comercial.Movil/files/13395223/CATIT.Movistar.docx) para cada titular de línea. Asegúrese de incluir los siguientes detalles:

    - Nombre y apellido del solicitante.
    - Número de línea.
    - Plan seleccionado para cada línea (3GB, 5GB, 8GB, etc.) en la sección **Datos del servicio**.
    - Firmar y aclarar la sección `CEDENTE: Firma, Aclaración y Nº de Doc.` con Nombre, Apellido y DNI del cliente.

    ![Formulario Movistar](https://user-images.githubusercontent.com/96189765/203607715-4a0cee00-d18e-44c7-98af-597ff32475bd.png)

### Envío del Formulario

2. Utilizar la plataforma "DocuSign" para enviar el formulario completado al cliente mediante correo electrónico. El cliente deberá firmar y aceptar el documento de forma digital. Tras esto, el formulario se enviará automáticamente al BackOffice de Eternet.

### Confirmación del Formulario

3. Una vez que el formulario esté firmado por el solicitante, proceder a realizar la solicitud de CATIT en el Portal de Movistar.

## Solicitud en el Portal de Movistar

1. Acceder a [`Portal de Movistar`](https://mimovistarempresas.movistar.com.ar/) usando las credenciales correspondientes.
2. Seleccionar la opción `Nuevo ticket` para iniciar la solicitud.

   ![Nuevo Ticket](https://user-images.githubusercontent.com/96189765/203777904-df6cce96-da13-45ca-8078-bf3af34dee0c.png)

3. Completar el formulario con los siguientes campos:
    - `Tipo`: Pedido
    - `Clasificación`: Modificación de servicios
    - `Línea`: Número de línea del cliente solicitante
    - `Describí brevemente tu consulta`: Cambio de titularidad
    - `Escribí más detalles para que podamos ayudarte`: Utilice el texto detallado a continuación:

    ```plaintext
    Buen día/buenas tardes, solicito cambio de titularidad para una línea que ingresa a la flota de Eternet, CUIT: 30667525906. Línea XX con plan XGB.
    
    Esta línea va asociada al número de cliente 1517255, acuerdo de facturación 522041404, con el mismo descuento del 90%.
    
    Adjunto formulario firmado.
    ```

5. Adjuntar el formulario firmado en la sección `Adjuntar archivo`.
6. Hacer clic en `Enviar`.

    ![Enviar Formulario](https://user-images.githubusercontent.com/96189765/203781832-54f3c7ee-c94e-4332-a15f-ddae6cb77e0f.png)

7. Seguimiento del Ticket:
    - El ticket quedará en estado `Abierto`.
    - Es fundamental revisar cualquier comentario adicional que Movistar pueda haber agregado.
    - El ticket cambiará a estado `Cerrado` una vez que haya sido gestionado. Es crucial tener en cuenta que el estado `Cerrado` no garantiza un resultado favorable. Revisar las causas posibles de no gestión como deudas o equipos en contrafactura.

   ### Tareas del Backoffice
    - La tarea final del Backoffice será replicar los datos indicados en el ticket enviado por el gestor de Movistar, ya sea la fecha de efectivización o si la línea, por algún motivo, no puede ingresar al corporativo.
    - En caso de que la línea no pueda ingresar, el Backoffice tomará la gestión, que quedará en estado "suspendido", "con deuda", para corregir los datos. Una vez corregida la información, el estado cambiará a "Sin 
      Iniciar".
    - En caso de que la línea ingrese correctamente al corporativo, el Gestor de Movistar proporcionará una fecha de ingreso. Esta deberá ser trasladada a la App Móvil y se colocará en el campo de "Fecha de ejecución".
    - En la App Móvil podremos gestionar el ingreso de las líneas hasta el día 13 de cada mes. Al día siguiente, mediante un proceso de automatización, las líneas serán enviadas al SSAK para ser facturadas en la fecha 
      correspondiente. Las líneas ingresarán automáticamente a cada cuenta del cliente con sus respectivos planes.


      

Para cualquier pregunta o aclaración adicional, por favor, contacte al equipo de soporte.
