# Registro de líneas móviles en sistema SSAK:

## Introducción:

Una vez que las líneas están confirmadas y ya incluidas en el corporativo de Eternet, se cargan los números en el sistema y se asignan a cada cliente.

### IMPORTANTE:

Esto lo debemos realizar antes del día 15 de cada mes, porque si se carga después, se genera una doble facturación.

# Procedimiento

Este procedimiento es manual, y consta de dos etapas:

## Etapa 1: Alta de los números de línea en el listado.

1. Ingresamos a `Servicios` > `Celulares` > `Lineas de Celulares Vigentes`, para dar de alta los números de línea.

2. En la fila `Ingrese una nueva linea` debemos completar los siguientes campos:
   - `Nro de Celular` : Ej: 2983xxxxxx
   - `Movistar` : Solo activar el casillero si la compañía es esa. (Si es Claro debe quedar sin tilde).
   - `Grupo` : 0
   - `Plan` : Normal ilimitado

3. Presionamos `Insert` o `flecha hacia abajo` para confirmar la carga.

4. Clic derecho en la pantalla, y seleccionar `grabar y actualizar`.

- ![image](https://user-images.githubusercontent.com/81191745/184220504-962e3e57-d6db-4f5d-afff-e7a2914bc781.png)

5. Cerrar la ventana para la siguiente etapa.

![Recording 2022-08-18 at 09 19 12 (1)](https://user-images.githubusercontent.com/81191745/185399426-a8d3b258-dc81-470f-a7de-4f8e133445a9.gif)

## Etapa 2: Asignar la linea en el ABM del Cliente

1. Una vez en el ABM del Cliente, ingresamos con numero de cliente, presionamos el boton "clientes" y nos dirigimos a la solapa `Celulares`.
2. Haremos la carga de datos en la fila que indica `Ingrese nuevo servicio`.

   - Los campos a completar son: 
      - `N° celular `: Ej: 2983xxxxxx
      - `Servicio`: el plan que contrató.
      - `S/C`: Marcar solo si la línea a dar de alta es "Sin Costo". Por ejemplo para líneas laborales de empleados.
      - `Cabecera`: Cada cliente debe tener una línea móvil de cabecera (es la principal). Debemos ingresar la del titular.
      - `Prestador`: Claro/Movistar

   - ![image](https://user-images.githubusercontent.com/81191745/184222152-21a58766-4104-42a2-b8ac-9524133d58ad.png)

3. Presionamos `Insert` o `flecha hacia abajo` para confirmar la carga.

4. Si tiene servicio de Internet con nosotros, debemos relacionar la linea movil con ese servicio de Internet. Para ello, sobre la linea móvil:

   1.  Clic derecho > `Relacionar línea con servicio contratado de Internet`. (esto se tiene q hacer 2 veces para que asocie la linea al IP de internet)
   2.  Elegimos el servicio correspondiente.

### [Volver al índice](https://github.com/Eternet/Comercial.Movil/tree/main#indice)
 
![image](https://user-images.githubusercontent.com/81191745/184223738-da68d410-e196-4cca-8f09-ab9192834241.png)

![Recording 2022-08-18 at 09 32 11](https://user-images.githubusercontent.com/81191745/185399350-420f2d58-7932-47b1-a9ce-8595265eaca9.gif)
Es importante que luego de todo este proceso, ingresemos a la APP, busquemos la linea en cuestion y cambiemos el estado del tramite a: "FINALIZADO" y Presionamos el boton Verde de GUARDAR
