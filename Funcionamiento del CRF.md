## Introducción

Con el objetivo de mejorar el diagnóstico de problemas de Internet, vamos a describir paso a paso cómo funciona el proceso desde que un cliente solicita una página hasta que la recibe en el navegador (aplica también a cualquier otra actividad como abrir una app móvil, chequear un correo, etc.).

En este tutorial nos vamos a concentrar en el tráfico a partir de la WAN del cliente. Vamos a describir secuencialmente todos los eventos que dispara (directa e indirectamente) un dispositivo cuando intenta acceder a un destino.

La secuencia inicia cuando el dispositivo realiza una petición a un servidor remoto, y termina cuando recibe el contenido solicitado.

### Decisión de ruteo

1. Como ejemplo, un cliente decide probar su conectividad con www.facebook.com utilizando la herramienta ping.
   - Lo primero que hay que entender es que cualquier red, incluyendo Internet, se trata de rutas. Para poder llegar a un destino, el host necesita una ruta en su tabla de ruteo que incluya la IP correspondiente.
   - Si el cliente quiere acceder a otro host dentro de su propio broadcast (red definida por su máscara), también necesita una ruta válida. Por ejemplo, un host 10.10.10.10/24 necesita una ruta para llegar a 10.10.10.50.

2. Para llegar a ese servidor, el cliente debe enviar la petición a través de su router, por lo que necesita conocer la dirección MAC del gateway.

3. Entonces, envía una solicitud ARP al broadcast en la LAN para determinar la MAC del gateway. En una red típica, un dispositivo con IP 192.168.0.150 intentará resolver la MAC de 192.168.0.1. Todos los dispositivos reciben la consulta, pero solo el que posee esa IP responde.

![L2-L3 Schemas-LAN Cliente](https://user-images.githubusercontent.com/30703244/196281072-42d1ee3b-61d2-4f64-8a13-3da584c82b29.png)

- Con el comando ARP desde consola, se puede observar que antes del ping no existe la asociación IP-MAC del gateway, y luego del ping se genera la entrada correspondiente.

![ARP status cmd](https://user-images.githubusercontent.com/30703244/196281104-0d21f142-a1ff-44d0-9523-f2d7b36f4ce3.png)

4. Conociendo la MAC del router, el cliente ya puede enviar la petición hacia el destino.

   - El primer salto siempre es el gateway de la ruta correspondiente al destino.
   - Por ejemplo, si un cliente 10.10.10.25 intenta llegar a 8.8.8.8, normalmente usará una ruta por defecto 0.0.0.0/0 con gateway 10.10.10.1.

5. El router del cliente ahora debe conocer la MAC de su propio gateway (CRF - Clúster de Routers Frontend). Para ello, envía una solicitud ARP hacia la red de ETERNET, y uno de los miembros del CRF responde.

![L2-L3 Schemas-FO-Schema](https://user-images.githubusercontent.com/30703244/196281309-c252f967-b926-4613-bdbc-e1854fe4de45.png)

![Router status](https://user-images.githubusercontent.com/30703244/196281337-b6145781-7b42-48e6-9b89-625f219265ba.png)

---

### Resolución ARP

El protocolo ARP permite al router enviar tráfico al gateway 10.10.10.1 dentro de su broadcast.

- El router envía una solicitud ARP a toda la red usando FF:FF:FF:FF:FF:FF como destino.
- La solicitud atraviesa switches, bridges y OLTs.
- El equipo que posee la IP responde con su MAC.
- Esa información se almacena en la tabla ARP del router.
- A partir de ese momento, el tráfico IP se encapsula con la MAC correspondiente.

Los switches intermedios solo aprenden MAC por puerto, sin relación con ARP.

La red de ETERNET aplica aislamiento entre clientes, evitando comunicación por broadcast entre ellos. Por lo tanto, todo tráfico debe llegar al CRF.

- En este modelo, el CRF puede responder ARP incluso sin ser el propietario real de la IP solicitada (ARP “noble”).
- Esto implica que en el cliente, todas las entradas WAN ARP apuntan a una única MAC.
- El sistema usa balanceo mediante subnetting: cada CRF atiende grupos de clientes.
- Un usuario no debe estar registrado en más de un CRF simultáneamente.
- Solo después de esta asignación se visualiza el cliente en el Hotspot.

---

# Introducción

Con el objetivo de mejorar el diagnóstico de problemas de Internet, vamos a describir paso a paso cómo funciona el proceso desde que un cliente solicita una página hasta que la recibe en el navegador (aplica también a cualquier otra actividad como abrir una app móvil, chequear un correo, etc.).

En este tutorial nos vamos a concentrar en el tráfico a partir de la WAN del cliente.  
Vamos a describir secuencialmente todos los eventos que dispara (directa e indirectamente) un dispositivo cuando intenta acceder a un destino.

La secuencia inicia cuando el dispositivo realiza una petición a un servidor remoto, y termina cuando recibe el contenido solicitado.

---

## Decisión de ruteo

1. Como ejemplo, un cliente decide probar su conectividad con www.facebook.com. Para ello, utiliza la herramienta ping.

- Lo primero que hay que entender es que cualquier red, incluyendo Internet, se trata de rutas. Para poder llegar a un destino (por ejemplo Google), el host debe tener una ruta en su tabla de ruteo que incluya la IP del destino.
  - Si el cliente quiere acceder a otro host dentro de su propio broadcast (su red local), también necesita una ruta válida.
  - Ejemplo: un cliente 10.10.10.10/24 para llegar a 10.10.10.50 necesita ruta en su red.

2. Para llegar al servidor, necesita enviar la petición a través de su router, por lo que necesita conocer la MAC del gateway.

3. Entonces envía una solicitud ARP al broadcast en la LAN para determinar la MAC del gateway.
   - Ejemplo: 192.168.0.150 consulta 192.168.0.1.
   - Todos reciben la consulta, pero solo el gateway responde.

![L2-L3 LAN](https://user-images.githubusercontent.com/30703244/196281072-42d1ee3b-61d2-4f64-8a13-3da584c82b29.png)

- Con el comando ARP se puede ver que antes del ping no hay registros y luego del ping se resuelve la MAC del gateway.

![ARP status](https://user-images.githubusercontent.com/30703244/196281104-0d21f142-a1ff-44d0-9523-f2d7b36f4ce3.png)

4. Conociendo la MAC del router, el cliente ya puede enviar tráfico hacia Facebook.

- El primer salto siempre es el gateway.
  - Ejemplo: si 10.10.10.25 quiere llegar a 8.8.8.8, normalmente usa ruta por defecto 0.0.0.0/0 vía 10.10.10.1.

5. El router del cliente ahora necesita conocer la MAC de su gateway (CRF - Clúster de Routers Frontend).

---

## Resolución ARP

- El router 10.10.10.25 envía un ARP broadcast para encontrar 10.10.10.1.
  - Origen: MAC de la interfaz.
  - Destino: FF:FF:FF:FF:FF:FF.
  - La consulta atraviesa switches, bridges y OLTs.

- El equipo con esa IP responde y se guarda en la tabla ARP.
- Los switches solo aprenden MAC ↔ puerto, no IP.

- En la red ETERNET:
  - Existe aislamiento entre clientes.
  - Todo tráfico pasa por el CRF.
  - El CRF puede responder ARP de forma “noble” (sin tener la IP real del cliente).

📌 Conclusión:
- Cada cliente debe tener una única MAC asociada en WAN.
- Un usuario no debe estar en más de un CRF simultáneamente.
- Solo después de esto el cliente aparece en Hosts del Hotspot.

---

## Autenticación en el Hotspot

Solo clientes autenticados pueden cursar tráfico.

### Estados del cliente:

- **Active**: autorizado para tráfico.
- **A (Authorized)**: autorizado.
- **D (Dynamic)**: autorizado por Radius.
- **H**: obtenido por DHCP.
- **P**: excepción de bindings.

---

## Bindings (primer nivel de control)

- Asocian MAC ↔ IP autorizadas.
- Si no coincide, el cliente es bloqueado por defecto.
- Permite que el cliente aparezca en Hosts pero no necesariamente navegue.

---

## Users y Radius (segundo nivel)

- Users local: valida MAC contra base local.
- Radius remoto: valida contra base central de Eternet.
- Si es aceptado:
  - Se crea ruta para el cliente.
  - Se distribuye vía BGP al CRB (backend).

---

## Routing, Firewall y Queueing en CRF

- Si el cliente está autorizado y con ruta:
  - Puede avanzar hacia Internet.
- Si no:
  - Firewall o listas lo limitan.

### Casos de bloqueo:

- CORTES_POR_FALTA_DE_PAGO
- NUEVOS DISPOSITIVOS
- Falta de queue contratada (cae a 1Mbit)

---

## Flujo final

1. Cliente genera request (ej: Facebook).
2. ARP para gateway local.
3. Router envía al CRF.
4. CRF valida:
   - Bindings
   - Hotspot
   - Users / Radius
5. Se crea ruta si está autorizado.
6. Firewall + Queue permiten o limitan tráfico.
7. Sale al CRB (Internet).
8. Respuesta vuelve por el mismo camino.
9. Si la ruta sigue activa → cliente sigue autorizado.

---
