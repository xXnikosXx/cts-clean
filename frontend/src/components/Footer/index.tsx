// ? Next Imports
import Image from "next/image";
import Link from "next/link";

// ? Component Imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";

// ? Icon Imports
import { FaWhatsapp, FaXTwitter, FaInstagram, FaThreads, FaYoutube, FaFacebookMessenger, FaViber } from "react-icons/fa6"



export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col md:flex-row flex-wrap pt-5 md:ml-10">
        <div className="hidden md:flex lg:hidden xl:flex flex-1 justify-center items-start">
          <Image src="/logo.png" alt="logo" width={127} height={55} />
        </div>
        <div className="flex flex-1 flex-col items-center md:items-start mb-5 md:mb-0 xl:ml-10">
          <h3 className="text-lg font-bold mb-6">About Us</h3>
          <Link className="text-p-brand-teal mb-3" href="">
            Services
          </Link>
          <Link className="text-p-brand-teal mb-3" href="">
            Contact Us
          </Link>
          <Link className="text-p-brand-teal mb-3" href="">
            FAQs
          </Link>
          <Link className="text-p-brand-teal mb-3" href="">
            Blog
          </Link>
          <Link className="text-p-brand-teal mb-3" href="">
            Testimonials
          </Link>
        </div>
        <div className="flex flex-1 flex-col items-center md:items-start mb-5 md:mb-0 xl:ml-10">
          <h3 className="text-lg font-bold mb-6">Partners</h3>
          <Link className="text-p-brand-teal mb-3" href="">
            Support
          </Link>
          <Link className="text-p-brand-teal mb-3" href="">
            Terms of Use
          </Link>
          <Link className="text-p-brand-teal mb-3" href="">
            Privacy Policy
          </Link>
          <Link className="text-p-brand-teal mb-3" href="">
            Sitemap
          </Link>
          <Link className="text-p-brand-teal mb-3" href="">
            Career
          </Link>
        </div>
        <div className="flex flex-1 flex-col items-center md:items-start mb-10 md:mb-0 xl:ml-10">
          <h3 className="text-lg font-bold mb-6">News</h3>
          <Link className="text-p-brand-teal mb-3" href="">
            Events
          </Link>
          <Link className="text-p-brand-teal mb-3" href="">
            Resources
          </Link>
          <Link className="text-p-brand-teal mb-3" href="">
            Downloads
          </Link>
          <Link className="text-p-brand-teal mb-3" href="">
            Case Studies
          </Link>
          <Link className="text-p-brand-teal mb-3" href="">
            Customer Stories
          </Link>
        </div>
        <br className="sm:hidden md:block lg:hidden" />
        <div className="w-full lg:w-auto">
          <div className="p-10 xl:mr-24 text-wrap">
            <h3 className="text-lg font-bold mb-6">Subscribe</h3>
            <p className="mb-5">
              Join our mailing list for the latest updates and <br />{" "}
              promotions!
            </p>
            <div className="flex relative items-center space-x-2 mb-5 z-30">
              <Input type="email" placeholder="Enter your email" />
              <Button variant="outline" type="submit">
                Subscribe
              </Button>
            </div>
            <p className="text-neutral-400 max-w-2xl mx-auto my-2 text-sm text-center relative z-10">
              By signing up for our newsletter, you <b>automatically</b> <br />{" "}
              accept our
              <Link
                href="/"
                className={buttonVariants({ variant: "linkTeal" })}
              >
                Terms and Conditions.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 xl:hidden justify-self-end flex-wrap justify-center items-center mx-10">
        <Link href="/" className={buttonVariants({ variant: "none" })}>
          <FaWhatsapp
            className="text-4xl ml-3 text-[#25D366] grayscale hover:grayscale-0"
            style={{ transition: "filter 0.2s" }}
          />
        </Link>
        <Link href="/" className={buttonVariants({ variant: "none" })}>
          <FaXTwitter
            className="text-4xl ml-3 text-p-neutral-light hover:text-p-neutral-white"
            style={{ transition: "filter 0.2s" }}
          />
        </Link>
        <Link href="/" className={buttonVariants({ variant: "none" })}>
          <FaInstagram
            className="text-4xl ml-3 fill-ig grayscale hover:grayscale-0"
            style={{ transition: "filter 0.2s" }}
          />
        </Link>
        <Link href="/" className={buttonVariants({ variant: "none" })}>
          <FaThreads
            className="text-4xl ml-3 text-p-neutral-light hover:text-p-neutral-white"
            style={{ transition: "filter 0.2s" }}
          />
        </Link>
        <Link href="/" className={buttonVariants({ variant: "none" })}>
          <FaYoutube
            className="text-4xl ml-3 text-[#FF0000] grayscale hover:grayscale-0"
            style={{ transition: "filter 0.2s" }}
          />
        </Link>
        <Link href="/" className={buttonVariants({ variant: "none" })}>
          <FaFacebookMessenger
            className="text-4xl ml-3  fill-fm grayscale hover:grayscale-0"
            style={{ transition: "filter 0.2s" }}
          />
        </Link>
        <Link href="/" className={buttonVariants({ variant: "none" })}>
          <FaViber
            className="text-4xl ml-3 text-[#7360f2] grayscale hover:grayscale-0"
            style={{ transition: "filter 0.2s" }}
          />
        </Link>
      </div>
      <hr className="mt-10" />
      <div className="grid grid-rows-1 grid-cols-2">
        <div className="text-nowrap justify-self-start flex-col flex m-10 text-sm md:text-lg lg:text-md">
          <p className="mb-5 xl:mb-0">
            Made with ❤️ by Custom Tech Solutions.
            <br className="xl:hidden" /> &#169;2024 - All Rights Reserved.
          </p>
          <div className="flex flex-col lg:flex-row lg:gap-5 text-md">
            <Link className="text-p-brand-teal mb-3 xl:mb-0" href="">
              <u>Privacy Policy</u>
            </Link>
            <Link className="text-p-brand-teal mb-3 xl:mb-0" href="">
              <u>Terms of Service</u>
            </Link>
            <Link className="text-p-brand-teal mb-3 xl:mb-0" href="">
              <u>Cookie Settings</u>
            </Link>
            <Link className="text-p-brand-teal mb-3 xl:mb-0" href="">
              <u>Sitemap</u>
            </Link>
          </div>
        </div>
        <div className="hidden xl:flex justify-self-end flex-wrap justify-end items-center mr-5">
          <Link href="/" className={buttonVariants({ variant: "none" })}>
            <FaWhatsapp
              className="text-3xl 2xl:text-4xl ml-1 text-[#25D366] grayscale hover:grayscale-0"
              style={{ transition: "filter 0.2s" }}
            />
          </Link>
          <Link href="/" className={buttonVariants({ variant: "none" })}>
            <FaXTwitter
              className="text-3xl 2xl:text-4xl ml-1 text-p-neutral-light hover:text-p-neutral-white"
              style={{ transition: "filter 0.2s" }}
            />
          </Link>
          <Link href="/" className={buttonVariants({ variant: "none" })}>
            <FaInstagram
              className="text-3xl 2xl:text-4xl ml-1 fill-ig grayscale hover:grayscale-0"
              style={{ transition: "filter 0.2s" }}
            />
          </Link>
          <Link href="/" className={buttonVariants({ variant: "none" })}>
            <FaThreads
              className="text-3xl 2xl:text-4xl ml-1 text-p-neutral-light hover:text-p-neutral-white"
              style={{ transition: "filter 0.2s" }}
            />
          </Link>
          <Link href="/" className={buttonVariants({ variant: "none" })}>
            <FaYoutube
              className="text-3xl 2xl:text-4xl ml-1 text-[#FF0000] grayscale hover:grayscale-0"
              style={{ transition: "filter 0.2s" }}
            />
          </Link>
          <Link href="/" className={buttonVariants({ variant: "none" })}>
            <FaFacebookMessenger
              className="text-3xl 2xl:text-4xl ml-1  fill-fm grayscale hover:grayscale-0"
              style={{ transition: "filter 0.2s" }}
            />
          </Link>
          <Link href="/" className={buttonVariants({ variant: "none" })}>
            <FaViber
              className="text-3xl 2xl:text-4xl ml-1 text-[#7360f2] grayscale hover:grayscale-0"
              style={{ transition: "filter 0.2s" }}
            />
          </Link>
        </div>
      </div>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-settings h-0"
      >
        <defs>
          <linearGradient id="ig-lin">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-settings h-0"
      >
        <defs>
          <linearGradient id="fm-lin">
            <stop offset="0%" stopColor="#00c6ff" />
            <stop offset="100%" stopColor="#0078ff" />
          </linearGradient>
        </defs>
      </svg>
    </footer>
  );
}
