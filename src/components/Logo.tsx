interface LogoProps {
  className?: string;
}

export function LiftMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect x="2" y="2" width="44" height="44" rx="8" fill="#121317" stroke="#2b2d33" strokeWidth="1.5" />
      <rect x="13" y="10" width="22" height="28" rx="3" fill="#22d3ee" />
      <rect x="20" y="22" width="8" height="16" rx="1.5" fill="#121317" />
      <circle cx="24" cy="26" r="1.4" fill="#22d3ee" />
      <path
        d="M24 32 L24 16 M20.5 19.5 L24 16 L27.5 19.5"
        stroke="#121317"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LiftMark className="h-10 w-10 shrink-0" />
      <span className="leading-tight">
        <span className="block text-lg font-bold tracking-tight text-white">
          Deenar <span className="text-brand-500">Lift</span>
        </span>
        <span className="block text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
          Company
        </span>
      </span>
    </span>
  );
}
