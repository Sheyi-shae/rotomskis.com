import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { FloatingCTA } from "@/custom-components/floation-cta";
import { ScrollProgress } from "@/custom-components/scroll-progress";
import { Navigation } from "@/custom-components/navigation";
import { Footer } from "@/custom-components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Strategic Business Expansion | Global Market Expert",
  description:
    "Connecting product-first companies with high-growth markets",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navigation />
        <ScrollProgress />
        {children}
        <FloatingCTA />
        <Footer />
        
      </body>
    </html>
  );
}
