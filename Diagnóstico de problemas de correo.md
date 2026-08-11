# Diagnóstico de problemas de correo (Eternet)

---

## Introducción

Esta guía está orientada a la resolución de problemas de envío y recepción de correos alojados en servidores de Eternet.

Eternet administra múltiples dominios propios y de clientes, como:
- eternet.cc
- repallets.com.ar
- acbsa.com.ar
- vialagro.com.ar

Los servicios de correo se dividen en dos nodos:
- NOC1 (Patty)
- NOC2 (Selma)

Según la ubicación del cliente, sus datos pueden estar alojados en cualquiera de estos nodos.

---

## Acceso al correo

Los correos pueden utilizarse mediante:
- Webmail
- Gestores externos (Outlook, Thunderbird, etc.)

---

## Importante sobre SPAM

El sistema incluye filtrado de spam, pero:
- La administración del filtrado es responsabilidad del cliente
- La configuración de seguridad en el gestor de correo también es responsabilidad del usuario

---

# 1. Tipos de problemas

Los problemas se dividen en dos casos principales:

- Sin recepción de correos
- Sin envío de correos

---

# 2. Sin recepción de correos

---

## Paso 1: Recolección de datos

Preguntar al cliente:

- ¿De qué cuentas no recibe mails?
- ¿No recibe de ninguna o solo algunas?
- ¿Qué remitentes están involucrados?
- ¿Los remitentes reciben rebote?
- ¿El contenido es simple o incluye archivos adjuntos?

---

## Interpretación de rebotes

- Si NO hay rebote:
  - El correo no llegó al servidor
  - Problema del remitente o filtrado externo

- Si SÍ hay rebote:
  - Solicitarlo para análisis técnico
  - Contiene el motivo del rechazo

---

## Prueba técnica (opcional)

Desde PC o router:

```
telnet mail.eternet.cc 110
```

- Si conecta: servicio OK
- Si no conecta: escalar a servidores

---

# 3. Sin envío de correos

---

## Paso 1: Recolección de datos

Preguntar:

- ¿A qué destinatarios no llegan los mails?
- ¿El problema es con todos o algunos?
- ¿Qué tipo de contenido envían?
- ¿Reciben rebote?

---

## Interpretación

- Sin rebote:
  - El correo no salió del sistema
  - Posible bloqueo o fallo local

- Con rebote:
  - Solicitar mensaje de error para análisis

---

## Prueba técnica
```
telnet mail.eternet.cc 25
```


- Si conecta: salida SMTP OK
- Si no conecta: escalar a servidores

---

# 4. Verificaciones adicionales

---

## Blacklists

Verificar si el servidor está en listas negras:

https://mxtoolbox.com/blacklists.aspx

---

## SPF / autenticación

- Revisar registro SPF del dominio
- Verificar que incluya IP del servidor de correo

---

## MX Records

Verificar configuración:

- MX activo y correcto
- Servidor responde correctamente

Herramienta:
https://mxtoolbox.com/

---

# 5. Problemas específicos

---

## Mails duplicados

Si llegan correos repetidos:

- Verificar si ocurre siempre o solo a veces
- Si solo ocurre en gestor:
  - Problema local del cliente
- Si ocurre en webmail:
  - Escalar a servidores

---

## Restricciones geográficas

Algunos países tienen bloqueos por seguridad.

- Ejemplo: países con alto nivel de spam

Si el cliente viaja:
- Solicitar IP pública
- Solicitar habilitación excepcional

---

## Cuentas deshabilitadas

Una cuenta puede bloquearse por:

- Malware
- Phishing
- Actividad sospechosa

Síntomas:
- No puede acceder ni desde webmail
- No puede recuperar contraseña

---

## Información requerida:

- Última IP de acceso
- Estado de la cuenta en sistema

---

# 6. Soporte con costo

Si el cliente solicita configuración de:

- Outlook
- Thunderbird
- Otros gestores

Se debe informar que:

- Es un servicio con costo
- Se deriva a Servicio Técnico

---

# 7. Escalamiento

Si el problema persiste:

- Abrir ticket a Servidores
- Adjuntar:
  - Rebotes
  - Logs
  - Pruebas Telnet
  - Resultados MXToolbox

---
