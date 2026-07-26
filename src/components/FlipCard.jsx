import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FlipCard.css';

export const FlipCard = ({ name, description, purpose, learningPath, logo }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsFlipped(!isFlipped);
        }
      }}
    >
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front">
          <div className="card-logo">
            {logo ? (
              <img src={logo} alt={name} />
            ) : (
              <div className="logo-placeholder">{name.charAt(0)}</div>
            )}
          </div>

          <div className="card-content">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>

          <div className="flip-hint">Toca para voltear</div>
        </div>

        {/* Back */}
        <div className="flip-card-back">
          <div className="back-logo">
            {logo ? (
              <img src={logo} alt={name} />
            ) : (
              <div className="logo-placeholder">{name.charAt(0)}</div>
            )}
          </div>

          <div className="back-content">
            <h4>Para qué sirve</h4>
            <p>{purpose}</p>
          </div>

          <Link to={learningPath} className="card-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
