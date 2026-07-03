"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Heart, UserCheck } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Listify's receipt generator is so cool. I share it on my close friends list every month. The design is absolutely gorgeous.",
    author: "Emma S.",
    handle: "@emmas_music",
    initials: "ES",
  },
  {
    quote: "Clean, responsive, and completely secure. I love how it doesn't try to store my listening history. A developer's dream Spotify stats tool.",
    author: "Liam K.",
    handle: "@liamcodes",
    initials: "LK",
  },
  {
    quote: "The audio features radar chart is super detailed. It helped me realize why all my favorite songs share the exact same bpm range!",
    author: "Sofia R.",
    handle: "@sofia_r",
    initials: "SR",
  },
];

export function SocialProof() {
  return (
    <section className="border-y border-white/5 bg-white/[0.01] py-20 relative overflow-hidden z-10">
      {/* Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Ticker / Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
          <div className="space-y-1">
            <h4 className="text-3xl md:text-4xl font-bold font-outfit text-foreground">15k+</h4>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold flex items-center justify-center gap-1">
              <UserCheck className="w-3.5 h-3.5 text-primary" /> Profiles Audited
            </p>
          </div>
          <div className="space-y-1">
            <h4 className="text-3xl md:text-4xl font-bold font-outfit text-foreground">50k+</h4>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold flex items-center justify-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Cards Shared
            </p>
          </div>
          <div className="space-y-1">
            <h4 className="text-3xl md:text-4xl font-bold font-outfit text-foreground">100%</h4>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Secure OAuth
            </p>
          </div>
          <div className="space-y-1">
            <h4 className="text-3xl md:text-4xl font-bold font-outfit text-foreground">4.9/5</h4>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold flex items-center justify-center gap-1">
              <Heart className="w-3.5 h-3.5 text-red-400" /> User Satisfaction
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex flex-col justify-between"
            >
              <p className="text-muted-foreground text-sm italic leading-relaxed mb-6">
                &quot;{t.quote}&quot;
              </p>
              
              <div className="flex items-center gap-3">
                <Avatar className="w-9 h-9 border border-white/10">
                  <AvatarFallback className="bg-secondary text-xs font-semibold text-foreground">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.handle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
