# Servicio iBGP

## Conceptos generales

El esquema de ingeniería de tráfico de **ETERNET** utiliza **BGP interno (iBGP)**:  
https://es.wikipedia.org/wiki/Border_Gateway_Protocol

Las localidades que poseen routers frontend propios (CRFs) tienen múltiples peers contra routers BGP frontend de alta disponibilidad (HA_iBGPs).

Cada peer corresponde a:

- Un **path lógico (L2 VLAN tagged)**
- Que atraviesa diferentes switches y enlaces wireless (**path físico**)
- Con IPs en ambos extremos utilizadas para levantar los peers iBGP

![Esquema iBGP](https://user-images.githubusercontent.com/33906536/178333596-1bb5d098-2836-46bf-a571-5923929c25c2.jpg)

---

## Ingeniería de tráfico

Este diseño permite:

- Tener múltiples rutas activas en paralelo (multi-peer)
- Distribuir tráfico de forma controlada
- Aplicar **routing policies y filtros BGP**
- Asignar prioridad a redes específicas

### Ventajas principales:

- Balanceo de carga entre peers
- Control granular del tráfico
- Resiliencia ante fallos

Si un peer cae:

- Las rutas se reconvierten automáticamente a los peers restantes
- El servicio se mantiene activo

---

## Aplicación web de gestión iBGP

Para monitoreo y control se utiliza:

https://ibgp.eternet.cc/cities

Esta plataforma permite:

- Monitoreo global sin acceso directo a routers core
- Diagnóstico de salud de peers
- Control de capacidad y congestión
- Gestión manual del enrutamiento si es necesario

También integra autenticación vía M365 con dos niveles:

- **LECTURA**
- **ESCRITURA**

---

## Nivel LECTURA

Permite diagnóstico y observación.

### Capacidades:

- Visualizar todas las localidades
  - tráfico disponible
  - tráfico últimos 10 segundos
  - tráfico última hora



![Lectura tráfico](https://user-images.githubusercontent.com/33906536/178339959-0c4a07e6-cab5-4166-af9b-7539e5c29939.gif)



---

### Detalle por localidad

Permite ver:

- Cantidad de peers
- Rutas por peer
- Tráfico por peer
- Salud del peer (ICMP)
- Redes y distribución de rutas



![Detalle localidad](https://user-images.githubusercontent.com/33906536/178341888-fb11c4f2-4648-47a5-b1f3-65e663ea1c30.gif)



---

## Nivel ESCRITURA

Incluye todo lo del nivel lectura, más control activo del sistema.

Acceso restringido a:

- Redes
- Servidores

---

### Capacidades:

#### 1. Reinicio del servicio
- Tarda ~10 minutos en estabilizar
- No ingresar durante ese período
- Requiere crear issue justificando el cambio (arrobando sectores involucrados)



![Reinicio servicio](https://user-images.githubusercontent.com/33906536/178347160-dfe66530-a86b-4550-999d-7dcc763c0ff9.gif)



---

#### 2. Tráfico en tiempo real

- Visualización por red
- Por path específico



![Tiempo real](https://user-images.githubusercontent.com/33906536/178348018-7b33e98b-5c38-4847-b883-22dcfccd7834.gif)



---

#### 3. Movimientos de red

- Permite mover redes entre peers
- Se debe esperar confirmación de la acción



![Mover redes](https://user-images.githubusercontent.com/33906536/178349921-1b81cfd6-0c2f-4610-bfc6-0c4842f659c8.gif)



---

#### 4. Deshabilitar gestión automática

- Se puede desactivar control automático de tráfico (upload/download)
- Uso crítico y controlado
- Requiere issue obligatorio explicando el motivo



![Auto management off](https://user-images.githubusercontent.com/33906536/178350238-73cd75ba-0d30-4e97-a734-8c22bd3e5e9c.gif)


---
