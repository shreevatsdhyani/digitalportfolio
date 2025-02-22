import { EmailJsInitializer } from "@/components/emailjs-initializer";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import type React from "react";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shreevats Dhyani",
  description: "Machine Learning / Data Science Engineer & Software Developer",
  icons: {
    icon: [
      { 
        url: "/titlepic.jpg",
        type: "image/jpg",
        sizes: "any", // Ensures compatibility
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <EmailJsInitializer />
          <Navigation />
          {children}
          <Toaster position="top-center" /> {/* Added positioning */}
        </ThemeProvider>
      </body>
    </html>
  );
}