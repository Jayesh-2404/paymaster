"use client";

import { useState } from "react";
import {
    Bell,
    CreditCard,
    DollarSign,
    Home,
    LogOut,
    Menu,
    Settings,
    Users,
    X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileHeader = ({ navigation, activeTab, onTabChange }) => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static md:px-6 lg:hidden">
            <Sheet open={mobileNavOpen} onOpenChange={(open) => setMobileNavOpen(open)}>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-72 sm:max-w-none">
                    <div className="flex h-full flex-col">
                        <div className="flex items-center border-b px-2 py-4">
                            <DollarSign className="mr-2 h-6 w-6 text-primary" />
                            <h2 className="text-lg font-semibold">Paymaster</h2>
                            <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setMobileNavOpen(false)}>
                                <X className="h-5 w-5" />
                            </Button>
                        </div>
                        <nav className="grid gap-1 px-2 py-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => {
                                        onTabChange(item.href.replace("#", ""));
                                    }}
                                    className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${item.current
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                        }`}
                                >
                                    <item.icon className="h-5 w-5" />
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="mt-auto border-t p-4">
                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User avatar" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium">John Doe</span>
                                    <span className="text-xs text-muted-foreground">john.doe@example.com</span>
                                </div>
                                <Button variant="ghost" size="icon" className="ml-auto">
                                    <LogOut className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
            <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                <h1 className="text-lg font-semibold">Paymaster</h1>
            </div>
            <div className="ml-auto flex items-center gap-2">
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs">3</Badge>
                </Button>
                <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
            </div>
        </header>
    );
};

export default MobileHeader;