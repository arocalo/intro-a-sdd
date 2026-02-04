# Plan de Implementación - Curso SDD en GitHub Pages

## Objetivo
Desarrollar una SPA estática para el curso de Spec-Driven Development, con navegación dinámica entre módulos HTML y funcionalidad de copia de prompts, desplegada en GitHub Pages.

## Alcance

### Dentro del Alcance
- SPA con 6 módulos de contenido independientes
- Navegación por hash (#seccion) sin recarga de página
- Menú lateral responsive (desktop) y colapsable (móvil)
- Botones de copiar al portapapeles en prompts
- Carga y visualización de archivos markdown
- Tema oscuro con colores GitHub
- Transiciones suaves entre secciones
- Highlight de código en ejemplos

### Fuera del Alcance
- Backend o base de datos
- Autenticación de usuarios
- Comentarios o interacción social
- Integración con sistemas externos
- Generación dinámica de contenido
- Frameworks JavaScript (React, Vue, etc.)

## Estructura de Páginas y Secciones

### Módulos de Contenido
1. **Instalación de OpenCode Básica** (`instalacion.html`)
   - Instrucciones por sistema operativo
   - Configuración inicial y requisitos
   - Verificación de instalación

2. **¿Qué es SDD?** (`que-es-sdd.html`)
   - Resumen del concepto SDD
   - Enlace a documentación oficial GitHub

3. **Spec-kit, OpenSpec y Kiro** (`herramientas.html`)
   - Descripción individual de cada herramienta
   - Tabla comparativa de características

4. **Prompts para Generación** (`prompts.html`)
   - Prompt para especificación inicial
   - Prompt para generación de plan
   - Prompt para creación de tareas
   - Botones de copiar en cada uno

5. **Ejemplos de Especificación, Plan y Tareas** (`ejemplos.html`)
   - Tres subsecciones con archivos markdown
   - Visualización formateada de documentos

6. **Práctica: Todo Page** (`practica.html`)
   - Descripción del ejercicio
   - Requisitos del proyecto (CRUD + localStorage)

### Layout Principal
- **Header fijo**: Título del curso
- **Sidebar izquierdo**: Menú de navegación (6 opciones)
- **Área de contenido**: Módulo activo
- **Footer**: Enlaces y copyright

## Navegación

### Mecánica SPA
- URLs con hash: `#instalacion`, `#que-es-sdd`, `#herramientas`, `#prompts`, `#ejemplos`, `#practica`
- Carga asíncrona de módulos HTML vía `fetch()`
- Historial del navegador funcional (back/forward)
- Scroll al top al cambiar de sección

### Menú Lateral
- Lista vertical con las 6 secciones
- Indicador visual de sección activa
- En móvil: menú hamburguesa colapsable
- Cierre automático del menú en móvil tras seleccionar

## Contenido Requerido

### Archivos de Ejemplo (directorio `exmples/`)
- `spec-example.md`
- `plan-example.md`
- `tasks-example.md`

### Assets
- `logo.svg` (logo del curso)
- `favicon.ico`

### Prompts (embebidos en `prompts.html`)
- Texto completo de cada prompt
- Botones de copiar con feedback visual

## Componentes UI

### Componentes Principales
- **MenuLateral**: Lista de navegación con estado activo
- **HeaderFijo**: Barra superior con título
- **ContenidoDinamico**: Contenedor para módulos cargados
- **Footer**: Pie de página
- **BotonCopiar**: Botón con funcionalidad clipboard
- **MenuHamburguesa**: Toggle para móvil

### Elementos Interactivos
- Botones de copiar con icono y texto de confirmación
- Enlaces de navegación con hover effect
- Highlight de código en bloques markdown (highlight.js)
- Renderizado de markdown a HTML (marked.js)
- Transiciones fade entre secciones

### Tecnologías de Visualización
- **Marked.js**: Librería para convertir markdown a HTML
- **Highlight.js**: Syntax highlighting de código
- Ambas cargadas desde CDN

## Criterios de Aceptación

### Funcionales
- [ ] Las 6 secciones navegan sin recarga de página
- [ ] El menú lateral muestra la sección activa
- [ ] El menú hamburguesa funciona correctamente en móvil
- [ ] Todos los prompts se copian al portapapeles correctamente
- [ ] Los archivos markdown se cargan y visualizan formateados
- [ ] La URL refleja la sección actual (deep linking)
- [ ] Los botones back/forward del navegador funcionan

### Diseño
- [ ] Layout responsive en desktop, tablet y móvil
- [ ] Tema oscuro con paleta de colores GitHub aplicada
- [ ] Transiciones suaves al cambiar de sección
- [ ] Código resaltado correctamente en ejemplos

### Técnicos
- [ ] Sin frameworks externos (vanilla JS)
- [ ] Sin dependencias obligatorias (highlight.js y marked.js opcionales desde CDN)
- [ ] Lazy loading de módulos implementado
- [ ] Renderizado de markdown funcionando correctamente
- [ ] Compatible con GitHub Pages
- [ ] README.md con instrucciones de despliegue incluido

### Despliegue
- [ ] GitHub Page publicada y accesible
- [ ] Estructura de directorios según spec
- [ ] Todos los assets presentes
