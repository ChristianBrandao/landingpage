
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, DollarSign } from 'lucide-react';

const OrganizerSection = () => {
  const stats = [
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      value: "R$ 10.000+",
      label: "Pagos em prêmios"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      value: "20+",
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
            Quem Está por Trás do <span className="text-gradient">Remp da Sorte</span>?
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
              <h3 className="text-2xl font-bold mb-4 text-white">Remp</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Fala, pessoal! Eu sou o REMP, criador do Remp da Sorte.
              Nosso propósito é claro: mudar vidas com prêmios reais.
              Já tivemos muitos ganhadores felizes, e seguimos firmes no compromisso de crescer cada vez mais e transformar a vida de muita gente.
              Esse é um projeto sério, feito com carinho e transparência, especialmente para você!
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
                alt="lOGO"
               src="Gemini_Generated_Image_njbhlvnjbhlvnjbh.png" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrganizerSection;
