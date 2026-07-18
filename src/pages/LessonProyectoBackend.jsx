import { LessonTemplate, CodeBlock, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonProyectoBackend() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const concepts = [
    { icon: '🔧', title: 'Desarrollo Backend', definition: 'Implementación de lógica de negocio en servidor', example: 'Controllers, Services, Repositories en Spring Boot' },
  ];
  const sections = [
    {
      title: 'Desarrollo Backend con Spring Boot',
      content: (
        <>
          <p>
            El <strong>desarrollo backend</strong> es implementar la lógica de tu aplicación en el servidor. Es el "cerebro"
            que procesa requests, valida datos, ejecuta lógica de negocio, y retorna respuestas. Spring Boot hace que esto sea
            relativamente fácil con anotaciones y convenciones.
          </p>

          <h3>Estructura Típica de un Controlador</h3>
          <p>
            Un <strong>Controller</strong> en Spring Boot usa anotación @RestController para indicar que maneja requests HTTP.
            La anotación @RequestMapping("/api/products") define la ruta base. Métodos individuales como @GetMapping, @PostMapping
            definen endpoints específicos. El Spring framework automáticamente deserializa JSON a objetos Java, maneja excepciones,
            y serializa respuestas a JSON. Esto es "magia" que hace el desarrollo más rápido.
          </p>

          <h3>Estructura Típica de un Service</h3>
          <p>
            Un <strong>Service</strong> contiene lógica de negocio. Es anotado con @Service. Inyectas Repositories con @Autowired.
            Métodos públicos implementan acciones: getAllProducts(), createProduct(dto), updateProduct(id, dto), deleteProduct(id).
            Aquí es donde validas, calculas, aplicas reglas de negocio. El Service es "gordo" de lógica.
          </p>

          <h3>Estructura Típica de un Repository</h3>
          <p>
            Un <strong>Repository</strong> extiende JpaRepository (de Spring Data). Te proporciona automáticamente métodos CRUD:
            findAll(), findById(id), save(entity), delete(entity). Puedes definir queries personalizadas con @Query. El Repository
            abstrae base de datos; Spring genera SQL automáticamente basado en nombres de métodos.
          </p>

          <h3>Flujo de Desarrollo</h3>
          <p>
            Típicamente, desarrollas backend en este orden: Primero, define tus Models (entidades). Luego, crea Repositories.
            Después, implementa Services con lógica. Finalmente, expone Controllers como APIs. Testa cada capa por separado.
            Esto es "desarrollo de abajo hacia arriba" (bottom-up). Algunos prefieren top-down (Controllers primero). Ambos
            funcionan si eres disciplinado.
          </p>

          <InfoBox type="info">
            <strong>Tip importante:</strong> Separa responsabilidades. Controllers son flacos (poco código). Services son gordos (mucha lógica).
            Repositories son especialistas en BD. Esto permite testing fácil y código mantenible.
          </InfoBox>
        </>
      )
    }
  ];

      return (
    <>
      <LessonTemplate
        title="Desarrollo Backend"
        breadcrumbs={breadcrumbs}
        concepts={concepts}
        sections={sections}
      />
      <LessonNavigation
        previousLink={nav.previous}
        previousTitle={nav.previousTitle}
        nextLink={nav.next}
        nextTitle={nav.nextTitle}
      />
    </>
  );
}