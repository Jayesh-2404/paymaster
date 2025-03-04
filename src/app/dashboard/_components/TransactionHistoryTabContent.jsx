import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const TransactionHistoryTabContent = () => {
    return (
        <>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Transaction History</h2>
                    <p className="text-muted-foreground">View and manage your payment activities</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search transactions..." className="w-full pl-8 sm:w-[300px]" />
                    </div>
                    <Select defaultValue="all">
                        <SelectTrigger className="w-full sm:w-[150px]">
                            <SelectValue placeholder="Filter by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Transactions</SelectItem>
                            <SelectItem value="income">Income</SelectItem>
                            <SelectItem value="expense">Expenses</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="mt-6 rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Description</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[
                            {
                                description: "Sarah Johnson",
                                date: "Mar 15, 2023",
                                category: "Transfer",
                                amount: "-$120.00",
                                status: "Completed",
                                type: "expense",
                            },
                            {
                                description: "Netflix Subscription",
                                date: "Mar 14, 2023",
                                category: "Entertainment",
                                amount: "-$14.99",
                                status: "Completed",
                                type: "expense",
                            },
                            {
                                description: "Michael Chen",
                                date: "Mar 12, 2023",
                                category: "Transfer",
                                amount: "+$250.00",
                                status: "Completed",
                                type: "income",
                            },
                            {
                                description: "Grocery Store",
                                date: "Mar 10, 2023",
                                category: "Groceries",
                                amount: "-$65.40",
                                status: "Completed",
                                type: "expense",
                            },
                            {
                                description: "Salary Deposit",
                                date: "Mar 1, 2023",
                                category: "Income",
                                amount: "+$2,500.00",
                                status: "Completed",
                                type: "income",
                            },
                            {
                                description: "Electric Bill",
                                date: "Feb 28, 2023",
                                category: "Utilities",
                                amount: "-$85.75",
                                status: "Completed",
                                type: "expense",
                            },
                            {
                                description: "Restaurant Dinner",
                                date: "Feb 25, 2023",
                                category: "Dining",
                                amount: "-$78.50",
                                status: "Completed",
                                type: "expense",
                            },
                            {
                                description: "Freelance Payment",
                                date: "Feb 20, 2023",
                                category: "Income",
                                amount: "+$350.00",
                                status: "Completed",
                                type: "income",
                            },
                            {
                                description: "Amazon Purchase",
                                date: "Feb 18, 2023",
                                category: "Shopping",
                                amount: "-$42.99",
                                status: "Completed",
                                type: "expense",
                            },
                            {
                                description: "Gym Membership",
                                date: "Feb 15, 2023",
                                category: "Health",
                                amount: "-$49.99",
                                status: "Completed",
                                type: "expense",
                            },
                        ].map((transaction, i) => (
                            <TableRow key={i}>
                                <TableCell className="font-medium">{transaction.description}</TableCell>
                                <TableCell>{transaction.date}</TableCell>
                                <TableCell>{transaction.category}</TableCell>
                                <TableCell className={`text-right ${transaction.type === "income" ? "text-green-600" : ""}`}>
                                    {transaction.amount}
                                </TableCell>
                                <TableCell className="text-right">
                                    <Badge variant="outline">{transaction.status}</Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Showing 10 of 45 transactions</p>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                        Previous
                    </Button>
                    <Button variant="outline" size="sm">
                        Next
                    </Button>
                </div>
            </div>
        </>
    );
};

export default TransactionHistoryTabContent;