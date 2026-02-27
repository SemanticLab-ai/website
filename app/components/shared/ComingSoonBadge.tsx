import { Clock } from "lucide-react";

export function ComingSoonBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 bg-slate/10 rounded-full ${className}`}>
      <Clock className="w-3 h-3 text-slate" />
      <span className="text-xs font-semibold text-slate">Coming Soon</span>
    </span>
  );
}
