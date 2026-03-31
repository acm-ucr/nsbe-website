import "./globals.css";
import { Inter } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "National Society of Black Engineers",
  description: "National Society of Black Engineers(NSBE) @ UCR",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ReactQueryClientProvider>
          {children}
          <Footer />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
