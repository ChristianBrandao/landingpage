
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CreditCard, Mail, Trophy } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <ShoppingCart className="w-10 h-10 text-black" />,
      title: "Escolha seus números",
      description: "Escolha quantos números da sorte quer comprar (cada um custa apenas R$0,20)."
    },
    {
      icon: <CreditCard className="w-10 h-10 text-black" />,
      title: "Pague via Pix",
      description: "Faça o pagamento via Pix automático de forma rápida e segura"
    },
    {
      icon: <Mail className="w-10 h-10 text-black" />,
      title: "Receba seus números",
      description: "Receba os seus números por e-mail e WhatsApp instantaneamente"
    },
    {
      icon: <Trophy className="w-10 h-10 text-black" />,
      title: "Aguarde o sorteio",
      description: "Aguarde o sorteio oficial e torça para ser o grande ganhador!"
    }
  ];

  return (
    <section className="py-20 bg-black bg-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Como <span className="text-gradient">Participar</span>?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto shadow-gold">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-black">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">✅ {step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gray-900/50 p-8 rounded-2xl shadow-lg border border-yellow-500/30"
        >
          <h3 className="text-2xl font-bold text-gradient mb-4">🎁 Dica Especial</h3>
          <p className="text-xl text-gray-200">
            Quanto mais números você comprar, mais chances de ganhar!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
