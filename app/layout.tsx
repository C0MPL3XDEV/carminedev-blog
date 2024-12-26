import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google"; // Import the Geist UI font and Inter UI font
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ // Inter UI font
  subsets: ["latin"], // Include the Latin subset
  variable: "--font-sans", // Set the variable to --font-sans
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)} // Set the font to Inter UI
      >
        {children}
      </body>
    </html>
  );
}
