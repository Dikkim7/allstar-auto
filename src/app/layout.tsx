import "./globals.css";
import { Inter, Montserrat_Alternates } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const heading = Montserrat_Alternates({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${heading.variable}`}>
      <body>{children}</body>
    </html>
  );
}