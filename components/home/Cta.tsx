"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { signIn, useSession } from "@/lib/auth-client";
import { useState } from "react";

export function Cta() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleConnect = async () => {
    setIsLoading(true);
    await signIn.social({
      provider: "spotify",
      callbackURL: "/dashboard",
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-[2rem] overflow-hidden bg-card/40 backdrop-blur-md shadow-2xl border border-white/10 p-1"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-30" />
        <div className="bg-background/80 backdrop-blur-md rounded-[1.875rem] p-12 md:p-24 text-center relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-outfit">
            Ready to see your stats?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md">
            Join thousands of users exploring their music identity through Listify&apos;s lens.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {session ? (
              <Button size="lg" nativeButton={false} className="rounded-full font-bold px-8 cursor-pointer" render={<Link href="/dashboard" />}>
                Go to Dashboard
              </Button>
            ) : (
              <Button 
                size="lg" 
                onClick={handleConnect}
                disabled={isLoading}
                className="rounded-full font-bold px-8"
              >
                {isLoading ? "Connecting..." : "Connect Spotify"}
              </Button>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
