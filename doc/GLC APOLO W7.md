

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

<img width="1119" height="687" alt="image" src="https://github.com/user-attachments/assets/0121ac43-7073-40e8-b699-7c42f948a650" />


<!-- Captura del asistente inicial -->

---

## Paso 2. Configurar el acceso a Internet

Completar los siguientes campos:

- **Internet Access:** `DHCP`
- **Time Zone:** `GMT-03`

Luego seleccionar **Next**.

<img width="1124" height="602" alt="image" src="https://github.com/user-attachments/assets/7aa8e6e4-ee77-43c1-89b1-099251fa61c6" />


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

<img width="1128" height="759" alt="image" src="https://github.com/user-attachments/assets/fb71db48-12d2-472f-bcf9-c282d6b30213" />


<!-- Configuración inicial WiFi -->

<img width="389" height="194" alt="image" src="https://github.com/user-attachments/assets/8848d104-6082-4a7b-90e0-e36516e67166" />


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

<img width="1120" height="831" alt="image" src="https://github.com/user-attachments/assets/caceef6c-05b3-496d-9d3d-00fb0bacca0a" />


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

<img width="1539" height="949" alt="image" src="https://github.com/user-attachments/assets/0cfa8e2f-755e-43de-aad6-fa00c38df844" />

<!-- Menú Parameter Backup -->

---

## Paso 3

En **Restore Parameter** seleccionar el archivo:

```
GLC_Apolo-WiFi6.gz
```

Luego hacer clic en **Restore**.

<img width="1607" height="627" alt="image" src="https://github.com/user-attachments/assets/ca11d2bd-4929-4aca-b12c-222c481dee7e" />


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

<img width="1125" height="822" alt="image" src="https://github.com/user-attachments/assets/7daf32d2-e9aa-47b9-be6f-cf097e331645" />


<!-- Login luego de importar configuración -->

---

# 4. Configurar la red Wi-Fi

Modificar:

- Nombre de la red (SSID).
- Contraseña Wi-Fi.

Verificar que ambas bandas Wi-Fi utilicen la misma configuración.

<img width="1119" height="730" alt="image" src="https://github.com/user-attachments/assets/37e725bf-1baa-4538-b92e-68838392adb4" />


<!-- Configuración WiFi -->

<img width="1109" height="808" alt="image" src="https://github.com/user-attachments/assets/f4b612de-8b87-4333-bae7-7285e5b959a2" />


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
