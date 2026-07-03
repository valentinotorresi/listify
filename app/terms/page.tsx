import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of service and usage conditions for Listify.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center pt-24 px-6">
      <Card className="max-w-3xl mx-auto rounded-[3rem] bg-card/40 backdrop-blur-md border-white/5 p-8 md:p-12">
        <CardHeader className="px-0 pt-0 text-center">
          <CardTitle className="text-4xl md:text-5xl font-bold font-outfit mb-4">Terms of Service</CardTitle>
        </CardHeader>
        
        <CardContent className="px-0 pb-0 space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using Listify, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">2. Use of Spotify API</h2>
            <p>
              Listify is a third-party developer application using the Spotify Web API. Your use of Listify is subject to Spotify&apos;s own Developer Terms of Service and user agreements. We do not modify, bypass, or override any Spotify service rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">3. Disclaimer</h2>
            <p>
              Listify is provided &quot;as is&quot; without warranties of any kind. We are not affiliated with, endorsed by, or associated with Spotify.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
