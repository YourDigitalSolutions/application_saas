
import React from "react";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">NexusSaaS</div>
            <p className="text-slate-400 mb-4">
              Simplifiez votre flux de travail et boostez votre productivité avec notre plateforme tout-en-un.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <span className="font-semibold text-white mb-4 block">Produit</span>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Fonctionnalités</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Tarifs</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Témoignages</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Feuille de route</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Mises à jour</a></li>
            </ul>
          </div>
          
          <div>
            <span className="font-semibold text-white mb-4 block">Ressources</span>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Guides</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">API</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Communauté</a></li>
            </ul>
          </div>
          
          <div>
            <span className="font-semibold text-white mb-4 block">Entreprise</span>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">À propos</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Carrières</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">Confidentialité</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} NexusSaaS. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
              Mentions légales
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
              Confidentialité
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
