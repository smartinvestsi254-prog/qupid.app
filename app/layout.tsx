import type { Metadata } from "next";
import Image from "next/image";
import "../app/globals.css";

export const metadata: Metadata = {
  title: "Qupid Engine | Enterprise Core Operations Platform",
  description: "Automated booking ecosystems, instant ordering tracks, and automated payment flows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;600;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0D0D0C] text-white font-sans antialiased selection:bg-[#E53E3E] selection:text-white">
        {/* Navigation Bar */}
        <nav className="border-b border-[#262624] sticky top-0 bg-[#0D0D0C]/80 backdrop-blur-md z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Native Fallback container if qupid-logo.png isn't uploaded yet */}
              <div className="relative w-7 h-7 flex items-center justify-center bg-[#E53E3E]">
                <Image 
                  src="/qupid-logo.png" 
                  alt="Qupid Logo" 
                  width={28} 
                  height={28}
                  className="absolute inset-0 object-contain onError-hide"
                  onError={(e) => {
                    // Fallback visual if png isn't present
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="font-mono text-[10px] text-white font-bold">Q</span>
              </div>
              <span className="font-mono text-xl font-black tracking-tighter uppercase text-white">QUPID</span>
            </div>
            <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-zinc-400">
              <a href="/" className="hover:text-white transition-colors">Core Engine</a>
              <a href="/pricing" className="hover:text-white transition-colors text-[#E53E3E]">Licensing [$35/mo]</a>
              <a href="/portal" className="hover:text-white transition-colors">Operations Hub</a>
            </div>
            <div>
              <a href="/pricing" className="border border-white px-5 py-2.5 font-mono text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all">
                Access System
              </a>
            </div>
          </div>
        </nav>
        
        {children}

        {/* Global Footer */}
        <footer className="border-t border-[#262624] bg-black py-16 font-mono text-xs text-zinc-500">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 text-white mb-4">
                <span className="font-bold uppercase tracking-tighter text-white">Qupid Technologies Inc.</span>
              </div>
              <p className="max-w-xs leading-relaxed">Built for operators demanding high-throughput transaction setups, automated notification pipelines, and multi-channel payouts.</p>
            </div>
            <div>
              <span className="text-white uppercase block mb-4 tracking-widest">Routing Systems</span>
              <p className="leading-relaxed max-w-sm">
                PayPal automated agreements, M-Pesa STK push engines, and KCB direct clearing corridors run securely under modern cloud encryption models.
              </p>
            </div>
            <div>
              <span className="text-white uppercase block mb-4 tracking-widest">System Matrix</span>
              <div className="flex items-center gap-2 text-[#E53E3E]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E53E3E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E53E3E]"></span>
                </span>
                <span>All Payment Notification Channels Online</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
