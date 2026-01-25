import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

function HowItWorks() {
  return (
    <section className="relative pt-20 pb-16 px-6 z-10 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-5">
          <ZapIcon className="size-4 text-primary" />
          <span className="text-sm font-medium text-primary">Simple Process</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Three steps to
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            better dental health
          </span>
        </h2>

        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Our streamlined process makes dental care accessible, convenient, and stress-free for everyone.
        </p>
      </div>

      {/* STEPS */}
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 hidden lg:block" />

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-8">
          {[ 
            { num: 1, title: "Ask Questions", img: "/audio.png", text: "Chat with our AI assistant about any dental concerns." },
            { num: 2, title: "Get Expert Advice", img: "/brain.png", text: "Receive personalized recommendations based on thousands of dental cases." },
            { num: 3, title: "Book & Get Care", img: "/calendar.png", text: "Schedule with verified dentists and track your progress seamlessly." },
          ].map((step) => (
            <div key={step.num} className="relative group">
              <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-7 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
                <div className="absolute -top-4 left-7 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                  {step.num}
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Image src={step.img} alt={step.title} width={36} height={36} />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <SignUpButton mode="modal">
          <Button size="lg">
            <ArrowRightIcon className="mr-2 size-5" />
            Get started now
          </Button>
        </SignUpButton>
      </div>
    </section>
  );
}

export default HowItWorks;
