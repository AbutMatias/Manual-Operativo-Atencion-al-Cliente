### **Introducción**

A diferencia de otros equipos, los modelos de iPhone 16, 16 Pro, 16 Plus, 16 Pro Max, 17, 17 Pro y 17 Pro Max requieren la activación manual del APN de Movistar en el dispositivo.  

**El APN (Access Point Name) es el punto de acceso necesario para las redes 3G y 4G, imprescindible para el acceso a Internet desde el celular.**  

El cliente podrá escanear el código QR, activar su línea y usar el equipo mediante WiFi; sin embargo, **sin esta configuración manual, no tendrá acceso a las redes 3G y 4G.**

---

## **Pasos a seguir**

1. Una vez que el cliente reciba el código QR, debe contactarnos antes de realizar la instalación para ser guiado durante el proceso.  
2. Es fundamental que primero el cliente active la conexión WiFi en su dispositivo.  
3. Luego, debe escanear el código QR siguiendo las indicaciones del instructivo de Movistar. Los pasos detallados están disponibles en el siguiente enlace: [Configuración de eSIM](https://github.com/Eternet/Comercial.Movil/blob/main/doc/Procesos/Configuracion%20E-SIM.md).  
4. Con la eSIM activada, procederemos a la configuración manual del APN:  
   - Ir a **Configuración** > **Red celular** > **Red de datos celulares**.  
   - Completar los campos correspondientes en las secciones de **Punto de acceso** y **MMS**.  
   - **Nota**: La configuración de LTE es opcional.  
5. Comparto una imagen de referencia para que se visualice cómo debe quedar configurado:  

<details><summary>Configuración eSIM Movistar</summary>
<p>

![Configuración eSIM Movistar](https://github.com/user-attachments/assets/bccb54f7-3f18-4a0c-ae82-ed9207a1f877)

</p>
</details>

---

## **Datos de configuración para el cliente**

### **Datos móviles**  
- **Punto de acceso**: `internet.gprs.unifon.com.ar`  
- **Nombre de usuario**: `internet`  
- **Contraseña**: `internet`  

### **Configuración LTE** (opcional)  
- Dejar los campos vacíos.  

### **MMS**  
- **Punto de acceso**: `mms.gprs.unifon.com.ar`  
- **Nombre de usuario**: `mms`  
- **Contraseña**: `mms`  
- **MMSC**: `http://mms.movistar.com.ar`  
- **Proxy MMS**: `200.68.32.239:8080`  
- **Tamaño máximo de MMS**: `1048576`

---
### **Referencias de Archivos MOVISTAR - GUIA** 
- <img width="543" height="813" alt="image" src="https://github.com/user-attachments/assets/8eab9763-3580-4abf-8ad2-52a388bc3dbb" />


---

### **Finalización**  

Una vez completada la configuración manual:  
1. Reiniciar el equipo.  
2. Apagar la conexión WiFi.  
3. Verificar que el dispositivo levante señal de 3G o 4G. Esto confirmará que el APN ha sido configurado correctamente.  
