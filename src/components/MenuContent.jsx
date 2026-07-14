import { useState } from 'react';
import './MenuContent.css';

export function MenuContent({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-content">
      <button
        className={`menu-content-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="menu-content-title">{title}</span>
        <span className="menu-content-icon">▼</span>
      </button>

      {isOpen && (
        <div className="menu-content-body">
          {children}
        </div>
      )}
    </div>
  );
}
