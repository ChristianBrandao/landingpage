
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Shield, Smartphone } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-yellow-500" />,
      text: "Sorteios com transmissão ao vivo"
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      text: "Garantia de segurança com sorteio baseado na Loteria Federal"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-yellow-500" />,
      text: "Após o pagamento via Pix, você recebe seu número da sorte por WhatsApp e e-mail"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            O que é o <span className="text-gradient">Remp da Sorte</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            O Remp da Sorte é um sorteio 100% legal e transparente onde você pode ganhar R$ 3.000 em dinheiro direto no Pix ou uma CNH grátis, apenas participando com um número da sorte a partir de R$ 0.25.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-8 rounded-2xl shadow-lg hover-lift border border-yellow-500/30"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-yellow-500/10 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <p className="text-gray-200 font-medium leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
