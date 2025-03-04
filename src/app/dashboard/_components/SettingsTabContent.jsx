import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, DollarSign, Settings, Plus } from "lucide-react"; // Added Plus import
import { Badge } from "@/components/ui/badge"; // Added Badge import

const SettingsTabContent = () => {
    return (
        <>
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">Customize your account preferences</p>
            </div>

            <div className="mt-6">
                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="w-full justify-start border-b pb-0">
                        <TabsTrigger value="account" className="rounded-b-none">
                            Account
                        </TabsTrigger>
                        <TabsTrigger value="payment-methods" className="rounded-b-none">
                            Payment Methods
                        </TabsTrigger>
                        <TabsTrigger value="security" className="rounded-b-none">
                            Security
                        </TabsTrigger>
                        <TabsTrigger value="notifications" className="rounded-b-none">
                            Notifications
                        </TabsTrigger>
                    </TabsList>
                    <div className="mt-4 space-y-6">
                        <TabsContent value="account">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Profile Information</CardTitle>
                                    <CardDescription>Update your account details</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex flex-col gap-6 sm:flex-row">
                                        <div className="flex-1 space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input id="name" defaultValue="John Doe" />
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <Label htmlFor="email">Email Address</Label>
                                            <Input id="email" type="email" defaultValue="john.doe@example.com" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-6 sm:flex-row">
                                        <div className="flex-1 space-y-2">
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <Label htmlFor="dob">Date of Birth</Label>
                                            <Input id="dob" type="date" defaultValue="1990-01-01" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="address">Address</Label>
                                        <Input id="address" defaultValue="123 Main St, Apt 4B" />
                                    </div>
                                    <div className="flex flex-col gap-6 sm:flex-row">
                                        <div className="flex-1 space-y-2">
                                            <Label htmlFor="city">City</Label>
                                            <Input id="city" defaultValue="New York" />
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <Label htmlFor="state">State</Label>
                                            <Input id="state" defaultValue="NY" />
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <Label htmlFor="zip">ZIP Code</Label>
                                            <Input id="zip" defaultValue="10001" />
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-end gap-2">
                                    <Button variant="outline">Cancel</Button>
                                    <Button>Save Changes</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>

                        <TabsContent value="payment-methods">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Payment Methods</CardTitle>
                                    <CardDescription>Manage your payment options</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 rounded-md border p-4">
                                            <div className="flex h-10 w-16 items-center justify-center rounded-md border bg-muted">
                                                <CreditCard className="h-5 w-5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium">Visa ending in 4242</p>
                                                <p className="text-xs text-muted-foreground">Expires 04/25</p>
                                            </div>
                                            <Badge>Primary</Badge>
                                            <Button variant="ghost" size="icon">
                                                <Settings className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center gap-3 rounded-md border p-4">
                                            <div className="flex h-10 w-16 items-center justify-center rounded-md border bg-muted">
                                                <CreditCard className="h-5 w-5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium">Mastercard ending in 5555</p>
                                                <p className="text-xs text-muted-foreground">Expires 08/24</p>
                                            </div>
                                            <Button variant="ghost" size="icon">
                                                <Settings className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="flex items-center gap-3 rounded-md border p-4">
                                            <div className="flex h-10 w-16 items-center justify-center rounded-md border bg-muted">
                                                <DollarSign className="h-5 w-5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium">Bank Account</p>
                                                <p className="text-xs text-muted-foreground">Checking ****6789</p>
                                            </div>
                                            <Button variant="ghost" size="icon">
                                                <Settings className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                    <Button className="w-full sm:w-auto">
                                        <Plus className="mr-2 h-4 w-4" />
                                        Add Payment Method
                                    </Button>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="security">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Security Settings</CardTitle>
                                    <CardDescription>Manage your account security</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="current-password">Current Password</Label>
                                            <Input id="current-password" type="password" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="new-password">New Password</Label>
                                            <Input id="new-password" type="password" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="confirm-password">Confirm New Password</Label>
                                            <Input id="confirm-password" type="password" />
                                        </div>
                                        <Button className="mt-2">Update Password</Button>
                                    </div>
                                    <Separator />
                                    <div>
                                        <h3 className="mb-4 text-lg font-medium">Two-Factor Authentication</h3>
                                        <div className="flex items-center justify-between rounded-md border p-4">
                                            <div>
                                                <p className="font-medium">Two-Factor Authentication</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Add an extra layer of security to your account
                                                </p>
                                            </div>
                                            <Button variant="outline">Enable</Button>
                                        </div>
                                    </div>
                                    <Separator />
                                    <div>
                                        <h3 className="mb-4 text-lg font-medium">Login Sessions</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between rounded-md border p-4">
                                                <div>
                                                    <p className="font-medium">Current Session</p>
                                                    <p className="text-sm text-muted-foreground">New York, USA • Chrome on Windows</p>
                                                </div>
                                                <Badge>Active</Badge>
                                            </div>
                                            <div className="flex items-center justify-between rounded-md border p-4">
                                                <div>
                                                    <p className="font-medium">Mobile App</p>
                                                    <p className="text-sm text-muted-foreground">New York, USA • iPhone 13</p>
                                                </div>
                                                <Button variant="outline" size="sm">
                                                    Logout
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="notifications">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Notification Preferences</CardTitle>
                                    <CardDescription>Manage how you receive notifications</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between rounded-md border p-4">
                                            <div>
                                                <p className="font-medium">Payment Notifications</p>
                                                <p className="text-sm text-muted-foreground">Get notified about payment activities</p>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="payment-email"
                                                        className="h-4 w-4 rounded border-gray-300"
                                                        defaultChecked
                                                    />
                                                    <Label htmlFor="payment-email" className="text-sm">
                                                        Email
                                                    </Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="payment-push"
                                                        className="h-4 w-4 rounded border-gray-300"
                                                        defaultChecked
                                                    />
                                                    <Label htmlFor="payment-push" className="text-sm">
                                                        Push
                                                    </Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <input type="checkbox" id="payment-sms" className="h-4 w-4 rounded border-gray-300" />
                                                    <Label htmlFor="payment-sms" className="text-sm">
                                                        SMS
                                                    </Label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between rounded-md border p-4">
                                            <div>
                                                <p className="font-medium">Security Alerts</p>
                                                <p className="text-sm text-muted-foreground">Get notified about security events</p>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="security-email"
                                                        className="h-4 w-4 rounded border-gray-300"
                                                        defaultChecked
                                                    />
                                                    <Label htmlFor="security-email" className="text-sm">
                                                        Email
                                                    </Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="security-push"
                                                        className="h-4 w-4 rounded border-gray-300"
                                                        defaultChecked
                                                    />
                                                    <Label htmlFor="security-push" className="text-sm">
                                                        Push
                                                    </Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="security-sms"
                                                        className="h-4 w-4 rounded border-gray-300"
                                                        defaultChecked
                                                    />
                                                    <Label htmlFor="security-sms" className="text-sm">
                                                        SMS
                                                    </Label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between rounded-md border p-4">
                                            <div>
                                                <p className="font-medium">Marketing Updates</p>
                                                <p className="text-sm text-muted-foreground">Receive promotional offers and updates</p>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="marketing-email"
                                                        className="h-4 w-4 rounded border-gray-300"
                                                    />
                                                    <Label htmlFor="marketing-email" className="text-sm">
                                                        Email
                                                    </Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="marketing-push"
                                                        className="h-4 w-4 rounded border-gray-300"
                                                    />
                                                    <Label htmlFor="marketing-push" className="text-sm">
                                                        Push
                                                    </Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="marketing-sms"
                                                        className="h-4 w-4 rounded border-gray-300"
                                                    />
                                                    <Label htmlFor="marketing-sms" className="text-sm">
                                                        SMS
                                                    </Label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-end gap-2">
                                    <Button variant="outline">Reset to Default</Button>
                                    <Button>Save Preferences</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </>
    );
};

export default SettingsTabContent;