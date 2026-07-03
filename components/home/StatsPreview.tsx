"use client";

import { motion } from "framer-motion";
import { Receipt, Calendar, Award } from "lucide-react";

export function StatsPreview() {
  const receiptItems = [
    { title: "Starboy", artist: "The Weeknd", duration: "3:50", price: "0.85" },
    { title: "Birds of a Feather", artist: "Billie Eilish", duration: "3:30", price: "0.78" },
    { title: "One More Time", artist: "Daft Punk", duration: "5:20", price: "0.62" },
    { title: "HUMBLE.", artist: "Kendrick Lamar", duration: "2:57", price: "0.55" },
    { title: "After Hours", artist: "The Weeknd", duration: "6:01", price: "0.50" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4 text-foreground">
          Stunning Insights & Shareable Cards
        </h2>
        <p className="text-muted-foreground text-lg">
          Uncover the sonic profile of your listening history and turn your music stats into designer-grade shareable receipts.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Trendy Receipt Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ rotate: -2, y: 20, opacity: 0 }}
            whileInView={{ rotate: -1, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[340px] bg-white text-black p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-neutral-200 font-mono relative text-xs flex flex-col justify-between"
          >
            {/* Hologram/Stamp Effect */}
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-dashed border-neutral-300 flex items-center justify-center text-[8px] font-bold text-neutral-400 rotate-12">
              LISTIFY
            </div>

            <div>
              <div className="text-center border-b border-dashed border-neutral-300 pb-4 mb-4">
                <h4 className="text-lg font-bold tracking-tight">LISTIFY RECEIPT</h4>
                <p className="text-[10px] text-neutral-500 mt-1">ORDER #89201 • {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-[10px] text-neutral-500 border-b pb-1 mb-1">
                  <span>ITEM / DESCRIPTION</span>
                  <span>SCORE</span>
                </div>
                {receiptItems.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start">
                    <div className="max-w-[200px]">
                      <p className="font-bold truncate text-black">{idx + 1}. {item.title}</p>
                      <p className="text-[10px] text-neutral-500 truncate">{item.artist}</p>
                    </div>
                    <span className="font-bold text-black">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-dashed border-neutral-300 pt-4 space-y-1 text-[11px] mb-6">
                <div className="flex justify-between">
                  <span className="text-neutral-500">ITEM COUNT:</span>
                  <span className="font-bold text-black">5 TRACKS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">TOTAL DURATION:</span>
                  <span className="font-bold text-black">21:38 MIN</span>
                </div>
                <div className="flex justify-between text-base font-bold border-t border-dashed border-neutral-300 pt-2 text-black">
                  <span>VIBE INDEX:</span>
                  <span>9.20</span>
                </div>
              </div>
            </div>

            <div className="text-center text-[10px] text-neutral-400 border-t border-dashed border-neutral-300 pt-4 mt-2">
              <p>THANK YOU FOR LISTENING!</p>
              <p className="mt-1 font-bold text-neutral-500">LISTIFY.VERCEL.APP</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Key Metrics Bento Layout */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-4 items-start bg-card/30 backdrop-blur-md border border-white/5 p-6 rounded-2xl"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Receipt className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1 text-foreground">Visual Music Receipts</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Generate sleek, minimalist retail receipts for your listening history. Perfect for sharing on Instagram stories, Twitter, or Pinterest.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4 items-start bg-card/30 backdrop-blur-md border border-white/5 p-6 rounded-2xl"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1 text-foreground">Listening Streak Tracker</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Track how consistently you stream. Connect with your friends to see who has the longest active listening streak or is the biggest fan of an artist.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4 items-start bg-card/30 backdrop-blur-md border border-white/5 p-6 rounded-2xl"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1 text-foreground">Flexible Custom Range</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Toggle between short term (past 4 weeks), medium term (past 6 months), and long term (several years) to see how your musical signature has evolved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
