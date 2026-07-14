import { LessonProyectoRetoGeneric } from '../components/LessonProyectoRetoGeneric';

const sections = [
  {
    title: '1. Estructura del Elevator Pitch (7 puntos)',
    content: (
      <>
        <p>
          Un elevator pitch es una presentación breve (menos de 60 segundos) donde explicas tu proyecto
          como si fueras en un ascensor con un inversor potencial. Debe ser convincente, clara y memorable.
        </p>

        <h4>4 componentes OBLIGATORIOS:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Problema:</strong> ¿Qué problema resuelves? (15-20 segundos)</li>
          <li><strong>Solución:</strong> ¿Cuáles son tus funcionalidades clave? (15-20 segundos)</li>
          <li><strong>Innovación:</strong> ¿Qué te diferencia de competencia? (10-15 segundos)</li>
          <li><strong>ROI:</strong> ¿Cuál es el retorno esperado? (10-15 segundos)</li>
        </ul>

        <h4>Tips de presentación:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Tono:</strong> Profesional pero apasionado. Eres tú quien mejor vende tu proyecto</li>
          <li><strong>Velocidad:</strong> Habla con naturalidad, no deprisas. Pausas estratégicas</li>
          <li><strong>Contacto visual:</strong> Mira a cámara (simula inversor frente a ti)</li>
          <li><strong>Lenguaje corporal:</strong> De pie, gestos naturales, energía positiva</li>
          <li><strong>Números:</strong> Cifras reales. No improvises mercados ni ROI</li>
        </ul>

        <h4>Recomendación:</h4>
        <p>
          Practica 10+ veces ANTES de grabar. El video debe parecer natural, no ensayado.
        </p>
      </>
    )
  },

  {
    title: '2. Herramientas de Grabación',
    content: (
      <>
        <p>
          Necesitas grabar un screencast (video de pantalla + voz) o un video directo (webcam).
        </p>

        <h4>Opciones de grabación:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Loom:</strong> Online, súper fácil, cloud, share link, HD gratis</li>
          <li><strong>OBS Studio:</strong> Desktop, profesional, gratis, full control</li>
          <li><strong>Camtasia:</strong> Desktop, muy completo, edición incorporada, pago</li>
          <li><strong>Screencast-O-Matic:</strong> Online, rápido, edición básica</li>
        </ul>

        <h4>Recomendación: Loom (más fácil)</h4>
        <ol style={{ lineHeight: '1.8' }}>
          <li>Crea cuenta en loom.com (gratis)</li>
          <li>Abre página web o Figma con prototipo (opcional)</li>
          <li>Presiona "Start recording" → webcam + pantalla</li>
          <li>Presenta tu pitch (60 segundos máximo)</li>
          <li>Loom genera automáticamente link compartible</li>
        </ol>

        <h4>Calidad técnica mínima:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Resolución: 720p mínimo (1080p mejor)</li>
          <li>Audio: claro, sin ruidos de fondo</li>
          <li>Duración: 45-60 segundos exactos</li>
          <li>Formato: MP4, Ogg o link streaming (YouTube, Loom, Drive)</li>
        </ul>
      </>
    )
  },

  {
    title: '3. Contenido Visual (Recomendado)',
    content: (
      <>
        <p>
          Aunque el pitch es principalmente AUDIO, los visuals ayudan mucho.
        </p>

        <h4>Opciones visuales durante el pitch:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Solo tú (webcam):</strong> Más personal, directo. Mejor si tienes buena presencia</li>
          <li><strong>Screencast + slides:</strong> Slides simples, máximo 5 slides</li>
          <li><strong>Prototipo Figma:</strong> Enseña 2-3 pantallas, explica navegando</li>
          <li><strong>Mezcla (recomendado):</strong> 20s personal + 30s screencast + 10s números</li>
        </ul>

        <h4>Checklist visual:</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Logo/branding coherente</li>
          <li>Colores corporativos consistentes</li>
          <li>Tipografía legible en video</li>
          <li>Transiciones suaves (no distracciones)</li>
        </ul>
      </>
    )
  },

  {
    title: '4. Publicación en Forum (3 puntos)',
    content: (
      <>
        <p>
          Una vez grabado el video, debes publicarlo y participar en el forum.
        </p>

        <h4>Paso 1: Subir video a plataforma pública</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>YouTube (privado):</strong> Máximo tamaño, buena calidad</li>
          <li><strong>Google Drive:</strong> Integrado, compartible</li>
          <li><strong>Loom:</strong> Automático, link directo</li>
          <li><strong>Vimeo:</strong> Profesional, control de privacidad</li>
        </ul>

        <h4>Paso 2: Publicar en forum</h4>
        <ol style={{ lineHeight: '1.8' }}>
          <li>Acceder a sección "Presentación de Proyectos"</li>
          <li>Crear tema: "Pitch [Nombre Proyecto] - [Tu Nombre]"</li>
          <li>Adjuntar enlace video (debe ser accesible públicamente)</li>
          <li>Incluir breve descripción: 3-4 líneas del proyecto</li>
        </ol>

        <h4>Paso 3: Participación en forum (3 puntos)</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Revisar mínimo 1 video de compañeros</li>
          <li>Escribir comentario constructivo (mínimo 50 palabras)</li>
          <li>Elogiar algo específico + sugerir mejora</li>
        </ul>

        <h4>Rúbrica de evaluación (7 puntos video):</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Contenido (3 pts):</strong> Problema (1p) + Solución (1p) + ROI (1p)</li>
          <li><strong>Presentación (2 pts):</strong> Claridad (1p) + Carisma (1p)</li>
          <li><strong>Técnica (2 pts):</strong> Audio/video nítidos (1p) + Duración 45-60s (1p)</li>
        </ul>
      </>
    )
  }
];

export function LessonProyectoReto3() {
  return (
    <LessonProyectoRetoGeneric
      retoNumber={3}
      title="REPTE 3: Elevator Pitch"
      sections={sections}
    />
  );
}
