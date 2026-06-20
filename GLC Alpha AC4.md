# Esquema de conexión con servicio FTTH y router GLC Alpha AC4

![FTTH](https://github.com/Eternet/Atencion.Clientes/assets/63564990/7f1008eb-825e-4313-aa70-0f3c6daaf62d)

# Esquemas de conexión con servicio Wireless y router GLC Alpha AC4

![Wireless](https://github.com/Eternet/Atencion.Clientes/assets/63564990/753c71d1-cc24-4dd8-a2e3-e084e9e65de6)


# GLC Alpha AC4 – Acceso y configuración

## Identificación

Para acceder a un equipo GLC Alpha AC4 de forma remota:

1. Copiar la dirección IP (pública o NATeada).
2. En el navegador anteponer `https://`.
3. Pegar la IP.
4. Agregar el puerto `:55443`.

Ejemplo:

`https://181.224.123.123:55443`

![image](https://github.com/Eternet/Atencion.Clientes/assets/63564990/160a2700-2965-46e3-98a6-d44bed33f136)

> [!NOTE]
> Si no funciona con `:55443`, probar con `:80` y sin `https://`.

---

## Credenciales de acceso

- Usuario: `admin`
- Contraseña: `Etnrouter2022`

---

## Configuración rápida (Quick Setup)

![image](https://github.com/Eternet/ATClientes_Tareas/assets/93199172/2cf0ec42-f779-4da1-bfd5-cbd4c1873a4a)

En esta pantalla se puede:

- Ver o modificar SSID y clave WiFi.

Las redes vienen configuradas con el mismo SSID desde instalación. Solo se separan si el cliente lo solicita.

---

## Configuración avanzada

Para acceder, desde Quick Setup seleccionar `Advanced`.

---

## Estado del equipo

### Estado de red WAN / LAN / WLAN



![image](https://github.com/Eternet/ATClientes_Tareas/assets/93199172/fdb3dd01-19db-4246-847a-533bea7723e0)



---

## Red

### WAN (IP dinámica / DHCP)



![image](https://github.com/Eternet/ATClientes_Tareas/assets/93199172/ac0b8642-0a4b-4400-a985-f37d14e0d53a)



---

### LAN



![image](https://github.com/Eternet/ATClientes_Tareas/assets/93199172/b5658968-9c3c-4a94-b6d3-68cb8c2ba25d)



En esta sección se visualiza la tabla DHCP:

- IP asignada
- MAC Address
- Nombre del dispositivo (si aplica)

---

## Conexión inalámbrica (2.4G / 5G)



![image](https://github.com/Eternet/ATClientes_Tareas/assets/93199172/24179fc1-887b-46ae-bfcf-d59e81beed46)



Permite modificar:

- SSID
- Contraseña
- Seguridad

> Nota: WPA PSK puede usarse en dispositivos antiguos, pero no es recomendable por seguridad.

---

## Filtrado MAC



![image](https://github.com/Eternet/ATClientes_Tareas/assets/93199172/3adbadc7-9fe0-4c09-a117-e0fa31e33cd8)



Permite bloquear dispositivos por MAC Address.

---

## Lista de clientes



![image](https://github.com/Eternet/ATClientes_Tareas/assets/93199172/0506d65d-b393-498f-a812-cc54b1aa65eb)



Muestra dispositivos conectados en tiempo real.

---

## Reenvío (Forwarding)

### Virtual Servers



![image](https://github.com/Eternet/ATClientes_Tareas/assets/93199172/8a136249-3352-4e43-8784-fc2afb9a2134)


Permite visualizar reglas de redirección de puertos.

---

## Herramientas

### Ping / Traceroute



![image](https://github.com/Eternet/ATClientes_Tareas/assets/93199172/2fa56fa3-25c7-49d8-8208-411e2f0e0890)

![image](https://github.com/Eternet/ATClientes_Tareas/assets/93199172/01df9b49-9179-4880-b9ba-a07d83751003)



---

### Estadísticas del sistema



![image](https://github.com/Eternet/ATClientes_Tareas/assets/93199172/4f9be3bc-2c6e-472a-87f5-813f82c354f6)



---

### Reinicio del sistema



![image](https://github.com/Eternet/ATClientes_Tareas/assets/93199172/3ba09e74-8200-4734-9ba2-dfb7316089ea)



---

## Nivel de señal (RSSI)

> [!IMPORTANT]
> En los equipos GLC Alpha AC4 el RSSI se interpreta de forma inversa a lo habitual.

### Comparación:

- Valor alto = mejor señal (cerca del router)
- Valor bajo = peor señal (lejos del router)

---

### Ejemplos

- Cerca del router: RSSI 69 (señal fuerte)

![image](https://github.com/user-attachments/assets/bda13410-ca9e-4557-bd47-ad9f1d8c2dc8)

- Lejos del router: RSSI 30 (señal débil)

![image](https://github.com/user-attachments/assets/55af4cbc-269f-4ad9-97de-5c6fd5e68f3a)

---

## Observación final

Este comportamiento debe tenerse en cuenta al diagnosticar problemas de cobertura o calidad de señal WiFi.
