"use client";

import { motion } from "framer-motion";
import { BarChart3, Share2, Sparkles } from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Deep Analytics",
    description: "Uncover patterns in your listening history. Track your top artists, genres, and track features over time.",
    color: "primary"
  },
  {
    icon: <Sparkles className="w-6 h-6 text-purple-500" />,
    title: "Liquid Glass UI",
    description: "Experience your stats through a premium, distraction-free interface designed for modern displays.",
    color: "purple-500"
  },
  {
    icon: <Share2 className="w-6 h-6 text-blue-500" />,
    title: "Instant Sharing",
    description: "Generate pixel-perfect cards of your top tracks and artists ready to post on Instagram or Twitter.",
    color: "blue-500"
  }
];

export function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
      <h2 className="sr-only">Key Features</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="bg-card/40 backdrop-blur-md shadow-xl border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
