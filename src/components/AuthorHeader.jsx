import { authorConfig } from '../config/authorConfig';
import './AuthorHeader.css';

export function AuthorHeader() {
  return (
    <div className="author-header">
      <div className="author-header-content">
        <div className="author-photo-wrapper">
          <img
            src={authorConfig.photo}
            alt={authorConfig.name}
            className="author-photo"
          />
        </div>

        <div className="author-info">
          <div className="author-name">{authorConfig.name}</div>
          <p className="author-bio">{authorConfig.bio}</p>

          <div className="author-contact">
            <a
              href={`mailto:${authorConfig.email}`}
              className="contact-link"
              title="Enviar email"
            >
              <span className="contact-icon">✉️</span>
              <span>{authorConfig.email}</span>
            </a>

            <a
              href={authorConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              title="Ver perfil de LinkedIn"
            >
              <span className="contact-icon">💼</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className="author-divider"></div>
    </div>
  );
}
