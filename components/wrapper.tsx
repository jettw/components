import { Circle, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Wrapper = ({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) => {
  return (
    <div className="border relative rounded-lg max-w-6xl md:h-[720px] overflow-hidden p-12">
      <div className="flex gap-2 absolute top-4 left-4">
        <Circle className="w-4" />
        <Circle className="w-4" />
        <Circle className="w-4" />
      </div>
      <Button className="absolute top-4 right-4" variant={"outline"} asChild>
        <Link
          href={`https://github.com/brijr/components/tree/main/components/${url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Code <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
      {children}
    </div>
  );
};
