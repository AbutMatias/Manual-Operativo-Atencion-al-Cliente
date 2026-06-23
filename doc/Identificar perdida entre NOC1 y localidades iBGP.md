# Introducción

Eternet da servicio a varias localidades y cuenta con distintos NOCs de los que dependen. En el NOC1, algunas de estas localidades están configuradas bajo un esquema iBGP. Más información en el siguiente enlace:  
https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/Servicio%20iBGP.md

Las localidades bajo este esquema (Febrero 2023) son:

- Chaves  
- San Cayetano  
- Claromecó  
- Reta  
- Orense  
- Indio Rico  
- Benito Juárez  

Pueden existir situaciones donde el camino entre una de estas localidades y el NOC1 se vea afectado, generando degradación o pérdida de conectividad.

---

# Cómo identificar la problemática

## 1. Prueba desde el cliente

Si el cliente presenta lentitud o falta de acceso:

- Realizar **ping al destino afectado**
- Realizar **traceroute (traza)** desde el router del cliente

Guía de traza:  
https://github.com/AbutMatias/Inducci-n-Atencion-al-Cliente-/blob/main/Traceroute%20(Traza%20de%20red).md

- Si el router no permite traceroute:
  - Usar otro cliente de la misma localidad
  - Idealmente con IP del mismo rango o cercano

---

## 2. Análisis de la traza

Una vez realizada la traza:

- Revisar en qué salto aparece:
  - pérdida de paquetes
  - aumento de latencia
  - degradación progresiva

📌 Ejemplo típico:  
La pérdida comienza en el segundo salto

![Ejemplo pérdida de paquetes](https://user-images.githubusercontent.com/93199172/214681615-17b41887-9947-4894-a131-2825246693d0.png)

---

## 3. Verificación en Hotspot local

Ingresar al Hotspot de la localidad (ej: San Cayetano):

- Ir a: `IP → ARP List`
- Buscar la IP del **siguiente salto detectado en la traza**

Ejemplo:
- Si el HS es salto 1 → buscar salto 2
- IP ejemplo: `172.17.12.57`

---

## 4. Identificación del path

Al ubicar la IP en ARP:

- Se identifica la interfaz de tránsito
- Ejemplo:
  - `VlanPath1124_LaUnion11G_Cementerio11G_HAiBGPTsAs`

Esto indica el camino hacia el iBGP.

Luego:

- Realizar ping a esa IP
- Verificar:
  - pérdida
  - latencia
  - inestabilidad

---

## 5. Validación en plataforma iBGP

En localidades con esquema iBGP:

- Ingresar a la plataforma:
  https://ibgp.eternet.cc/cities

Allí se puede verificar:

- Estado del Path
- Latencia
- Pérdida
- Capacidad disponible
- Degradación del enlace

📌 Esto permite confirmar si el problema es:
- de transporte
- de congestión
- o de degradación del backbone iBGP

---

# Conclusión

Una vez completados estos pasos:

- Se confirma si existe degradación en el camino hacia NOC1
- Se determina el salto afectado
- Se valida en iBGP el estado del path

Con esta información se elabora el diagnóstico final para derivar a Redes.
