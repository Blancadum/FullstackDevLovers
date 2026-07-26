import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { modulesWithLessons } from '../config/modulesConfig';
import { MODULE_LOGOS } from '../constants/logos';
import './ClusterSearch.css';

export function ClusterSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const filteredModules = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return modulesWithLessons.filter(module =>
      module.name.toLowerCase().includes(query) ||
      module.description.toLowerCase().includes(query) ||
      module.id.toLowerCase().includes(query)
    ).slice(0, 12); // Limitar a 12 resultados
  }, [searchQuery]);

  const handleClear = () => {
    setSearchQuery('');
    setShowResults(false);
  };

  return (
    <div className="cluster-search">
      <div className="search-container">
        <div className="search-input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Busca una tecnología: React, Java, Docker..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowResults(true);
            }}
            onFocus={() => searchQuery && setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
          />
          {searchQuery && (
            <button className="search-clear" onClick={handleClear}>
              ✕
            </button>
          )}
          <span className="search-icon">🔍</span>
        </div>

        {showResults && filteredModules.length > 0 && (
          <div className="search-results">
            {filteredModules.map((module) => {
              const logo = MODULE_LOGOS[module.id];
              return (
                <Link
                  key={module.id}
                  to={module.landingPage || `/${module.id}`}
                  className="result-item"
                  onClick={() => handleClear()}
                >
                  <div className="result-logo">
                    {logo ? (
                      <img src={logo} alt={module.name} />
                    ) : (
                      <span className="result-icon">{module.icon}</span>
                    )}
                  </div>
                  <div className="result-info">
                    <div className="result-name">{module.name}</div>
                    <div className="result-desc">{module.description}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {showResults && searchQuery && filteredModules.length === 0 && (
          <div className="search-no-results">
            No se encontraron resultados para "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
}
