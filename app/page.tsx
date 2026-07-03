import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Cta } from "@/components/home/Cta";
import { DashboardPreview } from "@/components/home/DashboardPreview";
import { StatsPreview } from "@/components/home/StatsPreview";
import { SocialProof } from "@/components/home/SocialProof";
import { Comparison } from "@/components/home/Comparison";
import { Faq } from "@/components/home/Faq";

export default function Home() {
  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Listify",
    "url": "https://listify.vercel.app",
    "description": "Visualize your Spotify listening history in stunning detail."
  };

  const jsonLdSoftware = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Listify",
    "operatingSystem": "All",
    "applicationCategory": "MultimediaApplication",
    "description": "Visualize your Spotify listening history in stunning detail, generate visual music receipts, and share your musical identity.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="flex flex-col space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
      />
      
      <Hero />
      
      {/* Interactive Mock Dashboard Preview Section */}
      <section id="preview-section" className="px-6 py-12 scroll-mt-24">
        <DashboardPreview />
      </section>

      <Features />
      
      <StatsPreview />
      
      <SocialProof />
      
      <Comparison />
      
      <Faq />
      
      <Cta />
    </div>
  );
}
