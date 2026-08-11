# Gestión de correos electrónicos (MailServer) - Eternet

## Introducción

- Eternet provee correos electrónicos POP3 a sus clientes y empleados.
- La mayoría utilizan el dominio **@eternet.cc**, aunque algunos clientes pueden tener dominios propios (ej: @empresa.com).
- Los usuarios pueden acceder al correo mediante:  
  https://webmail.eternet.com.ar
- Como alternativa recomendada, se sugiere configurar un cliente de correo (Outlook, Thunderbird, etc.) para descargar los mensajes localmente y evitar saturación de la casilla.

---

## Acceso al listado de correos

Para gestionar cuentas:

- Ingresar a **SSAK**
- Ir a: `Relaciones > Listado de correos (MailServer)`

<img width="1251" height="633" alt="image" src="https://github.com/user-attachments/assets/43dd25fe-9aec-47cd-a0d9-16d57386fa11" />


---

## Funcionalidades del listado

Desde este panel podemos:

- Buscar cuentas de correo
- Gestionar cuentas existentes
- Crear nuevas cuentas
- Modificar parámetros
- Habilitar o deshabilitar servicios

---

## Acciones disponibles

---

## Crear nueva cuenta

### Paso a paso

1. Completar todos los campos del formulario

<img width="493" height="360" alt="image" src="https://github.com/user-attachments/assets/7eff51d8-0809-44d3-8156-3cd201da6bcf" />

2. Es obligatorio completar el campo **Cliente**
   - Esto permite vincular la cuenta con los datos del cliente
   - Es necesario para recuperación de contraseña

3. Confirmar la creación

### Resultado

- La cuenta queda creada y activa automáticamente
- Se recomienda asignar una contraseña inicial genérica

### Recomendación al cliente

- Solicitar cambio de contraseña desde:  
  https://webmail.eternet.com.ar

---

### Registro obligatorio

Después de crear la cuenta:

- Crear issue en GitHub:  
  https://github.com/Eternet/Servicio.Tecnico/issues/new?assignees=&labels=Correo&projects=&template=7+-+Gestion+de+cuentas+de+mail.yml&title=Cliente+%23+XXX+-+Razon+Social+-+Gestion+de+cuenta+de+correo
- Registrar la gestión en SSAK mediante reclamo


---

## Blanqueo o cambio de contraseña

- No es posible modificar contraseñas desde el listado
- El usuario debe hacerlo desde:  
  https://recuperarwebmail.eternet.com.ar/

### Requisitos

- Debe tener un medio de contacto registrado:
  - Email alternativo
  - WhatsApp o SMS

Si no lo tiene:

- Solicitar un contacto válido
- Registrarlo en sistema correspondiente

---

## Modificar descripción

### Paso a paso

1. Ingresar nueva descripción
2. Guardar cambios

---

## Modificar capacidad (MB)

- Capacidad por defecto: 80 MB
- Máximo permitido: 300 MB

<img width="1893" height="582" alt="image" src="https://github.com/user-attachments/assets/aa81493a-3fe0-4436-81fc-3b5cf4883491" />


### Recomendación

- Se recomienda uso de cliente de correo (POP3)
- Evitar uso como almacenamiento en la nube

---

## Asignar cliente

- Vincula la cuenta de correo con el cliente en sistema
- Permite trazabilidad y gestión de datos asociados

---

## Habilitar / Deshabilitar cuenta

### Estados

- Activa: opciones marcadas
- Inactiva: opciones desmarcadas

<img width="1869" height="598" alt="image" src="https://github.com/user-attachments/assets/ae5574c2-a5db-4fd1-a802-01e26fe672ca" />



### Uso habitual

- Baja de empleados en empresas
- Cuentas no utilizadas

### Procedimiento

1. Seleccionar cuenta
2. Activar o desactivar opción
3. Confirmar cambios

---

## Nota importante

Si una cuenta está deshabilitada sin solicitud del cliente:

- Puede haber sido bloqueada por actividad sospechosa o spam
- La contraseña se resetea por seguridad
- El usuario debe restablecerla desde:
  https://webmail.eternet.com.ar
- Se puede verificar baneos o bloqueos desde: https://mxtoolbox.com/blacklists.aspx  

### Recomendaciones al cliente

- Evitar reutilizar contraseñas antiguas
- Revisar dispositivos en busca de malware
- Asegurar seguridad del equipo antes de reactivar la cuenta

---

## Uso de quota

Permite visualizar:

- Espacio utilizado por carpeta
- Cantidad de correos almacenados

### Límites

- Capacidad máxima: según asignación (hasta 300 MB)
- Límite aproximado: 5000 correos por cuenta

---

## Conclusión

La correcta gestión del MailServer permite:

- Evitar saturación de cuentas
- Mantener orden en la infraestructura de correo
- Asegurar seguridad y trazabilidad de usuarios
