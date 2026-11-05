import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function TataAiaLogo({ variant = 'dark', className = '', size = 'md' }: LogoProps) {
  const isLight = variant === 'light';
  
  // Dimensions based on size
  const scale = size === 'sm' ? 0.8 : size === 'lg' ? 1.25 : 1;
  const width = Math.round(180 * scale);
  const height = Math.round(44 * scale);

  const tataColor = isLight ? '#FFFFFF' : '#002D62';
  const aiaColor = '#D31145'; // AIA signature ruby red
  const subtextColor = isLight ? '#CAD5E2' : '#002D62';
  const blueBar = '#004B87';
  const redBar = '#D31145';

  return (
    <div className={`inline-flex items-center select-none ${className}`} style={{ textDecoration: 'none' }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 190 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="TATA AIA Life Insurance"
      >
        {/* TATA Text */}
        <text
          x="2"
          y="24"
          fill={tataColor}
          fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          fontWeight="900"
          fontSize="24"
          letterSpacing="0.05em"
        >
          TATA
        </text>

        {/* AIA Text */}
        <text
          x="78"
          y="24"
          fill={aiaColor}
          fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          fontWeight="900"
          fontSize="24"
          letterSpacing="0.08em"
        >
          AIA
        </text>

        {/* Blue and Red Accent Bars */}
        <rect x="22" y="30" width="12" height="3" rx="1.5" fill={blueBar} />
        <rect x="38" y="30" width="12" height="3" rx="1.5" fill={redBar} />

        {/* LIFE INSURANCE Subtext */}
        <text
          x="56"
          y="33.5"
          fill={subtextColor}
          fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          fontWeight="700"
          fontSize="8"
          letterSpacing="0.14em"
        >
          LIFE INSURANCE
        </text>
      </svg>
    </div>
  );
}

