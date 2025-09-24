"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import ProcessRoadmapTimeline from '@/components/sections/layouts/roadmap/ProcessRoadmap';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: "funAndTrendy",
      colorTemplate: 1,
      textAnimation: "slide",
    }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="/images/logo.svg"
          logoWidth={120}
          logoHeight={40}
          buttonText="Buy BrainRot"
          onButtonClick={() => window.location.href = '#how-to-buy'}
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'How to Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'Roadmap', id: 'roadmap' },
            { name: 'Footer', id: 'footer' }
          ]}
        />
      </div>
      <div id="hero" data-section="hero">
        <FrameHero
          title="Welcome to BrainRot!"
          description="Join the chaotic wave of meme culture with BrainRot Coin, your gateway to the future of crypto."
          primaryButtonText="Join Us"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          description="BrainRot is not just another cryptocurrency; it's a community-driven movement that fuses humor with finance. Our mission is to bring joy and innovation to the crypto space."
        ></SplitAbout>
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <NumberGridTokenomics
          title="Tokenomics Overview"
          description="Understanding the distribution and sustainability of BrainRot Coin is key to its success."
          kpiItems={[
            { value: "10M", description: "Total Supply" },
            { value: "2M", description: "Circulating Supply" },
            { value: "5%", description: "Liquidity Pool" }
          ]}
        />
      </div>
      <div id="roadmap" data-section="roadmap">
        <ProcessRoadmapTimeline
          items={[
            { id: '1', title: 'Initial Launch', description: 'Launch of BrainRot Coin and initial marketing.', image: '/images/logo.svg', items: [], reverse: false },
            { id: '2', title: 'Community Building', description: 'Building our community through engagement and utilities.', image: '/images/logo.svg', items: [], reverse: true },
            { id: '3', title: 'Partnerships', description: 'Establishing token partnerships and collaborations.', image: '/images/logo.svg', items: [], reverse: false }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={120}
          logoHeight={40}
          columns={[
            { title: 'Quick Links', item: [
              { label: 'Home', onClick: () => window.location.href = '#hero' },
              { label: 'About', onClick: () => window.location.href = '#about' },
              { label: 'How to Buy', onClick: () => window.location.href = '#how-to-buy' }
            ] },
            { title: 'Socials', items: [
              { label: 'Twitter', onClick: () => window.location.href = 'https://twitter.com/' },
              { label: 'Discord', onClick: () => window.location.href = 'https://discord.gg/' }
            ] },
            { title: 'Legal', items: [
              { label: 'Privacy Policy', onClick: () => alert('Privacy Policy Clicked!') },
              { label: 'Terms of Service', onClick: () => alert('Terms of Service Clicked!') }
            ] }
          ]}
          copyrightText="© 2023 BrainRot Coin. All rights reserved."
          onPrivacyClick={() => alert('Privacy Policy Clicked!')}
        />
      </div>
    </SiteThemeProvider>
  );
}
