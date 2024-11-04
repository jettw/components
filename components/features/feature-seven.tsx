// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from "@/public/placeholder.jpg";

const Feature = () => {
  return (
    <Section>
      <Container className="grid items-stretch">
        <h3>Navigating Walmart&apos;s Challenging Requirements</h3>
        <p className="text-muted-foreground">
          <Balancer>
            As competition in the market grows, it is important for Walmart to ensure that 
            customers can find the products they need in their stores. Navigating Walmart&apos;s 
            vast and fast-moving distribution and consolidation systems can be challenging for 
            suppliers. To seamlessly integrate into the network, minimize disruption, and provide 
            a good customer experience, suppliers must meet strict guidelines. Unis is here to 
            help you understand these guidelines, guide you through the process, and ship orders 
            efficiently to ensure on-time delivery.
          </Balancer>
        </p>
        <div className="not-prose mt-8 flex items-center gap-2">
          <Button className="w-fit" asChild>
            <Link href="#">Learn About Requirements</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
