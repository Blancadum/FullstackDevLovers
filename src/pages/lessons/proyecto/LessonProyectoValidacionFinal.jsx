import { LessonLayout, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonProyectoValidacionFinal() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Validación Final"
        description="Checklist final de validación antes de dar por cerrado el TFC"
        breadcrumbs={breadcrumbs}
        seoTitle="Validación Final del Proyecto TFC"
        seoDescription="Checklist de validación final para asegurar la calidad y completitud de tu Trabajo de Fin de Ciclo antes de la entrega."
        seoKeywords="validacion, tfc, proyecto, checklist"
        url="https://fullstackdevlovers.com/proyecto/testing/validacion"
      >
        <p>
          Ya tienes el backend construido, testeado y (casi) listo. Antes de entregarlo al tribunal falta el paso que más
          nervios ahorra el día de la defensa: pasar tu propio TFC por un checklist exhaustivo, como si fueras un revisor
          externo. En esta lección vamos a repasar, punto por punto, todo lo que debes verificar en tu proyecto antes de decir
          "está listo".
        </p>

        <h2>Por qué una checklist y no "ya lo revisé por encima"</h2>
        <p>
          Después de semanas metido en el mismo código, tu cerebro deja de ver los fallos: das por hecho cosas que en realidad
          no funcionan, o ni te acuerdas de esa rama que dejaste a medias hace tres semanas. Una checklist estructurada te obliga
          a mirar tu proyecto con criterios objetivos, uno por uno, en vez de confiar en la sensación de "creo que está bien".
        </p>

        <h2>1. Checklist funcional</h2>
        <p>
          Vuelve a tu documento de requisitos inicial (el de la fase de definición del proyecto) y comprueba, uno a uno, que
          cada historia de usuario que prometiste está implementada y funciona.
        </p>
        <CodeBlock language="text" code={`[ ] Cada historia de usuario del documento inicial está implementada
[ ] Las operaciones CRUD principales funcionan de extremo a extremo
[ ] Los flujos de error devuelven una respuesta clara (400, 401, 403, 404...)
[ ] La autenticación y los permisos por rol funcionan como se diseñaron
[ ] No quedan funcionalidades "a medias" sin avisar en la memoria`} />

        <h2>2. Checklist técnico</h2>
        <p>
          Aquí revisas la salud del código y del build, no solo si "funciona en tu máquina".
        </p>
        <CodeBlock language="bash" code={`# El proyecto compila limpio, sin errores
mvn clean compile

# Todos los tests pasan (unitarios + integración)
mvn clean test

# El build de producción se genera sin problemas
mvn clean package`} />
        <CodeBlock language="text" code={`[ ] mvn clean package termina sin errores ni warnings graves
[ ] Todos los tests (unitarios e integración) pasan en verde
[ ] No hay credenciales ni contraseñas hardcodeadas en el código
[ ] El .gitignore excluye target/, .env, application-prod.properties reales
[ ] El README explica cómo clonar, configurar y arrancar el proyecto
[ ] Los commits tienen mensajes descriptivos (no "fix", "cambios", "asd")`} />

        <InfoBox type="warning">
          Busca en todo el repositorio contraseñas, API keys o URLs de bases de datos escritas directamente en el código
          (<code>grep -ri "password" src/</code> es un buen primer filtro). Si encuentras alguna, muévela a variables de
          entorno antes de entregar. Es uno de los fallos más penalizados en una defensa de TFC.
        </InfoBox>

        <h2>3. Checklist de calidad de código</h2>
        <p>
          No hace falta perfección, pero sí coherencia. Un tribunal técnico se fija en si tu código sigue las buenas prácticas
          que se supone que has aprendido durante el curso.
        </p>
        <CodeBlock language="text" code={`[ ] Nombres de clases, métodos y variables descriptivos (no "a", "temp", "datos2")
[ ] Cada clase tiene una responsabilidad clara (Controller, Service, Repository)
[ ] Las excepciones se gestionan con @ExceptionHandler, no con try/catch vacíos
[ ] Los DTOs separan lo que expone la API de las entidades de base de datos
[ ] No hay código comentado "por si acaso" ni prints de depuración olvidados`} />

        <h2>4. Checklist de seguridad</h2>
        <p>
          Antes de exponer tu proyecto en internet (siguiente lección), repasa lo básico de seguridad. No se trata de
          convertirlo en un fortín, sino de evitar los errores más evidentes.
        </p>
        <CodeBlock language="text" code={`[ ] Las contraseñas se guardan encriptadas (BCryptPasswordEncoder), nunca en texto plano
[ ] Los endpoints sensibles requieren autenticación (Spring Security / JWT)
[ ] La validación de entrada existe en el backend, no solo en el frontend
[ ] CORS está configurado para los orígenes que realmente necesitas, no con "*" en producción
[ ] Los mensajes de error no filtran información interna (stack traces, rutas del servidor)`} />

        <h2>5. Última pasada: pruébalo como usuario, no como programador</h2>
        <p>
          Cierra el IDE un momento. Abre el proyecto (o su Swagger/Postman) como si fueras alguien que no ha escrito ni una
          línea de código. Sigue el flujo completo de tu aplicación de principio a fin: regístrate, inicia sesión, crea un
          recurso, edítalo, elimínalo. Cualquier fricción o error que encuentres ahora es un fallo que preferirías detectar tú
          mismo, no el tribunal en directo.
        </p>

        <InfoBox type="tip">
          Pide a un compañero que no conozca el proyecto que lo pruebe siguiendo solo tu README. Si se atasca en el setup, es
          una señal clara de que tu documentación (siguiente lección) necesita más detalle.
        </InfoBox>

        <h2>Resumen</h2>
        <p>
          La validación final no es "darle una ojeada" antes de entregar: es una revisión sistemática en cuatro frentes —
          funcional, técnico, calidad de código y seguridad— apoyada en una checklist objetiva. Revisa que cada requisito
          prometido esté implementado, que el build y los tests pasen limpios, que no haya secretos filtrados en el
          repositorio, y que el flujo completo funcione probándolo como lo haría un usuario real. Este paso es el que separa
          un proyecto que "funciona" de un proyecto que está realmente listo para defenderse.
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
