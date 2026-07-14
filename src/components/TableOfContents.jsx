import { useState, useEffect } from 'react';
import './TableOfContents.css';

/**
 * TableOfContents - Menú hamburguesa con índice de contenidos
 * Extrae automáticamente los headings (h2, h3, h4) del contenido
 *
 * Uso:
 * <TableOfContents contentId="lesson-content" />
 */
export function TableOfContents({ contentId = 'lesson-content' }) {
  const [headings, setHeadings] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const contentElement = document.getElementById(contentId);
    if (!contentElement) return;

    // Extraer headings h2, h3, h4
    const headingElements = contentElement.querySelectorAll('h2, h3, h4');
    const extractedHeadings = Array.from(headingElements).map((heading, index) => {
      const id = heading.id || `heading-${index}`;
      heading.id = id; // Asignar ID si no tiene

      return {
        id,
        text: heading.textContent,
        level: parseInt(heading.tagName[1]) // Extrae el número de h2, h3, etc.
      };
    });

    setHeadings(extractedHeadings);
  }, [contentId]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Cerrar menú después de hacer clic
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="toc-hamburger-container">
      <button
        className={`toc-hamburger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle table of contents"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && (
        <>
          <div className="toc-overlay" onClick={() => setIsOpen(false)}></div>
          <nav className="toc-drawer">
            <button
              className="toc-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            <h3 className="toc-drawer-title">Contenido</h3>
            <ul className="toc-list">
              {headings.map((heading) => (
                <li
                  key={heading.id}
                  className={`toc-item toc-level-${heading.level}`}
                >
                  <a
                    href={`#${heading.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToHeading(heading.id);
                    }}
                    className="toc-link"
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
