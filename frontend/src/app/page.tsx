"use client"

// * React Imports
import React from "react";
import { useEffect, useState, useRef } from "react"


// * Framer Motion Imports
import { AnimatePresence } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";


// * Next Imports
import Image from "next/image";
import Link from "next/link";


// * SHADCN/UI Imports
import { buttonVariants } from "@/components/ui/button";


// * Components Imports
import Preloader from "@/components/Preloader"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { NewsletterSignup } from "@/components/NewsletterSignuo";
import { HomeMeteorsCard } from "@/components/MeteorsCard";
import { Map } from "@/components/Mao";



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


  // ? Code below used for circle container (see before footer)

      const container = useRef(null);
      const { scrollYProgress } = useScroll({
        target: container,

        offset: ["start end", "end start"],
      });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);;

  return (
    <>
      {/* AnimatePresence */}
      <AnimatePresence mode="wait">
        {/* Render the `Preloader` component if isLoading is true. */}
        {isLoading && <Preloader />}
      </AnimatePresence>
      <main className="relative z-10">
        {/* Above the Fold */}
        <section className="flex flex-col xl:flex-row column-2 h-screen items-center">
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
                  delay: 2.7,
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
            {/* <p className="text-xl mb-10">
              Partner with us for essential business support, including IT, web{" "}
              <br /> development, brand identity, online advertising on Google{" "}
              <br /> and Social Media, and more...
            </p> */}
            <motion.p
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
                delay: 2.7,
              }}
              className="text-xl mb-10"
            >
              Partner with us for essential business support, including IT, web{" "}
              <br /> development, brand identity, online advertising on Google{" "}
              <br /> and Social Media, and more...
            </motion.p>
            <motion.div
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
                delay: 2.7,
              }}
              className="flex justify-start"
            >
              <Link
                href="/"
                className={buttonVariants({ variant: "accent" }) + " mr-4"}
              >
                Learn More
              </Link>
              <Link href="/" className={buttonVariants({ variant: "outline" })}>
                Get in Touch!
              </Link>
            </motion.div>
          </div>
          <motion.div
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
              delay: 2.7,
            }}
            className="flex mx-auto"
          >
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
          </motion.div>
        </section>

        {/* Below the Fold */}
        {/*  */}
        {/* IT Support Section */}
        <section className="mb-32">
          <div className="flex column-2 items-center">
            <div className="w-[50%] flex justify-center">
              <HomeMeteorsCard />
            </div>
            <div className="m-14 text-wrap w-[50%]">
              <h6>Exceptional</h6>
              <h1 className="text-6xl font-bold mb-5 leading-tight">
                Efficient IT Support <br /> Services for Your <br /> Business
              </h1>
              <p className="text-xl mb-12">
                Get reliable IT support for all your business's needs. We are
                ready to <br /> assist you with any technical issues, ensuring
                smooth operations and <br /> maximum productivity.
              </p>
              <div className="flex column-2 mb-12">
                <div>
                  <h4 className="text-2xl font-bold mb-3">Expert Assistance</h4>
                  <p className="mr-10">
                    We provide comprehensive IT support solutions tailored to
                    your business.
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">Custom Solutions</h4>
                  <p className="mr-10">
                    We offer personalized IT support services to meet your
                    specific business requirements.
                  </p>
                </div>
              </div>
              <div className="flex column-2">
                <Link
                  href="/"
                  className={buttonVariants({ variant: "outline" }) + " mr-4"}
                >
                  Learn More
                </Link>
                <Link
                  href="/"
                  className={buttonVariants({ variant: "noOutline" })}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/*  */}
        {/* More Services Section */}
        <section className="mb-32">
          <div className="columns-1 text-center">
            <h6 className="text-lg font-semibold mb-5">
              Transform Your Business with Innovative Solutions
            </h6>
            <h1 className="text-6xl font-bold mb-10">
              Customized Solutions for <br /> Your Business
            </h1>
            <p className="text-2xl mb-24">
              At our company, we offer a wide range of services to help
              businesses <br /> thrive in the digital world. From custom app
              development to brand <br /> identity and SEO services, we have the
              expertise to meet all your <br /> needs.
            </p>
          </div>
          <div className="flex text-center mb-12">
            <div className="p-10 basis-1/3">
              <h2 className="text-3xl font-bold mb-7">
                Stay Connected Anywhere
              </h2>
              <p className="text-lg">
                Remote Work / Hybrid Solutions: Adapt to the changing work
                environment and enable your team to work from anywhere with our
                remote work and hybrid solutions.
              </p>
            </div>
            <div className="p-10 basis-1/3">
              <h2 className="text-3xl font-bold mb-7">
                Secure Your Online Presence
              </h2>
              <p className="text-lg">
                Automation Solutions: Streamline your business processes and
                increase efficiency with our automation solutions.
              </p>
            </div>
            <div className="p-10 basis-1/3">
              <h2 className="text-3xl font-bold mb-7">
                Boost Your Online Visibility
              </h2>
              <p className="text-lg">
                Brand Identity: Stand out from the competition with a unique and
                memorable brand identity that resonates with your target
                audience.
              </p>
            </div>
          </div>
          <div className="flex justify-center column-2">
            <Link
              href="/"
              className={
                buttonVariants({ variant: "outline", size: "xl" }) + " mr-4"
              }
            >
              Learn More
            </Link>
            <Link
              href="/"
              className={buttonVariants({ variant: "noOutline", size: "xlNB" })}
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/*  */}
        {/* Newsletter Signup Form */}
        <section className="mb-32 w-[90vw] relative left-[5vw] border-4 border-p-brand-grey bg-s-bg-primary">
          <NewsletterSignup />
        </section>

        {/*  */}
        {/* Contact Info Section */}
        <section className="p-16">
          <div className="mb-24">
            <h6 className="text-md mb-5">Get in touch!</h6>
            <h1 className="text-6xl font-bold mb-5">Where to find us:</h1>
            <p className="text-lg">
              Have a question or need a quote? Contact us today!
            </p>
          </div>
          <div className="flex ml-32">
            <div className="flex flex-col flex-1">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-3">Email</h2>
                <p className="text-lg mb-3">Shoot us an email</p>
                <Link
                  href="mailto://hello@ctsolutions.gr/"
                  className={buttonVariants({
                    variant: "linkTealLg",
                    size: "none",
                  })}
                >
                  hello@ctsolutions.gr
                </Link>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-3">Phone</h2>
                <p className="text-lg mb-3">Give us a call</p>
                <Link
                  href="tel://00302105621995"
                  className={buttonVariants({
                    variant: "linkTealLg",
                    size: "none",
                  })}
                >
                  (30)210-56-21-995
                </Link>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-3">Office</h2>
                <p className="text-lg mb-3">
                  Andrea Dimitriou 19, Agia Varvara,
                  <br /> 12351, Attica, GR
                </p>
                <Link
                  href=""
                  className={buttonVariants({
                    variant: "linkTealLg",
                    size: "none",
                  })}
                >
                  Open map
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <Map />
            </div>
          </div>
        </section>

        {/*  */}
        {/* Circle Container */}
        
      </main>
    </>
  );

}