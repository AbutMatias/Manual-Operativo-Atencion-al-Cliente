# Equipo cliente reiniciándose

Cuando el servicio se ve afectado por reinicios constantes del equipo wireless del cliente, se debe generar el reclamo:

**“Equipo cliente reiniciándose”**

---

# 1. Identificación del problema

Se detecta porque:
- Se pierde gestión del equipo de forma recurrente
- El uptime del equipo se reinicia constantemente

Esto indica reinicios reales del equipo y no simples cortes de enlace.

---

# 2. Pruebas con el cliente

## 2.1 Equipos con adaptador PoE (Data + Power / Power Active)

- Verificar que el cable de bajada esté correctamente conectado al puerto PoE del inyector
- Cambiar el inyector PoE a otra toma de corriente
  - Posible falla eléctrica en el domicilio

---

## 2.2 Equipos con PoE Out (MikroTik)

- Desconectar y reconectar el cable de bajada del puerto 5 del router MikroTik
- Cambiar el transformador del router a otra toma de corriente

En este tipo de conexión:
- Si el router se reinicia, la antena también se reinicia

---

# 3. Resolución del caso

## Si el problema persiste
- Derivar a Redes para verificación en sitio

---

## Si el problema se soluciona
- Mantener monitoreo por un período prudencial
- El monitoreo debe ser superior al tiempo habitual de reinicio
- Confirmar que el problema no se repita

---

# Nota importante

Siempre verificar si el cliente está dentro de cobertura de Fibra Óptica.

- Si está dentro de cobertura:
  - No derivar a Redes
  - Cargar actualización tecnológica
  - Solicitar prioridad en Coordinación
