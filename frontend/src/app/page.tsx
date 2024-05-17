"use client"

// * React Imports
import React from "react";
import { useEffect, useState } from "react"


// * Framer Motion Imports
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";


// * Next Imports
import Image from "next/image";
import Link from "next/link";


// * SHADCN/UI Imports
import { buttonVariants } from "@/components/ui/button";


// * Components Imports
import Preloader from "@/components/Preloader"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HomeShowcase } from "@/components/HomeShowcase";



export default function Home() {

  // ? useState used for the Preloader
  const [isLoading, setIsLoading] = useState(true);


  // ? This useEffect asynchronously imports the `locomotive-scroll` library, creates a new instance of
  // ? `LocomotiveScroll` and runs this setup logic when the component mounts. Since it has an empty dependency
  // ? array, it only runs once when the component mounts.
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default
        const locomotiveScroll = new LocomotiveScroll();

        // ? set isLoading state to false (removing the preloader) after 2000ms.
        setTimeout( () => {
          setIsLoading(false);
          document.body.style.cursor = "default";
          window.scrollTo(0,0);
        }, 2000)

      }
    )()
  }, [])

  return (
    <>
      {/* AnimatePresence */}
      <AnimatePresence mode="wait">
        {/* Render the `Preloader` component if isLoading is true. */}
        {isLoading && <Preloader />}
      </AnimatePresence>
      <main className="absolute z-10 w-screen">
        {/* Above the Fold */}
        <div className="flex flex-col xl:flex-row column-2 h-screen items-center">
          <div className="text-wrap mx-auto mt-[100px] xl:mt-0 xl:pl-10 flex flex-col justify-start">
            <HeroHighlight>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl md:text-4xl lg:text-6xl font-bold max-w-4xl leading-relaxed lg:leading-snug mb-5"
              >
                Delivering <br />
                <Highlight className="text-black dark:text-white">
                  Exceptional
                </Highlight>{" "}
                IT <br /> Support and Solutions
              </motion.h1>
            </HeroHighlight>
            <p className="text-xl mb-10">
              Partner with us for essential business support, including IT, web{" "}
              <br /> development, brand identity, online advertising on Google{" "}
              <br /> and Social Media, and more...
            </p>
            <div className="flex justify-start">
              <Link
                href="/"
                className={buttonVariants({ variant: "accent" }) + " mr-4"}
              >
                Learn More
              </Link>
              <Link href="/" className={buttonVariants({ variant: "outline" })}>
                Get in Touch!
              </Link>
            </div>
          </div>
          <div className="flex mx-auto">
            <ContainerScroll titleComponent={<></>}>
              <Image
                src={`/linear.jpg`}
                alt="hero"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                draggable={false}
              />
            </ContainerScroll>
          </div>
        </div>

        {/* Below the Fold */}
        {/*  */}

        {/* Homepage Services Showcase (Sticky Scroll Reveal Effect) */}
        <HomeShowcase />
      </main>
    </>
  );

}