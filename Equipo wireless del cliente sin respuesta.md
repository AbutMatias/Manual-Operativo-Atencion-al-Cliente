# Equipo wireless del cliente sin respuesta

Cuando se determina que el equipo wireless del cliente no funciona, se debe cargar un reclamo de:

**“Equipo cliente sin respuesta”**

---

Las verificaciones a realizar con el cliente dependen del tipo de conexión:

# 1. Conexión data + power / power active

En este tipo de instalación la antena utiliza un inyector PoE externo.

## Pruebas con el cliente:

1. Desconectar y reconectar el cable de bajada en el puerto PoE.
2. Cambiar la toma de corriente del inyector.
3. Si el cliente tiene MikroTik 951 o 952:
   - Probar conexión PoE
   - Conectar el cable de bajada directo al puerto 5 (LAN)

---

## Si no hay solución:
- Derivar el reclamo a Redes

---

# 2. Conexión por PoE (PoE out del router)

En este caso la antena se alimenta desde el puerto PoE out del router (ether5).

## Pruebas con el cliente:

1. Si el router no enciende luces:
   - Cambiar toma de corriente

2. Si el router tiene luz pero la antena no responde:
   - Desconectar y reconectar cable en puerto PoE out

3. Reinicio eléctrico del router:
   - Esto reinicia también la antena

---

## Si no hay solución:
- Derivar el reclamo a Redes

---

# Nota importante

Siempre verificar si el cliente está dentro de zona de cobertura de Fibra Óptica.

- Si está dentro de cobertura de Fibra:
  - No derivar a Redes
  - Cargar actualización del caso
  - Solicitar prioridad a Coordinación
