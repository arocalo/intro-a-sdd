# Tasks - Curso SDD en GitHub Pages

## Fase 1: Configuración Inicial

### - [x] Task 1.1: Crear estructura de directorios
**Descripción:** Crear la estructura completa de carpetas y archivos base del proyecto según la especificación.

**Archivos/Carpetas:**
- `/docs/index.html`
- `/docs/css/styles.css`
- `/docs/js/app.js`
- `/docs/modules/` (carpeta con 6 archivos HTML)
- `/docs/exmples/` (carpeta para archivos markdown)
- `/docs/assets/` (carpeta para logo y favicon)

**Dependencias:** Ninguna

**Done:** Todas las carpetas y archivos base están creados en el repositorio, incluso si están vacíos.

---

### - [x] Task 1.2: Verificar configuración de GitHub Pages
**Descripción:** Verificar que GitHub Pages esté configurado correctamente para servir desde la carpeta docs/.

**Archivos/Carpetas:**
- `.gitignore`
- `README.md`

**Dependencias:** Task 1.1

**Done:** GitHub Pages está habilitado desde la carpeta docs/ y el sitio es accesible mediante URL de GitHub Pages.

---

## Fase 2: Estructura HTML Base

### - [x] Task 2.1: Crear index.html con layout principal
**Descripción:** Implementar el archivo index.html con la estructura completa del layout: header fijo, sidebar, área de contenido dinámico y footer.

**Archivos/Carpetas:**
- `/docs/index.html`

**Dependencias:** Task 1.1

**Done:** El archivo index.html contiene todos los elementos estructurales (header, nav, main, footer) con IDs y clases apropiadas para CSS y JS.

---

### - [x] Task 2.2: Crear módulos HTML de contenido
**Descripción:** Crear los 6 archivos HTML independientes en la carpeta modules con contenido estructurado pero sin estilos.

**Archivos/Carpetas:**
- `/docs/modules/instalacion.html`
- `/docs/modules/que-es-sdd.html`
- `/docs/modules/herramientas.html`
- `/docs/modules/prompts.html`
- `/docs/modules/ejemplos.html`
- `/docs/modules/practica.html`

**Dependencias:** Task 1.1

**Done:** Los 6 archivos HTML existen con contenido semántico estructurado (headings, párrafos, listas) correspondiente a cada sección según spec.

---

## Fase 3: Estilos y Diseño

### - [x] Task 3.1: Implementar estilos base y tema oscuro
**Descripción:** Crear el archivo CSS con reset, variables de colores GitHub (negro, blanco, azul), tipografía base y estilos del tema oscuro.

**Archivos/Carpetas:**
- `/docs/css/styles.css`

**Dependencias:** Task 2.1

**Done:** El archivo CSS contiene variables CSS para colores, reset básico y estilos generales que aplican el tema oscuro a toda la página.

---

### - [x] Task 3.2: Estilizar layout principal (header, sidebar, footer)
**Descripción:** Aplicar estilos al header fijo, menú lateral, área de contenido y footer según diseño especificado.

**Archivos/Carpetas:**
- `/docs/css/styles.css`

**Dependencias:** Task 3.1

**Done:** El layout se visualiza correctamente en desktop con header fijo arriba, sidebar a la izquierda, contenido central y footer abajo.

---

### - [x] Task 3.3: Implementar diseño responsive
**Descripción:** Añadir media queries para tablet y móvil, incluyendo estilos para menú hamburguesa colapsable en pantallas pequeñas.

**Archivos/Carpetas:**
- `/docs/css/styles.css`

**Dependencias:** Task 3.2

**Done:** El sitio se adapta correctamente a móvil (< 768px) con menú hamburguesa, y a tablet (768px-1024px) con ajustes de espaciado.

---

### - [x] Task 3.4: Estilizar componentes de contenido
**Descripción:** Aplicar estilos a elementos de los módulos: botones, tablas, listas, bloques de código, enlaces y transiciones.

**Archivos/Carpetas:**
- `/docs/css/styles.css`

**Dependencias:** Task 3.1, Task 2.2

**Done:** Todos los elementos de contenido tienen estilos consistentes con el tema oscuro y la paleta GitHub. Las transiciones entre secciones son suaves.

---

## Fase 4: Funcionalidad JavaScript

### - [x] Task 4.1: Implementar router SPA básico
**Descripción:** Crear la lógica de navegación SPA que escucha cambios en hash de URL y carga módulos HTML dinámicamente mediante fetch.

**Archivos/Carpetas:**
- `/docs/js/app.js`

**Dependencias:** Task 2.1, Task 2.2

**Done:** Al cambiar el hash de la URL (manualmente o por navegación), se carga el módulo HTML correspondiente en el área de contenido sin recarga de página.

---

### - [x] Task 4.2: Implementar gestión de menú lateral
**Descripción:** Añadir lógica para marcar la sección activa en el menú y sincronizarla con la URL actual.

**Archivos/Carpetas:**
- `/docs/js/app.js`

**Dependencias:** Task 4.1

**Done:** El item del menú correspondiente a la sección actual se resalta visualmente y cambia al navegar a otra sección.

---

### - [x] Task 4.3: Implementar menú hamburguesa para móvil
**Descripción:** Añadir funcionalidad toggle para mostrar/ocultar el menú lateral en dispositivos móviles, con cierre automático al seleccionar.

**Archivos/Carpetas:**
- `/docs/js/app.js`

**Dependencias:** Task 4.2, Task 3.3

**Done:** En móvil, el menú se oculta por defecto, se muestra al hacer clic en hamburguesa y se cierra automáticamente tras seleccionar una sección.

---

### - [x] Task 4.4: Implementar funcionalidad de copiar al portapapeles
**Descripción:** Añadir lógica para botones de copiar en la sección de prompts, con feedback visual de confirmación.

**Archivos/Carpetas:**
- `/docs/js/app.js`

**Dependencias:** Task 4.1

**Done:** Los botones de copiar en la sección prompts copian el texto del prompt correspondiente y muestran feedback visual (ej: "Copiado!") durante 2 segundos.

---

### - [x] Task 4.5: Implementar scroll automático al top
**Descripción:** Añadir funcionalidad para hacer scroll automático al inicio del contenido al cambiar de sección.

**Archivos/Carpetas:**
- `/docs/js/app.js`

**Dependencias:** Task 4.1

**Done:** Al navegar a cualquier sección, el scroll se posiciona automáticamente en la parte superior del área de contenido.

---

### - [x] Task 4.6: Implementar historial del navegador
**Descripción:** Integrar gestión de historial para que los botones back/forward del navegador funcionen correctamente con el router SPA.

**Archivos/Carpetas:**
- `/docs/js/app.js`

**Dependencias:** Task 4.1

**Done:** Los botones back y forward del navegador permiten navegar entre secciones visitadas, actualizando correctamente el contenido y menú.

---

## Fase 5: Contenido Específico

### - [x] Task 5.1: Completar contenido del módulo instalacion.html
**Descripción:** Escribir el contenido completo sobre instalación de OpenCode con pasos por sistema operativo, configuración y verificación.

**Archivos/Carpetas:**
- `/docs/modules/instalacion.html`

**Dependencias:** Task 2.2

**Done:** El módulo contiene instrucciones claras y concisas

---

### - [x] Task 5.2: Completar contenido del módulo que-es-sdd.html
**Descripción:** Escribir resumen sobre Spec-Driven Development basado en el documento oficial de GitHub, con enlace incluido.

**Archivos/Carpetas:**
- `/docs/modules/que-es-sdd.html`

**Dependencias:** Task 2.2

**Done:** El módulo contiene un resumen conciso de SDD y enlace visible a https://github.com/github/spec-kit/blob/main/spec-driven.md.

---

### - [x] Task 5.3: Completar contenido del módulo herramientas.html
**Descripción:** Escribir descripciones de Spec-kit, OpenSpec y Kiro, con tabla comparativa de características principales.

**Archivos/Carpetas:**
- `/docs/modules/herramientas.html`

**Dependencias:** Task 2.2

**Done:** El módulo contiene descripción individual de cada herramienta y tabla HTML comparativa con al menos 4 características.

---

### - [x] Task 5.4: Completar contenido del módulo prompts.html con botones
**Descripción:** Escribir los tres prompts completos (especificación, plan, tareas) con estructura HTML que incluya botones de copiar para cada uno.

**Archivos/Carpetas:**
- `/docs/modules/prompts.html`

**Dependencias:** Task 2.2

**Done:** El módulo contiene los tres prompts completos en bloques pre/code con botones de copiar claramente identificados mediante atributos data o clases.

---

### - [x] Task 5.5: Completar contenido del módulo ejemplos.html
**Descripción:** Crear estructura con tres subsecciones que cargarán y mostrarán los archivos markdown de ejemplo (spec, plan, tasks).

**Archivos/Carpetas:**
- `/docs/modules/ejemplos.html`

**Dependencias:** Task 2.2

**Done:** El módulo contiene tres secciones claramente separadas con contenedores identificados para mostrar cada archivo markdown.

---

### - [x] Task 5.6: Completar contenido del módulo practica.html
**Descripción:** Escribir descripción del ejercicio práctico Todo Page con requisitos de CRUD y localStorage claramente especificados.

**Archivos/Carpetas:**
- `/docs/modules/practica.html`

**Dependencias:** Task 2.2

**Done:** El módulo contiene descripción clara del ejercicio, lista de requisitos funcionales y criterios de completitud.

---

## Fase 6: Assets y Contenido Markdown

### - [x] Task 6.1: Crear o conseguir logo del curso
**Descripción:** Diseñar o conseguir un logo en formato SVG para el curso de SDD y guardarlo en la carpeta assets.

**Archivos/Carpetas:**
- `/docs/assets/logo.svg`

**Dependencias:** Task 1.1

**Done:** El archivo logo.svg existe, es válido y se visualiza correctamente en el header del sitio.

---

### - [x] Task 6.2: Crear favicon
**Descripción:** Crear o generar un favicon.ico basado en el logo o identidad del curso.

**Archivos/Carpetas:**
- `/docs/assets/favicon.ico`

**Dependencias:** Task 1.1

**Done:** El archivo favicon.ico existe y se muestra correctamente en la pestaña del navegador.

---

### - [x] Task 6.3: Crear archivos markdown de ejemplo
**Descripción:** Copiar o crear los archivos de ejemplo (spec, plan, tasks) en la carpeta exmples para mostrar en la sección de ejemplos.

**Archivos/Carpetas:**
- `/docs/exmples/spec-example.md`
- `/docs/exmples/plan-example.md`
- `/docs/exmples/tasks-example.md`

**Dependencias:** Task 1.1

**Done:** Los tres archivos markdown existen con contenido representativo de especificación, plan y tareas.

---

### - [x] Task 6.4: Implementar carga de archivos markdown
**Descripción:** Añadir lógica JavaScript para cargar los archivos markdown desde exmples y mostrarlos formateados en la sección ejemplos.

**Archivos/Carpetas:**
- `/docs/js/app.js`

**Dependencias:** Task 6.3, Task 4.1

**Done:** Los tres archivos markdown se cargan dinámicamente via fetch y se muestran con formato básico (respetando saltos de línea y estructura).

---

## Fase 7: Mejoras y Highlight de Código

### - [x] Task 7.1: Integrar highlight.js (opcional)
**Descripción:** Añadir referencia a highlight.js desde CDN y configurar para resaltar bloques de código en ejemplos y prompts.

**Archivos/Carpetas:**
- `/docs/index.html` (para incluir CDN)
- `/docs/js/app.js` (para inicializar highlight)

**Dependencias:** Task 6.4

**Done:** Los bloques de código en módulos se muestran con syntax highlighting aplicado correctamente.

---

### - [x] Task 7.2: Optimizar lazy loading de módulos
**Descripción:** Mejorar la lógica de carga de módulos para evitar cargas duplicadas y optimizar performance mediante caché básico.

**Archivos/Carpetas:**
- `/docs/js/app.js`

**Dependencias:** Task 4.1

**Done:** Los módulos ya cargados no se vuelven a descargar desde el servidor en navegaciones subsecuentes dentro de la misma sesión.

---

## Fase 8: Testing y Documentación

### - [x] Task 8.1: Realizar testing cross-browser
**Descripción:** Probar el sitio en Chrome, Firefox, Safari y Edge para verificar compatibilidad y funcionalidad completa.

**Archivos/Carpetas:**
- No aplica (testing)

**Dependencias:** Todas las tasks anteriores completadas

**Done:** El sitio funciona correctamente en los 4 navegadores principales sin errores visuales o funcionales críticos.

---

### - [x] Task 8.2: Realizar testing responsive
**Descripción:** Probar el sitio en dispositivos móvil (< 768px), tablet (768-1024px) y desktop (> 1024px) para verificar diseño responsive.

**Archivos/Carpetas:**
- No aplica (testing)

**Dependencias:** Task 3.3, Task 4.3

**Done:** El sitio se visualiza y funciona correctamente en los tres tamaños de pantalla, con menú hamburguesa operativo en móvil.

---

### - [x] Task 8.3: Verificar criterios de aceptación
**Descripción:** Revisar sistemáticamente todos los criterios de aceptación listados en spec.md y plan.md para asegurar cumplimiento total.

**Archivos/Carpetas:**
- No aplica (testing)

**Dependencias:** Todas las tasks anteriores completadas

**Done:** Todos los checkboxes de criterios de aceptación en spec.md están marcados como completados con evidencia de funcionamiento.

---

### - [x] Task 8.4: Crear documentación en README.md
**Descripción:** Escribir README.md completo con descripción del proyecto, estructura de archivos, instrucciones de desarrollo local y despliegue en GitHub Pages.

**Archivos/Carpetas:**
- `README.md`

**Dependencias:** Task 1.2

**Done:** El README.md contiene secciones de descripción, instalación, estructura, uso y despliegue con instrucciones claras y completas.

---

## Fase 9: Despliegue y Validación

### - [ ] Task 9.1: Realizar despliegue final en GitHub Pages
**Descripción:** Hacer commit y push de todos los archivos, verificar que GitHub Pages se actualice y la URL pública esté accesible.

**Archivos/Carpetas:**
- Todos los archivos del proyecto

**Dependencias:** Task 8.3, Task 8.4

**Done:** El sitio está completamente desplegado en GitHub Pages, accesible públicamente y muestra todo el contenido sin errores 404.

---

### - [ ] Task 9.2: Validación final de funcionalidades
**Descripción:** Realizar prueba completa en el sitio desplegado verificando navegación, copiar prompts, carga de markdown, responsive y deep linking.

**Archivos/Carpetas:**
- No aplica (testing en producción)

**Dependencias:** Task 9.1

**Done:** Todas las funcionalidades especificadas funcionan correctamente en el sitio desplegado en GitHub Pages y se puede acceder a secciones específicas mediante URL con hash.

---

## Resumen de Fases

- **Fase 1:** Configuración Inicial (2 tasks)
- **Fase 2:** Estructura HTML Base (2 tasks)
- **Fase 3:** Estilos y Diseño (4 tasks)
- **Fase 4:** Funcionalidad JavaScript (6 tasks)
- **Fase 5:** Contenido Específico (6 tasks)
- **Fase 6:** Assets y Contenido Markdown (4 tasks)
- **Fase 7:** Mejoras y Highlight de Código (2 tasks)
- **Fase 8:** Testing y Documentación (4 tasks)
- **Fase 9:** Despliegue y Validación (2 tasks)

**Total: 32 tasks**
