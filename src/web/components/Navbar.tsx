import React from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/10 border-b border-border"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">P</span>
        </div>
        <span className="text-xl font-bold tracking-tight">Panda</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#problem" className="text-sm font-medium hover:text-primary transition-colors">Problem</a>
        <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How it works</a>
        <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
        <a href="#privacy" className="text-sm font-medium hover:text-primary transition-colors">Privacy</a>
        <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
      </div>

      <button className="btn-primary py-2 px-5 text-sm">
        Get Started
      </button>
    </motion.nav>
  );
};
