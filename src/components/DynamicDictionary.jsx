import { useState } from 'react';
import { Link } from 'react-router-dom';
import './DynamicDictionary.css';

/**
 * DynamicDictionary - Diccionario dinámico con índice por inicial
 *
 * Uso:
 * <DynamicDictionary
 *   terms={[
 *     {
 *       word: 'JVM',
 *       definition: 'Java Virtual Machine...',
 *       link: '/java/avanzado/jvm' // Opcional
 *     },
 *     {
 *       word: 'Bytecode',
 *       definition: 'Código intermedio...',
 *       link: '/java/avanzado/jvm'
 *     }
 *   ]}
 * />
 */
export function DynamicDictionary({ terms = [] }) {
  const [expandedLetter, setExpandedLetter] = useState(null);

  if (!terms || terms.length === 0) {
    return null;
  }

  // Agrupar términos por letra inicial
  const groupedTerms = {};
  terms.forEach(term => {
    const letter = term.word.charAt(0).toUpperCase();
    if (!groupedTerms[letter]) {
      groupedTerms[letter] = [];
    }
    groupedTerms[letter].push(term);
  });

  // Ordenar letras
  const sortedLetters = Object.keys(groupedTerms).sort();

  const toggleLetter = (letter) => {
    setExpandedLetter(expandedLetter === letter ? null : letter);
  };

  return (
    <div className="dynamic-dictionary">
      <div className="dict-header">
        <h3>📚 Diccionario de Términos</h3>
        <p className="dict-subtitle">Haz clic en una letra para ver los términos</p>
      </div>

      {/* Índice de letras */}
      <div className="letter-index">
        {sortedLetters.map(letter => (
          <button
            key={letter}
            className={`letter-btn ${expandedLetter === letter ? 'active' : ''}`}
            onClick={() => toggleLetter(letter)}
            title={`${groupedTerms[letter].length} término(s)`}
          >
            {letter}
            <span className="term-count">{groupedTerms[letter].length}</span>
          </button>
        ))}
      </div>

      {/* Términos expandidos */}
      {expandedLetter && (
        <div className="terms-container">
          <h4 className="expanded-letter">Términos con "{expandedLetter}"</h4>
          <div className="terms-list">
            {groupedTerms[expandedLetter].map((term, idx) => (
              <div key={idx} className="term-item">
                <div className="term-word">
                  {term.link ? (
                    <Link to={term.link} rel="nofollow" className="term-word-link">
                      {term.word} ↗
                    </Link>
                  ) : (
                    term.word
                  )}
                </div>
                <div className="term-definition">{term.definition}</div>
                {term.link && (
                  <a href={term.link} rel="nofollow" className="term-link-internal">
                    Ver más →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
