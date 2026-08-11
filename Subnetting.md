# Introducción

El propósito de este documento es explicar brevemente qué es el subnetting y ayudar a realizar el cálculo de hosts disponibles dentro de una subred.

---

# ¿Qué es el Subnetting?

El **Subnetting** (o subneteo) es un procedimiento que permite dividir una red IPv4 principal en múltiples subredes más pequeñas.

Cada subred funciona de manera independiente para el envío y recepción de paquetes, aunque todas continúen perteneciendo a la misma red original.

Esta técnica permite optimizar el uso de direcciones IP, mejorar la organización de la red y aumentar la seguridad.

---

# ¿Para qué sirve?

El subnetting ofrece varias ventajas:

- **Mejor aprovechamiento de direcciones IP:** permite definir redes del tamaño exacto que se necesita.
- **Mayor eficiencia en las comunicaciones:** los paquetes pueden llegar más rápidamente a los dispositivos de destino.
- **Organización lógica de la red:** facilita separar equipos, sectores o servicios dentro de una misma infraestructura.
- **Mayor seguridad:** permite aislar segmentos de red y reducir el impacto de fallas o ataques.

---

# ¿Cómo obtengo la cantidad de Hosts de una Subred?

La cantidad de hosts disponibles se calcula mediante la siguiente fórmula:

```text
Hosts = 2ⁿ - 2
```

Donde:

- **n** = cantidad de bits disponibles para hosts.
- Se restan **2 direcciones** porque:
  - Una corresponde a la **dirección de red**.
  - Otra corresponde a la **dirección de broadcast**.

La cantidad de bits para hosts se obtiene restando la máscara de red a 32:

```text
n = 32 - CIDR
```

---

# Ejemplos

## Subred /24

```text
32 - 24 = 8 bits para hosts
```

```text
2⁸ - 2 = 254 hosts
```

- Red: `10.10.10.0`
- Hosts utilizables: `10.10.10.1` a `10.10.10.254`
- Broadcast: `10.10.10.255`

Total de direcciones:

```text
254 hosts + 1 red + 1 broadcast = 256 direcciones
```

---

## Subred /30

```text
32 - 30 = 2 bits para hosts
```

```text
2² - 2 = 2 hosts
```

- Red: `10.10.10.0`
- Hosts utilizables: `10.10.10.1` y `10.10.10.2`
- Broadcast: `10.10.10.3`

Total de direcciones:

```text
2 hosts + 1 red + 1 broadcast = 4 direcciones
```

---

## Subred /25

```text
32 - 25 = 7 bits para hosts
```

```text
2⁷ - 2 = 126 hosts
```

- Red: `10.10.10.0`
- Hosts utilizables: `10.10.10.1` a `10.10.10.126`
- Broadcast: `10.10.10.127`

Total de direcciones:

```text
126 hosts + 1 red + 1 broadcast = 128 direcciones
```

---

# Tabla rápida de hosts por máscara

| CIDR | Hosts disponibles |
|-------|------------------|
| /30 | 2 |
| /29 | 6 |
| /28 | 14 |
| /27 | 30 |
| /26 | 62 |
| /25 | 126 |
| /24 | 254 |
| /23 | 510 |
| /22 | 1022 |
| /21 | 2046 |
| /20 | 4094 |
| /19 | 8190 |
| /18 | 16382 |
| /17 | 32766 |
| /16 | 65534 |

---

# Herramientas útiles

Para verificar cálculos de subnetting, máscaras, rangos de hosts y broadcasts, se recomienda utilizar una calculadora de redes IP.

### IP Calculator

https://jodies.de/ipcalc

Permite consultar rápidamente:

- Dirección de red.
- Dirección de broadcast.
- Cantidad de hosts disponibles.
- Máscara decimal.
- Rangos de IP utilizables.
