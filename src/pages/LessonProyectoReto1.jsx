import { LessonProyectoRetoGeneric } from '../components/LessonProyectoRetoGeneric';
import { useBreadcrumb } from '../hooks/useBreadcrumb';

const sections = [
  {
    title: '1. Nombre y Características del Proyecto (1 punto)',
    content: (
      <>
        <p>
          Define claramente qué es tu proyecto y justifica por qué lo elegiste con argumentos
          basados en el mercado, tendencias o necesidades reales.
        </p>

        <h4>Qué debes incluir:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Nombre memorable relacionado con su función</li>
          <li>Descripción breve (2 líneas máximo)</li>
          <li>Justificación basada en: tendencias, viabilidad técnica, oportunidad comercial</li>
        </ul>

        <h4>Tips:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Elige un proyecto que realmente te interese: pasarás 30+ horas en él</li>
          <li>Debe ser realista pero con potencial de crecimiento</li>
          <li>Investiga el mercado antes de definir el nombre</li>
        </ul>
      </>
    )
  },

  {
    title: '2. Tipo de Empresa y Perfil Público (1 punto)',
    content: (
      <>
        <p>
          Define tu mercado objetivo, tipo de usuarios y sector. Este apartado fundamenta
          todas tus decisiones posteriores.
        </p>

        <h4>Qué debes definir:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Tipo negocio (B2C, B2B, B2B2C, Marketplace, SaaS)</li>
          <li>Sector específico</li>
          <li>Mercado geográfico y tamaño potencial</li>
          <li>Usuarios objetivo (mínimo 2 tipos)</li>
        </ul>

        <h4>Recomendación:</h4>
        <p>
          Sé específico: cuanto mejor definas tus usuarios, mejor entenderás qué
          funcionalidades realmente necesitan.
        </p>
      </>
    )
  },

  {
    title: '3. Análisis de Competencia (2 puntos)',
    content: (
      <>
        <p>
          Analiza mínimo 3 competidores REALES. Identifica fortalezas,
          debilidades y cómo tu proyecto se diferencia.
        </p>

        <h4>Pasos a seguir:</h4>
        <ol style={{ lineHeight: '1.8' }}>
          <li>Busca estos competidores en Google, App Store, visita sus webs</li>
          <li>Analiza sus fortalezas específicas (qué hacen bien)</li>
          <li>Identifica debilidades o gaps de mercado</li>
          <li>Crea tabla comparativa de características</li>
          <li>Define tus diferenciadores claros</li>
        </ol>

        <h4>Importante:</h4>
        <p>
          Los competidores deben ser REALES. Busca en Google,
          comprueba que existen en App Store o web. No inventar.
        </p>
      </>
    )
  },

  {
    title: '4. Funcionalidades del Proyecto (2 puntos)',
    content: (
      <>
        <p>
          Lista todas las funcionalidades priorizadas. Sé realista con las horas.
        </p>

        <h4>Recomendaciones:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Listar 5-8 funcionalidades principales</li>
          <li>Estimación realista: 280-500 horas es el rango típico para un proyecto DAW</li>
          <li>Distribuir: 44% frontend, 42% backend, 14% BD+testing+deploy</li>
          <li>Incluir funcionalidades de seguridad (auth, pagos)</li>
        </ul>

        <h4>Estructura sugerida:</h4>
        <p>
          Frontend (visual, UX) → Backend (lógica, APIs) → Base de Datos (almacenamiento) → Testing & Deploy
        </p>
      </>
    )
  },

  {
    title: '5. Viabilidad Económica (1.5 puntos)',
    content: (
      <>
        <p>
          Presupuesto detallado y realista. Demuestra comprensión de costos reales.
        </p>

        <h4>Qué incluir:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Desglose de costos (hardware, software, desarrollo, diseño)</li>
          <li>Cálculo de horas * tarifa realista</li>
          <li>Costos de infraestructura (hosting, BD, etc.)</li>
          <li>ROI esperado y modelo de monetización</li>
        </ul>

        <h4>Proyección:</h4>
        <p>
          Estima: break-even, comisiones, suscripciones, ingresos potenciales. Usa datos reales del mercado.
        </p>
      </>
    )
  },

  {
    title: '6. Protección de Datos y GDPR (1.5 puntos)',
    content: (
      <>
        <p>
          Define medidas concretas de seguridad y cumplimiento GDPR. Es obligatorio en UE.
          Multas hasta 20M euros o 4% de revenue.
        </p>

        <h4>Medidas técnicas requeridas:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Encriptación en tránsito: TLS 1.3+, HTTPS obligatorio</li>
          <li>Encriptación en reposo: bcrypt para contraseñas, AES-256 para datos sensibles</li>
          <li>Derechos del usuario: acceso, olvido, portabilidad, rectificación</li>
        </ul>

        <h4>Importante:</h4>
        <p>
          Sé específico con medidas técnicas concretas, no genéricas.
          Demuestra que entiendes compliance, no solo teoría.
        </p>
      </>
    )
  },

  {
    title: '7. Innovación y Aplicación Real (1 punto)',
    content: (
      <>
        <p>
          Define qué hace único tu proyecto y por qué tiene valor real en el mercado.
          Demuestra pensamiento empresarial, no solo técnico.
        </p>

        <h4>Qué validar:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Diferenciador clave vs competencia</li>
          <li>Viabilidad comercial y demanda real</li>
          <li>Plan de lanzamiento (MVP → beta → público)</li>
          <li>Validación de supuestos con datos reales</li>
        </ul>

        <h4>Demuestra:</h4>
        <p>
          Investiga, entrevista usuarios, valida supuestos. Proyecto debe ser realista e implementable.
        </p>
      </>
    )
  }
];

export function LessonProyectoReto1() {
  const breadcrumbs = useBreadcrumb();
  return (
    <LessonProyectoRetoGeneric
      retoNumber={1}
      title="REPTE 1: Especificación del Proyecto"
      sections={sections}
      breadcrumbs={breadcrumbs}
    />
  );
}
