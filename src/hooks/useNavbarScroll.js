import { useEffect } from 'react';

export function useNavbarScroll() {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');

    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbar.style.opacity = '1';
        navbar.style.pointerEvents = 'auto';
      } else {
        navbar.style.opacity = '0';
        navbar.style.pointerEvents = 'none';
      }
    };

    // Estado inicial
    navbar.style.opacity = '0';
    navbar.style.pointerEvents = 'none';

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
