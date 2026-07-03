"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { SpotifyArtist } from "@/types/spotify";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartConfig = {
  count: {
    label: "Count",
    color: "var(--primary)",
  },
};

export function GenreAnalysis({ artists }: { artists: SpotifyArtist[] }) {
  if (!artists || artists.length === 0) {
    return (
      <Card className="border-dashed border-2 flex flex-col items-center justify-center min-h-[250px] text-center">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold font-outfit mb-2 text-muted-foreground">Top Genres</h3>
          <p className="text-sm text-muted-foreground/60 max-w-xs">Not enough data to analyze your favorite genres yet.</p>
        </CardContent>
      </Card>
    );
  }

  // Aggregate genres
  const genreCounts: Record<string, number> = {};
  artists.forEach(artist => {
    artist.genres?.forEach((genre: string) => {
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    });
  });
  // Sort and pick top 6 for the chart to keep it clean and readable
  const chartData = Object.entries(genreCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([genre, count]) => ({
      genre: genre.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
      count,
    }));

  if (chartData.length === 0) {
    return (
      <Card className="border-dashed border-2 flex flex-col items-center justify-center min-h-[250px] text-center">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold font-outfit mb-2 text-muted-foreground">Top Genres</h3>
          <p className="text-sm text-muted-foreground/60 max-w-xs">Not enough genre data available yet.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card/40 backdrop-blur-md border-white/5 rounded-3xl overflow-hidden flex flex-col h-full">
      <CardHeader className="pb-2">
        <CardTitle className="font-outfit text-xl">Top Genres</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <ChartContainer config={chartConfig} className="w-full h-full min-h-[250px]">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 40,
              right: 20,
              top: 0,
              bottom: 0,
            }}
          >
            <XAxis type="number" dataKey="count" hide />
            <YAxis
              dataKey="genre"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              width={120}
              fontSize={12}
              tickFormatter={(value) => value.length > 15 ? value.slice(0, 15) + "..." : value}
            />
            <ChartTooltip
              cursor={{ fill: "rgba(255,255,255,0.05)" }}
              content={<ChartTooltipContent hideIndicator />}
            />
            <Bar dataKey="count" fill="var(--color-count)" radius={[0, 4, 4, 0]} barSize={24} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
