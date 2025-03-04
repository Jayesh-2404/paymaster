import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle  ,CardFooter} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const FriendsTabContent = () => {
    return (
        <>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Friends</h2>
                    <p className="text-muted-foreground">Manage your contacts for quick payments</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search friends..." className="w-full pl-8 sm:w-[300px]" />
                    </div>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Friend
                    </Button>
                </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                    { name: "Sarah Johnson", email: "sarah.j@example.com", avatar: "SJ" },
                    { name: "Michael Chen", email: "michael.c@example.com", avatar: "MC" },
                    { name: "Emily Rodriguez", email: "emily.r@example.com", avatar: "ER" },
                    { name: "David Kim", email: "david.k@example.com", avatar: "DK" },
                    { name: "Jessica Taylor", email: "jessica.t@example.com", avatar: "JT" },
                    { name: "Alex Morgan", email: "alex.m@example.com", avatar: "AM" },
                    { name: "Sophia Lee", email: "sophia.l@example.com", avatar: "SL" },
                    { name: "Ryan Patel", email: "ryan.p@example.com", avatar: "RP" },
                ].map((friend, i) => (
                    <Card key={i}>
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <Avatar className="h-12 w-12">
                                <AvatarImage
                                    src={`/placeholder.svg?height=48&width=48&text=${friend.avatar}`}
                                    alt={friend.name}
                                />
                                <AvatarFallback>{friend.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-base">{friend.name}</CardTitle>
                                <CardDescription className="text-xs">{friend.email}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                            <div className="flex gap-2">
                                <Button size="sm" className="flex-1">
                                    Pay
                                </Button>
                                <Button size="sm" variant="outline" className="flex-1">
                                    Request
                                </Button>
                            </div>
                        </CardContent>
                        <CardFooter className="pt-2">
                            <p className="text-xs text-muted-foreground">Last transaction: Mar 12, 2023</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default FriendsTabContent;