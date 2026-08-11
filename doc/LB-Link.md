# Diagnóstico de equipos LB-Link

---

## 1. Identificación del equipo

Para identificar el equipo en sistema:

- Se ingresa al router colocando la IP del router en el explorador con el puerto **:5580**. En caso de Eternet Plus **:5581**
- Contraseña **Etnrouter2022**


<img width="1688" height="809" alt="image" src="https://github.com/user-attachments/assets/e2050a2e-be26-428e-b739-e2d5d08d9ed6" />

---
## 2. Indicadores de luces

Las luces del equipo indican su estado.



### Estado general:

- 🔵 Azul fija:
  - Equipo funcionando correctamente con internet

- 🔴 Rojo:
  - Problema de conexión o inicio del sistema
 
## Dispositivos conectados

Permite ver:

- Name/Nombre del dispositivo
- Online Time: Tiempo conectado a la red.
- Tipo de conexión (2.4G Device / 5G Device/ Wired Device): Lista de dispositivos conectados a cada red. En caso de Wired Device, seria cableado al router.
- IP y MAC de cada dispositivo conectado
- Recepcion y Transmicion de cada dispositivo


<img width="1781" height="785" alt="image" src="https://github.com/user-attachments/assets/e594ac82-2d46-4e86-b8a7-e39052fe0943" />

<img width="1220" height="811" alt="image" src="https://github.com/user-attachments/assets/0e79e47e-d5c9-4486-93d8-d43d09e859ac" />

---

## WiFi Settings

Aquí tienes el detalle de lo que puedes gestionar en esta pantalla:

- Dual Switch y Switch: Son interruptores para activar o desactivar las bandas o funciones inalámbricas del router.

- WiFi Name (SSID): Es el nombre de tu red que aparecerá cuando busques Wi-Fi desde tus dispositivos. Actualmente está configurado como Eternet_PANALERA.

- Hide WiFi name from being discovered: Si marcas esta casilla, tu red se volverá "oculta" (no aparecerá automáticamente en las listas de Wi-Fi de tus dispositivos; tendrás que escribir el nombre manualmente para conectarte).

- Encryption: Muestra el método de seguridad actual, que es WPA-PSK/WPA2-PSK. Este es un estándar de seguridad recomendado para proteger tu red con contraseña.

- WiFi Password: Aquí puedes ver o cambiar la contraseña para conectarte a tu Wi-Fi. Actualmente es 00429572461.

- Signal: Probablemente ajuste la potencia de transmisión o el modo de alcance. Actualmente está configurado en Wall (generalmente pensado para atravesar paredes).

Nota importante: Si realizas algún cambio en el nombre (WiFi Name) o en la contraseña, deberás presionar el botón Apply para guardar. Ten en cuenta que, al hacer esto, todos los dispositivos que estén conectados actualmente se desconectarán y tendrás que volver a conectarlos usando los nuevos datos.

<img width="1296" height="616" alt="image" src="https://github.com/user-attachments/assets/7df988ad-f0f0-4b54-91b9-737cdefed370" />


---

## Prueba de velocidad interna

<img width="1634" height="724" alt="image" src="https://github.com/user-attachments/assets/b7bd53c6-4b81-47e2-8528-75522918b7d7" />
<img width="1402" height="635" alt="image" src="https://github.com/user-attachments/assets/b99b4f62-c6f4-4e52-92d1-012cbecf560c" />



### Consideraciones:

- Es una prueba de referencia interna
- No siempre refleja resultados reales externos

### Importante:

- No se puede garantizar velocidad máxima por WiFi
- La velocidad depende de:
  - Dispositivo
  - Distancia
  - Interferencia
  - Estado del enlace

---

## Redes WiFi

<img width="1538" height="696" alt="image" src="https://github.com/user-attachments/assets/74022e4d-2e53-4420-a2c7-48738bb469ed" />

<img width="1371" height="685" alt="image" src="https://github.com/user-attachments/assets/475ef64b-79b2-40dd-915f-1b07edf2e4e7" />



### Característica principal:

- El cliente ve un solo SSID
- El sistema maneja roaming automático



### Funcionamiento:

- Cambia entre 2.4 GHz y 5 GHz automáticamente
- Depende de señal y calidad del enlace

---

## Canales WiFi

<img width="1249" height="766" alt="image" src="https://github.com/user-attachments/assets/550e7cd6-d33d-4b21-bbee-53ea1288a4b9" />




### 2.4 GHz:

- Canales recomendados:
  - 1
  - 6
  - 11



### 5 GHz:

- Canales recomendados:
  - 36
  - 40
  - 44
  - 48



### Nota:

- El equipo optimiza canales automáticamente
- No siempre el cambio manual mejora el rendimiento. En caso de no ser necesario, **recomendable dejar en Automatico**

---

## Modo Wi-Fi (Wireless Mode)

Permite seleccionar el estándar Wi-Fi que utilizará el router en las bandas de **2.4 GHz** y **5.8 GHz**. La configuración elegida influye en la compatibilidad de los dispositivos y el rendimiento de la red.



## Banda 2.4 GHz

### AX

Utiliza únicamente el estándar **Wi-Fi 6 (802.11ax)**.

**Se recomienda cuando:**
- Todos los dispositivos son compatibles con Wi-Fi 6.
- Se busca el mejor rendimiento y estabilidad.



### B/G/GN

Modo de compatibilidad que permite conectar dispositivos con los estándares:

- **B (802.11b):** equipos muy antiguos.
- **G (802.11g):** equipos antiguos.
- **N (802.11n / Wi-Fi 4):** equipos de generaciones más recientes.

**Se recomienda cuando:**
- Algún dispositivo no puede conectarse utilizando el modo **AX**.
<img width="1003" height="331" alt="image" src="https://github.com/user-attachments/assets/aadd27ba-6106-45dc-854d-f49e714e070a" />



## Banda 5.8 GHz

### AX

Utiliza únicamente el estándar **Wi-Fi 6 (802.11ax)**.

**Se recomienda cuando:**
- Todos los dispositivos son compatibles con Wi-Fi 6.
- Se busca el máximo rendimiento.



### A/AC/AN Mixed

Modo de compatibilidad que permite conectar dispositivos con los estándares:

- **A (802.11a):** equipos antiguos de 5 GHz.
- **AN (802.11n / Wi-Fi 4):** amplia compatibilidad.
- **AC (802.11ac / Wi-Fi 5):** mayor velocidad y rendimiento.

**Se recomienda cuando:**
- Algún dispositivo no es compatible con Wi-Fi 6 o presenta inconvenientes para conectarse.



## Recomendación

- Mantener **AX** en ambas bandas siempre que sea posible.
- Cambiar a **B/G/GN** o **A/AC/AN Mixed** únicamente si existen problemas de compatibilidad con algún dispositivo.

> **Importante:** Los modos de compatibilidad no aumentan la velocidad ni el alcance del Wi-Fi. Su única función es permitir la conexión de dispositivos más antiguos.

<img width="963" height="317" alt="image" src="https://github.com/user-attachments/assets/83efa142-2c91-4d0e-ad82-16b9c96677cb" />


---

## Reinicio del equipo

<img width="1384" height="645" alt="image" src="https://github.com/user-attachments/assets/1ac29895-ae7a-42c1-8379-92dd78ac91d9" />


- Se realiza desde el menú “System Settings”
- Seleccionar **Reboot**
- Confirmar acción

---

## Reset de fábrica



<img width="1400" height="709" alt="image" src="https://github.com/user-attachments/assets/c26f0090-591b-467e-b240-3965e722a45c" />



### IMPORTANTE:

- El botón de **Restore** borra toda la configuración
- **Solo usar si es estrictamente necesario**

---

## Schedule Regular Restarts
- Permite programar reinicios automáticos

<img width="1472" height="643" alt="image" src="https://github.com/user-attachments/assets/3ba00315-c98d-4d9d-828d-77b276348429" />


---
## Admin Password

- Permite cambiar la contraseña maestra del router
- Se utiliza en momentos que se reinicia de fabrica el router y debemos reestablecer la contraseña

<img width="1452" height="632" alt="image" src="https://github.com/user-attachments/assets/1b4446ea-e696-4d23-a075-0ef09de2f630" />
<img width="1096" height="396" alt="image" src="https://github.com/user-attachments/assets/37f8a9a8-6b31-4d34-8cbf-df00b8558cea" />

---

## WAN Settings
- Configuración del internet principal

<img width="1551" height="633" alt="image" src="https://github.com/user-attachments/assets/fbcaf630-5e80-499d-8c46-44570e4f58f6" />
<img width="1399" height="682" alt="image" src="https://github.com/user-attachments/assets/b4c5fb8f-659d-48d3-849f-caa1828a31ed" />


---
## Configuración LAN (LAN Settings)

Permite configurar la red local (LAN) del router y el servicio **DHCP**, encargado de asignar direcciones IP automáticamente a los dispositivos conectados.



### DHCP

Habilita o deshabilita la asignación automática de direcciones IP.

- **Enable:** El router asigna una dirección IP automáticamente a cada dispositivo que se conecta. *(Recomendado).*
- **Disable:** Las direcciones IP deben configurarse manualmente en cada dispositivo.



### LAN IP

Define la dirección IP del router dentro de la red local.

**Valor por defecto:** `192.168.1.1`

Los dispositivos utilizarán esta dirección como puerta de enlace para acceder a Internet y administrar el router.



### Netmask

Define el tamaño de la red local.

**Valor por defecto:** `255.255.255.0`

Se recomienda mantener este valor salvo que exista una necesidad específica de modificarlo.



### Start IP

Primera dirección IP que el servidor DHCP puede asignar automáticamente.

**Ejemplo:** `192.168.1.100`



### End IP

Última dirección IP que el servidor DHCP puede asignar automáticamente.

**Ejemplo:** `192.168.1.200`

En este ejemplo, el router podrá asignar direcciones desde **192.168.1.100** hasta **192.168.1.200**.



## Recomendación

- Mantener **DHCP habilitado (Enable)**.
- No modificar la **LAN IP** ni la **Netmask**, salvo que sea necesario por cambios en la red.
- Ajustar el rango **Start IP** y **End IP** únicamente si se requiere reservar direcciones IP para otros equipos o dispositivos con IP fija.

<img width="1393" height="572" alt="image" src="https://github.com/user-attachments/assets/1badb13a-6b5c-4abb-8694-97f1a2b633b0" />

<img width="1291" height="623" alt="image" src="https://github.com/user-attachments/assets/c6e5c8b3-b26f-4bf2-8f45-4a34efbc4f36" />

---
## Mesh

La función en esta pantalla te permite configurar el dispositivo dentro de una red de malla (Mesh).

- Al cambiar la opción en el menú desplegable "Role" (Rol), generalmente puedes definir cómo se comportará el dispositivo en tu red inalámbrica:

- Disable (Desactivado): Es la configuración actual; el dispositivo funciona como un punto de acceso independiente o router estándar sin interactuar con otros dispositivos en una red de malla.

- Otras opciones (usualmente disponibles): Si despliegas el menú, podrías encontrar roles como "Controller" (Controlador) o "Agent/Satellite" (Agente/Satélite).

- Controller: Actúa como el nodo principal que gestiona la red de malla.

- Agent/Satellite: Actúa como un nodo adicional que extiende la cobertura de la red recibiendo la señal del controlador.

<img width="1498" height="608" alt="image" src="https://github.com/user-attachments/assets/3b9be544-f548-49f2-838d-4dcc00d2de56" />
<img width="1445" height="589" alt="image" src="https://github.com/user-attachments/assets/a5d0ee82-10d3-4fa6-bd04-5bc0d4f3c5e9" />

---
## Port Forwarding (Redirección de puertos)

La redirección de puertos se utiliza para permitir que dispositivos o servicios de tu red local (como servidores web, consolas de juegos o cámaras de seguridad) sean accesibles desde Internet.

- Aquí tienes una explicación de las opciones disponibles:

- Add Manually (Agregar manualmente): Te permite configurar una regla de redirección de puertos introduciendo tú mismo los detalles, como el puerto externo, el puerto interno y la dirección IP del dispositivo local al que deseas dirigir el tráfico.

- Automatically Added (Agregado automáticamente): Esta opción generalmente muestra reglas creadas automáticamente por aplicaciones o dispositivos que utilizan protocolos como UPnP (Universal Plug and Play) para abrir puertos sin intervención manual.

- Tabla de datos: Actualmente indica "No Data", lo que significa que no hay reglas de redirección configuradas en este momento.

<img width="1421" height="634" alt="image" src="https://github.com/user-attachments/assets/867f2752-e107-4da9-87e8-33e7872c7369" />
<img width="1309" height="717" alt="image" src="https://github.com/user-attachments/assets/ac9a0c64-5096-439f-843d-1d14ca552659" />

