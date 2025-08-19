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

          {/* Hero Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="floating">
              <video 
                className="w-full h-auto rounded-2xl shadow-gold border-2 border-yellow-500/50" 
                autoPlay 
                loop 
                muted
              >
                {/* Caminho do vídeo extraído da imagem */}
                <source 
                  src="https://srv1526-files.hstgr.io/8ce7a0e4536ec7cf/files/public_html/Arquivos/apresentacao.mp4" 
                  type="video/mp4" 
                />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
            
            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-400 rounded-full opacity-30"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;