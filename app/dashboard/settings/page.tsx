import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/dashboard/SignOutButton";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const metadata = {
  title: "Settings | Listify",
};

export default async function SettingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  return (
    <div className="space-y-8 pb-12 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold font-outfit mb-2">Settings</h1>
        <p className="text-muted-foreground text-sm">Manage your account and preferences.</p>
      </div>

      <Card className="p-6 md:p-8 rounded-3xl space-y-6 bg-card/40 backdrop-blur-md border-white/5">
        <CardContent className="p-0">
          <h2 className="text-xl font-bold mb-4">Account Profile</h2>
          <div className="flex items-center gap-4 bg-secondary/50 p-4 rounded-2xl border border-white/5">
            <Avatar className="w-16 h-16">
              {session.user.image ? (
                <AvatarImage src={session.user.image} alt={session.user.name} />
              ) : null}
              <AvatarFallback className="bg-secondary text-xl font-bold">
                {session.user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold text-lg">{session.user.name}</p>
              <p className="text-muted-foreground text-sm">{session.user.email}</p>
            </div>
          </div>
        </CardContent>

        <div className="pt-6 border-t border-white/10">
          <h2 className="text-xl font-bold mb-4 text-red-500">Danger Zone</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Log out of your Listify account. You will need to re-authenticate with Spotify to log back in.
          </p>
          <SignOutButton />
        </div>
      </Card>
    </div>
  );
}
