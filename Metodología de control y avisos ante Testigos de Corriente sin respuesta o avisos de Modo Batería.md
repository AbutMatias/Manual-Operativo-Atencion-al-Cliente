# Metodología de control y avisos ante Testigos de Corriente sin respuesta o avisos de Modo Batería

---

# 1. Introducción

Ante un **testigo de corriente sin respuesta** o un **aviso de modo batería**, si existe cualquier duda durante el procedimiento, siempre es preferible **avisar antes que omitir**.

> En el peor de los casos, se revisará el error y se ajustará la documentación.

---

# 2. Regla general de diagnóstico

Antes de iniciar cualquier acción:

## Paso crítico
Determinar el **horario real de inicio del evento**.

### Casos posibles:

- Si el horario detectado = horario real:
  → seguir procedimiento normalmente

- Si el evento fue detectado con demora (> 15 minutos):
  → **avisar inmediatamente**

Excepción:
- No aplica si el testigo está sin gestión

---

## Cómo validar si es testigo

Se puede identificar mediante:
- Correo de aviso
- Logs del equipo vecino
- Outage del servicio de ping (The Dude)
- Correo de modo batería

---

# 3. Testigos de corriente

---

## 3.1 Verificación inicial

### Paso 1: Revisar link del puerto

- Verificar estado del puerto en el equipo conectado al testigo

---

### Caso A: Hay link pero no responde

Esto indica:
- Posible equipo colgado
- Problema de gestión
- NO es necesariamente problema eléctrico

### Acción:
- Intentar ping desde CRF
- Si no responde → escalar a:

`WhatsApp Redes`

---

### Caso B: No hay link

Esto indica:
- Posible corte eléctrico en sitio

### Acción:
- Continuar con diagnóstico eléctrico

---

## 3.2 Validación de energía eléctrica

Realizar:
- Reclamo a cooperativa eléctrica
- Contactar responsables del sitio o clientes cercanos

Referencias:
- Torres / Shelters:
  https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/Energia%20electrica%20shelters%20y%20torres.md

- EDES:
  https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/Suministros%20EDES.md

- CELTA:
  https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/Suministros%20eléctricos%20de%20CELTA%20en%20Tres%20Arroyos.md

---

## 3.3 Escalamiento temporal

### A los 15 minutos del evento:
- Avisar grupo:
`Redes - DT (Incidentes)`


---

### A los 25 minutos totales:
- Si no hay respuesta:
  - Re-avisar
  - Arrobar responsables de Departamento Técnico

---

# 4. Aviso de modo batería

Aplica únicamente para:
- Datacenters
- Shelters
- Edificios

No aplica para postes

---

## 4.1 Acciones iniciales

- Reclamo a cooperativa eléctrica
- Contacto con responsables del sitio o clientes cercanos

Referencias:
- Torres / Shelters:
  https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/Energia%20electrica%20shelters%20y%20torres.md

- EDES:
  https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/Suministros%20EDES.md

- CELTA:
  https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/Suministros%20eléctricos%20de%20CELTA%20en%20Tres%20Arroyos.md
---

## 4.2 Relevamiento de voltaje

Buscar el equipo que mida energía en el sitio:

Ejemplos:
- PowerBox
- hEX PoE
- RB3011

---

## 4.3 Escalamiento temporal
A los 15 minutos:
Avisar en:
```
WhatsApp Redes - DT (Incidentes)
```
# A los 25 minutos:
Si no hay respuesta:
- Avisar a Departamento Técnico
- Escalar internamente

## 5. Resumen operativo
Testigo sin respuesta
- Verificar link
- Validar ping
- Determinar corte eléctrico o gestión
- Escalar a Redes

Modo batería
- Validar energía
- Medir voltaje
- Confirmar estado del sitio
- Escalar si no hay respuesta
