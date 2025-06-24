
const SkinMeIcon = ({ size = 64 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle with gradient */}
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="url(#gradient)"
        stroke="url(#borderGradient)"
        strokeWidth="2"
      />
      
      {/* Main bottle/container shape */}
      <rect
        x="24"
        y="18"
        width="16"
        height="24"
        rx="4"
        fill="white"
        opacity="0.9"
      />
      
      {/* Bottle cap */}
      <rect
        x="26"
        y="14"
        width="12"
        height="6"
        rx="3"
        fill="url(#capGradient)"
      />
      
      {/* Sparkle elements */}
      <g opacity="0.8">
        <path
          d="M16 20L18 18L16 16L14 18L16 20Z"
          fill="#FFD700"
        />
        <path
          d="M48 24L50 22L48 20L46 22L48 24Z"
          fill="#FF69B4"
        />
        <path
          d="M18 38L20 36L18 34L16 36L18 38Z"
          fill="#98FB98"
        />
        <path
          d="M46 42L48 40L46 38L44 40L46 42Z"
          fill="#DDA0DD"
        />
      </g>
      
      {/* Heart element */}
      <path
        d="M32 48C32 48 28 44 26 42C24.5 40.5 24.5 38 26 36.5C27.5 35 30 35 32 37C34 35 36.5 35 38 36.5C39.5 38 39.5 40.5 38 42C36 44 32 48 32 48Z"
        fill="#FF69B4"
        opacity="0.7"
      />
      
      {/* Cute face on bottle */}
      <circle cx="29" cy="26" r="1.5" fill="#FF69B4" />
      <circle cx="35" cy="26" r="1.5" fill="#FF69B4" />
      <path
        d="M30 30C30 30 32 32 34 30"
        stroke="#FF69B4"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB6C1" />
          <stop offset="50%" stopColor="#DDA0DD" />
          <stop offset="100%" stopColor="#98FB98" />
        </linearGradient>
        
        <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF69B4" />
          <stop offset="100%" stopColor="#9370DB" />
        </linearGradient>
        
        <linearGradient id="capGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF69B4" />
          <stop offset="100%" stopColor="#DDA0DD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SkinMeIcon;
