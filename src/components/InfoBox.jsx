import './InfoBox.css';
import infoIcon from '../assets/icons/info.png';

/**
 * InfoBox - Componente unificado para cajas de información
 * Reemplaza HighlightBox con más variantes y flexibilidad
 *
 * Tipos: 'info', 'success', 'warning', 'error', 'tip', 'important'
 *
 * Uso:
 * <InfoBox type="info" title="Título opcional">
 *   Contenido aquí
 * </InfoBox>
 */
export function InfoBox({ type = 'info', title, children, className = '' }) {
  return (
    <div className={`info-box info-box-${type} ${className}`}>
      <div className="info-box-container">
        <div className="info-box-icon">
          <img src={infoIcon} alt="Info icon" />
        </div>
        <div className="info-box-body">
          {title && <div className="info-box-title">{title}</div>}
          <div className="info-box-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
