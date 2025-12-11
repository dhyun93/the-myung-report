import React from 'react';
import Hero from './components/Hero';
import WhatIsSaju from './components/WhatIsSaju';
import FourPillars from './components/FourPillars';
import WhyThemyung from './components/WhyThemyung';
import WhatCanYouLearn from './components/WhatCanYouLearn';
import SajuIsScience from './components/SajuIsScience';
import TermsGuide from './components/TermsGuide';
import ServicePlans from './components/ServicePlans';
import Process from './components/Process';
import FAQ from './components/FAQ';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <WhatIsSaju />
      <FourPillars />
      <WhyThemyung />
      <WhatCanYouLearn />
      <SajuIsScience />
      <TermsGuide />
      <ServicePlans />
      <Process />
      <FAQ />
    </div>
  );
}
