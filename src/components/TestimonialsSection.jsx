
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria",
      location: "RJ",
      message: "Ganhei R$ 1.000 no Pix da Sorte e nem acreditei! Super rápido e confiável!",
      rating: 5
    },
    {
      name: "Carlos",
      location: "SP", 
      message: "Participei com 5 números por R$5 e levei R$10.000! Recomendo demais.",
      rating: 5
    },
    {
      name: "Amanda",
      location: "BA",
      message: "Fui sorteada com uma CNH grátis! Obrigada pela oportunidade.",
      rating: 5
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
            ⭐ Depoimentos de Quem Já <span className="text-gradient">Ganhou</span>!
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-8 rounded-2xl shadow-lg hover-lift border border-yellow-500/30 relative"
            >
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 gradient-gold rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-black" />
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed text-lg italic">
                  "{testimonial.message}"
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-white">🗣️ {testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-gray-900/50 p-8 rounded-2xl shadow-lg border border-yellow-500/30"
        >
          <h3 className="text-2xl font-bold text-gradient mb-4">🎬 Prova Social</h3>
          <p className="text-lg text-gray-300">
            Inclua prints, vídeos ou áudios no WhatsApp para gerar ainda mais confiança!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
