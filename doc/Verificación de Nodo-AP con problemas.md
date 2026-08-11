# Problema: AP sin respuesta (MikroTik)

Este documento explica cómo revisar un problema cuando un **Access Point (AP) no responde**, de forma simple y paso a paso.

El objetivo es identificar si el problema está en:
- Todo el AP
- Solo algunos clientes
- Toda una zona de red

---

# 1. Si fallan varias redes (redes “hermanas”)

Esto suele indicar un problema más grande en la red.

## Qué hacer:

- Ir subiendo en **Netmap**
- Buscar el **último equipo que funciona bien**
- Ese equipo suele ser donde empieza el problema

---

## Qué revisar en ese equipo:

- Si hay errores en **Log**
- Si el CPU está muy alto
- Si los cables o enlaces están “linkeando” bien (conectados correctamente)

---

## Si es un enlace inalámbrico (P2P):

- Ver señal del enlace
- Ver calidad de conexión
- Ver si está estable o se desconecta

---

# 2. Si solo falla un AP

## Qué hacer:

- Subir en **Netmap** hasta el equipo que lo alimenta
- Revisar:

### Logs
- Reinicios
- Errores
- Cortes de conexión

### CPU
- Ver si el equipo está saturado

### Enlace hacia el AP
- Ver si está conectado (link)
- Ver velocidad de conexión

---

## Prueba importante:

- Si el enlace funciona, hacer un **ping corto al AP**
- Esto sirve para ver si responde correctamente

---

## Si el equipo usa PoE:

(Alimentación por cable de red)

- Se puede reiniciar el equipo desde el PoE si es necesario
- Solo hacerlo si es seguro y no afecta otros equipos

---

# 3. Si el problema son los clientes

## En el AP:

- Ir a: **Wireless > Registration**

## Verificar:

- Qué clientes están conectados
- Cuánto tiempo llevan conectados (uptime)
- Señal que tienen
- Si se desconectan seguido

---

## Revisar también:

- Logs del AP (errores o desconexiones)
- Uso del CPU
- Tiempo encendido del equipo (uptime)

---

## Si todo parece normal:

Hacer pruebas más avanzadas:

### 1. Ping a clientes
- Desde el AP
- Usar paquetes grandes (1500 bytes)
- Ver si responde bien

---

### 2. Prueba de velocidad interna
- Medir subida y bajada
- Ver si el problema aparece bajo carga

---

# 4. Resultado del diagnóstico

Con estas pruebas se puede saber:

- Si el AP está fallando
- Si el problema es de la red superior
- Si el problema son los clientes

---

# 5. Escalamiento (cuando no se soluciona)

Si el problema sigue:

## Crear un reporte:

https://github.com/Eternet/Redes/issues/new?assignees=&labels=Reclamo&template=Nuevo+reclamo+-+Sector+Redes.yml&title=Cliente+%23xxx+-+Diagn%C3%B3stico

---

# 6. Casos urgentes

Si es un problema grande o fuera de horario:

- Se puede reiniciar el equipo por PoE
- Solo si es seguro hacerlo

## Importante:

- Si un equipo alimenta varios APs y solo uno falla:
  - NO reiniciar todo
  - Solo intervenir el equipo afectado

---
