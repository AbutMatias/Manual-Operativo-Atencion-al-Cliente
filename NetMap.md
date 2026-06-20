# Netmap - Guía rápida para Atención al Cliente

## ¿Qué es Netmap?

Netmap es una herramienta que muestra la red de Eternet en forma de árbol y utiliza la misma base de datos que SSAK.

Sus principales funciones son:

* Localizar clientes dentro de la red.
* Identificar de qué nodo depende un cliente.
* Verificar el estado de equipos.
* Comprobar el funcionamiento de una subred.

---

# 1. Buscar un cliente

Existen tres formas principales de búsqueda:

## Por Nombre, IP o MAC

1. Utilizar el buscador ubicado en la esquina superior izquierda.
2. Seleccionar el criterio de búsqueda:

   * Nombre
   * IP
   * MAC
   * Por Host
   * Por Nodo
     
3. Ingresar el dato a buscar.
4. Hacer doble clic sobre el resultado.

El sistema ubicará automáticamente al cliente o nodo dentro del árbol de red.

<img width="1862" height="892" alt="image" src="https://github.com/user-attachments/assets/330eac41-4c99-48ba-a8b3-5d69b630f140" />

---

# 2. Comprender el árbol de red

Una vez localizado el cliente, debemos identificar de qué equipos depende.

Regla principal:

* Los equipos ubicados más a la izquierda son los equipos padre.
* Los equipos ubicados más a la derecha dependen de ellos.

Ejemplo:

Host → CPE → CD → Splitter → OLT → Switch → Core

Siguiendo el árbol hacia arriba podemos determinar dónde se origina una falla.

<img width="1485" height="923" alt="image" src="https://github.com/user-attachments/assets/9060dc05-c0b4-4955-a387-4574e4401137" />


---

# 3. Verificar el estado de una red

## Obtener estado de la subred

1. Hacer clic derecho sobre un nodo.
2. Seleccionar "Obtener estado de la subred".

Esta opción realiza pruebas sobre todos los clientes dependientes del nodo.

<img width="1872" height="915" alt="image" src="https://github.com/user-attachments/assets/c1c25e65-6fae-48b9-835c-1c06d95c5ae4" />

<img width="1861" height="893" alt="image" src="https://github.com/user-attachments/assets/c96abc41-f362-4e14-aee4-ba87d673666f" />


---

# 4. Opciones útiles del menú contextual

## Dispositivos de Red

Permite visualizar datos de los equipos asociados al cliente o nodo.

<img width="1861" height="894" alt="image" src="https://github.com/user-attachments/assets/be1d0e05-9557-467a-911d-cc44b9c3cce3" />

---

## Herramientas de diagnostico

Permite generar un ping desde NetMap a los dispositivos de Red (Router/CPE (Antena)

<img width="1377" height="364" alt="image" src="https://github.com/user-attachments/assets/377782a9-8d87-43ee-a590-f0f4a1a1281a" />

Ejemplo: Ping continuo de 1500. Resultado 100% Equipo Cliente Sin Respuesta.

<img width="1509" height="921" alt="image" src="https://github.com/user-attachments/assets/bb958b7b-0cd6-43f1-9a49-a430afa31102" />



# Resumen rápido

Cuando recibas un reclamo:

1. Buscar al cliente en Netmap.
2. Ubicarlo dentro del árbol.
3. Identificar de qué nodo depende.
4. Obtener estado de la subred.
5. Revisar estado de los dispositivos de Red.
6. Continuar el diagnóstico según el tipo de conexión (Fibra o Wireless).
