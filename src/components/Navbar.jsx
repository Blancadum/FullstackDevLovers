import { Link } from 'react-router-dom';

export function Navbar({ currentPage }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 className="logo">💻 Fullstack Dev Lovers</h1>
        </Link>
        <div className="nav-social">
          <a href="https://www.linkedin.com/in/blancadum/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <svg className="social-icon-nav" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.814 0-9.752h3.554v1.375c.427-.659 1.191-1.592 2.897-1.592 2.117 0 3.704 1.383 3.704 4.36v5.609zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.958-1.71 1.187 0 1.927.755 1.94 1.71 0 .951-.753 1.71-1.983 1.71zm1.581 11.597H3.635V9.697h3.283v10.755zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
          </a>
          <a href="mailto:blanca.denaumartín@example.com" title="Gmail">
            <svg className="social-icon-nav" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
