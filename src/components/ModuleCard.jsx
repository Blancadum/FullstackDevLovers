import { Link } from 'react-router-dom';

export function ModuleCard({ icon, title, description, badge, link }) {
  return (
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card">
        <div className="card-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="phase-badge">{badge}</span>
      </div>
    </Link>
  );
}
