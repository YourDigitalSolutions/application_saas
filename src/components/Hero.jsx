
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="blur-dot w-96 h-96 -top-48 -left-48"></div>
      <div className="blur-dot w-96 h-96 top-1/4 -right-48"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Plateforme tout-en-un
            </span>
          </motion.div>

          <motion.h1 variants={item} className="mb-6">
            <span className="gradient-text">Simplifiez</span> votre flux de travail
            <br /> et boostez votre productivité
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-8 text-lg text-slate-300 max-w-2xl mx-auto"
          >
            NexusSaaS vous aide à organiser vos projets, automatiser vos tâches et
            collaborer efficacement avec votre équipe en un seul endroit.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-6 h-auto text-lg">
              Commencer gratuitement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-slate-700 hover:bg-slate-800 px-8 py-6 h-auto text-lg">
              Voir la démo
            </Button>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-300">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-indigo-400" />
              <span>Essai gratuit de 14 jours</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-indigo-400" />
              <span>Aucune carte de crédit requise</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-indigo-400" />
              <span>Annulez à tout moment</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative mx-auto max-w-5xl"
        >
          <div className="relative rounded-xl overflow-hidden border border-slate-700 shadow-2xl shadow-indigo-500/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/5"></div>
            <img  alt="Interface de NexusSaaS montrant le tableau de bord principal avec des graphiques, des tâches et des projets" className="w-full h-auto" src="https://images.unsplash.com/photo-1608403810239-ac22e2c3bac7" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
