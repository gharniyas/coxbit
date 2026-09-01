import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/layout/ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata = {
  title: "COXBIT",
  description: "COXBIT - Your trusted technology partner",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriweather.variable} font-sans antialiased bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
