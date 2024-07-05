import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TrekEase",
  description:
    "TrekEase is all about making your treks effortless. Plan and explore the world with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-9129390699994968">
        <link rel="icon" href="/" />
      </head>
      <body>
        <Navbar />
        <main className=" relative overflow-hidden">

          {children}

        </main>
        <Footer />


      </body>
    </html>
  );
}
