# 🎬 MisPelis - Aplicación de Películas

Aplicación web personal de películas estilo Netflix, construida con HTML, CSS y JavaScript puro.

## 🚀 Inicio Rápido

1. Abre `index.html` en tu navegador
2. Navega por las películas
3. Haz clic en una tarjeta para ver el video

## 📁 Estructura

```
pelis-webapp/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos Netflix
├── js/
│   ├── movies.js       # Datos de películas
│   └── app.js          # Lógica de la app
└── assets/             # Recursos
```

## ✏️ Personalización

### Agregar Películas

Edita `js/movies.js` y agrega objetos al arreglo:

```javascript
{
    titulo: "Nombre de la Película",
    imagen: "URL_de_la_portada",
    url_video: "URL_del_video",
    categoria: "Categoría"
}
```

### Videos de Google Drive

1. Sube el video a Google Drive
2. Comparte con "Cualquier persona con el enlace"
3. Obtén el ID del archivo
4. Usa: `https://drive.google.com/uc?export=download&id=TU_ID`

## 🎨 Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Tema oscuro estilo Netflix
- ✅ Reproductor de video integrado
- ✅ Animaciones suaves
- ✅ Navegación por teclado (ESC, Espacio)

## 🛠️ Tecnologías

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript Vanilla
- Google Fonts (Poppins)

## 📝 Licencia

Proyecto personal - Uso libre

---

**¡Disfruta tu colección de películas!** 🍿
