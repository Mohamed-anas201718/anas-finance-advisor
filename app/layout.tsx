import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mohamed Anas S | TATA AIA Life Insurance Advisor | Official Financial Advisory',
  description: 'Plan Today... Live Worry-Free Tomorrow. Connect with Mohamed Anas S, Authorized TATA AIA Life Insurance Advisor for Life Protection, Wealth Creation, Retirement & Tax Saving Plans.',
  keywords: [
    'Mohamed Anas S',
    'TATA AIA Life Insurance',
    'TATA Finance Advisor',
    'Life Insurance Tamil Nadu',
    'Term Insurance 1 Crore',
    'Fortune Guarantee Plus',
    'Sampoorna Raksha Supreme',
    'Best Retirement Plans',
    'Tax Saving 80C'
  ],
  authors: [{ name: 'Mohamed Anas S' }],
  openGraph: {
    title: 'Mohamed Anas S | TATA AIA Life Insurance Advisor',
    description: 'Plan Today... Live Worry-Free Tomorrow. Personalized Financial Security & Wealth Planning.',
    type: 'website',
    locale: 'en_IN',
  }
};

export const viewport: Viewport = {
  themeColor: '#002D62',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
