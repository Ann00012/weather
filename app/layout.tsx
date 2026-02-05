import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "modern-normalize";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather",
  description: "Weather",
  openGraph: {
    title: "Weather",
    description: "Weather",
    url: "/",
    siteName: "Weather",
    images: [{
      url: 'https://images.pexels.com/photos/12482382/pexels-photo-12482382.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
      width: 1200,
      height: 630,
      alt:"Weather"
    }],
    type:'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Weather",
    description: "Weather",
    images:["https://images.pexels.com/photos/12482382/pexels-photo-12482382.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          {children}
          </TanStackProvider>
      </body>
    </html>
  );
}
