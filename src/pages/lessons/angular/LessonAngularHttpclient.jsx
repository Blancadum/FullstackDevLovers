import { LessonLayout, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonAngularHttpclient() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="HttpClient y APIs"
        description="Cómo comunicarse con servidores y APIs REST usando HttpClient"
        breadcrumbs={breadcrumbs}
        seoTitle="HttpClient en Angular - Peticiones a APIs REST"
        seoDescription="Cómo hacer peticiones HTTP a APIs REST con el servicio HttpClient de Angular."
        seoKeywords="angular, httpclient, api, rest, observables"
        url="https://fullstackdevlovers.com/frontend/angular/httpclient"
      >
        <p>
          Ya sabes crear componentes, servicios y cómo Angular inyecta las dependencias. Ahora toca cerrar
          el círculo: cómo un frontend Angular habla con un backend real, por ejemplo esa API REST hecha
          con Spring Boot que ya conoces. Para eso Angular ofrece <code>HttpClient</code>, su servicio
          integrado para hacer peticiones HTTP.
        </p>

        <h2>¿Qué es HttpClient?</h2>
        <p>
          <code>HttpClient</code> es un servicio de Angular que permite hacer peticiones HTTP (GET, POST,
          PUT, DELETE...) a APIs REST. Al igual que cualquier otro servicio, se inyecta mediante el
          sistema de DI que ya conoces. Sus características principales:
        </p>
        <ul>
          <li>Métodos dedicados para cada verbo HTTP: <code>get()</code>, <code>post()</code>, <code>put()</code>, <code>delete()</code>.</li>
          <li>Trabaja con <strong>Observables</strong> de RxJS en lugar de Promises.</li>
          <li>Soporta interceptores para transformar peticiones y respuestas de forma centralizada (por ejemplo, añadir un token de autenticación).</li>
          <li>Facilita el manejo de errores mediante operadores como <code>catchError</code>.</li>
        </ul>

        <h2>Importar HttpClient</h2>
        <p>Antes de poder inyectarlo, tienes que habilitarlo en la configuración de la aplicación:</p>
        <CodeBlock
          language="javascript"
          code={`// app.module.ts (proyectos basados en NgModules)
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    // ...otros módulos
    HttpClientModule
  ]
})
export class AppModule {}`}
        />

        <InfoBox type="info" title="Componentes standalone">
          En proyectos modernos basados en componentes <em>standalone</em>, en lugar de{' '}
          <code>HttpClientModule</code> se habilita <code>provideHttpClient()</code> en el arranque de la
          aplicación.
          {/* TODO-verificar: confirmar sintaxis exacta y disponibilidad según la versión de Angular usada en el curso */}
        </InfoBox>

        <h2>Hacer una petición GET desde un servicio</h2>
        <p>
          La práctica recomendada es inyectar <code>HttpClient</code> dentro de un servicio propio, no
          directamente en los componentes. Así mantienes la lógica de acceso a datos centralizada:
        </p>
        <CodeBlock
          language="javascript"
          code={`// producto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'https://api.miapp.com/productos';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }
}`}
        />

        <h2>Consumir el Observable en un componente</h2>
        <p>
          <code>HttpClient</code> no ejecuta la petición hasta que alguien se <strong>suscribe</strong> al
          Observable que devuelve. Es habitual suscribirse dentro del componente que necesita mostrar los
          datos:
        </p>
        <CodeBlock
          language="javascript"
          code={`// listado-productos.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html'
})
export class ListadoProductosComponent implements OnInit {
  productos: any[] = [];
  cargando = true;
  error = false;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe({
      next: (datos) => {
        this.productos = datos;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar productos', err);
        this.error = true;
        this.cargando = false;
      }
    });
  }
}`}
        />

        <p>Y su plantilla, usando lo aprendido sobre data binding:</p>
        <CodeBlock
          language="xml"
          code={`<!-- listado-productos.component.html -->
<p *ngIf="cargando">Cargando productos...</p>
<p *ngIf="error">Ha ocurrido un error al cargar los productos.</p>

<ul *ngIf="!cargando && !error">
  <li *ngFor="let producto of productos">
    {{ producto.nombre }} - {{ producto.precio }} €
  </li>
</ul>`}
        />

        <InfoBox type="warning" title="No olvides gestionar errores">
          Una petición HTTP siempre puede fallar: el servidor puede estar caído, la conexión puede
          perderse o la API puede devolver un error. Maneja siempre la rama <code>error</code> del{' '}
          <code>subscribe</code> para mostrar feedback al usuario en lugar de dejar la aplicación
          "colgada".
        </InfoBox>

        <h2>Resumen</h2>
        <ul>
          <li><code>HttpClient</code> es el servicio de Angular para hacer peticiones HTTP a APIs REST.</li>
          <li>Devuelve Observables de RxJS, que hay que suscribir para que la petición se ejecute.</li>
          <li>Se inyecta normalmente dentro de un servicio propio, no directamente en los componentes.</li>
          <li>Los métodos <code>get()</code>, <code>post()</code>, <code>put()</code> y <code>delete()</code> cubren los verbos HTTP habituales.</li>
          <li>Gestiona siempre los errores en el <code>subscribe</code> para dar una buena experiencia de usuario.</li>
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
