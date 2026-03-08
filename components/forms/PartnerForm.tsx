"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { submitPartnerLead, type FormState } from "@/lib/actions";

const initialState: FormState = {
    success: false,
    message: "",
};

export function PartnerForm() {
    const router = useRouter();
    const [state, formAction, isPending] = useActionState(submitPartnerLead, initialState);

    useEffect(() => {
        if (state.success) {
            router.push("/thank-you/partner");
        }
    }, [state.success, router]);

    const inputClass =
        "w-full px-4 py-3.5 bg-background border border-border rounded-xl text-sm placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all";
    const labelClass = "block text-sm font-medium mb-2";
    const errorClass = "text-xs text-red-400 mt-1";

    return (
        <form
            action={formAction}
            className="bg-card-bg rounded-3xl border border-border p-6 sm:p-8 space-y-5"
        >
            {state.message && !state.success && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl p-4">
                    {state.message}
                </div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label className={labelClass}>Full Name *</label>
                    <input
                        name="fullName"
                        type="text"
                        placeholder="John Doe"
                        className={`${inputClass} ${state.errors?.fullName ? "border-red-400 focus:ring-red-400/40" : ""}`}
                    />
                    {state.errors?.fullName && <p className={errorClass}>{state.errors.fullName[0]}</p>}
                </div>
                <div>
                    <label className={labelClass}>Business Name *</label>
                    <input
                        name="businessName"
                        type="text"
                        placeholder="Restaurant Name"
                        className={`${inputClass} ${state.errors?.businessName ? "border-red-400 focus:ring-red-400/40" : ""}`}
                    />
                    {state.errors?.businessName && <p className={errorClass}>{state.errors.businessName[0]}</p>}
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label className={labelClass}>Phone Number *</label>
                    <input
                        name="phone"
                        type="tel"
                        placeholder="+30 69X XXXXXXX"
                        className={`${inputClass} ${state.errors?.phone ? "border-red-400 focus:ring-red-400/40" : ""}`}
                    />
                    {state.errors?.phone && <p className={errorClass}>{state.errors.phone[0]}</p>}
                </div>
                <div>
                    <label className={labelClass}>Email Address *</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="you@restaurant.com"
                        className={`${inputClass} ${state.errors?.email ? "border-red-400 focus:ring-red-400/40" : ""}`}
                    />
                    {state.errors?.email && <p className={errorClass}>{state.errors.email[0]}</p>}
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label className={labelClass}>City / Area</label>
                    <input
                        name="city"
                        type="text"
                        placeholder="Athens, Thessaloniki..."
                        className={inputClass}
                    />
                </div>
                <div>
                    <label className={labelClass}>Number of Locations</label>
                    <select name="locationsNum" className={inputClass}>
                        <option value="">Select...</option>
                        <option value="1">1 location</option>
                        <option value="2-5">2-5 locations</option>
                        <option value="6-10">6-10 locations</option>
                        <option value="10+">10+ locations</option>
                    </select>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label className={labelClass}>Approx. Daily Delivery Volume</label>
                    <select name="deliveryVolume" className={inputClass}>
                        <option value="">Select...</option>
                        <option value="1-20">1-20 deliveries/day</option>
                        <option value="20-50">20-50 deliveries/day</option>
                        <option value="50-100">50-100 deliveries/day</option>
                        <option value="100+">100+ deliveries/day</option>
                    </select>
                </div>
                <div>
                    <label className={labelClass}>Current Delivery Setup</label>
                    <select name="currentSetup" className={inputClass}>
                        <option value="">Select...</option>
                        <option value="own-drivers">Own drivers</option>
                        <option value="marketplace-only">Marketplace only (Wolt, efood...)</option>
                        <option value="mixed">Mixed</option>
                        <option value="none">No delivery yet</option>
                    </select>
                </div>
            </div>

            <div>
                <label className={labelClass}>Message / Notes</label>
                <textarea
                    name="notes"
                    rows={3}
                    placeholder="Tell us more about your needs..."
                    className={`${inputClass} resize-none`}
                />
            </div>

            <button
                type="submit"
                disabled={isPending}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-accent text-foreground font-bold text-base rounded-full hover:bg-accent-dark hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-accent/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isPending ? (
                    <>
                        <Loader2 size={18} className="mr-2 animate-spin" />
                        Submitting...
                    </>
                ) : (
                    <>
                        Become a Partner
                        <ArrowRight size={18} className="ml-2" />
                    </>
                )}
            </button>
        </form>
    );
}
