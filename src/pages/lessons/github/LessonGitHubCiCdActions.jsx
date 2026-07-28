import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';
import { LessonLayout, CodeBlock, InfoBox } from '../../../components';

export function LessonGitHubCiCdActions() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="GitHub Actions: automatización y CI/CD"
        description="Automatiza tests, builds y despliegues con GitHub Actions"
        breadcrumbs={breadcrumbs}
        seoTitle="GitHub Actions: automatización y CI/CD - Fullstack Dev Lovers"
        seoDescription="Aprende a crear workflows de GitHub Actions para automatizar CI/CD: tests, builds y despliegues."
        seoKeywords="github actions, ci/cd, automatización, workflows"
      >
        <h2>De revisar a mano a automatizar</h2>
        <p>
          Ya sabes que un Pull Request debería revisarse antes de fusionarse. Pero hay comprobaciones que
          no tiene sentido hacer a mano cada vez: ¿compila el proyecto? ¿pasan los tests? Eso es trabajo
          para una máquina, no para una persona. <strong>GitHub Actions</strong> es el sistema de
          automatización integrado en GitHub que ejecuta esas tareas por ti, en cada push o cada PR.
        </p>

        <h2>Qué es CI/CD, en corto</h2>
        <ul>
          <li>
            <strong>CI (Integración Continua):</strong> cada cambio que se sube se compila y se testea
            automáticamente, para detectar errores lo antes posible.
          </li>
          <li>
            <strong>CD (Entrega/Despliegue Continuo):</strong> una vez que el cambio pasa las comprobaciones,
            se empaqueta y, opcionalmente, se despliega de forma automática.
          </li>
        </ul>

        <h2>Anatomía de un workflow</h2>
        <p>
          Un workflow de GitHub Actions es un archivo YAML dentro de la carpeta <code>.github/workflows/</code>
          de tu repositorio. Sus piezas principales son:
        </p>
        <ul>
          <li><strong>on:</strong> el evento que dispara el workflow (un push, un Pull Request, una etiqueta nueva...).</li>
          <li><strong>jobs:</strong> uno o más trabajos que se ejecutan (pueden correr en paralelo o depender entre sí).</li>
          <li><strong>runs-on:</strong> el sistema operativo de la máquina virtual que ejecuta el job.</li>
          <li><strong>steps:</strong> los pasos concretos dentro de un job (comandos, o acciones reutilizables del marketplace).</li>
        </ul>

        <h2>Un workflow real: build y tests de un proyecto Java con Maven</h2>
        <p>
          Guarda esto como <code>.github/workflows/ci.yml</code> en tu repositorio:
        </p>
        <CodeBlock
          language="yaml"
          code={`name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Descargar el código del repositorio
        uses: actions/checkout@v4

      - name: Configurar JDK 17
        uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'temurin'

      - name: Compilar y ejecutar tests con Maven
        run: mvn clean verify`}
        />
        <p>
          {/* TODO-verificar: las versiones concretas de las actions (checkout@v4, setup-java@v4) y de Java se actualizan con frecuencia; comprueba las versiones vigentes en el marketplace antes de usarlas en producción */}
          Las versiones de las <em>actions</em> reutilizables (<code>actions/checkout</code>,
          <code>actions/setup-java</code>) y del JDK deben adaptarse a las versiones vigentes cuando
          escribas tu propio workflow.
        </p>

        <h2>Cómo se activa</h2>
        <p>
          Con el <code>on</code> configurado arriba, este workflow se ejecuta automáticamente cada vez
          que haces <code>push</code> a <code>main</code> o abres/actualizas un Pull Request contra
          <code>main</code>. No necesitas lanzarlo manualmente:
        </p>
        <CodeBlock
          language="bash"
          code={`git add .
git commit -m "feat: agregar servicio de pedidos"
git push
# GitHub Actions se dispara automáticamente y ejecuta el workflow`}
        />
        <p>
          Puedes ver el resultado (en verde si todo pasó, en rojo si algo falló) directamente en la
          pestaña "Actions" del repositorio, o como un check dentro del propio Pull Request.
        </p>

        <InfoBox type="tip" title="Los checks pueden bloquear la fusión">
          Combinado con las reglas de protección de ramas (lo verás en la próxima lección), puedes exigir
          que este workflow pase en verde antes de permitir que un Pull Request se fusione en <code>main</code>.
        </InfoBox>

        <h2>Reutilizar acciones del marketplace</h2>
        <p>
          No tienes que escribir toda la lógica desde cero: el paso <code>uses:</code> te permite reutilizar
          acciones publicadas por GitHub o por la comunidad (por ejemplo, para construir imágenes Docker,
          publicar artefactos o desplegar en un proveedor cloud concreto).
        </p>

        <InfoBox type="warning" title="Minutos y coste">
          {/* TODO-verificar: los minutos gratuitos incluidos y los límites según el tipo de cuenta (personal/organización, repos públicos/privados) cambian con el tiempo; consulta la página oficial de precios de GitHub Actions para cifras actuales */}
          GitHub Actions incluye minutos de ejecución gratuitos que varían según el tipo de cuenta y si
          el repositorio es público o privado. Revisa la documentación oficial de precios antes de diseñar
          workflows muy pesados en un repositorio privado.
        </InfoBox>

        <h2>Resumen</h2>
        <ul>
          <li>GitHub Actions ejecuta workflows automáticos definidos en YAML dentro de <code>.github/workflows/</code>.</li>
          <li>Un workflow reacciona a eventos (<code>on</code>) como push o Pull Request, y ejecuta jobs con varios steps.</li>
          <li>Puedes reutilizar acciones existentes (<code>actions/checkout</code>, <code>actions/setup-java</code>...) en lugar de escribir toda la lógica.</li>
          <li>Combinado con branch protection, los checks de CI pueden bloquear la fusión de un PR hasta que pasen.</li>
        </ul>

        {/* AVISO: no se encontró un criterio específico en docs/criterios/github.md en el repositorio en el momento de redactar esta lección.
            Se han aplicado las reglas base del redactor de contenidos. */}
      </LessonLayout>

      <LessonNavigation previousLink={nav.previous} previousTitle={nav.previousTitle} nextLink={nav.next} nextTitle={nav.nextTitle} />
    </>
  );
}
