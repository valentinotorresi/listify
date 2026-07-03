"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    q: "Is my Spotify account secure?",
    a: "Absolutely. Listify connects to your account using Spotify's official secure OAuth protocol. We only request read-only permissions (user-top-read, user-read-email). We do not get access to your login credentials or payment info."
  },
  {
    q: "What data does Listify store?",
    a: "We only store your authentication tokens securely in our database to keep you logged in. We do NOT store your listening history, top artists, or tracks. Everything is fetched directly from the Spotify API on-the-fly when you load your dashboard."
  },
  {
    q: "How do I disconnect my account and delete my data?",
    a: "You can click 'Sign Out' in the Listify settings dashboard at any time. To completely revoke Listify's access, go to your official Spotify Apps Settings page and click 'Remove Access' next to Listify. Your session data is immediately deleted on sign-out."
  },
  {
    q: "Is Listify free to use?",
    a: "Yes, Listify is a 100% free, open-source experimental project built for music enthusiasts. There are no advertisements, monthly subscriptions, or locked premium features."
  },
  {
    q: "How does the audio features analysis work?",
    a: "We map your top tracks to Spotify's acoustic properties. Note that since Spotify officially deprecated the direct audio-features endpoint, we use a custom, deterministic acoustic signature mapping so you can still visualize your music's density, energy, and happiness quotient."
  }
];

export function Faq() {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-32 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4 text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-lg">
          Everything you need to know about privacy, security, and how Listify interacts with your Spotify account.
        </p>
      </div>

      <Card className="bg-card/40 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden p-6 md:p-10 shadow-xl">
        <CardContent className="p-0">
          <Accordion className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-white/5 last:border-0">
                <AccordionTrigger className="text-left font-semibold text-base py-4 hover:no-underline text-foreground hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4 pt-1">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}
