# Reclamo: Problemas en dispositivo puntual (WiFi)

---

# Introducción

Este procedimiento se aplica cuando un solo dispositivo del cliente presenta problemas de conexión, lentitud o cortes, mientras otros equipos funcionan correctamente.

El objetivo es descartar configuración del router y determinar si el problema es del dispositivo del cliente.

---

# 1. Identificación del dispositivo

- Identificar al menos un equipo afectado
- Confirmar su MAC o IP desde **Access List**

<img width="610" height="238" alt="image" src="https://github.com/user-attachments/assets/85cf9541-eb60-4d04-a0f0-bdfbc9c52297" />


---

# 2. Pruebas básicas en WiFi

## Cambio de SSID

- Renombrar las interfaces WiFi:
  - 2.4 GHz
  - 5 GHz

- Ambas deben tener el mismo nombre (SSID)
- Intentar reconectar el dispositivo

<img width="540" height="517" alt="image" src="https://github.com/user-attachments/assets/68b66865-690f-40b1-b56d-7648eb94a01d" />


---

## Cambio de contraseña

- Modificar la contraseña desde:
  - Security Profile
- Probar reconexión del dispositivo

  <img width="839" height="522" alt="image" src="https://github.com/user-attachments/assets/f6216613-9547-472e-be4f-e9fbf9ac3f61" />


---

## Visualización de contraseña

- En Settings:
  - Desactivar “Hide Passwords” si es necesario

  <img width="1395" height="574" alt="image" src="https://github.com/user-attachments/assets/29eea78f-ea54-4f1e-b4aa-23ba8243bae3" />


---

# 3. Configuración de seguridad

En caso de persistir el problema:

## Security Profile

Verificar:

- Unicast Ciphers: `tkip`
- Group Ciphers: `tkip`

<img width="426" height="423" alt="image" src="https://github.com/user-attachments/assets/072bcad9-d3a7-49e8-ac94-26b98eedd5f0" />


---

## Autenticación (casos antiguos)

- WPA PSK puede funcionar en equipos antiguos
- No recomendado por seguridad

---

## Key Update

- Configurar:
  - `Group Key Update = 1d 00:00:00`

---

# 4. Problemas de desconexión o mala calidad

## Verificación de señal

Comparar señales entre dispositivos:

| Calidad | Valor |
|--------|------|
| Óptima | -40 dBm |
| Buena | -60 dBm |
| Mala | -80 dBm |

<img width="1160" height="317" alt="image" src="https://github.com/user-attachments/assets/2fecd450-8476-4a3d-bfd8-20353368a9ea" />

---

## Consideraciones

- Confirmar distancia del cliente al router
- Verificar interferencias
- Comparar con otros dispositivos en el mismo lugar

---

# 5. Frecuencias WiFi

- La frecuencia debe estar en **AUTO**
- Evitar fijar canales manualmente salvo prueba

<img width="796" height="472" alt="image" src="https://github.com/user-attachments/assets/c44bc188-6568-4485-9392-bbea9ec55d3d" />



---

## Prueba de cambio temporal

- Deshabilitar temporalmente la interfaz WiFi
- Forzar búsqueda automática de frecuencia

<img width="890" height="400" alt="image" src="https://github.com/user-attachments/assets/3f4be55c-fcac-4398-90a6-4c601840196c" />

---

## Freq. Usage (MikroTik)

Herramienta para analizar saturación de canales:

- Muestra uso del espectro
- Permite identificar canales menos congestionados
- Mejora estabilidad de conexión

<img width="426" height="669" alt="image" src="https://github.com/user-attachments/assets/0edec2f0-14c9-4c43-ac5e-b7626dbf05fb" />

<img width="531" height="619" alt="image" src="https://github.com/user-attachments/assets/78a5a8df-21e7-439e-97c2-18fd9cf73987" />


### Importante

- Solo analiza canales del Scan List configurado
- Al ejecutarlo puede causar corte momentáneo de WiFi
- Luego se debe restaurar la configuración original
- 
<img width="533" height="624" alt="image" src="https://github.com/user-attachments/assets/ab9e0ab1-7da3-477c-a8cd-a0421e918a94" />

---

# 6. Canales personalizados

Verificar existencia de canales en MikroTik:

### 2,4 Ghz y 5Ghz

```
/interface wireless channels add band=2ghz-b/g/n extension-channel=Ce frequency=2412 list=WiFi name=ch2412 width=20;
/interface wireless channels add band=2ghz-b/g/n extension-channel=Ce frequency=2437 list=WiFi name=ch2437 width=20;
/interface wireless channels add band=2ghz-b/g/n extension-channel=eC frequency=2462 list=WiFi name=ch2462 width=20;

/interface wireless channels add band=5ghz-a/n/ac extension-channel=Ceee frequency=5180 list=WiFi5Ghz name=ch5180 width=20;
/interface wireless channels add band=5ghz-a/n/ac extension-channel=Ceee frequency=5200 list=WiFi5Ghz name=ch5200 width=20;
/interface wireless channels add band=5ghz-a/n/ac extension-channel=Ceee frequency=5220 list=WiFi5Ghz name=ch5220 width=20;
/interface wireless channels add band=5ghz-a/n/ac extension-channel=Ceee frequency=5240 list=WiFi5Ghz name=ch5240 width=20;
/interface wireless channels add band=5ghz-a/n/ac extension-channel=Ceee frequency=5260 list=WiFi5Ghz name=ch5260 width=20;
/interface wireless channels add band=5ghz-a/n/ac extension-channel=Ceee frequency=5280 list=WiFi5Ghz name=ch5280 width=20;
/interface wireless channels add band=5ghz-a/n/ac extension-channel=Ceee frequency=5300 list=WiFi5Ghz name=ch5300 width=20;
```
---

## Scan List

<img width="528" height="499" alt="image" src="https://github.com/user-attachments/assets/5a886964-b0d2-4ca7-b938-fb192580457a" />

- wlan1 → WiFi (2.4 GHz)
<img width="532" height="280" alt="image" src="https://github.com/user-attachments/assets/60c77b34-c864-4d55-a000-d4c3c48f606d" />

- wlan2 → WiFi5 GHz
<img width="527" height="285" alt="image" src="https://github.com/user-attachments/assets/2e03f109-66ed-4dfe-98e8-a3ae0eb6e215" />

- Debe incluir canales custom configurados

---

# 7. Diagnóstico final

Si el resto de dispositivos funciona correctamente:

Se asume problema del dispositivo puntual.

---

# 8. Acciones recomendadas al cliente

- Reiniciar dispositivo
- Olvidar red WiFi y reconectar
- Verificar actualizaciones del sistema
- Reiniciar conexión WiFi
- Contactar soporte del fabricante

---

# 9. Casos especiales

## Smart TV

- Si persiste el problema:
  - Recomendar uso de Chromecast

---

## Consideraciones por tipo de dispositivo

Los resultados pueden variar según hardware:

- Dispositivos gama baja:
  - Menor velocidad real
  - Menor alcance WiFi
  - Mayor latencia
  - Problemas con streaming HD

- Dispositivos gama alta:
  - Mayor estabilidad
  - Mejor rendimiento en 5 GHz

Ejemplo:
- Samsung A01: ~25 Mbps
- Samsung S22 Ultra: +50 Mbps

---

# 10. Criterio final

Si:
- Otros dispositivos funcionan correctamente
- No hay fallas en el router
- No hay degradación general de red

Entonces:
- El problema se considera del dispositivo del cliente
