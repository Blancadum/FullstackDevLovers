import { useState } from 'react';
import './TabsVerticalContent.css';

export function TabsVerticalContent({ items }) {
  const [selectedTab, setSelectedTab] = useState(items[0]?.id || 0);
  const selectedItem = items.find(item => item.id === selectedTab);

  return (
    <div className="tabs-vertical-content">
      <div className="tabs-vertical-layout">
        {/* Vertical Tabs Sidebar */}
        <div className="tabs-vertical-sidebar">
          <div className="tabs-vertical-list">
            {items.map((item, idx) => (
              <button
                key={item.id}
                className={`tab-vertical-button ${selectedTab === item.id ? 'active' : ''}`}
                onClick={() => setSelectedTab(item.id)}
                title={item.title}
              >
                <span className="tab-vertical-number">{idx + 1}</span>
                <span className="tab-vertical-label">{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="tabs-vertical-box">
          {selectedItem && (
            <div className="tabs-vertical-box-content">
              {selectedItem.content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
