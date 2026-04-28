
export default function BmwLogo({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-md"
    >
      {/* Outer White Ring */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="4" />

      {/* Quadrants */}
      <path d="M50 25 A 25 25 0 0 0 25 50 L 50 50 Z" fill="white" />
      <path d="M50 25 A 25 25 0 0 1 75 50 L 50 50 Z" fill="#0066B1" />
      <path d="M25 50 A 25 25 0 0 0 50 75 L 50 50 Z" fill="#0066B1" />
      <path d="M75 50 A 25 25 0 0 1 50 75 L 50 50 Z" fill="white" />

      {/* Text - BMW */}
      <g fill="white" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 900, fontSize: '18px', letterSpacing: '1px' }}>
        <text x="50" y="19" textAnchor="middle" transform="rotate(-40 50 50)">B</text>
        <text x="50" y="18" textAnchor="middle">M</text>
        <text x="50" y="19" textAnchor="middle" transform="rotate(40 50 50)">W</text>
      </g>
    </svg>
  );
}
