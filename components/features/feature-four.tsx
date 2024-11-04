// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from "@/public/placeholder.jpg";

// Balancer import
import Balancer from "react-wrap-balancer";

const Feature = () => {
  return (
    <Section>
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>
              Walmart&apos;s Supplier Quality Excellence Program (SQEP)
            </Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
              Ensuring end-to-end quality and reducing transportation and supply chain handling costs
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4">
            {[
              {
                title: "Phase 1",
                description: "Initial implementation in February 2021, establishing foundational quality standards",
              },
              {
                title: "Phase 2",
                description: "Streamlined Walmart&apos;s ability to scan barcode labels on cases received through their network",
              },
              {
                title: "Phase 3",
                description: "Established guidelines for appropriate packaging, pellet, and load quality to minimize breakage",
              },
              {
                title: "Phase 4",
                description: "Upcoming phase focusing on requirements for scheduling and transportation",
              }
            ].map((phase, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h4 className="text-xl text-primary">{phase.title}</h4>
                <p className="text-base opacity-75">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
