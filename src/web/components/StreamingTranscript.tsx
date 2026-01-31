import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Sparkles, ClipboardList } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isHighlight?: boolean;
  isAction?: boolean;
}

const TRANSCRIPT_STEPS: Message[] = [
  { id: 1, text: "So, the main goal for this sprint is to finalize the API integration." },
  { id: 2, text: "We need to make sure the latency is under 200ms for the real-time features.", isHighlight: true },
  { id: 3, text: "Sarah, can you follow up with the platform team about the token limits?", isAction: true },
  { id: 4, text: "I'll handle the documentation update by Friday afternoon." },
  { id: 5, text: "Does anyone have concerns about the current database schema?", isHighlight: true },
  { id: 6, text: "We should probably index the 'session_id' field to optimize those lookups.", isAction: true },
];

export const StreamingTranscript = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (currentIndex < TRANSCRIPT_STEPS.length) {
      const fullText = TRANSCRIPT_STEPS[currentIndex].text;
      let charIndex = 0;
      
      const timer = setInterval(() => {
        setDisplayedText(fullText.substring(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === fullText.length) {
          clearInterval(timer);
          setTimeout(() => {
            setMessages(prev => [...prev, TRANSCRIPT_STEPS[currentIndex]]);
            setDisplayedText("");
            setCurrentIndex(prev => prev + 1);
          }, 1000);
        }
      }, 30);

      return () => clearInterval(timer);
    } else {
      // Reset after a delay to loop the demo
      const resetTimer = setTimeout(() => {
        setMessages([]);
        setCurrentIndex(0);
        setDisplayedText("");
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  return (
    <div className="w-full max-w-2xl glass rounded-2xl overflow-hidden border-primary/20 shadow-2xl">
      <div className="bg-white/5 p-4 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold uppercase tracking-wider">Smart Transcript</span>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] text-muted-foreground font-medium">LISTENING</span>
        </div>
      </div>
      
      <div className="p-6 h-[400px] overflow-y-auto space-y-4 font-mono text-sm">
        <AnimatePresence initial={false}>
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={cn(
                "p-3 rounded-lg border transition-all duration-500",
                m.isHighlight ? "bg-primary/10 border-primary/30 text-primary shadow-[0_0_15px_rgba(46,107,77,0.1)]" : 
                m.isAction ? "bg-accent/10 border-accent/30 text-accent" : 
                "bg-white/5 border-transparent text-foreground/80"
              )}
            >
              <div className="flex items-start gap-3">
                {m.isAction && <ClipboardList className="w-4 h-4 mt-0.5 shrink-0" />}
                <span>{m.text}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {displayedText && (
          <div className="p-3 rounded-lg bg-white/5 border-transparent text-foreground/80 flex items-center gap-2">
            <span>{displayedText}</span>
            <span className="w-1 h-4 bg-primary animate-pulse" />
          </div>
        )}

        <div className="h-4" /> {/* Spacer */}
      </div>

      <div className="p-4 bg-black/40 border-t border-white/5">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[10px] text-muted-foreground uppercase font-bold">Key Insight</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-[10px] text-muted-foreground uppercase font-bold">Action Item</span>
          </div>
        </div>
      </div>
    </div>
  );
};
