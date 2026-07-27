import { LessonLayout, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonAngularIntroduccion() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Introducción a Angular"
        description="Fundamentos del framework Angular: historia, características y primer proyecto"
        breadcrumbs={breadcrumbs}
        seoTitle="Introducción a Angular - Guía Completa"
        seoDescription="Fundamentos de Angular: historia, características, instalación y primer proyecto."
        seoKeywords="angular, introducción, framework, spa, typescript"
        url="https://fullstackdevlovers.com/frontend/angular/introduccion"
      >
        <p>
          En esta lección vas a conocer Angular: qué es, para qué se usa en el mundo real y cómo arrancar
          tu primer proyecto. Si vienes de Java y Spring Boot, piensa en Angular como el "framework
          empresarial" del frontend: mismo nivel de estructura, convenciones y herramientas que ya conoces
          en backend, pero aplicado a la interfaz de usuario.
        </p>

        <h2>¿Qué es Angular?</h2>
        <p>
          Angular es un framework <strong>full-featured</strong> mantenido por Google para construir
          aplicaciones web de una sola página (SPA, <em>Single Page Application</em>). A diferencia de
          librerías más pequeñas centradas solo en la vista, Angular trae de fábrica todo lo necesario
          para un proyecto grande: routing, formularios, inyección de dependencias, cliente HTTP y una
          CLI potente para generar código.
        </p>
        <p>
          Angular está escrito en <strong>TypeScript</strong> (superset de JavaScript con tipado
          estático), lo que aporta seguridad de tipos, autocompletado y errores detectados en tiempo de
          compilación, algo que como desarrollador Java ya valoras.
        </p>

        <InfoBox type="info" title="Angular vs AngularJS">
          Angular (desde la versión 2 en adelante) no tiene nada que ver con AngularJS (la versión 1.x).
          Son proyectos distintos: AngularJS usaba JavaScript y una arquitectura MVC clásica; Angular usa
          TypeScript y una arquitectura basada en componentes. Cuando hoy se habla de "Angular" nos
          referimos siempre a las versiones modernas.
        </InfoBox>

        <h2>Características principales</h2>
        <ul>
          <li><strong>TypeScript nativo:</strong> tipado estático que reduce errores en tiempo de ejecución.</li>
          <li><strong>Arquitectura basada en componentes:</strong> la interfaz se construye combinando piezas reutilizables.</li>
          <li><strong>Routing completo:</strong> un router oficial para gestionar la navegación entre vistas.</li>
          <li><strong>Formularios reactivos:</strong> validación de formularios robusta e integrada.</li>
          <li><strong>Inyección de dependencias:</strong> un sistema de DI incluido, similar en espíritu al de Spring.</li>
          <li><strong>RxJS:</strong> programación reactiva basada en Observables para manejar datos asíncronos.</li>
          <li><strong>Angular CLI:</strong> herramienta de línea de comandos para crear, ejecutar y construir proyectos.</li>
        </ul>

        <h2>Instalar Angular CLI y crear un proyecto</h2>
        <p>
          Angular se gestiona con Node.js y su gestor de paquetes npm. Antes de crear un proyecto necesitas
          tener Node.js instalado. Con eso listo, instala la CLI de Angular de forma global:
        </p>
        <CodeBlock
          language="bash"
          code={`# Instalar Angular CLI de forma global
npm install -g @angular/cli

# Comprobar que se ha instalado correctamente
ng version`}
        />
        <p>Con la CLI instalada, puedes generar un proyecto nuevo y arrancarlo en modo desarrollo:</p>
        <CodeBlock
          language="bash"
          code={`# Crear un proyecto nuevo llamado "mi-app"
ng new mi-app

# Entrar en la carpeta del proyecto
cd mi-app

# Arrancar el servidor de desarrollo
ng serve`}
        />
        <p>
          Por defecto, <code>ng serve</code> levanta la aplicación en <code>http://localhost:4200</code>
          y recarga automáticamente el navegador cada vez que guardas un cambio (hot reload).
        </p>

        <h2>Estructura básica de un proyecto Angular</h2>
        <p>
          Al generar un proyecto con <code>ng new</code>, la CLI crea una estructura de carpetas ya
          organizada. Las partes más importantes para empezar son:
        </p>
        <CodeBlock
          language="text"
          code={`mi-app/
├── src/
│   ├── app/                  # Componentes, servicios y lógica de la app
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.component.css
│   ├── index.html            # Punto de entrada HTML
│   └── main.ts                # Arranque de la aplicación
├── angular.json               # Configuración del proyecto
├── package.json                # Dependencias npm
└── tsconfig.json               # Configuración de TypeScript`}
        />

        <h2>Resumen</h2>
        <ul>
          <li>Angular es un framework completo de Google para construir SPAs con TypeScript.</li>
          <li>No debes confundirlo con AngularJS (versión 1.x), son proyectos distintos.</li>
          <li>Incluye routing, formularios, DI, HTTP client y RxJS de serie.</li>
          <li>La Angular CLI (<code>ng</code>) se usa para crear, ejecutar y construir proyectos.</li>
          <li><code>ng serve</code> levanta un servidor de desarrollo con recarga automática.</li>
        </ul>
      </LessonLayout>
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}
