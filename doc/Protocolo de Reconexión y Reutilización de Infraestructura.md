# Protocolo de Reconexión y Reutilización de Infraestructura

---

## Premisas generales

### 1. Período de reconexión sin retiro de infraestructura

- Una vez solicitada la baja del servicio, la infraestructura y los equipos del cliente permanecen en el domicilio por un período de **45 días**.
- Durante este período, el cliente puede solicitar la reconexión del servicio.
- El equipo comercial debe gestionar activamente la posibilidad de reconexión.

**Excepción:**
- Si el cliente devuelve voluntariamente los equipos, el proceso de baja se da por finalizado inmediatamente. 
---

### 2. Gestión de retiro de equipos

- Pasados los 45 días, los equipos deben retirarse dentro de los siguientes **30 días**.
- La infraestructura puede ser reutilizada para nuevos clientes según las buenas prácticas técnicas.

---

### 3. Reconexiones posteriores al período de retiro

- Si el cliente solicita reconexión luego de los 45 días:
  - Se considera una **nueva instalación**
  - Aplica la política de costos vigente en ese momento y localidad

---

> [!IMPORTANT]
> Si los equipos permanecen en el domicilio y el cliente solicita reconexión, se debe completar [el formulario correspondiente](https://github.com/Eternet/Comercial/issues/new?template=Reconexion.yml), ya que no se puede generar una nueva instalación sobre infraestructura existente asignada.

---

## Detalles operativos

Durante los primeros 45 días se utiliza un formulario específico para gestionar reconexiones:

- [Formulario de reconexión](https://github.com/Eternet/Comercial/issues/new?assignees=&labels=Reconexi%C3%B3n&projects=&template=Reconexion.yml&title=Cliente+%23+XXX+-+Razon+Social+-+Reconexi%C3%B3n) (GitHub Issues)

---

## 1. Recepción del pedido de reconexión

- El área Comercial recibe la solicitud.
- Se genera factura con cargo de reconexión.
- Vencimiento: **72 horas hábiles**.

> [!NOTE]
> El servicio no se activa hasta que el pago esté confirmado.

---

### Acciones desde Comercial

- Verificar el pago del cliente antes de proceder.
- Confirmar si el cliente tiene equipos conectados a energía.

#### Si el cliente cumple condiciones:

- Se deriva a Atención al Cliente para verificación remota del servicio.
- Se solicita disponibilidad de contacto en caso de ser necesario.

#### Si el cliente no cumple condiciones:

- Se indica que debe contactar nuevamente cuando tenga condiciones para verificación.
- El issue se cierra con observación correspondiente.

#### Caso especial (zonas balnearias con baja previa):

- La reconexión se realiza exclusivamente con facturación **ANUAL**, sin excepciones.

---

## 2. Revisión de Atención al Cliente

- Se realiza verificación remota del servicio.

### Resultados posibles:

#### Servicio funcionando

- Se documenta la verificación en el issue.
- Se cierra el caso.

#### Servicio con problemas

- Se contacta al cliente.
- Si se resuelve: se documenta y se cierra.
- Si no se resuelve: se deriva a visita técnica.

---

## Labels del proceso

- `Pendiente de pago`: el issue permanece en Comercial.
- `Revisión ATCliente`: se transfiere a Atención al Cliente.
- `Reconexión con visita`: se deriva a Redes para visita técnica.

---

## Infraestructura posterior a los 45 días

Antes de una nueva instalación se debe verificar:

- Si la infraestructura fue retirada.
- Si es reutilizable.
- Si cumple estándares técnicos.

Esto evita visitas innecesarias.

---

## 3. Reutilización de infraestructura

- Si la infraestructura se reutiliza para otro cliente:
  - Debe estar en condiciones óptimas.
  - Debe cumplir estándares de calidad establecidos.
- ![image](https://github.com/user-attachments/assets/af522a96-be99-4c45-803d-a8d9d3aca2af)
---

## Notas importantes

- Es fundamental la coordinación entre:
  - Atención al Cliente
  - Comercial
  - Equipo técnico

El objetivo es minimizar costos operativos y optimizar la reutilización de infraestructura.
