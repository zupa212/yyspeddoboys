import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Thank You - SpeedBoys Rider Application",
    description: "Your rider application has been received. Our team will be in touch soon.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function RiderThankYouPage() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-lg mx-auto text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-scale-in">
                    <CheckCircle size={40} className="text-accent" />
                </div>

                <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4 animate-fade-up">
                    Application Submitted!
                </h1>

                <p className="text-muted text-lg leading-relaxed mb-8 animate-fade-up delay-100">
                    Thanks for applying to join the SpeedBoys delivery network. Our team
                    will review your application and reach out{" "}
                    <strong className="text-foreground">within a few days</strong>.
                </p>

                <div className="bg-card-bg rounded-2xl border border-border p-6 mb-8 animate-fade-up delay-200">
                    <h3 className="font-display font-semibold mb-3">What happens next?</h3>
                    <ul className="space-y-2 text-sm text-muted text-left">
                        <li className="flex items-start gap-2">
                            <span className="text-accent font-bold">1.</span>
                            We review your application and documents
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-accent font-bold">2.</span>
                            We contact you to confirm eligibility and area
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-accent font-bold">3.</span>
                            Quick onboarding and you start delivering
                        </li>
                    </ul>
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-foreground font-bold rounded-full hover:bg-accent-dark hover:scale-105 transition-all animate-fade-up delay-300"
                >
                    Back to Homepage
                    <ArrowRight size={16} />
                </Link>
            </div>
        </section>
    );
}

