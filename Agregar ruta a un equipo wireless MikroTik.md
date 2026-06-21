# Introducción

- Para acceder mediante Winbox o Web a la gestión de un equipo, es necesario que este tenga configurada una puerta de enlace (gateway).
  - Muchas veces un equipo responde ICMP por bridge pero no permite acceso por Winbox o Web. Esto suele ocurrir cuando no tiene gateway configurado o es incorrecto.

---

# Procedimiento

## 1. Acceso alternativo al equipo

- Ingresar al equipo mediante un método alternativo:
  - **MAC-Telnet** desde el Hotspot o AP al que esté conectado el equipo sin ruta.

---

## 2. Verificar IP y red del equipo

- Una vez dentro del equipo, ejecutar:

```bash
/ip address print
```
Revisar:
- Dirección IP
- Máscara de subred
- Network

<img width="597" height="382" alt="image" src="https://github.com/user-attachments/assets/98dbe95d-de6a-4a33-807c-2f7163f3598a" />


## 3. Verificar rutas existentes
Ejecutar:
```
/ip route print
```
- Debe existir una ruta por defecto:
- `0.0.0.0/0`
- Gateway: `xxx.yyy.zzz.1` (primeros 3 octetos del network + .1)
  
<img width="539" height="268" alt="image" src="https://github.com/user-attachments/assets/138329a6-fa64-45e3-9b94-6c84b91a8378" />


## Casos posibles
# Caso 1: No existe gateway

Agregar ruta por defecto:
```
/ip route add gateway=xxx.yyy.zzz.1
```
- Reemplazar `xxx.yyy.zzz` por los primeros 3 octetos del network.

# Caso 2: Gateway incorrecto
Opción A - Eliminar y crear nuevamente
1.Borrar ruta incorrecta
2.Crear nuevamente con el comando:
```
/ip route add gateway=xxx.yyy.zzz.1
```
Opción B - Editar ruta existente
1.Verificar posición del registro:
Las rutas están numeradas en orden ascendente.
2.Ejecutar:
```
/ip route set [posicion] gateway=xxx.yyy.zzz.1
```

Resultado esperado
El equipo debe recuperar acceso por:
- Winbox
- Web
- IP de gestión
