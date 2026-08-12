# Servicio iBGP

## Conceptos generales

El esquema de ingeniería de tráfico de **ETERNET** utiliza **BGP interno (iBGP)**:  
https://es.wikipedia.org/wiki/Border_Gateway_Protocol

Las localidades que poseen routers frontend propios (CRFs) tienen múltiples peers contra routers BGP frontend de alta disponibilidad (HA_iBGPs).

Cada peer corresponde a:

- Un **path lógico (L2 VLAN tagged)**
- Que atraviesa diferentes switches y enlaces wireless (**path físico**)
- Con IPs en ambos extremos utilizadas para levantar los peers iBGP

![Esquema iBGP](./imagenes/bd68d3a9-6c39-4a35-9bc5-b5e9ad3cfdba.jpg)

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



![Lectura tráfico](./imagenes/bddcfe59-d0cf-4af5-8fc8-1874e08064b4.jpg)



---

### Detalle por localidad

Permite ver:

- Cantidad de peers
- Rutas por peer
- Tráfico por peer
- Salud del peer (ICMP)
- Redes y distribución de rutas



![Detalle localidad](./imagenes/be1d0e05-9557-467a-911d-cc44b9c3cce3.jpg)



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



![Reinicio servicio](./imagenes/be413833-0da9-4c7e-bb43-0859ec3e42d9.jpg)



---

#### 2. Tráfico en tiempo real

- Visualización por red
- Por path específico



![Tiempo real](./imagenes/be59b425-d7ca-4168-aa6a-ac423e98b8d1.jpg)



---

#### 3. Movimientos de red

- Permite mover redes entre peers
- Se debe esperar confirmación de la acción



![Mover redes](./imagenes/be989a0d-e95b-4617-9683-379908abaf28.jpg)



---

#### 4. Deshabilitar gestión automática

- Se puede desactivar control automático de tráfico (upload/download)
- Uso crítico y controlado
- Requiere issue obligatorio explicando el motivo



![Auto management off](./imagenes/c01a2dc2-a253-4625-9512-e83f743ff0a6.jpg)


---
