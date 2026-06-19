# Sin conexión

Cuando un cliente está sin conexión, primero debemos identificar dónde está la falla:

1. Router host del cliente
2. CPE (ONU o equipo wireless)
3. Nodo completo

---

# Procedimiento

## 1. Verificar router host

Si el router no responde pero el CPE está activo:

### 1.1 Verificar link entre router y CPE

#### Si es ONU (fibra)
- Ir a Netmap > Obtener estado
- Verificar que la interfaz ethernet esté activa

Referencia:  
https://github.com/Eternet/Atencion.Clientes/blob/main/Documentacion/Diagnosticos/Verificaci%C3%B3n%20de%20un%20equipo%20wireless/MikroTik/readme.md

---

#### Si es equipo wireless

##### MikroTik
- Acceder con Winbox
- Verificar interfaz ether1
- Debe estar en estado registrado y con negociación correcta (100 Mbps o 1 Gbps)

Referencia:  
https://github.com/Eternet/Atencion.Clientes/blob/main/Documentacion/Diagnosticos/Verificaci%C3%B3n%20de%20un%20equipo%20wireless/MikroTik/readme.md

---

##### Ubiquiti Nanostation
- Acceder por web
- Verificar interfaces LAN0 o LAN1
- Deben tener link (no estar en “Unplugged”)

Referencia:  
https://github.com/Eternet/Atencion.Clientes/blob/main/Documentacion/Diagnosticos/Verificaci%C3%B3n%20de%20un%20equipo%20wireless/Ubiquiti/readme.md

---

### 1.2 Si no hay link físico
Verificar:

- Router encendido
- Cableado correcto:
  - CPE → puerto WAN del router
  - Fuente → puerto Power

---

### 1.3 Identificar dispositivo conectado

#### Si es ONU
- Ver tabla ARP en la ONU

Referencia:  
https://github.com/Eternet/Atencion.Clientes/blob/main/Documentacion/Diagnosticos/OLT/Acceso%20a%20OLTs%20y%20Comandos/readme.md#ver-la-tabla-arp-de-la-onu

---

#### Si es MikroTik wireless
- Bridge > Hosts
- Buscar MAC de ether1

---

#### Si es Nanostation
- Bridge Table
- Buscar registros en LAN0 o LAN1

---

### 1.4 Verificación física
Confirmar estado de luces:

- Guía Vilo:
https://github.com/Eternet/Atencion.Clientes/tree/main/Documentacion/Diagnosticos/Vilo/Diagn%C3%B3stico%20y%20pruebas%20a%20realizar#2---gu%C3%ADa-de-luces-indicadoras-de-vilo

- Esquemas de conexión:
https://github.com/Eternet/General/blob/main/docs/Atencion%20al%20Cliente/readme.md#routers

---

### 1.5 Si todo está OK pero no navega

Verificar en Hotspot:

- IP > Host
  - Debe existir registro con IP y MAC en estado “A” (autorizado)

- IP > Routes
  - Debe existir ruta para la IP del cliente

- IP > ARP
  - Debe existir entrada IP/MAC

- IP > Firewall > Address List
  - Verificar que no esté bloqueado

- IP > DHCP Server > Leases
  - Buscar por MAC
  - Estado debe ser “Bound”

---

### IMPORTANTE

Si no toma IP por DHCP:

- MikroTik:
  - Intentar acceso por MAC Telnet o RoMON

- Router en comodato:
  - Ofrecer reemplazo de host

- Si no se resuelve:
  - Derivar a Redes

- Si el cliente rechaza reemplazo:
  - Informar posible costo de visita si el problema es su equipo

---

## 2. Verificar CPE sin respuesta

- Fibra (ONU):
https://github.com/Eternet/Atencion.Clientes/blob/main/Documentacion/Diagnosticos/Verificacion%20de%20ONU/readme.md

- Wireless:
https://github.com/Eternet/Atencion.Clientes/tree/main/Documentacion/Diagnosticos/Verificacion%20de%20un%20equipo%20wireless

---

## 3. Verificar nodo sin respuesta

- Wireless (AP):
https://github.com/Eternet/Atencion.Clientes/blob/main/Documentacion/Diagnosticos/MikroTik/Verificaci%C3%B3n%20de%20Nodo-AP%20con%20problemas/readme.md

- Fibra (CD):
https://github.com/Eternet/General/blob/main/docs/Atencion%20al%20Cliente/readme.md#routers
