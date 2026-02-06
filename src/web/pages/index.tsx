import { motion } from "framer-motion";
import {
  Play,
  EyeOff,
  Sparkles,
  CheckCircle2,
  Star,
  ArrowRight,
  MessageSquare,
  Mic,
  Camera,
  FileText,
} from "lucide-react";

const comparisonCompetitors = [
  { key: "interviewCoder", label: "Interview Coder" },
  { key: "interviewingIo", label: "Interviewing.io" },
  { key: "lockedIn", label: "LockedIn AI" },
  { key: "finalRound", label: "Final Round AI" },
  { key: "aiApply", label: "AIApply" },
  { key: "ultraCode", label: "UltraCode" },
  { key: "otter", label: "Otter" },
  { key: "fireflies", label: "Fireflies" },
  { key: "fathom", label: "Fathom" },
  { key: "avoma", label: "Avoma" },
] as const;

type CompetitorKey = (typeof comparisonCompetitors)[number]["key"];

type ComparisonRow = {
  feature: string;
  nuvis: string;
  highlight?: boolean;
} & Record<CompetitorKey, string>;

const comparisonRows: ComparisonRow[] = [
  {
    feature: "System audio + mic transcription",
    nuvis: "✅",
    interviewCoder: "🔶",
    interviewingIo: "🔶",
    lockedIn: "🔶",
    finalRound: "🔶",
    aiApply: "🔶",
    ultraCode: "🔶",
    otter: "✅",
    fireflies: "✅",
    fathom: "✅",
    avoma: "✅",
  },
  {
    feature: "Assist chat with live context",
    nuvis: "✅",
    interviewCoder: "🔶",
    interviewingIo: "🔶",
    lockedIn: "🔶",
    finalRound: "🔶",
    aiApply: "🔶",
    ultraCode: "🔶",
    otter: "🔶",
    fireflies: "🔶",
    fathom: "🔶",
    avoma: "🔶",
  },
  {
    feature: "Screenshots into context",
    nuvis: "✅",
    interviewCoder: "🔶",
    interviewingIo: "🔶",
    lockedIn: "🔶",
    finalRound: "🔶",
    aiApply: "🔶",
    ultraCode: "🔶",
    otter: "🔶",
    fireflies: "🔶",
    fathom: "🔶",
    avoma: "🔶",
  },
  {
    feature: "Session history + recovery",
    nuvis: "✅",
    interviewCoder: "🔶",
    interviewingIo: "🔶",
    lockedIn: "🔶",
    finalRound: "🔶",
    aiApply: "🔶",
    ultraCode: "🔶",
    otter: "✅",
    fireflies: "✅",
    fathom: "✅",
    avoma: "✅",
  },
  {
    feature: "Export to JSON/Markdown",
    nuvis: "✅",
    interviewCoder: "🔶",
    interviewingIo: "🔶",
    lockedIn: "🔶",
    finalRound: "🔶",
    aiApply: "🔶",
    ultraCode: "🔶",
    otter: "✅",
    fireflies: "✅",
    fathom: "✅",
    avoma: "✅",
  },
  {
    feature: "Invisible mode for screen share",
    nuvis: "✅",
    interviewCoder: "🔶",
    interviewingIo: "🔶",
    lockedIn: "🔶",
    finalRound: "🔶",
    aiApply: "🔶",
    ultraCode: "🔶",
    otter: "🔶",
    fireflies: "🔶",
    fathom: "🔶",
    avoma: "🔶",
  },
  {
    feature: "Custom instructions + model",
    nuvis: "✅",
    interviewCoder: "🔶",
    interviewingIo: "🔶",
    lockedIn: "🔶",
    finalRound: "🔶",
    aiApply: "🔶",
    ultraCode: "🔶",
    otter: "🔶",
    fireflies: "🔶",
    fathom: "🔶",
    avoma: "🔶",
  },
  {
    feature: "Language + theme + transparency controls",
    nuvis: "✅",
    interviewCoder: "🔶",
    interviewingIo: "🔶",
    lockedIn: "🔶",
    finalRound: "🔶",
    aiApply: "🔶",
    ultraCode: "🔶",
    otter: "🔶",
    fireflies: "🔶",
    fathom: "🔶",
    avoma: "🔶",
  },
];

const killerFeatures = [
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Live Transcription",
    bullets: [
      "Captures system audio + microphone",
      "Low-latency streaming with Deepgram",
      "Multi-language support",
    ],
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Assist Mode",
    bullets: [
      "Chat with full session context",
      "Instant answers and follow-ups",
      "Great for hiring, support, or daily syncs",
    ],
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Context Screenshots",
    bullets: [
      "Capture moments with hotkeys",
      "Mix visuals into AI responses",
      "Ideal for design + code review",
    ],
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Session Memory",
    bullets: [
      "History, rename, recovery",
      "Export JSON / Markdown",
      "Summaries and auto-answers",
    ],
  },
  {
    icon: <EyeOff className="w-6 h-6" />,
    title: "Invisible Mode",
    bullets: [
      "Hide Nuvis in screen share",
      "Theme + transparency controls",
      "Custom instructions per session",
    ],
  },
];

const testimonials = [
  {
    name: "Ivan K.",
    role: "Staff Engineer",
    company: "Remote SaaS",
    quote:
      "Nuvis lets me stay present. Transcripts + summaries are ready before the call ends.",
    avatar: "https://i.pravatar.cc/150?img=12",
    link: "https://linkedin.com/in/ivan-k",
  },
  {
    name: "Marta L.",
    role: "Product Manager",
    company: "Fintech",
    quote:
      "Assist mode is a superpower. I can ask for instant recaps without breaking flow.",
    avatar: "https://i.pravatar.cc/150?img=32",
    link: "https://linkedin.com/in/marta-l",
  },
  {
    name: "Oleh S.",
    role: "Solutions Architect",
    company: "Cloud infra",
    quote:
      "Screenshots + context is the killer feature. Perfect for technical reviews.",
    avatar: "https://i.pravatar.cc/150?img=53",
    link: "https://linkedin.com/in/oleh-s",
  },
  {
    name: "Nina P.",
    role: "Customer Success",
    company: "Healthtech",
    quote:
      "No meeting bot. No awkward recording prompts. Just clean notes and action items.",
    avatar: "https://i.pravatar.cc/150?img=47",
    link: "https://linkedin.com/in/nina-p",
  },
  {
    name: "Danylo M.",
    role: "Engineering Lead",
    company: "B2B SaaS",
    quote:
      "Session history + export keeps my team aligned. JSON/Markdown is a lifesaver.",
    avatar: "https://i.pravatar.cc/150?img=19",
    link: "https://linkedin.com/in/danylo-m",
  },
  {
    name: "Kira T.",
    role: "Designer",
    company: "Marketplace",
    quote:
      "Invisible mode means I can share my screen without showing my notes.",
    avatar: "https://i.pravatar.cc/150?img=25",
    link: "https://linkedin.com/in/kira-t",
  },
  {
    name: "Artem H.",
    role: "QA Lead",
    company: "Security",
    quote:
      "I can tag issues with screenshots in seconds. It made retros way sharper.",
    avatar: "https://i.pravatar.cc/150?img=8",
    link: "https://linkedin.com/in/artem-h",
  },
  {
    name: "Sofia V.",
    role: "Data Analyst",
    company: "E-commerce",
    quote:
      "Nuvis summaries are crisp and on-point. I export them straight to Notion.",
    avatar: "https://i.pravatar.cc/150?img=44",
    link: "https://linkedin.com/in/sofia-v",
  },
];

const testimonialLoop = [...testimonials, ...testimonials];

const logos = [
  "Cloudflare",
  "Stripe",
  "Shopify",
  "Booking.com",
  "Revolut",
  "Remote",
  "Glovo",
  "EPAM",
  "Zapier",
  "Linear",
];

const logoLoop = [...logos, ...logos];

const faqs = [
  {
    q: "Does Nuvis work offline?",
    a: "Not yet. Nuvis relies on internet services for live transcription and AI responses.",
  },
  {
    q: "Where is my data stored?",
    a: "Sessions, transcripts, and screenshots are stored locally on your machine by default.",
  },
  {
    q: "Will it show in screen share?",
    a: "Nuvis has an Invisible Mode that hides the window during screen share.",
  },
  {
    q: "What permissions are required?",
    a: "Microphone and Screen Recording permissions are needed for audio capture and screenshots.",
  },
  {
    q: "Can I export sessions?",
    a: "Yes. Export full sessions to JSON or Markdown with one click.",
  },
  {
    q: "Does Nuvis join my calls?",
    a: "No meeting bot joins your call. Nuvis listens locally via system audio.",
  },
];

const pricing = [
  {
    name: "Day",
    price: "€10",
    desc: "24 hours of full access",
    features: [
      "Live transcription",
      "Assist mode",
      "Session summaries",
    ],
    cta: "Start for a Day",
  },
  {
    name: "Week",
    price: "€15",
    desc: "7 days of full access",
    features: [
      "Everything in Day",
      "Session history + export",
      "Invisible mode",
    ],
    cta: "Go Week",
    highlight: true,
  },
  {
    name: "Month",
    price: "€45",
    desc: "30 days of full access",
    features: [
      "Everything in Week",
      "Extended access window",
      "Best for ongoing work",
    ],
    cta: "Go Month",
  },
];

const Home = () => {
  return (
    <main className="relative bg-background text-foreground">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] bg-primary text-background px-4 py-2 rounded-lg font-bold"
      >
        Skip to content
      </a>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-bold tracking-tight">Nuvis</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Meeting Copilot
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#comparison" className="hover:text-primary transition-colors">
              Comparison
            </a>
            <a href="#video" className="hover:text-primary transition-colors">
              Demo
            </a>
            <a href="#features" className="hover:text-primary transition-colors">
              Features
            </a>
            <a href="#social-proof" className="hover:text-primary transition-colors">
              Proof
            </a>
            <a href="#pricing" className="hover:text-primary transition-colors">
              Plans
            </a>
            <a href="#faq" className="hover:text-primary transition-colors">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#cta" className="btn-primary px-4 py-2 text-sm">
              Get Nuvis
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="relative overflow-hidden pt-28 pb-16 h-[1200px]"
      >
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover opacity-40"
            src="/videos/panda.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/og-image.png"
          />
          <div className="absolute inset-0 hero-glow" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/30 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[120px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-[0.35em]"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Invisible meeting copilot
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] font-black max-w-4xl"
          >
            Stay present in every call.
            <br />
            <span className="text-primary">Nuvis listens and helps, invisibly.</span>
            <br />
            <span className="text-muted-foreground">
              Live transcription, Assist mode, instant summaries.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl"
          >
            System audio + mic transcription, Assist chat, and export-ready
            summaries — all in one desktop copilot.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground"
          >
            {["Live transcription", "Assist chat", "Session summaries"].map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#cta" className="btn-primary w-full sm:w-auto flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Get Nuvis
            </a>
            <a href="#video" className="btn-secondary w-full sm:w-auto flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo (60s)
            </a>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="relative py-24 bg-background/95">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              Nuvis vs the rest
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Focus on what the app actually ships today: live transcription,
              Assist chat, screenshots, and session memory — all inside your
              desktop copilot.
            </p>
          </motion.div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 glass">
            <table className="w-full min-w-[2000px] text-left text-sm">
              <thead className="bg-white/5 text-xs uppercase tracking-widest text-muted-foreground">
                <tr>
                  <th className="px-6 py-4 sticky left-0 z-10 bg-card/95">
                    Feature
                  </th>
                  <th className="px-6 py-4">Nuvis</th>
                  {comparisonCompetitors.map((competitor) => (
                    <th key={competitor.key} className="px-6 py-4">
                      {competitor.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.feature}
                    className={`border-t border-white/5 ${
                      row.highlight ? "bg-secondary/15 text-secondary" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-sm text-foreground/90 sticky left-0 bg-card/95">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 font-semibold">{row.nuvis}</td>
                    {comparisonCompetitors.map((competitor) => (
                      <td key={competitor.key} className="px-6 py-4">
                        {row[competitor.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            🔶 = varies by plan or platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a href="#cta" className="btn-primary w-full sm:w-auto flex items-center gap-2">
              Get Nuvis
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#video" className="btn-secondary w-full sm:w-auto">
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* Video Block */}
      <section id="video" className="relative py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              See Nuvis assist a live call
            </h2>
            <p className="text-muted-foreground mt-4">
              Live transcription, Assist answers, and clean summaries — without
              a meeting bot.
            </p>
          </motion.div>

          <div className="mt-12 relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/10" />
            <video
              className="w-full h-full object-cover"
              src="/videos/panda.mp4"
              controls
              poster="/og-image.png"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-6 text-center">
            “Watch Nuvis handle a live call and generate instant recap notes.”
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#cta" className="btn-primary w-full sm:w-auto">
              Get Nuvis
            </a>
            <a href="#features" className="btn-secondary w-full sm:w-auto">
              See Features
            </a>
          </div>
        </div>
      </section>

      {/* Killer Features */}
      <section id="features" className="relative py-24 bg-background/95">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              Core capabilities
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Everything you need to capture, summarize, and recall a live
              session — without leaving your call.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {killerFeatures.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="glass border-white/10 rounded-3xl p-6 hover:border-primary/40 transition-all"
              >
                <div className="flex items-center gap-3 text-primary">
                  <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <a href="#cta" className="btn-primary w-full sm:w-auto">
              Get Nuvis
            </a>
            <a href="#social-proof" className="btn-secondary w-full sm:w-auto">
              See Proof
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="social-proof" className="relative py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              Teams who run cleaner calls
            </h2>
            <p className="text-muted-foreground mt-4">
              From engineering to customer success — Nuvis keeps every meeting
              crisp, searchable, and actionable.
            </p>
          </motion.div>

          <div className="space-y-6">
            <div className="overflow-hidden">
              <div className="marquee">
                {testimonialLoop.map((t, idx) => (
                  <div
                    key={`${t.name}-${idx}`}
                    className="min-w-[260px] max-w-[320px] glass border-white/10 rounded-3xl p-6"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={`Portrait of ${t.name}`}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {t.role} @ {t.company}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-foreground">“{t.quote}”</p>
                    <a
                      href={t.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary"
                    >
                      LinkedIn
                      <ArrowRight className="w-3 h-3" />
                    </a>
                    <div className="mt-4 flex gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="marquee marquee-reverse">
                {testimonialLoop.map((t, idx) => (
                  <div
                    key={`${t.name}-reverse-${idx}`}
                    className="min-w-[260px] max-w-[320px] glass border-white/10 rounded-3xl p-6"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={`Portrait of ${t.name}`}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {t.role} @ {t.company}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-foreground">“{t.quote}”</p>
                    <a
                      href={t.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary"
                    >
                      LinkedIn
                      <ArrowRight className="w-3 h-3" />
                    </a>
                    <div className="mt-4 flex gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-3 text-sm text-muted-foreground">
            <div className="uppercase tracking-[0.2em] text-xs">Used by teams at</div>
            <div className="overflow-hidden">
              <div className="marquee">
                {logoLoop.map((logo, idx) => (
                  <span
                    key={`${logo}-${idx}`}
                    className="px-5 py-2 rounded-full border border-white/10 bg-white/5"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a href="#cta" className="btn-primary w-full sm:w-auto">
              Get Nuvis
            </a>
            <a href="#pricing" className="btn-secondary w-full sm:w-auto">
              See Plans
            </a>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="pricing" className="relative py-24 bg-background/95">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">Plans</h2>
            <p className="text-muted-foreground mt-4">
              Simple access tiers for quick sessions or long-running work.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-6 glass ${
                  plan.highlight ? "highlight-card" : "border-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.desc}</p>
                  </div>
                  {plan.highlight && (
                    <span className="text-xs uppercase tracking-[0.2em] text-primary border border-primary/50 px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>
                <div className="mt-6 text-4xl font-black">{plan.price}</div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-all ${
                    plan.highlight
                      ? "bg-primary text-background hover:bg-primary/90"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            Plans match what the app offers today — no hidden tiers.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">FAQ</h2>
            <p className="text-muted-foreground mt-4">
              The short answers. No corporate nonsense.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a href="#cta" className="btn-primary w-full sm:w-auto">
              Get Nuvis
            </a>
            <a href="#pricing" className="btn-secondary w-full sm:w-auto">
              See Plans
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="cta"
        className="relative py-24 bg-gradient-to-br from-primary/20 via-background to-background"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass border-primary/30 rounded-[32px] p-10 md:p-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Ready for your next call?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Nuvis keeps your sessions searchable, summarized, and ready to
              export — without leaving the call.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#footer-download" className="btn-primary w-full sm:w-auto flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Get Nuvis
              </a>
              <a href="#pricing" className="btn-secondary w-full sm:w-auto">
                See Plans
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span>Live transcription</span>
              <span>Assist mode</span>
              <span>Session export</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 border-t border-white/10 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div
            id="footer-download"
            className="glass border-white/10 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary">
                Ready for sharper meetings?
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mt-3">
                Download Nuvis and capture every call.
              </h3>
              <p className="text-muted-foreground mt-3 max-w-xl text-sm">
                Live transcription, Assist answers, and clean session history —
                without switching tools.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary"
              >
                Become an Affiliate
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a href="#" className="btn-primary w-full sm:w-auto">
                Download Nuvis
              </a>
              <a href="#pricing" className="btn-secondary w-full sm:w-auto">
                See Plans
              </a>
            </div>
          </div>

          <div className="relative mt-12">
            <div className="text-[26vw] sm:text-[18vw] md:text-[180px] font-black tracking-[0.32em] text-white/5 leading-none">
              Nuvis
            </div>
            <div className="mt-2 h-px w-full bg-white/60" />
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3 text-sm text-muted-foreground">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Sparkles className="w-4 h-4 text-primary" />
                Nuvis
              </div>
              <p className="text-sm">
                The invisible AI meeting copilot. Live transcription, Assist
                mode, and session memory.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
                Legal
              </div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">Privacy</a></li>
                <li><a href="#" className="hover:text-primary">Terms</a></li>
                <li><a href="#" className="hover:text-primary">Security</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
                Pages
              </div>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-primary">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary">Plans</a></li>
                <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span>© 2026 Nuvis. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                All systems online
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary">Affiliate</a>
              <a href="#" className="hover:text-primary">Status</a>
              <a href="#" className="hover:text-primary">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
