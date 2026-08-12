# Sin navegación

## Objetivo

Utilizar esta guía cuando el cliente informa:

* "No tengo Internet".
* "Estoy conectado al Wi-Fi pero no puedo navegar".
* "No me carga ninguna página".
* "Internet se corta".
* "No me aparece el Wi-Fi".
* "Algunas páginas o aplicaciones no funcionan".

El objetivo es determinar **dónde está el problema** antes de realizar cambios o derivar.

---

# 1. Primero: preguntar qué sucede

Antes de tocar cualquier configuración, preguntar:

### 1.1 ¿Qué problema tiene?

Preguntar:

> "¿Qué es lo que no puede hacer exactamente?"

Registrar la respuesta.

Ejemplos:

* No puede conectarse al Wi-Fi.
* Está conectado al Wi-Fi pero no navega.
* Algunas páginas no cargan.
* Una aplicación no funciona.
* Internet funciona y se corta.
* No aparece la red Wi-Fi.

---

# 2. Preguntar desde qué dispositivo ocurre

Preguntar:

> "¿En qué dispositivo le ocurre?"

Por ejemplo:

* Celular.
* Notebook.
* PC.
* Smart TV.
* PlayStation.
* Otro.

Registrar el dispositivo.

---

# 3. Comprobar si ocurre en un solo dispositivo o en varios

Preguntar:

> "¿Le sucede en algún otro dispositivo conectado a la misma red?"

Si es posible, pedir que pruebe otro celular, computadora o TV.

### Si solamente ocurre en un dispositivo

El problema probablemente está relacionado con:

* Ese dispositivo.
* Su conexión Wi-Fi.
* Su configuración.
* Una aplicación específica.

Continuar con el **Paso 4**.

### Si ocurre en varios dispositivos

El problema puede estar relacionado con:

* Router.
* Servicio.
* Wi-Fi.
* Red interna.
* Configuración.

Continuar con el **Paso 7**.

---

# 4. Comprobar si el dispositivo ve la red Wi-Fi

Preguntar:

> "¿En el dispositivo aparece el nombre de su red Wi-Fi?"

### Si NO aparece

Hacer lo siguiente:

1. Confirmar que el Wi-Fi del dispositivo esté activado.
2. Preguntar si otro dispositivo puede ver la red.
3. Si otro dispositivo la ve, el problema puede estar en el dispositivo afectado.
4. Si ningún dispositivo la ve, continuar con la revisión del router.

### Si SÍ aparece

Continuar con el Paso 5.

---

# 5. Comprobar si puede conectarse al Wi-Fi

Preguntar:

> "¿Puede conectarse a la red Wi-Fi?"

### Si NO puede conectarse

Preguntar:

> "¿Qué mensaje le aparece?"

Registrar el mensaje.

Luego indicar:

1. Seleccionar la red Wi-Fi.
2. Elegir **Olvidar esta red**.
3. Buscar nuevamente la red.
4. Ingresar la contraseña.
5. Intentar conectarse.

### Si logra conectarse

Continuar con el Paso 6.

### Si sigue sin poder conectarse

Registrar:

* Dispositivo.
* Mensaje de error.
* Pruebas realizadas.
* Resultado.

Continuar con las verificaciones de Wi-Fi/DHCP.

---

# 6. Comprobar si realmente puede navegar

> [!IMPORTANT]
> Que el celular o computadora diga **"Conectado al Wi-Fi"** no significa que tenga Internet.

Pedir al cliente:

> "Abra el navegador e ingrese a una página, por ejemplo Google."

Luego preguntar:

> "¿La página carga correctamente?"

### Si carga

La navegación funciona.

Preguntar:

> "¿Qué página o aplicación específicamente no funciona?"

Si solamente falla una página o aplicación, continuar con el análisis del servicio puntual.

### Si NO carga

Continuar con el Paso 7.

---

# 7. Comprobar si el problema afecta a todos

Pedir al cliente que pruebe otro dispositivo conectado a la misma red.

Por ejemplo:

> "¿Puede probar desde otro celular conectado al mismo Wi-Fi?"

### Si el otro dispositivo navega correctamente

El problema está probablemente relacionado con el primer dispositivo.

Registrar:

> Se verifica navegación correcta en otro dispositivo conectado a la misma red. El inconveniente queda localizado en el dispositivo inicialmente afectado.

### Si el otro dispositivo tampoco navega

El problema puede estar en la red o en el servicio.

Continuar con el Paso 8.

---

# 8. Preguntar si la conexión es por Wi-Fi o cable

Preguntar:

> "¿El equipo está conectado por Wi-Fi o mediante un cable de red?"

## Si utiliza Wi-Fi

Continuar con las verificaciones de Wi-Fi.

## Si utiliza cable

Continuar con las verificaciones de cable, puerto y equipo.

---

# 9. Revisar el estado del servicio

Ahora realizar las verificaciones remotas.

### 9.1 Verificar si el equipo está conectado

Comprobar:

* Estado WAN.
* Estado del router.
* Estado de la ONU, si corresponde.
* Dirección IP.
* Estado de las interfaces.

Registrar si el equipo aparece:

* Conectado.
* Desconectado.
* Intermitente.

### Si el equipo aparece desconectado

Continuar con la revisión de:

* ONU.
* Señal.
* Cableado.
* Router.
* Estado del servicio.

### Si el equipo aparece conectado

Continuar con el Paso 10.

---

# 10. Revisar si el router está funcionando correctamente

Comprobar:

### Uptime

Indica cuánto tiempo lleva funcionando el equipo.

Si el uptime es muy bajo, puede indicar que el equipo se reinició recientemente.

### CPU

Verificar si el uso es normal o muy elevado.

### Memoria

Verificar que exista memoria disponible.

### Interfaces

Revisar si presentan:

* Errores.
* Cortes.
* Inestabilidad.
* Tráfico anormal.

Registrar cualquier comportamiento fuera de lo normal.

---

# 11. Revisar los dispositivos conectados

Comprobar cuántos dispositivos están conectados.

Registrar, cuando esté disponible:

* Cantidad.
* IP.
* MAC.
* Tipo de dispositivo.
* Interfaz utilizada.

Preguntarse:

> "¿Hay una cantidad de dispositivos mayor a la esperada?"

Si hay muchos dispositivos, revisar si existe un consumo elevado.

---

# 12. Revisar el consumo de Internet

Comprobar el tráfico:

* RX.
* TX.

Observar si existe:

* Consumo muy elevado.
* Consumo constante.
* Picos de tráfico.

Si se detecta un dispositivo consumiendo demasiado, identificarlo y registrarlo.

Ejemplo:

> Se observa consumo elevado de tráfico asociado al dispositivo identificado con MAC XX:XX:XX:XX:XX:XX.

---

# 13. Revisar la señal Wi-Fi

Si el problema es Wi-Fi, revisar:

* Señal.
* CCQ.
* TX Rate.
* RX Rate.
* Tiempo conectado.
* Desconexiones.
* Retransmisiones.

### ¿Qué significa?

**Señal:** indica qué tan fuerte llega la señal Wi-Fi al dispositivo.

**CCQ:** permite evaluar la calidad de la conexión inalámbrica.

**TX/RX Rate:** indica la velocidad de comunicación entre el dispositivo y el router.

Si los valores son bajos o inestables, puede existir un problema de cobertura, interferencia o calidad de conexión.

---

# 14. Hacer una prueba simple con el cliente

Si el problema es Wi-Fi:

1. Pedir al cliente que se acerque al router.
2. Desconectar temporalmente el extensor, si tiene uno.
3. Volver a conectarse al Wi-Fi.
4. Abrir una página.
5. Comprobar si ahora puede navegar.

### Si funciona

Registrar que el problema estaba relacionado con la cobertura, extensor o calidad de la conexión.

### Si no funciona

Continuar con las siguientes verificaciones.

---

# 15. Revisar si obtiene una dirección IP

Cuando el dispositivo está conectado al Wi-Fi, verificar si recibió una dirección IP.

### Si NO tiene IP

Puede existir un problema de:

* DHCP.
* Wi-Fi.
* Configuración.
* Router.

Revisar las asignaciones DHCP.

### Si SÍ tiene IP

Continuar con la verificación de conectividad y DNS.

---

# 16. Revisar DHCP

Comprobar:

* Si el DHCP está funcionando.
* Si el dispositivo recibió una IP.
* Si existen leases.
* Si existen IP duplicadas.
* Si existen conflictos.

Registrar el resultado.

Ejemplo:

> Se verifica que el dispositivo obtiene dirección IP correctamente mediante DHCP.

---

# 17. Revisar DNS

El DNS permite convertir nombres como:

> google.com

en una dirección IP que el equipo pueda utilizar.

Si el cliente tiene conexión pero las páginas no cargan, verificar la resolución DNS.

Registrar:

* DNS utilizado.
* Prueba realizada.
* Resultado.

### Si DNS funciona

Continuar con las siguientes pruebas.

### Si DNS falla

Registrar el hallazgo y corregir la configuración cuando corresponda.

---

# 18. Revisar la conexión interna

Realizar las pruebas disponibles para comprobar si existe comunicación dentro de la red.

Registrar:

* Latencia.
* Pérdida de paquetes.
* Estabilidad.

### Si existe pérdida

Registrar:

> Se detecta pérdida de paquetes durante la prueba interna.

Continuar con la revisión de:

* Wi-Fi.
* Cableado.
* Puertos.
* Equipos intermedios.
* Topología.

### Si NO existe pérdida

Registrar:

> No se detecta pérdida de paquetes durante la prueba interna.

Continuar con la revisión de navegación, DNS o servicio.

---

# 19. Revisar cableado y equipos intermedios

Si existe un router propio, extensor, repetidor o switch, preguntar:

> "¿El equipo está conectado directamente al router o hay otro equipo entre medio?"

Identificar:

* Router propio.
* Extensor.
* Repetidor.
* Switch.
* Cable de red.

Si existe un equipo intermedio, verificarlo antes de concluir que existe una falla del servicio.

---

# 20. Revisar posibles conflictos o loops

Esta verificación debe realizarse cuando existan indicios de problemas generales o intermitentes.

Revisar:

* MAC repetidas.
* MAC apareciendo en diferentes puertos.
* Mucho tráfico broadcast.
* CPU elevada.
* Cortes intermitentes.
* Lentitud general.

Si existe evidencia de un posible loop, registrar exactamente qué se observó.

---

# 21. Revisar cambios recientes

Preguntar:

> "¿Realizó algún cambio antes de que comenzara el problema?"

Por ejemplo:

* Cambió el router.
* Cambió la contraseña.
* Instaló un extensor.
* Cambió un cable.
* Conectó otro equipo.
* Modificó alguna configuración.
* Actualizó un dispositivo.

Si existe un cambio reciente, tenerlo en cuenta como posible causa.

---

# 22. Si se realiza un cambio técnico

Nunca registrar solamente:

> "Se modificó configuración."

Registrar siempre:

### Equipo

Qué equipo fue modificado.

### Parámetro

Qué se modificó.

### Antes

Valor anterior.

### Después

Valor nuevo.

### Motivo

Por qué se realizó el cambio.

### Resultado

Qué ocurrió después.

### Validación

Cómo se comprobó que el cambio funcionó.

Ejemplo:

> Se modifica configuración DNS del router debido a fallas de resolución. Luego del cambio se verifica resolución correcta y navegación en diferentes sitios.

---

# 23. Si se solicita una foto o evidencia

Registrar:

1. Qué evidencia se pidió.
2. Qué mostró el cliente.
3. Qué se observó.
4. Qué decisión permitió tomar.
5. Resultado de la acción posterior.

Si el cliente no puede enviar la evidencia, registrar el motivo.

---

# 24. ¿Cuándo derivar?

Derivar cuando:

* Existe LOS o una condición óptica anormal.
* La ONU presenta problemas.
* El router no responde.
* Existe una falla física.
* Existe un problema de cableado.
* Existe un problema de puerto.
* El problema continúa después de realizar las pruebas correspondientes.
* Existe una configuración que no puede resolverse remotamente.
* Se requiere revisión en domicilio.
* Se detecta una falla posterior al cambio de equipo.

---

# 25. Cómo realizar la derivación

La persona que recibe la derivación debe poder entender el problema **sin volver a preguntarle al cliente todo desde cero**.

Registrar:

### Problema

Qué sucede.

### Alcance

A qué dispositivos afecta.

### Pruebas

Qué se verificó.

### Resultado

Qué dio cada prueba.

### Evidencia

Qué información se obtuvo.

### Equipos

Qué equipos están involucrados.

### Cambios

Qué se modificó.

### Motivo de derivación

Por qué no pudo resolverse remotamente.

---

# 26. Validación antes de cerrar

Nunca cerrar el reclamo solamente porque:

* El Wi-Fi aparece conectado.
* El dispositivo obtuvo IP.
* El router aparece conectado.
* El equipo responde remotamente.

Hay que comprobar la navegación.

Pedir al cliente:

> "Por favor, abra nuevamente el navegador e ingrese a una página."

Confirmar:

* La página carga.
* La navegación funciona.
* El servicio afectado funciona, si corresponde.

---

# 27. Registro final

Utilizar el siguiente orden:

**Problema informado**

¿Qué dijo el cliente?

↓

**Alcance**

¿A cuántos dispositivos afecta?

↓

**Pruebas realizadas**

¿Qué se verificó?

↓

**Resultados**

¿Qué dio cada prueba?

↓

**Problema identificado**

¿Qué se determinó?

↓

**Acción realizada**

¿Qué se hizo?

↓

**Validación**

¿Cómo se comprobó que funcionó?

↓

**Cierre o derivación**

¿Se solucionó o necesita otra intervención?

---

# Regla principal

> **No asumir. Verificar.**

No concluir que existe un problema de Wi-Fi solamente porque el cliente dice "no tengo Internet".

Primero determinar:

**¿El dispositivo se conecta al Wi-Fi?**

↓

**¿Obtiene IP?**

↓

**¿El router tiene servicio?**

↓

**¿Existe conectividad?**

↓

**¿Funciona DNS?**

↓

**¿Puede navegar?**

↓

**¿El problema ocurre en uno o varios dispositivos?**

↓

**¿Se solucionó después de la acción realizada?**

El diagnóstico final debe basarse siempre en **pruebas y resultados registrados**, no solamente en lo informado por el cliente.
