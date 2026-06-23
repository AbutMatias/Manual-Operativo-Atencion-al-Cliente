# Monitoreo de Reclamos

---

# Introducción

El monitoreo de reclamos se realiza cuando es necesario verificar si una solución aplicada resolvió efectivamente el inconveniente o si el problema vuelve a presentarse con el paso del tiempo.

Existen dos escenarios posibles:

1. El reclamo continúa bajo gestión de Atención al Cliente.
2. Un técnico solicita explícitamente que se realice un monitoreo posterior a una intervención.

---

# Escenarios de monitoreo

## 1. Reclamo gestionado por Atención al Cliente

En estos casos se determina que es necesario realizar un seguimiento del servicio para verificar si:

- El problema quedó resuelto.
- La falla vuelve a presentarse.
- Se requiere una nueva intervención.

Si el monitoreo:

- Va a extenderse durante varias horas o días.
- Debe continuar en el siguiente turno.

Se deberá:

- Crear un issue en Atención al Cliente.
- Asignar la etiqueta **Monitoreo**.
- Documentar las observaciones realizadas.

---

## 2. Monitoreo solicitado por un técnico

Generalmente ocurre durante:

- Fines de semana
- Guardias
- Casos complejos o intermitentes

El técnico informa por el grupo de WhatsApp de reclamistas que realizó una intervención y solicita monitorear el servicio para validar si las acciones aplicadas resolvieron el inconveniente.

En estos casos se debe:

1. Recibir la solicitud.
2. Derivar o crear el issue en Atención al Cliente.
3. Asignar la etiqueta **Monitoreo**.
4. Registrar las observaciones correspondientes.

---

# Escalamiento para soporte a técnicos

```mermaid
flowchart LR
   A(El técnico solicita soporte relacionado a)
   B[Información y problemas CPEs]
   C[Problemas de navegación, validación, DHCP o ancho de banda]
   D[Problemas WiFi o red interna]
   E[Información logística]

   F(Redes)
   G(Servicio Técnico)
   H(Servidores)
   I(Coordinación)

   A-->B
   A-->D
   A-->E

   B-->F
   C-->F

   F-->|Si no se logra resolver|H

   D-->G
   G-->|Si no se logra resolver|F

   E-->I
