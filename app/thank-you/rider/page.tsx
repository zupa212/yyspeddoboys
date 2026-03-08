import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Ευχαριστούμε - Αίτηση Rider SpeedBoys",
    description: "Η αίτησή σας ελήφθη. Η ομάδα μας θα επικοινωνήσει σύντομα.",
    robots: { index: false, follow: false },
};

export default function RiderThankYouPage() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-lg mx-auto text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-scale-in">
                    <CheckCircle size={40} className="text-accent" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4 animate-fade-up">
                    Η Αίτησή σας Υποβλήθηκε!
                </h1>
                <p className="text-muted text-lg leading-relaxed mb-8 animate-fade-up delay-100">
                    Ευχαριστούμε που κάνατε αίτηση στο δίκτυο διανομών SpeedBoys. Η ομάδα μας
                    θα αξιολογήσει την αίτησή σας και θα επικοινωνήσει{" "}
                    <strong className="text-foreground">εντός λίγων ημερών</strong>.
                </p>
                <div className="bg-card-bg rounded-2xl border border-border p-6 mb-8 animate-fade-up delay-200">
                    <h3 className="font-display font-semibold mb-3">Τι γίνεται στη συνέχεια;</h3>
                    <ul className="space-y-2 text-sm text-muted text-left">
                        <li className="flex items-start gap-2"><span className="text-accent font-bold">1.</span>Αξιολογούμε την αίτηση και τα έγγραφά σας</li>
                        <li className="flex items-start gap-2"><span className="text-accent font-bold">2.</span>Επικοινωνούμε για επιβεβαίωση επιλεξιμότητας και περιοχής</li>
                        <li className="flex items-start gap-2"><span className="text-accent font-bold">3.</span>Γρήγορο onboarding και ξεκινάτε τις διανομές</li>
                    </ul>
                </div>
                <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-foreground font-bold rounded-full hover:bg-accent-dark hover:scale-105 transition-all animate-fade-up delay-300">
                    Πίσω στην Αρχική
                    <ArrowRight size={16} />
                </Link>
            </div>
        </section>
    );
}
