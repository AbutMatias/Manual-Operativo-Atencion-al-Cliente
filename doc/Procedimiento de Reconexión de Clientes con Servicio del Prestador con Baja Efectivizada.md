# Procedimiento de Reconexión de Clientes con Servicio del Prestador con Baja Efectivizada

## Condiciones Previas

### 1. Origen de la Solicitud

La solicitud de reconexión de un servicio asociado a un prestador llega mediante el formulario completado por el propio prestador.

[Formulario de solicitud](https://forms.office.com/r/VL5UTE6Yap?origin=lprLink)

---

### 2. Diferencia entre CFP y Baja Efectivizada

Una reconexión que requiere cargar una nueva instalación es aquella en la que el cliente posee una **baja efectivizada**.

Esto ocurre cuando transcurrieron **45 días desde el corte por falta de pago**.

> [!NOTE]
> Si aún no transcurrieron los 45 días desde el corte, la reconexión debe ser realizada por el área de Administración mediante el procedimiento habitual de reconexión.

---

# Procedimiento Recomendado para Reconexión

## Paso 1 - Verificar el Estado del Cliente

Confirmar que la baja se encuentra efectivamente procesada.

Ruta:

```text
Servicios
└── Listado de Bajas Pendientes y Efectuadas

```
## Paso 2 - Gestión por Parte del Prestador

El prestador debe:

- Verificar que el cliente regularice cualquier deuda pendiente.
- Solicitar formalmente una nueva instalación.
- Confirmar la instalación por sistema.
- Asignar los equipos correspondientes en caso de que continúen en el domicilio.

### Luego de confirmar la instalación
1. Confirmar la instalación en SSAK.
2. Asignar los equipos correspondientes.
3. Crear la Issue de instalación en GitHub.
4. Derivar el proceso al área correspondiente.

## Alternativa de Reconexión con Ajuste de Facturación

En caso de utilizar el proceso de reconexión convencional:

1. Esperar que el cliente abone el cargo de reconexión.
2. Confirmar el pago.
3. Realizar el ajuste correspondiente en la facturación del convenio.
Procedimiento

Ingresar a:
```
Servicios
└── Ver convenios con prestadores
```

Luego:
1. Seleccionar el prestador correspondiente.
2. Buscar al cliente por nombre y apellido.
3. Modificar el campo Ult. Mes Facturado.
4. Configurar el mes correspondiente al inicio efectivo de la reconexión.
5. Verificar que el servicio se encuentre activo.
6. Confirmar que la facturación corresponda al período correcto.

## Consideraciones Importantes

> [!IMPORTANT]
> No se recomienda realizar ajustes manuales de facturación correspondientes a períodos anteriores a la reconexión.

El sistema genera automáticamente la facturación según los períodos configurados.

> [!IMPORTANT]
> Cuando un cliente asociado a un prestador posee una baja efectivizada, el procedimiento correcto siempre será cargar una nueva instalación, evitando procesos manuales de corrección posteriores.

### Resumen
- Recibir la solicitud del prestador.
- Verificar que exista una baja efectivizada.
- Confirmar regularización de deuda.
- Gestionar una nueva instalación.
- Confirmar la instalación en SSAK.
- Asignar equipos si corresponde.
- Crear la Issue de instalación en GitHub.
- Utilizar ajustes de facturación únicamente en casos excepcionales.
