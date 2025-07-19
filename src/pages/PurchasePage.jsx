import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Minus, Plus, Zap, Star, ShieldCheck } from 'lucide-react';

const quantityOptions = [
    { amount: 10, price: 10, bonus: 'Nenhum', popular: false },
    { amount: 20, price: 20, bonus: '+ 2x chances', popular: false },
    { amount: 50, price: 50, bonus: '+ 5x chances', popular: true },
    { amount: 100, price: 100, bonus: '+ 10x chances', popular: false },
];

const PurchasePage = () => {
  const [quantity, setQuantity] = useState(50);
  const [customQuantity, setCustomQuantity] = useState(1);
  const [isCustom, setIsCustom] = useState(false);

  const handleSelectQuantity = (amount) => {
    setQuantity(amount);
    setIsCustom(false);
  };

  const handleCustomQuantityChange = (change) => {
    const newQuantity = customQuantity + change;
    if (newQuantity >= 1) {
      setCustomQuantity(newQuantity);
      setQuantity(newQuantity);
    }
  };

  const handlePurchase = () => {
    toast({
      title: "🚧 Pagamento em desenvolvimento!",
      description: `Você está comprando ${quantity} número(s). O checkout será implementado em breve! 🚀`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Comprar Números - Pix da Sorte</title>
        <meta name="description" content="Garanta seus números da sorte agora e concorra a R$ 20.000 + CNH grátis. Pagamento rápido e seguro via Pix." />
      </Helmet>
      <div className="bg-black bg-pattern pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Garanta sua <span className="text-gradient">Sorte</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Selecione a quantidade de números desejada. Quanto mais números, maiores suas chances de ganhar!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-gray-900/50 rounded-2xl shadow-lg border border-yellow-500/30 p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Quantity Selection */}
              <div className="space-y-4">
                 <h2 className="text-2xl font-bold text-white mb-4">1. Escolha a quantidade</h2>
                {quantityOptions.map((option) => (
                  <motion.div
                    key={option.amount}
                    onClick={() => handleSelectQuantity(option.amount)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 relative ${
                      quantity === option.amount && !isCustom ? 'border-yellow-400 shadow-gold bg-yellow-400/10' : 'border-gray-700 hover:border-yellow-500'
                    }`}
                    whileHover={{ scale: 1.03 }}
                  >
                    {option.popular && (
                       <div className="absolute -top-3 -right-3 gradient-gold text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                           <Star size={12}/> Mais Popular
                       </div>
                    )}
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-bold text-lg text-white">{option.amount} NÚMEROS</p>
                            <p className="text-yellow-400 font-medium">{option.bonus}</p>
                        </div>
                        <p className="font-bold text-xl text-white">R$ {option.price.toFixed(2)}</p>
                    </div>
                  </motion.div>
                ))}
                 <div
                    onClick={() => setIsCustom(true)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        isCustom ? 'border-yellow-400 shadow-gold bg-yellow-400/10' : 'border-gray-700 hover:border-yellow-500'
                    }`}
                >
                    <p className="font-bold text-lg text-white mb-2">Outra quantidade</p>
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="outline" size="icon"
                            onClick={(e) => { e.stopPropagation(); handleCustomQuantityChange(-1); }}
                            disabled={customQuantity <= 1}
                            className="border-yellow-500/50 bg-transparent text-yellow-500 hover:bg-yellow-500/10"
                        ><Minus className="w-4 h-4" /></Button>
                        <Input
                            type="number"
                            value={isCustom ? quantity : customQuantity}
                            onChange={(e) => {
                                e.stopPropagation();
                                const val = parseInt(e.target.value) || 1;
                                setCustomQuantity(val);
                                setQuantity(val);
                            }}
                            className="text-center text-xl font-bold w-24 bg-gray-800 border-yellow-500/50"
                            min="1"
                        />
                        <Button
                            variant="outline" size="icon"
                            onClick={(e) => { e.stopPropagation(); handleCustomQuantityChange(1); }}
                            className="border-yellow-500/50 bg-transparent text-yellow-500 hover:bg-yellow-500/10"
                        ><Plus className="w-4 h-4" /></Button>
                    </div>
                </div>
              </div>

              {/* Checkout Summary */}
              <div className="space-y-6 flex flex-col">
                <h2 className="text-2xl font-bold text-white mb-4">2. Finalizar Compra</h2>
                 <div className="bg-gray-800/70 p-6 rounded-xl border border-yellow-500/30 text-white flex-grow flex flex-col justify-between">
                    <div>
                        <p className="text-center text-lg text-gray-300 mb-4">Você está comprando</p>
                        <p className="text-center font-bold text-5xl text-gradient mb-6">{quantity} NÚMERO(S)</p>
                        
                        <div className="flex justify-between items-center text-xl font-bold mt-2 border-t border-gray-700 pt-4">
                            <span className="text-gray-200">Total a pagar:</span>
                            <span className="text-gradient">R$ {quantity.toFixed(2)}</span>
                        </div>
                    </div>
                    
                    <div className="space-y-3 text-sm text-green-400 mt-6">
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={16} /> Pagamento 100% seguro via Pix.
                        </div>
                         <div className="flex items-center gap-2">
                            <ShieldCheck size={16} /> Seus números chegam no WhatsApp e E-mail.
                        </div>
                    </div>
                </div>

                <Button 
                    onClick={handlePurchase}
                    size="lg"
                    className="w-full gradient-gold text-black font-bold py-4 rounded-full text-lg hover-lift pulse-gold flex items-center gap-2"
                >
                  <Zap size={20} /> PAGAR COM PIX
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchasePage;