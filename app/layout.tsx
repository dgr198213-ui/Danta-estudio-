import type { Metadata } from 'next';
import { Fraunces, Newsreader, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  style: ['normal', 'italic'],
  weight: ['400', '500'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Danta — El mismo cuidado de siempre, ahora en digital',
  description:
    'Crea la web de tu boda con Danta: tres generaciones de Alcalá de Henares cuidando cada instante, ahora en digital.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${newsreader.variable} ${jetbrains.variable}`}>
      <body className="font-body text-ink min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
