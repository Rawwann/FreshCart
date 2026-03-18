import type { Metadata } from "next";
import { Exo } from "next/font/google";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { Toaster } from "sonner";
import Provider from "@/components/shared/Provider";
import { getUserToken } from "@/utils/server.utils";

const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "FreshCart E-commerce",
  description: "Your one-stop destination for quality products.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${exo.variable} font-sans antialiased`}>
        <Provider>
          <Navbar />
          <Toaster />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
