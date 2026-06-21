# Cambio de Router HOST

## Introducción

Existen dos formas de cargar un reemplazo de router HOST. El procedimiento dependerá de si el cliente ya tiene un router en comodato o no.

Antes de iniciar, verificar:

- Si el cliente posee router en comodato.
- Si utiliza redireccionamiento de puertos (Port Forwarding).
- Cuántos puertos LAN tiene ocupados.
- Si se trata de un cliente Corporativo, VIP o con configuración especial.
- Si el cambio tiene costo asociado.

---

# Caso 1: El cliente ya tiene un router en comodato

## Paso 1: Buscar al cliente

1. Abrir SSAK.
2. Ingresar a la pantalla **Atención al Cliente**.
3. Buscar al cliente correspondiente.

---

## Paso 2: Crear el reclamo

1. Sobre la línea del servicio hacer clic derecho.
2. Seleccionar **Nuevo Reclamo**.

---

## Paso 3: Completar los datos

En la ventana de alta de reclamos:

1. En **Tipo de Reclamo** seleccionar:
   - `Cambio de Host`

2. Verificar que la IP pública sea correcta.

3. En el campo **Diagnóstico** indicar el motivo.

Ejemplos:

- `Cambio de host por falla de equipo.`
- `Cambio de host solicitado por upgrade.`

4. En **Sector** seleccionar:
   - `Redes`

5. Seleccionar teléfonos de contacto actualizados.

6. Configurar los horarios de disponibilidad del cliente.

7. Presionar **Aceptar**.

---

# Caso 2: El cliente NO tiene router en comodato

## Paso 1: Buscar al cliente

1. Abrir SSAK.
2. Buscar al cliente.
3. Ingresar a **Datos del Cliente**.

---

## Paso 2: Abrir los servicios

1. Ingresar a la pestaña **Servicios**.
2. Ubicar el servicio correspondiente.

---

## Paso 3: Crear instalación interna

1. Hacer clic derecho sobre el servicio.
2. Seleccionar:

   `Agregar Instalación Interna`

3. Se abrirá el asistente de Internas.

---

## Paso 4: Completar datos generales

1. En observaciones comerciales indicar el trabajo a realizar.

Ejemplos:

- `Router en comodato por upgrade.`
- `Instalación de router HOST en comodato.`

2. Configurar la fecha disponible.

3. Presionar **Próximo**.

---

## Paso 5: Configurar sectores

Seleccionar:

- Sector que configura: `Redes`
- Sector que instala: `Redes`

---

## Paso 6: Agregar el router

1. Presionar el botón **Agregar Servicio**.
2. En Servicio seleccionar:

   `Router básico`

3. En Artículo elegir el modelo correspondiente.

---

## Paso 7: Verificar el modelo correcto

Antes de continuar:

- Clientes de 100 Mb o más deben recibir equipos con puertos Gigabit.
- Confirmar que el equipo seleccionado sea compatible con el plan contratado.

---

## Paso 8: Configurar el artículo

Marcar:

- En comodato: `Sí`
- Host: `Sí`

Luego presionar **Aceptar**.

---

## Paso 9: Agregar mano de obra (si corresponde)

Si el cambio tiene costo:

1. Agregar un nuevo servicio.
2. Seleccionar:

   `Mano de Obra`

3. Configurar el importe correspondiente.

---

## Paso 10: Finalizar

1. Revisar toda la información cargada.
2. Presionar **Finalizar**.

---

# Casos especiales

## Clientes Corporativos o VIP

Si el cliente posee:

- IP pública.
- Configuraciones especiales.
- Servicios corporativos.

La revisión debe realizarla BackOffice antes de continuar.

---

## Clientes CGNAT

Los clientes CGNAT no poseen redireccionamiento de puertos.

Por este motivo no es necesario relevar configuraciones de Port Forwarding.

---

# Registro en GitHub

Una vez cargada la solicitud:

1. Ingresar al repositorio correspondiente.
2. Crear un nuevo Issue.
3. Seleccionar:
   - `Nuevo Cambio de Host`
   - `Nueva Interna`

4. Completar toda la información solicitada.
5. Guardar el Issue.
6. Asociar el número del Issue al reclamo para seguimiento.

---

# Verificaciones finales

Antes de finalizar confirmar:

- Cliente correctamente identificado.
- Motivo del cambio documentado.
- Teléfono actualizado.
- Horarios cargados.
- Revisión de Port Forwarding realizada.
- Revisión de puertos LAN realizada.
- Router correcto seleccionado.
- Issue de GitHub creado.
- Reclamo derivado al sector correspondiente.
