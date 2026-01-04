import React from 'react';
import HeroSection from '@/home/sections/HeroSection';
import ProblemSolutionSection from '@/home/sections/ProblemSolutionSection';
import HowItWorksSection from '@/home/sections/HowItWorksSection';
import BenefitsSection from '@/home/sections/BenefitsSection';
import TemplatesSection from '@/home/sections/TemplatesSection';
import FAQSection from '@/home/sections/FAQSection';
import CTASection from '@/home/sections/CTASection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <div id='hero'>
        <HeroSection/>
      </div>
      <div id='how-it-works'>
        <ProblemSolutionSection/>
      </div>
      <div id='how-it-works'>
        <HowItWorksSection/>
      </div>
      <div id='benefits'>
        <BenefitsSection/>
      </div>
      <div id='templates'>
        <TemplatesSection/>
      </div>
      <div id='faq'>
        <FAQSection/>
      </div>
      <div id='cta'>
        <CTASection/>
      </div>
    </main>
  );
}