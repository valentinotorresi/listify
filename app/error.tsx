"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error("Global Error Boundary caught an error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="bg-card/40 backdrop-blur-md border border-white/5 shadow-2xl p-8 rounded-3xl max-w-md w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-red-500/10 z-0" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold font-outfit mb-4 text-white">Something went wrong!</h2>
          <p className="text-muted-foreground mb-8 text-sm">
            We encountered an unexpected error. Please try again or return to the home page.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => reset()}
              className="w-full py-3 px-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Try again
            </button>
            <Link
              href="/"
              className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
