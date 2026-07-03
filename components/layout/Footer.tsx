import Link from 'next/link';
import { ShieldCheck, Heart } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-card/20 backdrop-blur-md pt-16 pb-12 relative z-10 select-none">
      <div className="absolute inset-0 bg-linear-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        {/* Logo and Tagline Column */}
        <div className="col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-2 group w-fit">
            <div className="w-6.5 h-6.5 rounded-full bg-primary flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-black group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground font-outfit">Listify</span>
          </Link>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
            Visualize your music identity. Create stunning custom visual receipts and dive deep into your unique audio fingerprint.
          </p>
          <div className="flex gap-4 pt-2">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Product Column */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-foreground font-outfit">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/dashboard/artists" className="text-muted-foreground hover:text-primary transition-colors">
                Top Artists
              </Link>
            </li>
            <li>
              <Link href="/dashboard/tracks" className="text-muted-foreground hover:text-primary transition-colors">
                Top Tracks
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-foreground font-outfit">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Listify
              </Link>
            </li>
            <li>
              <a 
                href="https://www.spotify.com/us/account/apps/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                Spotify App Settings
              </a>
            </li>
            <li>
              <Link href="/#preview-section" className="text-muted-foreground hover:text-primary transition-colors">
                How It Works
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-foreground font-outfit">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Row */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center text-center md:text-left">
          <p>© {new Date().getFullYear()} Listify. All rights reserved.</p>
          <span className="hidden md:inline text-white/10">•</span>
          <p className="flex items-center gap-1.5 justify-center">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Secure connection powered by Spotify OAuth.
          </p>
        </div>
        <p className="flex items-center gap-1 justify-center">
          Not affiliated with Spotify AB. Built with <Heart className="w-3 h-3 text-red-500 fill-current" /> for music fans.
        </p>
      </div>
    </footer>
  );
}
