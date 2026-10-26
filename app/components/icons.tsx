export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 10h13M11 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function NetworkGraphic() {
  return (
    <svg className="network-graphic" viewBox="0 0 760 560" role="img" aria-label="Abstract network of InterAsian research connections">
      <defs>
        <pattern id="grid" width="38" height="38" patternUnits="userSpaceOnUse">
          <path d="M38 0H0V38" fill="none" stroke="currentColor" strokeOpacity=".1" />
        </pattern>
      </defs>
      <rect width="760" height="560" fill="url(#grid)" />
      <g fill="none" stroke="currentColor" strokeWidth="1.4" opacity=".88">
        <path d="M51 388C160 272 217 227 340 247s211 106 365 18" />
        <path d="M67 171c160 137 281 191 564 194" />
        <path d="M148 91c43 172 150 281 418 382" />
        <path d="M117 462c198-36 252-137 303-346" />
        <path d="M288 73c89 64 140 195 344 225" />
      </g>
      <g fill="var(--orange)" stroke="var(--ink)" strokeWidth="4">
        <circle cx="67" cy="171" r="7" /><circle cx="148" cy="91" r="7" /><circle cx="117" cy="462" r="7" />
        <circle cx="340" cy="247" r="9" /><circle cx="420" cy="116" r="7" /><circle cx="566" cy="473" r="7" />
        <circle cx="631" cy="365" r="7" /><circle cx="705" cy="265" r="7" />
      </g>
      <g fill="currentColor" fontSize="13" fontFamily="Arial, sans-serif" letterSpacing="1.2">
        <text x="50" y="151">DUBAI</text><text x="124" y="70">BEIRUT</text><text x="86" y="493">JAKARTA</text>
        <text x="309" y="279">SINGAPORE</text><text x="391" y="92">ASTANA</text><text x="540" y="506">SYDNEY</text>
        <text x="601" y="395">TOKYO</text><text x="668" y="245">BEIJING</text>
      </g>
      <text x="55" y="547" fill="currentColor" opacity=".5" fontSize="11" fontFamily="Arial, sans-serif" letterSpacing="2">NOT A BORDER — A FIELD OF RELATIONS</text>
    </svg>
  );
}
