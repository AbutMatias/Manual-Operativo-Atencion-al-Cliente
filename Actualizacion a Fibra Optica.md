# Proceso paso a paso – Actualización a Fibra Óptica (AF)

---

## PASO 1: Verificar cobertura de Fibra Óptica

1. Abrir el mapa de Eternet en Google Earth:
   - https://eternet.sharepoint.com/:u:/s/Mapas/EbHEZxIe-KBPrOz7dPM9pKwBcok3Mo1uehi-rJPpb9V_KA?e=pXfFqf&download=1

2. Verificar si el domicilio del cliente está dentro de la cobertura FO.

3. Si está dentro de cobertura:
   - Se debe iniciar **Actualización a Fibra Óptica (AF)**.

---

## PASO 2: Cargar reclamo + AF en paralelo

1. Crear reclamo en SSAK.
2. Crear issue de AF en GitHub:
   - hhttps://github.com/Eternet/Coordinacion/issues/new?assignees=lef1954&labels=Actualización+a+FO&template=nueva-actualizacion-FO.yml&title=Cliente+%23XXX+-+Razon+Social+-+Actualización+a+FO

3. Definir prioridad según el caso.

Importante:
- Las AF provenientes de reclamo son **sin costo**.
<img width="752" height="506" alt="image" src="https://github.com/user-attachments/assets/3c8777e3-66ea-47aa-b39e-5400829e8547" />

---

## PASO 3: Definir escenario operativo

### Caso normal
- Cargar:
  - Reclamo en SSAK
  - AF en GitHub

### Caso saturación / emergencia
- Cargar reclamo detallado en SSAK
- Generar issue AF con prioridad en GitHub

---

## PASO 4: Recolección de datos del cliente

Antes de avanzar, reunir:

- Número de cliente  
- Link del issue  
- Horarios de disponibilidad  
- Número de contacto  
- Abono contratado  
- Localidad  
- Domicilio de instalación  
- Coordenadas  

---

## PASO 5: Obtener geolocalización

Opciones:

- Desde IP pública → “Ver geolocalización del servicio”
- Desde sistema:
  - Clientes → Servicios → Ver geolocalización

Guardar coordenadas para Google Earth.

---

## PASO 6: Ingresar a Asistente de instalaciones

1. Ir a:
   - `Instalaciones`
   - `Asistente de instalaciones`

2. Abrir **Nueva instalación**
<img width="1248" height="530" alt="image" src="https://github.com/user-attachments/assets/2a9d7d21-2182-4939-80b8-f22a7d17b8cc" />

---

## PASO 7: Cargar datos iniciales

Completar:

- Localidad
- Tipo de instalación: **Actualización a FUTURA**
- Obtener usuario:
  - Buscar cliente por número o razón social
  - Doble clic en el servicio correcto
<img width="1701" height="639" alt="image" src="https://github.com/user-attachments/assets/6cfcf1fa-659d-4833-a23f-28a29e071378" />

---

## PASO 8: Recuperación de equipos

1. Se abre ventana automática.
2. Seleccionar:
   - ✔ “Autoriza a retirar aunque se encuentre ausente”
3. Cerrar vista previa.
<img width="1133" height="476" alt="image" src="https://github.com/user-attachments/assets/5d466a1c-3ea4-4f44-990d-5c6f0dfa9bb7" />

---

## PASO 9: Configuración de instalación

Completar:

- Cargo de instalación: **Actualización a FUTURA**
- Marcar: **Sujeto a bonificación**
- Tarifa: abono equivalente o superior

IMPORTANTE:
- Siempre debe quedar marcado “Sujeto a bonificación”.
<img width="781" height="467" alt="image" src="https://github.com/user-attachments/assets/694df181-3af2-4753-be8d-5164d41123e9" />

---

## PASO 10: Datos finales

Completar:

- Latitud y longitud
- Observaciones comerciales:
  - “100% bonificado por reclamo” (o según corresponda)
- Observaciones técnicas:
  - Link del issue de GitHub
- Activar:
  - Notificar vía texto
- Horarios de disponibilidad
<img width="782" height="471" alt="image" src="https://github.com/user-attachments/assets/9492e4e2-6b71-41b4-896e-2792f8a653a4" />

---

## PASO 11: Bonificación de la instalación

1. Ir a:
   - Atención al Cliente
2. Buscar cliente
3. Click en **Ver detalles**
4. Click derecho en IP → **Ver instalaciones del equipo**

---

## PASO 12: Seleccionar instalación

1. Ubicar instalación en estado:
   - “A ventas”
2. Click derecho:
   - “Bonificaciones en cargos de instalación y/o abonos”

---

## PASO 13: Tipos de bonificación

### 100% bonificada
- Anticipo: 0
- Cargo final: 0

### 50% bonificada
- Anticipo parcial
- Cargo final reducido

### Sin bonificación
- Se cobra instalación completa


---

## IMPORTANTE FINAL

- El **anticipo siempre debe quedar en 0**
- Si no es 100% bonificada:
  - Cambiar estado manualmente a **“Sin iniciar”**
  - Agregar nota:
    - “abona luego de la instalación”
<img width="445" height="317" alt="image" src="https://github.com/user-attachments/assets/8c577276-1888-4f43-8681-97e2947f7229" />
> [!IMPORTANT]   
> `El anticipo`, es lo que le cobro al cliente antes de que la tarea pase a sin iniciar por eso `siempre tiene que quedar en 0`. `El nuevo cargo de instalación` es lo que se factura cuando la instalación se finaliza exitosamente, ahí es donde me debe quedar `el importe que le quiero cobrar.` 
>
> Si no se la bonifico al 100% voy a tener que pasarla manualmente a sin iniciar. Tienen que pararse sobre la instalación y elegir la opción `cambiar estado de instalación` seleccionan sin iniciar y ponen una nota que diga `abona luego de la instalación`.
