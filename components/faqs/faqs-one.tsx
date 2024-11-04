import { Section, Container } from "@/components/craft";

import { ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "What are Walmart&apos;s OTIF requirements?",
    answer: "Suppliers must deliver On-Time, In-Full (OTIF) orders in at least 95% of cases. Walmart requires suppliers with a rating of 36% or higher to improve by 20%. Non-compliance may result in penalties, including a 3% fine for early, incomplete, or late orders.",
  },
  {
    question: "What is the Supplier Quality Excellence Program?",
    answer: "The SQEP ensures end-to-end quality and reduces transportation costs. It requires high accuracy in packaging details, load quality metrics, and PO details. Suppliers may face fines for PO infractions.",
  },
  {
    question: "How does Unis support the Walmart Consolidation Program?",
    answer: "Unis organizes LTL pickup and delivery schedules, facilitates communication with Walmart&apos;s 42 regional distribution centers, and provides consolidated shipping solutions to help suppliers meet Walmart&apos;s requirements efficiently.",
  },
  {
    question: "What are the phases of SQEP implementation?",
    answer: "Phase 1 began in February 2021, Phase 2 focused on barcode scanning, Phase 3 (March 2022) established packaging guidelines, and Phase 4 will focus on scheduling and transportation requirements.",
  },
];

const FAQ = () => {
  return (
    <Section>
      <Container>
        <h3 className="!mt-0">Frequently Asked Questions</h3>
        <h4 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to our
          customer support team.
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
