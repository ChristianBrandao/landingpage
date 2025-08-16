import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import OrganizerSection from '@/components/OrganizerSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PurchaseSection from '@/components/PurchaseSection';
import NewsletterSection from '@/components/NewsletterSection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Remp da Sorte | Concorra a 2 sorteios R$ 3.000 e CNH Grátis</title>
        <meta name="description" content="Participe do sorteio Remp da Sorte e concorra a R$ 3.000 em dinheiro e uma CNH grátis. Invista apenas R$ 0,25 e concorra a prêmios incríveis" />
      </Helmet>
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <OrganizerSection />
      <TestimonialsSection />
      <PurchaseSection />
      <NewsletterSection />
    </>
  );
};

export default HomePage;