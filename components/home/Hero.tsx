"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import dynamic from "next/dynamic";

import { LoginButton } from "./LoginButton";
import { Button } from "@/components/ui/button";

const Scene = dynamic(() => import("./Scene"), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-transparent" />
});

export function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <Scene />
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
      >
        <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-md border border-white/5 shadow-lg text-sm text-primary font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>The next generation of Spotify stats</span>
        </motion.div>
        
        <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold tracking-tight mb-8 font-outfit drop-shadow-lg">
          Your music taste, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
            beautifully visualized.
          </span>
        </motion.h1>
        
        <motion.p variants={item} className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl drop-shadow">
          Dive deep into your listening habits, generate stunning visual receipts, 
          and share your musical identity with the world.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-20">
          <LoginButton />
          <Button
            size="lg"
            variant="outline"
            nativeButton={true}
            className="rounded-full font-semibold text-base px-8 py-6 border-white/10 hover:bg-white/5 cursor-pointer backdrop-blur-sm"
            onClick={() => {
              document.getElementById("preview-section")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            How it works
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
