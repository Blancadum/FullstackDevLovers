export function NoResults({ searchTerm, filter }) {
  return (
    <div className="no-results">
      <div className="no-results-icon">🔍</div>
      <h2>No se encontraron módulos</h2>
      <p>
        {searchTerm && filter === 'all'
          ? `No hay módulos que coincidan con "${searchTerm}"`
          : searchTerm
            ? `No hay módulos en esta sección que coincidan con "${searchTerm}"`
            : 'No hay módulos en esta sección'}
      </p>
      <p className="no-results-tip">Intenta con otros términos de búsqueda o secciones</p>
    </div>
  );
}
