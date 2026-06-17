"use client";

import { useState } from "react";
import { Check, ShieldAlert, CreditCard, DollarSign } from "lucide-react";

export default function PricingPage() {
  const [paymentRoute, setPaymentRoute] = useState<"paypal" | "mpesa">("paypal");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const triggerSubscriptionRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ route: paymentRoute, phone: phoneNumber }),
      });
      const data = await response.json();
      if (data.success) {
        setSuccess(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen py-20 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-mono text-xs text-[#00FF66] uppercase tracking-widest block mb-2">// RADICAL TRANSPARENCY COST FLOW</span>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">One Simple Flat Rate.</h1>
        <p className="text-zinc-400 text-sm font-mono">14 DAYS RISK FREE ENGINE RUN • THEN AUTOMATED CYCLE MANAGEMENT</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Plan Value Summary Card */}
        <div className="lg:col-span-5 border border-[#262624] bg-black p-8">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">// ALL-INCLUSIVE SUITE</span>
          <h2 className="text-2xl font-bold uppercase tracking-tight mt-2 mb-6">Full Platform Operation</h2>
          
          <div className="flex items-baseline gap-2 mb-8 border-b border-[#262624] pb-6">
            <span className="text-5xl font-mono font-black text-[#00FF66]">$35</span>
            <span className="text-zinc-400 text-xs uppercase font-mono">USD / month</span>
          </div>

          <ul className="space-y-4 mb-8 font-mono text-xs text-zinc-300">
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#00FF66] flex-shrink-0" /> Unlimited Bookings & Schedules</li>
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#00FF66] flex-shrink-0" /> Full Order Pipeline Infrastructure</li>
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#00FF66] flex-shrink-0" /> Multi-location Company Settings</li>
            <li className="flex items-center gap-3"><Check className="w-4 h-4 text-[#00FF66] flex-shrink-0" /> API Access Keys & Token Pipelines</li>
          </ul>

          <div className="bg-[#1A1A19] border border-[#262624] p-4 text-xs text-zinc-400 space-y-2">
            <div className="flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-white">Pre-Authorization Clause:</strong> By initiating the 14-day trial, you explicitly authorize an automated debit setup on day 15. The exact platform price of $35.00 USD will cycle monthly until a cancellation command is received.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Billing Gateway Interface */}
        <div className="lg:col-span-7 border border-[#262624] p-8">
          <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-widest mb-6">// SELECT AUTOMATED SETTLEMENT ROUTE</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button 
              onClick={() => setPaymentRoute("paypal")}
              className={`p-4 font-mono text-xs uppercase tracking-wider text-center border transition-all ${paymentRoute === 'paypal' ? 'border-[#00FF66] bg-[#112211] text-white' : 'border-[#262624] text-zinc-400 hover:border-zinc-500'}`}
            >
              PayPal Agreement
            </button>
            <button 
              onClick={() => setPaymentRoute("mpesa")}
              className={`p-4 font-mono text-xs uppercase tracking-wider text-center border transition-all ${paymentRoute === 'mpesa' ? 'border-[#00FF66] bg-[#112211] text-white' : 'border-[#262624] text-zinc-400 hover:border-zinc-500'}`}
            >
              M-Pesa / KCB Push
            </button>
          </div>

          {success ? (
            <div className="border border-[#00FF66] bg-[#0A1F10] p-6 text-center space-y-4">
              <h4 className="font-mono text-sm uppercase text-[#00FF66] font-bold">Registration Agreement Instantiated</h4>
              <p className="text-xs text-zinc-300 max-w-md mx-auto">Your 14-day trial configuration is initialized. Check your terminal or connected devices to verify authentication signals.</p>
            </div>
          ) : (
            <form onSubmit={triggerSubscriptionRequest} className="space-y-6">
              {paymentRoute === "paypal" ? (
                <div className="p-6 bg-zinc-950 border border-[#262624] space-y-4">
                  <div className="flex items-center gap-3 text-zinc-400 font-mono text-xs">
                    <CreditCard className="w-5 h-5 text-blue-400" />
                    <span>Global Credit / Debit / Vault Automated Link</span>
                  </div>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    Redirects to safe PayPal vaults to approve the recurring agreement. No capital is collected during checkout today.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-6 bg-zinc-950 border border-[#262624] space-y-2">
                    <div className="flex items-center gap-3 text-zinc-400 font-mono text-xs">
                      <span className="font-bold text-emerald-500">M-PESA / KCB RAILWAY</span>
                    </div>
                    <p className="text-zinc-500 text-xs">
                      Enter the registered mobile account target below to complete direct mandate linking.
                    </p>
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] text-zinc-400 uppercase mb-2">Account Phone Line (Format: 254...)</label>
                    <input 
                      type="text" 
                      placeholder="2547XXXXXXXX"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-[#1A1A19] border border-[#262624] text-white font-mono p-4 text-sm focus:outline-none focus:border-[#00FF66]"
                    />
                  </div>
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-white text-black font-mono font-bold text-xs uppercase tracking-widest py-4 hover:bg-[#00FF66] transition-colors disabled:opacity-50"
              >
                {loading ? "COMMUNICATING WITH NODES..." : "AUTHORIZE 14-DAY TRIAL & SECURE SUB"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
