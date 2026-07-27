import { LessonLayout, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonAngularServicios() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Servicios en Angular"
        description="Cómo compartir lógica entre componentes mediante servicios"
        breadcrumbs={breadcrumbs}
        seoTitle="Servicios en Angular - Compartir Lógica entre Componentes"
        seoDescription="Qué son los servicios en Angular y cómo se inyectan para reutilizar código."
        seoKeywords="angular, servicios, inyección de dependencias, reutilización"
        url="https://fullstackdevlovers.com/frontend/angular/servicios"
      >
        <p>
          Un componente no debería encargarse de todo: mostrar datos en pantalla, hacer peticiones a una
          API, validar formularios y guardar el estado de la aplicación. Para evitar ese caos, Angular
          propone separar la lógica reutilizable en <strong>servicios</strong>, algo muy parecido a la
          capa de servicio (<code>@Service</code>) que ya usas en Spring Boot.
        </p>

        <h2>¿Qué es un servicio?</h2>
        <p>
          Un servicio es una clase TypeScript normal y corriente, decorada con <code>@Injectable</code>,
          que encapsula lógica que varios componentes pueden necesitar: llamadas HTTP, cálculos,
          validaciones, gestión de estado compartido, etc. Al extraer esta lógica de los componentes:
        </p>
        <ul>
          <li>Evitas duplicar código en varios componentes.</li>
          <li>Los componentes quedan enfocados solo en la vista.</li>
          <li>El código es más fácil de testear de forma aislada.</li>
        </ul>

        <h2>Crear un servicio</h2>
        <p>La forma más rápida es generarlo con la CLI:</p>
        <CodeBlock language="bash" code={`ng generate service producto
# forma abreviada
ng g s producto`} />

        <p>Esto crea una clase decorada con <code>@Injectable</code>:</p>
        <CodeBlock
          language="javascript"
          code={`// producto.service.ts
import { Injectable } from '@angular/core';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[] = [
    { id: 1, nombre: 'Teclado mecánico', precio: 49.99 },
    { id: 2, nombre: 'Ratón inalámbrico', precio: 19.99 }
  ];

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  obtenerPorId(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }
}`}
        />

        <InfoBox type="info" title="providedIn: 'root'">
          <code>providedIn: 'root'</code> registra el servicio a nivel de toda la aplicación: Angular crea
          una única instancia (singleton) y la comparte con todos los componentes que la necesiten. Es la
          forma recomendada de registrar la mayoría de servicios.
        </InfoBox>

        <h2>Usar un servicio en un componente</h2>
        <p>
          Un servicio no se instancia con <code>new</code> manualmente. Se declara como parámetro del
          constructor del componente y Angular se encarga de "inyectarlo" automáticamente:
        </p>
        <CodeBlock
          language="javascript"
          code={`// listado-productos.component.ts
import { Component } from '@angular/core';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html'
})
export class ListadoProductosComponent {
  productos;

  constructor(private productoService: ProductoService) {
    this.productos = this.productoService.obtenerProductos();
  }
}`}
        />

        <h2>Casos de uso habituales</h2>
        <ul>
          <li>Comunicación con APIs REST (normalmente combinado con <code>HttpClient</code>).</li>
          <li>Almacenamiento y gestión de estado compartido entre componentes.</li>
          <li>Autenticación y gestión de sesión de usuario.</li>
          <li>Validaciones o lógica de negocio reutilizable.</li>
        </ul>

        <h2>Resumen</h2>
        <ul>
          <li>Un servicio es una clase TypeScript decorada con <code>@Injectable</code> que encapsula lógica reutilizable.</li>
          <li>Separar la lógica en servicios mantiene los componentes simples y centrados en la vista.</li>
          <li><code>providedIn: 'root'</code> crea una única instancia compartida por toda la app.</li>
          <li>Los servicios se inyectan en el constructor del componente, sin usar <code>new</code>.</li>
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
