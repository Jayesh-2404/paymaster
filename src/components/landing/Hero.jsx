import { Hero1 } from "@/components/ui/hero"
import Link from "next/link";
import { Button } from "../ui/button";
export default function Hero() {
  return (
    <Hero1
      title="Make Payment Managment  Smooth "
      subtitle="Get the centralized platform for your transactions ."
      actions={[
        {
          label: "Try Demo",
          href: "/sign-in",
          variant: "outline"
        },
        {
          label: "Start Free",
          href: "/sign-in",
          variant: "default"
        }
      ]}
      titleClassName="text-5xl md:text-6xl font-extrabold"
      subtitleClassName="text-lg md:text-xl max-w-[600px]"
      actionsClassName="mt-8"
    >
      <Link href="/sign-in">
        <Button
          variant="default"
          size="lg"
          className="mb-12 px-6 py-3 text-lg font-semibold rounded-lg shadow-md bg-blue-600 hover:bg-blue-700 transition-all duration-300"
        >
          🚀 Get Started
        </Button>
      </Link>
    </Hero1>
  );
}

export { Hero }