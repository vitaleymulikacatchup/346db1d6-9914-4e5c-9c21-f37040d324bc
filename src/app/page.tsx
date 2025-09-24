"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={40}
          buttonText="Buy BrainRot"
          onButtonClick={() => console.log('Buy action')}
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to BrainRot Coin!"
          subtitle="Join the craze with easy buying steps"
          contractAddress="0xYourContractAddress"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="BrainRot Coin embodies the ultimate in chaotic memes and community engagement. Dive in for fun, profit, and a vibrant community!"
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics Explained"
          description="Our tokenomics are built for the community with transparency and fairness."
          cardItems={[
            { id: 1, title: "Liquidity", description: "50% of tokens locked for stability." },
            { id: 2, title: "Rewards", description: "10% of transactions go to community rewards." },
            { id: 3, title: "Marketing", description: "Investing in our brand presence and growth." }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="BrainRot Logo"
          logoText="BrainRot Coin"
          columns={[
            { items: [{ label: "Privacy Policy", onClick: () => console.log('Privacy clicked')} ] },
            { items: [{ label: "About Us", onClick: () => console.log('About clicked')} ] },
            { items: [{ label: "Contact Us", onClick: () => console.log('Contact clicked')} ] }
          ]}
          copyrightText="© 2023 BrainRot. All rights reserved."
          onPrivacyClick={() => console.log('Privacy policy click')}
        />
      </div>
    </SiteThemeProvider>
  );
}