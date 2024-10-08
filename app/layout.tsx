import 'moment/locale/pt-br';
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const nunito = Nunito({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Github Blog",
    description: "Projeto Github Blog",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body
                className={`${nunito.className} antialiased bg-project-base-background`}
            >
              <Header />
                {children}
            </body>
        </html>
    );
}
