// ============================================
// SPA Router y Navegación
// ============================================

class SPARouter {
    constructor() {
        this.contentArea = document.getElementById('main-content');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.moduleCache = {}; // Cache para módulos cargados
        
        this.init();
    }
    
    init() {
        // Escuchar cambios en el hash
        window.addEventListener('hashchange', () => this.loadModule());
        window.addEventListener('load', () => this.loadModule());
        
        // Agregar listeners a los enlaces del menú
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                this.handleNavClick(e);
            });
        });
    }
    
    handleNavClick(e) {
        e.preventDefault();
        const section = e.currentTarget.dataset.section;
        window.location.hash = section;
        
        // Cerrar menú en móvil
        if (window.innerWidth <= 768) {
            document.getElementById('sidebar').classList.remove('active');
        }
    }
    
    async loadModule() {
        const hash = window.location.hash.slice(1) || 'instalacion';
        const modulePath = `modules/${hash}.html`;
        
        // Scroll al top
        this.scrollToTop();
        
        // Actualizar menú activo
        this.updateActiveMenu(hash);
        
        try {
            // Verificar cache
            if (this.moduleCache[hash]) {
                this.contentArea.innerHTML = this.moduleCache[hash];
            } else {
                // Mostrar loading
                this.contentArea.innerHTML = '<div class="loading">Cargando contenido...</div>';
                
                // Cargar módulo
                const response = await fetch(modulePath);
                if (!response.ok) throw new Error('Módulo no encontrado');
                
                const html = await response.text();
                this.moduleCache[hash] = html;
                this.contentArea.innerHTML = html;
            }
            
            // Inicializar funcionalidades específicas del módulo
            this.initModuleFeatures(hash);
            
            // Aplicar syntax highlighting
            if (typeof hljs !== 'undefined') {
                this.contentArea.querySelectorAll('pre code').forEach((block) => {
                    hljs.highlightElement(block);
                });
            }
        } catch (error) {
            console.error('Error cargando módulo:', error);
            this.contentArea.innerHTML = `
                <div class="module-content">
                    <h2>Error</h2>
                    <p>No se pudo cargar el contenido de esta sección.</p>
                    <p><a href="#instalacion">Volver al inicio</a></p>
                </div>
            `;
        }
    }
    
    updateActiveMenu(section) {
        this.navLinks.forEach(link => {
            if (link.dataset.section === section) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    initModuleFeatures(section) {
        // Inicializar funcionalidades según la sección
        if (section === 'prompts') {
            this.initCopyButtons();
        } else if (section === 'ejemplos') {
            this.initTabs();
            this.loadExamples();
        }
    }
    
    // ============================================
    // Funcionalidad de Copiar al Portapapeles
    // ============================================
    
    initCopyButtons() {
        const copyButtons = document.querySelectorAll('.btn-copy');
        copyButtons.forEach(button => {
            button.addEventListener('click', (e) => this.copyToClipboard(e));
        });
    }
    
    async copyToClipboard(e) {
        const button = e.currentTarget;
        const targetId = button.dataset.target;
        const codeElement = document.getElementById(targetId);
        
        if (!codeElement) return;
        
        try {
            await navigator.clipboard.writeText(codeElement.textContent);
            
            // Feedback visual
            const originalText = button.innerHTML;
            button.innerHTML = '<span class="copy-icon">✓</span><span class="copy-text">¡Copiado!</span>';
            button.classList.add('copied');
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('copied');
            }, 2000);
        } catch (error) {
            console.error('Error al copiar:', error);
            button.innerHTML = '<span class="copy-icon">✗</span><span class="copy-text">Error</span>';
            setTimeout(() => {
                button.innerHTML = '<span class="copy-icon">📋</span><span class="copy-text">Copiar</span>';
            }, 2000);
        }
    }
    
    // ============================================
    // Funcionalidad de Tabs (para ejemplos)
    // ============================================
    
    initTabs() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const tabName = e.currentTarget.dataset.tab;
                this.switchTab(tabName);
            });
        });
    }
    
    switchTab(tabName) {
        // Desactivar todos los tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Activar tab seleccionado
        const activeButton = document.querySelector(`[data-tab="${tabName}"]`);
        const activeContent = document.getElementById(`tab-${tabName}`);
        
        if (activeButton && activeContent) {
            activeButton.classList.add('active');
            activeContent.classList.add('active');
        }
    }
    
    // ============================================
    // Carga de Archivos Markdown de Ejemplo
    // ============================================
    
    async loadExamples() {
        const examples = [
            { id: 'example-spec', file: 'exmples/spec-example.md' },
            { id: 'example-plan', file: 'exmples/plan-example.md' },
            { id: 'example-tasks', file: 'exmples/tasks-example.md' }
        ];
        
        for (const example of examples) {
            await this.loadExample(example.id, example.file);
        }
    }
    
    async loadExample(elementId, filePath) {
        const element = document.getElementById(elementId);
        if (!element) return;
        
        try {
          const response = await fetch(filePath);
          if (!response.ok) throw new Error("Archivo no encontrado");

          const text = await response.text();

          // Renderizar markdown a HTML
          if (typeof marked !== "undefined") {
            // Configurar marked para usar highlight.js
            marked.setOptions({
              highlight: function (code, lang) {
                if (lang && hljs.getLanguage(lang)) {
                  try {
                    return hljs.highlight(code, { language: lang }).value;
                  } catch (err) {}
                }
                return code;
              },
              breaks: true,
              gfm: true,
            });

            element.innerHTML = marked.parse(text);
          } else {
            // Fallback si marked no está disponible
            element.textContent = text;
          }

          element.style.display = "block";

          // Ocultar loading
          const loading = element.parentElement.querySelector(".loading");
          if (loading) loading.style.display = "none";
        } catch (error) {
            console.error(`Error cargando ${filePath}:`, error);
            element.textContent = `No se pudo cargar el archivo ${filePath}`;
            element.style.color = 'var(--color-text-secondary)';
        }
    }
}

// ============================================
// Menú Hamburguesa para Móvil
// ============================================

class MobileMenu {
    constructor() {
        this.menuToggle = document.getElementById('menu-toggle');
        this.sidebar = document.getElementById('sidebar');
        this.init();
    }
    
    init() {
        if (this.menuToggle && this.sidebar) {
            this.menuToggle.addEventListener('click', () => this.toggle());
            
            // Cerrar al hacer clic fuera del menú
            document.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    if (!this.sidebar.contains(e.target) && 
                        !this.menuToggle.contains(e.target) && 
                        this.sidebar.classList.contains('active')) {
                        this.close();
                    }
                }
            });
        }
    }
    
    toggle() {
        this.sidebar.classList.toggle('active');
    }
    
    close() {
        this.sidebar.classList.remove('active');
    }
}

// ============================================
// Inicialización de la Aplicación
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar router SPA
    const router = new SPARouter();
    
    // Inicializar menú móvil
    const mobileMenu = new MobileMenu();
    
    console.log('✅ Aplicación SDD inicializada correctamente');
});
