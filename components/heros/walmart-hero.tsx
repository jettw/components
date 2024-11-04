// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from "@/public/placeholder.jpg";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose" href="/solutions">
              Walmart Solutions <ArrowRight className="w-4" />
            </Link>
          </Button>
          <h1>
            <Balancer>
              Walmart Vendor Pool Solutions
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
              In the Walmart Consolidation Program, multiple consolidation centers manage orders 
              and optimize fulfillment routes for maximum efficiency, enabling a nationwide 
              network of warehouses and distribution centers to fulfill orders as quickly as possible. 
              The program serves manufacturers of general goods that supply Walmart with a wide 
              variety of products.
            </Balancer>
          </h3>
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="h-full w-full object-cover object-bottom"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="Walmart distribution center"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero; 