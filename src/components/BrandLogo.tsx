import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const sizeClasses = {
    sm: 'h-8 max-w-[200px]',
    md: 'h-12 max-w-[280px]',
    lg: 'h-16 max-w-[360px]',
    xl: 'h-24 max-w-[480px]',
  };

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      <img
        src="/logo.svg"
        alt="The Canna Cafe - Located Inside The Hemp Center"
        className={`w-auto object-contain transition-transform duration-300 hover:scale-[1.02] ${sizeClasses[size]}`}
      />
    </div>
  );
};
