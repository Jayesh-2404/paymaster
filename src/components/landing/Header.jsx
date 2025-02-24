"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../assests/logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Image src={logo} alt="Logo" width={50} height={50} /> */}
            <span className="text-xl font-bold">PayMaster</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/services">
              <Button variant="ghost">Services</Button>
            </Link>
            <Link href="/documentation">
              <Button variant="ghost">Documentation</Button>
            </Link>
           
          </div>
          <div className="bg-black text-white border-radius-6px">
          <Button variant="primary" className="py-2 px-4 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 border rounded-md" onClick={() => router.push("/auth")}>
              Get started 
            </Button>
          </div>
          
        </nav>
      </div>
    </header>
  );
}