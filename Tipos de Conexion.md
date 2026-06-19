# Tipos de Conexion

Este instructivo tiene como objetivo comprender y diferenciar las distintas tecnologías utilizadas en la red de Eternet, así como los tipos de equipos y esquemas de conexión vigentes.

---

# Conexión de Fibra Óptica (FUTURA)

La fibra óptica es la tecnología prioritaria de la empresa debido a su estabilidad, baja latencia y alta resistencia a condiciones climáticas.

---

## Servicios FUTURA

Los servicios de fibra óptica se agrupan bajo el nombre **FUTURA**, con distintas categorías según velocidad:

- F1
- F2
- F3
- F4
- F5

Correspondientes según localidad a:
**10, 30, 50, 100, 300 y 500 Mbps**

---

## Esquema de conexión

- La fibra ingresa al domicilio
- Conecta a una ONU (Unidad de Red Óptica)
- La ONU convierte señal óptica en señal eléctrica
- El cable de red va al router del cliente (puerto WAN)
- El router distribuye internet por LAN o WiFi

---

## Esquema visual
![image](https://user-images.githubusercontent.com/101568958/199522641-6ccf2216-7f70-459a-8b9c-a9ac3523f89e.png)

---

## Visualización de la ONU en el sistema

Se utiliza la herramienta Netmap para consultar el estado de la ONU, su señal y su conexión con el router.

---

## Pasos en Netmap

1. Identificar al cliente desde la pantalla de Atención al Cliente  
  
2. Ingresar a Netmap  

3. Buscar al cliente y abrir “Propiedades”

4. Ir a “Datos de la ONU” y seleccionar “Obtener estado”

5. Verificar:
   - Señal óptica (dBm)
   - Estado de la ONU
   - Conexión física con el router

---

## Capturas de referencia
![image](https://user-images.githubusercontent.com/101568958/199506378-260c7557-f579-4962-bf49-7d242461ff09.png)

![image](https://user-images.githubusercontent.com/101568958/199507813-d17622dc-95ab-4d27-b989-e68d9b6c0cd1.png)

---

# Conexión Wireless

Los clientes wireless se conectan mediante una antena llamada **CPE Wireless**, ubicada generalmente en el techo del domicilio o en torres de mayor altura para mejor visibilidad.

Esta antena se enlaza de forma inalámbrica a un punto de acceso (AP).

---

## Tecnologías utilizadas

- MikroTik (principal)
- NanoStation (tecnología en desuso progresivo)

Cada tecnología tiene interfaces de administración diferentes, por lo que es fundamental identificar correctamente el equipo antes de acceder.

---

## Esquema visual
![image](https://user-images.githubusercontent.com/101568958/199527202-c8fb70f0-b78c-48e9-a62c-a355d8a4bfa1.png)

---

## Identificación en el sistema

- Las conexiones de fibra se identifican como **FUTURA**
- El resto de los servicios corresponden a **Wireless**

---

## Vista en sistema

En la plataforma se puede visualizar:

1. IP y MAC del router principal (HOST)
2. IP y MAC del CPE Wireless (NO HOST)
3. Acceso a “Mantenimiento de Equipos” desde la IP del cliente
4. IP del CPE Wireless
5. Servicio contratado y velocidad

---

## Acceso a equipos

El acceso a los equipos se realiza mediante su IP, y las acciones dependen de los procedimientos documentados correspondientes.
