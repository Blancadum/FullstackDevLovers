import './ComparisonTable.css';

export function ComparisonTable({ items }) {
  return (
    <div className="comparison-table">
      {items.map((item, index) => (
        <div key={index} className="comparison-row">
          <div className="comparison-column before">
            <div className="comparison-header">Antes</div>
            <p>{item.before}</p>
          </div>
          <div className="comparison-arrow">→</div>
          <div className="comparison-column after">
            <div className="comparison-header">Después</div>
            <p>{item.after}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
