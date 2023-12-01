import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Code Board",
  description:
    "Your go to place for code snippets, for developers created by developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <Navbar/>
        <main className="relative overflow-hidden min-h-screen flex flex-col items-center">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
