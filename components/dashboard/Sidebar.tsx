"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Mic2, Music, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Top Artists", href: "/dashboard/artists", icon: Mic2 },
  { name: "Top Tracks", href: "/dashboard/tracks", icon: Music },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

interface SidebarProps {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
}

export function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-60 border-r border-white/5 bg-card/20 backdrop-blur-xl p-6 flex flex-col gap-4 shrink-0 overflow-visible relative z-20 sticky top-0 h-screen">
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center gap-2 px-3 py-2 mb-6">
          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-black" />
          </div>
          <span className="font-bold text-sm tracking-tight text-foreground">Listify Pro</span>
        </div>
      </div>

      <nav className="flex flex-col gap-1 w-full">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all w-full select-none ${
                isActive
                  ? "bg-white/10 text-primary shadow-sm shadow-primary/5 border border-white/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5 border border-transparent"
              }`}
            >
              <item.icon className={`w-4 h-4 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-white/5 pt-6">
        <div className="flex items-center gap-3 px-3">
          <Avatar className="w-9 h-9 border border-white/10">
            {user.image ? (
              <AvatarImage src={user.image} alt={user.name} />
            ) : null}
            <AvatarFallback className="bg-secondary text-xs font-bold">
              {user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="text-left min-w-0">
            <p className="text-xs font-bold truncate text-foreground">{user.name}</p>
            <p className="text-[10px] text-muted-foreground truncate">{user.email}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
