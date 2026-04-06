import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const republicaMinor = localFont({
  src: "../../public/fonts/Republica Minor 2.0.otf",
  variable: "--font-republica",
});

export const metadata: Metadata = {
  title: "0% PRE ESCUCHA OFICIAL",
  description: "0% PRE ESCUCHA OFICIAL - Winona Riders",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "0% PRE ESCUCHA OFICIAL",
    description: "0% PRE ESCUCHA OFICIAL - Winona Riders",
    images: [
      { url: '/portada-winona-disco.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${republicaMinor.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}