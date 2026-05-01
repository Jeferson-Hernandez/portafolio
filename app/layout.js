import Navbar from "@/components/navbar";
import "./globals.css";
import Scene from "@/components/scene";
import { Footer } from "@/components/footer";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
    title: "Jeferson Hernandez - Portfolio",
    description: "Personal portfolio website for Jeferson Hernandez",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className=" bg-dark text-white px-4 pt-14 pb-4 md:w-3xl md:mx-auto">
                <Navbar />
                <Scene />
                <section className=" sm:w-117.5 sm:mx-auto md:w-150 px-4">
                    {children}
                    <Footer />
                </section>
            </body>
        </html>
    );
}
