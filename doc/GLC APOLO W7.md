

# Características generales

## Conectividad

- 1 Puerto **WAN** 10/100/1000 Mbps
- 3 Puertos **LAN** 10/100/1000 Mbps

## Dirección IP de fábrica

- `192.168.1.254`

---

# 1. Configuración inicial

> [!NOTE]
> Para ingresar al router, la computadora debe estar conectada por cable y cumplir una de estas condiciones:
>
> - Tener una IP del rango `192.168.1.x`.
> - Estar configurada en **DHCP**, para que el router asigne una IP automáticamente.

## Paso 1. Ingresar al router

1. Abrir un navegador.
2. Ingresar a:

```
http://192.168.1.254
```

3. Se abrirá el asistente de configuración inicial.

<img width="1119" height="687" alt="image" src="./imagenes/5a5a43dc-5305-439c-ba95-778779753824.png" />


<!-- Captura del asistente inicial -->

---

## Paso 2. Configurar el acceso a Internet

Completar los siguientes campos:

- **Internet Access:** `DHCP`
- **Time Zone:** `GMT-03`

Luego seleccionar **Next**.

<img width="1124" height="602" alt="image" src="./imagenes/5a886964-b0d2-4ca7-b938-fb192580457a.png" />


<!-- Configuración Broadband Access -->

---

## Paso 3. Configurar una contraseña temporal

Crear una contraseña para continuar con la configuración.

Se recomienda utilizar temporalmente:

```
12345678
```

en el campo **Wireless Password**.

Esperar aproximadamente **15 segundos** hasta que el equipo guarde la configuración.

<img width="1128" height="759" alt="image" src="./imagenes/5bbc8b29-b9cf-449a-8f97-05072555f1a0.png" />


<!-- Configuración inicial WiFi -->

<img width="389" height="194" alt="image" src="./imagenes/5d466a1c-3ea4-4f44-990d-5c6f0dfa9bb7.png" />


<!-- Pantalla de guardado -->

---

## Paso 4. Iniciar sesión

Una vez finalizado el asistente, ingresar nuevamente.

**Dirección**

```
http://192.168.1.254
```

**Usuario**

```
useradmin
```

**Contraseña**

La creada en el paso anterior.

<img width="1120" height="831" alt="image" src="./imagenes/5d4c1c04-f78a-4319-9032-fabf78088aaa.png" />


<!-- Pantalla de inicio de sesión -->

---

# 2. Importar la configuración

## Paso 1

Descargar el archivo de configuración:  

[**GLC_Apolo-WiFi6.gz**](https://eternet.sharepoint.com/:u:/s/ServicioTecnico/IQC_P2XWGuKnT5HznQSYsTvsAc2kny1TlMMVEYBX-JKdaCI?e=1CqVpL)

---

## Paso 2

Ingresar a:

**Tools → Parameter Backup**

<img width="1539" height="949" alt="image" src="./imagenes/5f1aff9a-6328-4411-9774-8995cfdcc6c3.png" />

<!-- Menú Parameter Backup -->

---

## Paso 3

En **Restore Parameter** seleccionar el archivo:

```
GLC_Apolo-WiFi6.gz
```

Luego hacer clic en **Restore**.

<img width="1607" height="627" alt="image" src="./imagenes/5f401ea8-0214-4d35-81a0-75a3b5409eec.png" />


<!-- Restaurar configuración -->

---

# 3. Ingresar nuevamente

Después de restaurar la configuración, ingresar utilizando:

```
http://192.168.1.1
```

### Usuario

```
useradmin
```

### Contraseña

```
Etnrouter2022
```

<img width="1125" height="822" alt="image" src="./imagenes/60361ab9-66d6-4858-911f-3ae71f533bda.png" />


<!-- Login luego de importar configuración -->

---

# 4. Configurar la red Wi-Fi

Modificar:

- Nombre de la red (SSID).
- Contraseña Wi-Fi.

Verificar que ambas bandas Wi-Fi utilicen la misma configuración.

<img width="1119" height="730" alt="image" src="./imagenes/6059924a-86df-4942-a214-46f3d75e4433.png" />


<!-- Configuración WiFi -->

<img width="1109" height="808" alt="image" src="./imagenes/60a2ce54-0ef1-4980-b1d6-e28e827b767e.png" />


<!-- Configuración SSID -->

---

# 5. Verificar funcionamiento

Comprobar:

- Navegación por Internet.
- Funcionamiento de la red Wi-Fi.
- Conexión desde un dispositivo.

---

# 6. Acceso remoto

Para acceder remotamente al router utilizar:

**Dirección**

```
http://IP_DEL_CLIENTE:5580/
```

**Usuario**

```
useradmin
```

**Contraseña**

```
Etnrouter2022
```

> **Ejemplo**
>
> ```
> http://181.224.123.123:5580/
> ```

> [!NOTE]
> Reemplazar **IP_DEL_CLIENTE** por la IP pública del cliente.

---

# Credenciales finales

| Parámetro | Valor |
|-----------|-------|
| IP local | `192.168.1.1` |
| Acceso remoto | `http://IP_DEL_CLIENTE:5580/` |
| Usuario | `useradmin` |
| Contraseña | `Etnrouter2022` |
`http://181.224.123.123:5580`
