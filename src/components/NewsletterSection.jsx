
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.whatsapp) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos para continuar.",
        variant: "destructive"
      });
      return;
    }

    // Save to localStorage
    const newsletters = JSON.parse(localStorage.getItem('newsletters') || '[]');
    newsletters.push({
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString()
    });
    localStorage.setItem('newsletters', JSON.stringify(newsletters));

    toast({
      title: "✅ Cadastro realizado!",
      description: "Você receberá nossas novidades e sorteios em breve!",
    });

    setFormData({ name: '', email: '', whatsapp: '' });
  };

  return (
    <section className="py-20 bg-black bg-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center shadow-gold">
              <Mail className="w-8 h-8 text-black" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            📨 Receba nossas <span className="text-gradient">novidades</span> e sorteios!
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Seja o primeiro a saber sobre novos sorteios e promoções especiais!
          </p>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-gray-900/50 p-8 rounded-2xl shadow-lg border border-yellow-500/30 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-left block mb-2 font-semibold text-gray-300">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-800 border-yellow-500/50 text-white placeholder:text-gray-500 focus:border-yellow-500"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-left block mb-2 font-semibold text-gray-300">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-800 border-yellow-500/50 text-white placeholder:text-gray-500 focus:border-yellow-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="whatsapp" className="text-left block mb-2 font-semibold text-gray-300">WhatsApp</Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.whatsapp}
                onChange={handleInputChange}
                className="bg-gray-800 border-yellow-500/50 text-white placeholder:text-gray-500 focus:border-yellow-500"
                required
              />
            </div>

            <Button 
              type="submit"
              size="lg"
              className="w-full gradient-gold text-black font-bold py-4 rounded-full text-lg hover-lift"
            >
              Quero receber novidades
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
