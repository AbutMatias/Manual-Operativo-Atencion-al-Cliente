Verificación de servicios con router en modo Bridge (CPE)
1. Verificar equipos
Confirmar que el router CPE funcione correctamente.
Confirmar que el equipo host (principal) funcione correctamente.

Si alguno de los dos falla, se abre reclamo convencional.

2. Verificar enlace físico y lógico
Revisar que la interfaz tenga link activo.
Confirmar negociación correcta del puerto.
Verificar que la interfaz configurada como proxy-ARP funcione correctamente (generalmente ether3).

Si hay fallas en este punto, se abre reclamo convencional.

3. Evaluar resultado de la verificación
Si todo está correcto (puntos 1 y 2 OK)
El servicio se considera entregado correctamente hasta el cliente.
El problema es de la red interna del cliente.
El cliente debe revisar su router, WiFi o red interna.
Si hay fallas (puntos 1 o 2 mal)
Se realiza reclamo técnico normal.
Se deriva a Servicio Técnico.
4. Definir tipo de caso (con intervención técnica)
Caso 1: Router del cliente NO MikroTik (comodato)
Visita técnica obligatoria.
Reemplazo de equipo.
Configuración y migración a IP pública si está NATeado.

Costo: 50% de una instalación.

Caso 2: Router MikroTik en comodato
Trabajo remoto.
Configuración y migración a IP pública si está NATeado.

Costo: 50% de una instalación.

Caso 3: Cambio de Bridge CPE a Router host
Trabajo remoto únicamente.

Costo: 50% de una instalación.

Caso 4: Cliente con equipo propio (sin comodato)
Cliente con infraestructura propia (generalmente empresas).
Se puede ofrecer instalación de CPE para control de línea manteniendo su router actual.

Costo: según tarifario vigente.

5. Migración a CPE (si el cliente lo solicita)
Crear issue en Servicio Técnico con título: “Migración a host CPE”.
Describir brevemente el caso.
Derivar en SSAK a Servicio Técnico con el link del issue.
6. Reglas generales
El puerto proxy-ARP suele ser ether3.
Solo se configura ruteo CPE en equipos MikroTik en comodato.
Problemas de WiFi o red interna no son responsabilidad del proveedor si el servicio llega correctamente hasta el cliente.
