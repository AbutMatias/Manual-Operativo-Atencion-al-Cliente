# Carga de Reclamos

## Introducción

Todo contacto recibido de un cliente debe registrarse mediante un issue en GitHub. Este registro permite mantener un historial de consultas, obtener métricas precisas y realizar el seguimiento correspondiente cuando sea necesario.

Actualmente, GitHub es la herramienta principal para registrar consultas y reclamos. SSAK solo se utiliza cuando el caso requiere derivación al sector Redes o intervención de BackOffice Técnico.

---

# Paso 1: Crear el reclamo

1. Ingresar al formulario de registro de reclamos.
2. Seleccionar la opción **Registro de consulta/reclamo**.
3. Se abrirá un formulario con los datos a completar.

---

# Paso 2: Completar los datos del cliente

Completar los campos solicitados:

- Número de cliente.
- Razón social o nombre del cliente.
- Canal de contacto.
- Segmento del cliente.
- Dirección IP.
- Número de teléfono.
- Observaciones.

---

# Paso 3: Registrar el diagnóstico

En el campo diagnóstico debemos indicar claramente el motivo del contacto.

Algunos ejemplos:

- Sin navegación.
- Lentitud.
- Cortes intermitentes.
- Problemas de WiFi.
- Consulta administrativa.
- Solicitud de cambio de contraseña.

Siempre utilizar los diagnósticos definidos en el Glosario de Diagnósticos.

---

# Paso 4: Revisar la información

Antes de crear el issue verificar que:

- El número de cliente sea correcto.
- La IP corresponda al cliente.
- El diagnóstico describa correctamente el problema.
- El teléfono de contacto esté actualizado.
- Las observaciones sean claras y completas.

---

# Paso 5: Crear el issue

Una vez completada toda la información:

1. Presionar **Crear Issue**.
2. GitHub generará automáticamente un número de reclamo.
3. Las etiquetas se asignarán automáticamente según el diagnóstico seleccionado.

---

# Gestión automática del reclamo

Al crear el issue:

- Se asigna automáticamente al proyecto de Reclamos.
- Se registra la fecha de creación.
- Se asigna un responsable.
- Se establece el estado inicial como **Pendiente**.
- Se identifica automáticamente el sector relacionado.

No es necesario configurar estos datos manualmente.

---

# Reclamos Nivel 1

Si el problema puede resolverse desde Atención al Cliente:

1. Realizar las verificaciones necesarias.
2. Resolver la consulta.
3. Registrar la solución en el issue.
4. Cerrar el issue.

---

# Reclamos Nivel 2

Si el problema requiere intervención de otro sector:

1. Crear un sub-issue desde el reclamo principal.
2. Seleccionar el repositorio correspondiente.
3. Completar la información solicitada.
4. Vincular el sub-issue al reclamo principal.

---

## Ejemplos de derivación

### Redes

Derivar a Redes cuando:

- Existe una falla de conectividad.
- Hay problemas de señal.
- Se requiere intervención sobre la red.
- Existe una posible falla de infraestructura.

### Servicio Técnico

Derivar a Servicio Técnico cuando:

- Existen problemas de configuración de router.
- Se requiere configurar Bridge.
- Se requiere configurar Port Forwarding.
- Hay problemas internos de WiFi o LAN.

### Coordinación

Derivar a Coordinación cuando:

- Se solicita una instalación interna.
- Se solicita un cambio de router.
- Se requiere coordinar una visita técnica.

---

# Casos que requieren SSAK

SSAK solamente debe utilizarse cuando:

- El reclamo será derivado a Redes.
- El reclamo requiere intervención de BackOffice Técnico.

---

# Carga del reclamo en SSAK

Cuando corresponda utilizar SSAK:

1. Buscar al cliente.
2. Ubicarse sobre la IP correspondiente.
3. Hacer clic derecho.
4. Seleccionar **Nuevo Reclamo**.
5. Completar los datos solicitados.

En el campo diagnóstico pegar el enlace del issue de GitHub para mantener la relación entre ambos sistemas.

---

# Verificaciones finales

Antes de finalizar confirmar:

- Reclamo cargado en GitHub.
- Diagnóstico correcto.
- Datos de contacto actualizados.
- Observaciones completas.
- Sub-issue creado si corresponde.
- Reclamo cargado en SSAK si requiere derivación a Redes o BackOffice.
- Issue correctamente cerrado o derivado.

---

# Resumen rápido

## Si se resuelve desde Atención al Cliente

1. Crear issue.
2. Resolver consulta.
3. Documentar solución.
4. Cerrar issue.

## Si requiere otro sector

1. Crear issue.
2. Crear sub-issue.
3. Derivar al sector correspondiente.
4. Realizar seguimiento.

## Si interviene Redes o BackOffice

1. Crear issue.
2. Crear reclamo en SSAK.
3. Vincular ambos registros.
4. Derivar al sector correspondiente.
