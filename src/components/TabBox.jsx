import { useState, useMemo } from 'react';
import './TabBox.css';

/**
 * TabBox - Componente para mostrar contenido en pestañas
 * Evita crear múltiples niveles de URL, manteniendo todo en una sola página
 *
 * Uso:
 * <TabBox
 *   tabs={[
 *     { label: 'Intro', content: <LessonIntro /> },
 *     { label: 'Setup', content: <LessonSetup /> }
 *   ]}
 *   initialTab={0}
 * />
 */
export function TabBox({ tabs = [], initialTab = 0 }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!tabs || tabs.length === 0) {
    return <div>No hay pestañas disponibles</div>;
  }

  const activeTabIndex = Math.min(activeTab, tabs.length - 1);

  return (
    <div className="tab-box">
      {/* Tab buttons */}
      <div className="tab-buttons">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`tab-button ${activeTabIndex === idx ? 'active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab.icon && <span className="tab-icon">{tab.icon}</span>}
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {tabs[activeTabIndex]?.content}
      </div>
    </div>
  );
}
