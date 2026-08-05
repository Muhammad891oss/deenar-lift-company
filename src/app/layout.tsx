import type { Metadata } from "next";
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
