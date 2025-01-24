/* eslint-disable react/react-in-jsx-scope */
import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barba Brutal",
  description: "A barbearia mais brutal da cidade!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${bebas.className} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
