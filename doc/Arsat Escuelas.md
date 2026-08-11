# Incidencias Arsat Escuelas: recepción de reclamos o consultas

Los establecimientos educativos de gestión pública cuentan con servicio provisto mediante un convenio con **Arsat Escuelas**.

---

## Identificación del servicio

Se puede identificar que un establecimiento depende de Arsat cuando la razón social comienza con:

- `Lote`

![image](https://github.com/Eternet/Atencion.Clientes/assets/93199172/60bb5367-b00b-4494-8ec7-06781687b5e2)


---

## Flujo de atención de reclamos

```mermaid
flowchart TD
   A[Escuela]
   B(Inicia reclamo por mail o teléfono)
   C[Recepciona Arsat]
   D{¿Tiene solución?}
   E[Servicio técnico]
   F(Fin del proceso)
   G[Representante de Arsat o Claudia Arnijas]
   H[Recepciona Eternet]
   I[Redes]
   J{¿Tiene solución?}

A --> B
B --> C
C --> D
D -->|Sí| F
D -->|No| G
G --> H
H --> E
E --> J
J -->|Sí| F
J -->|No| I
I --> F
