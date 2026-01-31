import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Monitor, Users, Eye, EyeOff } from 'lucide-react';

export const WowDemo = () => {
  const [isSharing, setIsSharing] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto mt-16 glass rounded-2xl overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between p-4 border-b border-border bg-white/5">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
            <Monitor className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs font-medium">Internal Workspace</span>
          </div>
          <button 
            onClick={() => setIsSharing(!isSharing)}
            className={cn(
              "flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300",
              isSharing 
                ? "bg-red-500/20 text-red-400 border border-red-500/30" 
                : "bg-primary/20 text-primary border border-primary/30"
            )}
          >
            {isSharing ? <Users className="w-3 h-3" /> : <Monitor className="w-3 h-3" />}
            {isSharing ? "Stop Sharing" : "Share Screen"}
          </button>
        </div>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
          <div className="w-3 h-3 rounded-full bg-green-500/20" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border h-[400px]">
        {/* Your View */}
        <div className="relative overflow-hidden bg-[#0a0a0a]">
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-[10px] uppercase tracking-wider font-bold text-muted-foreground">
            <Eye className="w-3 h-3" /> Your View
          </div>
          
          {/* Mock App Content */}
          <div className="p-8 space-y-4 opacity-40">
            <div className="h-4 bg-white/10 rounded w-3/4" />
            <div className="h-4 bg-white/10 rounded w-1/2" />
            <div className="h-32 bg-white/5 rounded w-full border border-white/5" />
            <div className="h-4 bg-white/10 rounded w-2/3" />
          </div>

          {/* Panda Assistant UI (Always visible here) */}
          <motion.div 
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute bottom-6 right-6 w-48 glass p-3 rounded-xl border-primary/30 shadow-[0_0_20px_rgba(46,107,77,0.2)]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Panda Live</span>
            </div>
            <p className="text-[11px] leading-tight text-foreground/90 italic">
              "The client mentioned the budget is flexible for the Q4 rollout..."
            </p>
            <div className="mt-2 pt-2 border-t border-white/10 flex justify-between">
              <span className="text-[9px] text-muted-foreground">Action: Send proposal</span>
              <span className="text-[9px] text-primary font-bold">Not captured</span>
            </div>
          </motion.div>
        </div>

        {/* Shared View */}
        <div className="relative overflow-hidden bg-[#0a0a0a]">
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-[10px] uppercase tracking-wider font-bold text-muted-foreground">
            <Users className="w-3 h-3" /> Shared View (Others)
          </div>

          <AnimatePresence>
            {!isSharing && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
              >
                <Monitor className="w-12 h-12 text-muted-foreground/30 mb-4" />
                <p className="text-sm font-medium text-muted-foreground">Screen share inactive</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mock App Content */}
          <div className="p-8 space-y-4 opacity-40">
            <div className="h-4 bg-white/10 rounded w-3/4" />
            <div className="h-4 bg-white/10 rounded w-1/2" />
            <div className="h-32 bg-white/5 rounded w-full border border-white/5" />
            <div className="h-4 bg-white/10 rounded w-2/3" />
          </div>

          {/* Panda Assistant UI (Invisible here even when sharing) */}
          <div className="absolute bottom-6 right-6 w-48 h-24 border border-dashed border-white/5 rounded-xl flex items-center justify-center">
            <div className="flex flex-col items-center gap-1 opacity-20">
              <EyeOff className="w-4 h-4" />
              <span className="text-[9px] uppercase font-bold tracking-widest">Invisible</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-black/40 border-t border-border flex justify-center">
        <p className="text-xs text-muted-foreground flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
          Panda uses system-level overlays that are excluded from display capture APIs.
        </p>
      </div>
    </div>
  );
};
