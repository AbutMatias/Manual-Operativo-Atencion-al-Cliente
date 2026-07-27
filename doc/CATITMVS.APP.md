

# Proceso de Cambios de Titularidad en Eternet App MVS 

### Descripción General
Se ha agregado una pantalla a **Eternet App** para gestionar los **Cambios de Titularidad (CATIT)**, para Movistar. ✔


Ingresamos a la [ETERNET APP](https://app.eternet.com.ar/gestionar-clientes) y nos dirijimos al menu de Telefonía Movil - Cambios de titularidad

![1 eternet app](https://github.com/user-attachments/assets/6bd0690a-fa85-4d9d-ae46-26d7c1171809)



---



### 1. Carga de CATIT
- Se completa un formulario con los datos mínimos necesarios para automatizar los pasos siguientes.
 <details><summary>Formulario CATIT - Carga comercial</summary>
<p>

- Se completa un formulario con los datos mínimos necesarios para automatizar los pasos siguientes.
  ![image](https://github.com/user-attachments/assets/88872169-1d85-4af9-955f-16b5a7acfe87)

</p>
</details> 

- Finalizada la carga, el CATIT aparece en el listado.


### 2. Creación del Formulario
- Cada **5 minutos**, un proceso automatizado toma los registros sin formulario y les adjunta el mismo, completándolo con los datos del CATIT.

### 3. Envío al Cliente para su Firma
- Cada **5 minutos**, un proceso toma todos los CATITs con formularios completos y los envía al cliente para su firma a través de **DocuSign**. 

### 4. Verificación del Estado de la Firma
- Cada **5 minutos**, un proceso verifica el estado de las firmas en DocuSign.
- Se almacena la fecha y hora en que el cliente firma o rechaza la firma.

  ![1234](https://github.com/user-attachments/assets/04611b42-91e1-4178-a8b6-c99303ac42a0)




### 5. (Opcional) Reenvío del Formulario para su Firma
- Si el cliente rechaza la firma por error y desea continuar con el cambio de titularidad, existe una acción para reenviar el documento para su firma.
  ![14](https://github.com/user-attachments/assets/fd0fb3f0-9dfc-4ec1-8677-4a71e2c2a9f6)


### 6. Envío de la Solicitud al Proveedor
- Cada **30 minutos**, un proceso crea un **ticket** en el portal de Movistar con la siguiente información:

![tk](https://github.com/user-attachments/assets/869d0045-cf9e-4d5e-b79d-affb429fcb15)



### 7. Verificación del Estado del Ticket
- Cada **30 minutos**, un proceso revisa el estado de los tickets pendientes.
- Guarda la respuesta del proveedor obtenida del "chat" del ticket.

### 8. Verificación del Estado de Líneas con Ticket Cerrado
- Cada **30 minutos**, un proceso verifica si las líneas con ticket cerrado aparecen en [Mi Movistar Empresas](https://mimovistarempresas.movistar.com.ar/#reportes).
- Si la línea aparece, se almacena automáticamente en el registro como titularidad de **Eternet**.

### 9. (Opcional) Indicar Estado Manualmente
- Debido a la falta de respuestas estructuradas por parte de Movistar, existe una opción para que un operador revise manualmente la respuesta del proveedor y actualice el estado de la línea en el sistema.

### 10. Registro de Líneas en el Legacy
- Cada **5 minutos**, un proceso toma todas las líneas aprobadas y las registra en el **Legacy** para su facturación.
