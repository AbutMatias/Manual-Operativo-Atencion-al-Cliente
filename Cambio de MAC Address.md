# Guía paso a paso: Cambio de MAC Address en SSAK

## Introducción

Cada cliente tiene asociada una:
- Dirección IP
- MAC Address del equipo que utiliza (router o PC)

El sistema valida que la MAC registrada coincida con la que se conecta a la red.  
Si no coincide, el cliente puede quedarse sin acceso a internet.

---

## ¿Qué es el cambio de MAC?

Es el proceso mediante el cual se reemplaza la MAC registrada en el sistema por la del nuevo dispositivo del cliente.

Se utiliza cuando:
- El cliente cambia de router
- El equipo anterior dejó de funcionar
- Se reemplaza la PC conectada directamente
- Se realiza una migración de equipo

---

# Paso a paso: Cómo cambiar la MAC

## Paso 1: Buscar al cliente

- Ingresar a SSAK
- Ir a la pantalla de Atención al Cliente
- Buscar al cliente por:
  - Número de cliente
  - IP
  - Nombre o razón social

---

## Paso 2: Abrir el servicio

- Hacer doble clic sobre la línea del cliente
- Identificar la sección donde aparece:
  - IP
  - MAC actual registrada
  - Datos del host o CPE

---

## Paso 3: Iniciar cambio de MAC

- Buscar el botón:
  - “Cambiar MAC”
- Hacer clic
<img width="700" height="716" alt="image" src="https://github.com/user-attachments/assets/837d9296-44b9-4597-9cce-b0d8b1c6c388" />

---

## Paso 4: Ingresar nueva MAC

- Escribir la nueva MAC Address
- Importante:
  - Sin guiones
  - Sin dos puntos
  - Todo junto

Ejemplo correcto:
- `A1B2C3D4E5F6`

Ejemplo incorrecto:
- A1:B2:C3:D4:E5:F6

---

## Paso 5: Confirmar cambio

- Verificar que la MAC se haya actualizado correctamente
- Guardar cambios
- Confirmar salida a internet del cliente

---

# Casos posibles

## Caso 1: Host NO está en comodato

- Se puede cambiar la MAC directamente
- Esto se considera “habilitación de dispositivo”

Resultado:
- Si la IP, máscara y gateway están correctos:
  - El cliente recupera internet automáticamente

---

## Caso 2: Host SI está en comodato

- NO se puede cambiar la MAC principal
- El equipo pertenece a la empresa

En este caso:

### Se puede hacer:
- Habilitación de MAC provisoria

### Qué ocurre después:
- El cliente puede navegar temporalmente
- Se genera un reclamo automático:
  - “Revisión / Reemplazo Equipo Host en Comodato”

Importante:
- La MAC provisoria se elimina al cerrar el reclamo
<img width="567" height="116" alt="image" src="https://github.com/user-attachments/assets/5091cfa2-873c-4cab-b80f-84e047c6aeeb" />

---

# Ver historial de cambios de MAC

## Paso 1:
- Ingresar al cliente en SSAK
- Abrir el servicio

## Paso 2:
- Hacer clic en:
  - “Listado Cambio MAC”

## Paso 3:
- Revisar historial

Se puede ver:
- MAC anterior
- MAC nueva
- Fecha del cambio
- Usuario o sistema que realizó la modificación

---

# Recomendaciones importantes

- Siempre verificar que el cliente esté cambiando realmente el equipo
- No modificar MAC sin confirmación
- Si hay comodato, respetar el procedimiento de MAC provisoria
- Confirmar siempre la reconexión del servicio luego del cambio

---
