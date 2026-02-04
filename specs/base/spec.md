# Spec-Driven Development Course - GitHub Page

## Objetivo
Crear una SPA (Single Page Application) en GitHub Pages para un curso de Spec-Driven Development (SDD), con navegación por menú lateral entre secciones HTML independientes.

## Stack Tecnológico
- GitHub Pages (hosting estático)
- Vanilla HTML5/CSS3/ES6 (sin frameworks)
- Arquitectura SPA con carga dinámica de módulos HTML

## Estructura de Módulos

### 1. Instalación de OpenCode Básica
- Pasos de instalación por sistema operativo
- Configuración inicial y requisitos
- Verificación de la instalación

### 2. ¿Qué es SDD?
- Resumen escueto del documento: https://github.com/github/spec-kit/blob/main/spec-driven.md
- Definición del enfoque de desarrollo basado en especificaciones
- Enlace al documento fuente incluido

### 3. Spec-kit, OpenSpec y Kiro
- Descripción individual de cada herramienta:
  * Spec-kit: framework de especificación de GitHub
  * OpenSpec: estándar abierto de especificación
  * Kiro: IDE con IA integrada (AWS) para desarrollo dirigido por especificaciones
- Tabla comparativa de características principales

### 4. Prompts para Generación
- Prompt para especificación inicial
- Prompt para generación de plan
- Prompt para creación de tareas
- Cada prompt debe incluir botón de copiar al portapapeles

### 5. Ejemplos de Especificación, Plan y Tareas
- Carga directa de archivos markdown desde el repositorio
- Visualización formateada de los documentos
- Sección dividida en tres subsecciones accesibles

### 6. Práctica: Todo Page
- Descripción breve del ejercicio práctico
- Requisitos mínimos del proyecto:
  * Lista de tareas con CRUD básico
  * Persistencia en localStorage

## Navegación

### Menú Lateral
- Lista vertical de las 6 secciones principales
- Indicador visual de sección activa
- En dispositivos móviles: menú colapsable (hamburguesa)

### Navegación SPA
- Carga asíncrona de módulos HTML independientes
- URL hash para deep linking (#seccion)
- Historial del navegador funcional

## Diseño

### Layout
- Header fijo con título del curso
- Sidebar izquierdo (menú de navegación)
- Área principal de contenido dinámico
- Footer con enlaces y copyright

### Estilos
- Tema oscuro por defecto
- Colores corporativos GitHub (negro, blanco, azul)

## Interacciones
- Transición suave al cambiar de sección
- Botones de copiar con feedback visual
- Highlight de código en ejemplos (highlight.js)
- Renderizado de archivos markdown a HTML (marked.js)
- Scroll automático al top al navegar

## Assets
- Logo del curso (SVG)
- Favicon
- Archivos markdown de ejemplo (exmples/)
- Estructura de directorios:
  ```
  /
  ├── index.html
  ├── css/
  │   └── styles.css
  ├── js/
  │   └── app.js
  ├── modules/
  │   ├── instalacion.html
  │   ├── que-es-sdd.html
  │   ├── herramientas.html
  │   ├── prompts.html
  │   ├── ejemplos.html
  │   └── practica.html
  ├── exmples/
  │   ├── spec-example.md
  │   ├── plan-example.md
  │   └── tasks-example.md
  └── assets/
      ├── logo.svg
      └── favicon.ico
  ```

## Requisitos Técnicos
- Sin dependencias externas obligatorias
- CDN opcional: highlight.js (syntax highlighting) y marked.js (renderizado markdown)
- Compatible con GitHub Pages (sin backend)
- Performance optimizada (lazy loading de módulos)

## Criterios de Aceptación
- [ ] Navegación entre secciones sin recarga de página
- [ ] Menú lateral funcional en desktop y móvil
- [ ] Todos los prompts con botón de copiar funcionando
- [ ] Archivos markdown cargados y formateados correctamente
- [ ] Diseño responsive probado en múltiples dispositivos
- [ ] Despliegue exitoso en GitHub Pages

## Entregables
- Código fuente
- README.md con instrucciones de despliegue
- GitHub Page publicada y accesible
