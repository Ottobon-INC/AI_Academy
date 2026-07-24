import React from 'react';
import './CylinderCarousel.css';

interface CylinderCarouselProps {
  images: string[];
}

const companies = [
  { name: 'Google', color: '#4285F4' },
  { name: 'OpenAI', color: '#10A37F' },
  { name: 'Microsoft', color: '#00A4EF' },
  { name: 'Meta', color: '#0082FB' },
  { name: 'Amazon', color: '#FF9900' },
  { name: 'Nvidia', color: '#76B900' },
  { name: 'Anthropic', color: '#D97706' },
  { name: 'Tesla', color: '#CC0000' },
];

// Interleave images and company cards
function buildSlides(images: string[]) {
  const slides: Array<{ type: 'image'; src: string } | { type: 'company'; name: string; color: string }> = [];
  let imgIdx = 0;
  let coIdx = 0;
  const total = images.length + companies.length;
  for (let i = 0; i < total; i++) {
    // Alternate: 2 images then 1 company card
    if (i % 3 === 2 && coIdx < companies.length) {
      slides.push({ type: 'company', ...companies[coIdx++] });
    } else if (imgIdx < images.length) {
      slides.push({ type: 'image', src: images[imgIdx++] });
    } else if (coIdx < companies.length) {
      slides.push({ type: 'company', ...companies[coIdx++] });
    }
  }
  return slides;
}

const CylinderCarousel: React.FC<CylinderCarouselProps> = ({ images }) => {
  const slides = buildSlides(images);
  const N = slides.length;
  const cardWidth = window.innerWidth < 768 ? 160 : 280;

  const customStyle = {
    '--n': N,
    '--w': `${cardWidth}px`,
    '--ba': `calc(1turn / var(--n))`,
    '--anim-dur': `80s`,
  } as React.CSSProperties;

  return (
    <div
      className="cylinder-carousel-container"
      style={{
        perspective: '35em',
        maskImage: 'linear-gradient(90deg, transparent, #000 2% 98%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 2% 98%, transparent)',
      }}
    >
      <div
        className="cylinder-carousel-rotator"
        style={{
          ...customStyle,
          animation: 'ry var(--anim-dur) linear infinite',
        }}
      >
        <style>{`
          @keyframes ry {
            to { transform: rotateY(1turn); }
          }
        `}</style>

        {slides.map((slide, i) => {
          const itemStyle = {
            width: 'var(--w)',
            aspectRatio: '7/10',
            '--i': i,
            transform:
              'rotateY(calc(var(--i) * var(--ba))) translateZ(calc(-1 * (0.5 * var(--w) + 0.5em) / tan(0.5 * var(--ba))))',
          } as React.CSSProperties;

          if (slide.type === 'image') {
            return (
              <img
                key={i}
                src={slide.src}
                alt={`Person ${i}`}
                className="cylinder-carousel-item"
                style={itemStyle}
              />
            );
          }

          // Company card
          return (
            <div
              key={i}
              className="cylinder-company-card"
              style={{
                ...itemStyle,
                background: `linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.8))`,
                border: `1px solid ${slide.color}33`,
                boxShadow: `inset 0 0 40px ${slide.color}11`,
              }}
            >
              <div
                className="cylinder-company-dot"
                style={{ background: slide.color }}
              />
              <div
                className="cylinder-company-name"
                style={{ color: slide.color }}
              >
                {slide.name}
              </div>
              <div className="cylinder-company-label">Hiring AI Talent</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CylinderCarousel;
