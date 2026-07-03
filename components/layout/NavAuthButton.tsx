"use client";

import { signIn } from "@/lib/auth-client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function NavAuthButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    await signIn.social({
      provider: "spotify",
      callbackURL: "/dashboard",
    });
  };

  return (
    <Button 
      onClick={handleLogin}
      disabled={isLoading}
      className="rounded-full font-semibold px-6 hover:scale-105 transition-transform"
    >
      {isLoading ? "Connecting..." : "Connect Spotify"}
    </Button>
  );
}
