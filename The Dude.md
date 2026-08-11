# The Dude – Monitoreo de Red

## Introducción

### ¿Qué es The Dude?

The Dude es una herramienta de monitoreo de red utilizada en Eternet para visualizar toda la infraestructura en tiempo real.

Permite ver:
- Equipos de red
- Enlaces entre equipos
- Estado general de la red
- Fallas o caídas en tiempo real

---

## ¿Para qué sirve?

The Dude se utiliza principalmente para:

- Detectar cortes o pérdida de paquetes en la red
- Ver el estado de equipos en tiempo real
- Acceder rápidamente a los equipos
- Identificar fallas en enlaces o nodos

---

## Acceso a equipos desde The Dude

Desde el mapa podemos acceder directamente a los equipos:

### Equipos Mikrotik
- Clic derecho sobre el equipo
- Seleccionar:
  - Tools → Winbox

### Equipos no Mikrotik
- Clic derecho sobre el equipo
- Seleccionar:
  - Tools → Web

---

## Estado de la red (ícono de bandera)

En la barra inferior derecha aparece un ícono de estado:

- Verde: Todo funciona correctamente ![image](https://user-images.githubusercontent.com/63564990/200006126-f1f04bec-0fb7-4639-a60e-5dec3d35de77.png) (🟢)
- Rojo: Hay equipos caídos o sin respuesta ![image](https://user-images.githubusercontent.com/63564990/199964479-bd83c143-b6fc-4792-af39-fed1808d53a2.png) (🔴)

También pueden aparecer enlaces en rojo:
- Puede indicar saturación
- Mala negociación
- Corte en el enlace
![image](https://user-images.githubusercontent.com/93199172/200066562-78b720b1-fa8e-4dd9-aa3c-f4236bee53bd.png)
---

## Cómo conectarse a The Dude

Se utiliza la aplicación oficial de Mikrotik.

### Servidores disponibles

| Servidor | Dirección IP | DNS | Tipo |
|----------|-------------|-----|------|
| Principal | 192.168.0.43 | dude.eternet.cc | Main |
| Backup | 192.168.0.47 | dude2.eternet.cc | Backup |

---

### Credenciales

- Usuario: admin  
- Contraseña: diegotes  

---

### Recomendaciones



  >[!NOTE]
- Preferir conexión por IP en lugar de DNS
- Si el servidor principal falla, usar el backup
- Si ambos fallan, reportar incidencia al área de Servidores

>[!TIP]
>Otra opción más sencilla es copiar este archivo en el directorio  del Escritorio Remoto que ya tiene las dos conexiones guardadas:
>
>Directorio: `C:\Users\{usuario}\AppData\Local\VirtualStore\Program Files (x86)\Dude\Data`
>
>[Descargar archivo para Acceso a The Dude](https://github.com/Eternet/Atencion.Clientes/files/13648839/Acceso.a.The.Dude.zip)
>
> Quedará así:
>![image](https://github.com/Eternet/Atencion.Clientes/assets/63564990/1ddb64e0-7260-4b49-be74-de2a9c766b64)
>
>![image](https://github.com/Eternet/Atencion.Clientes/assets/63564990/1f5acb22-6053-4dc8-8b65-0fcd181f56e5)

---

## Tipos de nodos

En The Dude existen distintos tipos de elementos:

### Nodos cuadrados

Representan equipos físicos como:
- Routers
- Switches
- Antenas
- Servidores

### Círculos

Representan enlaces o accesos a otros mapas.

![image](https://github.com/Eternet/Atencion.Clientes/assets/70412985/e54b943c-9e17-47fc-a42f-e86483138a46)

---

## Equipos importantes para soporte

- Access Point (AP): brinda conexión inalámbrica a clientes
- PowerBox / hEX PoE: alimenta otros equipos por cable
- Enlaces PTP (punto a punto): conectan zonas distantes

---

## Tipos de enlaces

- Inalámbrico: enlace por radio `⚫⚡`
- Cableado UTP: conexión por cable de red `⚫`
- UTP + PoE: datos + alimentación eléctrica `🔵`
- Fibra óptica: enlaces de alta capacidad `🟡`

  ![image](https://user-images.githubusercontent.com/101568958/200374768-582c3cdd-e759-4299-a8e2-5536bc886f9d.png)

  ![image](https://user-images.githubusercontent.com/93199172/200066143-38fe19d4-2c23-499f-8ee1-7d4dc9fcfbea.png)

---

## Mapas principales

### Hotspot
Acceso a equipos principales y redes de clientes

### Servidores
Red core principal (NOC 1 y NOC 2)

### Super Switch
Interconexión de red troncal

### Juárez Root
Red core de Benito Juárez (NOC 3)

### Cabase Buenos Aires
Equipos en datacenter

### Mapa General
Vista global de toda la red

### Balcarce Mapa General
Red core de Balcarce (NOC 4)

---

## Resumen

The Dude permite ver toda la red de Eternet de forma visual y detectar problemas rápidamente, facilitando el diagnóstico y la resolución de incidentes.
