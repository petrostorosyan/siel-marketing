import Footer from "@/components/footer/footer";
import "./globals.scss";
import Header from "@/components/header/header";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"], weight: ["variable"] });

export const metadata = {
  title: "Siel Marketing",
  description: "Siel Marketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
