# Tasks - Feature 01: Reemplazo de Módulo Instalación por Agentes CLI

## Fase 1: Preparación de Assets

### - [x] Task 1.1: Crear directorio para imágenes de agentes CLI
**Descripción:** Crear la estructura de carpetas para almacenar las imágenes de las herramientas CLI.

**Archivos/Carpetas:**
- `/docs/assets/agentes-cli/`

**Dependencias:** Ninguna

**Done:** El directorio `/docs/assets/agentes-cli/` existe y está listo para recibir imágenes.

---

### - [x] Task 1.2: Agregar imágenes de las 5 herramientas
**Descripción:** Obtener y optimizar las imágenes representativas de cada herramienta CLI para incluirlas en el módulo.

**Archivos/Carpetas:**
- `/docs/assets/agentes-cli/claude-code.png` o `.jpg`
- `/docs/assets/agentes-cli/codex.png` o `.jpg`
- `/docs/assets/agentes-cli/copilot-cli.png` o `.jpg`
- `/docs/assets/agentes-cli/gemini-cli.png` o `.jpg`
- `/docs/assets/agentes-cli/opencode.png` o `.jpg`

**Dependencias:** Task 1.1

**Done:** Las 5 imágenes están en el directorio, son consistentes en tamaño (aproximadamente 800x600px), pesan menos de 200KB cada una y tienen nombres descriptivos.

---

## Fase 2: Creación del Nuevo Módulo

### - [x] Task 2.1: Crear archivo HTML del módulo Agentes CLI
**Descripción:** Crear el archivo HTML base para el nuevo módulo con la estructura semántica principal.

**Archivos/Carpetas:**
- `/docs/modules/agentes-cli.html`

**Dependencias:** Ninguna

**Done:** El archivo existe con la estructura HTML base: sección principal con clase `module-content`, título h2 y secciones preparadas para introducción y herramientas.

---

### - [x] Task 2.2: Implementar sección de introducción
**Descripción:** Agregar el contenido introductorio sobre qué son los Agentes CLI y sus características principales.

**Archivos/Carpetas:**
- `/docs/modules/agentes-cli.html`

**Dependencias:** Task 2.1

**Done:** La sección de introducción contiene el título "Agentes CLI: Desarrollo Asistido por IA", una definición concisa y lista de características principales (interfaz CLI, integración con IA, asistencia en código, comandos contextuales).

---

### - [x] Task 2.3: Implementar galería de herramientas
**Descripción:** Crear la estructura HTML para mostrar las 5 herramientas con sus imágenes y descripciones.

**Archivos/Carpetas:**
- `/docs/modules/agentes-cli.html`

**Dependencias:** Task 2.1, Task 1.2

**Done:** La galería contiene las 5 herramientas (Claude Code, Codex, Copilot CLI, Gemini CLI, OpenCode) cada una con: h3 con nombre, imagen con ruta a assets, descripción breve de 1-2 líneas y enfoque específico.

---

## Fase 3: Actualización de Estilos

### - [x] Task 3.1: Agregar estilos para galería de herramientas
**Descripción:** Implementar los estilos CSS necesarios para la visualización en grid o flexbox de las herramientas CLI.

**Archivos/Carpetas:**
- `/docs/css/styles.css`

**Dependencias:** Task 2.3

**Done:** El archivo CSS contiene estilos para las clases `.tools-grid`, `.tool-card` y `.tool-image` que permiten una visualización consistente y responsive de la galería, manteniendo el tema oscuro.

---

## Fase 4: Actualización de Navegación

### - [x] Task 4.1: Actualizar menú lateral en index.html
**Descripción:** Modificar el menú de navegación para incluir "Agentes CLI" como primera opción y reordenar las demás.

**Archivos/Carpetas:**
- `/docs/index.html`

**Dependencias:** Task 2.1

**Done:** El menú lateral refleja el nuevo orden: 1) Agentes CLI, 2) ¿Qué es SDD?, 3) Spec-kit/OpenSpec/Kiro, 4) Prompts, 5) Ejemplos, 6) Práctica. El primer enlace tiene `href="#agentes-cli"` y `data-module="agentes-cli"`.

---

### - [x] Task 4.2: Actualizar lógica de routing en app.js
**Descripción:** Modificar el archivo JavaScript para reconocer el nuevo módulo y remover referencias al módulo de instalación.

**Archivos/Carpetas:**
- `/docs/js/app.js`

**Dependencias:** Task 2.1

**Done:** El archivo JS reconoce y carga correctamente `#agentes-cli`, no contiene referencias a `#instalacion`, y el array de módulos (si existe) está actualizado con el nuevo orden.

---

### - [x] Task 4.3: Actualizar módulo por defecto
**Descripción:** Configurar que al acceder sin hash específico, se cargue Agentes CLI como módulo predeterminado.

**Archivos/Carpetas:**
- `/docs/js/app.js`

**Dependencias:** Task 4.2

**Done:** Al acceder a la URL base o con hash vacío, el sistema carga automáticamente el módulo agentes-cli como primera vista.

---

## Fase 5: Limpieza

### - [x] Task 5.1: Eliminar módulo de instalación
**Descripción:** Remover el archivo HTML del módulo de instalación obsoleto.

**Archivos/Carpetas:**
- `/docs/modules/instalacion.html`

**Dependencias:** Task 4.1, Task 4.2

**Done:** El archivo `instalacion.html` ha sido eliminado del directorio modules.

---

### - [x] Task 5.2: Verificar eliminación de referencias residuales
**Descripción:** Buscar y eliminar cualquier referencia al módulo de instalación en comentarios, variables o documentación interna.

**Archivos/Carpetas:**
- `/docs/index.html`
- `/docs/js/app.js`
- `/docs/css/styles.css`

**Dependencias:** Task 5.1

**Done:** No existen referencias a "instalacion", "instalación" o "#instalacion" en ninguno de los archivos principales del proyecto.

---

## Fase 6: Validación

### - [x] Task 6.1: Validar navegación SPA
**Descripción:** Probar que la navegación funciona correctamente con el nuevo módulo y sin errores en consola.

**Archivos/Carpetas:**
- Ninguno (testing)

**Dependencias:** Task 4.1, Task 4.2, Task 5.1

**Done:** La navegación desde y hacia el módulo Agentes CLI funciona sin errores, el hash URL se actualiza correctamente, y los botones back/forward del navegador funcionan como esperado.

---

### - [x] Task 6.2: Validar carga de imágenes
**Descripción:** Verificar que todas las imágenes de las herramientas CLI cargan correctamente y tienen atributos alt apropiados.

**Archivos/Carpetas:**
- `/docs/modules/agentes-cli.html`
- `/docs/assets/agentes-cli/`

**Dependencias:** Task 2.3, Task 1.2

**Done:** Las 5 imágenes cargan sin errores 404, tienen atributos alt descriptivos, y se visualizan correctamente en el navegador.

---

### - [x] Task 6.3: Validar responsive design
**Descripción:** Probar que el nuevo módulo se visualiza correctamente en diferentes dispositivos y tamaños de pantalla.

**Archivos/Carpetas:**
- Ninguno (testing)

**Dependencias:** Task 3.1, Task 2.3

**Done:** El módulo Agentes CLI se visualiza correctamente en móvil (< 768px), tablet (768px-1024px) y desktop (> 1024px), con la galería adaptándose apropiadamente.

---

### - [x] Task 6.4: Validar accesibilidad
**Descripción:** Verificar que el nuevo módulo cumple con estándares básicos de accesibilidad web.

**Archivos/Carpetas:**
- `/docs/modules/agentes-cli.html`

**Dependencias:** Task 2.3

**Done:** Todas las imágenes tienen atributos alt, la jerarquía de headings es correcta (h2 > h3), y el contraste de texto cumple con WCAG AA en el tema oscuro.

---

### - [ ] Task 6.5: Validar en GitHub Pages
**Descripción:** Desplegar los cambios y verificar que todo funciona correctamente en el entorno de producción.

**Archivos/Carpetas:**
- Todos los archivos modificados

**Dependencias:** Todas las tareas anteriores

**Done:** Los cambios están desplegados en GitHub Pages, el módulo Agentes CLI es accesible como primera opción, no hay errores en consola, y la navegación completa funciona sin problemas.
