import { HelmetProvider } from 'react-helmet-async';
import { MetaManager } from './components/ui/MetaManager';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { FeatureShowcase } from './components/sections/FeatureShowcase';
import { PricingSection } from './components/sections/PricingSection';
import { TestimonialSection } from './components/sections/TestimonialSection';
import { CtaSection } from './components/sections/CtaSection';

export default function App() {
  return (
    <HelmetProvider>
      <MetaManager
        title="DataFlow AI — Automate your data. Amplify your intelligence."
        description="DataFlow AI unifies your data pipelines, ML models, and business workflows into one intelligent platform. Start free — no infrastructure code required."
        ogImage="https://dataflow-ai-eight.vercel.app/og-image.png"
        ogUrl="https://dataflow-ai-eight.vercel.app/"
      />

      <Header />

      <main className="relative">
        <HeroSection />
        <FeatureShowcase />
        <PricingSection />
        <TestimonialSection />
        <CtaSection />
      </main>

      <Footer />
    </HelmetProvider>
  );
}
