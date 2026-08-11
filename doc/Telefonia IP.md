# Sin conexión - Telefonía IP (VoIP)

## Introducción

Este diagnóstico aplica a clientes que poseen servicio de telefonía IP (VoIP) mediante equipos Linksys, Grandstream o teléfonos IP.

El objetivo es determinar si el inconveniente se encuentra en:

* La conectividad física del equipo VoIP.
* La conectividad de red.
* El registro contra la central VoIP de Eternet.
* El teléfono conectado al equipo.
* La central telefónica o la configuración del servicio.

## Verificaciones iniciales

### 1. Confirmar el síntoma reportado

Consultar al cliente:

* ¿No puede realizar llamadas?
* ¿No puede recibir llamadas?
* ¿No tiene tono?
* ¿Escucha mensajes de error?
* ¿El problema ocurre con todos los números o solamente con algunos?

### 2. Verificar conectividad del servicio de internet

Antes de continuar, confirmar que el cliente posee conexión a Internet funcionando correctamente.

Si el cliente no tiene Internet, se debe diagnosticar primero el problema de conectividad.

---

## Verificación física

### 1. Solicitar fotografías

Solicitar fotografías donde se visualice:

* Equipo VoIP.
* Router Host.
* Antena/CPE.
* Cableado entre los equipos.
* Estado de los LEDs.

### 2. Verificar esquema de conexión

#### Router Host MikroTik

```text
CPE → Router Host (WAN Main)
Router Host (WAN BK) → VoIP
```

#### Router de otra marca

```text
CPE → VoIP → Router Host
```

En estos casos se recomienda evaluar posteriormente un cambio a Router MikroTik en comodato.

### 3. Verificar respuesta física

Desde Winbox:

* Confirmar que exista enlace (Link) en las interfaces utilizadas.
* Verificar que el equipo VoIP responda ping.
* Comprobar que no existan cortes físicos evidentes.

Si el equipo posee link físico pero no responde ICMP, o directamente no presenta link, solicitar fotografías adicionales y derivar reclamo a Redes.

---

## Verificación desde Winbox

### 1. Verificar ARP

Ir a:

```text
IP → ARP
```

Comprobar que exista una entrada correspondiente al equipo VoIP.

### 2. Realizar ping al VoIP

Ir a:

```text
Tools → Ping
```

Realizar pruebas hacia la IP del VoIP.

Resultado esperado:

```text
0% Packet Loss
```

### 3. Verificar capacidad de ancho de banda

Realizar un ping de 16384 bytes desde el hotspot o equipo correspondiente.

El codec de voz requiere aproximadamente:

```text
128 kbps
```

Cada línea VoIP posee:

```text
512 kbps asignados
```

Si existen pérdidas o elevada latencia, puede afectar la calidad de llamadas.

---

## Verificación lógica

### Acceso al panel de administración

Ingresar mediante navegador web a la IP del VoIP.

Generalmente utilizan direcciones:

```text
10.0.2xx.xxx
```

---

# Equipos Linksys

## Acceso

Puerto habitual:

```text
8080
```
<img width="553" height="355" alt="image" src="https://github.com/user-attachments/assets/c21cd312-9eb2-4544-b3d5-e5f6e280ba4a" />

Usuario:

```text
user
```

Contraseña:

```text
spa + último octeto de IP
```

### Verificar registro

Ingresar a:

```text
Voice
```

Según donde esté conectado el teléfono:

```text
Line1
Line2
```

Verificar:

```text
Registration State
```

Debe indicar:

```text
Registered
```
<img width="745" height="933" alt="image" src="https://github.com/user-attachments/assets/d2d6fa9a-687f-4842-997c-f5d3e0ae9817" />

### Si muestra Failed

Derivar reclamo a Servicio Técnico.

### Verificaciones avanzadas

Usuario:

```text
admin
```

Contraseña:

```text
spa + último octeto de IP
```

Verificar:

* Que intente registrar contra `voip.eternet.cc`.
* Que `Line Enable` esté en `yes`.
* Que el `User ID` coincida con el número corto configurado en SSAK.
  
<img width="1236" height="465" alt="image" src="https://github.com/user-attachments/assets/be413833-0da9-4c7e-bb43-0859ec3e42d9" />

<img width="745" height="806" alt="image" src="https://github.com/user-attachments/assets/6059924a-86df-4942-a214-46f3d75e4433" />


---

# Equipos Grandstream

## Acceso

Contraseña:

```text
spa + último octeto de IP
```


### Verificar estado

Según el puerto utilizado:

```text
FXS1
FXS2
```

Comprobar:

#### Registration

Debe indicar:

```text
Registered
```
<img width="778" height="349" alt="image" src="https://github.com/user-attachments/assets/7a57e8f7-7fb6-47ee-bf86-90875f0c2fce" />

#### Hook

Estados posibles:

```text
OnHook
```

Teléfono colgado.

```text
Ringing
```

Está recibiendo una llamada.

```text
Busy
```

Llamada en curso.

---

## Verificaciones generales

Todos los equipos deben registrar contra:

```text
voip.eternet.cc
```

Debe resolver:

```text
172.16.40.254
```
<img width="805" height="786" alt="image" src="https://github.com/user-attachments/assets/0f4d872d-f519-4e5d-8347-5950590b60ae" />

Además verificar que:

* Gateway configurado correctamente.
* DNS configurado correctamente.
* El equipo obtenga conectividad normal.

<img width="716" height="417" alt="image" src="https://github.com/user-attachments/assets/d80b96c5-c86f-433c-82bd-9b184283535c" />

---

## Escalamiento

Si el VoIP figura registrado pero el cliente continúa con inconvenientes:

Solicitar:

* Número afectado.
* Números de destino de ejemplo.
* Horario aproximado del inconveniente.
* Mensaje de error recibido.
* Si escucha tono o silencio total.

Adjuntar:

* Fotografías.
* Resultado de pruebas realizadas.
* Estado de registro del VoIP.
* Capturas de pantalla relevantes.

Luego derivar reclamo a Servicio Técnico con toda la información recopilada.

## Criterios de derivación

| Situación                                               | Derivar a        |
| ------------------------------------------------------- | ---------------- |
| Sin link físico o sin respuesta del equipo              | Redes            |
| Registration Failed                                     | Servicio Técnico |
| Registrado pero no realiza/recibe llamadas              | Servicio Técnico |
| Configuración incorrecta del VoIP                       | Servicio Técnico |
| Problemas de calidad de llamada con pérdidas o latencia | Servicio Técnico |
