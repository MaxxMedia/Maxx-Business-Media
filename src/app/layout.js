import localFont from "next/font/local";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const inter = localFont({ src: "./fonts/inter-variable.ttf", variable: "--font-inter", weight: "100 900", display: "swap" });
const sora = localFont({ src: "./fonts/sora-variable.ttf", variable: "--font-sora", weight: "100 800", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://maxxmedia.in"),
  title: "MAXX Business Media | Creating Platforms. Building Partnerships.",
  description: "Connecting industries, ideas, and opportunities through international trade exhibitions, engineering symposiums, and technical media.",
  openGraph: { title: "MAXX Business Media", description: "Creating Platforms. Building Partnerships.", type: "website" },
};

export default function RootLayout({ children }) {
  return <html lang="en" className={inter.variable + " " + sora.variable}><body className="bg-background font-body-md text-on-surface antialiased">
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <SiteHeader />{children}<SiteFooter />
  </body></html>;
}
