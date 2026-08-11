# Acceso a OLTs (Guía rápida para Atención al Cliente)

# ¿Qué es una OLT?

OLT significa **Terminal de Línea Óptica**.

Es el equipo central que administra las ONUs de los clientes de Fibra Óptica.

---

# Acceso a una OLT

Para ingresar se utiliza Grafana, al ingresar habra una carpeta llamada OLTs.

<img width="1876" height="762" alt="image" src="https://github.com/user-attachments/assets/99c68195-5cf6-41ce-bf9b-3f8329e1e9b0" />

---

## Diferentes OLTs para cada zona:

- Sopto: Bahia Blanca, Balcarce, Benito Juarez, Cascallares, Adolfo Gonzales Chaves, Claromecó, Indio Rico, Orense, Reta y San Cayetano
- ZTE: Tres Arroyos

<img width="1491" height="591" alt="image" src="https://github.com/user-attachments/assets/c6d71d6a-d1c0-486a-a4b3-7d8f6a5dc73c" />


---
## Selecciona la zona:

(A modo de ejemplo ingresamos a la OLTs Sopto, en la zona de Bahia Blanca)

<img width="1560" height="611" alt="image" src="https://github.com/user-attachments/assets/8a6e5cda-85a7-411c-ad93-c5492effe92d" />

---
## Ingresa la MAC de la ONU (Encontrada en SSKA):
<img width="1556" height="598" alt="image" src="https://github.com/user-attachments/assets/d12dfff0-2a42-48b7-bff0-cbe8dbfc3d2f" />

---
## Luego click en el boton QUERY.
<img width="1525" height="525" alt="image" src="https://github.com/user-attachments/assets/fbd46194-73b3-4aac-af1a-aa1990e606a5" />

---
## Estado en vivo de los puertos Ethernet en la ONU seleccionada.
<img width="1288" height="529" alt="image" src="https://github.com/user-attachments/assets/6d934dad-4a8a-406b-acdb-a5a28f86aa4e" />

---
## Mediciones ópticas en vivo de la ONU seleccionada.
<img width="1290" height="540" alt="image" src="https://github.com/user-attachments/assets/83077105-ee0c-407b-b17e-f95618d65cdc" />

---
## Señales históricas TX / RX de la ONU
<img width="1288" height="534" alt="image" src="https://github.com/user-attachments/assets/d3cdaa7d-6bb2-4d3d-9a96-6664b0e2b679" />

---
## Historial de conexión y desconexión de la ONU seleccionada.
<img width="1287" height="539" alt="image" src="https://github.com/user-attachments/assets/163d4eb2-fe78-4932-a5e5-09f443bf5b42" />

---
## Alarmas recientes de enlace activo/inactivo en los puertos Ethernet de la ONU.

<img width="1285" height="536" alt="image" src="https://github.com/user-attachments/assets/09312052-91fc-428c-828c-b99ed53be678" />

---
## Direcciones MAC aprendidas por la ONU seleccionada. 

En este caso la MAC que figura es la del Router.

<img width="1287" height="540" alt="image" src="https://github.com/user-attachments/assets/f2f57804-0c8a-43be-9a9c-fbb418b2ecc7" />

---

# ¿Qué verificaciones realizamos normalmente?

Las consultas más frecuentes son:

1. Ver señal de una ONU
2. Ver si una ONU está registrada
3. Ver estado del puerto Ethernet
4. Reiniciar ONU
5. Consultar eventos históricos

---

# Interpretación de eventos

## LOSI

<img width="1547" height="588" alt="image" src="https://github.com/user-attachments/assets/05ad0118-128b-4e85-914e-61b40de83b21" />


Significa:

- Pérdida de señal óptica
- Corte o problema en la fibra

---

## Dying Gasp

<img width="1281" height="538" alt="image" src="https://github.com/user-attachments/assets/a313753f-79bf-4a55-87be-283ba25225a1" />


Significa:

- Corte de energía
- Reinicio de la ONU
- Desconexión de fuente
- Manipulación del equipo

---

# Ver señal óptica de una ONU

<img width="1293" height="538" alt="image" src="https://github.com/user-attachments/assets/ba0433a7-40ad-43ba-8d4b-fa47d8fb49bd" />

Permite visualizar:
- RX (Recepcion)
- TX (Transmision)
- Señal óptica actual

---

# Diagnósticos más utilizados

## Cliente sin conexión

1. Verificar que la ONU esté registrada.
2. Verificar señal óptica.
3. Verificar estado del puerto Ethernet.
4. Verificar tabla MAC.
5. Reiniciar ONU si corresponde.

---

## Router no responde

1. Verificar estado Ethernet.
2. Revisar tabla MAC.
3. Confirmar que la MAC del router aparezca registrada.
   
<img width="1286" height="518" alt="image" src="https://github.com/user-attachments/assets/dbcac440-8405-4cea-b811-3dc80d2e9a07" />

---

## ONU sin respuesta

1. Verificar historial.
2. Buscar eventos LOSI.
3. Buscar eventos Dying Gasp.
4. Verificar señal óptica.

---

# Resumen rápido

Para el 90% de los diagnósticos de Atención al Cliente solo necesitás:

- Ver estado de ONU
- Ver señal óptica
- Ver estado Ethernet
- Ver tabla MAC
- Consultar historial
- Reiniciar ONU
