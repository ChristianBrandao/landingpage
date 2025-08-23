import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleBuyClick = () => {
    const buySection = document.getElementById('comprar');
    if (buySection) {
      buySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-24 bg-black bg-pattern min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              💰 <span className="text-gradient">R$ 3.000</span> ou <span className="text-gradient">CNH GRÁTIS (carro e moto)</span> por apenas <span className="text-gradient">R$0.25</span> no Pix!
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Concorra a prêmios que mudam sua vida com apenas R$0.25! Participe agora do Remp da Sorte, o sorteio mais confiável e transparente do Brasil!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                onClick={handleBuyClick}
                size="lg"
                className="gradient-gold text-black font-bold px-8 py-4 rounded-full text-lg hover-lift pulse-gold"
              >
                🟡 QUERO COMPRAR MEU NÚMERO AGORA
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Video - Usando iframe do YouTube */}
          <div className="relative">
            <div className="w-full aspect-video rounded-2xl shadow-gold border-2 border-yellow-500/50 overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/fPO-HrEIgjw?autoplay=1&mute=1&loop=1&playlist=fPO-HrEIgjw"
                title="Apresentação Remp da Sorte"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Decorative Elements - Sem animação */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-30" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-400 rounded-full opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;