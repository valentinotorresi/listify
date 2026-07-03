import Image from "next/image";
import { Sparkles } from "lucide-react";
import { SpotifyArtist, SpotifyTrack } from "@/types/spotify";

interface VibeCardProps {
  username: string;
  topArtist?: SpotifyArtist;
  topTrack?: SpotifyTrack;
}

export function VibeCard({ username, topArtist, topTrack }: VibeCardProps) {
  return (
    <div id="vibe-card" className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group mx-auto">
      {/* Background with aura blur based on artist image or just theme colors */}
      <div className="absolute inset-0 bg-black z-0" />
      <div 
        className="absolute inset-0 opacity-50 mix-blend-screen scale-110 blur-3xl saturate-200 transition-all duration-1000 group-hover:scale-125 group-hover:opacity-70"
        style={{
          backgroundImage: topArtist?.images?.[0]?.url 
            ? `url(${topArtist.images[0].url})` 
            : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 h-full p-8 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-auto">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-black" />
            </div>
            <span className="text-sm font-bold tracking-tight">Listify</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-white/90">{username}&apos;s Vibe</span>
          </div>
        </div>

        {/* Main Stats */}
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold text-primary/80 uppercase tracking-wider mb-2">Top Artist</p>
            <div className="flex items-end gap-4">
              {topArtist?.images?.[0]?.url && (
                <Image 
                  src={topArtist.images[0].url} 
                  alt={topArtist.name} 
                  width={64} 
                  height={64} 
                  className="rounded-full shadow-lg w-auto h-auto"
                />
              )}
              <h2 className="text-3xl font-bold font-outfit leading-none shadow-black drop-shadow-md">
                {topArtist?.name || "Keep Listening..."}
              </h2>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">Top Track</p>
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10">
              {topTrack?.album?.images?.[0]?.url && (
                <Image 
                  src={topTrack.album.images[0].url} 
                  alt={topTrack.name} 
                  width={48} 
                  height={48} 
                  className="rounded-md shadow-md w-auto h-auto"
                />
              )}
              <div className="min-w-0">
                <h3 className="font-bold text-base truncate leading-tight shadow-black drop-shadow-md">
                  {topTrack?.name || "No favorite track yet"}
                </h3>
                <p className="text-sm text-white/70 truncate">
                  {topTrack?.artists?.map((a: { name: string }) => a.name).join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
