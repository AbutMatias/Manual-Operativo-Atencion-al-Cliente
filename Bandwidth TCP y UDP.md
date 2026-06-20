# Prueba de ancho de banda en MikroTik: TCP vs UDP

En las pruebas de ancho de banda en MikroTik, la diferencia principal entre TCP y UDP está en la forma en la que cada protocolo transmite los datos.

---

## TCP (Transmission Control Protocol)

TCP es un protocolo orientado a conexión.

### Características:
- Establece una conexión antes de transmitir datos
- Garantiza la entrega de paquetes
- Asegura el orden correcto de los datos
- Realiza retransmisiones en caso de pérdida

### Ventajas:
- Resultados más precisos y confiables
- Ideal para medir estabilidad real del enlace

### Desventajas:
- Mayor sobrecarga por control de errores
- Puede mostrar menor velocidad máxima debido a retransmisiones

---

## UDP (User Datagram Protocol)

UDP es un protocolo sin conexión.

### Características:
- No establece conexión previa
- No garantiza entrega de paquetes
- No asegura orden de llegada
- No realiza retransmisiones

### Ventajas:
- Menor sobrecarga
- Mayor velocidad en pruebas
- Útil para medir capacidad máxima teórica del enlace

### Desventajas:
- Puede perder paquetes
- Menos precisión en condiciones reales de red

---

## Conclusión práctica

- TCP → mide estabilidad real y rendimiento confiable
- UDP → mide capacidad máxima del enlace

Una regla importante:

Si una prueba UDP no da buenos resultados, es altamente probable que TCP tampoco los mejore.

---

## TX y RX en pruebas

- TX (Transmit) = velocidad de envío
- RX (Receive) = velocidad de recepción

### Interpretación:

- Buen TX pero mal RX:
  - Problema en retorno de tráfico
  - Posibles interferencias
  - Problemas de señal o saturación
  - Problemas en el enlace inalámbrico o ruta de retorno

### Impacto:
- Baja velocidad real de navegación
- Alta latencia
- Pérdida de paquetes
- Posibles microcortes o desconexiones

Para una conexión estable se requiere:
- Buen TX
- Buen RX

---

## Regla de firewall en MikroTik (sin desactivar firewall)

```rsc
/ip firewall address-list add address=10.0.0.0/8 list=REDES_ETHERNET

/ip firewall filter set [find where chain=input and src-address-list="REDES_ETHERNET" and protocol="tcp"] dst-port=21,22,8291,8728,80,2000
