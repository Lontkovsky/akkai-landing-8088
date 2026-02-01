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
  respectReducedMotion?: boolean;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  videoSrc,
  posterSrc,
  children,
  overlayClassName,
  containerClassName,
  preload = false,
  id,
  respectReducedMotion = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = prefersReducedMotion && respectReducedMotion;
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
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
    if (shouldLoad && videoRef.current && !videoError) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      // Ensure the browser starts fetching the video.
      videoRef.current.load();
    }
  }, [shouldLoad, videoError]);

  useEffect(() => {
    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
    } else if (!shouldReduceMotion && videoRef.current && isVideoLoaded && !videoError) {
      // Ensure video is playing if it should be
      videoRef.current.play().catch(err => {
        // Many browsers block autoplay unless muted, but we are muted.
        // Still, some might block it or it might fail if the element is removed.
        if (err.name !== 'AbortError') {
          console.warn(`Video play failed for ${videoSrc}:`, err);
        }
      });
    }
  }, [prefersReducedMotion, shouldReduceMotion, isVideoLoaded, videoError, videoSrc]);

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error(`Video error for ${videoSrc}:`, e);
    setVideoError(true);
  };

  const handleLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const handleLoadedMetadata = () => {
    setIsVideoLoaded(true);
  };

  const handleCanPlay = () => {
    setIsVideoLoaded(true);
    if (!shouldReduceMotion && videoRef.current && !videoError) {
      videoRef.current.play().catch(err => {
        if (err.name !== 'AbortError') {
          console.warn(`Video play failed for ${videoSrc}:`, err);
        }
      });
    }
  };

  const handlePlaying = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section 
      id={id}
      ref={containerRef}
      className={cn(
        "relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background",
        containerClassName
      )}
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {shouldLoad && !videoError && (
          <video
            ref={videoRef}
            autoPlay={!shouldReduceMotion}
            loop
            muted
            playsInline
            poster={posterSrc}
            preload={preload ? "auto" : "metadata"}
            onLoadedMetadata={handleLoadedMetadata}
            onLoadedData={handleLoadedData}
            onCanPlay={handleCanPlay}
            onPlaying={handlePlaying}
            onError={handleVideoError}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
              isVideoLoaded ? "opacity-100" : "opacity-0"
            )}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        
        {/* Fallback Poster for Reduced Motion, While Loading, or Error */}
        <img 
          src={posterSrc} 
          alt="" 
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            (shouldReduceMotion || !isVideoLoaded || videoError) ? "opacity-100" : "opacity-0"
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
