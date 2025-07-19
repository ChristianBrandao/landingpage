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
        <title>Pix da Sorte - R$ 20.000 + CNH Grátis por apenas R$1</title>
        <meta name="description" content="Concorra a R$ 20.000 em dinheiro e CNH grátis com apenas R$1! O sorteio mais confiável e transparente do Brasil. Participe agora do Pix da Sorte!" />
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