import Image from "next/image";
import { SpotifyArtist } from "@/types/spotify";
import { Card, CardContent } from "@/components/ui/card";

export function ArtistGrid({ artists }: { artists: SpotifyArtist[] }) {
  if (!artists || artists.length === 0) {
    return (
      <Card className="text-center flex flex-col items-center justify-center p-12 border-dashed border-2">
        <CardContent className="pt-6 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
            <span className="text-2xl">🎤</span>
          </div>
          <h3 className="font-bold text-xl mb-2 text-foreground">No Artists Found</h3>
          <p className="max-w-xs mx-auto text-muted-foreground">Listen to more music on Spotify to see your top artists here.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {artists.map((artist, i) => (
        <Card
          key={artist.id}
          className="p-4 rounded-2xl group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden bg-card/40 backdrop-blur-md border-white/5"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 rounded-2xl" />
          
          <div className="relative aspect-square mb-4 rounded-xl overflow-hidden shadow-lg">
            {artist.images?.[0]?.url ? (
              <Image 
                src={artist.images[0].url} 
                alt={artist.name} 
                fill 
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            ) : (
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                No Image
              </div>
            )}
          </div>
          
          <div className="relative z-20">
            <h3 className="font-bold text-lg truncate group-hover:text-primary transition-colors text-foreground">{artist.name}</h3>
            <p className="text-xs text-muted-foreground mt-1 capitalize truncate">
              {artist.genres?.slice(0, 2).join(", ") || "Unknown genre"}
            </p>
          </div>
          
          <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center font-bold text-sm border border-white/10 text-white">
            {i + 1}
          </div>
        </Card>
      ))}
    </div>
  );
}
