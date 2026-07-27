import { LessonLayout, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonAngularDataBinding() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Data Binding"
        description="Vinculación de datos en Angular: interpolación, property, event y two-way binding"
        breadcrumbs={breadcrumbs}
        seoTitle="Data Binding en Angular - Interpolación y Two-Way Binding"
        seoDescription="Interpolación, property binding, event binding y two-way binding en Angular."
        seoKeywords="angular, data binding, property binding, two-way binding"
        url="https://fullstackdevlovers.com/frontend/angular/data-binding"
      >
        <p>
          Ahora que ya sabes qué es un componente, toca aprender cómo se comunican la clase TypeScript y
          su template HTML. A eso se le llama <strong>data binding</strong> (vinculación de datos): el
          mecanismo que sincroniza automáticamente los datos del componente con lo que se ve en pantalla,
          y viceversa.
        </p>

        <h2>¿Qué es el data binding?</h2>
        <p>
          Sin data binding tendrías que actualizar el HTML "a mano" cada vez que cambia un dato en tu
          código, como se hacía antiguamente manipulando el DOM directamente. Angular ofrece cuatro formas
          de vincular datos entre la clase y la plantilla, y cada una tiene su sintaxis propia:
        </p>
        <ul>
          <li><strong>Interpolación:</strong> <code>{'{{ variable }}'}</code> — muestra un valor en el HTML.</li>
          <li><strong>Property binding:</strong> <code>[propiedad]="valor"</code> — asigna un valor a una propiedad del elemento.</li>
          <li><strong>Event binding:</strong> <code>(evento)="metodo()"</code> — ejecuta un método al producirse un evento.</li>
          <li><strong>Two-way binding:</strong> <code>[(ngModel)]="propiedad"</code> — combina property y event binding en ambos sentidos.</li>
        </ul>

        <h2>Interpolación: mostrar datos</h2>
        <p>
          La interpolación inserta el valor de una propiedad de la clase directamente en el texto del
          template, usando doble llave.
        </p>
        <CodeBlock
          language="javascript"
          code={`// producto.component.ts
export class ProductoComponent {
  nombre: string = 'Teclado mecánico';
  precio: number = 49.99;
}`}
        />
        <CodeBlock
          language="xml"
          code={`<!-- producto.component.html -->
<h2>{{ nombre }}</h2>
<p>Precio: {{ precio }} €</p>`}
        />

        <h2>Property binding: pasar datos a un elemento</h2>
        <p>
          El property binding asigna el valor de una propiedad del componente a una propiedad de un
          elemento HTML o de otro componente, usando corchetes.
        </p>
        <CodeBlock
          language="xml"
          code={`<!-- deshabilita el botón según una propiedad del componente -->
<button [disabled]="cargando">Guardar</button>

<!-- asigna una URL de imagen dinámica -->
<img [src]="urlImagen" [alt]="nombre">`}
        />

        <h2>Event binding: reaccionar a acciones del usuario</h2>
        <p>
          El event binding ejecuta un método de la clase cuando ocurre un evento del DOM (click, input,
          submit...), usando paréntesis.
        </p>
        <CodeBlock
          language="javascript"
          code={`// contador.component.ts
export class ContadorComponent {
  total: number = 0;

  incrementar(): void {
    this.total++;
  }
}`}
        />
        <CodeBlock
          language="xml"
          code={`<!-- contador.component.html -->
<p>Total: {{ total }}</p>
<button (click)="incrementar()">Sumar 1</button>`}
        />

        <h2>Two-way binding: sincronización en ambos sentidos</h2>
        <p>
          El two-way binding combina property y event binding en una sola sintaxis, muy útil en
          formularios: si el usuario cambia el valor de un input, la propiedad de la clase se actualiza
          automáticamente, y si la propiedad cambia desde código, el input se actualiza también.
        </p>
        <CodeBlock
          language="javascript"
          code={`// buscador.component.ts
export class BuscadorComponent {
  termino: string = '';
}`}
        />
        <CodeBlock
          language="xml"
          code={`<!-- buscador.component.html -->
<input [(ngModel)]="termino" placeholder="Buscar...">
<p>Estás buscando: {{ termino }}</p>`}
        />

        <InfoBox type="warning" title="ngModel necesita FormsModule">
          Para usar <code>[(ngModel)]</code> necesitas importar <code>FormsModule</code> en el módulo (o
          en el componente, si trabajas con componentes standalone). Si no lo importas, Angular no
          reconocerá la directiva <code>ngModel</code> y lanzará un error en tiempo de compilación.
        </InfoBox>

        <h2>Resumen</h2>
        <ul>
          <li>Interpolación <code>{'{{ }}'}</code>: muestra datos del componente en el template.</li>
          <li>Property binding <code>[propiedad]</code>: asigna valores a propiedades de elementos.</li>
          <li>Event binding <code>(evento)</code>: ejecuta lógica al reaccionar a eventos del usuario.</li>
          <li>Two-way binding <code>[(ngModel)]</code>: sincroniza datos en ambas direcciones, típico en formularios.</li>
          <li><code>ngModel</code> requiere importar <code>FormsModule</code>.</li>
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
