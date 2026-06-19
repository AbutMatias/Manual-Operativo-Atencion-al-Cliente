# Tipos de Conexion

Este instructivo tiene como objetivo comprender y diferenciar las distintas tecnologías utilizadas en la red de Eternet, los tipos de equipos involucrados y los esquemas de conexión vigentes.

---

# 1. Conexión de Fibra Óptica (FUTURA)

La fibra óptica es la tecnología prioritaria de la empresa debido a su mayor estabilidad, menor latencia y menor afectación por condiciones climáticas.

## Características
- Baja latencia
- Alta estabilidad
- No se ve afectada por el clima
- Mayor calidad de servicio

---

## Abonos FUTURA
Los servicios de fibra óptica se agrupan bajo el nombre **FUTURA**, con distintas velocidades según la categoría:

- F1
- F2
- F3
- F4
- F5

(Corresponden a velocidades variables según localidad: 10, 30, 50, 100, 300 y 500 Mbps)

Más información:
https://github.com/Eternet/General/blob/main/docs/Atencion%20al%20Cliente/Tipos%20de%20conexi%C3%B3n/readme.md

---

## Arquitectura de conexión

- La fibra ingresa al domicilio
- Conecta a una ONU (Unidad de Red Óptica)
- La ONU convierte señal óptica en señal eléctrica
- Sale por cable de red hacia el router del cliente (puerto WAN)
- El router distribuye internet por LAN o WiFi

---

## Identificación de la ONU en el sistema

Se utiliza la herramienta Netmap para verificar estado y señal.

---

## Pasos para ver estado de ONU

1. Identificar cliente desde Atención al Cliente
2. Ingresar a Netmap
3. Buscar cliente
4. Clic derecho en el cliente → Propiedades
5. Ir a “Datos de la ONU”
6. Clic en “Obtener estado”

---

## Información que se obtiene
- Señal óptica (dBm)
- Estado de la ONU
- Conectividad entre ONU y router

---

# 2. Conexión Wireless

Los clientes wireless se conectan mediante una antena llamada CPE Wireless, ubicada generalmente en el techo del domicilio o en torres para mayor alcance.

Esta antena se enlaza de forma inalámbrica a un Access Point (AP).

---

## Tecnologías utilizadas
- MikroTik (principal)
- NanoStation (tecnología antigua / en desuso progresivo)

Cada tecnología tiene interfaces de administración diferentes, por lo que es importante identificar correctamente el equipo antes de acceder.

---

## Identificación en el sistema

- Todas las conexiones de fibra se denominan **FUTURA**
- El resto de los servicios corresponden a **Wireless**

---

## Visualización en sistema

En la plataforma se puede ver:

1. IP y MAC del router principal (HOST)
2. IP y MAC del CPE Wireless (NO HOST)
3. Acceso a “Mantenimiento de Equipos” con IP del cliente
4. IP del CPE Wireless
5. Plan contratado y velocidad del servicio

---

## Acceso a equipos
Para verificación o configuración:
- Se accede mediante la IP del equipo
- Las acciones dependen del procedimiento correspondiente documentado
