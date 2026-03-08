"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { submitRiderLead, type FormState } from "@/lib/actions";

const initialState: FormState = {
    success: false,
    message: "",
};

export function RiderForm() {
    const router = useRouter();
    const [state, formAction, isPending] = useActionState(submitRiderLead, initialState);

    useEffect(() => {
        if (state.success) {
            router.push("/thank-you/rider");
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
                        placeholder="Your full name"
                        className={`${inputClass} ${state.errors?.fullName ? "border-red-400 focus:ring-red-400/40" : ""}`}
                    />
                    {state.errors?.fullName && <p className={errorClass}>{state.errors.fullName[0]}</p>}
                </div>
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
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label className={labelClass}>Email Address *</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        className={`${inputClass} ${state.errors?.email ? "border-red-400 focus:ring-red-400/40" : ""}`}
                    />
                    {state.errors?.email && <p className={errorClass}>{state.errors.email[0]}</p>}
                </div>
                <div>
                    <label className={labelClass}>City / Area</label>
                    <input
                        name="city"
                        type="text"
                        placeholder="Athens, Thessaloniki..."
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label className={labelClass}>Vehicle Type</label>
                    <select name="vehicleType" className={inputClass}>
                        <option value="">Select...</option>
                        <option value="scooter">Scooter</option>
                        <option value="motorcycle">Motorcycle</option>
                        <option value="car">Car</option>
                        <option value="bicycle">Bicycle</option>
                        <option value="e-bike">E-Bike</option>
                    </select>
                </div>
                <div>
                    <label className={labelClass}>Driving License</label>
                    <select name="licenseStatus" className={inputClass}>
                        <option value="">Select...</option>
                        <option value="yes">Yes, valid license</option>
                        <option value="pending">In progress</option>
                        <option value="no">No license</option>
                        <option value="not-needed">Not needed (bicycle)</option>
                    </select>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label className={labelClass}>Availability</label>
                    <select name="availability" className={inputClass}>
                        <option value="">Select...</option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="weekends">Weekends only</option>
                        <option value="flexible">Flexible</option>
                    </select>
                </div>
                <div>
                    <label className={labelClass}>Previous Delivery Experience</label>
                    <select name="experience" className={inputClass}>
                        <option value="">Select...</option>
                        <option value="none">No experience</option>
                        <option value="less-1y">Less than 1 year</option>
                        <option value="1-3y">1-3 years</option>
                        <option value="3y+">3+ years</option>
                    </select>
                </div>
            </div>

            <div>
                <label className={labelClass}>Message / Notes</label>
                <textarea
                    name="notes"
                    rows={3}
                    placeholder="Anything else you want us to know..."
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
                        Submit Application
                        <ArrowRight size={18} className="ml-2" />
                    </>
                )}
            </button>
        </form>
    );
}
