# 📊 Procedimiento de Gestión de Tarifas

## 🧭 Contenido
1. Cambio de tarifas para clientes existentes  
2. Cambio de tarifas para nuevos clientes  
3. Exceptuar clientes alcanzados por el aumento  

---

# 1️⃣ Cambio de tarifas para clientes existentes

Este proceso permite programar una notificación a clientes existentes sobre un aumento de tarifas próximo.

## 🔧 Detalles del proceso

Dentro del sistema `SSAK47`:

`Servicios → Modificaciones de Tarifas`

<img width="1095" height="607" alt="image" src="https://github.com/user-attachments/assets/a891d06d-2440-4154-8db2-25637295cea3" />

---

### 🧾 Configuración de la modificación

Agregar la modificación para cada tarifa con los siguientes datos:

- **Localidad:** No Especificada  
- **Fecha Aviso:** Fecha en la que se notificará el aumento (Mail u otros medios)  
- **Fecha Efectiva:** Fecha en la que se aplicará el cambio en sistema  
- **Tarifa Ant. / Tarifa Nueva:** Nombre del servicio  
- **Velocidad:** 512 Kbps (por defecto)  
- **Precio Anterior:** Costo final vigente  
- **Precio Nuevo:** Costo final actualizado  

---



# 2️⃣ Cambio de tarifas para nuevos clientes

Este proceso modifica el tarifario general vigente.

## 🔧 Detalles del proceso

Dentro de `SSAK47`:

`Servicios → Tarifas Vigentes → Tarifa General`

> ⚠️ Nota: Solo usuarios con rol `ADMIN` pueden editar.

<img width="1359" height="665" alt="image" src="https://github.com/user-attachments/assets/e2258cf9-f1a9-4f36-bb24-bab9e37af348" />

---

### 💲 Actualización de precios

- **Precio 1:** Nuevo costo base  
- **Precio 2:** Nuevo costo + ajuste por bonificación (aprox. $200 adicionales al Precio 1)  


---

# 3️⃣ Exceptuar clientes del aumento

Este proceso permite excluir clientes específicos del aumento de tarifas.

## 🔧 Detalles del proceso

Dentro del sistema `SSAK47`:

`Servicios → Notificación de Cambio de Tarifas`
<img width="1366" height="716" alt="image" src="https://github.com/user-attachments/assets/be989a0d-e95b-4617-9683-379908abaf28" />

---

### 🧾 Pasos

1. Filtrar por columna **FECHA ALTA**  
2. Seleccionar los servicios a exceptuar  
3. Hacer clic derecho sobre el listado

<img width="361" height="209" alt="image" src="https://github.com/user-attachments/assets/1b53c0c3-2afb-408c-b5f9-91e6fb032719" />

4. Aplicar la excepción correspondiente  

---

## ⚠️ IMPORTANTE

Antes de ejecutar el proceso, verificar:

`Ventas → Listado de Fechas de Facturación y CPF`

✔ Revisar fechas de facturación en el sistema SSAK47 antes de aplicar cambios.
