import {
    DollarSign,
    Home,
    CreditCard,
    Users,
    Settings,
    LogOut,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const DesktopSidebar = ({ navigation, activeTab, onTabChange }) => {
    return (
        <aside className="hidden w-64 shrink-0 border-r bg-background lg:block">
            <div className="flex h-full flex-col">
                <div className="flex h-14 items-center border-b px-4">
                    <DollarSign className="mr-2 h-6 w-6 text-primary" />
                    <h2 className="text-lg font-semibold">Paymaster</h2>
                </div>
                <nav className="grid gap-1 p-4">
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
                
            </div>
        </aside>
    );
};

export default DesktopSidebar;