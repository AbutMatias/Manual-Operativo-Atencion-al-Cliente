# 📦 Alta de equipo individualizado como artículo en SSAK

---

## 🧭 Descripción

Además de los lineamientos generales para la creación de artículos establecidos en:

👉 [Carga de Artículos y Gastos](https://github.com/AbutMatias/Manual-Operativo-Atencion-al-Cliente/blob/main/doc/Carga%20de%20artículos%20y%20gastos.md)

Cuando el artículo es **individualizado (con MAC)**, se deben seguir los pasos adicionales detallados a continuación.

---

# ⚙️ Proceso de alta de equipo individualizado

---

## 1️⃣ Alta de Tipo de Equipo en Redes

Se debe crear el **Tipo de Equipo** en el área de Redes con la nomenclatura correspondiente.

- Responsable: **@Eternet/redes**
- Objetivo: identificar el equipo dentro del sistema de inventario y redes

---

## 2️⃣ Alta del artículo en SSAK

Una vez creado el Tipo de Equipo:

- Se da de alta el artículo en SSAK
- Se lo debe **relacionar con el Tipo de Equipo creado en Redes**

- Responsable: **@Eternet/compras-y-logistica**

---

## 3️⃣ Incorporación para equipos Host

En caso de tratarse de un **equipo Host**:

- Se debe agregar como un nuevo tipo de equipo disponible para internas
- Esto habilita su uso dentro de la operación técnica

- Responsable: **@Eternet/servicio-tecnico**

---

## 🖼️ Referencia visual

![Flujo alta artículo individualizado](https://user-images.githubusercontent.com/87478049/177173139-8825b574-77c7-4d41-ba30-65296f98cb48.png)

---

# ✅ Finalización del proceso

Una vez completados los pasos anteriores:

- El artículo queda habilitado para su uso en el sistema
- Se debe confirmar el alta haciendo clic en el **✔️ Check de “Mantenimiento de Artículos y Servicios”**

---

## ⚠️ Importante

- Sin el **Tipo de Equipo en Redes**, el artículo no puede ser correctamente individualizado
- La correcta vinculación entre SSAK y Redes es obligatoria para trazabilidad de MACs
- Cualquier error en esta relación afecta inventario y asignación de equipos

---

# Proceso para configurar articulos como "Individualizados" o "No individualizados"

## Dentro del sistema, ingresamos en:

- 1 - "Artículos"
- 2 - "Listado de..."

Y aparecera la siguiente pantalla:

![image](https://user-images.githubusercontent.com/98965666/232822111-32c5cebd-e091-4fee-ad24-14c0f6860a1b.png)

## Continuamos buscando el artículo el cual necesitamos modificar:

![image](https://user-images.githubusercontent.com/98965666/232822617-f040ed9d-c54a-4f22-a671-1f4ce1446743.png)

### continuamos haciendo doble click sobre la descripción del artículo y aparecerá la siguiente pantalla:

![image](https://user-images.githubusercontent.com/98965666/232823441-de7fa58c-f4df-49c8-b40e-cb87e87fb32a.png)

## A continuación hacemos click derecho en cualquier parte de la pantalla y seleccionamos "configurar Artículo con stock Individualizado" o "Configurar Artículo con stock no Individualizado" según necesitemos:

![image](https://user-images.githubusercontent.com/98965666/232824464-df1f20da-a0f5-420b-9892-779979b6aee1.png)

## En caso que la opción seleccionada sea "Configurar Artículo con stock Individualizado" aparecerá la siguiente pantalla:

![image](https://user-images.githubusercontent.com/98965666/232825218-d90a688b-9039-4301-8469-cf49788ae5c5.png)

## Campos a Completar:

- `Tipo de Equipo`:
   - Routers Cliente y Repetidores: Si es un equipo Host.
   - Equipos No Host: Si es un equipo no host.
   - Otros (Sin Mac): Si queremos individualizar un artículo que no posee MAC.
 - `Sitio`:
   - Sitio donde se encuentra el artículo el cual queremos modificar.
- `Almacén`
   - Almacén del sitio al cual corresponde el artículo que queremos modificar.

### De este modo, un artículo cargado correctamente quedaría de la siguiente forma:

![image](https://user-images.githubusercontent.com/98965666/232833613-9473dab1-1c67-465b-b7f2-a0c6935b34ed.png)

## Una vez completados los campos damos click en aceptar para completar la operación:

![image](https://user-images.githubusercontent.com/98965666/232833964-42e90891-ef9f-4992-9b97-4057c1b805cd.png)

## En caso de que seleccionemos la opción "Configurar Artículo con Stock no Individualizado" aparecerá el siguiente mensaje:

![image](https://user-images.githubusercontent.com/98965666/232824909-76ba86e2-2b29-4f21-afae-3d11c11a796e.png)

### A continuación damos click en "Yes" para finalizar la operación

![image](https://user-images.githubusercontent.com/98965666/232845051-26eed565-8019-440b-9243-39a308ebcacd.png)
