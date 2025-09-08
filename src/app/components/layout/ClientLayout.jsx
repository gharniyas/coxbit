"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const noLayout = ["/login", "/register", "/forgot-password"].includes(
    pathname
  );

  return (
    <div className={noLayout ? "flex flex-col min-h-screen w-full" : "flex"}>
      <div
        className={
          noLayout
            ? "flex-1 flex flex-col min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
            : `flex flex-col min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50`
        }
      >
        {!noLayout && <Header />}
        <main
          className={`flex-1 p-4 bg-gradient-to-br from-slate-50/80 via-blue-50/80 to-indigo-50/80 backdrop-blur-sm ${
            noLayout ? "pt-0" : "pt-20"
          }`}
        >
          {children}
        </main>
        {!noLayout && <Footer />}
      </div>
    </div>
  );
}
