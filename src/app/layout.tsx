import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BrainRot Meme Coin — chaotic memes, join with simple steps",
  description: "BrainRot Meme Coin fuses chaotic memes with simple crypto steps. Learn what the token does, how to buy, and why the community vibe matters—fast, friendly, and transparent.",
  keywords: ["memecoin", "cryptocurrency", "how to buy", "tokenomics", "community", "meme culture", "web3", "blockchain", "digital assets", "humor"],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "BrainRot Meme Coin — chaotic memes, join with simple steps",
    description: "BrainRot Meme Coin fuses chaotic memes with simple crypto steps. Learn what the token does, how to buy, and why the community vibe matters—fast, friendly, and transparent.",
    type: "website",
    url: "/",  
    siteName: "BrainRot Coin",
    images: [{
      url: "/images/logo.svg",
      width: 1200,
      height: 630,
      alt: "BrainRot Meme Coin — chaotic memes, join with simple steps"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainRot Meme Coin — chaotic memes, join with simple steps",
    description: "BrainRot Meme Coin fuses chaotic memes with simple crypto steps. Learn what the token does, how to buy, and why the community vibe matters—fast, friendly, and transparent.",
    images: ["/images/logo.svg"]
  },  
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased bg-[linear-gradient(135deg,#0b0b14,#1a1a2b)] text-[#eaf2f7]`}> 
        {children}
      </body>
    </html>
  );
}