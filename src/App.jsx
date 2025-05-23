
import React from "react";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-indigo-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
