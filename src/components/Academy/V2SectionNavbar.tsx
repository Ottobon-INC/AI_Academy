import React from 'react';
import './V2SectionNavbar.css';

interface V2SectionNavbarProps {
  onStart: () => void;
}

const navItems = [
  { id: 'who', label: "Who It's For" },
  { id: 'path', label: 'The Path' },
  { id: 'ai-engine', label: 'AI Engine' },
  { id: 'why-now', label: 'Why Now' },
  { id: 'impact', label: 'Our Impact' },
  { id: 'faq', label: 'FAQ' },
];

const V2SectionNavbar: React.FC<V2SectionNavbarProps> = ({ onStart }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="v2-navbar">
      <a 
        href="#" 
        className="v2-nav-logo"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        AI Academy
      </a>
      
      <div className="v2-nav-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => scrollToSection(e, item.id)}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="v2-nav-actions">
        <button className="v2-nav-cta" onClick={onStart}>
          Find Your Path
        </button>
      </div>
    </nav>
  );
};

export default V2SectionNavbar;
