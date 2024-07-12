import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "./Components/Navbar";
import StyledComponentsRegistry from "./lib/registry";
import Footer from "./Components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Idealab Language School - Bridging Cultural Gaps Through Language Education",
  description: "Idealab Language School offers engaging, interactive, and comprehensive language programs tailored for young learners to bridge cultural gaps and preserve linguistic heritage. Join us to connect with your roots and traditions."
}
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
