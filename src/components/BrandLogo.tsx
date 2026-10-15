import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const sizeMap = {
    sm: 'h-8 sm:h-9 max-w-[210px]',
    md: 'h-11 sm:h-13 max-w-[280px]',
    lg: 'h-16 sm:h-20 max-w-[380px]',
    xl: 'h-22 sm:h-26 max-w-[480px]',
    hero: 'h-20 sm:h-28 md:h-32 max-w-[560px]',
  };

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 520 90"
        className={`w-full ${sizeMap[size]} transition-transform duration-200 hover:scale-[1.02] filter drop-shadow-md`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Line: THE CANNA CAFE */}
        <text
          x="260"
          y="42"
          textAnchor="middle"
          fontFamily="'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
          fontSize="42"
          fontWeight="800"
          letterSpacing="7"
          fill="#E5A93C"
          stroke="#0A0A0C"
          strokeWidth="1.8"
          strokeLinejoin="round"
          paintOrder="stroke fill"
        >
          THE CANNA CAFE
        </text>

        {/* Bottom Bar: Black rounded pill with white text */}
        {showSubtitle && (
          <>
            <rect
              x="10"
              y="54"
              width="500"
              height="32"
              rx="16"
              fill="#08080A"
              stroke="#3E3E46"
              strokeWidth="1.2"
            />
            <text
              x="260"
              y="75.5"
              textAnchor="middle"
              fontFamily="'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
              fontSize="15"
              fontWeight="700"
              letterSpacing="4.5"
              fill="#FFFFFF"
            >
              LOCATED INSIDE THE HEMP CENTER
            </text>
          </>
        )}
      </svg>
    </div>
  );
};
