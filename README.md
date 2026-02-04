# Curso Spec-Driven Development (SDD)

Sitio web del curso de Spec-Driven Development desplegado en GitHub Pages.

## Descripción

Single Page Application (SPA) estática que presenta un curso completo sobre Spec-Driven Development, incluyendo instalación, conceptos, herramientas, prompts y ejercicios prácticos.

## Estructura del Proyecto

```
/
├── docs/                  # GitHub Pages root
│   ├── index.html        # Página principal
│   ├── css/
│   │   └── styles.css    # Estilos del sitio
│   ├── js/
│   │   └── app.js        # Lógica SPA
│   ├── modules/          # Módulos HTML de cada sección
│   │   ├── instalacion.html
│   │   ├── que-es-sdd.html
│   │   ├── herramientas.html
│   │   ├── prompts.html
│   │   ├── ejemplos.html
│   │   └── practica.html
│   ├── exmples/          # Archivos markdown de ejemplo
│   │   ├── spec-example.md
│   │   ├── plan-example.md
│   │   └── tasks-example.md
│   └── assets/           # Recursos estáticos
│       ├── logo.svg
│       └── favicon.ico
├── specs/                # Documentación del proyecto
│   └── base/
│       ├── spec.md
│       ├── plan.md
│       └── tasks.md
└── prompts/             # Prompts utilizados
    └── base/
```

## Tecnologías

- HTML5
- CSS3 (tema oscuro, diseño responsive)
- JavaScript ES6 vanilla (sin frameworks)
- GitHub Pages

## Características

- **SPA con navegación hash**: No hay recarga de página
- **Diseño responsive**: Funciona en desktop, tablet y móvil
- **Menú hamburguesa**: Para dispositivos móviles
- **Copiar al portapapeles**: En sección de prompts
- **Carga dinámica de markdown**: Visualización de archivos de ejemplo
- **Syntax highlighting**: Para bloques de código

## Desarrollo Local

1. Clonar el repositorio
2. Abrir `docs/index.html` en un navegador
3. O usar un servidor local:
   ```bash
   cd docs
   python -m http.server 8000
   ```
4. Abrir http://localhost:8000

## Despliegue en GitHub Pages

El sitio se despliega automáticamente desde la carpeta `docs/` en la rama principal.

1. Ir a Settings > Pages
2. Seleccionar rama `main` y carpeta `/docs`
3. Guardar
4. El sitio estará disponible en: `https://<usuario>.github.io/<repositorio>/`

## Secciones del Curso

1. **Instalación de OpenCode**: Guía paso a paso por sistema operativo
2. **¿Qué es SDD?**: Introducción al Spec-Driven Development
3. **Herramientas**: Spec-kit, OpenSpec y Kiro
4. **Prompts**: Templates para generar specs, planes y tareas
5. **Ejemplos**: Documentos markdown de referencia
6. **Práctica**: Ejercicio Todo Page

## Licencia

Este proyecto es de código abierto y está disponible bajo licencia MIT.
