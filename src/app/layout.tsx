import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#08080a",
};

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Lift Manufacturers in Karachi, Pakistan`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "lift manufacturer Pakistan",
    "elevator company Karachi",
    "passenger lifts",
    "home lifts",
    "freight lifts",
    "hospital lifts",
    "escalators",
    "Deenar Lift Company",
  ],
  openGraph: {
    title: `${site.name} | Lift Manufacturers in Karachi, Pakistan`,
    description: site.description,
    type: "website",
  },
};

function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-500 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[#0a0a0a]"
    >
      Skip to content
    </a>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SkipLink />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
