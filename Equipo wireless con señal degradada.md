# Equipo wireless con señal degradada

Cuando la señal del equipo wireless presenta valores por lo general menores a **-70 dBm** (tener en cuenta que son valores negativos) o la calidad de transferencia está por debajo del **50%**, se debe generar un reclamo de:

**“Equipo cliente con señal degradada”** o **“Equipo cliente con calidad wireless degradada”**

---

# 1. Identificación del problema

La señal degradada puede detectarse fácilmente, pero el diagnóstico debe incluir más pruebas además de la señal.

---

# 2. Verificaciones obligatorias

## 2.1 Ping en corto (AP ↔ cliente)

Realizar ping directo desde el AP al equipo del cliente y también a otros clientes del mismo AP.

### Interpretación

- Si solo falla el cliente afectado:
  - Posible problema puntual del enlace
  - Probable necesidad de visita técnica
  - Evaluar migración a Fibra Óptica como solución

- Si fallan varios clientes:
  - Posible problema general del AP

---

## IMPORTANTE: ARP del AP

Para que el ping en corto sea válido:

- La MAC del cliente debe estar correctamente registrada en el ARP del AP
- Esto asegura que el tráfico sea directo AP ↔ cliente

Si no está en ARP:
- El ping puede pasar por CRF
- Los valores de latencia y pérdida pueden ser incorrectos

---

## Estado de la MAC en ARP

- Dinámica: aparece con “D”
- Estática: sin “D”

---

## Si la MAC no corresponde o no existe

- No se puede hacer ping directo
- Se debe realizar prueba desde equipo frontend hacia:
  - AP
  - Cliente

En el reclamo se debe aclarar:
- El ARP del CPE no está correctamente cargado en el AP
- No es posible realizar pruebas directas desde el AP

---

## Ejemplo de referencia
- Cliente wireless:
  - IP: 10.150.160.197
  - MAC: E4:8D:8C:E4:8C:39

---

# 2.2 Bandwidth test

- Realizar test de ancho de banda
- Verificar si el cliente alcanza el abono contratado

---

# 3. Consideraciones adicionales

## 3.1 Cuándo derivar a Redes

Solo se deriva a Redes cuando:
- La calidad del servicio está degradada realmente

Ejemplo:
- Cliente rural con señal de -72 dBm desde instalación
- Condición conocida y aceptada por el cliente

---

## 3.2 Revisión de historial

Siempre verificar reclamos anteriores:
- Presencia de obstáculos (árboles, construcciones, etc.)
- Condiciones ya diagnosticadas
- Señal previamente validada como correcta

Si hay factores externos:
- Derivar a Diagnóstico de Redes
- Evaluar baja técnica si corresponde

---

# Nota importante

Siempre verificar si el cliente está dentro de cobertura de Fibra Óptica.

- Si está dentro de cobertura:
  - No derivar a Redes
  - Cargar actualización tecnológica
  - Solicitar prioridad a Coordinación

https://github.com/Eternet/Coordinacion/blob/main/Documentacion/Procesos/Solicitud%20de%20prioridad/readme.md
