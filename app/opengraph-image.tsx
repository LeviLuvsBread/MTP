import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

export const dynamic = 'force-static';
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: '#06122A',
          backgroundImage:
            'radial-gradient(60% 80% at 50% -10%, rgba(184,146,74,0.18) 0%, rgba(184,146,74,0) 60%), radial-gradient(60% 70% at 100% 110%, rgba(11,30,63,0.7) 0%, rgba(6,18,42,0) 70%)',
          color: '#F7F8FA',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Brand lockup */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path
              d="M32 5 L55 12 V31 C55 44 45.5 53 32 59 C18.5 53 9 44 9 31 V12 Z"
              stroke="#C8CED6"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M32 14 L35 29 L50 32 L35 35 L32 50 L29 35 L14 32 L29 29 Z"
              fill="#B8924A"
            />
            <circle cx="32" cy="32" r="2.4" fill="#C8CED6" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: 4, color: '#FFFFFF' }}>
              MERIDIAN
            </span>
            <span style={{ fontSize: 14, letterSpacing: 8, color: 'rgba(200,206,214,0.75)' }}>
              TRUST PARTNERS
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: 64, height: 3, backgroundColor: '#B8924A', marginBottom: 28 }} />
          <span
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#FFFFFF',
              maxWidth: 900,
            }}
          >
            {siteConfig.tagline}
          </span>
          <span style={{ fontSize: 26, marginTop: 24, color: 'rgba(200,206,214,0.85)', maxWidth: 820 }}>
            Fast, transparent working capital for U.S. businesses.
          </span>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: 'rgba(200,206,214,0.7)',
          }}
        >
          <span>meridiantrustpartners.com</span>
          <span>Direction · Capital · Trust</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
