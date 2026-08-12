import CopyProvider from "@/components/CopyProvider";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Provider from "@/components/ui/provider";
import { copy } from "@/lib/copy";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
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
          <CopyProvider>
            <Nav />
            <main>{children}</main>
            <Footer />
          </CopyProvider>
        </Provider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
