/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, Mic2, Music, Play, Sparkles, BarChart3, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const mockArtists = [
  { name: "The Weeknd", genres: "Pop, R&B", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=200&h=200", playCount: "124 plays" },
  { name: "Billie Eilish", genres: "Alternative, Pop", image: "https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?auto=format&fit=crop&q=80&w=200&h=200", playCount: "98 plays" },
  { name: "Daft Punk", genres: "Electronic, House", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=200&h=200", playCount: "87 plays" },
  { name: "Kendrick Lamar", genres: "Hip Hop, Rap", image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=200&h=200", playCount: "76 plays" },
];

const mockTracks = [
  { title: "Starboy", artist: "The Weeknd", duration: "3:50", image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=100&h=100" },
  { title: "Birds of a Feather", artist: "Billie Eilish", duration: "3:30", image: "https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?auto=format&fit=crop&q=80&w=100&h=100" },
  { title: "One More Time", artist: "Daft Punk", duration: "5:20", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=100&h=100" },
  { title: "HUMBLE.", artist: "Kendrick Lamar", duration: "2:57", image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=100&h=100" },
];

const mockFeatures = [
  { name: "Danceability", value: 78, desc: "Perfect for moving your feet" },
  { name: "Energy", value: 85, desc: "High-intensity tracks" },
  { name: "Valence", value: 62, desc: "Overall positive, happy vibes" },
  { name: "Acousticness", value: 15, desc: "Electronic & amplified heavy" },
  { name: "Liveness", value: 45, desc: "Studio recordings preference" },
];

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<"overview" | "artists" | "tracks" | "insights">("overview");

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-card/20 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row h-[550px] relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      {/* Sidebar mockup */}
      <aside className="w-full md:w-56 border-r border-white/5 bg-background/30 p-4 flex flex-row md:flex-col justify-between md:justify-start gap-2 md:gap-4 shrink-0 overflow-x-auto md:overflow-visible">
        <div className="flex items-center gap-2 px-3 py-2 mb-0 md:mb-6">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <div className="w-2. h-2. rounded-full bg-black" />
          </div>
          <span className="font-bold text-base tracking-tight hidden md:inline">Listify</span>
        </div>
        
        <nav className="flex flex-row md:flex-col gap-1 w-full">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === "overview" ? "bg-white/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span className="hidden md:inline">Overview</span>
          </button>
          
          <button
            onClick={() => setActiveTab("artists")}
            className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === "artists" ? "bg-white/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            <Mic2 className="w-4 h-4" />
            <span className="hidden md:inline">Top Artists</span>
          </button>
          
          <button
            onClick={() => setActiveTab("tracks")}
            className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === "tracks" ? "bg-white/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            <Music className="w-4 h-4" />
            <span className="hidden md:inline">Top Tracks</span>
          </button>
          
          <button
            onClick={() => setActiveTab("insights")}
            className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === "insights" ? "bg-white/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span className="hidden md:inline">Insights</span>
          </button>
        </nav>
        
        <div className="mt-auto hidden md:block border-t border-white/5 pt-4">
          <div className="flex items-center gap-2 px-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
              JD
            </div>
            <div className="text-left">
              <p className="text-xs font-bold truncate">John Doe</p>
              <p className="text-[10px] text-muted-foreground truncate">john@spotify.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main dashboard content preview */}
      <main className="flex-1 p-6 overflow-y-auto flex flex-col justify-between bg-black/10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h4 className="text-xl font-bold font-outfit">Your Music Identity</h4>
            <p className="text-xs text-muted-foreground">Updated just now • Medium Term</p>
          </div>
          <div className="flex gap-2">
            <span className="text-[10px] bg-primary/10 text-primary border border-primary/20 rounded-full px-2.5 py-1 font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Live Demo
            </span>
          </div>
        </div>

        <div className="flex-1">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {/* Highlight Card */}
                <Card className="bg-white/5 border-white/5 rounded-2xl p-4 flex flex-col justify-between h-44">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Your Top Artist</span>
                    <h5 className="text-2xl font-bold font-outfit mt-1 text-foreground">The Weeknd</h5>
                    <p className="text-xs text-muted-foreground mt-1">Leading your playlists with 124 plays this month.</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                    <span>Explore artist details</span>
                    <Play className="w-3 h-3 fill-current" />
                  </div>
                </Card>

                {/* Quick stats mini bento */}
                <div className="grid grid-cols-2 gap-4 h-44">
                  <Card className="bg-white/5 border-white/5 rounded-2xl p-4 flex flex-col justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Valence</span>
                    <h5 className="text-3xl font-bold font-outfit text-primary">62%</h5>
                    <p className="text-[10px] text-muted-foreground">Largely positive and uplifting tracks.</p>
                  </Card>
                  <Card className="bg-white/5 border-white/5 rounded-2xl p-4 flex flex-col justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Energy</span>
                    <h5 className="text-3xl font-bold font-outfit text-purple-400">85%</h5>
                    <p className="text-[10px] text-muted-foreground">High tempo, electric rhythms.</p>
                  </Card>
                </div>
              </motion.div>
            )}

            {activeTab === "artists" && (
              <motion.div
                key="artists"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {mockArtists.map((artist, idx) => (
                  <Card key={idx} className="bg-white/5 border-white/5 rounded-2xl p-3 flex flex-col items-center text-center group hover:bg-white/10 transition-colors">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3 border border-white/10">
                      <img src={artist.image} alt={artist.name} className="object-cover w-full h-full" />
                      <div className="absolute top-0 right-0 w-5 h-5 rounded-full bg-black/60 text-[10px] font-bold flex items-center justify-center border border-white/10 text-white">
                        {idx + 1}
                      </div>
                    </div>
                    <h6 className="font-bold text-xs truncate w-full text-foreground">{artist.name}</h6>
                    <p className="text-[9px] text-muted-foreground truncate w-full mt-0.5">{artist.genres}</p>
                    <span className="text-[8px] bg-white/5 px-2 py-0.5 rounded-full mt-2 text-muted-foreground/80">{artist.playCount}</span>
                  </Card>
                ))}
              </motion.div>
            )}

            {activeTab === "tracks" && (
              <motion.div
                key="tracks"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-2"
              >
                {mockTracks.map((track, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors">
                    <span className="text-xs text-muted-foreground font-semibold w-4 text-right">{idx + 1}</span>
                    <div className="w-8 h-8 rounded overflow-hidden border border-white/5 bg-white/5 shrink-0">
                      <img src={track.image} alt={track.title} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h6 className="text-xs font-bold truncate text-foreground">{track.title}</h6>
                      <p className="text-[10px] text-muted-foreground truncate">{track.artist}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{track.duration}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "insights" && (
              <motion.div
                key="insights"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    {mockFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-foreground">{feat.name}</span>
                          <span className="text-primary font-semibold">{feat.value}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${feat.value}%` }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                        <p className="text-[9px] text-muted-foreground/80">{feat.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {mockFeatures.slice(3).map((feat, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-foreground">{feat.name}</span>
                          <span className="text-purple-400 font-semibold">{feat.value}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${feat.value}%` }}
                            transition={{ duration: 0.5, delay: (idx + 3) * 0.1 }}
                            className="h-full bg-purple-500 rounded-full"
                          />
                        </div>
                        <p className="text-[9px] text-muted-foreground/80">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Small mock receipt card preview */}
        <div className="mt-6 border-t border-white/5 pt-4 flex justify-between items-center text-[10px] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Share2 className="w-3.5 h-3.5 text-primary" />
            <span>Generate custom visual receipt cards</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5 text-purple-400" />
            <span>Sound signature analysis ready</span>
          </div>
        </div>
      </main>
    </div>
  );
}
