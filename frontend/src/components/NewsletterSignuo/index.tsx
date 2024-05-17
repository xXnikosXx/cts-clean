"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function NewsletterSignup() {
  return (
    <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-p-brand-teal  text-center font-sans font-bold">
          Follow Our Newsletter!
        </h1>
        <p></p>
        <p className="max-w-2xl mx-auto my-2 text-lg text-center relative z-10 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur id
          doloribus nisi iste fuga est ducimus quam suscipit vero itaque? Eos
          maxime quae aspernatur atque deserunt eum nulla itaque fugiat.
        </p>
        <div className="flex relative items-center space-x-2 mb-10 z-30">
          <Input type="email" placeholder="Email" />
          <Button variant="accent" type="submit">
            Subscribe
          </Button>
        </div>
        <p className="text-neutral-400 max-w-2xl mx-auto my-2 text-sm text-center relative z-10 mb-10">
          By signing up for our newsletter, you <b>automatically</b> accept our
          <br />{" "}
          <Link href="/" className={buttonVariants({ variant: "linkTeal" })}>
            Terms and Conditions.
          </Link>
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
