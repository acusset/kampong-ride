import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Provider from "@/components/ui/provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";

export const metadata: Metadata = {
  title: "Kampung Ride — skip the surge, ride with your neighbours",
  description:
    "Kampung Ride matches you with neighbours from your own estate who are already driving to work. Tag along, chip in for the ride, skip the surge pricing.",
};

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-archivo",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable} suppressHydrationWarning>
      <body>
        <Provider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </Provider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
