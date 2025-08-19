import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PurchaseSection = () => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate('/comprar');
  };

  return (
    <section id="comprar" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gray-900/50 p-10 rounded-2xl shadow-lg border border-yellow-500/30 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            🛒 Garanta Seus <span className="text-gradient">Números da Sorte</span> Agora!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Não perca tempo! O próximo sorteio está chegando e você pode ser o grande vencedor.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left text-lg text-gray-200 mb-10">
              <p>✅ <strong>Próximo sorteio:</strong> A definir</p>
              <p>✅ <strong>Prêmios:</strong> R$ 3.000 ou CNH (carro e moto) grátis</p>
              <p>✅ <strong>Pagamento:</strong> Rápido e seguro via Pix</p>
              <p>✅ <strong>Confirmação:</strong> Receba seus números na hora</p>
          </div>

          <Button 
            onClick={handlePurchase}
            size="lg"
            className="w-full max-w-md mx-auto gradient-gold text-black font-bold py-4 rounded-full text-lg hover-lift pulse-gold"
          >
            🟡 COMPRAR AGORA E CONCORRER
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PurchaseSection;