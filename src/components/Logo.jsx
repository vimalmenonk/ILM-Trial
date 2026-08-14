import React from 'react';

/**
 * ILM Logo SVG Component
 * Faithfully recreates the logo treatment from the recruitment poster reference:
 * Outer gold circular ring arc, opening book with rising star figure,
 * bold navy 'ILM' typography, and tagline 'INTEGRITY • LEARNING • MASTERY'.
 */
export default function Logo({ variant = 'default', size = 'normal', showTagline = true }) {
  const isLight = variant === 'light';
  
  const textColor = isLight ? '#FFFFFF' : '#0B1B3D';
  const goldColor = '#D4AF37';
  const ringColor = '#D4AF37';

  const sizeStyles = {
    small: { height: '42px' },
    normal: { height: '56px' },
    large: { height: '72px' },
  };

  return (
    <div 
      className={`ilm-logo-container ${variant}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.85rem',
        userSelect: 'none',
        ...sizeStyles[size] || sizeStyles.normal
      }}
    >
      <svg
        viewBox="0 0 160 140"
        style={{ height: '100%', width: 'auto', flexShrink: 0 }}
        aria-label="ILM Career Consultancy Logo"
      >
        {/* Outer Golden Arc / Circle Ring */}
        <path
          d="M 22,70 A 55,55 0 1,1 138,70"
          fill="none"
          stroke={ringColor}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 130,85 A 55,55 0 0,1 30,85"
          fill="none"
          stroke={ringColor}
          strokeWidth="3"
          strokeDasharray="4 4"
        />

        {/* Top Emblem: Rising Person & Star above Open Book */}
        {/* Star */}
        <polygon
          points="80,16 83,23 90,24 85,29 86,36 80,32 74,36 75,29 70,24 77,23"
          fill={goldColor}
        />
        {/* Figure Head */}
        <circle cx="80" cy="38" r="4.5" fill={goldColor} />
        {/* Figure Wings/Arms */}
        <path
          d="M 68,48 C 74,40 86,40 92,48"
          fill="none"
          stroke={goldColor}
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Open Book Motif */}
        <path
          d="M 80,62 L 56,50 C 65,46 75,48 80,56 Z"
          fill={textColor}
        />
        <path
          d="M 80,62 L 104,50 C 95,46 85,48 80,56 Z"
          fill={goldColor}
        />
        <path
          d="M 52,54 C 64,58 74,58 80,64 C 86,58 96,58 108,54 L 108,58 C 96,62 86,62 80,67 C 74,62 64,62 52,58 Z"
          fill={textColor}
        />

        {/* Bold ILM Text */}
        <text
          x="80"
          y="108"
          fontFamily="Outfit, 'Times New Roman', serif"
          fontWeight="800"
          fontSize="46"
          letterSpacing="4"
          fill={textColor}
          textAnchor="middle"
        >
          ILM
        </text>
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 800,
          fontSize: size === 'small' ? '1.15rem' : size === 'large' ? '1.75rem' : '1.45rem',
          color: textColor,
          letterSpacing: '0.05em',
          lineHeight: 1.1
        }}>
          ILM <span style={{ color: goldColor, fontWeight: 600 }}>Career Consultancy</span>
        </div>

        {showTagline && (
          <div style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: size === 'small' ? '0.62rem' : '0.72rem',
            color: isLight ? 'rgba(255, 255, 255, 0.85)' : '#475569',
            letterSpacing: '0.12em',
            marginTop: '0.2rem',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}>
            <span>INTEGRITY</span>
            <span style={{ color: goldColor }}>•</span>
            <span>LEARNING</span>
            <span style={{ color: goldColor }}>•</span>
            <span>MASTERY</span>
          </div>
        )}
      </div>
    </div>
  );
}
