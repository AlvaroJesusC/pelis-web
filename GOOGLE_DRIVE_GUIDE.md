# ✅ App Modificada para Google Drive

## Cambios Realizados

He modificado la aplicación para que funcione con videos de Google Drive usando **iframe** en lugar del elemento `<video>`.

### Archivos Modificados:

1. **index.html** - Cambiado `<video>` por `<iframe>`
2. **styles.css** - Actualizado estilos para iframe
3. **app.js** - Convertidor automático de URLs de Google Drive
4. **movies.js** - Instrucciones actualizadas

---

## 🎬 Cómo Funciona Ahora

### Conversión Automática de URLs

La app detecta automáticamente URLs de Google Drive y las convierte al formato correcto:

**Formatos que acepta:**
```
https://drive.google.com/file/d/1WFQJ2CIuxwpXSlCct2TzDgdgabQn85Gj/view
https://drive.google.com/uc?id=1WFQJ2CIuxwpXSlCct2TzDgdgabQn85Gj
https://drive.google.com/open?id=1WFQJ2CIuxwpXSlCct2TzDgdgabQn85Gj
```

**Se convierte a:**
```
https://drive.google.com/file/d/1WFQJ2CIuxwpXSlCct2TzDgdgabQn85Gj/preview
```

---

## 📝 Cómo Subir tus Películas

### Paso 1: Sube el video a Google Drive
1. Ve a [Google Drive](https://drive.google.com)
2. Arrastra tu archivo MP4 o haz clic en "Nuevo" > "Subir archivo"
3. Espera a que termine de subir

### Paso 2: Comparte el video
1. Haz clic derecho en el video
2. Selecciona **"Compartir"**
3. Cambia a **"Cualquier persona con el enlace"**
4. Asegúrate que diga "Lector" (viewer)
5. Copia el enlace

### Paso 3: Agrega a movies.js
1. Abre `js/movies.js`
2. Pega el enlace completo en `url_video`
3. Guarda el archivo

**Ejemplo:**
```javascript
{
    titulo: "Mi Película",
    imagen: "URL_de_portada",
    url_video: "https://drive.google.com/file/d/1WFQJ2CIuxwpXSlCct2TzDgdgabQn85Gj/view",
    categoria: "Acción"
}
```

---

## 🧪 Cómo Probar

### En tu PC:
1. Abre `index.html` con doble clic (se abre en tu navegador)
2. Haz clic en la primera película (Inception)
3. Deberías ver el reproductor de Google Drive

### En tu Teléfono:

**Opción A: Servidor Local (misma WiFi)**
```bash
# En la carpeta del proyecto
python -m http.server 8000
```
Luego en tu teléfono: `http://IP_DE_TU_PC:8000`

**Opción B: Subir a Hosting (recomendado)**
1. Crea cuenta en [Netlify](https://netlify.com) (gratis)
2. Arrastra la carpeta completa del proyecto
3. Te dan un link tipo: `https://tu-app.netlify.app`
4. Accede desde cualquier dispositivo

---

## ⚠️ Importante

### Limitaciones de Google Drive:
- ✅ Funciona en cualquier dispositivo
- ✅ No hay límite de almacenamiento (15GB gratis)
- ⚠️ Puede mostrar mensaje "Vista previa no disponible" si el video es muy grande
- ⚠️ Límite de ancho de banda (muchas reproducciones en poco tiempo)

### Solución para videos grandes:
Si un video no se reproduce:
1. Comprime el video (usa Handbrake o similar)
2. Reduce la resolución a 720p o 1080p
3. Usa formato MP4 con codec H.264

---

## 🎯 Tu Primera Película ya está Lista

Ya tienes configurada "Inception" con el ID: `1WFQJ2CIuxwpXSlCct2TzDgdgabQn85Gj`

**Pruébala ahora:**
1. Abre `index.html` en tu navegador
2. Haz clic en la tarjeta de Inception
3. El video debería cargar automáticamente

---

## 📱 Para Acceder desde tu Teléfono

### Método Rápido (Netlify):

1. Ve a [netlify.com](https://netlify.com)
2. Regístrate gratis
3. Arrastra la carpeta `pelis-webapp` completa
4. Netlify te da un link
5. Abre ese link en tu teléfono

**¡Y listo!** Podrás ver tus películas desde cualquier lugar 🎉

---

## 🆘 Solución de Problemas

### "No se puede reproducir el video"
- Verifica que el video esté compartido como "Cualquier persona con el enlace"
- Asegúrate que el formato sea MP4
- Prueba con un video más pequeño

### "Vista previa no disponible"
- El video es muy grande (>2GB)
- Comprime el video
- Divide en partes más pequeñas

### No carga en el teléfono
- Usa Netlify para hosting
- Asegúrate de estar conectado a internet
- Verifica que el link de Google Drive sea público
