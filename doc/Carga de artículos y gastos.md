# 📦 Carga de artículos y gastos

---

## 🧭 1. Carga de artículos

![Pantalla carga artículos](https://user-images.githubusercontent.com/102156800/167452574-53df5a68-3372-4981-8495-f5184c9e878d.png)

---

## ⚠️ Puntos importantes de esta pantalla

### 📌 Artículo perteneciente a

- Es una **clasificación por tipo de venta**
- Se visualiza en **Detalle Facturados**
- Determina la **cuenta contable de ventas asociada**

👉 Es obligatorio agrupar correctamente cada artículo según su categoría.
<img width="653" height="674" alt="image" src="https://github.com/user-attachments/assets/ccc57563-e4ee-42fc-b9e7-2fd73d41f543" />

📍 En el pie de la imagen se observa la relación:

- Tipo de servicio → Artículo perteneciente a → Cuenta contable de ventas

---

### 💰 Precio venta

- Es el valor final utilizado en la **facturación de artículos/servicios**

---

### 📊 Tipo de retención de ganancias

- Seleccionar correctamente:
  - Productos
  - Servicios

---

### 🧾 Tipo de gasto / compra

- Debe completarse según el tipo de adquisición

---

## 📂 Clasificación de tipos de gasto / compra

---

### 🟦 BIENES DE CAMBIO



#### 📡 FIBRA ÓPTICA Y WIRELESS
- Compra Fibra óptica
- Compra Equipos Wireless

---

#### 🔌 OTROS ACCESORIOS EXTERNOS
- Dispositivos de red
- Almacenamiento externo
- Fuentes de alimentación externas
- Cables
- UPS
- Coolers
- Video vigilancia
- Adaptadores

---

#### 🌐 ACCESORIOS DE RED
- Accesorios para fibra óptica
- Accesorios para Wireless
- Otros accesorios de red

---

#### 💻 EQUIPOS Y PARTES DE PC
- Motherboard
- Procesador
- Fuente interna
- Almacenamiento interno
- Memoria RAM
- Monitor
- Gabinete
- Placa de video
- Impresoras

---

#### 📱 TELÉFONOS Y ACCESORIOS
- Teléfonos
- Accesorios de teléfono


---

### 🏗️ BIENES DE USO



- Inmuebles
- Terreno
- Obra parque industrial
- Obra parque industrial DT
- Obra parque industrial AK
- Compra rodados

---

#### 🗼 TORRES Y ESTRUCTURAS
- Compra de torres
- Shelters
- Accesorios significativos

---

#### 🖥️ SERVIDORES
- Servidores
- Racks
- Accesorios de servidores

---

#### 🪑 OTROS MUEBLES Y ÚTILES
- Muebles y útiles

---

#### 🔧 MAQUINARIAS Y HERRAMIENTAS
- Máquinas y herramientas

---

#### 💾 SOFTWARE
- Compra de software



---

## 📌 PARTE ARTÍCULOS

- Se carga el **precio de compra del artículo**
- Puede variar según clasificación (ej: redes → tipo de redes)
<img width="647" height="608" alt="image" src="https://github.com/user-attachments/assets/f47e773a-71a9-49a5-bdea-dbe6f47bf461" />

---

## 🧾 Estructura general

- Todo artículo debe existir en este listado
- Se utiliza tanto para compra como venta (mismo código)
- En obras se asignan a cuentas contables específicas
- Antes de compras importantes: solicitar creación de cuenta contable

---

## 🛠️ Servicios

- Los servicios también deben cargarse como artículos
- En general no poseen cuenta contable de activo/gasto
- Se utilizan únicamente para ventas

---

## ⚠️ 2. Carga de gastos

🚫 IMPORTANTE:

- Los gastos **NO deben cargarse como artículos**
- Se gestionan desde el módulo de **Contabilidad**

✔️ Excepción:
Solo se cargan como artículos si es necesario identificarlos individualmente contra proveedor.
<img width="1171" height="629" alt="image" src="https://github.com/user-attachments/assets/da2b39a3-7fbe-4ec3-b11f-6325ac44471f" />

---

## 📦 3. Carga en pedidos / facturas de compra

### 🧾 Caso 1: Gasto directo

Ejemplo:
- Mantenimiento de rodados

✔️ Se carga como:
- Gasto sobre rodados

---

### 🧾 Caso 2: Artículo específico

Ejemplo:
- Compra de aceite en cantidad

✔️ Se carga como:
- Artículo “aceite”
- Con su cuenta contable de gasto correspondiente

---

## 🎯 Resumen

- Artículos → cuando se controla stock o se vende
- Gastos → cuando es imputación contable directa
- Obras → requieren cuentas contables específicas
