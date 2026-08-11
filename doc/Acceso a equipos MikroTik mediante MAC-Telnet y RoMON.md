# Acceso a equipos MikroTik mediante MAC-Telnet y RoMON

---

# 1. Introducción

## MAC-Telnet

`MAC-Telnet` permite acceder por consola a un equipo MikroTik utilizando su dirección MAC en lugar de una IP.

Se utiliza cuando:
- El equipo no tiene IP configurada
- La IP no es alcanzable
- Problemas de conectividad a nivel L3

Funciona como un telnet tradicional, pero trabajando a nivel de capa 2 (MAC).

---

## RoMON

`RoMON (Router Management Overlay Network)` permite conectarse a equipos MikroTik a través de la red MAC utilizando Winbox.

Diferencias:
- MAC-Telnet → acceso por terminal
- RoMON → acceso gráfico desde Winbox

---

# 2. MAC-Telnet

## 2.1 Requisitos

- Estar conectado a un equipo MikroTik “padre”
  - Router wireless
  - Hotspot
  - Cualquier equipo con acceso L2 al destino

---

## 2.2 Acceso desde Winbox

### Paso a paso:

1. Ingresar al equipo MikroTik padre
2. Ir a:
`Tools → Telnet → MAC Telnet`

3. Completar:
- MAC del equipo destino
- Usuario
- Password

<img width="365" height="133" alt="image" src="https://github.com/user-attachments/assets/71911608-6d7a-4b24-9dd3-43edb8b98304" />


---

## 2.3 Acceso desde terminal

### Comando:

```bash
/tool mac-telnet {MAC}
```
Luego ingresar:

Usuario
Password

<img width="462" height="74" alt="image" src="https://github.com/user-attachments/assets/0cdbf221-35a7-4467-9863-060c2b527a1a" />

## 3. RoMON
## 3.1 Activación del servicio

Desde Winbox:
Ir a:
`Tools → RoMON`
Activar:
Enabled

<img width="321" height="218" alt="image" src="https://github.com/user-attachments/assets/c8b7494a-947a-4294-81bc-3280287aec84" />

# Desde terminal:

Ver estado:
`/tool romon print`
Activar si está deshabilitado:
`/tool romon set enabled=yes`
<img width="338" height="83" alt="image" src="https://github.com/user-attachments/assets/1a89a5fa-1187-4729-9576-08f0fa61d20c" />

## 3.2 Acceso vía RoMON (Winbox)
Paso a paso:
1.Abrir Winbox
2.Conectarse al equipo padre
3.Activar:
`Connect to RoMON`
4.Aparecerá lista de equipos disponibles
5.Seleccionar equipo o ingresar MAC manualmente
6.Ingresar credenciales
7.Click en Connect
<img width="949" height="293" alt="image" src="https://github.com/user-attachments/assets/afc9f20a-c02b-4231-94bf-9fe1ec4a981a" />
<img width="589" height="159" alt="image" src="https://github.com/user-attachments/assets/082c0939-447f-4d5d-b85a-fbca1be238dd" />

## 4. Casos de uso

# MAC-Telnet
- Equipos sin IP
- Emergencias de acceso
- Recuperación de configuración

# RoMON
- Diagnóstico avanzado
-Acceso multi-salto
- Gestión de red sin IP directa

## 5. Resumen
| Método     | Tipo acceso | Uso                     |
| ---------- | ----------- | ----------------------- |
| MAC-Telnet | Terminal    | Configuración rápida    |
| RoMON      | Winbox GUI  | Administración avanzada |



