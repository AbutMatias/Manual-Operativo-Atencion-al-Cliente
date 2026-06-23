# Diagnóstico de equipos Vilo

---

## 1. Identificación del equipo

Para identificar el equipo en sistema:

- Buscar por **MAC address**
- Confirmar que corresponda al cliente
<img width="959" height="299" alt="image" src="https://github.com/user-attachments/assets/1bc4b066-54e1-46f2-a0ab-7eda5fc2e67e" />

---

## 2. Indicadores de luces

Las luces del equipo indican su estado.

---

### Estado general:

- 🔵 Azul fija:
  - Equipo funcionando correctamente con internet

- 🔵 Azul intermitente:
  - Internet inestable o señal débil

- 🟠 Ámbar (naranja) fija:
  - Equipo listo para configurar

- 🟠 Ámbar intermitente:
  - Proceso de sincronización

- 🔴 Rojo:
  - Problema de conexión o inicio del sistema

---

## 3. Diagnóstico según luz del equipo

---

### 🟠 Luz ámbar en equipo principal

- El equipo no está completamente configurado
- Puede navegar solo si valida en sistema (Hotspot)

### Acciones:

- Reiniciar eléctricamente el equipo
- Verificar si pasa a azul

Si no valida:
- Escalar a Redes

Si valida:
- Permitir conexión temporal con credenciales del equipo

---

### 🟠 🔴 Sub Vilo en ámbar o rojo

- Problema de sincronización o enlace

### Acciones:

- Reinicio eléctrico
- Verificar conexión cableada o inalámbrica

Si no se soluciona:
- Escalar a Servicio Técnico

---

### 🔴 Luz roja

- Equipo sin funcionamiento normal

- Escalar a Redes

---

## 4. Uptime del equipo

El uptime indica el tiempo encendido del equipo.

---

### Importante:

- No siempre indica interrupciones reales de internet
- Puede reiniciarse por cortes eléctricos
- Útil para detectar posibles problemas eléctricos
<img width="1383" height="309" alt="image" src="https://github.com/user-attachments/assets/c1102320-d63d-43fe-979c-d8a66aed2b5a" />
<img width="931" height="595" alt="image" src="https://github.com/user-attachments/assets/b708d4fe-892d-47b2-8d29-94562fc9e6e4" />

---

## 5. Fuente de alimentación

---

### Requisito:

- 12V 1A
<img width="696" height="227" alt="image" src="https://github.com/user-attachments/assets/b8b16532-31a5-4854-9954-f1ac7c19c8a0" />

---

### Problemas comunes:

- Fuentes incorrectas pueden causar:
  - Cortes de conexión
  - Reinicios aleatorios
  - Inestabilidad WiFi

---

## 6. Dispositivos conectados

Permite ver:

- Nombre del dispositivo
- Señal
- Tipo de conexión (2.4 GHz / 5 GHz)
<img width="1487" height="456" alt="image" src="https://github.com/user-attachments/assets/d45b019e-20e2-49ff-8868-b8ec62fd3094" />

---

## 7. Firmware

---

### Verificación:

- Revisar versión del Host
- Revisar versión de repetidores

---

### Actualización:

- Usar menú Firmware Update
- Mantener todos los equipos en la misma versión
<img width="1316" height="212" alt="image" src="https://github.com/user-attachments/assets/092e6137-d34f-487d-befb-3891f2794ea9" />
<img width="409" height="375" alt="image" src="https://github.com/user-attachments/assets/0356e12b-2886-41b1-ad28-8e8a86d66881" />

---

### Nota:

- El proceso demora entre 1 y 3 minutos
- El equipo se reinicia automáticamente
- No cerrar la página durante el proceso

---

## 8. Prueba de velocidad interna
<img width="1605" height="191" alt="image" src="https://github.com/user-attachments/assets/c0922147-43d3-4a12-affe-1fd24e81d03e" />

---

### Consideraciones:

- Es una prueba de referencia interna
- No siempre refleja resultados reales externos

---

### Importante:

- No se puede garantizar velocidad máxima por WiFi
- La velocidad depende de:
  - Dispositivo
  - Distancia
  - Interferencia
  - Estado del enlace

---

### Subida y bajada:

- Si la subida falla:
  - El servicio puede estar severamente afectado
<img width="859" height="347" alt="image" src="https://github.com/user-attachments/assets/8807c7e0-638f-46b8-9d31-0b4b72bb2b62" />

---

## 9. Redes WiFi
<img width="430" height="521" alt="image" src="https://github.com/user-attachments/assets/42f2e529-74f7-4105-a980-2d237aa3814e" />

---

### Característica principal:

- El cliente ve un solo SSID
- El sistema maneja roaming automático

---

### Funcionamiento:

- Cambia entre 2.4 GHz y 5 GHz automáticamente
- Depende de señal y calidad del enlace

---

## 10. Canales WiFi
<img width="379" height="858" alt="image" src="https://github.com/user-attachments/assets/dbcfcfd7-df9e-4616-b6c8-788287fa5dae" />

---

### 2.4 GHz:

- Canales recomendados:
  - 1
  - 6
  - 11

---

### 5 GHz:

- Canales recomendados:
  - 36
  - 40
  - 44
  - 48

---

### Nota:

- El equipo optimiza canales automáticamente
- No siempre el cambio manual mejora el rendimiento

---

## 11. Reinicio del equipo
<img width="641" height="306" alt="image" src="https://github.com/user-attachments/assets/613bcf87-0588-439e-8d19-65c07382d42e" />

---

- Se realiza desde el menú “Restart Vilos”
- Seleccionar equipo a reiniciar
- Confirmar acción

---

## 12. Señal aproximada

---

### Valores:

* Señal Óptima: -40 dBm a -60 dBm ✅
* Señal Buena: -61 dBm a -80 dBm ⚠️
* Señal mala: -81 dBm o peor 🚫

---

### Acciones en mala señal:

- Verificar ubicación del equipo
- Acercar repetidor si es posible
- Revisar interferencias
- Probar velocidad real del servicio

---

## 13. Conexión cableada (Windows)
<img width="417" height="213" alt="image" src="https://github.com/user-attachments/assets/3594ba22-2930-4bb3-9cce-e573b22e2455" />

---

### Pasos:

- Ejecutar: `ncpa.cpl`
- Abrir estado de conexión
- Revisar velocidad de enlace
<img width="985" height="591" alt="image" src="https://github.com/user-attachments/assets/ab6aa05e-282e-4e2b-af45-7f6106eaec92" />
<img width="985" height="591" alt="image" src="https://github.com/user-attachments/assets/f2047e1a-df24-4c2f-9435-2959e71c8bed" />



---

### Interpretación:

- Más de 100 Mbps:
  - Enlace Gigabit activo

---

## 14. Reset de fábrica

---
<img width="1653" height="303" alt="image" src="https://github.com/user-attachments/assets/a1998f30-25a3-47cb-8aee-8dd7b0efd599" />
<img width="443" height="168" alt="image" src="https://github.com/user-attachments/assets/738621b0-d184-4a1e-a31e-aea0b4244e6a" />


### IMPORTANTE:

- El botón de reset borra toda la configuración
- Solo usar si es estrictamente necesario

---

## 15. Consumo en tiempo real

---
<img width="768" height="531" alt="image" src="https://github.com/user-attachments/assets/5f401ea8-0214-4d35-81a0-75a3b5409eec" />

- Se puede visualizar tráfico desde el sistema Hotspot
- Permite ver consumo del cliente en vivo



---
# Acceso al portal ISP de Vilo (guía simple)

## 1. Ingresar al sistema
- Abrir la web: https://isp.viloliving.com/
- Iniciar sesión con el usuario asignado.
<img width="960" height="433" alt="image" src="https://github.com/user-attachments/assets/b5d55786-ae1d-42bc-a487-909b230c048e" />

---

## 2. Pantalla principal (Wi-Fi Networks)
Al ingresar vas a ver todos los clientes activos.
<img width="1877" height="708" alt="image" src="https://github.com/user-attachments/assets/66f96e5e-bffa-4704-af29-3e0b53db99d7" />

**Campos importantes:**
- Customer ID: identifica al cliente
- Network: nombre de la red Wi-Fi (SSID)
- Network Status: estado del Vilo principal (online/offline)
- Vilo Status: cantidad de equipos online/offline

---

## 3. Entrar a un cliente
- Hacer clic en **“View”** sobre el cliente
<img width="1631" height="364" alt="image" src="https://github.com/user-attachments/assets/8a490498-d00f-41da-bc5b-13ac4a146e7d" />

Esto abre la administración del cliente.

---

# Secciones dentro del cliente

## 4. Vilos
Información de los equipos instalados:

- Vilo: nombre del equipo
- Status: online/offline
- Network Connection: cable o wireless
- Signal: calidad del enlace (si es wireless)
- Devices: dispositivos conectados
- IP Address: IP del equipo
- Indicator Light: encender/apagar LED
- Firmware Version: versión del sistema

---

## 5. Devices
Lista de dispositivos conectados:

- Network: red Wi-Fi usada
- Signal: calidad de señal
- Connection: 2.4 GHz / 5 GHz / cable
- IP Address: IP del dispositivo
- MAC Address: identificador del dispositivo
<img width="1644" height="652" alt="image" src="https://github.com/user-attachments/assets/c886f92b-e7dc-46d8-9ef7-25bcdfe7f06b" />

---

## 6. Usage Report
Muestra consumo de internet:

- Wi-Fi Network: consumo total
- Devices: consumo por dispositivo
<img width="1628" height="500" alt="image" src="https://github.com/user-attachments/assets/e83bb0d4-b298-42e5-8ebf-c42906958a30" />

---

## 7. Wi-Fi Settings
Configuración de red:

- Band Steering: une o separa 2.4 GHz y 5 GHz
- Channels: selección manual de canal Wi-Fi
<img width="418" height="813" alt="image" src="https://github.com/user-attachments/assets/f4a4fa0b-c3fc-49ea-9679-9b8e60246f62" />

---

## 8. Wi-Fi Interference
- Muestra canal actual
- Permite optimizar Wi-Fi automáticamente
<img width="420" height="985" alt="image" src="https://github.com/user-attachments/assets/c03148f2-9a8a-4b2e-8df8-b1eea1f65b40" />


---

## 9. Restart Vilos
- Permite reiniciar los equipos del cliente
<img width="504" height="369" alt="image" src="https://github.com/user-attachments/assets/8ac5e37b-7b28-4317-b5a5-fa6a67cba0c0" />

---

## 10. Schedule Regular Restarts
- Permite programar reinicios automáticos
<img width="880" height="237" alt="image" src="https://github.com/user-attachments/assets/5a13581c-fb59-4e82-be99-1e73925f9f7a" />
<img width="424" height="359" alt="image" src="https://github.com/user-attachments/assets/d6d8b2a1-4770-4865-8515-9f6cd84b8e00" />

---

## 11. Speed Test
- Prueba de velocidad por equipo
- Se puede programar
- Guarda historial de resultados
<img width="1646" height="541" alt="image" src="https://github.com/user-attachments/assets/53b740ce-8151-4093-a52b-2279d42f9fe2" />
<img width="737" height="367" alt="image" src="https://github.com/user-attachments/assets/6766b9df-05d8-48da-b8f1-c0077facb2a6" />
<img width="951" height="244" alt="image" src="https://github.com/user-attachments/assets/4c56a581-ecf9-420f-b555-5287de1dca48" />

---

## 12. Firmware Upgrade
- Permite actualizar equipos
- O programar actualizaciones
- Puede hacerse automático o manual
<img width="1130" height="598" alt="image" src="https://github.com/user-attachments/assets/2ddbe5ee-d1ad-4990-89a0-e4f71925e42b" />
<img width="443" height="709" alt="image" src="https://github.com/user-attachments/assets/97fe224d-6929-4c01-9a36-6c24eca514bd" />
<img width="546" height="314" alt="image" src="https://github.com/user-attachments/assets/528b0ead-1ec5-440b-a68b-7c46dd289f22" />

---

## 13. WAN Settings
- Configuración del internet principal
<img width="1259" height="550" alt="image" src="https://github.com/user-attachments/assets/7c27b278-d854-4dc4-8f7b-16a7eafd83f3" />

---

## 14. LAN Settings
Modos disponibles:
- Automatic: configuración por defecto
- Manual IP: configuración personalizada
- Bridge Mode: evita doble NAT
<img width="1369" height="331" alt="image" src="https://github.com/user-attachments/assets/0bc031d1-9d58-4bea-ba11-9f0f0abb940a" />
<img width="436" height="354" alt="image" src="https://github.com/user-attachments/assets/2d6b3276-719e-4c49-bda0-f8b6866ff307" />
<img width="436" height="609" alt="image" src="https://github.com/user-attachments/assets/8e146429-b101-4391-bb5a-fe7757dcdda3" />

---

## 15. DHCP Reservations
- Asigna IP fija a un dispositivo
<img width="1639" height="166" alt="image" src="https://github.com/user-attachments/assets/3e4d3b3b-a150-4899-b21d-e07f934fb0f1" />
<img width="444" height="326" alt="image" src="https://github.com/user-attachments/assets/36f5a073-b3aa-48a5-9f0e-2c5578157630" />

---

## 16. Port Forwarding
- Abre puertos hacia un dispositivo específico
<img width="1647" height="184" alt="image" src="https://github.com/user-attachments/assets/eea45c91-e1b3-4768-af4a-34fd9a00b98d" />
<img width="746" height="543" alt="image" src="https://github.com/user-attachments/assets/1d39df25-8e32-4855-af8e-76cba1a6e5d7" />

---

## 17. Operation Logs
- Registra acciones del sistema
<img width="1649" height="387" alt="image" src="https://github.com/user-attachments/assets/ae77e67e-6690-4b2f-b471-9e843bdae134" />

---

## 18. Submit a Firmware Log
- Envía logs para diagnóstico de errores
<img width="1655" height="579" alt="image" src="https://github.com/user-attachments/assets/9442faf4-ed65-4e02-8240-f9e09516e159" />

---

# Esquemas de conexión con servicio FTTH y router Vilo

## ONU con router Vilo

![image](https://github.com/user-attachments/assets/6965b98a-234d-45c5-adfa-2041bad81d94)

## ONU con router Vilo + Repetidor (Sub Vilo)

![image](https://github.com/user-attachments/assets/e7f60122-d32e-4531-b96f-68009e7d7304)

---

# Esquemas de conexión con servicio Wireless y router Vilo

## Wireless - Router Vilo con data + power

![image](https://github.com/user-attachments/assets/b255697d-5729-4177-b956-13f33735bcaf)

## Wireless - Router Vilo con data + power + Repetidor (Sub Vilo)

![image](https://github.com/user-attachments/assets/3c16819d-2bb5-4f0d-b638-629af9b5b8b4)

