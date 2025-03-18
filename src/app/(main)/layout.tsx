"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex flex-col h-full'>
        <Header />
        <main className='flex-grow bg-white'>{children}</main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
