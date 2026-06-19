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



---

#### Si es equipo wireless

##### MikroTik
- Acceder con Winbox
- Verificar interfaz ether1
- Debe estar en estado registrado y con negociación correcta (100 Mbps o 1 Gbps)



---

##### Ubiquiti Nanostation
- Acceder por web
- Verificar interfaces LAN0 o LAN1
- Deben tener link (no estar en “Unplugged”)



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
# Verificación de estado de ONU (Online / Offline)

## Introducción

Para verificar el estado de una ONU existen dos métodos:

- Netmap (interfaz gráfica)
  https://github.com/Eternet/General/blob/main/docs/SSAK/Netmap/readme.md

- OLT (por consola)
  https://github.com/Eternet/Atencion.Clientes/blob/main/Documentacion/Diagnosticos/OLT/Acceso%20a%20OLTs%20y%20Comandos/readme.md

---

Netmap utiliza servicios automáticos para obtener información de las ONUs.  
Si estos servicios fallan, se debe usar la OLT directamente.

Más información:
https://github.com/Eternet/General/tree/main/docs/Servidores/ServiciosYAplicaciones/OLT%20Services

---

# 1. Identificar host en Netmap

## 1.1 Buscar cliente
- Ir a “Buscar Host”
- Ingresar IP pública del cliente
- Presionar Enter

## 1.2 Abrir mapa
- Doble clic en el resultado
- Se abre el árbol de red del cliente

---

# 2. Obtener estado de la subred

## 2.1 Acceder a CD
- Seleccionar la CD correspondiente
- Clic derecho
- “Obtener estado de la subred”

---

# 3. Obtener estado de la ONU

## 3.1 Abrir propiedades
- Clic derecho sobre el equipo del cliente
- “Propiedades”
- Ir a “Datos de la ONU”
- Clic en “Obtener estado”

---

## 3.2 Estados posibles

### Estado correcto
- Estado óptico: Activo
- Señal: OK (ejemplo -18 dBm)
- Interfaz Ethernet: Activa

---

### Estado óptico sin respuesta
- La ONU no responde en la red óptica

---

### Estado óptico activo pero Ethernet sin respuesta
- La ONU está online
- Falla entre ONU y router del cliente

---

# 4. Diagnóstico

## 4.1 ONU sin respuesta óptica

### Verificar alimentación
- Confirmar que la ONU esté encendida
- Si no tiene luces:
  - Verificar corriente
  - Probar otro toma
  - Verificar botón de encendido (si existe)
  - Si no enciende → derivar a Redes

### Si tiene luces pero no responde
- Verificar luz LOS (Loss of Signal)
  - Si está encendida:
    - Reinicio eléctrico
    - Si no vuelve → derivar a Redes

- Verificar luz PON / Active / REG
  - Si está apagada:
    - Reinicio eléctrico
    - Si no vuelve → derivar a Redes

---

## 4.2 ONU responde pero Ethernet no levanta

- Seguir procedimiento de “Sin conexión”
https://github.com/Eternet/Atencion.Clientes/blob/main/Documentacion/Diagnosticos/Chequeo%20de%20reclamos/Sin%20conexi%C3%B3n/readme.md#procedimiento

---

## 4.3 ONU activa pero router no responde

- Verificar tabla ARP de la ONU
https://github.com/Eternet/Atencion.Clientes/blob/main/Documentacion/Diagnosticos/OLT/Acceso%20a%20OLTs%20y%20Comandos/readme.md#ver-la-tabla-arp-de-la-onu

Esto confirma si el router está correctamente conectado.

- Wireless:
https://github.com/Eternet/Atencion.Clientes/tree/main/Documentacion/Diagnosticos/Verificacion%20de%20un%20equipo%20wireless

---

## 3. Verificar nodo sin respuesta

- Wireless (AP):
- Equipo wireless del cliente sin respuesta
- Equipo wireless con señal degradada
- Equipo cliente (Antena) desenlazándose

- Fibra (CD):
https://github.com/Eternet/General/blob/main/docs/Atencion%20al%20Cliente/readme.md#routers
