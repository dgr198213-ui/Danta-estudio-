import type { Metadata } from 'next';
import { Newsreader, JetBrains_Mono } from 'next/font/google';
import './globals.css';

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
  title: 'Danta Estudio — La misma dedicación. Otra forma de crear.',
  description:
    'Webs de boda personalizadas, diseñadas desde cero para contar vuestra historia. Danta Estudio, Alcalá de Henares.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${newsreader.variable} ${jetbrains.variable}`}>
      <body className="font-body text-ink min-h-screen overflow-x-hidden bg-paper">{children}</body>
    </html>
  );
}
