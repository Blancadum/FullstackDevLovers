import { useState } from 'react';
import './SearchBar.css';

export function SearchBar({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSelectedFilter(value);
    onFilter(value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedFilter('all');
    onSearch('');
    onFilter('all');
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Busca un módulo (Git, Java, Spring...)"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {searchTerm && (
          <button className="clear-btn" onClick={clearSearch}>
            ✕
          </button>
        )}
      </div>

      <div className="filter-box">
        <select
          className="filter-select"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="all">📋 Todas las secciones</option>
          <option value="git">🌳 Git</option>
          <option value="java-fundamentos">📚 Java Fundamentos</option>
          <option value="java-poo">🏗️ Java POO</option>
          <option value="java-avanzado">⚡ Java Avanzado</option>
          <option value="java-bd">🔗 Conexión a BD</option>
          <option value="practicas-arquitectura">🏛️ Prácticas & Arquitectura</option>
          <option value="spring-boot">🚀 Spring Boot</option>
          <option value="entornos">🛠️ Entornos</option>
        </select>
      </div>
    </div>
  );
}
