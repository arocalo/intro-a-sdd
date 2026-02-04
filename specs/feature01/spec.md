# Feature 01: Reemplazo de Módulo Instalación por Agentes CLI

## Objetivo
Reemplazar el módulo de instalación de OpenCode por un nuevo módulo sobre Agentes CLI que se posicionará como primera opción en el menú lateral de navegación.

## Alcance

### Dentro del Alcance
- Eliminación del módulo instalacion.html
- Creación del nuevo módulo agentes-cli.html
- Actualización del orden del menú de navegación
- Incorporación de imágenes/screenshots de 5 herramientas CLI
- Descripción breve de qué es un Agente CLI

### Fuera del Alcance
- Cambios en otros módulos existentes
- Modificación de funcionalidades de navegación SPA
- Implementación de nuevas características interactivas
- Cambios en estilos o diseño general

## Stack Tecnológico
- GitHub Pages (hosting estático)
- Vanilla HTML5/CSS3/ES6 (sin frameworks)
- Arquitectura SPA con carga dinámica de módulos HTML

## Nuevo Módulo: Agentes CLI

### Contenido del Módulo agentes-cli.html

#### Sección 1: Introducción a Agentes CLI
- Título principal: "Agentes CLI: Desarrollo Asistido por IA"
- Definición concisa de qué es un Agente CLI
- Características principales que los distinguen:
  * Interfaz de línea de comandos
  * Integración con IA generativa
  * Asistencia en desarrollo de código
  * Ejecución de comandos contextuales

#### Sección 2: Herramientas Principales
Galería visual con descripción de cada herramienta:

1. **Claude Code**
   - Screenshot/imagen representativa
   - Descripción breve en 1-2 líneas
   - Enfoque: Asistente de código con Claude AI

2. **Codex**
   - Screenshot/imagen representativa
   - Descripción breve en 1-2 líneas
   - Enfoque: Motor de OpenAI para generación de código

3. **Copilot CLI**
   - Screenshot/imagen representativa
   - Descripción breve en 1-2 líneas
   - Enfoque: Comandos shell asistidos por GitHub Copilot

4. **Gemini CLI**
   - Screenshot/imagen representativa
   - Descripción breve en 1-2 líneas
   - Enfoque: Interfaz de comandos con Gemini de Google

5. **OpenCode**
   - Screenshot/imagen representativa
   - Descripción breve en 1-2 líneas
   - Enfoque: Editor CLI con capacidades de IA integradas

### Estructura HTML
- Sección principal con clase module-content
- Título h2 para el encabezado principal
- Subsecciones con h3 para cada herramienta
- Grid o flexbox para galería de imágenes
- Párrafos descriptivos concisos
- Imágenes alojadas en /assets/agentes-cli/

## Cambios en Navegación

### Actualización del Menú Lateral
Nuevo orden de navegación:
1. Agentes CLI (nueva posición #1)
2. ¿Qué es SDD?
3. Spec-kit, OpenSpec y Kiro
4. Prompts para Generación
5. Ejemplos de Especificación, Plan y Tareas
6. Práctica: Todo Page

### Actualización de URLs Hash
- Remover: #instalacion
- Agregar: #agentes-cli como primera opción
- Mantener URLs existentes de otros módulos

## Assets Requeridos

### Nuevas Imágenes
Directorio: /docs/assets/agentes-cli/
- claude-code.png o .jpg (screenshot o logo)
- codex.png o .jpg (screenshot o logo)
- copilot-cli.png o .jpg (screenshot o logo)
- gemini-cli.png o .jpg (screenshot o logo)
- opencode.png o .jpg (screenshot o logo)

Especificaciones de imágenes:
- Formato: PNG o JPG
- Tamaño recomendado: 800x600px o similar (consistente entre todas)
- Peso optimizado para web (< 200KB por imagen)

## Modificaciones en Archivos Existentes

### index.html
- Actualizar menú de navegación sidebar
- Cambiar primer enlace de "Instalación" a "Agentes CLI"
- Actualizar data-module="agentes-cli" y href="#agentes-cli"
- Verificar que el orden refleje la nueva estructura

### app.js
- Actualizar array de módulos si existe
- Asegurar que el routing reconozca #agentes-cli
- Remover referencias a #instalacion si están hardcodeadas
- Mantener funcionalidad de carga dinámica sin cambios

### styles.css
- Añadir estilos específicos para galería de herramientas si es necesario
- Clases sugeridas: .tools-grid, .tool-card, .tool-image
- Mantener consistencia con tema oscuro existente

## Archivos a Eliminar
- /docs/modules/instalacion.html

## Archivos a Crear
- /docs/modules/agentes-cli.html

## Criterios de Aceptación
- El módulo instalacion.html ya no es accesible ni aparece en el menú
- El nuevo módulo agentes-cli.html se carga correctamente
- El módulo Agentes CLI aparece como primera opción en el menú
- Se muestran las 5 herramientas con sus respectivas imágenes
- La descripción de Agentes CLI es clara y concisa
- La navegación SPA funciona sin errores con el nuevo módulo
- El URL hash #agentes-cli funciona correctamente
- Las imágenes cargan sin errores y son visualmente consistentes
- El diseño responsive se mantiene en móvil y tablet
- No hay referencias residuales a instalacion.html en el código

## Consideraciones Técnicas
- Mantener estructura HTML consistente con otros módulos
- Usar lazy loading para imágenes si es posible
- Asegurar que las imágenes tengan atributos alt descriptivos
- Mantener accesibilidad (ARIA labels donde sea apropiado)
- Verificar que la carga del nuevo módulo no afecte el performance
- Probar navegación directa mediante URL hash
