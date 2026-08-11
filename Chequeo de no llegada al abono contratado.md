# Diagnóstico - No llega al abono contratado

## Objetivo

Diagnosticar reclamos donde el cliente informa una velocidad inferior a la correspondiente a su abono contratado, descartando problemas en la prueba, el dispositivo, la red interna, el WiFi, el cableado o la configuración antes de derivar el caso.

---

# Paso 1. Confirmar el reclamo

Verificar:

- Velocidad del abono contratado.
- Tecnología del servicio (Fibra Óptica o Wireless).
- Modelo de ONU/CPE y router.
- Si existe una incidencia general.
- Si el problema afecta a todos los dispositivos o solo a uno.
- Si el inconveniente es permanente o intermitente.
- Si hubo cambios recientes de equipos, cableado o configuración.

> Si existe una incidencia general, informar al cliente y continuar con el procedimiento correspondiente.

---

# Paso 2. Verificar cómo se realizó la prueba

Preguntar al cliente:

- ¿La prueba fue por cable o por WiFi?
- ¿Qué aplicación utilizó? (Fast.com, Speedtest, etc.).
- ¿Qué dispositivo utilizó?
- ¿A qué hora realizó la prueba?
- ¿Había otros dispositivos utilizando Internet?
- ¿Cuál fue el resultado obtenido?

Solicitar una captura del test cuando sea posible.

Registrar todas las condiciones de la prueba.

---

# Paso 3. Si la prueba fue por WiFi

Solicitar al cliente:

- Conectarse a la red **5 GHz**.
- Ubicarse cerca del router.
- Cerrar descargas y aplicaciones que consuman Internet.
- Repetir la prueba.

Verificar:

- Banda utilizada.
- Intensidad de señal.
- Distancia al router.
- Obstáculos o interferencias.
- Tx Rate y Rx Rate (si están disponibles).
- Resultado de la nueva prueba.
- Resultado en otro dispositivo compatible, si es posible.

> No utilizar como referencia una prueba realizada en 2.4 GHz para velocidades superiores a 100 Mbps.

---

# Paso 4. Si la prueba fue por cable

Verificar:

- Cable conectado directamente al router.
- Estado del cable y conectores.
- Puerto utilizado.
- Que no existan adaptadores o extensiones.
- Que el equipo soporte la velocidad contratada.
- Negociación de la placa de red.

Si es posible:

- Probar otro cable.
- Repetir la prueba desde otro dispositivo compatible.

---

# Paso 5. Verificar el dispositivo

Confirmar que el equipo utilizado soporte la velocidad contratada.

Verificar:

- Placa de red Gigabit.
- Adaptador WiFi compatible con WiFi 5 (802.11ac) o superior.
- Drivers de red actualizados.
- Resultado de la prueba en otro dispositivo.

Registrar el resultado.

---

# Paso 6. Verificar negociación y cableado

## ONU / CPE

Verificar:

- Estado del servicio.
- Estado de los puertos Ethernet.
- Velocidad de negociación.
- Tabla MAC, si corresponde.

## Router

Verificar:

- Puerto WAN a 1 Gbps.
- Puerto LAN a 1 Gbps.
- Estado de interfaces.
- Cableado.

Si algún enlace negocia a **100 Mbps**, revisar:

- Cable UTP.
- Conectores.
- Puerto utilizado.
- Estado físico del cable.

> En abonos inferiores a 100 Mbps esto puede ser normal, dependiendo del modelo de router instalado.

Registrar el resultado.

---

# Paso 7. Reiniciar los equipos

Solicitar al cliente:

1. Apagar la ONU/CPE y el router.
2. Desconectar el cable UTP entre ambos.
3. Esperar 1 minuto.
4. Volver a conectar el cable.
5. Encender la ONU/CPE.
6. Esperar que sincronice.
7. Encender el router.
8. Repetir la prueba de velocidad.

Verificar el **Uptime** para confirmar que el reinicio se realizó correctamente.

Registrar:

- Equipos reiniciados.
- Resultado del reinicio.
- Resultado de la nueva prueba.

---

# Paso 8. Revisar la configuración del router

Verificar:

- Acceso remoto.
- Firmware actualizado.
- Configuración de interfaces.
- QoS.
- Limitadores de velocidad.
- CRF.
- Q_workers.
- Otras configuraciones que puedan limitar el ancho de banda.

Registrar el resultado.

---

# Paso 9. Verificar el consumo de la red

Comprobar:

- Cantidad de dispositivos conectados.
- Descargas activas.
- Streaming.
- Consolas.
- Cámaras IP.
- Televisores.
- Otros consumos elevados.

Si existen consumos importantes:

- Solicitar detenerlos.
- Repetir la prueba de velocidad.

Registrar el resultado.

---

# Paso 10. Ejecutar pruebas de diagnóstico

Realizar, según corresponda:

- Ping.
- Traceroute.
- Bandwidth Test.
- Verificación de AP.
- Verificación de HS.
- Verificación de ONU.
- Verificación de Host.
- Historial de pruebas de velocidad.

Registrar:

- Herramienta utilizada.
- Resultado obtenido.
- Relación con el inconveniente informado.

---

# Paso 11. Solicitar evidencia

Solicitar, cuando sea necesario:

- Captura del test de velocidad.
- Foto del cableado.
- Foto de puertos y conectores.
- Foto del router.
- Captura del error.
- Evidencia de daños físicos.

Registrar:

- Evidencia recibida.
- Componente observado.
- Resultado obtenido.
- Motivo si no fue posible obtener evidencia.

---

# Paso 12. Derivar el reclamo

Derivar únicamente cuando se confirme que:

- El abono contratado es correcto.
- No existe una incidencia general.
- La prueba fue realizada correctamente.
- El dispositivo utilizado soporta la velocidad contratada.
- El cableado y la negociación Ethernet son correctos.
- Se realizó el reinicio de los equipos.
- No existen consumos elevados.
- No existen limitaciones por configuración.
- La velocidad continúa siendo inferior a la contratada.
- Las pruebas técnicas indican una condición que requiere intervención de Redes.

La derivación debe incluir:

- Diagnóstico.
- Velocidad contratada.
- Dispositivo utilizado.
- Tipo de conexión.
- Resultado de las pruebas.
- Estado del cableado y negociación.
- Evidencia disponible.
- Motivo técnico de la derivación.
