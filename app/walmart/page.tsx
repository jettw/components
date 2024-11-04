// Layout Imports
import { Main } from "@/components/craft";
import { End } from "@/components/end";
import * as Craft from "@/components/craft";

// Component Imports
import WalmartHero from "@/components/heros/walmart-hero";
import FeatureOne from "@/components/features/feature-one";
import FeatureFour from "@/components/features/feature-four";
import FeatureSeven from "@/components/features/feature-seven";
import FAQOne from "@/components/faqs/faqs-one";
import WalmartCTA from "@/components/ctas/walmart-cta";

export default function WalmartPage() {
  return (
    <Main>
      {/* Hero Section */}
      <WalmartHero />

      {/* Main Features */}
      <FeatureOne />

      {/* OTIF Section */}
      <FeatureSeven />

      {/* SQEP Program */}
      <FeatureFour />

      {/* FAQ Section */}
      <FAQOne />

      {/* CTA Section */}
      <WalmartCTA />
      
      <End />
    </Main>
  );
} 