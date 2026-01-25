import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, StarIcon } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    // Slight upward bias instead of perfect centering
    <section className="relative min-h-[100svh] flex items-start">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      </div>

      {/* GRADIENT ORBS */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 pt-14 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div className="space-y-6">
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm w-fit">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  AI-Powered Dental Assistant
                </span>
              </div>

              {/* HEADING */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  Your dental
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  questions
                </span>
                <br />
                <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  answered instantly
                </span>
              </h1>

              {/* SUBTITLE */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
                Chat with our AI dental assistant for instant advice, book smart appointments,
                and get personalized care recommendations. Available 24/7.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <SignUpButton mode="modal">
                  <Button size="lg">
                    <MicIcon className="mr-2 size-5" />
                    Try voice agent
                  </Button>
                </SignUpButton>

                <SignUpButton mode="modal">
                  <Button size="lg" variant="outline">
                    <CalendarIcon className="mr-2 size-5" />
                    Book appointment
                  </Button>
                </SignUpButton>
              </div>

              {/* SOCIAL PROOF */}
              <div className="pt-4 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[
                    "photo-1544005313-94ddf0286df2",
                    "photo-1560250097-0b93528c311a",
                    "photo-1580489944761-15a19d654956",
                    "photo-1633332755192-727a05c4013d",
                    "photo-1598300042247-d088f8ab3a91",
                  ].map((img, i) => (
                    <Image
                      key={i}
                      src={`https://images.unsplash.com/${img}?w=100&h=100&fit=crop&crop=face`}
                      alt="User"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover ring-4 ring-background"
                    />
                  ))}
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="ml-2 text-sm font-bold">4.9/5</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trusted by <span className="font-semibold text-foreground">1,200+</span> patients
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT (IMAGE) */}
            <div className="relative flex justify-center lg:justify-end">
              <Image
                src="/hero.png"
                alt="Dental AI Assistant"
                width={600}
                height={600}
                priority
                className="w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[480px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


