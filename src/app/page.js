import Image from "next/image";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      {/* <Link href="/sign-in">
        <Button
          variant="default"
          size="lg"
          className="mb-12 px-6 py-3 text-lg font-semibold rounded-lg shadow-md bg-blue-600 hover:bg-blue-700 transition-all duration-300"
        >
          🚀 Get Started
        </Button>
      </Link> */}
    </div>
  );
}
