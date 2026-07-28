import { useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import groovy from 'highlight.js/lib/languages/groovy';
import ini from 'highlight.js/lib/languages/ini';
import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import plaintext from 'highlight.js/lib/languages/plaintext';
import properties from 'highlight.js/lib/languages/properties';
import sql from 'highlight.js/lib/languages/sql';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';
import { useIsDark } from '../hooks/useIsDark';
import './CodeBlock.css';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('css', css);
hljs.registerLanguage('dockerfile', dockerfile);
hljs.registerLanguage('groovy', groovy);
hljs.registerLanguage('hcl', ini);
hljs.registerLanguage('java', java);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('jsx', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('properties', properties);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('text', plaintext);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('yaml', yaml);

export function CodeBlock({ code, language = 'bash', title = null }) {
  const codeRef = useRef(null);
  const isDark = useIsDark();

  useEffect(() => {
    if (codeRef.current) {
      const codeElement = codeRef.current.querySelector('code');
      if (codeElement) {
        codeElement.className = `language-${language} hljs`;
        codeElement.textContent = code;

        // Force rehighlight even if already highlighted
        delete codeElement.dataset.highlighted;
        hljs.highlightElement(codeElement);
      }
    }
  }, [code, language]);

  const themeClass = isDark ? 'dracula-dark' : 'dracula-light';

  return (
    <div className={`code-block-wrapper ${themeClass}`}>
      {title && <div className="code-block-title">{title}</div>}
      <pre ref={codeRef} className={`code-block language-${language}`}>
        <code className={`language-${language} hljs`}>{code}</code>
      </pre>
    </div>
  );
}
