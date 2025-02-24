import { Hero1 } from "@/components/ui/hero"

export default function Hero() {
  return (
    <Hero1
      title="Make Payment Managment  Smooth "
      subtitle="Get the centralized platform for your transactions ."
      actions={[
        {
          label: "Try Demo",
          href: "#",
          variant: "outline"
        },
        {
          label: "Start Free",
          href: "#",
          variant: "default"
        }
      ]}
      titleClassName="text-5xl md:text-6xl font-extrabold"
      subtitleClassName="text-lg md:text-xl max-w-[600px]"
      actionsClassName="mt-8"
    />
  );
}

export { Hero }