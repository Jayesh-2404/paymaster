"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../assests/logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut , SignInButton , UserButton } from "@clerk/nextjs";
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
import { ArrowRight, CreditCard, History, Users, Shield, ChevronRight, Send, Clock, Split } from "lucide-react"

export default function Header() {
  const router = useRouter();

  const handleSignUp = () => {
    router.push('/sign-up');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <CreditCard className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Paymaster</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-primary">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
            How It Works
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
            Testimonials
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/sign-in" className="hidden text-sm font-medium hover:underline underline-offset-4 md:inline-block">
            Log In
          </Link>
          <Button onClick={handleSignUp}>Sign Up Free</Button>
        </div>
        {/* <div>
          
        </div> */}
      </div>
    </header>
  );
}