import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import { cn } from '@/lib/utils';
import Provider from '@/provider';
import { Toaster } from '@/components/ui/sonner';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CUY ANIM LIST',
  description: 'list of anime that i have watched',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn('bg-color-secondary', poppins.className)}>
        <Provider>
          <Navbar />
          {children}
          <Toaster position="top-right" richColors closeButton />
        </Provider>
      </body>
    </html>
  );
}
