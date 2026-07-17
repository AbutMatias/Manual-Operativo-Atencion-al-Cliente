# Diagnóstico - No llega al abono contratado

## Objetivo

Establecer un procedimiento único para diagnosticar reclamos donde el cliente informa una velocidad inferior a la correspondiente a su abono contratado, descartando las causas más frecuentes antes de derivar el caso.

---

# ¿Cuándo aplicar este procedimiento?

Utilizar este protocolo cuando el cliente indique que **no alcanza la velocidad contratada**, tanto en servicios de **Fibra Óptica** como **Wireless**, y no exista una incidencia general en la zona.

---

# Protocolo de verificación

## Paso 1 - Confirmar el reclamo

Verificar:

- velocidad del abono contratado;
- tecnología del servicio (Fibra Óptica o Wireless);
- modelo de la ONU y del router;
- existencia de incidencias generales.

> Si existe una afectación general, gestionar el caso según el procedimiento correspondiente.

---

## Paso 2 - Validar la prueba de velocidad

Confirmar con el cliente:

- si la prueba fue realizada por cable o por WiFi;
- dispositivo utilizado;
- si había otros equipos consumiendo Internet;
- servidor utilizado para la medición.

Si la prueba fue por WiFi:

- verificar que el dispositivo esté conectado a la red **5 GHz**;
- solicitar una nueva prueba cerca del router.

> No considerar válida una prueba realizada en **2.4 GHz** para velocidades superiores a **100 Mbps**.

---

## Paso 3 - Verificar el dispositivo del cliente

Comprobar que el equipo utilizado soporte la velocidad contratada:

- placa de red **Gigabit (1000 Mbps)**;
- adaptador WiFi compatible con **WiFi 5 (802.11ac)** o superior;
- ausencia de limitaciones de hardware o sistema operativo.

> Un dispositivo con interfaz **Fast Ethernet (100 Mbps)** no superará aproximadamente los **94 Mbps**.

---

## Paso 4 - Verificar la negociación Ethernet

Controlar remotamente:

### ONU

- negociación a **1000 Mbps Full Duplex**.

### Router

- puerto WAN a **1 Gbps**;
- puerto LAN utilizado a **1 Gbps**.

Si algún enlace negocia a **100 Mbps**, revisar:

- cable UTP;
- conectores;
- puerto utilizado;
- estado físico del cable.

---

## Paso 5 - Reiniciar los equipos

Solicitar al cliente:

1. Apagar la ONU y el router.
2. Desconectar el cable UTP entre ambos.
3. Esperar aproximadamente un minuto.
4. Volver a conectar el cable.
5. Encender la ONU y esperar su sincronización.
6. Encender el router.

Luego repetir la prueba de velocidad.

---

## Paso 6 - Confirmar el reinicio

Verificar remotamente el **Uptime** de la ONU y del router.

Si los tiempos de actividad no se reiniciaron, solicitar nuevamente el procedimiento antes de continuar.

---

## Paso 7 - Revisar la configuración del router

Verificar:

- acceso remoto al equipo;
- firmware actualizado;
- en MikroTik, RouterOS y firmware actualizados;
- configuración correcta de interfaces;
- ausencia de errores o configuraciones anómalas.

---

## Paso 8 - Verificar la red WiFi

Si el inconveniente ocurre únicamente por WiFi, revisar:

- conexión en **5 GHz**;
- intensidad de señal;
- interferencias o canal utilizado;
- **Tx Rate** y **Rx Rate**.

---

## Paso 9 - Verificar el consumo de la red

Comprobar:

- cantidad de dispositivos conectados;
- descargas o actualizaciones activas;
- streaming;
- cámaras IP;
- consolas;
- televisores u otros equipos que puedan saturar el ancho de banda.

---

## Paso 10 - Revisar limitaciones de configuración

Verificar que no existan:

- reglas QoS;
- limitadores de velocidad;
- colas en CRF;
- colas en Q_workers;
- otras configuraciones que restrinjan el ancho de banda.

---

## Paso 11 - Ejecutar pruebas de diagnóstico

Realizar:

- Ping;
- Traceroute;
- Bandwidth Test;
- revisión del historial de pruebas de velocidad.

Analizar:

- latencia;
- pérdida de paquetes;
- estabilidad;
- rendimiento general del servicio.

---

# Criterios de derivación

Derivar el reclamo únicamente cuando se haya verificado que:

- el abono contratado es correcto;
- la prueba de velocidad fue realizada correctamente;
- el dispositivo soporta la velocidad contratada;
- la ONU y el router negocian a **1 Gbps**;
- el cableado no presenta fallas;
- el reinicio de los equipos fue realizado y verificado;
- el firmware está actualizado;
- las pruebas WiFi se realizaron en **5 GHz** con buena señal;
- no existen limitaciones por QoS u otras configuraciones;
- las pruebas de diagnóstico no evidencian otra causa del inconveniente.

---

# Información obligatoria del reclamo

Registrar:

- velocidad contratada;
- tecnología del servicio;
- método utilizado para la prueba (cable o WiFi);
- dispositivo utilizado;
- resultados de las pruebas de velocidad;
- negociación de la ONU y del router;
- estado del cableado;
- versión de firmware;
- cantidad de dispositivos conectados;
- resultados de Ping, Traceroute y Bandwidth Test;
- hallazgos técnicos;
- motivo de la derivación;
- contacto y disponibilidad del cliente.

---

# Comunicación al cliente

Informar:

- qué verificaciones se realizaron;
- cuáles fueron los resultados obtenidos;
- si se detectó alguna limitación;
- si el caso quedó resuelto o será derivado;
- cuál será el siguiente paso.

No informar plazos que no hayan sido confirmados por el circuito operativo vigente.
