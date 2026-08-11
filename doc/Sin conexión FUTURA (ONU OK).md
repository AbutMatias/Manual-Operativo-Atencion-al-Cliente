# Sin conexión FUTURA (ONU OK)

Se utiliza cuando la **ONU está online y con señal óptica correcta**, pero el **router del cliente no tiene conexión**.

## Paso 1. Verificar el estado de la ONU

Desde Grafana verificar:

- ONU registrada.
- Estado óptico correcto.
- Señal óptica normal.

> Si la ONU no está registrada o no tiene señal, utilizar el procedimiento [**Sin conexión FUTURA**](https://github.com/Eternet/Atencion.Clientes/blob/main/Documentacion/Manual-Operativo-Atencion-al-Cliente/doc/Sin%20conexión%20FUTURA.md).

---

## Paso 2. Verificar el enlace entre la ONU y el router

Revisar:

- Estado de la interfaz Ethernet.
- Si existe enlace entre la ONU y el router.
- Tabla MAC de la ONU.

### Interpretación

- **MAC del router presente:** continuar con el diagnóstico.
- **Sin MAC:** verificar cableado, puertos y router.

---

## Paso 3. Verificar con el cliente

Consultar:

- ¿La falla es total o intermitente?
- ¿Todos los dispositivos están sin Internet?
- ¿Hubo cortes de luz o movimientos de equipos?

---

## Paso 4. Revisar equipos

Solicitar que verifique:

- ONU encendida.
- Router encendido.
- Cable de la ONU conectado al puerto **WAN** del router.
- Fuente y cables correctamente conectados.

Si es posible, solicitar una foto de las luces y conexiones.

---

## Paso 5. Reiniciar los equipos

1. Desconectar la **ONU** y el **router**.
2. Esperar **2 minutos**.
3. Encender primero la **ONU**.
4. Esperar que sincronice.
5. Encender el **router**.
6. Confirmar si el servicio volvió.

---

## Paso 6. Verificaciones internas

Si la falla continúa, verificar:

- ARP.
- DHCP (Lease en estado **Bound**).
- Hotspot.
- Rutas.
- Firewall.
- Pérdida de paquetes o flapeos.

---

## Paso 7. Derivar

Derivar cuando:

- No exista enlace entre ONU y router.
- La tabla MAC no detecte el router.
- El router continúe sin responder luego de las pruebas.
- Existan daños en cables, puertos o fuente.
- La falla persista luego del reinicio y las verificaciones.

Registrar siempre:

- Síntoma informado.
- Estado de la ONU.
- Resultado de la tabla MAC.
- Pruebas realizadas.
- Resultado del reinicio.
- Evidencia recibida.
- Motivo de la derivación.
