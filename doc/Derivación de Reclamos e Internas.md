# Derivación de Reclamos e Internas

## Objetivo

Derivar correctamente tareas y reclamos a las áreas correspondientes.

> **Regla General:** Toda tarea derivada debe tener una Issue asociada, las etiquetas correspondientes y mencionar (@) al área responsable.

---

## Paso 1: Identificar el tipo de tarea

Determinar si se trata de:

* Una Interna.
* Un Reclamo con visita técnica.
* Un Reclamo para revisión remota de Redes.
* Un Reclamo para revisión remota de Servicio Técnico.

---

## Casos de Derivación

| Tipo de tarea                                    | Área responsable      | Repositorio de la Issue | Derivación en SSAK   |
| ------------------------------------------------ | --------------------- | ----------------------- | -------------------- |
| Interna                                          | Coordinación y Sertec | Coordinación            | Redes                |
| Reclamo con visita técnica                       | Coordinación          | Redes                   | Redes                |
| Reclamo para revisión remota de Redes            | Redes                 | Redes                   | Diagnóstico de Redes |
| Reclamo para revisión remota de Servicio Técnico | Servicio Técnico      | Servicio Técnico        | Servicio Técnico     |

---

## Casos Especiales

### Reclamo Tipo HO

1. Crear la Issue en el repositorio de Servicio Técnico.
2. Esperar la autorización correspondiente.
3. Luego derivar al repositorio de Coordinación.

---

### Reclamo Tipo IN

Crear la Issue en el repositorio de Redes.

#### Si requiere coordinar una visita

* Arrobar a Coordinación.
* Derivar por SSAK a Redes.

#### Si requiere verificación remota

* Arrobar a Redes.
* Derivar por SSAK a Diagnóstico de Redes.

---

### Internas

Toda Interna debe cargarse en el repositorio de Coordinación.

---

## Creación de Issues

Al crear una nueva Issue en los repositorios de:

* Coordinación
* Atención al Cliente

Utilizar siempre la plantilla correspondiente según el caso.

### Plantillas disponibles

* Internas
* Cambios de Host

Seleccionar la plantilla adecuada antes de completar la información.

---

## Resumen Rápido

✅ Toda derivación requiere una Issue.

✅ Agregar etiquetas correspondientes.

✅ Arrobar al área responsable.

✅ Internas → Coordinación.

✅ Reclamos HO → Servicio Técnico y luego Coordinación.

✅ Reclamos IN → Redes.

✅ Utilizar las plantillas correctas al crear Issues.
