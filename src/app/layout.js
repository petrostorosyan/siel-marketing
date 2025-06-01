import Footer from "@/components/footer/footer";
import "./globals.scss";
import Header from "@/components/header/header";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"], weight: ["variable"] });

export const metadata = {
  authors: [{ name: "SIEL Marketing Team", url: "https://sielmarketing.com" }],
  creator: "SIEL Marketing",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Digital Marketing",
    "SEO",
    "Branding",
    "Web Development",
    "Marketing Agency",
    "Social Media Marketing",
    "SIEL Marketing",
    "Business Growth",
    "Online Advertising",
    "Marketing Strategy",
  ],
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
