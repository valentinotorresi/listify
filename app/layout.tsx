import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans, Geist } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://listify.vercel.app'),
  title: {
    default: 'Listify - Beautiful Spotify Statistics',
    template: '%s | Listify',
  },
  description: 'Visualize your Spotify listening history in stunning detail.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Listify - Beautiful Spotify Statistics',
    description: 'Visualize your Spotify listening history in stunning detail.',
    url: 'https://listify.vercel.app',
    siteName: 'Listify',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Listify - Beautiful Spotify Statistics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Listify - Beautiful Spotify Statistics',
    description: 'Visualize your Spotify listening history in stunning detail.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'k1KxIyZDrd4uzDvVwvZPnLtqW6gTm4rDQ4BlT0483Cw',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <body
        className={`${outfit.variable} ${jakarta.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <div className="fixed inset-0 z-[-1] aura-bg opacity-40 mix-blend-screen pointer-events-none" />
        <TooltipProvider>
          <NuqsAdapter>
            <Navbar />
            <main className="flex-1 pt-20 flex flex-col">{children}</main>
            <Footer />
          </NuqsAdapter>
        </TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
