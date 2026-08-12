# Diagnóstico de equipos LB-Link

---

## 1. Identificación del equipo

Para identificar el equipo en sistema:

- Se ingresa al router colocando la IP del router en el explorador con el puerto **:5580**. En caso de Eternet Plus **:5581**
- Contraseña **Etnrouter2022**


<img width="1688" height="809" alt="image" src="./imagenes/623867242-8da45c4f-e325-4ea8-be1a-9a0662d69c85.png" />

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


<img width="1781" height="785" alt="image" src="./imagenes/623870625-abc8c483-5db2-44e2-85aa-11b9c0d44043.png" />

<img width="1220" height="811" alt="image" src="./imagenes/624035173-0b53e4d6-a87c-408a-85d4-9ac626e984c7.png" />

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

<img width="1296" height="616" alt="image" src="./imagenes/624036078-6a43ec93-af61-462e-99a0-6d353c87026f.png" />


---

## Prueba de velocidad interna

<img width="1634" height="724" alt="image" src="./imagenes/624036160-ef84d419-2766-4f2b-9fb2-db513f133f6c.png" />
<img width="1402" height="635" alt="image" src="./imagenes/624036267-04de9196-62b2-4f7e-a58e-73a127f5ad06.png" />



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

<img width="1538" height="696" alt="image" src="./imagenes/631581e8-fdfa-4bb6-b556-37ba3248c9b9.png" />

<img width="1371" height="685" alt="image" src="./imagenes/64dba8c3-1a9a-43f3-95f1-c537353c837a.png" />



### Característica principal:

- El cliente ve un solo SSID
- El sistema maneja roaming automático



### Funcionamiento:

- Cambia entre 2.4 GHz y 5 GHz automáticamente
- Depende de señal y calidad del enlace

---

## Canales WiFi

<img width="1249" height="766" alt="image" src="./imagenes/65993bdc-60d8-493f-b514-8b65a82a2319.png" />




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
<img width="1003" height="331" alt="image" src="./imagenes/66f96e5e-bffa-4704-af29-3e0b53db99d7.png" />



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

<img width="963" height="317" alt="image" src="./imagenes/6766b9df-05d8-48da-b8f1-c0077facb2a6.png" />


---

## Reinicio del equipo

<img width="1384" height="645" alt="image" src="./imagenes/68b66865-690f-40b1-b56d-7648eb94a01d.png" />


- Se realiza desde el menú “System Settings”
- Seleccionar **Reboot**
- Confirmar acción

---

## Reset de fábrica



<img width="1400" height="709" alt="image" src="./imagenes/694df181-3af2-4753-be8d-5164d41123e9.png" />



### IMPORTANTE:

- El botón de **Restore** borra toda la configuración
- **Solo usar si es estrictamente necesario**

---

## Schedule Regular Restarts
- Permite programar reinicios automáticos

<img width="1472" height="643" alt="image" src="./imagenes/69de65bb-37f8-43e1-8edd-3449d4603626.png" />


---
## Admin Password

- Permite cambiar la contraseña maestra del router
- Se utiliza en momentos que se reinicia de fabrica el router y debemos reestablecer la contraseña

<img width="1452" height="632" alt="image" src="./imagenes/6a5031df-af3f-4478-90e6-85d34aa14509.png" />
<img width="1096" height="396" alt="image" src="./imagenes/6a96c101-5996-4585-8dd0-f33e0222ab6f.png" />

---

## WAN Settings
- Configuración del internet principal

<img width="1551" height="633" alt="image" src="./imagenes/6b3a3720-eae0-4e82-a860-8cf29aea3712.png" />
<img width="1399" height="682" alt="image" src="./imagenes/6bb4442c-01bf-4980-a777-9c4f4146cb17.png" />


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

<img width="1393" height="572" alt="image" src="./imagenes/6c9d7794-0dd8-45e5-8320-40e528a39168.png" />

<img width="1291" height="623" alt="image" src="./imagenes/6cfcf1fa-659d-4833-a23f-28a29e071378.png" />

---
## Mesh

La función en esta pantalla te permite configurar el dispositivo dentro de una red de malla (Mesh).

- Al cambiar la opción en el menú desplegable "Role" (Rol), generalmente puedes definir cómo se comportará el dispositivo en tu red inalámbrica:

- Disable (Desactivado): Es la configuración actual; el dispositivo funciona como un punto de acceso independiente o router estándar sin interactuar con otros dispositivos en una red de malla.

- Otras opciones (usualmente disponibles): Si despliegas el menú, podrías encontrar roles como "Controller" (Controlador) o "Agent/Satellite" (Agente/Satélite).

- Controller: Actúa como el nodo principal que gestiona la red de malla.

- Agent/Satellite: Actúa como un nodo adicional que extiende la cobertura de la red recibiendo la señal del controlador.

<img width="1498" height="608" alt="image" src="./imagenes/6d934dad-4a8a-406b-acdb-a5a28f86aa4e.png" />
<img width="1445" height="589" alt="image" src="./imagenes/6db18836-44ad-41f5-ac68-4b30940d17b0.png" />

---
## Port Forwarding (Redirección de puertos)

La redirección de puertos se utiliza para permitir que dispositivos o servicios de tu red local (como servidores web, consolas de juegos o cámaras de seguridad) sean accesibles desde Internet.

- Aquí tienes una explicación de las opciones disponibles:

- Add Manually (Agregar manualmente): Te permite configurar una regla de redirección de puertos introduciendo tú mismo los detalles, como el puerto externo, el puerto interno y la dirección IP del dispositivo local al que deseas dirigir el tráfico.

- Automatically Added (Agregado automáticamente): Esta opción generalmente muestra reglas creadas automáticamente por aplicaciones o dispositivos que utilizan protocolos como UPnP (Universal Plug and Play) para abrir puertos sin intervención manual.

- Tabla de datos: Actualmente indica "No Data", lo que significa que no hay reglas de redirección configuradas en este momento.

<img width="1421" height="634" alt="image" src="./imagenes/6ec0119c-e7fc-45c8-97d8-d490d06b1ce1.png" />
<img width="1309" height="717" alt="image" src="./imagenes/6f1fab16-69cc-43bf-8c2a-0510b3431085.png" />

