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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://www.schema.org",
    "@type": "Electrician",
    name: "Clemens Electric",
    url: "https://www.clemenselectric.com/",
    description:
      "Clemens Electric powers the Capital District with trusted solar, electrical, generator & EV charging solutions for homes and businesses",
    address: {
      "@type": "PostalAddress",
      streetAddress: "54 First Dyke Road, Unit 2",
      addressLocality: "Averill Park",
      addressRegion: "NY",
      postalCode: "12018",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-518-617-1016",
      contactType: "Customer Service",
      areaServed: "US",
      availableLanguage: "English",
    },
  };
  return (
    <html lang="en">
      <head>
        <title>
          Clemens Electric - Powering Your Solar & Electric Solutions
        </title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={montserrat.className}>
        <BootstrapClient />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
