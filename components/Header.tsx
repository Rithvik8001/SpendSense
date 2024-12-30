import React from "react";
import { Button } from "./ui/button";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import AnimatedGradientText from "./ui/animated-gradient-text";
import { cn } from "@/lib/utils";
function Header() {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center bg-black">
      <div className="max-w-5xl w-full mx-auto p-3 text-center space-y-3">
        <span>
          <AnimatedGradientText className="bg-transparent">
            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Introducing SpendSense
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 text-gray-400" />
          </AnimatedGradientText>
        </span>
        <h1 className="text-6xl sm:text-8xl md:text-9xl  lg:text-9xl font-extrabold text-white">
          Spend
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 text-transparent bg-clip-text">
            Sense
          </span>
        </h1>
        <h3 className="text-xl sm:text-2xl text-muted-foreground text-gray-400">
          Simplifying your spending, so you can focus on what matters!
        </h3>
        <div className="flex justify-center items-center">
          <Link href="/sign-up">
            <Button variant={"outline"}>Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
