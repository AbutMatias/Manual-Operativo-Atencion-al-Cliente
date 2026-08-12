# Chequeo de acceso a un sitio web o servidor

---

## Introducción

Un sitio web se identifica mediante un **FQDN (Fully Qualified Domain Name)**, que es una dirección completa en Internet.

Está compuesto por:
- Nombre de host
- Dominio

Ejemplo:
- www.google.com → IP: 142.251.133.4

---

## Puertos utilizados

- HTTP → puerto 80 (sin cifrado)
- HTTPS → puerto 443 (seguro con SSL)

Si no se especifica puerto, el navegador usa automáticamente:
- 80 → redirige a 443 si existe SSL

Ejemplo:
- www.google.com:443

### Ejemplo de telnet a Rockstar: 

   * ![img](./imagenes/357978494-e7f60122-d32e-4531-b96f-68009e7d7304.jpg)
   * En este caso vemos que el host no está accesible con una conexión segura (HTTPS).

### Ejemplo de telnet a Google:

   * ![image](./imagenes/357979264-b255697d-5729-4177-b956-13f33735bcaf.jpg)
   * En este caso vemos que el host está accesible con una conexión segura (HTTPS).

Del mismo modo, podemos verificar si se puede acceder al host con una conexión insegura:
   * ![image](./imagenes/357979382-3c16819d-2bb5-4f0d-b638-629af9b5b8b4.jpg)

---

# 1. Objetivo del chequeo

Verificar si un sitio o servidor:
- Es accesible desde la red
- Responde a nivel de aplicación
- Presenta bloqueo o caída

---

# 2. Prueba con TELNET

El comando telnet permite verificar conectividad a un puerto específico.

## Uso:
- IP o dominio + puerto

Ejemplo:
- telnet www.google.com 443

---

## Interpretación

- Si conecta → el servicio responde
- Si falla → puede existir bloqueo o caída

---

# 3. Tipos de verificación

## HTTPS (seguro)
- Puerto 443
- Requiere certificado SSL

## HTTP (no seguro)
- Puerto 80

## Otros servicios
- Algunos servidores utilizan puertos personalizados (ej: 4443)

---

# 4. Prueba con Mikrotik (fetch)

Permite verificar respuesta HTTP/HTTPS desde el router.

## Comando:

```bash
/tool fetch url="https://www.google.com" dst-path=google.txt output=file
