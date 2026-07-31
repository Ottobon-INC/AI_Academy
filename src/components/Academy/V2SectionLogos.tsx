import React, { useState } from 'react';
import './V2SectionLogos.css';

interface Company {
  name: string;
  slug: string;
  color: string;
  domain: string;
}

const companies: Company[] = [
  { name: 'Google', slug: 'google', color: '4285F4', domain: 'google.com' },
  { name: 'OpenAI', slug: 'openai', color: '10A37F', domain: 'openai.com' },
  { name: 'Microsoft', slug: 'microsoft', color: '00A4EF', domain: 'microsoft.com' },
  { name: 'Meta', slug: 'meta', color: '0467DF', domain: 'meta.com' },
  { name: 'NVIDIA', slug: 'nvidia', color: '76B900', domain: 'nvidia.com' },
  { name: 'Anthropic', slug: 'anthropic', color: 'D97757', domain: 'anthropic.com' },
  { name: 'Salesforce', slug: 'salesforce', color: '00A1E0', domain: 'salesforce.com' },
  { name: 'Amazon', slug: 'amazon', color: 'FF9900', domain: 'amazon.com' },
  { name: 'Apple', slug: 'apple', color: '000000', domain: 'apple.com' },
  { name: 'Tesla', slug: 'tesla', color: 'E82127', domain: 'tesla.com' },
  { name: 'Adobe', slug: 'adobe', color: 'FF0000', domain: 'adobe.com' },
  { name: 'Netflix', slug: 'netflix', color: 'E50914', domain: 'netflix.com' },
  { name: 'Uber', slug: 'uber', color: '000000', domain: 'uber.com' },
  { name: 'Oracle', slug: 'oracle', color: 'F80000', domain: 'oracle.com' },
  { name: 'SAP', slug: 'sap', color: '008FD3', domain: 'sap.com' },
  { name: 'Snowflake', slug: 'snowflake', color: '29B5E8', domain: 'snowflake.com' },
  { name: 'Databricks', slug: 'databricks', color: 'FF3621', domain: 'databricks.com' },
  { name: 'Intel', slug: 'intel', color: '0068B5', domain: 'intel.com' },
  { name: 'AMD', slug: 'amd', color: 'ED1C24', domain: 'amd.com' },
  { name: 'IBM', slug: 'ibm', color: '054ADA', domain: 'ibm.com' },
  { name: 'Palantir', slug: 'palantir', color: '101010', domain: 'palantir.com' },
  { name: 'Vercel', slug: 'vercel', color: '000000', domain: 'vercel.com' },
  { name: 'Stripe', slug: 'stripe', color: '635BFF', domain: 'stripe.com' },
];

interface LogoImageProps {
  company: Company;
}

const LogoImage: React.FC<LogoImageProps> = ({ company }) => {
  const [srcIndex, setSrcIndex] = useState(0);

  // Reliable vector SVG CDN sources for official company logos
  const sources = [
    `https://cdn.simpleicons.org/${company.slug}/${company.color}`,
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${company.slug}/${company.slug}-original.svg`,
    `https://logo.clearbit.com/${company.domain}`,
    `https://www.google.com/s2/favicons?domain=${company.domain}&sz=128`,
  ];

  if (srcIndex >= sources.length) {
    return null;
  }

  return (
    <img
      src={sources[srcIndex]}
      alt={`${company.name} logo`}
      className="v2-real-logo-img"
      width={28}
      height={28}
      onError={() => setSrcIndex((i) => i + 1)}
    />
  );
};

const V2SectionLogos: React.FC = () => {
  const handleLogoClick = (company: Company) => {
    const query = encodeURIComponent(`${company.name} AI engineering jobs`);
    window.open(`https://www.google.com/search?q=${query}`, '_blank', 'noopener,noreferrer');
  };

  const renderGroup = (groupId: number, hidden = false) => (
    <div
      key={`group-${groupId}`}
      className="v2-logos-group"
      aria-hidden={hidden ? 'true' : undefined}
    >
      {companies.map((company, idx) => (
        <button
          key={`${groupId}-${idx}`}
          className="v2-logo-item"
          title={`Explore ${company.name} AI Careers`}
          onClick={() => handleLogoClick(company)}
        >
          <LogoImage company={company} />
          <span className="v2-logo-label">{company.name}</span>
        </button>
      ))}
    </div>
  );

  return (
    <section className="v2-logos-section">
      <p className="v2-logos-header">
        TOP TECH COMPANIES HIRING AI ENGINEERS (CLICK TO EXPLORE JOBS)
      </p>
      <div className="v2-logos-marquee">
        <div className="v2-logos-track">
          {renderGroup(1)}
          {renderGroup(2, true)}
        </div>
      </div>
    </section>
  );
};

export default V2SectionLogos;
