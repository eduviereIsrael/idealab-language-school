import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import StyledComponentsRegistry from "./lib/registry";
import Footer from "./Components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
        <Navbar />
        {children}
        <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
