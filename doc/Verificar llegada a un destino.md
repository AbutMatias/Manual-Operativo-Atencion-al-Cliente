# Verificación de llegada a un destino de red

## Introducción

Cuando un cliente informa que no puede acceder a una página web, cámara, DVR, escritorio remoto, servidor o cualquier otro recurso de red, es importante seguir una serie de verificaciones para determinar dónde se encuentra el inconveniente.

Las herramientas principales para este diagnóstico son:

- Ping
- Traceroute (Traza)
- Telnet

---

## 1. Verificación de conectividad mediante Ping

La primera prueba consiste en comprobar si existe conectividad IP entre el origen y el destino.

### Desde Windows

```cmd
ping IP_O_DOMINIO
```

<img width="554" height="142" alt="image" src="https://github.com/user-attachments/assets/872b2377-f066-4156-b39b-2aedd4b8168d" />


### Desde MikroTik

```bash
/tool ping IP_O_DOMINIO
```
<img width="611" height="215" alt="image" src="https://github.com/user-attachments/assets/a4a87b8c-6763-4014-af50-27f06e83105d" />

### Interpretación

#### Si responde

- Existe conectividad IP hasta el destino.
- Continuar con la verificación de puertos.

#### Si no responde

- Puede existir un problema de conectividad.
- Puede haber un firewall bloqueando ICMP.
- La prueba no es concluyente.

> [!NOTE]
> Un destino puede estar funcionando correctamente aunque no responda ping.

---

## 2. Realizar una traza (Traceroute)

La traza permite visualizar el recorrido que realizan los paquetes desde el origen hasta el destino.

### Desde Windows

```cmd
tracert IP_O_DOMINIO
```
<img width="763" height="253" alt="image" src="https://github.com/user-attachments/assets/3ad8fc3a-2f64-4368-af1d-50c85166911d" />

### Desde MikroTik

```bash
/tool traceroute IP_O_DOMINIO
```
<img width="802" height="398" alt="image" src="https://github.com/user-attachments/assets/5a1aa9d9-0729-4bd0-a912-524a6a893ac3" />

### ¿Para qué sirve?

Permite identificar:

- Hasta qué punto llega el tráfico.
- En qué salto se produce una interrupción.
- Problemas de ruteo.
- Fallas en equipos intermedios.

---

## Destinos dentro de la red Eternet

Si el recurso se encuentra alojado dentro de la red Eternet (cámaras, DVR, servidores, terminales remotas, etc.), la traza es fundamental para verificar si existe una ruta válida hasta el destino.

### Si la traza llega correctamente

La conectividad de red es correcta.

Continuar con la verificación de puertos.

### Si la traza se corta

Realizar pruebas desde:

- Otro cliente del mismo rango IP.
- Otro cliente de la misma localidad.
- Otro cliente de otra localidad.

Esto permite determinar si se trata de:

- Un problema particular del cliente.
- Un problema del destino.
- Un problema general de la red.

Si se confirma una falla de red, derivar el caso a Servidores adjuntando las pruebas realizadas.

- [Issue de derivacion a Servidores](https://github.com/Eternet/Servidores.Issues/issues/new?assignees=&labels=Reclamo&projects=&template=z+-+Sin+acceso+a+recurso+de+red.yml&title=Sin+acceso+a+recurso+de+red+de+Eternet)

---

## 3. Verificación de puertos mediante Telnet

Si la traza llega correctamente al destino, el siguiente paso consiste en comprobar que el puerto del servicio se encuentre abierto.

### Ejemplo

```cmd
telnet IP_DESTINO PUERTO
```


Ejemplo:

```cmd
telnet 181.224.xxx.xxx 443
```
<img width="601" height="391" alt="image" src="https://github.com/user-attachments/assets/d12f911e-b2b7-412c-8842-f5e797676455" />

### Interpretación

#### Si conecta

- Existe conectividad hasta el servicio.
- El puerto se encuentra accesible.

#### Si no conecta

- El puerto puede estar cerrado.
- El servicio puede estar detenido.
- Puede existir un firewall bloqueando el acceso.
- Puede faltar una configuración de Port Forwarding.

---

## Ejemplo de traza incompleta

```text
1 192.168.233.1
2 10.10.10.201
3 172.16.105.163
4 * * *
```

En este ejemplo:

- Los primeros tres saltos responden correctamente.
- A partir del cuarto salto no se reciben respuestas.
- La falla se encuentra entre el salto 3 y el salto 4 o más adelante.

### Verificaciones recomendadas

Desde el último salto alcanzable:

1. Realizar ping al siguiente salto.
2. Ejecutar una nueva traza desde ese equipo.
3. Revisar reglas de firewall.
4. Revisar configuraciones NAT.
5. Verificar el estado de las interfaces involucradas.
6. Revisar los logs del equipo.

---

## Resumen de diagnóstico

Seguir siempre el siguiente orden:

1. Realizar Ping.
2. Realizar Traceroute.
3. Verificar puertos mediante Telnet.
4. Comparar resultados desde otros orígenes si corresponde.
5. Derivar a Servidores o Servicio Técnico con las pruebas obtenidas.

> [!IMPORTANT]
> Adjuntar siempre capturas de pantalla o resultados de las pruebas realizadas al momento de la derivación.
