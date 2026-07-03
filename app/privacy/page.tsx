import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Privacy Policy",
  description: "Our privacy policy and data usage practices.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center pt-24 px-6">
      <Card className="max-w-3xl mx-auto rounded-[3rem] bg-card/40 backdrop-blur-md border-white/5 p-8 md:p-12">
        <CardHeader className="px-0 pt-0 text-center">
          <CardTitle className="text-4xl md:text-5xl font-bold font-outfit mb-4">Privacy Policy</CardTitle>
        </CardHeader>
        
        <CardContent className="px-0 pb-0 space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">1. Data Collection</h2>
            <p>
              When you connect your Spotify account to Listify, we receive an access token that allows us to read your top artists, tracks, and recently played history. We only request the minimum permissions necessary (<code>user-top-read</code>, <code>user-read-email</code>).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">2. Data Storage</h2>
            <p>
              We store your authentication tokens securely to keep you logged in. We do <strong>not</strong> permanently store your listening history, top artists, or top tracks in our database. That data is fetched on-the-fly directly from the Spotify API when you view your dashboard.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">3. Revoking Access</h2>
            <p>
              You can revoke Listify&apos;s access to your Spotify account at any time by visiting your <a href="https://www.spotify.com/us/account/apps/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Spotify Account Settings</a> and clicking &quot;Remove Access&quot; next to the Listify app.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
