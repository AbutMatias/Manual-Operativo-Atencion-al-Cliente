# Comprobación de AP sin respuesta

Como primera medida, se debe determinar el alcance del problema:

- Si afecta a todo el AP
- Si afecta solo a los clientes del AP
- Si afecta a redes hermanas

---

# 1. Si afecta a todas las redes hermanas

Esto puede indicar un problema masivo.

## Procedimiento
- Subir en el árbol de Netmap hasta encontrar el último equipo que responde correctamente
- Identificar el punto de origen del problema

## Verificaciones en ese nodo
- Revisar logs (eventos relevantes, flapeos)
- Verificar uso de CPU
- Confirmar estado de interfaces y negociación de link

## Si el último nodo es un enlace P2P / AP
- Verificar interfaz wireless (wlan)
- Revisar:
  - Enlace
  - Señal
  - Calidad

---

# 2. Si afecta a todo el AP

## Procedimiento
- Subir en Netmap hasta el equipo padre del AP

## Verificaciones
- Revisar logs (flapeos o eventos anormales)
- Verificar uso de CPU
- Verificar estado de enlace hacia el AP y negociación

## Si hay IP configurada
- Verificar en IP Address
- Realizar ping en corto al AP  
  (Paso fundamental del diagnóstico)

## Si el equipo es PoE (PowerBox / hEX PoE)
- Se puede reiniciar el equipo si la situación lo permite
- Evaluar impacto sobre otros clientes antes de hacerlo

---

# 3. Si afecta solo a los clientes

## Procedimiento desde el AP
- Ingresar al AP
- Ir a Wireless > Registration

## Verificaciones
- Clientes conectados
- Uptime
- Señal
- Tasa de transferencia
- Patrones de desconexión

## Revisión de logs
- Desconexiones masivas o recurrentes

## Verificaciones adicionales
- Uso de CPU del AP
- Uptime del AP

---

## Pruebas avanzadas

### Ping en corto desde AP a clientes
- Verificar que el AP tenga IP en el mismo rango (ej: 10.150.x.y/21)
- Realizar ping directo a clientes
- Usar paquetes de 1500 bytes

### Bandwidth test
- Probar en ambos sentidos
- Superar el ancho de banda contratado
- Evaluar degradación o pérdida

---

# 4. Evaluación final

Con las pruebas anteriores se debe poder determinar:
- Si el sistema funciona correctamente
- O si existe un problema real en la red

---

# 5. Escalamiento a Redes

Si se detecta un problema:

## Crear issue

## Derivación por sistema
- Escalar el reclamo a Redes

---

# 6. Casos urgentes

En situaciones críticas:
- Muchos clientes afectados
- Horario nocturno o fin de semana
- Sin respuesta inmediata de Redes

Se puede considerar:

## Reinicio de equipo afectado
- Solo si el equipo funciona correctamente a nivel de alimentación
- Apagar y encender PoE de la interfaz correspondiente

## Reinicio de nodo (con precaución)
- Solo si no afecta a múltiples clientes
- Ejemplo:
  - PowerBox con 3 APs
  - Si solo 1 AP falla, no reiniciar todo el equipo
