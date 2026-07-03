"use client";

import { Check, X, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const comparisonFeatures = [
  { name: "Real-time statistics updates", listify: true, spotify: false },
  { name: "Flexible timeline filters (4 weeks, 6 months, years)", listify: true, spotify: false },
  { name: "Advanced audio attributes analysis (Danceability, Energy)", listify: true, spotify: false },
  { name: "Shareable custom receipt cards generator", listify: true, spotify: false },
  { name: "Completely free (no premium paywalls)", listify: true, spotify: true },
  { name: "Zero permanent data storage (Privacy first)", listify: true, spotify: false },
];

export function Comparison() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4 text-foreground">
          Why Choose Listify?
        </h2>
        <p className="text-muted-foreground text-lg">
          Spotify&apos;s built-in stats only tell a fraction of the story. Listify unlocks the full potential of your music library.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto bg-card/40 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
        <CardContent className="p-6 md:p-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th className="py-4 text-sm font-bold text-muted-foreground">FEATURE</th>
                <th className="py-4 text-center text-sm font-bold text-primary flex items-center justify-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> LISTIFY
                </th>
                <th className="py-4 text-center text-sm font-bold text-muted-foreground">SPOTIFY APP</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feat, idx) => (
                <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 text-sm font-medium text-foreground">{feat.name}</td>
                  <td className="py-4 text-center">
                    <div className="flex justify-center text-primary">
                      {feat.listify ? <Check className="w-5 h-5" /> : <X className="w-5 h-5 text-muted-foreground" />}
                    </div>
                  </td>
                  <td className="py-4 text-center">
                    <div className="flex justify-center text-muted-foreground">
                      {feat.spotify ? <Check className="w-5 h-5 text-muted-foreground/60" /> : <X className="w-5 h-5" />}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </section>
  );
}
