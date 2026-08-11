# Clasificación de reclamos y solicitudes

Este documento agrupa los tipos de incidencias más comunes en Eternet para facilitar el diagnóstico y la derivación correcta.

---

# Problemas en equipo HOST

## Wireless

- [Sin conexión (wireless OK)](./Sin%20conexión%20(wireless%20ok).md)  
  La antena funciona correctamente, pero el router del cliente no responde.

---

## Fibra óptica (FUTURA)

- [Sin conexión FUTURA (ONU OK)](./Sin%20conexión%20FUTURA%20(ONU%20OK).md) 
  La ONU responde correctamente, pero el router del cliente no tiene conexión.

---

# Problemas en CPE (última milla)

## Wireless

- [Equipo cliente sin respuesta](./Equipo%20wireless%20del%20cliente%20sin%20respuesta.md)  
  La antena no responde.

- [Equipo cliente desenlazándose](./Equipo%20cliente%20(Antena)%20desenlazándose.md)  
  Desconexiones constantes del equipo wireless.

- [Equipo cliente reiniciándose](./doc/Equipo%20cliente%20(Antena)%20reiniciándose.md)  
  Reinicios frecuentes del equipo wireless (uptime se reinicia).

- [Equipo cliente con calidad degradada](./doc/Equipo%20wireless%20con%20señal%20degradada.md) 
  Señal inestable, baja calidad de enlace o degradación en la transmisión.

- Corregir registro CPE  
  Cuando la configuración o registro del equipo wireless es incorrecto y debe ajustarse en sistema.

---

## Fibra óptica (FUTURA)

- [Sin conexión FUTURA](./doc/Sin%20conexión%20FUTURA.md)  
  Sin respuesta óptica desde la ONU.

- [ONU con mala señal](./doc/ONU%20con%20mala%20señal.md) 
  Señal óptica en valores críticos (ej. -28 / -30 dBm o similares).

- [ONU con pérdidas de señal](./doc/Acceso%20a%20OLTs.md)  
  Intermitencias o degradación en la señal óptica.

---

# Problemas en red interna

Este grupo incluye múltiples causas posibles dentro del domicilio del cliente.

- [Sin conexión – Eternet Plus](./doc/Sin%20conexión%20–%20Eternet%20Plus.md)
  El equipo secundario/repetidor no tiene conexión.

- [Sin conexión – CPE OK](./doc/Equipo%20wireless%20del%20cliente%20sin%20respuesta.md)
  La última milla funciona, pero la red interna no tiene conexión.

- [Pérdida a destino](./doc/Perdida%20a%20destino.md)
  Pérdida de paquetes hacia un servicio o destino específico (juegos, webs, etc.).

- [Cambio de clave WiFi / SSID](./doc/Chequeo%20de%20un%20dispositivo%20puntual.md)
  Modificación de nombre o contraseña de red WiFi.

- [Lentitud](./doc/Lentitud.md)  
  Baja performance en navegación o aplicaciones.

- [Microcortes / cortes en navegación](./doc/Consulta%20de%20Red%20Interna.md)  
  Interrupciones intermitentes del servicio.

- [Sin navegación](./doc/Consulta%20de%20Red%20Interna.md)  
  Ningún dispositivo navega.

- [Sin navegación en dispositivo puntual](./doc/Consulta%20de%20Red%20Interna.md)  
  Un solo dispositivo sin acceso a internet.

- [Sin conexión en dispositivo puntual](./doc/Sin%20conexión%20en%20dispositivo%20puntual.md)  
  Dispositivo específico sin conectividad (PC, cámaras, etc.).

- [No llega al abono contratado](./doc/Prueba%20de%20velocidad.md)  
  Velocidad inferior a la contratada.

- [Problemas en correos](./doc/Gestión%20de%20correos%20electrónicos%20(MailServer).md)  
  Fallas en envío o recepción de emails.

- [Consulta de correos](./doc/Gestión%20de%20correos%20electrónicos%20(MailServer).md)  
  Configuración o creación de cuentas de correo.

- [Sin acceso a destino](./doc/Chequeo%20de%20acceso%20a%20un%20sitio%20web%20o%20servidor.md)  
  No se puede acceder a un sitio web específico.

- [Router desconfigurado](./doc/Router%20desconfigurado.md)  
  Router funcionando pero sin configuración válida o con valores por defecto.

- [Falta de cobertura WiFi](./doc/Chequeo%20de%20un%20dispositivo%20puntual.md)  
  Señal inalámbrica insuficiente dentro del domicilio.

- [Consulta de red interna](./doc/Consulta%20de%20Red%20Interna.md)  
  Consultas generales sobre dispositivos conectados o red del cliente.

- [Saturación de ancho de banda](./doc/Saturación%20de%20ancho%20de%20banda.md)  
  Consumo excesivo que supera el abono contratado.

---

# Solicitudes del cliente

- [Cambio a CPE](./doc/Verificación%20de%20servicios%20con%20router%20en%20modo%20Bridge%20(CPE).md)  
  Cliente solicita administrar su propia red interna.

- [Solicitud de forward](./doc/Redireccionamiento%20de%20Puertos.md)  
  Apertura de puertos (cámaras, consolas, etc.).

- [Cambio de bajada](./doc/Carga%20de%20instalación%20interna.md)  
  Reubicación del punto de conexión dentro del domicilio.

- [Cableado interno](./doc/Carga%20de%20instalación%20interna.md)  
  Instalación o ajuste de conexiones LAN.

- [Acondicionamiento de línea](./doc/Carga%20de%20instalación%20interna.md)  
  Ordenamiento de cableado o instalación interna.

- [Cables colgando](./doc/Cables%20colgando.md)  
  Reacomodación de cableado externo.

- [Cambio de host](./doc/Carga%20de%20instalación%20interna.md)  
  Reemplazo del router principal.

- [Cambio de MAC](./doc/Cambio%20de%20MAC%20Address.md)  
  Reemplazo de equipo del cliente que requiere registro nuevo en sistema.

---

# Consultas

- Consulta administrativa  
  Temas de facturación, débito o gestión administrativa.

- Consulta comercial  
  Información sobre planes, abonos o nuevas conexiones.

- Consulta comercial / móvil  
  Consultas relacionadas con servicios móviles o portabilidad.

---
