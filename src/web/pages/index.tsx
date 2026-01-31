import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { VideoSection } from '@/components/VideoSection';
import { WowDemo } from '@/components/WowDemo';
import { AudioWave } from '@/components/AudioWave';
import { StreamingTranscript } from '@/components/StreamingTranscript';
import { Footer } from '@/components/Footer';
import { PandaCursor, PandaEasterEgg } from '@/components/PandaEffects';
import { ChevronRight, Play, Download, Shield, Mic, Zap, EyeOff, Layout, Clock, FileText, CheckCircle, Sparkles, ClipboardList, TrendingUp, Users2, LifeBuoy, GraduationCap, Cpu, Settings, Ghost, Lock, HardDrive, Sliders, Mail, Github, Twitter, Linkedin, Check } from 'lucide-react';

const Home = () => {
  return (
    <main className="relative">
      <a href="#hero" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] bg-primary text-white px-4 py-2 rounded-lg font-bold">
        Skip to content
      </a>
      <PandaCursor />
      <PandaEasterEgg />
      <Navbar />
      
      {/* Hero Section */}
      <VideoSection 
        videoSrc="/videos/01-hero.mp4"
        posterSrc="/videos/01-hero.jpg"
        preload={true}
        id="hero"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now in Early Access
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 max-w-5xl text-gradient leading-[1.1]"
          >
            Your invisible AI co-pilot.<br />
            <span className="text-primary">On screen.</span> In the moment.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            Permission-based screen awareness, live transcription, and smart assistance. 
            All while remaining completely invisible to others during screen shares.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <button className="btn-primary flex items-center gap-2 group">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download for macOS/Windows
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              Watch it work (30s)
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full"
          >
            <WowDemo />
          </motion.div>
        </div>
      </VideoSection>

      {/* Problem Section */}
      <VideoSection 
        videoSrc="/videos/02-problem.mp4"
        posterSrc="/videos/02-problem.jpg"
        id="problem"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <AudioWave />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Meetings are where context <span className="text-primary italic">goes to die.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Missing details in meetings", desc: "Critical decisions lost in the noise of rapid conversation." },
              { title: "Multitasking vs. focus", desc: "Taking notes means you're not actually present in the moment." },
              { title: "Manual note-taking", desc: "Slow, error-prone, and distracting for everyone involved." },
              { title: "Support calls fade away", desc: "Customer insights disappear the second the call ends." },
              { title: "Interview moments slip by", desc: "Nuance and non-verbal cues forgotten by the time you write the summary." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </VideoSection>

      {/* How It Works Section */}
      <VideoSection 
        videoSrc="/videos/03-howitworks.mp4"
        posterSrc="/videos/03-howitworks.jpg"
        id="how-it-works"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for <span className="text-primary">privacy</span>, designed for work.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Panda operates at the system level, giving you unprecedented assistance without compromising your security or workflow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Enable permissions",
                desc: "You control exactly what Panda can see and hear. Permission is requested per-session, and you can revoke it instantly.",
                mockup: (
                  <div className="mt-6 glass p-4 rounded-xl border-primary/20">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Privacy Controls</span>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <div className="w-2 h-2 rounded-full bg-white/10" />
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-2 rounded-lg border border-white/5">
                      <div className="w-8 h-8 bg-primary/20 rounded-md flex items-center justify-center">
                        <Layout className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-white/20 rounded w-16 mb-1" />
                        <div className="h-1.5 bg-white/10 rounded w-24" />
                      </div>
                      <div className="w-8 h-4 bg-primary rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                      </div>
                    </div>
                  </div>
                )
              },
              {
                step: "02",
                icon: <Mic className="w-8 h-8 text-primary" />,
                title: "Panda listens & transcribes",
                desc: "Only when enabled, Panda provides real-time transcription and contextual awareness of what's happening on your screen.",
                mockup: (
                  <div className="mt-6 glass p-4 rounded-xl border-primary/20">
                    <div className="flex gap-2 mb-4">
                      <div className="px-2 py-1 bg-red-500/10 border border-red-500/20 rounded text-[8px] font-bold text-red-400 uppercase">Live</div>
                      <div className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[8px] font-bold text-muted-foreground uppercase">00:42</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 bg-primary/40 rounded w-full" />
                      <div className="h-1.5 bg-white/10 rounded w-[90%]" />
                      <div className="h-1.5 bg-white/10 rounded w-[95%]" />
                      <div className="h-1.5 bg-primary/40 rounded w-[85%]" />
                    </div>
                  </div>
                )
              },
              {
                step: "03",
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "Panda assists contextually",
                desc: "Get smart highlights, action items, and suggested responses based on the current context of your meeting or task.",
                mockup: (
                  <div className="mt-6 glass p-4 rounded-xl border-primary/20">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 bg-primary rounded flex items-center justify-center">
                        <CheckCircle className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-[10px] font-bold">Smart Action</span>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 p-2 rounded text-[10px] text-primary/90 italic">
                      "Should I draft a follow-up email regarding the Q4 projections?"
                    </div>
                    <div className="flex gap-2 mt-3">
                      <div className="px-2 py-1 bg-primary text-white text-[8px] font-bold rounded">Yes, please</div>
                      <div className="px-2 py-1 bg-white/5 text-muted-foreground text-[8px] font-bold rounded">Maybe later</div>
                    </div>
                  </div>
                )
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative glass p-8 rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 group"
              >
                <div className="absolute top-4 right-6 text-4xl font-black text-white/5 group-hover:text-primary/10 transition-colors">
                  {item.step}
                </div>
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                {item.mockup}
              </motion.div>
            ))}
          </div>
        </div>
      </VideoSection>

      {/* Real-Time Transcription Section */}
      <VideoSection 
        videoSrc="/videos/04-transcription.mp4"
        posterSrc="/videos/04-transcription.jpg"
        id="features"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Transcription that <span className="text-primary italic">actually</span> helps.</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Most transcription tools just give you a wall of text. Panda understands the flow of your meeting, highlighting key insights and extracting action items as they happen.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { 
                  icon: <Sparkles className="w-5 h-5 text-primary" />, 
                  title: "Smart Highlights", 
                  desc: "Crucial points are automatically identified and styled for quick scanning later." 
                },
                { 
                  icon: <ClipboardList className="w-5 h-5 text-accent" />, 
                  title: "Instant Action Items", 
                  desc: "Assignments and follow-ups are extracted and can be synced with your task manager." 
                },
                { 
                  icon: <Clock className="w-5 h-5 text-muted-foreground" />, 
                  title: "Time-Synced Notes", 
                  desc: "Every highlight and action item is linked back to the exact moment in the recording." 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex gap-4"
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full lg:w-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <StreamingTranscript />
            </motion.div>
          </div>
        </div>
      </VideoSection>

      {/* Screen-Aware Assistance Section */}
      <VideoSection 
        videoSrc="/videos/05-screenaware.mp4"
        posterSrc="/videos/05-screenaware.jpg"
        id="screen-aware"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contextual magic, <span className="text-primary italic">everywhere.</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Panda is quiet by default, waiting for the moments where you need it most.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <TrendingUp className="w-6 h-6 text-primary" />,
                title: "Sales Calls",
                desc: "Panda captures objections in real-time and proposes the perfect follow-up response based on shared collateral."
              },
              {
                icon: <Users2 className="w-6 h-6 text-primary" />,
                title: "Interviews",
                desc: "Never miss a detail. Panda highlights key candidate answers and generates a structured summary for your team."
              },
              {
                icon: <LifeBuoy className="w-6 h-6 text-primary" />,
                title: "Customer Support",
                desc: "Faster resolutions with suggested replies and instant access to relevant knowledge snippets from your docs."
              },
              {
                icon: <GraduationCap className="w-6 h-6 text-primary" />,
                title: "Studying",
                desc: "Turn any live lecture or webinar into a searchable, interactive study guide with live captions and notes."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Panda is quiet by default
            </span>
          </motion.div>
        </div>
      </VideoSection>

      {/* Invisible During Screen Share Section */}
      <VideoSection 
        videoSrc="/videos/06-screenshare.mp4"
        posterSrc="/videos/06-screenshare.jpg"
        id="screen-share"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-8 text-right lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Invisible to others. <span className="text-primary italic">Always.</span></h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We've built Panda to be the ultimate personal assistant. That means it never gets in the way of your presentation, and it never leaks sensitive notes to your audience.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { 
                  icon: <EyeOff className="w-5 h-5 text-primary" />, 
                  title: "Display-Level Overlay", 
                  desc: "Panda renders directly to your display buffer, bypassing the window capture APIs used by Zoom, Teams, and Slack." 
                },
                { 
                  icon: <Shield className="w-5 h-5 text-primary" />, 
                  title: "Zero-Leak Guarantee", 
                  desc: "Rest easy knowing your private notes, cues, and research stay on your screen only." 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex flex-row-reverse lg:flex-row gap-4"
                >
                  <div className="mt-1">{item.icon}</div>
                  <div className="text-right lg:text-left">
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full lg:w-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <WowDemo />
            </motion.div>
          </div>
        </div>
      </VideoSection>

      {/* Privacy & Control Section */}
      <VideoSection 
        videoSrc="/videos/07-privacy.mp4"
        posterSrc="/videos/07-privacy.jpg"
        id="privacy"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold">Privacy is not a feature. <span className="text-primary italic">It's the foundation.</span></h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Panda was built with a privacy-first architecture. We believe that your data belongs to you, and your screen is your private workspace.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Cpu className="w-5 h-5 text-primary" />, title: "On-Device Processing", desc: "Most AI models run locally on your machine to minimize data transfer." },
                  { icon: <Shield className="w-5 h-5 text-primary" />, title: "Encrypted in Transit", desc: "When we do use cloud processing, everything is end-to-end encrypted." },
                  { icon: <Sliders className="w-5 h-5 text-primary" />, title: "Transparent Controls", desc: "Visual indicators always show when Panda is active or listening." },
                  { icon: <Lock className="w-5 h-5 text-primary" />, title: "User Data Ownership", desc: "You decide what's stored, what's deleted, and who has access." }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <h4 className="font-bold text-sm">{item.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass p-8 rounded-3xl border-primary/20 shadow-2xl relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-bold">Control Center</h3>
                  <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-[10px] font-bold text-primary uppercase">Secure</div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-4">
                      <Mic className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-bold">Microphone Access</p>
                        <p className="text-[10px] text-muted-foreground">Enabled for current session</p>
                      </div>
                    </div>
                    <div className="w-10 h-5 bg-primary rounded-full relative">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-4">
                      <Layout className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-bold">Screen Awareness</p>
                        <p className="text-[10px] text-muted-foreground">Only active when app is focused</p>
                      </div>
                    </div>
                    <div className="w-10 h-5 bg-primary rounded-full relative">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5">
                    <button className="w-full py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold rounded-xl border border-red-500/20 transition-colors">
                      Terminate All Sessions & Delete Cache
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl -z-0" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-0" />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 pt-12 border-t border-white/5"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Cpu className="w-6 h-6" />, label: "On-Device Processing" },
                { icon: <Sliders className="w-6 h-6" />, label: "Transparent Controls" },
                { icon: <Ghost className="w-6 h-6" />, label: "No Background Tracking" },
                { icon: <HardDrive className="w-6 h-6" />, label: "User Data Ownership" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 text-center group">
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </VideoSection>

      {/* Pricing Section */}
      <VideoSection 
        videoSrc="/videos/08-pricing.mp4"
        posterSrc="/videos/08-pricing.jpg"
        id="pricing"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, transparent <span className="text-primary italic">pricing.</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the plan that fits your workflow. All plans include our commitment to privacy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              {
                name: "Starter",
                price: "$0",
                desc: "Perfect for students and casual users.",
                features: ["Live captions", "Basic transcription", "Device-only storage", "Community support"],
                cta: "Get Started",
                popular: false
              },
              {
                name: "Pro",
                price: "$19",
                period: "/mo",
                desc: "Designed for professionals and power users.",
                features: ["Real-time transcription", "Smart highlights", "Action item extraction", "Cloud sync (Encrypted)", "Priority support"],
                cta: "Start Free Trial",
                popular: true
              },
              {
                name: "Team",
                price: "Custom",
                desc: "For organizations with advanced needs.",
                features: ["Admin controls", "Compliance options", "Team collaboration", "SSO integration", "Dedicated manager"],
                cta: "Contact Sales",
                popular: false
              }
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative glass p-8 rounded-3xl border-white/5 flex flex-col h-full",
                  tier.popular && "border-primary/50 shadow-[0_0_30px_rgba(46,107,77,0.2)] scale-105 z-10"
                )}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">{tier.desc}</p>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={cn(
                  "w-full py-4 rounded-xl font-bold text-sm transition-all duration-300",
                  tier.popular ? "bg-primary text-white hover:bg-accent" : "bg-white/5 text-foreground hover:bg-white/10 border border-white/10"
                )}>
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Email Capture */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass p-8 md:p-12 rounded-3xl border-primary/20 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Stay in the loop</h3>
            <p className="text-muted-foreground mb-8">
              Join 10,000+ people getting early access and weekly productivity tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button type="submit" className="btn-primary py-4 px-8 whitespace-nowrap">
                Get Early Access
              </button>
            </form>
            <p className="text-[10px] text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </motion.div>
        </div>
      </VideoSection>

      <Footer />
    </main>
  );
};

export default Home;
