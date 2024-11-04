// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/craft";

const CTA = () => {
  return (
    <Section>
      <Container className="flex flex-col gap-6">
        <h2 className="!my-0">Ready to Optimize Your Walmart Shipping?</h2>
        <h4 className="text-muted-foreground">
          <Balancer>
            Join Unis&apos; Walmart Consolidation Program to streamline your shipping operations, 
            reduce costs, and meet Walmart&apos;s strict compliance standards. Our team of experts 
            is ready to help you navigate the requirements and improve your delivery performance.
          </Balancer>
        </h4>
        <div className="not-prose flex items-center gap-2">
          <Button asChild>
            <Link href="/contact">Get Started Today</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/solutions">Explore More Solutions {"->"}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default CTA; 