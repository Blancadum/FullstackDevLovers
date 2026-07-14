import './HighlightBox.css';

export function HighlightBox({ children, type = 'info' }) {
  return (
    <div className={`highlight-box highlight-${type}`}>
      {children}
    </div>
  );
}
