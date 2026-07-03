import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-black to-black" />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 border border-primary/20">
          <Sparkles className="w-8 h-8 text-primary" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter font-outfit mb-4 drop-shadow-md">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Page not found
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved to another universe.
        </p>
        
        <Link 
          href="/"
          className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
