import React from "react";

export function BrandLogoMark({
  conceptId,
  size = 42,
}: {
  conceptId: string;
  size?: number;
}) {
  switch (conceptId) {
    case "biscayne-reserve":
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
          <polygon
            points="60,8 108,34 108,86 60,112 12,86 12,34"
            stroke="#D4AF37"
            strokeWidth="4"
            fill="#0A1424"
          />
          <polygon
            points="60,18 98,39 98,81 60,102 22,81 22,39"
            stroke="rgba(212,175,55,0.35)"
            strokeWidth="1.5"
          />
          <text
            x="60"
            y="71"
            textAnchor="middle"
            fill="#D4AF37"
            fontFamily="serif"
            fontWeight="700"
            fontSize="38"
            letterSpacing="1"
          >
            BRC
          </text>
        </svg>
      );
    case "obsidian-apex":
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
          <rect
            x="8"
            y="8"
            width="104"
            height="104"
            rx="16"
            fill="#191011"
            stroke="#B24053"
            strokeWidth="4"
          />
          <path
            d="M60 20L98 90H22L60 20Z"
            stroke="#B24053"
            strokeWidth="3.5"
            fill="rgba(178,64,83,0.16)"
          />
          <text
            x="60"
            y="82"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="sans-serif"
            fontWeight="800"
            fontSize="30"
          >
            BR
          </text>
        </svg>
      );
    case "emerald-meridian":
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="#071914"
            stroke="#C5A059"
            strokeWidth="4"
          />
          <rect x="32" y="56" width="13" height="34" fill="#2A7B5E" />
          <rect x="53" y="40" width="13" height="50" fill="#3B9B78" />
          <rect x="74" y="24" width="13" height="66" fill="#C5A059" />
        </svg>
      );
    case "palm-pillar":
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
          <rect
            x="8"
            y="8"
            width="104"
            height="104"
            fill="#1C1917"
            stroke="#9A5B42"
            strokeWidth="4"
          />
          <line x1="60" y1="8" x2="60" y2="112" stroke="#9A5B42" strokeWidth="3" />
          <line x1="8" y1="60" x2="112" y2="60" stroke="#9A5B42" strokeWidth="3" />
          <text
            x="34"
            y="45"
            textAnchor="middle"
            fill="#F4EFEA"
            fontFamily="sans-serif"
            fontWeight="800"
            fontSize="28"
          >
            B
          </text>
          <text
            x="86"
            y="45"
            textAnchor="middle"
            fill="#F4EFEA"
            fontFamily="sans-serif"
            fontWeight="800"
            fontSize="28"
          >
            R
          </text>
          <text
            x="34"
            y="95"
            textAnchor="middle"
            fill="#9A5B42"
            fontFamily="sans-serif"
            fontWeight="800"
            fontSize="28"
          >
            C
          </text>
          <path
            d="M74 94L96 72M96 72H78M96 72V90"
            stroke="#F4EFEA"
            strokeWidth="3.5"
          />
        </svg>
      );
    case "sovereign-crest":
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
          <rect
            x="6"
            y="6"
            width="108"
            height="108"
            rx="4"
            fill="#85303E"
            stroke="#C8A96A"
            strokeWidth="3.5"
          />
          <rect
            x="16"
            y="16"
            width="88"
            height="88"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1.5"
          />
          <text
            x="58"
            y="76"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="sans-serif"
            fontWeight="800"
            fontSize="46"
            letterSpacing="-2"
          >
            BR
          </text>
          <path d="M84 24H98V38" stroke="#C8A96A" strokeWidth="3.5" />
          <path d="M98 24L80 42" stroke="#C8A96A" strokeWidth="3.5" />
        </svg>
      );
  }
}
