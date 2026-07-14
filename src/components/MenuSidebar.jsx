import { useState } from 'react';
import './MenuSidebar.css';

export function MenuSidebar({ items }) {
  const [selectedId, setSelectedId] = useState(items[0]?.id || 0);
  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <div className="menu-sidebar">
      <div className="menu-sidebar-options">
        {items.map(item => (
          <button
            key={item.id}
            className={`menu-sidebar-option ${selectedId === item.id ? 'active' : ''}`}
            onClick={() => setSelectedId(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="menu-sidebar-content">
        {selectedItem && selectedItem.content}
      </div>
    </div>
  );
}
