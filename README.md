# Galeras Food & Grill

Web informativa del restaurante con 25 productos distribuidos en seis categorías. La carpeta `docs/` contiene toda la versión de producción. HTML, CSS, JavaScript e imágenes se sirven directamente como archivos estáticos.

## Abrir y ejecutar

Abre `docs/index.html` con doble clic para consultar la carta localmente. No requiere instalación ni compilación. WhatsApp y Google Maps requieren conexión.

Para probarla por HTTP desde la carpeta del proyecto, usa Python 3:

```powershell
python -m http.server 8000 --bind 127.0.0.1 --directory docs
```

Abre [la página local](http://127.0.0.1:8000/). Detén el servidor con Ctrl+C.

## Actualizar la carta

Edita `docs/datos.js`. Cada categoría incluye su nombre, icono y lista de productos. Cada producto contiene, en orden, el nombre, el precio numérico, la descripción y opcionalmente el nombre de una imagen de `docs/assets/`. Mantén el archivo en UTF-8. Por ejemplo, la primera hamburguesa utiliza `plato-0-0.jpg`. Puedes reordenar los productos junto con sus datos. Omite el cuarto campo si el plato carece de foto.

La configuración `restaurante` del mismo archivo reúne el teléfono, WhatsApp en formato internacional, la dirección, los horarios y las redes sociales. Cada red usa un nombre y una URL HTTPS. El diseño se encuentra en `docs/estilos.css`, la estructura en `docs/index.html` y el comportamiento en `docs/sitio.js`. Si cambias la marca, actualiza también el título, la descripción y los textos de presentación del HTML.

## Información del negocio

Las seis láminas originales se conservan en `menu/`. La lámina de desayunos identifica la marca como **Galeras Food & Grill**. Las otras cinco usan **Galeras Food & Drinks** en el fondo. La web adopta la marca del emblema de desayunos.

Las 21 fotos del catálogo son recortes de las láminas originales. Los cuatro desayunos se presentan mediante texto porque su lámina carece de fotos individuales. La hamburguesa grande de la portada es una ilustración fotográfica generada para ambientar la página.

- El horario de 7:00 a. m. a 11:00 a. m. corresponde únicamente a desayunos. Completa `horarioGeneral` con los días y las horas de atención confirmados.
- WhatsApp utiliza el número de pedidos impreso, +57 318 514 7956. Confirma que el restaurante atiende WhatsApp en esa línea.
- Configura `redes` cuando tengas los perfiles oficiales.
- Maps solicita indicaciones usando literalmente la dirección facilitada. Completa `destinoMaps` con el destino exacto verificado para evitar ambigüedad entre municipios.
- La lámina de gaseosas publica un solo precio para la entrada y menciona dos presentaciones. La web conserva ese único precio.

## Publicar en GitHub Pages

1. Sube este proyecto a un repositorio conservando `docs/` en la raíz, incluido su archivo oculto `.nojekyll`.
2. En la configuración de Pages del repositorio, elige la publicación desde una rama, selecciona la rama que contiene el proyecto y la carpeta `/docs`.
3. Guarda y abre la URL que indique GitHub cuando termine el despliegue.
4. Abre cada categoría desde esa URL y comprueba el enlace de indicaciones. Los recursos utilizan rutas relativas compatibles con una subruta de repositorio.

También puedes copiar el contenido de `docs/` a la raíz de cualquier alojamiento estático. No publiques la carpeta de originales para servir la web.
