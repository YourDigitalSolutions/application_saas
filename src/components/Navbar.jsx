
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.div
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              NexusSaaS
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-indigo-400 transition-colors">
              Fonctionnalités
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-indigo-400 transition-colors">
              Tarifs
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-indigo-400 transition-colors">
              Témoignages
            </a>
            <Button variant="ghost" className="text-sm">
              Se connecter
            </Button>
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white">
              Essai gratuit
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden pt-4 pb-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-sm font-medium hover:text-indigo-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fonctionnalités
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium hover:text-indigo-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tarifs
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium hover:text-indigo-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Témoignages
              </a>
              <Button variant="ghost" className="justify-start">
                Se connecter
              </Button>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white w-full">
                Essai gratuit
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
