"use client";

import { useQueryState } from 'nuqs';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ranges = [
  { id: 'short_term', label: '4 Weeks' },
  { id: 'medium_term', label: '6 Months' },
  { id: 'long_term', label: 'All Time' },
];

export function TimeRangeToggle() {
  const [range, setRange] = useQueryState('range', { defaultValue: 'medium_term', shallow: false });

  return (
    <Tabs value={range || 'medium_term'} onValueChange={(val) => setRange(val)} className="w-fit">
      <TabsList className="bg-card/40 backdrop-blur-md border border-white/5 rounded-full p-1 h-auto">
        {ranges.map((r) => (
          <TabsTrigger 
            key={r.id} 
            value={r.id}
            className="rounded-full px-4 py-2 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-black text-muted-foreground hover:text-foreground transition-colors"
          >
            {r.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
