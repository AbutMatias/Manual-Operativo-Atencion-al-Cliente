# Ping

El comando `ping` se utiliza para verificar la conectividad entre dos dispositivos (router, antena, hEX PoE, PC, etc.) enviando paquetes de red y midiendo su respuesta.

Es una de las pruebas más importantes para diagnosticar problemas de conectividad.

---

## ¿Cómo funciona?

El ping envía paquetes ICMP a un dispositivo destino y espera una respuesta.

Esto permite verificar:

- Si el equipo está en línea
- La latencia de la conexión
- Pérdida de paquetes
- Estabilidad del enlace

---

## Tipos de pruebas de ping

### Ping con paquetes de 1500 bytes (sin fragmentación)

![image](https://github.com/user-attachments/assets/762c4119-e6da-43c3-b5b6-a251fea4be9c)

- Tamaño estándar en redes Ethernet
- No requiere fragmentación
- Más estable y confiable
- Menor carga en la red
- Ideal para diagnóstico básico

### Ventajas:

- Menor latencia
- Mayor estabilidad
- Resultados más representativos del uso real

---

### Ping con paquetes de 16384 bytes (con fragmentación)

- Supera el tamaño estándar de MTU
- El paquete se divide en fragmentos más pequeños
- Todos los fragmentos deben llegar para reconstruirse

### Desventajas:

- Mayor latencia
- Mayor riesgo de pérdida de paquetes
- Puede generar resultados inconsistentes
- Consume más recursos de red

---

## Comparación

| Tipo de ping | Estabilidad | Latencia | Uso recomendado |
|--------------|------------|----------|-----------------|
| 1500 bytes   | Alta       | Baja     | Diagnóstico básico |
| 16384 bytes  | Baja       | Alta     | Pruebas avanzadas |

---

## Conclusión

Las pruebas con **1500 bytes** son las más confiables y deben utilizarse como estándar en diagnósticos iniciales.

Los paquetes de **16384 bytes** se utilizan únicamente para pruebas específicas de estrés o comportamiento bajo fragmentación.

---

## Recomendación

En cualquier chequeo básico o diagnóstico inicial:

- Utilizar siempre `1500 bytes`
- Evitar depender únicamente de pruebas con fragmentación
