export default function DashboardLoading() {
  return (
    <div className="w-full h-full min-h-[60vh] flex flex-col items-center justify-center animate-in fade-in duration-500">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing rings */}
        <div className="absolute w-24 h-24 border-t-2 border-r-2 border-primary rounded-full animate-[spin_2s_linear_infinite] opacity-50" />
        <div className="absolute w-16 h-16 border-b-2 border-l-2 border-primary rounded-full animate-[spin_1.5s_linear_infinite_reverse] opacity-70" />
        
        {/* Inner static dot */}
        <div className="w-4 h-4 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(30,215,96,0.8)]" />
      </div>
      <p className="mt-8 text-sm font-medium text-muted-foreground animate-pulse">Syncing with Spotify...</p>
    </div>
  );
}
