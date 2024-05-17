// ? Framer-Motion Imports
import { motion } from "framer-motion";

import { height } from "@/components/NavMenu/anim";

// ? React Imports
import React from "react";

// ? Next Imports
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// ? Component Imports
import { cn } from "@/lib/utils";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/themes/ThemeToggle";
import LanguageChanger from "@/components/LanguageChanger";
import { WebServices, HwServices, ITServices } from "@/components/NavMenu/links";

export default function NavMdDropdown() {

    const pathname = usePathname();

    return (
      <motion.div
        variants={height}
        initial="initial"
        animate="enter"
        exit="exit"
        className="xl:hidden overflow-auto w-screen h-screen bg-p-neutral-black absolute left-0 top-[55px] m-0"
      >
        <div className="flex gap-[50px] mb-[10px]">
          <div className="flex flex-col lg:flex-row justify-items-center lg:justify-between">
            <span className="grid gap-3 p-4 grid-cols-1 justify-items-center lg:flex xl:hidden lg:p-0 pl-5 w-screen">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={
                      `${
                        pathname == "/el/" || "/en/" || "/" ? "underline " : ""
                      }` + navigationMenuTriggerStyle()
                    }
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem className="hidden lg:list-item">
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="test">
                  <ul className="grid gap-3 p-4 md:grid-cols-3 w-screen">
                    <div>
                      <h1 className="pl-3 pb-1 font-bold underline">
                        Web Services
                      </h1>
                      {WebServices.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                          className="ml-3"
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </div>
                    <div>
                      <h1 className="pl-3 pb-1 font-bold underline">
                        IT Solutions
                      </h1>
                      {HwServices.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                          className="break-after-column ml-3"
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </div>
                    <div>
                      <h1 className="pl-3 pb-1 font-bold underline">
                        Hardware Services
                      </h1>
                      {ITServices.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                          className="ml-3"
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </div>
                    <div className="md:hidden">
                      <li className="row-span-3 h-full">
                        <NavigationMenuItem asChild>
                          <span className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            <h1 className="mt-4 text-sm font-extrabold mb-5 text-p-brand-teal">
                              Featured from the Blog
                            </h1>
                            <Image
                              className="mb-9"
                              src="/placeholder.png"
                              alt="Latest blog post thumbnail"
                              height={105}
                              width={160}
                            ></Image>
                            <h3 className="mb-3 font-bold">Article Title</h3>
                            <p className="mb-7 text-sm leading-tight text-muted-foreground">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Fugit, animi distinctio deleniti...
                            </p>
                            <a
                              href="/"
                              className="text-sm mb-3 underline text-p-brand-gray"
                            >
                              Read More...
                            </a>
                            <a href="/" className=" underline flex">
                              <h2 className="text-p-brand-teal">
                                See more articles!
                              </h2>
                              <Image
                                src="/icons/chevron-right-solid-teal.svg"
                                alt="chevron pointing to the right"
                                className="ml-1 stroke-red-300"
                                width={10}
                                height={10}
                              />
                            </a>
                          </span>
                        </NavigationMenuItem>
                      </li>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="lg:hidden">
                <Link href="/about-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Portfolio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </span>
            <span className="flex flex-col gap-4 justify-center md:flex-row xl:hidden p-5 lg:p-0 mt-1 relative lg:pl-0 lg:mt-0 lg:absolute lg:right-0">
              <span className="flex justify-center">
                <NavigationMenuItem className="mx-2">
                  <Link href="" legacyBehavior passHref>
                    <ThemeToggle></ThemeToggle>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="mx-2">
                  {/* <Link href="" legacyBehavior passHref> */}
                  <LanguageChanger />
                  {/* </Link> */}
                </NavigationMenuItem>
              </span>
              <NavigationMenuItem className="flex justify-center lg:list-item mx-2">
                <Link href="" legacyBehavior passHref>
                  <Link
                    href="/"
                    className={
                      buttonVariants({ variant: "outline" }) +
                      " w-[80%] md:w-auto"
                    }
                  >
                    Login
                  </Link>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex justify-center lg:item-list mx-2 lg:mr-5">
                <Link
                  href="/"
                  className={
                    buttonVariants({ variant: "accent" }) +
                    " w-[80%] md:w-auto"
                  }
                >
                  Get a Quote!
                </Link>
              </NavigationMenuItem>
            </span>
          </div>
        </div>
      </motion.div>
    );
}

const ListItem: any = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";