import { useState } from 'react';
import { LessonLayout, InfoBox } from '../components';
import { LessonNavigation } from '../components/LessonNavigation';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { useLessonNavigation } from '../hooks/useLessonNavigation';

const CONTACT_EMAIL = 'info@fullstackdevlovers.com';

export function LessonContactoFormulario() {
  const breadcrumbs = useBreadcrumb();
  const nav = useLessonNavigation();
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto desde la web - ${form.nombre || 'Visitante'}`);
    const body = encodeURIComponent(`${form.mensaje}\n\n— ${form.nombre} (${form.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <LessonLayout
        title="Formulario de Contacto"
        description="Envíanos tu pregunta, sugerencia o feedback"
        breadcrumbs={breadcrumbs}
        seoTitle="Formulario de Contacto | Fullstack Dev Lovers"
        seoDescription="Envía tu mensaje a Fullstack Dev Lovers a través de nuestro formulario de contacto."
        seoKeywords="contacto, formulario, soporte, fullstack dev lovers"
        url="https://fullstackdevlovers.com/contacto/general/formulario"
      >
        <h2>Envía tu Pregunta o Feedback</h2>
        <p>
          Completa el formulario con tus datos y tu mensaje. Al enviarlo se abrirá tu
          cliente de correo con el mensaje ya preparado para <strong>{CONTACT_EMAIL}</strong>.
        </p>

        <form onSubmit={handleSubmit} style={{ maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.95rem' }}>
            Nombre
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              style={{ padding: '0.6rem', borderRadius: '6px', border: '1px solid #ccc' }}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.95rem' }}>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={{ padding: '0.6rem', borderRadius: '6px', border: '1px solid #ccc' }}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.95rem' }}>
            Mensaje
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              required
              rows={5}
              style={{ padding: '0.6rem', borderRadius: '6px', border: '1px solid #ccc', resize: 'vertical' }}
            />
          </label>
          <button
            type="submit"
            style={{ padding: '0.7rem 1.2rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 600 }}
          >
            Enviar mensaje
          </button>
        </form>

        {sent && (
          <InfoBox type="success">
            Se ha abierto tu cliente de correo con el mensaje preparado. Si no se abre automáticamente,
            escríbenos directamente a <strong>{CONTACT_EMAIL}</strong>.
          </InfoBox>
        )}

        <InfoBox type="info">
          <strong>Nota:</strong> Asegúrate de incluir tu email para que podamos contactarte.
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
