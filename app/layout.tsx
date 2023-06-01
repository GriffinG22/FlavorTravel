import "./globals.css";
import { Sunflower } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";

const sunflower = Sunflower({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "Flavor",
  description: "Flavor Travel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sunflower.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
