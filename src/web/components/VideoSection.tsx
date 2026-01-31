import React, { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface VideoSectionProps {
  videoSrc: string; // e.g., "/videos/01-hero.mp4"
  posterSrc: string; // e.g., "/videos/01-hero.jpg"
  children: React.ReactNode;
  overlayClassName?: string;
  containerClassName?: string;
  preload?: boolean;
  id?: string;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  videoSrc,
  posterSrc,
  children,
  overlayClassName,
  containerClassName,
  preload = false,
  id,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(preload);

  useEffect(() => {
    if (preload) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [preload]);

  useEffect(() => {
    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, [prefersReducedMotion]);

  return (
    <section 
      id={id}
      ref={containerRef}
      className={cn(
        "relative min-h-screen w-full flex items-center justify-center overflow-hidden",
        containerClassName
      )}
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-background">
        {shouldLoad && (
          <video
            ref={videoRef}
            autoPlay={!prefersReducedMotion}
            loop
            muted
            playsInline
            poster={posterSrc}
            preload={preload ? "auto" : "metadata"}
            onLoadedData={() => setIsVideoLoaded(true)}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
              isVideoLoaded ? "opacity-100" : "opacity-0"
            )}
          >
            {/* 
                Add additional sources here for better performance/compatibility:
                <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
            */}
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        
        {/* Fallback Poster for Reduced Motion or While Loading */}
        <img 
          src={posterSrc} 
          alt="" 
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            (prefersReducedMotion || !isVideoLoaded) ? "opacity-100" : "opacity-0"
          )}
          aria-hidden="true"
        />

        {/* Overlays */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background/80 z-10",
          overlayClassName
        )} />
        <div className="absolute inset-0 bg-background/30 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-24">
        {children}
      </div>
    </section>
  );
};
