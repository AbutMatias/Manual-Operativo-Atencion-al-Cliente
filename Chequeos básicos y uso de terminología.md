# Glosario y terminología específica

El objetivo de este glosario es unificar la terminología utilizada en diagnósticos, con el fin de evitar confusiones, interpretaciones erróneas y retrabajos en los reclamos.

El uso consistente de estos términos es obligatorio para una correcta derivación y análisis de incidentes.

---

## Conceptos generales

El primer paso para un diagnóstico correcto es que todo el equipo utilice la misma terminología. En muchos casos el diagnóstico es correcto, pero el uso de palabras ambiguas o internas genera confusión y obliga a reiniciar el análisis del reclamo.

---

## Estados de clientes en la red

### Clientes activos / autenticados / autorizados

Un cliente se considera en estado **ACTIVE** cuando:

- Aparece en el menú `ACTIVE`, o
- Tiene la letra `A` en el menú `HOSTS`

Esto indica que el cliente:

- Está correctamente autenticado en el sistema
- Ha pasado el proceso de validación
- Puede avanzar en los procesos de asignación de red




---

### Clientes no activos / no autenticados / no autorizados

Cuando un cliente:

- No aparece en `ACTIVE`, o
- No tiene la letra `A` en `HOSTS`

Se considera que **no está autenticado o autorizado**.

En este contexto, estos términos pueden utilizarse como equivalentes dentro del esquema actual.

  <img width="947" height="516" alt="image" src="https://github.com/user-attachments/assets/38885455-59a9-4c9a-8d55-b166e6593632" />
  <img width="986" height="423" alt="image" src="https://github.com/user-attachments/assets/d694f24f-afef-41aa-8fde-f397e6958905" />

  
---

## Aclaraciones importantes

- Todos los clientes conectados a la red deben aparecer en el listado `HOSTS`.
- No confundir “no autenticado” con “no visible en HOSTS”.
- Si un cliente no aparece en HOSTS, se trata de un problema diferente y más crítico.
- Se considera **dinámico** todo host cuya MAC Address no está registrada en el menú `USERS`, independientemente de su estado de autenticación.

---

## Acceso a equipos

Los equipos pueden ser accedidos mediante diferentes métodos:

- SSH
- Telnet
- Winbox
- MAC-Telnet

Desde el menú `IP → Neighbors` se pueden visualizar equipos disponibles en la red.

Sin embargo:

- La presencia en `Neighbors` no garantiza conectividad completa.
- La ausencia en `Neighbors` no implica necesariamente que el equipo no sea accesible.

Por lo tanto, siempre se debe especificar:

- Si el equipo no aparece en `Neighbors`, o
- Si aparece pero no se puede acceder mediante un método específico (ej. MAC-Telnet)

Lo mismo aplica para el listado ARP.

---

## Casos de clientes no autenticados

Cuando un cliente no aparece como autenticado, es decir:

- No tiene estado ACTIVE
- No tiene la letra A en HOSTS

Esto es un indicador directo de falla en la autenticación.

En estos casos:

- No es necesario continuar con diagnósticos de ruta o conectividad avanzada
- El problema debe abordarse en el proceso de autenticación primero

---

## Ejemplo de validación incorrecta

En los casos ilustrados a continuación, la falta de autenticación habría permitido identificar rápidamente el problema como de primer nivel.

(imágenes de referencia)

---

## Clientes autenticados que no responden

Existe un caso particular donde:

- El cliente aparece correctamente autenticado
- Figura en Neighbors
- Pero no responde por MAC-Telnet

Este escenario no implica falta de conectividad física, sino un problema a nivel de acceso o gestión del equipo.

En este caso, la forma correcta de describirlo es:

- “El equipo aparece en el vecindario, pero no permite acceso por MAC-Telnet”

<img width="1110" height="574" alt="image" src="https://github.com/user-attachments/assets/a7c8ccd5-84e0-40d3-a4f0-391ff77595b0" />


---

## Resumen

- ACTIVE / A en HOSTS = cliente autenticado
- Sin ACTIVE / sin A = cliente no autenticado
- HOSTS siempre debe contener los clientes conectados
- Neighbors no es prueba definitiva de conectividad
- MAC-Telnet puede fallar incluso con equipo visible
