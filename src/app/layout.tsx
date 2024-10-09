import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "League of Legends Information App",
  description: "League of Legends Information App",
  icons: {
    icon: "https://static.developer.riotgames.com/img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} dark`}>{children}</body>
    </html>
  );
}
