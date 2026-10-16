import React from 'react';
import { BrandLogo } from './BrandLogo';

interface PageWipeProps {
  status: 'idle' | 'entering' | 'exiting';
}

export const PageWipe: React.FC<PageWipeProps> = ({ status }) => {
  if (status === 'idle') return null;

  return (
    <div
      aria-hidden="true"
      className={`wipe-curtain ${
        status === 'entering'
          ? 'wipe-enter'
          : status === 'exiting'
          ? 'wipe-exit'
          : 'wipe-hidden'
      }`}
    >
      <div className="flex flex-col items-center justify-center p-6 bg-[#0D0D0F] rounded-3xl shadow-2xl border border-black/40 scale-90 sm:scale-100">
        <img
          src="/logo.svg"
          alt="The Canna Cafe"
          className="h-16 w-auto object-contain"
        />
      </div>
    </div>
  );
};
