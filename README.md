# ☕ Java Backend Learning Platform - React

> **Plataforma educativa moderna, escalable y profesional** para aprender Java, Git, SQL, Spring Boot y más con componentes reutilizables optimizados.

[![React](https://img.shields.io/badge/React-19.2.7-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.1.1-646CFF?logo=vite)](https://vitejs.dev)
[![React Router](https://img.shields.io/badge/React%20Router-7.18.1-CA4245)](https://reactrouter.com)
[![License](https://img.shields.io/badge/License-MIT-green)](#)

---

## ✨ CARACTERÍSTICAS PRINCIPALES

### 🎯 Contenido Educativo
- ✅ **50+ lecciones** en 8 módulos (Git, Java, SQL, Spring Boot, IDEs, etc.)
- ✅ **Búsqueda y filtrado** en tiempo real con soporte semántico
- ✅ **Índice de contenidos automático** (TableOfContents en cada lección)
- ✅ **6+ componentes reutilizables** que reducen código en 75-80%
- ✅ **Ejercicios con pistas y soluciones** para práctica interactiva
- ✅ **FAQ expandibles** y tablas de comparación profesionales

### 🏗️ Arquitectura
- ✅ **React 19.2.7** con Hooks modernos
- ✅ **React Router v7** para navegación fluida
- ✅ **Vite 8.1.1** para build ultrarrápido
- ✅ **SEO completo** con meta tags dinámicos y sitemap XML
- ✅ **Breadcrumbs automáticos** generados desde rutas

### 🎨 Diseño & UX
- ✅ **100% responsive** (mobile-first, 3 breakpoints)
- ✅ **Componentes profesionales** con animaciones suaves
- ✅ **Accesibilidad WCAG 2.1 Level AA**
- ✅ **Dark mode ready** (CSS variables)
- ✅ **Performance optimizado** (Core Web Vitals)

### 🔒 Calidad
- ✅ **Linting** con Oxlint 1.71.0
- ✅ **Security best practices** (XSS, CSRF, CSP)
- ✅ **Código modular** y fácil de mantener

---

## 📊 ESTADÍSTICAS DEL PROYECTO

| Métrica | Valor |
|---------|-------|
| **Componentes** | 61 archivos |
| **Lecciones** | 50+ páginas |
| **Módulos** | 8 (Git, Java, SQL, Spring Boot, etc.) |
| **URLs Indexables** | 60+ |
| **Hooks Personalizados** | 3 |
| **Reducción de Código** | 75-80% (con templates) |
| **Líneas CSS** | 717+ |
| **Tiempo Setup Lección** | ~5 minutos |

---

## 📁 ESTRUCTURA DEL PROYECTO

```
backend-learning-react/
├── src/
│   ├── components/                    # 61 componentes reutilizables
│   │   ├── LAYOUT & NAVIGATION
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Breadcrumb.jsx         ✅ Generación automática
│   │   │   └── ...
│   │   │
│   │   ├── LESSON TEMPLATES           # 75-80% reducción de código
│   │   │   ├── LessonTemplate.jsx     ⭐ ESTRELLA
│   │   │   ├── NarrativeLessonTemplate.jsx
│   │   │   └── LessonNavigation.jsx
│   │   │
│   │   ├── EDUCATIONAL CONTENT
│   │   │   ├── CodeBlock.jsx          ✅ Resaltado sintaxis
│   │   │   ├── Exercise.jsx           ✅ Con pistas/soluciones
│   │   │   ├── KeyPoints.jsx
│   │   │   ├── FAQ.jsx                ✅ Expandible
│   │   │   └── ComparisonTable.jsx
│   │   │
│   │   └── COMPONENTS
│   │       ├── Table.jsx
│   │       ├── InfoBox.jsx            ✅ 6 variantes
│   │       ├── TabBox.jsx
│   │       └── ...
│   │
│   ├── hooks/                         # 3 hooks personalizados
│   │   ├── useLessonSEO.js           ✅ Obtiene metadatos por ruta
│   │   ├── useBreadcrumb.js          ✅ Genera breadcrumbs
│   │   └── useNavbarScroll.js        ✅ Control de scroll
│   │
│   ├── config/                        # Configuración centralizada
│   │   ├── modulesConfig.js          ✅ 8 módulos completos
│   │   ├── lessonMetadata.js         ✅ Metadatos SEO 50+ lecciones
│   │   ├── authorConfig.js
│   │   └── lessonComponents.js
│   │
│   ├── pages/                         # 50+ lecciones en 8 módulos
│   │   ├── Home.jsx
│   │   ├── ModulePage.jsx
│   │   ├── GIT/                       (8 lecciones)
│   │   ├── JAVA_BASICO/              (7 lecciones)
│   │   ├── JAVA_POO/                 (4 lecciones)
│   │   ├── JAVA_AVANZADO/            (7 lecciones)
│   │   ├── PATRONES/                 (5 lecciones)
│   │   ├── SQL/                      (5 lecciones)
│   │   ├── SPRING_BOOT/              (8 lecciones)
│   │   └── IDES/                     (5 lecciones)
│   │
│   ├── App.jsx                        ✅ Con HelmetProvider
│   ├── App.css
│   ├── global.css
│   ├── index.css
│   └── main.jsx
│
├── public/
│   ├── sitemap.xml                   ✅ 60+ URLs
│   ├── robots.txt
│   └── ...
│
├── DOCUMENTATION/
│   ├── README.md                     ← Este archivo
│   ├── ARCHITECTURE.md               ✅ 952 líneas
│   ├── COMPONENTES_OPTIMIZADOS.md   ✅ 574 líneas
│   ├── MIGRACION_COMPLETADA.md
│   └── SEO.md
│
├── package.json                       ✅ React 19.2.7, Vite 8.1.1
├── vite.config.js
├── .oxlintrc.json
├── .gitignore
└── index.html
```

---

---

## 💡 FUNCIONALIDADES DESTACADAS

### 📑 Índice de Contenidos Automático
Cada lección incluye un **índice interactivo** (TableOfContents) que:
- Extrae automáticamente headings h2, h3, h4
- Crea navegación suave a cada sección
- Se renderiza como barra lateral colapsible
- Se integra sin configuración adicional

### 🔗 Navegación Inteligente
- **Breadcrumbs automáticos** generados desde rutas
- **Query parameters** para expandir secciones: `/java?section=basico`
- **Redirecciones automáticas** de URLs antiguas
- **Enlaces contextuales** en breadcrumbs hacia landing pages

### 🎯 Arquitectura Modular Consolidada
- **Módulos con secciones expandibles**: /modulo?section=seccionId
- **Patrones consistentes** en todos los módulos (Git, Java, SQL, Spring Boot, Entornos)
- **Lecciones organizadas jerárquicamente** sin redundancias
- **URL structure amigable para SEO**

---

## 🚀 EMPEZAR RÁPIDAMENTE

### Instalación
```bash
cd /Users/admin/Desktop/backend-learning-react
npm install
```

### Desarrollo
```bash
npm run dev
```
Abre: **http://localhost:5173**

### Build Producción
```bash
npm run build      # Crea /dist
npm run preview    # Previsualiza build
```

### Linting
```bash
npm run lint       # Oxlint analiza código
```

---

## 📚 MÓDULOS Y LECCIONES

> **Nota:** Todos los módulos usan un patrón consistente: `/modulo?section=seccionId` para expandir una sección específica

### 🔀 GIT
**Landing:** `/git` | **Secciones:** Básicos, Avanzado

```
/git?section=basicos
├─ /git/basicos/configuracion-inicial
├─ /git/basicos/crear-clonar-repos
├─ /git/basicos/commits
├─ /git/basicos/branches
└─ /git/basicos/merge

/git?section=avanzado
├─ /git/avanzado/push-pull-fetch
├─ /git/avanzado/pull-requests
└─ /git/avanzado/plataformas-remotas
```

### ☕ JAVA
**Landing:** `/java` | **Secciones:** Básico, POO, Avanzado, BD

```
/java?section=basico
├─ /java/basico/tipos-datos
├─ /java/basico/control-flujo
├─ /java/basico/strings
├─ /java/basico/arrays
├─ /java/basico/scanner
├─ /java/basico/excepciones
└─ /java/basico/operadores

/java?section=poo
├─ /java/poo/clases-objetos
├─ /java/poo/herencia
├─ /java/poo/polimorfismo
└─ /java/poo/interfaces-abstractas

/java?section=avanzado
├─ /java/avanzado/colecciones
├─ /java/avanzado/lambdas
├─ /java/avanzado/streams
└─ /java/avanzado/genericos

/java?section=bd
├─ /java/bd/jdbc
└─ /java/bd/crud
```

### 🗄️ SQL
**Landing:** `/sql` | **Secciones:** Básicos, Avanzado

```
/sql?section=basicos
├─ /sql/basicos/introduccion
├─ /sql/basicos/ddl
└─ /sql/basicos/dml

/sql?section=avanzado
├─ /sql/avanzado/joins
└─ /sql/avanzado/consultas-avanzadas
```

### 🌱 SPRING BOOT
**Landing:** `/spring-boot` | **Secciones:** Fundamentos, Avanzado

```
/spring-boot?section=fundamentos
├─ /spring-boot/fundamentos/introduccion
├─ /spring-boot/fundamentos/configuracion
└─ /spring-boot/fundamentos/controladores

/spring-boot?section=avanzado
├─ /spring-boot/avanzado/servicios
├─ /spring-boot/avanzado/jpa-hibernate
├─ /spring-boot/avanzado/validacion
├─ /spring-boot/avanzado/testing
├─ /spring-boot/avanzado/spring-security
└─ /spring-boot/avanzado/oauth2-jwt
```

### 🛠️ ENTORNOS
**Landing:** `/entornos` | **Secciones:** Herramientas, Arquitectura

```
/entornos?section=herramientas
├─ /entornos/herramientas/uml
├─ /entornos/herramientas/ides
├─ /entornos/herramientas/codeium
├─ /entornos/herramientas/bash
└─ /entornos/herramientas/conceptos

/entornos?section=arquitectura
├─ /entornos/arquitectura/patrones
├─ /entornos/arquitectura/conceptos
└─ /entornos/arquitectura/testing
```

---

## 🧩 COMPONENTES OPTIMIZADOS

### LessonTemplate ⭐ (ESTRELLA)
**Reduce 75-80% del código por lección**

```jsx
import { LessonTemplate } from '../components';
import { useBreadcrumb } from '../hooks/useBreadcrumb';

export function LessonDataTypes() {
  const breadcrumbs = useBreadcrumb();

  return (
    <LessonTemplate
      title="Tipos de Datos"
      breadcrumbs={breadcrumbs}
      sections={[
        { title: 'Conceptos', content: <p>...</p> }
      ]}
      concepts={[...]}
      exercises={[...]}
      keyPoints={['Punto 1', 'Punto 2']}
      summary="Resumen final"
    />
  );
}
```

**Antes:** ~150 líneas | **Después:** ~30 líneas | **Mejora:** 80% ↓

### Otros Componentes Reutilizables

| Componente | Uso | Beneficio |
|-----------|-----|----------|
| `TableOfContents` | 📑 Índice en lecciones | **Automático, sin config** |
| `Table` | Tablas de datos | Estilos consistentes |
| `InfoBox` | 6 variantes de cajas | Semántica clara |
| `TabBox` | Pestañas | Interfaz organizada |
| `FAQ` | Preguntas expandibles | UX mejorada |
| `CodeBlock` | Código resaltado | Legibilidad |
| `Exercise` | Ejercicios con pistas | Interactivo |
| `LessonNavigation` | Navegación lecciones | Flujo continuo |
| `ComparisonTable` | Comparativas | Análisis visual |

**TableOfContents** se integra automáticamente en cada lección a través de LessonLayout, extrayendo dinámicamente los headings (h2, h3, h4) y creando un índice interactivo con navegación suave.

**Ver:** [COMPONENTES_OPTIMIZADOS.md](./COMPONENTES_OPTIMIZADOS.md) para documentación completa

---

## 📖 CREAR UNA NUEVA LECCIÓN

### Opción 1: Con LessonTemplate (Recomendado - 5 minutos)

```jsx
// src/pages/LessonNuevo.jsx
import { LessonTemplate } from '../components';
import { useBreadcrumb } from '../hooks/useBreadcrumb';

export function LessonNuevo() {
  const breadcrumbs = useBreadcrumb();

  return (
    <LessonTemplate
      title="Título de la Lección"
      breadcrumbs={breadcrumbs}
      sections={[
        {
          title: 'Sección 1',
          content: (
            <>
              <p>Introducción</p>
              <p>Explicación detallada</p>
            </>
          )
        },
        {
          title: 'Sección 2',
          content: <p>Más contenido</p>
        }
      ]}
      concepts={[
        { icon: '📌', title: 'Concepto 1', description: 'Descripción' },
        { icon: '📌', title: 'Concepto 2', description: 'Descripción' }
      ]}
      exercises={[
        {
          title: 'Ejercicio 1',
          description: 'Escribe...',
          hints: ['Hint 1', 'Hint 2'],
          solution: 'Solución aquí'
        }
      ]}
      keyPoints={[
        'Punto clave 1',
        'Punto clave 2',
        'Punto clave 3'
      ]}
      summary="Resumen ejecutivo de la lección"
    />
  );
}
```

### Opción 2: Con Lesson (Para casos especiales)

```jsx
import { Lesson, LessonSection, CodeBlock, KeyPoints } from '../components';
import { useBreadcrumb } from '../hooks/useBreadcrumb';

export function LessonEspecial() {
  const breadcrumbs = useBreadcrumb();

  return (
    <Lesson breadcrumbs={breadcrumbs} title="Caso Especial">
      <LessonSection title="Sección 1">
        <p>Contenido personalizado</p>
        <CodeBlock language="java" code={`...`} />
      </LessonSection>
    </Lesson>
  );
}
```

### Paso 3: Registrar la Ruta

**En `src/App.jsx`:**
```jsx
<Route path="/modulo/nueva-leccion" element={<LessonNuevo />} />
```

**En `src/config/modulesConfig.js`:**
Agregar entrada en el módulo correspondiente

**En `src/config/lessonMetadata.js`:**
Agregar metadatos SEO

---

## 🔍 SEO & Metadatos

La plataforma incluye **SEO completo**:

✅ Meta tags dinámicos (title, description, keywords)
✅ Open Graph para redes sociales
✅ Breadcrumbs automáticos (JSON-LD compatible)
✅ Sitemap XML (60+ URLs)
✅ robots.txt optimizado
✅ Canonical URLs
✅ Mobile-friendly

**Ver:** [SEO.md](./SEO.md) y [ARCHITECTURE.md](./ARCHITECTURE.md)

---

## 🛠️ TECNOLOGÍAS

| Categoría | Tecnología | Versión |
|-----------|-----------|---------|
| **Framework** | React | 19.2.7 |
| **Routing** | React Router | 7.18.1 |
| **Build** | Vite | 8.1.1 |
| **Vite Plugin** | @vitejs/plugin-react | 6.0.3 |
| **SEO** | react-helmet-async | 3.0.0 |
| **Linting** | Oxlint | 1.71.0 |

---

## 📊 PRÓXIMOS PASOS

### Fase 1: Consolidación ✅
- [x] Estructura React moderna
- [x] 50+ lecciones implementadas
- [x] Componentes reutilizables
- [x] SEO completo

### Fase 2: Características (Próximo)
- [ ] Dark mode completo
- [ ] Búsqueda avanzada (filtros)
- [ ] Sistema de favoritos
- [ ] Progreso de usuario

### Fase 3: Backend
- [ ] Autenticación
- [ ] Base de datos
- [ ] Tracking de progreso
- [ ] Certificados

### Fase 4: Monetización
- [ ] Premium content
- [ ] Mentorías
- [ ] Certificaciones

---

## 📚 DOCUMENTACIÓN

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Arquitectura técnica completa (952 líneas)
- **[COMPONENTES_OPTIMIZADOS.md](./COMPONENTES_OPTIMIZADOS.md)** - Guía de componentes (574 líneas)
- **[SEO.md](./SEO.md)** - Implementación SEO detallada
- **[MIGRACION_COMPLETADA.md](./MIGRACION_COMPLETADA.md)** - Estadísticas de refactorización

---

## 🚀 HOSTING & DEPLOYMENT

### Opciones Recomendadas
- ✅ **Vercel** - Deploy automático, optimal para React
- ✅ **Netlify** - Alternativa a Vercel
- ✅ **GitHub Pages** - Gratis, perfecto para estáticos
- ✅ **AWS Amplify** - Scalable, integración AWS

### Deploy en Vercel (30 segundos)
```bash
npm i -g vercel
vercel
```

---

## 🤝 CONTRIBUIR

Este es un proyecto educativo. Si deseas contribuir:

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/nueva-leccion`)
3. Commit cambios (`git commit -am 'Agrega nueva lección'`)
4. Push a la rama (`git push origin feature/nueva-leccion`)
5. Abre un Pull Request

---

## 📝 LICENSE

MIT © Blanca Dum

---

## 🎓 CRÉDITOS

**Creador:** Blanca Dum
**Plataforma:** React + Vite
**Año:** 2026

---

## 🆘 SOPORTE

¿Preguntas o problemas?

- 📖 Revisa la [ARCHITECTURE.md](./ARCHITECTURE.md)
- 📚 Consulta [COMPONENTES_OPTIMIZADOS.md](./COMPONENTES_OPTIMIZADOS.md)
- 🔍 Busca en las lecciones existentes
- 💬 Abre un issue en GitHub

---

## ⭐ ¡Dale una estrella si te gusta!

Tu plataforma está lista para crecer. **¡Bienvenido a Java Backend Learning!** 🚀

---

**Última actualización:** 2026-07-05
**Versión:** 3.1 (50+ lecciones, componentes optimizados, TableOfContents integrado)
**Estado:** ✅ Producción lista
