# WinBox no conecta por ROMON

## Descripción del problema

Este inconveniente suele ocurrir cuando WinBox tiene configurada una dirección de acceso mediante ROMON, pero no existe una conexión previa a un equipo que actúe como agente ROMON.

Como resultado, WinBox intenta conectarse utilizando esa configuración y la conexión falla.

---

# Solución

## Paso 1: Activar el modo avanzado

1. Abrir WinBox.
2. Activar la opción **Advanced Mode**.

> Se recomienda mantener siempre habilitado el modo avanzado para disponer de todas las opciones de configuración.
<img width="864" height="419" alt="image" src="https://github.com/user-attachments/assets/d1f66d26-77e1-4e10-950e-0cd65e5af145" />

---

## Paso 2: Eliminar el agente ROMON configurado

1. Buscar el campo **RoMON Agent**.
2. Verificar si contiene una dirección o dispositivo configurado.
3. Borrar el contenido del campo para dejarlo vacío.
<img width="821" height="529" alt="image" src="https://github.com/user-attachments/assets/8eba9128-c6cc-4c43-978e-9ba6aaa8e020" />

---

## Resultado esperado

Una vez eliminado el agente ROMON:

- WinBox dejará de intentar conectarse a través de ROMON.
- La conexión volverá a realizarse de forma normal mediante IP o MAC.
- El problema de acceso quedará resuelto.
  
![Recording 2024-02-26 at 08 07 23](https://github.com/Eternet/Atencion.Clientes/assets/63564990/a8664b8a-eb4e-4e79-b936-700eb735ea63)
---

## Recomendación

Si no se utiliza ROMON para acceder a equipos MikroTik, dejar el campo **RoMON Agent** vacío para evitar futuros inconvenientes de conexión.
