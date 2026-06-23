# Gestión de Problemas Generales o Masivos

## ¿Qué es un problema general o masivo?

Se considera un problema general o masivo cuando varios clientes comienzan a reportar el mismo inconveniente o inconvenientes similares en un período corto de tiempo.

La detección puede ser:

- Preventiva: identificada internamente antes de recibir reclamos.
- Activa: detectada a partir del ingreso de múltiples reclamos de clientes.

---

# Cómo actuar ante un problema general

## Mantener la calma

Lo primero es evitar conclusiones apresuradas.

Debemos:

1. Analizar la información disponible.
2. Intentar identificar patrones comunes.
3. Documentar cualquier dato relevante.
4. Escalar la situación rápidamente si no comprendemos el alcance del problema.

---

## Distribución de tareas

Si ingresan muchos reclamos simultáneamente:

- Una persona continúa respondiendo consultas de clientes.
- Otra persona realiza el análisis técnico e intenta identificar el origen del inconveniente.

Si no es posible realizar un diagnóstico inicial, igualmente se debe informar la situación al referente correspondiente.

---
# Comunicación con Clientes

## Información a solicitar

Realizar preguntas simples y concretas:

### Error observado

- ¿Qué mensaje de error aparece?
- ¿Qué ocurre exactamente?

### Alcance del problema 

- ¿Sucede en todos los dispositivos?
- ¿Sucede solamente en uno?

### Servicios afectados

- ¿Ocurre en todas las páginas o aplicaciones?
- ¿Cuáles funcionan?
- ¿Cuáles no funcionan?

### Datos adicionales

- Marca y modelo del dispositivo.
- Horario aproximado en que comenzó el problema.

---

# Pruebas Técnicas Recomendadas

## Verificar Hotspot

- Revisar registros de conexión.
- Confirmar si el cliente está validando correctamente.

## Si se puede ingresar al router

Realizar:

### Prueba de conectividad

- Ping a Google u otro destino externo.

### Revisión de logs

- Verificar errores o eventos recientes.

### Traceroute

- Realizar trazas hacia los destinos afectados.
- Identificar el salto donde comienza la pérdida.

---

## Comparar con otros clientes 

Buscar clientes con características similares desde NETMAP y WINBOX:

- Mismo rango de IP.
- Misma localidad.
- Mismo NOC.
- Misma tecnología de acceso.

Realizar pruebas equivalentes.

---

## Comparación externa

Siempre que sea posible:

- Probar desde otro proveedor de internet.
- Utilizar una VPN.
- Comparar resultados.

---

# Información a Recolectar

Para identificar patrones comunes registrar:

- Hora del reclamo.
- Localidad.
- Dirección IP.
- Tipo de IP (NAT o pública).
- NOC.
- Tipo de conexión.
- Tipo de router.
- Servicio afectado.
- Descripción del problema.

---

# Durante la Investigación

Mientras el problema continúa:

- Seguir atendiendo reclamos.
- Continuar recopilando información.
- Actualizar la Issue.
- Buscar patrones comunes.
- Compartir hallazgos con los sectores involucrados.

Los clientes con conocimientos técnicos pueden aportar información valiosa para el diagnóstico.

---


# Comunicación Interna

Una comunicación rápida y clara permite reducir tiempos de resolución y evitar reclamos innecesarios.

Ante cualquier duda:

- Informar.
- Escalar.
- Documentar.

No esperar a tener toda la información para reportar una situación potencialmente masiva.

---

## Creación de Issue

Todo problema general debe estar acompañado por una Issue.

La Issue debe contener:

- Descripción del problema.
- Diagnóstico preliminar.
- Alcance estimado.
- Información recopilada hasta el momento.

### Importante

La Issue debe crearse lo antes posible, incluso si todavía se dispone de poca información.

Posteriormente debe actualizarse cada vez que aparezcan nuevos datos relevantes.

- Ante caidas CUALQUIER punto en The Dude, crear Issue en: https://github.com/Eternet/Redes/issues/new?template=Issue+en+blanco.md Y arrobar/poner en copia a BackOffice Tecnico y Atencion a Clientes.

# Ejemplo Issue:
BAHIA BLANCA - hEX PoE Tanque ADP - Sin respuesta

<img width="989" height="369" alt="image" src="https://github.com/user-attachments/assets/8d4384e0-abd5-4ac6-b2ff-45e5f8bcda72" />

- Una breve explicacion de lo sucedido sumado con una captura de la situacion y se agrega Label de la localidad.
<img width="1280" height="566" alt="image" src="https://github.com/user-attachments/assets/bd68d3a9-6c39-4a35-9bc5-b5e9ad3cfdba" />


- Se verifica desde WinBox agregando captura y descripcion de lo sucedido.
  
<img width="877" height="767" alt="image" src="https://github.com/user-attachments/assets/6215f03f-e321-475b-9a96-cced040877da" />


- En este caso al ser del secto Bahia Blanca se verifica desde la web EDES para asegurar si es un corte de luz. (En este caso no lo fue) y se pone en copia a BackOffice Tecnico y Atencion a Clientes.
<img width="1044" height="519" alt="image" src="https://github.com/user-attachments/assets/4321d089-a53f-4a43-bda7-a6913af3e0c8" />

- Ejemplo desde EDES de caso que sea corte de luz en el area, figura con el tiempo de resolucion informado por EDES:
<img width="853" height="289" alt="image" src="https://github.com/user-attachments/assets/c7448cd5-7806-4efa-9882-4dcc9a1a22ca" />



---
# Creacion del Reclamo:
- Primer Cliente que ingresa con el inconveniente general, se crea Nuevo Reclamo.
<img width="1919" height="879" alt="image" src="https://github.com/user-attachments/assets/17a51fa9-b0c2-4aea-b2a0-954b5fa4968b" />
- Se agrega en descripcion el titulo del issue creado anteriormente y en sector Atencion Al Cliente.
<img width="966" height="760" alt="image" src="https://github.com/user-attachments/assets/3a115977-bb65-4aba-8850-4fdb9872d67e" />

# Para los clientes afectados con el mismo inconveniente general.

- Luego creado el primer reclamo, en la pestaña Reclamos.
<img width="1904" height="847" alt="image" src="https://github.com/user-attachments/assets/22b40b07-25a0-44db-a28d-e81011d3b271" />
- Click derecho en Abrir Consulta.
<img width="1791" height="870" alt="image" src="https://github.com/user-attachments/assets/3d8b3f85-8566-4e8c-80f9-d0a8a4e4d637" />
- Se le expandira una planilla de todos los reclamos generados hasta el momento, debemos filtrar al dia creado el reclamo, en este caso hoy.
<img width="1626" height="667" alt="image" src="https://github.com/user-attachments/assets/3348de41-bdb3-402d-9e79-9303f6322c02" />
- Una vez encontrado el reclamo creado anteriormente, click derecho **Agregar Cliente al Reclamo**
<img width="1829" height="483" alt="image" src="https://github.com/user-attachments/assets/d8a8ea91-b8eb-489a-a888-5debf28fdcc4" />
- Asi quedaria el cliente sumado al reclamo general.
---
# Creacion de mensaje general

- El mensaje es enviado a los clientes afectados
- Se crea y se aloja en el grupo de Teams de Atencion al Cliente (Para brindarselo a los compañeros). Con el mismo numero del reclamo creado en SSKA anteriormente.

<img width="929" height="259" alt="image" src="https://github.com/user-attachments/assets/e4e6a5b6-79a0-4f0f-8032-cb66970efd99" />

# Informar por WhatsApp

- Informar en grupo de Whatapp **REDES** (Conciso y agregando el link del Issue creado anteriormente). En casos de caidas de Hotspots o CRF, en grupo de **SERVIDORES** (CASO EXTREMOS).

- Ejemplo: Se informa para una resolucion de parte del sector encargado como se puede apreciar.

<img width="690" height="405" alt="image" src="https://github.com/user-attachments/assets/042aa612-f1bc-4040-9258-24705e48013d" />




---

# Importante

Cuando ocurra un problema general que no esté correctamente documentado:

- El sector involucrado deberá generar documentación nueva o mejorar la existente.
- Puede solicitar colaboración a los equipos que participaron en la resolución.
- La documentación debe quedar disponible para futuros incidentes similares.
