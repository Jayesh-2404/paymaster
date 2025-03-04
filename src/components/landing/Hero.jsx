import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CreditCard, History, Users, Shield, ChevronRight, Send, Clock, Split } from "lucide-react"

export default function Heor() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Split bills, track expenses, and pay friends with ease
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Paymaster simplifies money management between friends. Send payments, track who owes what, and keep
                    a clean record of all your transactions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1.5">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative h-[450px] w-[300px] overflow-hidden rounded-xl border bg-background shadow-xl">
                  <Image
                    src="/placeholder.svg?height=900&width=600"
                    width={600}
                    height={900}
                    alt="App screenshot"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to manage money between friends
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Paymaster makes it simple to send money, split bills, and keep track of who owes what.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Send Money Instantly</h3>
                <p className="text-center text-muted-foreground">
                  Transfer money to friends with just a few taps. No fees, no hassle.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Split className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Split Bills Easily</h3>
                <p className="text-center text-muted-foreground">
                  Divide expenses evenly or customize amounts for each person in your group.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <History className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Transaction History</h3>
                <p className="text-center text-muted-foreground">
                  Keep a clear record of all your payments and requests in one place.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Group Expenses</h3>
                <p className="text-center text-muted-foreground">
                  Create groups for roommates, trips, or events to manage shared expenses.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Payment Reminders</h3>
                <p className="text-center text-muted-foreground">
                  Set reminders for recurring payments or to nudge friends who owe you.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Secure Transactions</h3>
                <p className="text-center text-muted-foreground">
                  Bank-level security ensures your financial information stays protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simple, fast, and user-friendly
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Get started with Paymaster in just a few simple steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-center">Create an account</h3>
                  <p className="text-center text-muted-foreground">
                    Sign up with your email or connect with your social accounts.
                  </p>
                </div>
                <div className="absolute right-0 top-6 hidden h-0.5 w-full bg-muted md:block md:w-1/2" />
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-center">Connect with friends</h3>
                  <p className="text-center text-muted-foreground">
                    Add friends via email, phone number, or username to start sending money.
                  </p>
                </div>
                <div className="absolute left-0 right-0 top-6 hidden h-0.5 w-full bg-muted md:block" />
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-center">Send & receive money</h3>
                  <p className="text-center text-muted-foreground">
                    Start sending payments, splitting bills, and tracking expenses with ease.
                  </p>
                </div>
                <div className="absolute left-0 top-6 hidden h-0.5 w-1/2 bg-muted md:block" />
              </div>
            </div>
          </div>
        </section>

        <section id="app-preview" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    App Preview
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Designed for simplicity and efficiency
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our intuitive interface makes it easy to manage your shared expenses and payments.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Clean, intuitive dashboard to track all your activities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Quick access to send money or request payments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Detailed transaction history with search and filter options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Group management for shared expenses</span>
                  </li>
                </ul>
                <div>
                  <Button size="lg" className="gap-1.5">
                    Download App <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-[300px] w-[150px] overflow-hidden rounded-xl border bg-background shadow-xl">
                    <Image
                      src="/placeholder.svg?height=600&width=300"
                      width={300}
                      height={600}
                      alt="App screenshot 1"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative mt-10 h-[300px] w-[150px] overflow-hidden rounded-xl border bg-background shadow-xl">
                    <Image
                      src="/placeholder.svg?height=600&width=300"
                      width={300}
                      height={600}
                      alt="App screenshot 2"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Loved by users everywhere</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  See what our users have to say about how Paymaster has simplified their financial lives.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Paymaster has completely changed how my roommates and I handle our shared expenses. No more awkward
                    conversations about who owes what!"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted p-1">
                    <div className="h-8 w-8 rounded-full bg-primary/20" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah K.</p>
                    <p className="text-xs text-muted-foreground">College Student</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "I use Paymaster for everything from splitting dinner bills to managing expenses for our annual
                    group vacation. It's a game-changer!"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted p-1">
                    <div className="h-8 w-8 rounded-full bg-primary/20" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Michael T.</p>
                    <p className="text-xs text-muted-foreground">Project Manager</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "The transaction history feature is fantastic. I can easily see who I've paid, who's paid me, and
                    what's still outstanding."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted p-1">
                    <div className="h-8 w-8 rounded-full bg-primary/20" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Jessica L.</p>
                    <p className="text-xs text-muted-foreground">Small Business Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently asked questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Everything you need to know about Paymaster.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Is Paymaster free to use?</h3>
                <p className="text-muted-foreground">
                  Yes, Paymaster is completely free for personal use. We don't charge any fees for sending money to
                  friends or splitting bills.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How secure is my financial information?</h3>
                <p className="text-muted-foreground">
                  We use bank-level encryption and security measures to ensure your financial information is always
                  protected.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How quickly do payments process?</h3>
                <p className="text-muted-foreground">
                  Most payments between Paymaster users are instant. Bank transfers typically take 1-3 business days.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Can I use Paymaster internationally?</h3>
                <p className="text-muted-foreground">
                  Currently, Paymaster is available in the US, Canada, UK, and Australia. We're working on expanding to
                  more countries soon.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How do I add money to my Paymaster account?</h3>
                <p className="text-muted-foreground">
                  You can link your bank account or debit card to fund your Paymaster account. Transfers from linked
                  accounts are free.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What if someone doesn't pay me back?</h3>
                <p className="text-muted-foreground">
                  Paymaster includes friendly reminder features that let you nudge friends about outstanding payments
                  without the awkwardness.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to simplify your payments?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join thousands of users who are already enjoying stress-free money management with friends.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1.5">
                  Download App <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-2">
            <CreditCard className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Paymaster</span>
          </div>
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Paymaster. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

