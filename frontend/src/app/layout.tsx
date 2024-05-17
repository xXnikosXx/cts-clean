// ? Next Imports
import type { Metadata } from "next";

// ? Font Imports
import { JetBrains_Mono } from "next/font/google";

// ? StyleSheet Imports
import "./globals.css";

// ? Components Imports
import CursorFollow from "@/components/CursorFollow";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/themes/ThemeProvider";
import { DotsMotionBackground } from "@/components/Background";


// ? Font init
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

// ? Layout Metadata
export const metadata: Metadata = {
  title: "Custom Tech Solutions",
  description: "Delivering exceptional IT services to cover any business need.",
};



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html>
      <body className={jetBrainsMono.className + " bg-s-bg-primary"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <CursorFollow /> */}
          <NavMenu />
          <DotsMotionBackground>
            {/* <div className="h-[70px]"></div> */}
            {children}
          </DotsMotionBackground>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
