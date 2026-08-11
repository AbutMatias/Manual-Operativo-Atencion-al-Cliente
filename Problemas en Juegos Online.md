# Proceso de diagnóstico para problemas en juegos online

---

## 1. Verificación del servicio

Antes de revisar el juego, confirmar que la conexión del cliente esté funcionando correctamente.

### Revisar:

- Tipo de servicio contratado
- Ancho de banda disponible
- Posible saturación de la red
- Estado general de la línea

### También verificar:

- Firmware del router actualizado
- Estado del hardware del equipo

---

## 2. ¿El problema ocurre en un solo juego?

### Si ocurre solo en un juego:

Indicar al cliente que debe contactar primero al soporte del juego.

### Solicitar:

- Capturas del error
- Latencia (ms)
- Pérdida de paquetes

---

### Si ocurre en todos los juegos:

Realizar pruebas desde el cliente:

- Ping desde la PC
- Prueba dentro del juego
- Verificar latencia y pérdida de paquetes

---

### Importante:

- FPS bajos no siempre son problema de red
- Puede ser problema de la PC o requisitos del juego

---

## 3. Identificación del servidor del juego

---

### Si el cliente tiene la IP del servidor:

Tratar como acceso a servidor externo:

- Analizar conectividad al destino

---

### Si NO tiene la IP (y el router es MikroTik):

Usar **Torch** en la interfaz donde está conectada la PC para identificar tráfico.

---

## Torch

Permite ver conexiones activas y detectar IP del servidor del juego.

---

### Si NO es MikroTik:

- Buscar otro cliente en la misma zona para comparar
- O solicitar herramientas al cliente

---

## Herramienta alternativa (cliente)

### Live TCP UDP Watch

Permite identificar la IP del servidor del juego.

---

### Uso:

1. Descargar y ejecutar (portable)
2. Iniciar el juego
3. Entrar a una partida
4. Limpiar lista (File > Clear All)
5. Identificar el proceso del juego
6. Ver IP remota con mayor tráfico recibido

Resultado:
- Esa IP corresponde al servidor del juego

---

## 4. Puertos del juego

Verificar si el juego requiere puertos específicos.

### Revisar:

- Port forwarding en el router
- TCP / UDP necesarios

---

### Ejemplo:

Call of Duty ports:
https://support.activision.com/es/articles/ports-used-for-call-of-duty-games

---

## 5. Casos sin acceso al servidor

Si el cliente no puede conectarse:

- Abrir reclamo de “sin acceso a destino”

---

## 6. Casos con degradación

Si el acceso funciona pero es inestable:

- Abrir reclamo de “degradación a destino”

---

## Recomendaciones técnicas

- Usar conexión por cable LAN siempre que sea posible
- Si es WiFi:
  - Usar 5 GHz

- Conectarse a servidores cercanos geográficamente
- Ajustar calidad gráfica del juego si es necesario

---

## Tecnología

- Fibra óptica:
  - Mayor estabilidad

- Wireless:
  - Puede tener variaciones de rendimiento

---

## DNS

Verificar que el cliente:

- No esté usando DNS externos no autorizados
- Use DNS provistos por el servicio

---
