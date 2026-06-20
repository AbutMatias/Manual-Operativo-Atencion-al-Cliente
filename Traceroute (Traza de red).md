# Traceroute (Traza de red)

## Introducción

Traceroute (o traza) es una herramienta que permite ver el camino que sigue un paquete de internet desde un origen hasta un destino.

En otras palabras:
> Muestra paso a paso por qué equipos pasa una conexión hasta llegar a su destino.

---

## ¿Para qué sirve?

Se utiliza para:

- Detectar cortes en la red
- Identificar dónde se pierde la conexión
- Analizar lentitud o latencia
- Ver la ruta que toma el tráfico de internet

---

## ¿Cómo funciona?

La traza muestra una lista de “saltos” (hops).

Cada salto representa un equipo por el que pasa la conexión.

En cada salto se puede ver:
- Dirección IP
- Tiempo de respuesta (latencia)
- En algunos casos, pérdida de paquetes

---

## Ejemplo de lectura en Windows

En una PC con Windows se ve así:

- Lista de IPs
- Tiempo en milisegundos por salto
- Camino completo hasta el destino

* ![image](https://user-images.githubusercontent.com/63564990/214871331-29aef91f-dc4f-4122-af0d-8cb73dff86aa.png)

---

## Ejemplo de lectura en MikroTik

En MikroTik la traza muestra:

- Saltos numerados
- IP de cada equipo intermedio
- Latencia por salto
- Posible pérdida de paquetes

 * ![image](https://user-images.githubusercontent.com/63564990/214847820-513b0881-3bfa-4671-9dce-021edba3b3c4.png)

---

## Cómo interpretar una traza

En la red de Eternet, cada salto representa un punto de la infraestructura:

Ejemplo típico:

1. Cliente / Hotspot
2. Router de acceso (iBGP o agregación)
3. Nodo de red (ej: Cabase / NOC)
4. Salida a proveedor (BGP / upstream)
5. Internet externo

---

## Cómo detectar un problema

Si en un salto aparece:

- Alta latencia → posible saturación o problema en ese nodo
- Pérdida de paquetes → posible falla en el equipo o enlace
- Timeout (*** ) → posible bloqueo por firewall o equipo que no responde ICMP

---

## Cómo hacer diagnóstico correctamente

Si detectamos un problema en un salto:

1. Identificar el salto anterior
2. Hacer ping desde ese punto al siguiente
3. Confirmar si el problema es:
   - Interno de Eternet
   - Del proveedor
   - O externo (internet)

---

## Casos dentro de la red de Eternet

Pueden existir variaciones en la ruta:

### Clientes con NAT
- Tienen un salto adicional (Router NAT)

### Localidades con iBGP
- Puede aparecer un salto adicional antes del BGP principal

<img width="1635" height="642" alt="image" src="https://github.com/user-attachments/assets/af39b9d5-a281-4e7b-84bd-00e89cf2d43d" />



---

## Importante

- No todos los saltos responden siempre (pueden estar detrás de firewall)
- Un salto sin respuesta no significa necesariamente falla
- El problema se confirma comparando saltos anteriores y posteriores

---

## Conclusión

Traceroute es una herramienta clave para diagnosticar problemas de red, ya que permite ver exactamente dónde ocurre una falla dentro del recorrido de la conexión.
