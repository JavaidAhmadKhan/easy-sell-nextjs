import type { Metadata } from "next";
import { Nunito, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Nunito({ subsets: ["latin"] });
const cuteFont = Josefin_Sans({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "Easy Sell",
  description: "Sell your online products easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header font={cuteFont.className} />
        <hr className="h-0.5 bg-gray-100 border-0" />
        <div className="bg-gray-951 py-12">{children}</div>
        <Footer font={cuteFont.className} />
      </body>
    </html>
  );
}
