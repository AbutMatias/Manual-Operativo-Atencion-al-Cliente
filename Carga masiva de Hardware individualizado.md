# 📦 Carga masiva de Serial Number y MACs

---

## 🧭 Paso 1: Acceso a la API

Ingresar al siguiente endpoint de Swagger:

https://api.eternet.cc/swagger/index.html?urls.primaryName=Inventory

Dentro del panel desplegar:

- `/Inventories/Suppliers/Orders/Details/Macs`

![Swagger endpoint](https://github.com/Eternet/General/assets/87478049/84250af6-a671-4b90-aa98-3050bcfd8a43)  
![Endpoint detalle](https://github.com/Eternet/General/assets/87478049/c273b7a4-bee6-4e4d-b198-b0c2b1f0970c)

---

## 🧩 Paso 2: Identificación de campos

Se deben completar los siguientes campos:

![Campos API](https://github.com/Eternet/General/assets/87478049/403be605-3a31-416c-9388-8fda264a43b4)

---

### 📌 ID Pedido (ID DETALLE)

Para obtener el **ID Pedido**, se debe ingresar a la orden de compra en SSAK.

El campo correcto es:

- **ID DETALLE**

📍 Ubicación del campo:



![ID detalle](https://github.com/Eternet/Devs.Issues/assets/87478049/320e0c10-8370-4deb-8f37-1370dd6abef7)



---

### 📌 Consideraciones por tipo de artículo

- **Equipos de red**
  - El ID corresponde al **ID DETALLE de la orden de compra**

- **Otros artículos**
  - El campo ID puede ser el **número de serie de la etiqueta**
  - Puede ser escaneado directamente
  - El campo `SerialNumber` es opcional

---

## 🚀 Paso 3: Ejecución

1. Completar los campos requeridos  
2. Hacer clic en **EXECUTE**  
3. El proceso queda finalizado

---

# 📊 Ejemplo de importación masiva (caso Vilo)

El proveedor envía un archivo Excel con:

- Columna MAC
- Columna Serial Number

Ejemplo de archivo:

https://github.com/Eternet/Devs.Issues/files/12805155/Hoy.xlsx

---

## 🔄 Conversión de datos

1. Convertir Excel a JSON usando:

https://cdkm.com/es/xls-to-json

2. El resultado debe contener:

- MACs
- Serial Numbers

---

## 🧩 Integración en API

- Copiar los datos generados en JSON
- Asociarlos al campo correspondiente del endpoint
- Agregar el **ID DETALLE del pedido** en el cuerpo de la solicitud

---

## ⚠️ Importante

- Verificar que MAC y Serial correspondan al mismo equipo
- Validar ID de orden antes de ejecutar
- Un error en el mapeo puede afectar el stock del sistema

---
