"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface AudioFeatures {
  danceability: number;
  energy: number;
  valence: number;
  acousticness: number;
  instrumentalness: number;
}

const chartConfig = {
  score: {
    label: "Score",
    color: "var(--primary)",
  },
};

export function AudioFeaturesChart({ features }: { features: AudioFeatures[] }) {
  if (!features || features.length === 0) {
    return (
      <Card className="border-dashed border-2 flex flex-col items-center justify-center min-h-[250px] text-center">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold font-outfit mb-2 text-muted-foreground">Your Sonic Signature</h3>
          <p className="text-sm text-muted-foreground/60 max-w-xs">Listen to more tracks to unlock your audio feature analysis.</p>
        </CardContent>
      </Card>
    );
  }

  // Calculate averages
  const validFeatures = features.filter((f) => f !== null);
  if (validFeatures.length === 0) {
    return (
      <Card className="border-dashed border-2 flex flex-col items-center justify-center min-h-[250px] text-center">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold font-outfit mb-2 text-muted-foreground">Your Sonic Signature</h3>
          <p className="text-sm text-muted-foreground/60 max-w-xs">Listen to more tracks to unlock your audio feature analysis.</p>
        </CardContent>
      </Card>
    );
  }

  const averages = validFeatures.reduce(
    (acc, curr) => ({
      danceability: acc.danceability + curr.danceability,
      energy: acc.energy + curr.energy,
      valence: acc.valence + curr.valence,
      acousticness: acc.acousticness + curr.acousticness,
      instrumentalness: acc.instrumentalness + curr.instrumentalness,
    }),
    { danceability: 0, energy: 0, valence: 0, acousticness: 0, instrumentalness: 0 }
  );

  const count = validFeatures.length;
  
  const chartData = [
    { feature: "Danceability", score: Math.round((averages.danceability / count) * 100) },
    { feature: "Energy", score: Math.round((averages.energy / count) * 100) },
    { feature: "Positivity", score: Math.round((averages.valence / count) * 100) },
    { feature: "Acousticness", score: Math.round((averages.acousticness / count) * 100) },
    { feature: "Instrumentalness", score: Math.round((averages.instrumentalness / count) * 100) },
  ];

  return (
    <Card className="bg-card/40 backdrop-blur-md border-white/5 rounded-3xl overflow-hidden flex flex-col h-full">
      <CardHeader className="items-center pb-4">
        <CardTitle className="font-outfit text-xl">Your Sonic Signature</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-h-[280px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="feature" />
            <PolarGrid />
            <Radar
              dataKey="score"
              fill="var(--color-score)"
              fillOpacity={0.6}
              stroke="var(--color-score)"
              strokeWidth={2}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
