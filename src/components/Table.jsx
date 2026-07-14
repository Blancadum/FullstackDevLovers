import './Table.css';

/**
 * Table - Componente reutilizable para tablas
 *
 * Uso:
 * <Table
 *   headers={['Columna 1', 'Columna 2', 'Columna 3']}
 *   rows={[
 *     ['dato1', 'dato2', 'dato3'],
 *     ['dato1', 'dato2', 'dato3'],
 *   ]}
 * />
 */
export function Table({ headers, rows, className = '' }) {
  return (
    <div className={`table-wrapper ${className}`}>
      <table className="custom-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
