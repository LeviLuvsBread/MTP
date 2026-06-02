import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B1E3F',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 64 64" fill="none">
          <path
            d="M32 8 L52 14 V31 C52 42 43 49 32 53 C21 49 12 42 12 31 V14 Z"
            stroke="#C8CED6"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M32 14 L34.6 29 L48 31.5 L34.6 34 L32 49 L29.4 34 L16 31.5 L29.4 29 Z" fill="#B8924A" />
          <circle cx="32" cy="31.5" r="2.2" fill="#F7F8FA" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
