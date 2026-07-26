import './HighlightBox.css';

export function HighlightBox({ children, type = 'info' }) {
  return (
    <div className={`highlight-box ${type}`}>
      {typeof children === 'string' ? (
        <p>{children}</p>
      ) : (
        children
      )}
    </div>
  );
}
