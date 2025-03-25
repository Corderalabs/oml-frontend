"use client";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import HeaderContextProvider from "@/components/header/hook/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create a client
const queryClient = new QueryClient();

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (section: string) => {
    if (pathname === "/") {
      // Already on the homepage, just update the hash
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage first
      router.push(`/#${section}`);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <HeaderContextProvider>
        <div className='flex flex-col h-full'>
          <Header handleNavClick={handleNavClick} />

          <main className='flex-grow bg-white'>{children}</main>
          <ChatBot />

          <Footer handleNavClick={handleNavClick} />
        </div>
        <ToastContainer />
      </HeaderContextProvider>
    </QueryClientProvider>
  );
}
