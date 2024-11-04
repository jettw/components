// React and Next.js
import React from "react";

// Layout Components
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Icons
import { Coins } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "LTL Pickup & Delivery",
    description: "Unis supports the Walmart Consolidation Program by organizing LTL pickup and delivery schedules for manufacturers in the Walmart Vendor Pool, allowing quick fulfillment of smaller orders without full TL shipment costs.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Regional Distribution Network",
    description: "We facilitate communication between suppliers and Walmart&apos;s 42 regional distribution centers by consolidating and routing shipments through our consolidation centers.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Streamlined Process",
    description: "Our consolidation and LTL shipping programs streamline the process, offer a consolidated pricing model at reduced costs, and increase flexibility with transparent performance metrics online.",
  },
];

const Feature = () => {
  return (
    <Section className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>
              Efficient Walmart Consolidation Program
            </Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
              Streamlining supplier operations through consolidated shipping solutions
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
            {featureText.map(({ icon, title, description }, index) => (
              <div className="flex flex-col gap-4" key={index}>
                {icon}
                <h4 className="text-xl text-primary">{title}</h4>
                <p className="text-base opacity-75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
