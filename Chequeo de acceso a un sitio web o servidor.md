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

   * ![img](https://user-images.githubusercontent.com/63564990/182970011-f60c741c-caf3-4f52-bc49-954a04883e5e.png)
   * En este caso vemos que el host no está accesible con una conexión segura (HTTPS).

### Ejemplo de telnet a Google:

   * ![image](https://user-images.githubusercontent.com/63564990/185140922-423b5093-1de5-4c18-a204-341758ec266e.png)
   * En este caso vemos que el host está accesible con una conexión segura (HTTPS).

Del mismo modo, podemos verificar si se puede acceder al host con una conexión insegura:
   * ![image](https://user-images.githubusercontent.com/63564990/185141186-502886cc-9507-434c-a5f9-35056fc6f5f5.png)

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
