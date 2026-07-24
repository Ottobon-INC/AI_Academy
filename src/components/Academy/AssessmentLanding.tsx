import React from 'react';
import './AssessmentLanding.css'; // Keep base styles if any, or remove if unneeded

// Import V2 Sections
import V2SectionNavbar from './V2SectionNavbar';
import V2Section1Hero from './V2Section1Hero';
import V2Section2Who from './V2Section2Who';
import V2Section4How from './V2Section4How';
import V2Section5What from './V2Section5What';
import V2Section6WhyNow from './V2Section6WhyNow';
import V2Section7Proof from './V2Section7Proof';
import V2Section8FAQ from './V2Section8FAQ';
import V2Section9Push from './V2Section9Push';
import V2Section10Footer from './V2Section10Footer';

interface AssessmentLandingProps {
  onStart: () => void;
}

const AssessmentLanding: React.FC<AssessmentLandingProps> = ({ onStart }) => {
  return (
    <div className="landing-page v2-landing">
      <V2SectionNavbar onStart={onStart} />
      <V2Section1Hero onStart={onStart} />
      <V2Section2Who />
      <V2Section4How />
      <V2Section5What />
      <V2Section6WhyNow />
      <V2Section7Proof />
      <V2Section8FAQ />
      <V2Section9Push onStart={onStart} />
      <V2Section10Footer />
    </div>
  );
};

export default AssessmentLanding;
