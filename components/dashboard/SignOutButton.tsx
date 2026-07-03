"use client";

import { signOut } from "@/lib/auth-client";
import { useState } from "react";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function SignOutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setIsLoading(true);
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          router.refresh();
        },
      }
    });
  };

  return (
    <Button 
      onClick={handleSignOut}
      disabled={isLoading}
      variant="destructive"
      className="flex items-center justify-center gap-2 px-6 rounded-full w-full md:w-auto"
    >
      <LogOut className="w-4 h-4" />
      {isLoading ? "Signing Out..." : "Sign Out"}
    </Button>
  );
}
