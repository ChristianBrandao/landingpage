import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (section) => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento!",
      description: "Esta seção será implementada em breve. Solicite na próxima conversa! 🚀",
    });
    setIsMenuOpen(false);
  };

  const handleBuyClick = () => {
    navigate('/comprar');
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg shadow-lg border-b border-yellow-500/30"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">🟡</span>
              <span className="text-xl font-bold text-gradient">Pix da Sorte</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleMenuClick('sobre')}
              className="text-gray-300 hover:text-yellow-400 font-medium transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => handleMenuClick('como-participar')}
              className="text-gray-300 hover:text-yellow-400 font-medium transition-colors"
            >
              Como Participar
            </button>
            <button 
              onClick={() => handleMenuClick('ganhadores')}
              className="text-gray-300 hover:text-yellow-400 font-medium transition-colors"
            >
              Ganhadores
            </button>
            <button 
              onClick={() => handleMenuClick('avaliacoes')}
              className="text-gray-300 hover:text-yellow-400 font-medium transition-colors"
            >
              Avaliações
            </button>
          </nav>

          {/* CTA Button */}
          <Button 
            onClick={handleBuyClick}
            className="hidden md:flex gradient-gold text-black font-bold px-6 py-2 rounded-full hover-lift pulse-gold"
          >
            📲 Compre Agora
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-yellow-500/30"
          >
            <nav className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => handleMenuClick('sobre')}
                className="text-left text-gray-300 hover:text-yellow-400 font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => handleMenuClick('como-participar')}
                className="text-left text-gray-300 hover:text-yellow-400 font-medium"
              >
                Como Participar
              </button>
              <button 
                onClick={() => handleMenuClick('ganhadores')}
                className="text-left text-gray-300 hover:text-yellow-400 font-medium"
              >
                Ganhadores
              </button>
              <button 
                onClick={() => handleMenuClick('avaliacoes')}
                className="text-left text-gray-300 hover:text-yellow-400 font-medium"
              >
                Avaliações
              </button>
              <Button 
                onClick={handleBuyClick}
                className="gradient-gold text-black font-bold px-6 py-2 rounded-full w-full"
              >
                📲 Compre Agora
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;