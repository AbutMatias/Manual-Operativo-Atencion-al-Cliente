# Sin conexión en dispositivo puntual

## ¿Cuándo utilizar este diagnóstico?

Utilizar este diagnóstico cuando **un dispositivo puntual no tiene conexión**, pero el servicio general del cliente funciona correctamente.

Ejemplos:

- Una PC no tiene Internet.
- Un celular no conecta al Wi-Fi.
- Una Smart TV no tiene conexión.
- Un equipo funciona por cable, pero no por Wi-Fi.
- Un repetidor/extensor presenta problemas.
- Un router particular del cliente presenta inconvenientes.

> **Importante:** si el problema afecta a todos o a la mayoría de los dispositivos, NO utilizar este diagnóstico. Se debe continuar con el diagnóstico correspondiente al servicio general.

---

# PASO 1 — Identificar qué está fallando

Antes de realizar cualquier prueba, preguntar:

**¿Qué dispositivo no tiene conexión?**

Registrar:

- Dispositivo: PC, celular, Smart TV, etc.
- Marca y modelo, si está disponible.
- Ubicación aproximada.
- Desde cuándo ocurre.
- Si ocurre siempre o de manera intermitente.

Luego preguntar:

**¿Hay otros dispositivos que sí tienen Internet?**

### Si otros dispositivos funcionan

Continuar con este diagnóstico.

### Si ningún dispositivo funciona

Detener este diagnóstico y continuar con el diagnóstico correspondiente al **servicio general**.

---

# PASO 2 — Identificar cómo está conectado

Determinar si el dispositivo utiliza:

- Wi-Fi.
- Cable de red.
- Extensor/repetidor.
- Router particular.

Registrar qué tipo de conexión utiliza.

## Si utiliza Wi-Fi

Preguntar:

- ¿A qué red Wi-Fi está conectado?
- ¿Utiliza 2.4 GHz o 5 GHz?
- ¿Está cerca o lejos del router?

## Si utiliza cable

Preguntar:

- ¿El cable está conectado correctamente?
- ¿Qué equipo está conectado?
- ¿Se puede probar otro cable o puerto?

---

# PASO 3 — Confirmar que el servicio general funciona

Antes de atribuir la falla al dispositivo, verificar que el servicio llegue correctamente al router.

Desde las herramientas disponibles, revisar:

1. Estado de la WAN.
2. Uptime del router.
3. Estado de las interfaces.
4. Errores en las interfaces.
5. Drops y CRC, si están disponibles.
6. Velocidad negociada del puerto.
7. Pérdidas o inestabilidad.
8. Uso excesivo de CPU o memoria.

## Registrar el resultado

No escribir solamente:

> "Se revisó y está bien."

Especificar qué se comprobó.

**Ejemplo:**

> Se verifica servicio general operativo y conectividad hasta router host. No se observan pérdidas ni errores relevantes en interfaces.

---

# PASO 4 — Revisar el dispositivo dentro de la red

Buscar el dispositivo afectado en la información disponible del router.

Revisar, cuando corresponda:

- IP asignada.
- MAC.
- Hostname.
- Si aparece conectado.
- Tiempo conectado.
- Señal Wi-Fi.
- Calidad del enlace.
- TX/RX.
- Puerto utilizado, si es cableado.

## Pregunta principal

**¿El router ve al dispositivo?**

### Si el router lo ve

Continuar con las pruebas específicas del dispositivo.

### Si el router NO lo ve

Revisar:

- Wi-Fi.
- Cableado.
- Adaptador de red.
- Extensor/repetidor.
- Equipo particular del cliente.

---

# PASO 5 — Realizar la prueba según el dispositivo

## 5.1 — Conexión Wi-Fi

Realizar las siguientes pruebas en orden:

### 1. Verificar que vea la red

Preguntar:

> ¿El dispositivo puede ver el nombre de la red Wi-Fi?

### 2. Verificar la red utilizada

Confirmar:

- Nombre de la red.
- Banda utilizada: 2.4 GHz o 5 GHz.
- Que la contraseña sea correcta.

### 3. Acercar el dispositivo al router

Solicitar al cliente que acerque el dispositivo al router y vuelva a probar.

**Objetivo:** comprobar si el problema está relacionado con la distancia o la señal.

### 4. Probar otra banda

Si corresponde, probar:

- 2.4 GHz.
- 5 GHz.

Registrar el resultado.

### 5. Probar otro dispositivo

Probar otro celular, PC o equipo en el mismo lugar.

### Resultado

Registrar qué prueba se realizó y qué ocurrió.

---

# PASO 6 — Conexión cableada

Realizar las pruebas en este orden:

### 1. Revisar el cable

Verificar que:

- Esté correctamente conectado.
- No presente daños visibles.
- Los conectores estén correctamente colocados.

### 2. Cambiar el puerto

Probar otro puerto Ethernet disponible.

### 3. Cambiar el cable

Si es posible, utilizar otro cable de red.

### 4. Probar otro dispositivo

Conectar otro equipo utilizando el mismo cable y puerto.

### Resultado

Registrar exactamente qué prueba permitió identificar el problema.

---

# PASO 7 — PC o notebook

Además de las pruebas anteriores:

1. Verificar que el adaptador de red esté habilitado.
2. Desconectar y volver a conectar el Wi-Fi.
3. Reiniciar el equipo.
4. Verificar que el adaptador sea compatible con la banda utilizada.
5. Revisar el controlador de red cuando corresponda.

> No indicar acciones avanzadas si no son necesarias.

---

# PASO 8 — Celular o tablet

Realizar:

1. Verificar que vea la red.
2. Confirmar que esté conectado a la red correcta.
3. Olvidar la red.
4. Volver a ingresar la contraseña.
5. Acercarse al router.
6. Probar nuevamente.
7. Comparar con otro dispositivo en el mismo lugar.

Registrar el resultado.

---

# PASO 9 — Smart TV

Realizar:

1. Verificar la red seleccionada.
2. Confirmar la contraseña.
3. Reiniciar eléctricamente la TV.
4. Volver a conectar a Wi-Fi.
5. Acercar la TV al router, si es posible.
6. Probar otra banda.
7. Probar conexión por cable, si dispone de ella.

Registrar qué prueba funcionó o qué resultado se obtuvo.

---

# PASO 10 — Extensor, repetidor o router particular

Primero identificar:

**¿El equipo pertenece al cliente o fue provisto por la empresa?**

Registrar:

- Marca.
- Modelo.
- Forma de conexión.
- Estado de las luces.
- Cableado.
- Conexión con el router principal.

Luego realizar, cuando corresponda:

1. Reinicio del equipo.
2. Verificación del cableado.
3. Prueba directa contra el router principal.
4. Verificación de conexión entre ambos equipos.

## Si el equipo es particular del cliente

No asumir responsabilidad sobre su configuración.

Informar claramente el alcance del soporte y registrar la orientación brindada.

---

# PASO 11 — Registrar cada prueba

Cada prueba realizada debe registrar **5 elementos**:

### 1. Acción

¿Qué se hizo?

### 2. Quién la realizó

- Cliente.
- Agente.
- Sistema/herramienta.

### 3. Evidencia

¿Qué demuestra la prueba?

- Captura.
- Foto.
- Comando.
- Medición.
- Observación.

### 4. Resultado

¿Qué ocurrió?

### 5. Próximo paso

¿Qué se hará después?

---

## Ejemplo

**Acción:** Se solicita conectar la PC mediante cable de red.

**Ejecutado por:** Cliente.

**Evidencia:** Captura del estado de conexión.

**Resultado:** La PC obtiene IP y navega correctamente.

**Interpretación:** Se descarta una falla general del servicio. El inconveniente queda asociado a la conexión Wi-Fi del equipo.

**Próximo paso:** Continuar diagnóstico de conexión inalámbrica.

---

# PASO 12 — Diferenciar qué sabemos

Nunca mezclar una sospecha con una causa confirmada.

Utilizar estos estados:

## Hipótesis

Posible causa que todavía no fue comprobada.

**Ejemplo:**

> Posible problema de señal Wi-Fi.

## Acción indicada

Lo que se le pidió realizar al cliente.

**Ejemplo:**

> Se solicita acercar el equipo al router.

## Acción ejecutada

Lo que realmente realizó el cliente o agente.

**Ejemplo:**

> Cliente realiza prueba a 2 metros del router.

## Resultado confirmado

Lo que ocurrió después de realizar la prueba.

**Ejemplo:**

> El equipo recupera conectividad al acercarse al router.

## Prueba pendiente

La prueba todavía no fue realizada.

## Causa confirmada

Existe evidencia suficiente para determinar el origen del inconveniente.

---

# PASO 13 — Derivación

Antes de derivar, comprobar que el registro contenga:

- Qué dispositivo falla.
- Qué síntoma presenta.
- Desde cuándo ocurre.
- Qué otros equipos funcionan.
- Tipo de conexión.
- Pruebas realizadas.
- Resultado de cada prueba.
- Evidencia disponible.
- Estado actual.
- Motivo de derivación.

## Objetivo de la derivación

La persona o sector que recibe el caso debe poder comprender:

- El síntoma.
- El alcance.
- Las pruebas realizadas.
- Los resultados.
- El estado actual.

**Sin tener que repetir validaciones que ya fueron realizadas.**

### Ejemplo de derivación

> Cliente presenta inconveniente de conectividad únicamente en Smart TV ubicada en habitación. Otros dispositivos funcionan correctamente. Se verifica servicio general operativo y conectividad hasta router host. TV conectada por Wi-Fi 5 GHz. Se realiza prueba cercana al router y reinicio eléctrico, sin recuperar conectividad. Se adjunta captura del estado de conexión. Se deriva para continuar diagnóstico del dispositivo.

---

# PASO 14 — Información mínima obligatoria

Antes de cerrar o derivar el caso, verificar:

- [ ] Dispositivo afectado.
- [ ] Marca/modelo, si está disponible.
- [ ] Wi-Fi o cable.
- [ ] SSID y banda, si corresponde.
- [ ] Ubicación aproximada.
- [ ] Síntoma.
- [ ] Desde cuándo ocurre.
- [ ] Si es constante o intermitente.
- [ ] Otros dispositivos que funcionan.
- [ ] Estado general del servicio.
- [ ] Datos técnicos relevantes.
- [ ] Pruebas realizadas.
- [ ] Evidencia.
- [ ] Resultados.
- [ ] Hipótesis o causa confirmada.
- [ ] Próximo paso.

---

# FLUJO RÁPIDO

```text
¿QUÉ DISPOSITIVO FALLA?
        ↓
¿OTROS DISPOSITIVOS TIENEN INTERNET?
        ↓
   ┌────┴────┐
   │         │
  NO        SÍ
   │         │
   ↓         ↓
Servicio   Continuar
general    diagnóstico
             ↓
      ¿CÓMO ESTÁ CONECTADO?
             ↓
   ┌─────────┼─────────┐
   │         │         │
  Wi-Fi    Cable    Repetidor/
                      Router
   │         │         │
   └─────────┼─────────┘
             ↓
   VERIFICAR SERVICIO GENERAL
             ↓
   REVISAR DISPOSITIVO EN RED
             ↓
   REALIZAR PRUEBAS ESPECÍFICAS
             ↓
   REGISTRAR EVIDENCIA Y RESULTADO
             ↓
       ¿SE RESOLVIÓ?
        ↓          ↓
       SÍ          NO
        ↓          ↓
      Cerrar    Derivar
