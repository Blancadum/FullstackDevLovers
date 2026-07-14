import './Summary.css';

export function Summary({ title, content, children }) {
  const displayContent = content || children;

  // Si es string, renderizar con párrafos
  const renderContent = () => {
    if (typeof displayContent === 'string') {
      return displayContent.split('\n').map((line, idx) => {
        if (line.trim().startsWith('•')) {
          return <li key={idx}>{line.trim().substring(1).trim()}</li>;
        }
        return <p key={idx}>{line}</p>;
      });
    }
    return displayContent;
  };

  return (
    <div className="summary">
      <div className="summary-header">
        <h3>📋 {title || 'Resumen'}</h3>
      </div>
      <div className="summary-content">
        {typeof displayContent === 'string' && displayContent.includes('•') ? (
          <ul>{renderContent()}</ul>
        ) : (
          renderContent()
        )}
      </div>
    </div>
  );
}
