import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthContext from "@/context/AuthContext";

const roboto = Roboto({subsets: ["latin"], weight: ["100", "400", "700", "900"]});

export const metadata: Metadata = {
    title: "Traveler",
    description: "Traveler website",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ua">
        <AuthContext>
            <body className={`${roboto.className} overflow-x-hidden bg-light`}>
            <Navbar/>
            {children}
            <Footer/>
            </body>
        </AuthContext>
        </html>
    );
}
