
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "9",
    description: "Parfait pour les indépendants et les petites équipes",
    features: [
      "Jusqu'à 3 projets",
      "Jusqu'à 5 utilisateurs",
      "5 Go de stockage",
      "Analyses de base",
      "Support par email",
    ],
    notIncluded: [
      "Automatisations avancées",
      "API d'intégration",
      "Support prioritaire",
    ],
    cta: "Commencer gratuitement",
    popular: false,
  },
  {
    name: "Pro",
    price: "29",
    description: "Idéal pour les équipes en croissance",
    features: [
      "Projets illimités",
      "Jusqu'à 20 utilisateurs",
      "50 Go de stockage",
      "Analyses avancées",
      "Automatisations de base",
      "API d'intégration",
      "Support prioritaire",
    ],
    notIncluded: [
      "Automatisations avancées",
    ],
    cta: "Commencer l'essai gratuit",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "79",
    description: "Pour les grandes équipes avec des besoins avancés",
    features: [
      "Projets illimités",
      "Utilisateurs illimités",
      "500 Go de stockage",
      "Analyses personnalisées",
      "Automatisations avancées",
      "API complète",
      "Support dédié 24/7",
      "Formation personnalisée",
    ],
    notIncluded: [],
    cta: "Contacter les ventes",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="blur-dot w-96 h-96 top-1/2 -right-48"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            Des tarifs <span className="gradient-text">transparents</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300"
          >
            Choisissez le plan qui correspond le mieux à vos besoins.
            Tous les plans incluent un essai gratuit de 14 jours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${plan.popular ? "pricing-card-popular" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Le plus populaire
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-slate-400 ml-1">€/mois</span>
                </div>
                <p className="text-sm text-slate-400 mt-2">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                
                {plan.notIncluded.map((feature, i) => (
                  <div key={i} className="flex items-start text-slate-500">
                    <X className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white"
                    : "bg-slate-800 hover:bg-slate-700 text-white"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto p-8 rounded-xl border border-slate-800 bg-slate-900/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-2">Vous avez des besoins spécifiques ?</h3>
          <p className="text-slate-300 mb-4">
            Contactez notre équipe commerciale pour obtenir une offre personnalisée adaptée à vos besoins.
          </p>
          <Button variant="outline" className="border-indigo-500/30 hover:bg-indigo-500/10">
            Demander un devis personnalisé
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
