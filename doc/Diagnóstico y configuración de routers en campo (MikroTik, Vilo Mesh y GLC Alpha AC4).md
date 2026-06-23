# Guía completa de diagnóstico y configuración de routers en campo (MikroTik, Vilo Mesh y GLC Alpha AC4)

---

# 1. Introducción

Existen ocasiones en las que urge configurar un router de manera inmediata para restablecer una conexión. Si el área de Servicio Técnico no está disponible, esta guía permite realizar una configuración provisoria para recuperar el servicio.

Condiciones mínimas:
- El CPE debe estar encendido y funcionando correctamente.
- Debe existir enlace físico (link en la interfaz Ethernet).
- Depende del tipo de router del cliente.

Para acceso avanzado se puede utilizar:
- MAC-Telnet
- RoMON

 Referencia: https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/Acceso%20a%20equipos%20MikroTik%20mediante%20MAC-Telnet%20y%20RoMON.md

---

# 2. Routers MikroTik

## 2.1 Acceso al equipo

### Caso 1: Router Wireless MikroTik
1. Ingresar al equipo vía Winbox o herramienta interna.
2. Conectarse por **MAC-Telnet** si no responde por IP.

---

### Caso 2: ONU / equipo sin configuración

1. Verificar desde Hotspot si responde por MAC.
2. Hacer ping a la MAC del equipo.
3. Si no responde IP, pero sí MAC → hay acceso L2.

Nota:
Si se eliminó el bridge, la MAC activa será la de la ether física (generalmente ether1).

---

## 2.2 Verificación de configuración básica

### IP Address
Comando:
```bash
/ip address print
```
Debe existir:

IP pública en brWAN
IP privada en brPrivada

Agregar:
```
/ip address add address={IP} interface=brWAN
```
- Puerta de enlace (Gateway)

Comando:
```
/ip route print
```
Debe existir una ruta estática:

Flags: AS

Agregar:
```
/ip route add gateway={gateway}
```
- Bridge

Comando:
```
/interface bridge print
```
Debe haber:

brWAN
brPrivada

Agregar:
```
/interface bridge add name={brWAN|brPrivada}
```
- Puertos del bridge

Comando:
```
/interface bridge port print
```
Debe existir asignación de interfaces:

ether1 → WAN
ether2+ → LAN

Agregar:
```
/interface bridge port add interface={etherN} bridge={bridge}
```
- NAT

Comando:
```
/ip firewall nat print
```
Debe existir regla src-nat:

Agregar:
```
/ip firewall nat add chain=src-nat out-interface=brWAN src-address={IPPrivada} action=src-nat to-addresses={IPPublica}
```
## 2.3 Router completamente desconfigurado
Verificar script de configuración:
```
/file print
```
Buscar:
```
flash/router_config_NOMBRE_SCRIPT_.rsc
```
Si existe
```
/import flash/router_config_NOMBRE_SCRIPT_.rsc
```
Si NO existe
Descargar script desde repositorio:
https://eternet.sharepoint.com/:u:/s/ServicioTecnico/EXVaWuQMLRRFvLlUkAAjiQoB4uoxr2knLQEl18EMpM5XHg?e=rXbEgc

# 3. Routers Vilo Mesh
## 3.1 Casos de uso

Usar “Remote Configuration” cuando:
- Hay link físico pero no responde web ISP
- LED en color ámbar (reset de fábrica)
- WiFi no aparece pero MAC existe
## 3.2 Procedimiento paso a paso
1.Ingresar a Vilo Inventory
2.Buscar MAC del equipo
3.Entrar a Remote Configuration
4.Click en Configure
5.Activar switch de configuración remota
7.Configurar:
- SSID
- Password
Confirmar con OK
# 4. Routers GLC Alpha AC4
## 4.1 Características del problema
- Obtiene IP por DHCP correctamente
- Conectividad L2 con CRF OK
- No hay navegación
- SSID visible por defecto
## 4.2 Acceso al equipo

Credenciales:

- Usuario: admin
- Password: (sticker del equipo)

Acceso remoto:
```
https://{IP}:55443
```
## 4.3 Restaurar configuración
1.Ir a menú Herramientas
2.Entrar a Backup y Restaurar
3.Seleccionar archivo:
```
glc_alpha_ac4.dat
```
4.Click en Restaurar

Descarga:
https://eternet.sharepoint.com/:u:/s/ServicioTecnico/EVBOTQlHBgpFlqhXxEq394kB6w1xCHrmEOgQ9b4WeEC6IQ?e=wTCruC

## 4.4 Configuración posterior
- Usuario: admin
- Clave: Etnrouter2022

## 4.5 Configuración Wi-Fi

Modificar:
- SSID
- Clave

# 5. Resumen operativo
MikroTik

- IP correcta
- Gateway activo
- Bridge configurado
- NAT funcionando

Vilo Mesh

- Remote config activo
- SSID y password definidos

GLC AC4

- Restore config aplicado
- Acceso remoto validado
- WiFi configurado
