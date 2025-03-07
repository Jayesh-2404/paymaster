import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { CreditCard, DollarSign, Plus, Users, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomeTabContent = ({ onTabChange }) => {
    const router = useRouter();
    const { user } = useUser();
    const [uniqueId, setUniqueId] = useState(null);

    useEffect(() => {
        if (user) {
            // Generate a unique 5-digit ID (you might want to store this in your database)
            const generatedId = Math.floor(10000 + Math.random() * 90000);
            setUniqueId(generatedId);
        }
    }, [user]);

    const handleNewPaymentClick = () => {
        router.push("/payment");
    };

    return (
        <>
            
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
                    <p className="text-muted-foreground">
                        Welcome back, {user ? `${user.firstName} ` : "Guest"}
                        {uniqueId && <span className="ml-2 text-sm text-gray-500">ID: {uniqueId}</span>}
                    </p>
                </div>
                <Button className="hidden sm:flex" onClick={handleNewPaymentClick}>
                    <Plus className="mr-2 h-4 w-4" />
                    New Payment
                </Button>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Balance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$5,240.00</div>
                        <p className="text-xs text-muted-foreground">+12.5% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Income</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$2,850.00</div>
                        <p className="text-xs text-muted-foreground">+5.2% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Expenses</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$1,245.00</div>
                        <p className="text-xs text-muted-foreground">-3.1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$350.00</div>
                        <p className="text-xs text-muted-foreground">2 pending transactions</p>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Spending Overview</CardTitle>
                            <CardDescription>Your spending patterns for the last 30 days</CardDescription>
                        </div>
                        <Select defaultValue="30days">
                            <SelectTrigger className="w-36">
                                <SelectValue placeholder="Select period" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="7days">Last 7 days</SelectItem>
                                <SelectItem value="30days">Last 30 days</SelectItem>
                                <SelectItem value="3months">Last 3 months</SelectItem>
                                <SelectItem value="year">This year</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[240px] w-full rounded-md border bg-muted/50 p-6">
                            <div className="flex h-full flex-col justify-between">
                                <div className="space-y-2">
                                    <div className="h-2 w-full rounded-md bg-primary/10" />
                                    <div className="h-2 w-3/4 rounded-md bg-primary/20" />
                                    <div className="h-2 w-1/2 rounded-md bg-primary/30" />
                                </div>
                                <div className="h-24 rounded-md bg-muted" />
                                <div className="space-y-2">
                                    <div className="h-2 w-full rounded-md bg-primary/10" />
                                    <div className="h-2 w-3/4 rounded-md bg-primary/20" />
                                    <div className="h-2 w-1/2 rounded-md bg-primary/30" />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Transactions</CardTitle>
                        <CardDescription>Your latest payment activities</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { name: "Sarah Johnson", amount: "-$120.00", date: "Today, 2:34 PM", type: "expense" },
                                { name: "Netflix Subscription", amount: "-$14.99", date: "Yesterday", type: "expense" },
                                { name: "Michael Chen", amount: "+$250.00", date: "Mar 12, 2023", type: "income" },
                                { name: "Grocery Store", amount: "-$65.40", date: "Mar 10, 2023", type: "expense" },
                                { name: "Salary Deposit", amount: "+$2,500.00", date: "Mar 1, 2023", type: "income" },
                            ].map((transaction, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Avatar>
                                            <AvatarImage
                                                src={`/placeholder.svg?height=32&width=32&text=${transaction.name.charAt(0)}`}
                                                alt={transaction.name}
                                            />
                                            <AvatarFallback>{transaction.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium">{transaction.name}</p>
                                            <p className="text-xs text-muted-foreground">{transaction.date}</p>
                                        </div>
                                    </div>
                                    <p className={`text-sm font-medium ${transaction.type === "income" ? "text-green-600" : ""
                                        }`}>
                                        {transaction.amount}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" className="w-full" onClick={() => onTabChange("transactions")}>
                            View All Transactions
                        </Button>
                    </CardFooter>
                </Card>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Monthly Budget</CardTitle>
                        <CardDescription>Your spending against monthly budget</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Groceries</span>
                                <span className="text-sm text-muted-foreground">$120/$200</span>
                            </div>
                            <Progress value={60} className="h-2" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Entertainment</span>
                                <span className="text-sm text-muted-foreground">$65/$100</span>
                            </div>
                            <Progress value={65} className="h-2" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Transportation</span>
                                <span className="text-sm text-muted-foreground">$90/$150</span>
                            </div>
                            <Progress value={60} className="h-2" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Dining Out</span>
                                <span className="text-sm text-muted-foreground">$210/$250</span>
                            </div>
                            <Progress value={84} className="h-2" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Payment Methods</CardTitle>
                        <CardDescription>Your active payment methods</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-16 items-center justify-center rounded-md border bg-muted">
                                <CreditCard className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-medium">Visa ending in 4242</p>
                                <p className="text-xs text-muted-foreground">Expires 04/25</p>
                            </div>
                            <Badge className="ml-auto">Primary</Badge>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-16 items-center justify-center rounded-md border bg-muted">
                                <CreditCard className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-medium">Mastercard ending in 5555</p>
                                <p className="text-xs text-muted-foreground">Expires 08/24</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-16 items-center justify-center rounded-md border bg-muted">
                                <DollarSign className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-medium">Bank Account</p>
                                <p className="text-xs text-muted-foreground">Checking ****6789</p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" className="w-full">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Payment Method
                        </Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Frequently used actions</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button className="w-full justify-start">
                            <Plus className="mr-2 h-4 w-4" />
                            New Payment
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                            <Users className="mr-2 h-4 w-4" />
                            Pay a Friend
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                            <CreditCard className="mr-2 h-4 w-4" />
                            Manage Cards
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                            <Settings className="mr-2 h-4 w-4" />
                            Account Settings
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default HomeTabContent;