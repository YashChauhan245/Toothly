import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { CheckCircleIcon } from "lucide-react";

function PricingSection() {
  return (
    <section className="relative pt-16 pb-20 px-6 overflow-hidden bg-gradient-to-b from-background via-muted/3 to-background">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#000_50%,transparent_85%)] opacity-20" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.06),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-5">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Simple Pricing</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Choose your
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              AI dental plan
            </span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Book appointments for free and upgrade for unlimited AI consultations.
            Perfect for ongoing dental care.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* FREE */}
          <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Free</h3>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-muted-foreground mb-1 text-sm">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Essential dental appointment booking
                </p>
              </div>

              <SignUpButton mode="modal">
                <Button className="w-full py-2.5 rounded-xl font-semibold">
                  Get Started Free
                </Button>
              </SignUpButton>

              <div className="space-y-3">
                {[
                  "Unlimited appointment booking",
                  "Find dentists in your area",
                  "Basic text chat support",
                  "Appointment reminders",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI BASIC */}
          <div className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                Most Popular
              </div>
            </div>

            <div className="bg-gradient-to-br from-card/95 to-card/70 backdrop-blur-xl rounded-3xl p-6 border-2 border-primary/30 shadow-xl">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">AI Basic</h3>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      $9
                    </span>
                    <span className="text-muted-foreground mb-1 text-sm">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI consultations + appointment booking
                  </p>
                </div>

                <Button className="w-full py-2.5 rounded-xl font-semibold shadow-md">
                  Start AI Basic
                </Button>

                <div className="space-y-3">
                  {[
                    "Everything in Free",
                    "10 AI voice calls per month",
                    "AI dental guidance & advice",
                    "Symptom assessment",
                    "Priority support",
                    "Call history & recordings",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-4 h-4 text-primary mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AI PRO */}
          <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">AI Pro</h3>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-bold">$19</span>
                  <span className="text-muted-foreground mb-1 text-sm">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Unlimited AI consultations
                </p>
              </div>

              <Button variant="outline" className="w-full py-2.5 rounded-xl font-semibold">
                Upgrade to AI Pro
              </Button>

              <div className="space-y-3">
                {[
                  "Everything in AI Basic",
                  "Unlimited AI voice calls",
                  "Advanced AI dental analysis",
                  "Personalized care plans",
                  "24/7 priority AI support",
                  "Detailed health reports",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
