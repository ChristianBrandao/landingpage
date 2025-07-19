
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, DollarSign } from 'lucide-react';

const OrganizerSection = () => {
  const stats = [
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      value: "R$ 100.000+",
      label: "Pagos em prêmios"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      value: "500+",
      label: "Ganhadores felizes"
    },
    {
      icon: <MapPin className="w-8 h-8 text-yellow-500" />,
      value: "Todo Brasil",
      label: "Atendimento nacional"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Quem Está por Trás do <span className="text-gradient">Pix da Sorte</span>?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-yellow-500/30">
              <h3 className="text-2xl font-bold mb-4 text-white">Lucas Barbosa</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Meu nome é Lucas Barbosa, criador do Pix da Sorte, um projeto sério para transformar vidas com prêmios reais. 
                Já são mais de R$ 100.000 pagos em prêmios e centenas de ganhadores felizes.
              </p>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <span className="font-medium">Atendemos todo o Brasil com suporte humanizado e garantias reais.</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gray-900/50 rounded-xl shadow-md border border-yellow-500/20"
                >
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="floating">
              <img  
                className="w-full h-auto rounded-2xl shadow-gold border-2 border-yellow-500/50" 
                alt="Lucas Barbosa sorrindo com ganhadores do Pix da Sorte"
               src="https://images.unsplash.com/photo-1689143944836-e9d9cbc50f97" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrganizerSection;
