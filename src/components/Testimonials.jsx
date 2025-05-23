
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Directrice Marketing, TechCorp",
    content: "NexusSaaS a complètement transformé notre façon de travailler. Notre équipe est plus productive et nos projets sont livrés à temps. Je ne peux plus imaginer travailler sans cet outil !",
    avatar: "woman-marketing-director",
    stars: 5
  },
  {
    name: "Thomas Dubois",
    role: "Fondateur, StartupFlow",
    content: "En tant que startup, nous avions besoin d'un outil flexible qui puisse évoluer avec nous. NexusSaaS nous offre exactement cela, avec une interface intuitive et des fonctionnalités puissantes.",
    avatar: "man-startup-founder",
    stars: 5
  },
  {
    name: "Émilie Leclerc",
    role: "Chef de Projet, DesignStudio",
    content: "La collaboration en temps réel et les automatisations nous ont fait gagner des heures chaque semaine. Le support client est également exceptionnel, toujours réactif et utile.",
    avatar: "woman-project-manager",
    stars: 4
  },
  {
    name: "Alexandre Moreau",
    role: "Développeur Senior, CodeLabs",
    content: "L'API est robuste et bien documentée, ce qui nous a permis d'intégrer NexusSaaS à nos outils existants sans difficulté. Un excellent produit avec une équipe technique solide derrière.",
    avatar: "man-senior-developer",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="blur-dot w-96 h-96 bottom-0 left-1/4"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            Ce que nos clients <span className="gradient-text">adorent</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300"
          >
            Découvrez comment NexusSaaS aide des entreprises de toutes tailles à améliorer leur productivité et leur collaboration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 rounded-full overflow-hidden w-12 h-12 bg-indigo-500/20 flex items-center justify-center">
                  <img  alt={`Photo de profil de ${testimonial.name}`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544212408-c711b7c19b92" />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-slate-600"
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-slate-300 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <img  alt="Logo de TechCorp" className="h-8" src="https://images.unsplash.com/photo-1681992894234-6db66a592c29" />
            <img  alt="Logo de StartupFlow" className="h-8" src="https://images.unsplash.com/photo-1586880244386-8b3e34c8382c" />
            <img  alt="Logo de DesignStudio" className="h-8" src="https://images.unsplash.com/photo-1613523547236-f76d7652bacd" />
            <img  alt="Logo de CodeLabs" className="h-8" src="https://images.unsplash.com/photo-1650278795309-26295c74cf2b" />
            <img  alt="Logo de MarketingPro" className="h-8" src="https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
