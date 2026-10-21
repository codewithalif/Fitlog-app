import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import CartProvider from "./context/CartContext";
import Footer from "./components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} pt-[var(--navbar-height)]   `}>
        <CartProvider>
          <ToastContainer
            toastStyle={{
              maxWidth: '200px',
              minHeight: '50px',
              fontSize: '13px',
              padding: '8px 12px'

            }}
          />
          <Navbar />
          {children}

          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}