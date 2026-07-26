import './PageAnchors.css';

/**
 * PageAnchors - Tags de navegación intra-página con anclas
 * Permite saltar rápidamente a diferentes secciones de la lección
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
    <div className="page-anchors-wrapper">
      <div className="page-anchors-container">
        {anchors.map((anchor, index) => (
          <a
            key={index}
            href={`#${anchor.id}`}
            className="page-anchors-tag"
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
