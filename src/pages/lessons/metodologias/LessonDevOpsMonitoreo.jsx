import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonDevOpsMonitoreo() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Monitoreo y Logs"
        description="Cómo observar el estado de un sistema en producción mediante métricas y logs"
        breadcrumbs={breadcrumbs}
        seoTitle="Monitoreo y Logs en DevOps"
        seoDescription="Cómo monitorizar aplicaciones en producción: métricas, logs y alertas."
        seoKeywords="monitoreo, logs, observabilidad, devops, alertas"
        url="https://fullstackdevlovers.com/metodologias/devops/monitoreo"
      >
        <p>
          Un pipeline de CI/CD termina cuando el código llega a producción,
          pero el trabajo de DevOps no acaba ahí. En esta lección vas a
          aprender por qué es necesario observar un sistema en producción y
          qué herramientas básicas se usan para ello: métricas, logs y
          alertas.
        </p>

        <LessonSection title="¿Por qué monitorizar?" level={1}>
          <p>
            Por muchos tests que hayas escrito, el entorno de producción es
            distinto al de desarrollo: hay más usuarios reales, más carga, más
            datos y más variables fuera de tu control. La{' '}
            <strong>monitorización</strong> (u <em>observabilidad</em>) es la
            práctica de recoger información continua sobre el estado del
            sistema en producción, para poder detectar y resolver problemas
            antes de que afecten a muchos usuarios.
          </p>
          <InfoBox type="warning">
            Sin monitorización, la primera persona en enterarse de que algo
            falla suele ser el usuario, no el equipo de desarrollo. El
            objetivo es darle la vuelta a esa situación.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Las tres patas de la observabilidad" level={1}>
          <ul>
            <li><strong>Métricas:</strong> valores numéricos medidos a lo largo del tiempo, como el número de peticiones por segundo, el tiempo de respuesta o el porcentaje de uso de CPU.</li>
            <li><strong>Logs:</strong> registros de eventos concretos que ha hecho la aplicación (una petición recibida, un error, un usuario que se ha autenticado...), normalmente con fecha, hora y nivel de severidad.</li>
            <li><strong>Trazas (traces):</strong> el recorrido completo de una petición a través de los distintos servicios que la procesan, útil sobre todo en arquitecturas con varios microservicios.</li>
          </ul>
        </LessonSection>

        <LessonSection title="Niveles de log" level={1}>
          <p>
            No todos los eventos tienen la misma importancia. Por eso los
            logs se clasifican por <strong>nivel de severidad</strong>, de
            menor a mayor gravedad:
          </p>
          <CodeBlock
            language="text"
            code={`TRACE  → detalle muy fino, casi solo útil para depurar en desarrollo
DEBUG  → información útil para diagnosticar problemas
INFO   → sucesos normales de la aplicación (arranque, peticiones atendidas...)
WARN   → algo inesperado ha pasado, pero la aplicación puede seguir funcionando
ERROR  → un fallo que ha impedido completar una operación concreta`}
          />
          <p>
            En producción es habitual mostrar solo los niveles <code>INFO</code>{' '}
            en adelante, para no saturar los sistemas de logs con detalles
            irrelevantes.
          </p>
        </LessonSection>

        <LessonSection title="Logs en una aplicación Java" level={1}>
          <p>
            En Java, en lugar de usar <code>System.out.println</code>, se usa
            una librería de logging (como SLF4J) que permite elegir el nivel
            de cada mensaje y activar o desactivar niveles según el entorno.
          </p>
          <CodeBlock
            language="java"
            title="PedidoService.java"
            code={`import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PedidoService {

    private static final Logger log = LoggerFactory.getLogger(PedidoService.class);

    public Pedido registrarPedido(String producto, int cantidad) {
        log.info("Registrando pedido de {} unidades de '{}'", cantidad, producto);

        if (cantidad <= 0) {
            log.warn("Intento de registrar un pedido con cantidad inválida: {}", cantidad);
            throw new IllegalArgumentException("La cantidad debe ser mayor que 0");
        }

        try {
            return procesarPedido(producto, cantidad);
        } catch (StockInsuficienteException e) {
            log.error("No se pudo completar el pedido: stock insuficiente para '{}'", producto, e);
            throw e;
        }
    }
}`}
          />
        </LessonSection>

        <LessonSection title="Alertas: de la métrica a la notificación" level={1}>
          <p>
            Recoger métricas y logs no sirve de mucho si nadie las revisa. Las{' '}
            <strong>alertas</strong> convierten esos datos en avisos activos:
            reglas que, cuando se cumplen (por ejemplo, "más de un 5% de
            peticiones fallan durante 5 minutos"), notifican automáticamente
            al equipo por email, Slack u otro canal.
          </p>
          <InfoBox type="tip">
            Una buena alerta es <strong>accionable</strong>: si salta, alguien
            debe poder hacer algo al respecto. Las alertas que nadie puede
            resolver (o que saltan constantemente sin motivo real) acaban
            ignorándose, y ese es el peor escenario posible.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Monitoreo dentro de un pipeline" level={1}>
          <p>
            Es habitual incluir comprobaciones básicas de salud del sistema
            justo después del despliegue, como parte del propio pipeline de
            CI/CD, para confirmar que la nueva versión responde correctamente
            antes de darla por buena:
          </p>
          <CodeBlock
            language="yaml"
            code={`      - name: Comprobar salud del servicio tras el despliegue
        run: |
          curl --fail https://mi-app.com/actuator/health || exit 1`}
          />
          <p>
            Este tipo de endpoint de salud (<code>/actuator/health</code>) es algo
            que veremos con más detalle en el módulo de Spring Boot.
          </p>
        </LessonSection>

        <LessonSection title="Resumen" level={1}>
          <ul>
            <li>Monitorizar en producción permite detectar problemas antes de que los sufran los usuarios.</li>
            <li>Las tres patas de la observabilidad son métricas, logs y trazas.</li>
            <li>Los logs se clasifican por nivel: TRACE, DEBUG, INFO, WARN, ERROR.</li>
            <li>En Java se usan librerías de logging (como SLF4J) en lugar de <code>System.out.println</code>.</li>
            <li>Las alertas convierten métricas y logs en avisos activos y accionables para el equipo.</li>
            <li>Con esto cerramos el bloque de DevOps: cultura, pipelines de CI/CD y observabilidad en producción.</li>
          </ul>
        </LessonSection>
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
