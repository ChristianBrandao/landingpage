
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 text-white py-16 border-t border-yellow-500/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🟡</span>
              <span className="text-2xl font-bold text-gradient">Remp da Sorte</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              O sorteio mais confiável e transparente do Brasil.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-bold mb-4 block text-white">Contato</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">rempdasorte@gmail.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">@rempdasorte.oficial</span>
              </div>
            </div>
          </div>

          {/* Legal Info */}

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-yellow-500/20 mt-12 pt-8 text-center"
        >
          <p className="text-gray-500">
            © 2025 Remp da Sorte. Todos os direitos reservados. Sorteio 100% legal e transparente.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
