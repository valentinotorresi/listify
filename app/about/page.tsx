import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "About",
  description: "Learn more about Listify and how we visualize your Spotify stats.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center pt-24 px-6 text-center">
      <Card className="max-w-3xl mx-auto rounded-[3rem] bg-card/40 backdrop-blur-md border-white/5 p-8 md:p-12">
        <CardHeader className="px-0 pt-0">
          <CardTitle className="text-4xl md:text-5xl font-bold font-outfit mb-2">About Listify</CardTitle>
        </CardHeader>
        <CardContent className="px-0 pb-0 space-y-6 text-lg text-muted-foreground leading-relaxed text-left">
          <p>
            Listify is a modern web application designed to help you visualize your Spotify listening habits. 
            By securely connecting to your Spotify account, we generate beautiful, shareable insights into your top artists, tracks, and the unique sonic signature of your music taste.
          </p>
          <p>
            Built with Next.js App Router, Tailwind CSS, and Framer Motion, Listify is an open-source experiment 
            exploring the intersection of data visualization and premium web design. We do not store your Spotify data persistently—everything is fetched fresh when you log in.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
