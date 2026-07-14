import { CodeBlock } from './CodeBlock';
import './CodeExample.css';

export function CodeExample({
  children,
  code,
  language = 'bash',
  title,
  layout = 'auto' // 'auto', 'side-by-side', 'stacked'
}) {
  return (
    <div className={`code-example code-example-${layout}`}>
      <div className="code-example-content">
        {title && <h4>{title}</h4>}
        {children}
      </div>
      <div className="code-example-block">
        <CodeBlock code={code} language={language} />
      </div>
    </div>
  );
}
