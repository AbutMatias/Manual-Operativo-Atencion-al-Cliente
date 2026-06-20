# Esquema de conexión con servicio FTTH y routers MikroTIk

## Mikrotik AC2 + ONU
- ### Esquema:

![image](https://github.com/user-attachments/assets/823a1ed5-d286-42b6-ab3f-6b5eb173ee7d)

- ### Tutorial: [Link](https://www.youtube.com/watch?v=xhFWoQJ-S7w)

## Mikrotik 951/952 + ONU

- ### Esquema:

![image](https://github.com/user-attachments/assets/e1db7992-2435-4119-b7af-4b61d850ebf4)

- ### Tutorial: [Link](https://www.youtube.com/watch?v=dq8nk7vlU1c)

## Mikrotik AC2 + ONU + Repetidor

- ### Esquema:

![image](https://github.com/user-attachments/assets/16422dd3-3ca9-4048-a809-39d378ddb79f)

- ### Tutorial: [Link](https://www.youtube.com/watch?v=2ar_3evqd9A)

## Mikrotik 951/952 + ONU + Repetidor

- ### Esquema:

![image](https://github.com/user-attachments/assets/8f30687b-0b69-437f-8570-aa4f9244cbde)

- ###  Tutorial: [Link](https://www.youtube.com/watch?v=PlAXccVVQfc)

## Mikrotik 2011 + ONU

- ### Esquema:

![image](https://github.com/user-attachments/assets/d5879103-8d63-454e-9746-fb1b59e7fe87)

- ### Tutorial: [Link](https://www.youtube.com/watch?v=RguLdaiYpME)

# Esquemas de conexión con servicio Wireless y router Mikrotik 

## Equipo Wireless MK por POE OUT

- ### Esquema:

![image](https://github.com/user-attachments/assets/d9122dce-e1d8-4727-9262-45d14329d867)

- ### Tutorial: [Link]()

## Equipo Wireless MK 951/952 con data+power.

- ### Esquema:

![image](https://github.com/user-attachments/assets/6f2e4dda-f9b1-4fc4-ba30-967e97b68aa4)

- ### Tutorial: [Link](https://www.youtube.com/watch?v=3dCX8RAM0rY)

## Equipo Wireless MK AC2 con data+power.

- ### Esquema:

![image](https://github.com/user-attachments/assets/6c97dfbc-10f4-4f42-9412-d2ef3b001505)

- ### Tutorial: [Link](https://www.youtube.com/watch?v=dp-0fEAS2Rs)

## Equipo Wireless MK AC2 con data+power + Repetidor

- ### Esquema:

![image](https://github.com/user-attachments/assets/dfcab490-efb9-4401-9a14-d173f2639fbe)

- ### Tutorial: [Link](https://www.youtube.com/watch?v=KQ2pCQoGcRI)

## Equipo Wireless MK 951/952 con data+power + Repetidor

- ### Esquema:

![image](https://github.com/user-attachments/assets/7288c08f-1b04-4821-bef9-50314f5e2d3b)

- ### Tutorial: [Link](https://www.youtube.com/watch?v=pi3QedMvAho)

## Equipo Wireless MK 2011 por POE OUT

- ### Esquema:

![image](https://github.com/user-attachments/assets/7f67f41b-e0f5-41b0-8317-d0dbccc50ecd)

- ### Tutorial: [Link](https://www.youtube.com/watch?v=sHoyIJ8TRUQ)

## Equipo Wireless MK 2011 con data+power.

- ### Esquema:

![image](https://github.com/user-attachments/assets/aff91bf7-badf-4e74-a86b-0327834b4df8)

- ### Tutorial: [Link](https://www.youtube.com/watch?v=YkUoS2sRPCs)
---

## Equipo Wireless con PowerActive

- ### Esquema:

![Nano+MK+PowerActive](https://user-images.githubusercontent.com/88723629/164240992-294c4974-e789-4efe-ab7e-516bd96ebcf7.jpg)

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
```
# Pruebas de ancho de banda en routers MikroTik (hacia Internet)

Existen diferentes formas de verificar el ancho de banda real que está llegando a un router MikroTik desde Internet. A continuación se describen los métodos más utilizados.

---

## Método 1: Tool Fetch (descarga de archivo)

Este método consiste en forzar una descarga desde Internet directamente en el router, y observar la velocidad alcanzada.

### Pasos:

1. Abrir **New Terminal** en MikroTik
2. Ejecutar:
```
/tool fetch url="LINK"
```

Donde:
- `LINK` es un archivo de descarga directa desde Internet

---

### Interpretación

Durante la descarga se puede observar:

- Velocidad en **RX (Receive / Recepción)** en la interfaz WAN
- Consumo real de ancho de banda de bajada

---

### Importante

- Este método mide principalmente **descarga**
- El resultado depende del servidor desde donde se descarga el archivo
- Si el servidor es lento, el resultado será menor aunque la conexión esté bien

---

## Método 2: Bandwidth Test (herramienta MikroTik)

Esta herramienta permite medir el rendimiento real entre dos puntos MikroTik.

### Ejecución por terminal:

```
/tool bandwidth-test address=87.121.0.45 direction=both duration=15s user="neterra" password="neterra"
```

---

### Parámetros importantes:

- `address`: IP del servidor de prueba
- `direction=both`: mide subida y bajada
- `duration=15s`: duración de la prueba
- `user/password`: credenciales del servidor

---

### Ejecución desde Winbox:

1. Ir a **Tools**
2. Seleccionar **Bandwidth Test**
3. Completar:
   - Dirección del servidor
   - Usuario y contraseña
   - Dirección (TX, RX o ambos)
4. Iniciar prueba

---

## Interpretación de resultados

- TX: velocidad de subida
- RX: velocidad de bajada

---

## Consideraciones importantes

- El Bandwidth Test puede consumir muchos recursos del router
- Debe usarse con cuidado en equipos de baja potencia
- Los resultados pueden variar según carga del equipo y red

---

## Conclusión

- **Fetch**: útil para medir descarga real desde Internet (RX)
- **Bandwidth Test**: útil para medir capacidad total de enlace (TX/RX)

Ambos métodos deben interpretarse considerando que:
- La calidad del servidor influye en el resultado
- El estado del enlace y del router también impacta en la medición
