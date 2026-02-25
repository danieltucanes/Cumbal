export function IndigenousPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="indigenous-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          {/* Geometric diamond shapes */}
          <path
            d="M25,0 L50,25 L25,50 L0,25 Z"
            fill="currentColor"
            opacity="0.15"
          />
          <path
            d="M75,0 L100,25 L75,50 L50,25 Z"
            fill="currentColor"
            opacity="0.15"
          />
          <path
            d="M25,50 L50,75 L25,100 L0,75 Z"
            fill="currentColor"
            opacity="0.15"
          />
          <path
            d="M75,50 L100,75 L75,100 L50,75 Z"
            fill="currentColor"
            opacity="0.15"
          />
          
          {/* Triangular accents */}
          <path
            d="M50,12.5 L37.5,25 L50,37.5 Z"
            fill="currentColor"
            opacity="0.2"
          />
          <path
            d="M50,62.5 L37.5,75 L50,87.5 Z"
            fill="currentColor"
            opacity="0.2"
          />
          
          {/* Connecting lines */}
          <line
            x1="25"
            y1="25"
            x2="75"
            y2="25"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.1"
          />
          <line
            x1="25"
            y1="75"
            x2="75"
            y2="75"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.1"
          />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#indigenous-pattern)" />
    </svg>
  );
}

export function DecorativeBorder({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--terracotta)] to-transparent" />
      <svg width="24" height="24" viewBox="0 0 24 24" className="text-[var(--terracotta)]">
        <path
          d="M12,2 L14,8 L20,10 L14,12 L12,18 L10,12 L4,10 L10,8 Z"
          fill="currentColor"
        />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--terracotta)] to-transparent" />
    </div>
  );
}

export function TribalDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 40"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0,20 L40,10 L80,20 L120,10 L160,20 L200,10 L240,20 L280,10 L320,20 L360,10 L400,20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.3"
      />
      <circle cx="40" cy="10" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="120" cy="10" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="200" cy="10" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="280" cy="10" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="360" cy="10" r="3" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
