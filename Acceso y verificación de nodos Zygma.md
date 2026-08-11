# Acceso y verificación de nodos Zygma

---

## 1. Acceso al equipo

- Abrir el navegador
- Ingresar la IP del equipo

### ¿Cómo obtener la IP?
- Ir a **Netmap**
- Clic derecho sobre el equipo
- Seleccionar: **Propiedades > Equipos**
<img width="1898" height="1039" alt="image" src="https://github.com/user-attachments/assets/631581e8-fdfa-4bb6-b556-37ba3248c9b9" />

---

## 2. Ejemplo de problema

- El nodo *Viamonte 1210* aparece sin respuesta

---

# Procesar nodo

## 3. Identificar puerto del Zygma

- En Netmap:
  - Clic derecho sobre el nodo
  - Seleccionar: **Procesar Nodo (web)**

- Se abrirá automáticamente:
  - https://instalaciones.eternet.cc/

- Allí se muestran los datos del nodo

### Ejemplo
- Nodo: Viamonte 1210
- Puerto asignado: 13
<img width="1748" height="853" alt="image" src="https://github.com/user-attachments/assets/1db9159f-2015-4e96-b456-6f774480fdfc" />

---

## 4. Verificar puerto en Zygma

- Entrar al menú del equipo
- Ir a la sección: **Ports**

---

## 5. Estados del puerto

El puerto puede aparecer como:

- Down (sin enlace)
- Link Up (en verde, activo)

---

## 6. Acciones de diagnóstico

Si el puerto está Down o con problemas:

### Reinicio de puerto

1. Ir a:
   - Mode > Disabled > Apply  
2. Esperar aproximadamente 2 minutos  
3. Volver a activar:
   - Mode > Auto Speed > Apply  
<img width="897" height="895" alt="image" src="https://github.com/user-attachments/assets/60a2ce54-0ef1-4980-b1d6-e28e827b767e" />

---

## 7. Si el problema continúa

Se pueden probar otras configuraciones:

- Forzar velocidad 100 Mb
- Forzar velocidad 10 Mb

---

## 8. Escalamiento

Derivar a **Diagnóstico de redes** si:

- El puerto sigue en Down
- El enlace no se estabiliza
- Se requiere dejar velocidad forzada

Incluir en el reporte:
- Estado del puerto
- Comportamiento observado
- Acciones realizadas
