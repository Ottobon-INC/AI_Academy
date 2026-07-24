import React from 'react';
import './V2SectionLogos.css';

interface RealLogo {
  name: string;
  url: string;
  height?: number;
}

const realLogos: RealLogo[] = [
  {
    name: 'Google',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    height: 28,
  },
  {
    name: 'OpenAI',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
    height: 28,
  },
  {
    name: 'Microsoft',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    height: 26,
  },
  {
    name: 'Meta',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
    height: 24,
  },
  {
    name: 'Amazon',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    height: 26,
  },
  {
    name: 'Netflix',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    height: 24,
  },
  {
    name: 'Apple',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    height: 28,
  },
  {
    name: 'NVIDIA',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg',
    height: 26,
  },
  {
    name: 'Tesla',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
    height: 24,
  },
  {
    name: 'IBM',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    height: 24,
  },
  {
    name: 'Anthropic',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg',
    height: 22,
  },
  {
    name: 'Cohere',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Cohere_logo.svg',
    height: 24,
  },
];

const V2SectionLogos: React.FC = () => {
  return (
    <section className="v2-logos-section">
      <div className="v2-logos-header">COMPANIES HIRING FOR AI ROLES</div>
      <div className="v2-logos-marquee">
        <div className="v2-logos-track">
          {/* Group 1 */}
          <div className="v2-logos-group">
            {realLogos.map((item, index) => (
              <div key={`logo-1-${index}`} className="v2-logo-item" title={item.name}>
                <img
                  src={item.url}
                  alt={`${item.name} Official Logo`}
                  className="v2-real-logo-img"
                  style={{ height: `${item.height || 26}px` }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${item.name.toLowerCase()}.svg`;
                  }}
                />
              </div>
            ))}
          </div>

          {/* Group 2 */}
          <div className="v2-logos-group" aria-hidden="true">
            {realLogos.map((item, index) => (
              <div key={`logo-2-${index}`} className="v2-logo-item" title={item.name}>
                <img
                  src={item.url}
                  alt={`${item.name} Official Logo`}
                  className="v2-real-logo-img"
                  style={{ height: `${item.height || 26}px` }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${item.name.toLowerCase()}.svg`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default V2SectionLogos;
