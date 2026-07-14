export function TheorySection({ title, children }) {
  return (
    <section className="theory-section">
      <h3>{title}</h3>
      <div className="theory-content">
        {children}
      </div>
    </section>
  );
}
