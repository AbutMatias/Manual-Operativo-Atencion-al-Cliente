# Comisiones Mensuales – Sectores Comercial y Atención al Cliente

## Introducción

El cálculo de comisiones de los sectores Comercial y Atención al Cliente se encuentra completamente automatizado mediante Power Automate.

El proceso se ejecuta mensualmente y genera de forma automática los archivos necesarios para la liquidación de comisiones, incluyendo la obtención de variables y cotizaciones utilizadas en los cálculos.

---

## Ejecución automática

### Fecha de ejecución

El proceso se ejecuta automáticamente el día **21 de cada mes** a las **06:00 hs**.

[Flujo](https://make.powerautomate.com/environments/Default-ecd40e14-b48a-4861-9586-38cdc9ee127d/solutions/3cbbd109-84f8-ec11-82e4-0022483600c3/flows/bc527e1a-c4f2-4a41-b570-8eec5b2ca792/details) 

Durante la ejecución, el sistema:

- Obtiene la información necesaria para el cálculo.
- Actualiza automáticamente las variables configuradas.
- Obtiene la cotización del dólar utilizada en los cálculos.
- Genera el archivo de comisiones.
- Envía una notificación por correo electrónico.

---

## Recepción de la información

Una vez finalizado el proceso, se envía un correo electrónico a @FedericoBarrio con:

- [Enlace al archivo XLS](https://eternet.sharepoint.com/sites/Comisiones/) generado. 
- Listado de empleados que perciben comisiones.
- Separación por departamento.
- Listado de multiplicadores utilizados.
- Valores aplicados para el período calculado.

---

## Validación de la información

Antes de enviar la información a Recursos Humanos se debe:

1. Acceder al archivo generado.
2. Verificar que no existan errores de cálculo.
3. Confirmar que los empleados incluidos sean correctos.
4. Revisar que los multiplicadores aplicados correspondan al período.
- ![image](https://user-images.githubusercontent.com/80975356/208915264-883f052a-543f-45c7-84cc-9e6ebb62d95a.png)
---

## Envío a Recursos Humanos

Una vez validada la información:

1. Compartir el archivo mediante SharePoint.
2. Obtener el enlace con permisos de visualización.
3. Publicar el enlace en el issue de comisiones generado por RRHH.
4. Confirmar la disponibilidad de la información para su liquidación.
 ![Recording 2022-07-12 at 10 16 45](https://user-images.githubusercontent.com/63564990/178499668-f754358f-0c45-4362-84c2-a65d6e14d47b.gif)
![Recording 2022-07-12 at 10 19 32](https://user-images.githubusercontent.com/63564990/178499733-ab555ad0-1765-48bb-b408-9b0dfe6c8070.gif)
---

## Período de cálculo

Las comisiones se calculan sobre un ciclo mensual comprendido entre:

- Día 21 del mes anterior.
- Día 20 del mes actual.

Ambas fechas inclusive.

### Ejemplo

Para las comisiones abonadas en diciembre:

- Inicio del período: 21 de noviembre.
- Fin del período: 20 de diciembre.

---

## Conceptos que generan comisión

Las comisiones se calculan sobre:

- Instalaciones residenciales.
- Instalaciones corporativas.
- Upgrades residenciales.
- Upgrades corporativos.
- Servicios WiFi instalados.

Todos los conceptos deben haber sido vendidos por el colaborador correspondiente durante el período evaluado.

---

## Variables utilizadas en el cálculo

El sistema utiliza diferentes multiplicadores configurables para determinar el valor final de las comisiones.

### Multiplicadores

- Multiplicador de Upgrades Residenciales.
- Multiplicador de Upgrades Corporativos.
- Comisión por Servicio WiFi.
- Cantidad mínima de Instalaciones Residenciales.
- Comisión por Instalación Residencial.
- Comisión por Instalación Corporativa.
- Multiplicador de Instalaciones Corporativas en USD.
- Cotización USD a ARS.

---

## Objetivo del proceso

La automatización permite:

- Reducir errores manuales.
- Estandarizar los cálculos.
- Disminuir tiempos operativos.
- Garantizar transparencia en la liquidación.
- Mantener actualizadas las variables de cálculo.

---

## Consideraciones

> [!IMPORTANT]
> El proceso es completamente automático y no requiere intervención manual para su ejecución.

Solo debe verificarse la información generada antes de enviarla a RRHH.

Cualquier inconsistencia detectada debe corregirse antes de compartir el archivo final.

---

## Flujo resumido

1. El día 21 a las 06:00 hs se ejecuta el proceso automático.
2. Se calculan las comisiones del período correspondiente.
3. Se genera el archivo XLS.
4. Se envía un correo electrónico con los resultados.
5. Se valida la información generada.
6. Se comparte el archivo con RRHH.
7. RRHH utiliza la información para la liquidación de comisiones.
