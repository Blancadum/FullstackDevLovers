import { Link } from 'react-router-dom';

export function LessonNavigation({ previousLink, previousTitle, nextLink, nextTitle }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2rem',
      borderTop: '1px solid #e0e0e0',
      marginTop: '2rem',
      gap: '1rem'
    }}>
      {previousLink ? (
        <Link to={previousLink} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#2196F3',
          textDecoration: 'none',
          fontSize: '1rem',
          fontWeight: '500',
          padding: '0.75rem 1rem',
          borderRadius: '4px',
          transition: 'all 0.3s ease',
          backgroundColor: '#f5f5f5'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#e3f2fd';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#f5f5f5';
        }}
        >
          ← {previousTitle}
        </Link>
      ) : (
        <div />
      )}

      {nextLink ? (
        <Link to={nextLink} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#2196F3',
          textDecoration: 'none',
          fontSize: '1rem',
          fontWeight: '500',
          padding: '0.75rem 1rem',
          borderRadius: '4px',
          transition: 'all 0.3s ease',
          backgroundColor: '#f5f5f5'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#e3f2fd';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#f5f5f5';
        }}
        >
          Siguiente: {nextTitle} →
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
