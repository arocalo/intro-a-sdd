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

**Done:** Todas las carpetas y archivos base están creados en el repositorio.

---

### - [x] Task 1.2: Verificar configuración de GitHub Pages
**Descripción:** Verificar que GitHub Pages esté configurado correctamente para servir desde la carpeta docs/.

**Archivos/Carpetas:**
- `.gitignore`
- `README.md`

**Dependencias:** Task 1.1

**Done:** GitHub Pages está habilitado desde la carpeta docs/ y el sitio es accesible.

---

## Fase 2: Estructura HTML Base

### - [x] Task 2.1: Crear index.html con layout principal
**Descripción:** Implementar el archivo index.html con la estructura completa del layout.

**Archivos/Carpetas:**
- `/docs/index.html`

**Dependencias:** Task 1.1

**Done:** El archivo index.html contiene todos los elementos estructurales.

---

### - [x] Task 2.2: Crear módulos HTML de contenido
**Descripción:** Crear los 6 archivos HTML independientes en la carpeta modules.

**Archivos/Carpetas:**
- `/docs/modules/instalacion.html`
- `/docs/modules/que-es-sdd.html`
- `/docs/modules/herramientas.html`
- `/docs/modules/prompts.html`
- `/docs/modules/ejemplos.html`
- `/docs/modules/practica.html`

**Dependencias:** Task 1.1

**Done:** Los 6 archivos HTML existen con contenido estructurado.

---

## Fase 3: Estilos y Diseño

### - [x] Task 3.1: Implementar estilos base y tema oscuro
**Descripción:** Crear el archivo CSS con reset, variables de colores y tema oscuro.

**Archivos/Carpetas:**
- `/docs/css/styles.css`

**Dependencias:** Task 2.1

**Done:** El archivo CSS contiene variables y estilos del tema oscuro.

---

### - [x] Task 3.2: Estilizar layout principal
**Descripción:** Aplicar estilos al header fijo, menú lateral y footer.

**Archivos/Carpetas:**
- `/docs/css/styles.css`

**Dependencias:** Task 3.1

**Done:** El layout se visualiza correctamente en desktop.

---

### - [x] Task 3.3: Implementar diseño responsive
**Descripción:** Añadir media queries para móvil y tablet.

**Archivos/Carpetas:**
- `/docs/css/styles.css`

**Dependencias:** Task 3.2

**Done:** El sitio se adapta correctamente a todos los tamaños de pantalla.

---

### - [x] Task 3.4: Estilizar componentes de contenido
**Descripción:** Aplicar estilos a botones, tablas, listas y código.

**Archivos/Carpetas:**
- `/docs/css/styles.css`

**Dependencias:** Task 3.1, Task 2.2

**Done:** Todos los elementos tienen estilos consistentes.

---

## Fase 4: Funcionalidad JavaScript

### - [x] Task 4.1: Implementar router SPA básico
**Descripción:** Crear la lógica de navegación SPA.

**Archivos/Carpetas:**
- `/docs/js/app.js`

**Dependencias:** Task 2.1, Task 2.2

**Done:** La navegación SPA funciona correctamente.

---

### - [x] Task 4.2: Implementar gestión de menú lateral
**Descripción:** Marcar sección activa en el menú.

**Archivos/Carpetas:**
- `/docs/js/app.js`

**Dependencias:** Task 4.1

**Done:** El menú sincroniza con la sección actual.

---

### - [x] Task 4.3: Implementar menú hamburguesa para móvil
**Descripción:** Toggle para menú móvil.

**Archivos/Carpetas:**
- `/docs/js/app.js`

**Dependencias:** Task 4.2, Task 3.3

**Done:** El menú móvil funciona correctamente.

---

### - [x] Task 4.4: Implementar funcionalidad de copiar
**Descripción:** Botones de copiar al portapapeles.

**Archivos/Carpetas:**
- `/docs/js/app.js`

**Dependencias:** Task 4.1

**Done:** Los botones copian texto con feedback visual.

---

### - [x] Task 4.5: Implementar scroll automático
**Descripción:** Scroll al top al cambiar de sección.

**Archivos/Carpetas:**
- `/docs/js/app.js`

**Dependencias:** Task 4.1

**Done:** El scroll funciona al navegar.

---

### - [x] Task 4.6: Implementar historial del navegador
**Descripción:** Soporte para botones back/forward.

**Archivos/Carpetas:**
- `/docs/js/app.js`

**Dependencias:** Task 4.1

**Done:** Los botones del navegador funcionan.

---

## Resumen

**Total:** 32 tasks organizadas en 9 fases
**Estado:** Implementación completa lista para despliegue
