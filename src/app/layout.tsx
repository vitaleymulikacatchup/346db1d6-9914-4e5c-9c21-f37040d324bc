import type { Metadata } from "next";
import { Inter_Tight, Poppins } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "BrainRot Meme Coin: chaotic memes, simple buy steps",
  description: "BrainRot Meme Coin fuses chaotic meme culture with clear, simple buy steps. Learn what the token does, how to participate, and why the community vibe matters.",
  keywords: ["memecoin","cryptocurrency","how to buy","tokenomics","roadmap","community","web3","blockchain","meme culture","brainrot"],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "BrainRot Meme Coin: chaotic memes, simple buy steps",
    description: "BrainRot Meme Coin fuses chaotic meme culture with clear, simple buy steps. Learn what the token does, how to participate, and why the community vibe matters.",
    type: "website",
    url: "/",
    siteName: "BrainRot Coin",
    images: [{
      url: "/images/logo.svg",
      width: 1200,
      height: 630,
      alt: "BrainRot Meme Coin"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainRot Meme Coin: chaotic memes, simple buy steps",
    description: "BrainRot Meme Coin fuses chaotic meme culture with clear, simple buy steps. Learn what the token does, how to participate, and why the community vibe matters.",
    images: ["/images/logo.svg"]
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
