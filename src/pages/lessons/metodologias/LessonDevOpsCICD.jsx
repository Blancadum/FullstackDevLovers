import { LessonLayout, LessonSection, CodeBlock, InfoBox } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonDevOpsCICD() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="CI/CD Pipelines"
        description="Integración continua y despliegue continuo: automatizar build, test y entrega de software"
        breadcrumbs={breadcrumbs}
        seoTitle="CI/CD Pipelines - Integración y Despliegue Continuo"
        seoDescription="Cómo funcionan los pipelines de CI/CD para automatizar build, testing y despliegue de software."
        seoKeywords="ci/cd, integración continua, despliegue continuo, pipelines, github actions"
        url="https://fullstackdevlovers.com/metodologias/devops/cicd"
      >
        <p>
          Ya sabes qué es DevOps y qué principios lo guían. Ahora vas a ver
          cómo se materializa en la práctica el más conocido de esos
          principios: la integración y el despliegue continuo, mediante
          pipelines automatizados.
        </p>

        <LessonSection title="Integración continua (CI)" level={1}>
          <p>
            La <strong>integración continua</strong> consiste en subir cambios
            de código al repositorio compartido con mucha frecuencia (varias
            veces al día) y comprobar automáticamente, en cada subida, que el
            proyecto sigue compilando y que los tests siguen pasando.
          </p>
          <InfoBox type="info">
            Cuanto más tiempo pasa sin integrar el código de distintos
            desarrolladores, más difícil es resolver los conflictos y más
            tarde se detectan los errores. CI ataca ese problema integrando
            constantemente y avisando de inmediato si algo se rompe.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Entrega continua vs. despliegue continuo (CD)" level={1}>
          <p>
            La sigla <strong>CD</strong> se usa para dos conceptos parecidos
            pero no idénticos:
          </p>
          <ul>
            <li><strong>Entrega continua (Continuous Delivery):</strong> el código pasa todas las validaciones automáticas y queda listo para desplegar a producción, pero el despliegue final lo dispara una persona (por ejemplo, con un clic).</li>
            <li><strong>Despliegue continuo (Continuous Deployment):</strong> un paso más allá: si el código pasa todas las validaciones, se despliega a producción automáticamente, sin intervención humana.</li>
          </ul>
        </LessonSection>

        <LessonSection title="Anatomía de un pipeline" level={1}>
          <p>
            Un <strong>pipeline</strong> es una secuencia de pasos automáticos
            que se ejecutan cada vez que hay un cambio en el repositorio
            (normalmente, en cada <em>push</em> o <em>pull request</em>). Sus
            etapas más habituales, en orden, son:
          </p>
          <CodeBlock
            language="text"
            code={`1. BUILD    → compilar el código (por ejemplo, con Maven o Gradle)
2. TEST     → ejecutar los tests unitarios y de integración
3. ANALYZE  → analizar la calidad del código (linters, cobertura...)
4. PACKAGE  → empaquetar la aplicación (por ejemplo, un .jar o una imagen Docker)
5. DEPLOY   → desplegar el paquete en un entorno (staging, producción...)`}
          />
          <p>
            Si cualquiera de estos pasos falla, el pipeline se detiene ahí: el
            código no llega a producción hasta que todos los pasos anteriores
            hayan sido validados con éxito.
          </p>
        </LessonSection>

        <LessonSection title="Ejemplo: pipeline con GitHub Actions" level={1}>
          <p>
            <strong>GitHub Actions</strong> es una de las herramientas más
            usadas para definir pipelines de CI/CD. Se configura con un
            fichero YAML dentro de la carpeta <code>.github/workflows</code>{' '}
            del repositorio.
          </p>
          <CodeBlock
            language="yaml"
            title=".github/workflows/ci.yml"
            code={`name: CI Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Descargar el código
        uses: actions/checkout@v4

      - name: Configurar JDK 17
        uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'temurin'

      - name: Compilar el proyecto
        run: mvn compile

      - name: Ejecutar los tests
        run: mvn test

      - name: Empaquetar la aplicación
        run: mvn package -DskipTests`}
          />
          <p>
            Cada bloque bajo <code>steps</code> es un paso del pipeline:
            primero se descarga el código, luego se instala Java, después se
            compila, se ejecutan los tests y, por último, se genera el
            paquete. Si el paso de tests falla, GitHub Actions marca el
            workflow como fallido y no continúa con el siguiente.
          </p>
        </LessonSection>

        <LessonSection title="Añadir el despliegue" level={1}>
          <p>
            Para convertir este pipeline de CI en uno de entrega/despliegue
            continuo, se añade un paso final que publique el artefacto
            generado (por ejemplo, desplegándolo en un servidor o subiéndolo a
            un proveedor cloud):
          </p>
          <CodeBlock
            language="yaml"
            code={`      - name: Desplegar a producción
        if: github.ref == 'refs/heads/main'
        run: ./deploy.sh`}
          />
          <InfoBox type="tip">
            El <code>if</code> es importante: normalmente solo quieres
            desplegar cuando el pipeline se ejecuta sobre la rama principal
            (<code>main</code>), no en cada pull request de una rama de
            trabajo.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Resumen" level={1}>
          <ul>
            <li>CI: integrar y validar el código constantemente (compilar + testear en cada cambio).</li>
            <li>Entrega continua: el código queda listo para desplegar, pero el despliegue lo dispara una persona.</li>
            <li>Despliegue continuo: el despliegue a producción también es automático si todo pasa.</li>
            <li>Un pipeline típico sigue las etapas: build → test → analyze → package → deploy.</li>
            <li>GitHub Actions define pipelines con ficheros YAML dentro de <code>.github/workflows</code>.</li>
            <li>Siguiente parada: qué hacer una vez el código ya está en producción, con el monitoreo y los logs.</li>
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
