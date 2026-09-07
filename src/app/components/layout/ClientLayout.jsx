import Header from "./Header";
import Footer from "./Footer";
import ChatWidget from "../ChatWidget";

export default function ClientLayout({ children }) {
  return (
    <div className="flex">
      <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50">
        <Header />
        <main className="flex-1 p-4 backdrop-blur-sm pt-36 bg-gradient-to-br from-stone-50/80 via-amber-50/80 to-orange-50/80">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </div>
  );
}
