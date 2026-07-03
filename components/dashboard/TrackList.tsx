import Image from "next/image";
import { SpotifyTrack } from "@/types/spotify";
import { Card, CardContent } from "@/components/ui/card";

function formatDuration(ms: number) {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`;
}

export function TrackList({ tracks }: { tracks: SpotifyTrack[] }) {
  if (!tracks || tracks.length === 0) {
    return (
      <Card className="text-center flex flex-col items-center justify-center glass-panel">
        <CardContent className="pt-6 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
            <span className="text-2xl">🎵</span>
          </div>
          <h3 className="font-bold text-xl mb-2 text-foreground">No Tracks Found</h3>
          <p className="max-w-xs mx-auto text-muted-foreground">Listen to more music on Spotify to see your top tracks here.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="flex flex-col w-full">
      {tracks.map((track, i) => {
        const releaseDate = track.album?.release_date 
          ? new Date(track.album.release_date).toLocaleDateString("en-GB", { day: 'numeric', month: 'short', year: 'numeric' })
          : "";

        return (
          <div
            key={track.id}
            className="flex items-center gap-4 py-2 px-4 rounded-md hover:bg-white/10 transition-colors group cursor-default"
          >
            <div className="w-6 text-right text-base text-muted-foreground tabular-nums font-medium group-hover:text-foreground transition-colors shrink-0">
              {i + 1}
            </div>

            <div className="relative w-10 h-10 rounded shrink-0 overflow-hidden bg-secondary shadow-sm">
              {track.album?.images?.[0]?.url && (
                <Image
                  src={track.album.images[0].url}
                  alt={track.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              )}
            </div>

            <div className="flex-1 min-w-0 pr-4">
              <h3 className="font-medium text-base truncate text-foreground group-hover:text-primary transition-colors">
                {track.name}
              </h3>
              <p className="text-sm text-muted-foreground truncate group-hover:text-foreground/80 transition-colors">
                {track.artists?.map((a: { name: string }) => a.name).join(", ")}
              </p>
            </div>

            <div className="hidden md:block flex-1 min-w-0 pr-4">
              <p className="text-sm text-muted-foreground truncate group-hover:text-foreground/80 transition-colors">
                {track.album?.name}
              </p>
            </div>

            <div className="hidden lg:block w-32 shrink-0">
              <p className="text-sm text-muted-foreground truncate group-hover:text-foreground/80 transition-colors">
                {releaseDate}
              </p>
            </div>

            <div className="text-sm text-muted-foreground tabular-nums text-right w-12 group-hover:text-foreground/80 transition-colors shrink-0">
              {formatDuration(track.duration_ms)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
