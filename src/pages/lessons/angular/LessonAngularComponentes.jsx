import { LessonLayout, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonAngularComponentes() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Componentes y Templates"
        description="La unidad básica de Angular: componentes, templates y property binding"
        breadcrumbs={breadcrumbs}
        seoTitle="Componentes en Angular - Templates y Decoradores"
        seoDescription="Cómo crear y usar componentes, templates y property binding en Angular."
        seoKeywords="angular, componentes, templates, decorators"
        url="https://fullstackdevlovers.com/frontend/angular/componentes"
      >
        <p>
          En esta lección vas a aprender qué es un componente en Angular y cómo se construye. Los
          componentes son la pieza fundamental de cualquier aplicación Angular: si conoces las clases
          Java anotadas con <code>@Service</code> o <code>@Controller</code> en Spring, la idea de
          "clase + anotación (decorador) que le da un rol especial" te resultará muy familiar.
        </p>

        <h2>¿Qué es un componente?</h2>
        <p>
          Un componente es una clase TypeScript decorada con <code>@Component</code> que controla una
          porción de la pantalla: define qué se muestra (template HTML), cómo se ve (estilos CSS) y qué
          lógica tiene asociada (propiedades y métodos de la clase). Las aplicaciones Angular son, en
          esencia, un árbol de componentes anidados unos dentro de otros.
        </p>

        <h2>Estructura de un componente</h2>
        <p>Un componente típico se compone de tres piezas que trabajan juntas:</p>
        <ul>
          <li><strong>Clase TypeScript:</strong> contiene las propiedades y la lógica del componente.</li>
          <li><strong>Decorador <code>@Component</code>:</strong> metadatos que le dicen a Angular cómo usar esa clase (selector, plantilla, estilos).</li>
          <li><strong>Template (HTML):</strong> la vista que se renderiza en el navegador.</li>
        </ul>

        <p>Así se genera un componente nuevo con la CLI (crea automáticamente los cuatro ficheros):</p>
        <CodeBlock language="bash" code={`ng generate component saludo
# forma abreviada
ng g c saludo`} />

        <p>Y así queda la clase del componente, con su decorador:</p>
        <CodeBlock
          language="javascript"
          code={`// saludo.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
  nombre: string = 'Mundo';

  cambiarNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
  }
}`}
        />

        <p>Su plantilla HTML asociada puede usar directamente las propiedades de la clase:</p>
        <CodeBlock
          language="xml"
          code={`<!-- saludo.component.html -->
<h1>Hola, {{ nombre }}!</h1>
<button (click)="cambiarNombre('Angular')">Cambiar nombre</button>`}
        />

        <InfoBox type="tip" title="El selector">
          La propiedad <code>selector: 'app-saludo'</code> define el nombre de la etiqueta HTML que
          usarás para insertar este componente dentro de otro: <code>&lt;app-saludo&gt;&lt;/app-saludo&gt;</code>.
          Así es como los componentes se anidan entre sí para formar la aplicación completa.
        </InfoBox>

        <h2>Componentes anidados</h2>
        <p>
          Un componente puede usar a otro dentro de su template, exactamente igual que insertarías un
          widget reutilizable en cualquier interfaz. Por ejemplo, el componente raíz de la aplicación
          (<code>AppComponent</code>) podría usar el componente <code>SaludoComponent</code> así:
        </p>
        <CodeBlock
          language="xml"
          code={`<!-- app.component.html -->
<header>
  <h1>Mi aplicación Angular</h1>
</header>

<app-saludo></app-saludo>`}
        />

        <h2>Resumen</h2>
        <ul>
          <li>Un componente es una clase TypeScript decorada con <code>@Component</code>.</li>
          <li>Combina lógica (clase), vista (template HTML) y estilos (CSS).</li>
          <li>El <code>selector</code> define cómo se usa el componente como etiqueta HTML.</li>
          <li>Los componentes se anidan unos dentro de otros para construir la interfaz completa.</li>
          <li><code>ng generate component</code> (o <code>ng g c</code>) crea la estructura base automáticamente.</li>
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
