
import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  Clock, 
  Users, 
  Lock
} from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-10 w-10 text-indigo-400" />,
    title: "Analyses avancées",
    description: "Obtenez des insights détaillés sur vos projets et votre productivité avec des tableaux de bord personnalisables."
  },
  {
    icon: <Calendar className="h-10 w-10 text-indigo-400" />,
    title: "Planification intelligente",
    description: "Organisez vos tâches et projets avec notre système de planification intelligent qui s'adapte à votre façon de travailler."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-indigo-400" />,
    title: "Communication intégrée",
    description: "Discutez avec votre équipe directement dans le contexte de vos projets pour une collaboration plus efficace."
  },
  {
    icon: <Clock className="h-10 w-10 text-indigo-400" />,
    title: "Automatisations",
    description: "Automatisez les tâches répétitives et concentrez-vous sur ce qui compte vraiment pour votre entreprise."
  },
  {
    icon: <Users className="h-10 w-10 text-indigo-400" />,
    title: "Collaboration d'équipe",
    description: "Travaillez ensemble en temps réel sur des documents et des projets, où que vous soyez dans le monde."
  },
  {
    icon: <Lock className="h-10 w-10 text-indigo-400" />,
    title: "Sécurité renforcée",
    description: "Protégez vos données avec un chiffrement de bout en bout et des contrôles d'accès granulaires."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="blur-dot w-96 h-96 bottom-1/4 -left-48"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            Fonctionnalités <span className="gradient-text">puissantes</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300"
          >
            Tout ce dont vous avez besoin pour gérer vos projets et votre équipe efficacement, dans une interface intuitive et élégante.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8">
            Découvrez comment NexusSaaS transforme votre façon de travailler
          </h3>
          
          <div className="relative mx-auto max-w-4xl rounded-xl overflow-hidden border border-slate-700 shadow-xl">
            <div className="aspect-video bg-slate-800 flex items-center justify-center">
              <img  alt="Vidéo de démonstration des fonctionnalités de NexusSaaS" className="w-full h-auto" src="https://images.unsplash.com/photo-1590402494610-2c378a9114c6" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
