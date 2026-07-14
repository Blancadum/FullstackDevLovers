import './PageAnchors.css';

/**
 * PageAnchors - Tags de navegación intra-página con anclas
 * Permite saltar rápidamente a diferentes secciones de la lección
 *
 * Uso:
 * <PageAnchors
 *   anchors={[
 *     { label: 'Conceptos', id: 'conceptos' },
 *     { label: 'Ejercicios', id: 'ejercicios' },
 *     { label: 'Puntos Clave', id: 'puntos-clave' },
 *     { label: 'Resumen', id: 'resumen' }
 *   ]}
 * />
 */
export function PageAnchors({ anchors = [] }) {
  if (!anchors || anchors.length === 0) {
    return null;
  }

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="page-anchors">
      <div className="anchors-container">
        {anchors.map((anchor, index) => (
          <a
            key={index}
            href={`#${anchor.id}`}
            className="anchor-tag"
            onClick={(e) => handleAnchorClick(e, anchor.id)}
            title={`Ir a ${anchor.label}`}
          >
            {anchor.label}
          </a>
        ))}
      </div>
    </div>
  );
}
