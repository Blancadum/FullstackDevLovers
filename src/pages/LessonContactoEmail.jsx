import { LessonLayout, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

export function LessonContactoEmail() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();

  return (
    <>
      <LessonLayout
        title="Email y Redes"
        description="Cómo contactar con Fullstack Dev Lovers por email y redes sociales"
        breadcrumbs={breadcrumbs}
        seoTitle="Contacto - Email y Redes Sociales | Fullstack Dev Lovers"
        seoDescription="Canales de contacto de Fullstack Dev Lovers: email, Twitter, GitHub y Discord."
        seoKeywords="contacto, email, redes sociales, fullstack dev lovers"
        url="https://fullstackdevlovers.com/contacto/general/email"
      >
        <h2>Cómo Contactarnos</h2>
        <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
          <li><strong>Email:</strong> info@fullstackdevlovers.com</li>
          <li><strong>Twitter:</strong> @fullstackdevlovers</li>
          <li><strong>GitHub:</strong> github.com/fullstackdevlovers</li>
          <li><strong>Discord:</strong> [Servidor de comunidad]</li>
        </ul>
        <InfoBox type="info">
          <strong>Respuesta:</strong> Generalmente respondemos en 24-48 horas.
        </InfoBox>
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
