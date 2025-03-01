"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../assests/logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut , SignInButton , UserButton } from "@clerk/nextjs";
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
          <div className="flex items-center space-x-4 ">
          {/* <Link href="/dashboard">
              <Button className="mr-4 bg-blue-600">Dashboard</Button>
          </Link> */}
          {/* {
            user?.userName && (
              <span className='md:block hidden'>Welcome Back!{" "}{user?.userName}</span>
            )
          } */}
          <SignedOut onClick={() => {window.location.href = '/sign-in'}}>
            <SignInButton forceRedirectUrl='/dashboard'>
              <Button >
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: 'w-10 h-10',
                },
              }}
            />
          </SignedIn>
        </div>
          
        </nav>
      </div>
    </header>
  );
}