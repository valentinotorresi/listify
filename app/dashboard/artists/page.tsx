import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getTopItems } from "@/lib/spotify";
import { ArtistGrid } from "@/components/dashboard/ArtistGrid";
import { TimeRangeToggle } from "@/components/dashboard/TimeRangeToggle";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Top Artists | Listify",
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function TopArtistsPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const range = (searchParams.range as string) || "medium_term";

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  const validRange = ["short_term", "medium_term", "long_term"].includes(range) 
    ? (range as "short_term" | "medium_term" | "long_term") 
    : "medium_term";

  const topArtists = await getTopItems(session.user.id, "artists", validRange, 50);

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center gap-4">
        <Link 
          href="/dashboard" 
          className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10 backdrop-blur-sm"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold font-outfit">Your Top Artists</h1>
          <p className="text-muted-foreground text-sm">Top 50 artists you&apos;ve been listening to.</p>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Suspense fallback={<div className="h-10 w-64 bg-white/5 rounded-full animate-pulse" />}>
          <TimeRangeToggle />
        </Suspense>
      </div>

      <ArtistGrid artists={topArtists.items || []} />
    </div>
  );
}
