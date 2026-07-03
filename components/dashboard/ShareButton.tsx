"use client";

import { useState, useEffect } from "react";
import { Share2, Download, Check, Loader2 } from "lucide-react";
import * as htmlToImage from "html-to-image";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ShareButton({ targetId = "vibe-card" }: { targetId?: string }) {
  const [isExporting, setIsExporting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    // Only check for navigator.share after mounting to avoid hydration mismatch
    if (typeof navigator !== "undefined" && 'share' in navigator) {
      const timer = setTimeout(() => setCanShare(true), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleShare = async () => {
    try {
      setIsExporting(true);
      const element = document.getElementById(targetId);
      if (!element) throw new Error("Element not found");

      // Wait a tiny bit to ensure all images/fonts are fully painted
      await new Promise((resolve) => setTimeout(resolve, 100));

      const dataUrl = await htmlToImage.toPng(element, {
        quality: 0.95,
        pixelRatio: 2, // High-res export
      });

      // Try native share API first (mobile friendly)
      if (typeof navigator !== "undefined" && 'share' in navigator) {
        try {
          const blob = await (await fetch(dataUrl)).blob();
          const file = new File([blob], "statify-vibe.png", { type: "image/png" });
          
          await navigator.share({
            title: "My Listify Vibe",
            text: "Check out my Spotify vibe on Listify!",
            files: [file],
          });
          showSuccess();
          return;
        } catch (err: unknown) {
          // If user cancels share, don't fallback to download
          if (err instanceof Error && err.name !== "AbortError") {
            downloadImage(dataUrl);
          }
        }
      } else {
        // Fallback to download for desktop
        downloadImage(dataUrl);
      }
    } catch (error) {
      console.error("Failed to generate image", error);
    } finally {
      setIsExporting(false);
    }
  };

  const downloadImage = (dataUrl: string) => {
    const link = document.createElement("a");
    link.download = "statify-vibe.png";
    link.href = dataUrl;
    link.click();
    showSuccess();
  };

  const showSuccess = () => {
    setSuccess(true);
    toast.success("Vibe saved successfully!");
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <Button
      onClick={handleShare}
      disabled={isExporting}
      aria-label="Share your VibeCard as an image"
      aria-busy={isExporting}
      className="flex items-center gap-2 rounded-full font-bold"
    >
      {success ? (
        <>
          <Check className="w-4 h-4" />
          <span>Saved!</span>
        </>
      ) : isExporting ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Generating...</span>
        </>
      ) : (
        <>
          {canShare ? (
            <Share2 className="w-4 h-4" />
          ) : (
            <Download className="w-4 h-4" />
          )}
          <span>Share Vibe</span>
        </>
      )}
    </Button>
  );
}
