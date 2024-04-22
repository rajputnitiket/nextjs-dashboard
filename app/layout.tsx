import '@/app/ui/global.css';
import { Inter } from 'next/font/google';
import { inter } from './ui/fonts';
import { Metadata } from 'next';
import { url } from 'inspector';


export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dasahboard",
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Dashboard, built with app Router',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
