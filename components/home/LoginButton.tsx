"use client";

import { motion, Variants } from "framer-motion";
import { signIn, useSession } from "@/lib/auth-client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const MotionButton = motion.create(Button);

export function LoginButton({ variants }: { variants?: Variants }) {
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);
    await signIn.social({
      provider: "spotify",
      callbackURL: "/dashboard",
    });
  };

  const handleDashboardRedirect = () => {
    router.push("/dashboard");
  };

  if (session) {
    return (
      <MotionButton
        variants={variants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleDashboardRedirect}
        size="lg"
        className="rounded-full font-bold text-lg px-8 py-6 flex items-center gap-3 shadow-[0_0_40px_rgba(30,215,96,0.3)] hover:shadow-[0_0_60px_rgba(30,215,96,0.5)] transition-shadow cursor-pointer"
      >
        Go to Dashboard
      </MotionButton>
    );
  }

  return (
    <MotionButton
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleLogin}
      disabled={isLoading}
      size="lg"
      className="rounded-full font-bold text-lg px-8 py-6 flex items-center gap-3 shadow-[0_0_40px_rgba(30,215,96,0.3)] hover:shadow-[0_0_60px_rgba(30,215,96,0.5)] transition-shadow"
    >
      {isLoading ? "Connecting..." : "Connect your Spotify"}
      {!isLoading && <div className="w-2 h-2 rounded-full bg-black/50 animate-pulse" />}
    </MotionButton>
  );
}
