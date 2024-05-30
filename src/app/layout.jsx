import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ReduxProvider from "../../redux/provider";
import { Toaster } from "react-hot-toast";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Kicks - Buy Your Desired Product",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toaster position="top-center" />
      <body className={rubik.className}>
        <ReduxProvider>
          <div className="bg-[#E7E7E3] p-5">
            <Header />
          </div>
          {children}
          <div className="bg-[#E7E7E3] ">
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
