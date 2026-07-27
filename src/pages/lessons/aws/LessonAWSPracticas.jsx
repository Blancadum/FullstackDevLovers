import { LessonLayout, LessonSection, CodeBlock, InfoBox, Table } from '../../../components';
import { LessonNavigation } from '../../../components/LessonNavigation';
import { useBreadcrumb } from '../../../hooks/useBreadcrumb';
import { useLessonNavigation } from '../../../hooks/useLessonNavigation';

export function LessonAWSPracticas() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Mejores Prácticas en AWS"
        description="Recomendaciones profesionales para operar de forma segura y eficiente en AWS"
        breadcrumbs={breadcrumbs}
        seoTitle="Mejores Prácticas en AWS - Guía Profesional"
        seoDescription="Recomendaciones y buenas prácticas profesionales para operar infraestructura en AWS de forma segura y eficiente."
        seoKeywords="aws, buenas practicas, well-architected"
        url="https://fullstackdevlovers.com/cloud/aws/operaciones/practicas"
      >
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Has recorrido ya los servicios principales de AWS: cómputo, redes, bases de datos, contenedores, backup. Esta última lección del módulo cierra el círculo con algo distinto: no un servicio nuevo, sino los <strong>criterios</strong> que un profesional aplica para decidir si una infraestructura está bien construida. AWS los recoge de forma oficial en el <strong>Well-Architected Framework</strong>, un conjunto de preguntas y recomendaciones que te vas a encontrar citadas constantemente en entrevistas técnicas y en revisiones de arquitectura.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          No hace falta memorizar el framework entero. Lo importante es interiorizar la forma de pensar: cada decisión de infraestructura implica un compromiso entre seguridad, coste, rendimiento y capacidad de operarla sin sufrimiento.
        </p>

        <LessonSection title="Los seis pilares del Well-Architected Framework">
          <Table
            headers={['Pilar', 'Pregunta que responde']}
            rows={[
              ['Excelencia operacional', '¿Podemos desplegar, monitorizar y reaccionar ante incidentes de forma automatizada y repetible?'],
              ['Seguridad', '¿Protegemos datos y sistemas aplicando el principio de menor privilegio en todas las capas?'],
              ['Fiabilidad', '¿El sistema se recupera solo de fallos y cumple los objetivos de disponibilidad definidos?'],
              ['Eficiencia de rendimiento', '¿Usamos los recursos (cómputo, almacenamiento, red) de forma adecuada a la carga real?'],
              ['Optimización de costes', '¿Pagamos solo por lo que necesitamos, sin sobreaprovisionar "por si acaso"?'],
              ['Sostenibilidad', '¿Minimizamos el impacto ambiental de la infraestructura que desplegamos?']
            ]}
          />

          <InfoBox type="tip" title="No son compartimentos estancos">
            Los seis pilares se tensionan entre sí. Más réplicas mejoran fiabilidad pero suben el coste; cachear agresivamente mejora el rendimiento pero puede complicar la coherencia de los datos. Un buen arquitecto no maximiza un pilar a costa de ignorar los demás: busca el punto de equilibrio adecuado para ese proyecto concreto.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Seguridad: lo mínimo que no puede faltar">
          <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            <li>No uses las credenciales <strong>root</strong> de la cuenta para el trabajo diario: crea usuarios y roles IAM con permisos mínimos.</li>
            <li>Activa <strong>MFA</strong> en la cuenta root y en los usuarios con permisos elevados.</li>
            <li>Cifra los datos en reposo (S3, RDS, EBS) y en tránsito (TLS en todas las conexiones públicas).</li>
            <li>Mantén tus recursos en <strong>subredes privadas</strong> salvo lo estrictamente necesario (ALB, NAT Gateway).</li>
            <li>Centraliza el registro de actividad con <strong>CloudTrail</strong>: quién hizo qué, cuándo y desde dónde.</li>
          </ul>
        </LessonSection>

        <LessonSection title="Fiabilidad: diseñar asumiendo que algo fallará">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            En un sistema distribuido, los fallos son cuestión de "cuándo", no de "si". Diseñar para fiabilidad significa asumir eso desde el principio:
          </p>
          <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            <li>Despliega en <strong>al menos dos Availability Zones</strong> para cualquier componente crítico (EC2, RDS Multi-AZ).</li>
            <li>Define y prueba periódicamente tu estrategia de <strong>backup y recuperación</strong> (no basta con tenerla configurada, hay que probar la restauración).</li>
            <li>Usa <strong>health checks</strong> reales (que comprueben dependencias como la base de datos) en lugar de un simple "responde en el puerto 8080".</li>
            <li>Automatiza el despliegue con infraestructura como código para que reconstruir un entorno no dependa de la memoria de una persona.</li>
          </ul>
        </LessonSection>

        <LessonSection title="Optimización de costes: prácticas concretas">
          <Table
            headers={['Práctica', 'Ahorro típico']}
            rows={[
              ['Apagar entornos de desarrollo/staging fuera de horario laboral', 'Hasta un 60-70% en esos entornos'],
              ['Usar Reserved Instances o Savings Plans para cargas estables y predecibles', 'Descuentos significativos frente a on-demand'],
              ['Spot Instances para cargas tolerantes a interrupciones (batch, procesamiento asíncrono)', 'Los mayores descuentos, a cambio de poder perder la instancia'],
              ['Ciclo de vida de S3 (Standard → Infrequent Access → Glacier)', 'Reduce el coste de almacenamiento de datos poco accedidos'],
              ['Etiquetar (tags) todos los recursos por proyecto/equipo', 'No ahorra directamente, pero permite detectar dónde se va el gasto']
            ]}
          />

          <CodeBlock
            language="json"
            title="Estrategia de etiquetado mínima recomendada"
            code={`{
  "Tags": {
    "Project": "guttman-api",
    "Environment": "prod",
    "Owner": "equipo-backend",
    "CostCenter": "CC-2045"
  }
}`}
          />

          <InfoBox type="warning" title="Sin tags, no hay visibilidad de costes">
            Sin una convención de etiquetado consistente, el Cost Explorer de AWS solo te dirá "cuánto gastaste", no "en qué proyecto ni por qué equipo". Aplica las etiquetas desde el primer recurso que crees, no cuando la factura ya sea un problema.
          </InfoBox>
        </LessonSection>

        <LessonSection title="Excelencia operacional: automatizar en lugar de recordar">
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Los incidentes de producción casi nunca ocurren en horario de oficina. La excelencia operacional consiste en que el sistema sea fácil de operar incluso bajo presión:
          </p>
          <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            <li>Infraestructura como código (CloudFormation, Terraform): cualquier cambio queda versionado y es reproducible.</li>
            <li>Pipelines de CI/CD que ejecutan tests antes de desplegar, no despliegues manuales "a mano" en producción.</li>
            <li>Alarmas de CloudWatch que avisan <strong>antes</strong> de que el usuario note el problema (CPU alta, errores 5xx, latencia creciente), no después.</li>
            <li>Runbooks documentados para los incidentes más comunes: qué mirar primero, a quién avisar, cómo hacer rollback.</li>
          </ul>
        </LessonSection>

        <LessonSection title="Checklist antes de pasar a producción">
          <InfoBox type="success" title="Antes del primer despliegue en producción, comprueba">
            <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: 0 }}>
              <li>¿Los recursos sensibles (RDS, cachés) están en subredes privadas?</li>
              <li>¿Los Security Groups siguen el principio de menor privilegio, sin puertos abiertos "por si acaso"?</li>
              <li>¿Hay backups automáticos configurados y probados con una restauración real?</li>
              <li>¿Hay alarmas de CloudWatch para CPU, errores y disponibilidad?</li>
              <li>¿La infraestructura está definida como código, no creada a mano en la consola?</li>
              <li>¿Los recursos están etiquetados para poder auditar el coste?</li>
              <li>¿Existe un plan de rollback documentado si el despliegue falla?</li>
            </ul>
          </InfoBox>
        </LessonSection>

        <LessonSection title="Resumen">
          <ul style={{ fontSize: '1.05rem', lineHeight: '2' }}>
            <li>El AWS Well-Architected Framework organiza las buenas prácticas en seis pilares: excelencia operacional, seguridad, fiabilidad, eficiencia de rendimiento, optimización de costes y sostenibilidad.</li>
            <li>Los pilares se tensionan entre sí: no se trata de maximizar uno, sino de encontrar el equilibrio adecuado al proyecto.</li>
            <li>Seguridad mínima viable: sin uso de root para el día a día, MFA activado, cifrado en tránsito y en reposo, subredes privadas.</li>
            <li>Fiabilidad: multi-AZ, backups probados (no solo configurados) y health checks reales.</li>
            <li>Coste: apagar lo que no se usa, elegir el modelo de compra adecuado (on-demand, reservado, spot) y etiquetar todo desde el primer día.</li>
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
