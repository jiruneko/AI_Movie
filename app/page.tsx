import {
  ArrowRight,
  Play,
  Calendar,
  Video,
  Mail,
  Wand2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">

          <div className="flex items-center gap-2">
            <Video className="w-6 h-6 text-indigo-500" />
            <span className="font-bold text-xl">AI_Movie</span>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <Link href="#features">Features</Link>
            <Link href="#how">How</Link>
            <Link href="#pricing">Pricing</Link>
          </nav>

          <Link href="/login" className="text-sm text-slate-300">
            Sign In
          </Link>

        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">

        <section className="pt-24 pb-32 text-center">

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            AI Video Generator
          </h1>

          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Generate and schedule videos automatically to SNS.
          </p>

          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-indigo-600 rounded-lg flex items-center gap-2">
              Start
              <ArrowRight className="w-4 h-4" />
            </button>

            <button className="px-6 py-3 border border-white/20 rounded-lg flex items-center gap-2">
              <Play className="w-4 h-4" />
              Demo
            </button>
          </div>

          {/* SNS（完全安全版） */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 text-slate-500">

            {/* YouTube */}
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.7 15.5v-7l6.2 3.5-6.2 3.5z" />
              </svg>
              YouTube
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm4.2 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
              </svg>
              Instagram
            </div>

            {/* TikTok */}
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.3V2h-3.5v13.7a2.9 2.9 0 1 1-2.9-2.9V9.4a6.3 6.3 0 1 0 6.3 6.3v-7a8.2 8.2 0 0 0 4.8 1.5V6.7z" />
              </svg>
              TikTok
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail className="w-6 h-6" />
              Email
            </div>

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-500">
        <div className="flex justify-center gap-4 mb-4">
        </div>
        © AI_Movie
      </footer>

    </div>
  );
}