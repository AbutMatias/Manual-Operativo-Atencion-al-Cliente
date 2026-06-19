# Equipo cliente desenlazándose

Cuando un equipo wireless presenta desconexiones constantes del AP, se debe generar el reclamo:

**“Equipo cliente desenlazándose”**

---

# 1. Validación inicial

Antes de avanzar, se debe confirmar que el problema sea del cliente y no general del AP.

## Verificación
- Revisar si otros clientes del mismo AP presentan el mismo problema

### Si afecta a varios clientes
- Posible falla general del AP
- No es un problema individual del cliente

---

# 2. Identificación del problema

Este tipo de falla se detecta porque:
- Se pierde gestión del equipo de forma intermitente
- El equipo vuelve a aparecer sin reiniciarse
- El uptime no se reinicia (no vuelve a cero)

Este comportamiento indica que no es un reinicio del equipo, sino una pérdida de enlace

---

# 3. Confirmación desde el AP

El análisis más claro se realiza desde los logs del AP:
- Se observan desconexiones y reconexiones del cliente
- Se confirma el patrón de desenlace constante

---

# 4. Pruebas con el cliente

## 4.1 Reinicio eléctrico del equipo wireless
- Solicitar reinicio eléctrico del equipo del cliente

---

# 5. Resolución del caso

## Si el problema persiste
- Derivar a Redes
- Solicitar verificación en sitio

---

## Si el problema se soluciona
- Mantener monitoreo por un período prudencial
- Confirmar que no se repita la falla

---

# Nota importante

Siempre verificar si el cliente está dentro de cobertura de Fibra Óptica.

- Si está dentro de cobertura:
  - No derivar a Redes
  - Cargar actualización tecnológica
  - Solicitar prioridad en Coordinación

https://github.com/Eternet/Coordinacion/blob/main/Documentacion/Procesos/Solicitud%20de%20prioridad/readme.md
