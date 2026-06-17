import type { Metadata } from "next";
import "../app/globals.css";

export const metadata: Metadata = {
  title: "SmartInvestsi Platform | Core Operations Engine",
  description: "Next-gen booking, ordering, and automated customer engines.",
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
      <body className="bg-[#0D0D0C] text-white font-sans antialiased selection:bg-[#00FF66] selection:text-black">
        {/* Navigation Bar */}
        <nav className="border-b border-[#262624] sticky top-0 bg-[#0D0D0C]/80 backdrop-blur-md z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#00FF66]" />
              <span className="font-mono text-lg font-bold tracking-tighter uppercase">SmartInvestsi</span>
            </div>
            <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-zinc-400">
              <a href="/" className="hover:text-white transition-colors">Platform</a>
              <a href="/pricing" className="hover:text-white transition-colors text-[#00FF66]">Pricing [$35/mo]</a>
              <a href="/portal" className="hover:text-white transition-colors">Client Hub</a>
            </div>
            <div>
              <a href="/pricing" className="border border-white px-5 py-2.5 font-mono text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all">
                Start Free Trial
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
                <div className="w-3 h-3 bg-[#00FF66]" />
                <span className="font-bold uppercase tracking-tighter">SmartInvestsi Engine</span>
              </div>
              <p className="max-w-xs leading-relaxed">Built for operators demanding high-throughput transaction setups, calendar routing, and automated collection sequences.</p>
            </div>
            <div>
              <span className="text-white uppercase block mb-4 tracking-widest">Compliance & Routing</span>
              <p className="leading-relaxed max-w-sm">
                PayPal Automated Agreements and M-Pesa/KCB STK API configurations run securely under localized encryption laws. Initial trial runs valid for exactly 14 calendar days.
              </p>
            </div>
            <div>
              <span className="text-white uppercase block mb-4 tracking-widest">System Status</span>
              <div className="flex items-center gap-2 text-[#00FF66]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF66] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF66]"></span>
                </span>
                <span>All Direct Billing Nodes Operational</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
