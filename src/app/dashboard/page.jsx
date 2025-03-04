"use client";

import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import MobileHeader from "./_components/MobileHeader";
import DesktopSidebar from "./_components/DesktopSidebar";
import HomeTabContent from "./_components/HomeTabContent";
import TransactionHistoryTabContent from "./_components/TransactionHistoryTabContent";
import FriendsTabContent from "./_components/FriendsTabContent";
import SettingsTabContent from "./_components/SettingsTabContent";
import { Home, CreditCard, Users, Settings } from "lucide-react";

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("home");

    const navigation = [
        { name: "Home", href: "#home", icon: Home, current: activeTab === "home" },
        { name: "Transaction History", href: "#transactions", icon: CreditCard, current: activeTab === "transactions" },
        { name: "Friends", href: "#friends", icon: Users, current: activeTab === "friends" },
        { name: "Settings", href: "#settings", icon: Settings, current: activeTab === "settings" },
    ];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="flex min-h-screen flex-col">
            <MobileHeader navigation={navigation} activeTab={activeTab} onTabChange={handleTabChange} />

            <div className="flex flex-1">
                <DesktopSidebar navigation={navigation} activeTab={activeTab} onTabChange={handleTabChange} />

                <main className="flex-1 overflow-auto">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
                        {/* Home Tab */}
                        <TabsContent value="home" className="h-full p-4 md:p-6">
                            <HomeTabContent onTabChange={handleTabChange} />
                        </TabsContent>

                        {/* Transaction History Tab */}
                        <TabsContent value="transactions" className="h-full p-4 md:p-6">
                            <TransactionHistoryTabContent />
                        </TabsContent>

                        {/* Friends Tab */}
                        <TabsContent value="friends" className="h-full p-4 md:p-6">
                            <FriendsTabContent />
                        </TabsContent>

                        {/* Settings Tab */}
                        <TabsContent value="settings" className="h-full p-4 md:p-6">
                            <SettingsTabContent />
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    );
}