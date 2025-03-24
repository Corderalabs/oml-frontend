"use client";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import HeaderContextProvider from "@/components/header/hook/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create a client
const queryClient = new QueryClient();

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <HeaderContextProvider>
        <div className='flex flex-col h-full'>
          <Header />

          <main className='flex-grow bg-white'>{children}</main>
          <ChatBot />

          <Footer />
        </div>
        <ToastContainer />
      </HeaderContextProvider>
    </QueryClientProvider>
  );
}
