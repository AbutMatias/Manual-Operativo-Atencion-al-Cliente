# Introducción

Esta documentación sirve como guía para realizar un **upgrade de servicio** en distintos escenarios dentro del sistema SSAK.

---

# Proceso de carga paso a paso

## Paso 1 - Identificación del cliente

Identificamos al cliente y el servicio sobre el cual se realizará el upgrade.

En SSAK:

- Buscar cliente 👉🏻 [Guía de identificación](https://github.com/AbutMatias/Manual-Operativo-Atencion-al-Cliente/blob/main/doc/Indentificación%20de%20un%20cliente.md)
- Ir a: `Ver detalles > Botón clientes > Solapa servicios`
- Clic derecho sobre el servicio a modificar
- Seleccionar: **Cambio de abono**

<img width="1384" height="1030" alt="image" src="https://github.com/user-attachments/assets/ef293901-7ba8-4101-a054-df074fd1fa0d" />

---

## Paso 2 - Selección de nueva tarifa

Buscamos la nueva tarifa y definimos cuándo se efectiviza el cambio.

Se disponen de 4 opciones:

---

### 🔹 Inmediato (facturación proporcional)

Se aplica el cambio de forma inmediata.

<img width="1086" height="627" alt="image" src="https://github.com/user-attachments/assets/3ee5ef33-583e-46af-b1b9-60e3c9633c02" />


---

### 🔹 Relacionado a una instalación interna

Se utiliza cuando el upgrade se ejecuta luego de finalizar una instalación interna.

- Primero se carga la interna
- Luego se realiza el upgrade
- El sistema asocia automáticamente el ID de la instalación

<img width="1083" height="627" alt="image" src="https://github.com/user-attachments/assets/478ca2ba-b349-4880-a503-24681a68044b" />


---

### 🔹 Upgrade / Downgrade programado o inmediato

Permite definir:

- Fecha técnica de aplicación
- Fecha de inicio de facturación proporcional

<img width="1084" height="625" alt="image" src="https://github.com/user-attachments/assets/9d71a0aa-38d9-4d3e-a845-907db1276b98" />



---

### 🔹 Relacionado a cambio de host

Se utiliza cuando el cambio está vinculado a un reclamo por cambio de equipo (host).

<img width="1082" height="626" alt="image" src="https://github.com/user-attachments/assets/4f59f0db-5dc5-40f7-988f-b3d1635c1577" />



---

# ⚠️ Información importante

## Antes de realizar un upgrade

- Si el cliente reporta un problema de servicio, **primero debe ser verificado por Atención al Cliente**
- No asumir que el upgrade soluciona la falla

---

## Compatibilidad de equipos

Verificar que el equipo instalado soporte el ancho de banda ofrecido.

| Ancho de banda | Negociación requerida | Equipos compatibles |
|----------------|----------------------|---------------------|
| 500 Mbps       | 1 Gbps               | LB-Link             |
| 300 Mbps       | 1 Gbps               | LB-Link, MikroTik hAP ac2, Alpha, Vilo |
| 100 / 50 Mbps  | 100 Mbps             | MikroTik 952 ac lite, hAP ac2, Vilo |
| 10–20 Mbps     | 100 Mbps             | MikroTik 952 ac lite, hAP ac2, Vilo |

---

> [!IMPORTANT]
> El plan de **500 Mbps es exclusivo para equipos LB-Link**.  
> Si el cliente tiene otro equipo, se debe gestionar un **cambio de host**.

---
