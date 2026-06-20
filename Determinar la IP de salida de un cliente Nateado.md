## Determinar la IP de salida de un cliente Nateado:



### Metodo Principal



Para clientes Nateados, independientemente del tipo de router que utilicen, la manera más fácil (que deber ser la primera opción siempre) de averiguar la IP de salida es solicitando al cliente que ingrese a la dirección 🔗 URL: https://api.ipify.org y que nos proporcione la IP que le aparece. Esta URL devuelve únicamente la IP en formato texto, lo que facilita su identificación.



![image](https://github.com/user-attachments/assets/f62431be-a949-465b-bedf-03ca2481ee6d)





Otro sitio que se puede ingresar para averiguar la IP de salida del cliente es https://www.cual-es-mi-ip.net/



![image](https://github.com/user-attachments/assets/ae535599-fc37-441f-b836-b566b1f10833)





Unicamente con Mikrotik tambien podemos verlo realizando un tool fetch: 



``` bash

/tool fetch url="https://api.ipify.org" output=user

```

> [!CAUTION]

> **En routers Vilo** la información sobre la IP publica de salida no es 100% confiable, no se debe tener en cuenta al momento de realizar un diagnóstico la información que proporciona. 



### Otros métodos para averiguar la IP de salida:



Podemos ingresar al Natter que lo atiende (lo visualizamos con una traza) y verificamos en `IP > Firewall > Nat` la regla que corresponda. Doble clic, y vamos a la solapa Actions para ver la IP Publica de salida.



También es posible verificar la IP de salida en los routers NAT, y en algunos casos en el CRF de la localidad (por ejemplo en el CRF de Balcarce).



En estos equipos:



- Ingresamos a `IP > Firewall > Nat` y buscamos el segmento de IP de la IP nateada (En balcarce se utiliza un "scr. List Address" en vez de un segmento de IP.)

- Abrimos con doble clic el registro y vamos a la solapa `Action`.

- Allí veremos la IP pública de salida para ese



Esta info puede variar, siempre verificar en el momento por si cambió:



![image](https://github.com/Eternet/General/assets/63564990/1429dbb2-0fe8-40c4-8b7e-36d987e93bd9)
