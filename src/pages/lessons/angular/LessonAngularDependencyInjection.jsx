import { LessonLayout, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonAngularDependencyInjection() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Inyección de Dependencias"
        description="El sistema de Dependency Injection (DI) de Angular y sus mejores prácticas"
        breadcrumbs={breadcrumbs}
        seoTitle="Inyección de Dependencias en Angular - Sistema DI"
        seoDescription="Cómo funciona el sistema de inyección de dependencias de Angular y mejores prácticas."
        seoKeywords="angular, dependency injection, di, providers"
        url="https://fullstackdevlovers.com/frontend/angular/dependency-injection"
      >
        <p>
          En la lección anterior inyectaste un servicio en el constructor de un componente sin explicar
          qué pasaba "por debajo". Ahora vamos a abrir esa caja: el sistema de{' '}
          <strong>inyección de dependencias</strong> (Dependency Injection, DI) de Angular. Si trabajas
          con Spring, este concepto ya te resulta familiar: es exactamente la misma idea aplicada al
          frontend.
        </p>

        <h2>¿Por qué inyección de dependencias?</h2>
        <p>
          Sin DI, cada clase tendría que crear con <code>new</code> sus propias dependencias, acoplando
          fuertemente el código y dificultando el testing (no podrías sustituir fácilmente una
          dependencia real por una simulada). Con DI, un sistema externo (el <strong>inyector</strong> de
          Angular) se encarga de crear y entregar las dependencias que cada clase necesita. Esto aporta:
        </p>
        <ul>
          <li><strong>Desacoplamiento:</strong> las clases no saben cómo se construyen sus dependencias.</li>
          <li><strong>Testabilidad:</strong> en los tests puedes inyectar versiones simuladas (mocks).</li>
          <li><strong>Reutilización:</strong> una misma instancia de servicio se puede compartir en toda la app.</li>
        </ul>

        <h2>Cómo funciona el inyector</h2>
        <p>
          Cuando Angular crea un componente, revisa los parámetros de su constructor. Si detecta un tipo
          que sabe cómo construir (por ejemplo, un servicio decorado con <code>@Injectable</code>), lo
          crea (o reutiliza una instancia existente) y lo pasa automáticamente:
        </p>
        <CodeBlock
          language="javascript"
          code={`import { Component } from '@angular/core';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html'
})
export class CarritoComponent {
  // Angular ve que necesitas un ProductoService y te lo entrega automáticamente
  constructor(private productoService: ProductoService) {}
}`}
        />

        <h2>Los tres pasos del sistema DI</h2>
        <ol>
          <li><strong>Declarar</strong> una clase como inyectable con <code>@Injectable</code>.</li>
          <li><strong>Registrar</strong> un proveedor (provider) que le diga a Angular cómo crear esa dependencia.</li>
          <li><strong>Inyectar</strong> la dependencia en el constructor de la clase que la necesita.</li>
        </ol>

        <h2>Proveedores (providers)</h2>
        <p>
          Un proveedor es la "receta" que le indica a Angular cómo construir una dependencia. La forma
          más habitual es registrar el proveedor directamente en el decorador del servicio con{' '}
          <code>providedIn: 'root'</code>, como viste en la lección anterior. Pero también puedes
          registrar proveedores de forma explícita, útil para casos más avanzados:
        </p>
        <CodeBlock
          language="javascript"
          code={`@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  providers: [ProductoService] // registrado solo para este componente y sus hijos
})
export class CarritoComponent {
  constructor(private productoService: ProductoService) {}
}`}
        />

        <InfoBox type="important" title="Inyectores jerárquicos">
          Angular organiza los inyectores en forma de árbol: hay un inyector "raíz" para toda la
          aplicación y cada componente puede tener el suyo propio. Si registras un servicio en{' '}
          <code>providers</code> de un componente, ese componente y todos sus hijos recibirán su{' '}
          <strong>propia instancia</strong>, distinta de la del resto de la aplicación.
        </InfoBox>

        <h2>Tipos de proveedores avanzados</h2>
        <p>
          Además de registrar la clase directamente, Angular permite configurar cómo se resuelve una
          dependencia con distintas estrategias:
        </p>
        <CodeBlock
          language="javascript"
          code={`providers: [
  // usar una clase distinta cuando se pida ProductoService
  { provide: ProductoService, useClass: ProductoServiceMock },

  // proporcionar un valor fijo directamente
  { provide: 'API_URL', useValue: 'https://api.miapp.com' },

  // construir la dependencia con una función factory
  { provide: ProductoService, useFactory: () => new ProductoService() }
]`}
        />

        <h2>Resumen</h2>
        <ul>
          <li>DI desacopla las clases de la creación de sus propias dependencias.</li>
          <li>El inyector de Angular crea y entrega automáticamente las dependencias declaradas en el constructor.</li>
          <li>Los proveedores (<code>providers</code>) le dicen a Angular cómo construir cada dependencia.</li>
          <li>Los inyectores son jerárquicos: puedes tener instancias distintas según dónde registres el proveedor.</li>
          <li><code>useClass</code>, <code>useValue</code> y <code>useFactory</code> permiten configurar proveedores avanzados.</li>
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
