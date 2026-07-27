    # Reversión de CATIT **CLARO - MOVISTAR**

## Descripción:

El proceso ocurre cuando el cliente que actualmente pertenece a la flota corporativa de Eternet, solicita volver a ser cliente particular de Claro o Movistar.

- Para concretar la solicitud se debe realizar un cambio de titularidad nuevamente, pero esta vez de Claro/Movistar Eternet a Claro/Movistar.

## Proceso:
1. Un representante recibe solicitud de reversión de catit. (desea salir del corporativo y volver a ser individuo)
2. En la APP, desde el menú nos dirigimos a `Gestionar solicitudes`
3. Desplegamos el menu que se encuentra arriba de las lineas móviles, hacemos clic en `Gestion de baja`
4. Sobre el lado derecho hacemos clic en `Cargar solicitud de reversión`
5. Se abrirá un cartel donde solicita que se indique la linea a la cual se le gestionará la reversión.
6. Una vez que seleccionamos la linea se verá de esta forma
![image](https://github.com/user-attachments/assets/79624692-fae7-4a85-ace3-9d9c2b5d9a22)
7. Indicamos a que tipo de trámite corresponde (Baja/Reversión) y queda cargada la solicitud con número de trámite.



![Recording 2022-12-23 at 14 18 13](https://user-images.githubusercontent.com/96189765/209375579-8f4a94b3-5056-4c88-beca-313ef17a7153.gif)

8. El proceso envía un mail a Back-Office para notificar la nueva solicitud de reversión.
9. Ademas se debe crear una Isuue usando el temple [Reversion-Movil](https://github.com/Eternet/Comercial.Movil/issues/new?assignees=&labels=Reversion&projects=&template=Reversion-movil.yml&title=Cliente+%23+XXX+-+Razon+Social+-+Consulta) donde se debe completar todos los datos solicitados y la foto del DNI (Frente y Dorso)

## Para la compañía CLARO

10. Back-office completa la documentación solicitada por Claro:
   - Debe ser firmada por Eternet y por el solicitante. (Esto se realiza actualmente por Adobe)
   - Se envía a Claro por mail (javier.bustos@claro.com.ar) junto con foto de DNI del usuario de la línea, quien finalizará la gestión.
10. Cuando Javier aprueba el CATIT, ingresamos a la app y colocamos en observaciones "Se realiza el cambio de titularidad, las líneas xx, pasan a la nueva cuenta N° xx, a partir del xx." Finalizamos el proceso poniendo el estado `En gestión`.

## Para la compañía MOVISTAR:

9. Back-office completa la documentación solicitada por Movistar.
    - Es el mismo formulario que usamos en el trámite de cambio de titularidad de Movistar, sólo que los datos son a la inversa, el cedente es Eternet y el cesionario es el cliente. Debe ser firmado por Eternet y por el usuario (Esto se realiza actualmente por la plataforma Adobe)  
   
![image](https://github.com/riverojulia/Privado/assets/96189765/5fc9aae0-6fce-44ec-98a7-a68f58053ebf)

 - Una vez firmado el documento, se solicita por ticket en la web de movistar. [`Portal de Movistar`](https://mimovistarempresas.movistar.com.ar/)
 
  - ###  Completar el ticket con los siguientes campos:
- `Clasificación`: Modificación de servicios
- `Tipo`: Pedido
- `Línea`: Número de línea del cliente solicitante
- `Descripción corta`: Cambio de titularidad
- `Mensaje`: Utilice el texto detallado a continuación:

    ```plaintext
    Buen día/buenas tardes, solicito cambio de titularidad para una línea que egresa de la flota de Eternet CUIT: 30667525906 y pasaría a ser individuo Movistar. Línea XX con plan XGB.
    
   
  
    Adjunto formulario firmado.
    ```

- Adjuntar el formulario firmado en la sección `Adjuntar archivo`.

- Hacer clic en `Enviar`.

![Enviar Formulario](https://user-images.githubusercontent.com/96189765/203781832-54f3c7ee-c94e-4332-a15f-ddae6cb77e0f.png)

### 6. Seguimiento del Ticket:
- El ticket quedará en estado `Abierto`.
- Es fundamental revisar cualquier comentario adicional que Movistar pueda haber agregado.
- El ticket cambiará a estado `Cerrado` una vez que haya sido gestionado. Es crucial tener en cuenta que el estado `Cerrado` no garantiza un resultado favorable.
  
---

## DocuSign:

Es una plataforma de servicio de firmas electrónicas.
Esta plataforma permite tener los formularios solicitados por Claro firmados previamente por Eternet y enviar solicitudes para que el solicitante pueda firmarlos. Lo puede hacer a través desde su dispositivo móvil muy fácilmente.

### Proceso:

Una vez completa la documentación con los datos de la empresa y el solicitante
1. Ingresamos a la plataforma DocuSign con usuario y contraseña 
2. Arrastramos los 3 formularios a la plataforma
3. Ingresamos en `Añadir destinatarios` el nombre y el mail del solicitante.
4. En `Añadir mensaje` le solicitamos al destinatario que firme los documentos y que chequee que los datos ingresados sean correctos. 
5. Click en `Siguiente`
6. Colocar el recuadro de firma en las áreas correspondientes a firmar por el solicitante.
7. `Enviar`
10. Una vez enviado quedará `a la espera de otros` hasta que el solicitante firme los documentos.
11. Cuando ya están firmados, llegará un mail de aviso y en la plataforma lo vamos a ver en `completado`

![image](https://user-images.githubusercontent.com/96189765/203588100-4a421590-695f-40ea-9789-b95a0ccd908c.png)

12. Descargo los formularios firmados y se envían por mail a Claro junto con las fotos del DNI del solicitante.



### Puntos a tener en cuenta:

   - Una vez solicitado el CATIT se emitirá una última factura a nombre de Eternet pero con el nuevo plan de Claro (siempre colocar el plan de 2GB en el formulario enviado). Esta factura no contará ya con la bonificación brindada por Eternet. 
   - Luego del CATIT podrá comunicarse a Claro y elegir el plan deseado.
   - Este pase se verá reflejado transcurridos de 3 a 5 días hábiles posteriores al cierre de ciclo. 

-----

## Documentación solicitada por Claro:

### [Solicitud De Servicio (SDS)](https://eternet.sharepoint.com/:w:/s/Eternet/EcCWTN_IbTtCmS4x6-fw9-sBT5tBkSSJj4VDdKvdfb-kgg?e=VNCeyE)

- Como completar **Nueva SDS**:

   - **N° de cuenta: detallar N° de cuenta:** 487660433 / Billing N°: se indica la línea que cambia de titularidad. 
   - **Información del Cedente:** en este ítem van los datos y firma del titular actual que cede la línea.
   - **Información del Solicitante:** allí van los datos completos del nuevo titular: nombre y apellido, DNI, fecha de nacimiento, domicilio completo, etc. También se completa la condición de IVA e IIBB (si no tiene se hace una línea / -). 
   - **Información de tus servicios contratados:** “Detalle de plan de voz” se detalla el plan al cual migra la línea. *Siempre colocamos el plan vigente que corresponda al de 2GB*
   - **Resumen de cargos fijos mensuales:** en donde dice “abono” se detalla el costo del plan por ejemplo A023C $2000 finales
   - **A llenar por el solicitante:** aquí va la firma y aclaración del futuro titular.


### [Formulario único de aceptación de las condiciones de activación (ACP)](https://eternet.sharepoint.com/:b:/s/Eternet/EdHVGIE-979PuDtBospTf5wBegPEl8GKPDQcpZfz-cCd4Q?e=tbnCDc)

- Como completar el **Formulario único de aceptación de las condiciones de activación (ACP)**:

   - Lo completa y firma el futuro titular. 
   - En donde dice NIM Se completa la línea que cambia de titularidad.
   - En donde dice SDS N° no se completa, queda en blanco. 
   - Firma futuro titular.
   - DNI de futuro titular (frente y dorso).
   - Completar con plan masivo. 

# Tiempo de gestión

- Este proceso, puede presentar una demora de hasta 7 días hábiles. La confección de formularios actualmente es manual.
- Dependiendo la fecha en la que se gestione se hará efectivo el pase.
- Si la gestión se envia antes del día 16 de cada mes (para cada compañia) que es cuando cierra el ciclo, el cliente tendrá la titularidad de su linea en el mes en curso.
- Si la gestión se envia luego del dia 16 de cada mes (para cada compañia) el ciclo ya esta cerrado y recuperará la titularidad de su linea el día 16 del mes siguiente.
- En ambos casos se emite una nueva facturación. 
