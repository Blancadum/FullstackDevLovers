import { LessonLayout, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonProyectoDocumentacionFinal() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Documentación"
        description="Cómo documentar tu TFC para que sea comprensible y evaluable"
        breadcrumbs={breadcrumbs}
        seoTitle="Documentación del Proyecto TFC"
        seoDescription="Cómo redactar la documentación técnica y de usuario de tu Trabajo de Fin de Ciclo."
        seoKeywords="documentacion, tfc, proyecto"
        url="https://fullstackdevlovers.com/proyecto/despliegue/documentacion"
      >
        <p>
          Un proyecto sin documentación es un proyecto que solo tú entiendes, y solo mientras lo recuerdes. En esta lección vas
          a documentar tu TFC en tres niveles distintos: el README técnico (para que cualquiera lo instale y lo entienda), la
          documentación de tu API (para que se use sin adivinar) y la memoria del proyecto (para que el tribunal evalúe todo el
          trabajo que hay detrás, no solo el código).
        </p>

        <h2>Por qué documentar no es "perder tiempo"</h2>
        <p>
          Es tentador pensar que documentar resta tiempo a programar, pero en un TFC la documentación forma parte de la
          evaluación tanto como el código. Un backend brillante que nadie sabe cómo arrancar, o una API sin explicar cuyos
          endpoints hay que adivinar leyendo el código fuente, transmite descuido, aunque el código por debajo sea excelente.
        </p>

        <h2>1. El README: la puerta de entrada a tu proyecto</h2>
        <p>
          El <code>README.md</code>, en la raíz del repositorio, es lo primero que lee cualquiera (tu profesor, un compañero,
          tú mismo dentro de seis meses). Debe permitir que alguien clone tu proyecto y lo tenga funcionando sin preguntarte
          nada.
        </p>
        <CodeBlock language="text" title="Estructura recomendada de README.md" code={`# Nombre del Proyecto

Breve descripción: qué hace y qué problema resuelve.

## Stack tecnológico
Java 17, Spring Boot 3, Spring Data JPA, MySQL, Maven...

## Requisitos previos
- JDK 17+
- Maven 3.8+
- MySQL 8 (o el motor que uses)

## Instalación
1. Clonar el repositorio
2. Crear la base de datos (incluye el script SQL si aplica)
3. Configurar application.properties / variables de entorno
4. Ejecutar: mvn spring-boot:run

## Estructura del proyecto
Breve explicación de los paquetes principales (controller, service,
repository, model, dto...)

## Endpoints principales
Tabla o lista con los endpoints más importantes (o enlace a Swagger)

## Testing
Cómo ejecutar los tests: mvn test

## Autor
Tu nombre y contacto`} />

        <InfoBox type="tip">
          Escribe el README pensando en la persona con menos contexto posible: alguien que no sabe nada de tu proyecto y solo
          tiene diez minutos. Si tras leerlo no sabría cómo arrancarlo, falta información.
        </InfoBox>

        <h2>2. Documentar la API con Swagger / OpenAPI</h2>
        <p>
          Escribir a mano la documentación de cada endpoint es tedioso y se desactualiza rápido. La alternativa habitual en
          Spring Boot es <strong>springdoc-openapi</strong>, que genera documentación interactiva a partir de tu propio código
          y sus anotaciones.
        </p>
        <CodeBlock language="xml" title="pom.xml" code={`<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.5.0</version>
</dependency>`} />
        <p>
          {/* TODO-verificar: confirma la versión de springdoc-openapi compatible con tu versión concreta de Spring Boot antes de añadirla al pom.xml */}
          Con esa dependencia añadida, al arrancar tu aplicación tendrás disponible una interfaz interactiva (por defecto en
          <code>/swagger-ui.html</code>) donde se listan automáticamente todos tus endpoints, sin escribir nada más. Para
          enriquecerla, añade anotaciones descriptivas a tus controllers:
        </p>
        <CodeBlock language="java" code={`@RestController
@RequestMapping("/api/productos")
@Tag(name = "Productos", description = "Gestión del catálogo de productos")
public class ProductoController {

    @Operation(summary = "Obtener un producto por su id")
    @ApiResponse(responseCode = "200", description = "Producto encontrado")
    @ApiResponse(responseCode = "404", description = "Producto no existe")
    @GetMapping("/{id}")
    public ResponseEntity<ProductoDTO> obtenerPorId(@PathVariable Long id) {
        return ResponseEntity.ok(productoService.buscarPorId(id));
    }
}`} />
        <p>
          Con esto consigues dos cosas a la vez: documentación siempre sincronizada con el código real, y una forma de probar
          tu API sin necesidad de Postman, algo muy útil también el día de la defensa.
        </p>

        <h2>3. Javadoc en el código</h2>
        <p>
          Para las clases y métodos públicos más importantes (especialmente en <code>Service</code>, donde vive la lógica de
          negocio), añade comentarios Javadoc breves que expliquen el "por qué", no solo el "qué".
        </p>
        <CodeBlock language="java" code={`/**
 * Registra un nuevo usuario en el sistema.
 * Comprueba que el email no esté ya en uso y encripta la contraseña
 * antes de persistir la entidad.
 *
 * @param dto datos de registro recibidos desde el controller
 * @return el usuario creado, sin la contraseña en la respuesta
 * @throws DuplicateEmailException si el email ya está registrado
 */
public User register(UserDTO dto) {
    // ...
}`} />

        <h2>4. La memoria del proyecto (para el tribunal)</h2>
        <p>
          Además de la documentación técnica del repositorio, un TFC suele exigir una <strong>memoria</strong>: un documento
          más extenso, orientado a que el tribunal entienda el proyecto sin necesidad de leer el código. No es un README más
          largo; tiene otro propósito y otra estructura.
        </p>
        <CodeBlock language="text" title="Estructura orientativa de la memoria" code={`1. Introducción y motivación del proyecto
2. Objetivos y alcance (qué incluye y qué queda fuera)
3. Análisis de requisitos (funcionales y no funcionales)
4. Diseño: arquitectura, diagrama de capas, modelo entidad-relación
5. Tecnologías utilizadas y justificación de cada elección
6. Desarrollo: decisiones técnicas relevantes, dificultades y cómo se resolvieron
7. Testing: estrategia seguida, qué se cubrió
8. Despliegue: cómo y dónde se ha desplegado el proyecto
9. Conclusiones y posibles mejoras futuras
10. Manual de usuario (capturas de pantalla, flujos principales)`} />
        <InfoBox type="info">
          {/* TODO-verificar: la estructura exacta y el formato de entrega de la memoria dependen de las normas específicas de tu centro/ciclo; contrasta este esquema con las indicaciones de tu tutor de TFC */}
          Este esquema es un punto de partida habitual, pero cada centro puede pedir apartados distintos, un formato concreto
          o una extensión determinada. Antes de darla por cerrada, compárala con la plantilla o los criterios de evaluación que
          te haya facilitado tu tutor.
        </InfoBox>

        <h2>Resumen</h2>
        <p>
          Documentar tu TFC bien hecho significa cubrir tres capas distintas: un README que permita instalar y entender el
          proyecto en minutos, una documentación de API generada con Swagger/OpenAPI que quede siempre sincronizada con el
          código, y una memoria que explique el porqué de tus decisiones para quien va a evaluarte. Ninguna sustituye a las
          otras: juntas cuentan la historia completa de lo que has construido.
        </p>
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
