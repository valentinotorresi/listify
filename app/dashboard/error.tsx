"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Dashboard error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 text-center">
      <Card className="max-w-md w-full relative overflow-hidden border-red-500/20 bg-card/40 backdrop-blur-md p-8 rounded-3xl">
        <div className="absolute inset-0 bg-red-500/5 z-0" />
        <CardContent className="relative z-10 p-0">
          <h2 className="text-2xl font-bold font-outfit mb-4 text-red-500">Failed to load data</h2>
          <p className="text-muted-foreground mb-8 text-sm">
            We couldn&apos;t connect to Spotify. Your session may have expired or you might be rate-limited.
          </p>
          <div className="flex flex-col gap-2">
            <Button
              onClick={() => reset()}
              className="w-full rounded-full font-bold"
            >
              Try again
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              className="w-full rounded-full font-bold"
              render={<Link href="/" />}
            >
              Return Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
