import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BootstrapClient } from "./components/BootstrapClientWrapper";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Clemens Electric - Powering Your Solar & Electric Solutions",
  description:
    "Clemens Electric powers the Capital District with trusted solar, electrical, generator & EV charging solutions for homes and businesses",
  openGraph: {
    title: "Clemens Electric - Powering Your Solar & Electric Solutions",
    description:
      "Clemens Electric powers the Capital District with trusted solar, electrical, generator & EV charging solutions for homes and businesses",
    url: "https://clemenselectric.com",
    siteName: "Clemens Electric",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <BootstrapClient />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
