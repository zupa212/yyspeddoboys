import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import {
    ArrowRight,
    Check,
    Clock,
    DollarSign,
    Headphones,
    Map,
    Shield,
    Smartphone,
    Bike,
} from "lucide-react";
import { RiderForm } from "@/components/forms/RiderForm";
import { RiderFAQ } from "@/components/sections/RiderFAQ";

export const metadata: Metadata = {
    title: "Θέσεις Εργασίας Διανομέα Θεσσαλονίκη | Ευκαιρίες Rider | SpeedBoys",
    description:
        "Θέσεις εργασίας διανομέα Θεσσαλονίκη και ευκαιρίες rider με SpeedBoys. Ευέλικτα ωράρια, υποστήριξη και ανάπτυξη.",
    keywords: [
        "driver jobs thessaloniki",
        "delivery rider thessaloniki",
        "δουλειά διανομέας θεσσαλονίκη",
        "rider θεσσαλονίκη",
    ],
    alternates: { canonical: "/riders" },
    openGraph: {
        title: "Θέσεις Διανομέα Θεσσαλονίκη | SpeedBoys",
        description: "Κάνε αίτηση για ευκαιρίες rider στη Θεσσαλονίκη με SpeedBoys.",
        url: "/riders",
    },
};

const benefits = [
    { icon: Clock, title: "Ευέλικτο Πρόγραμμα", description: "Δούλεψε όποτε σε βολεύει. Επίλεξε τις δικές σου ώρες και τη διαθεσιμότητά σου." },
    { icon: Smartphone, title: "Σύγχρονη Πλατφόρμα", description: "Premium εφαρμογή με έξυπνη δρομολόγηση, real-time tracking και άμεσες ειδοποιήσεις." },
    { icon: Headphones, title: "Επαγγελματική Υποστήριξη", description: "Μια αφοσιωμένη ομάδα υποστήριξης που είναι δίπλα σου όποτε χρειαστεί." },
    { icon: Map, title: "Έξυπνη Δρομολόγηση", description: "Βελτιστοποιημένες διαδρομές που εξοικονομούν χρόνο, μειώνουν αποστάσεις και μεγιστοποιούν τα κέρδη σου." },
    { icon: Shield, title: "Οργανωμένο & Αξιόπιστο", description: "Δούλεψε με μια σοβαρή, οργανωμένη εταιρεία που σέβεται τους riders και εκτιμά τον επαγγελματισμό." },
    { icon: DollarSign, title: "Ευκαιρία Ανάπτυξης", description: "Γίνε μέρος ενός αναπτυσσόμενου δικτύου. Καθώς το SpeedBoys επεκτείνεται, μεγαλώνουν και οι ευκαιρίες." },
];

const requirements = [
    "Ισχύον δίπλωμα οδήγησης (κατηγορία ανάλογα με το όχημά σας)",
    "Αξιόπιστο όχημα: σκούτερ, μοτοσικλέτα, αυτοκίνητο ή ποδήλατο",
    "Smartphone με πρόσβαση στο internet",
    "Καλή γνώση της περιοχής διανομής",
    "Επαγγελματική στάση και αξιοπιστία",
];

const processSteps = [
    { number: "01", title: "Κάνε Αίτηση Online", description: "Συμπλήρωσε τη φόρμα αίτησης με τα στοιχεία και τη διαθεσιμότητά σου." },
    { number: "02", title: "Αξιολόγηση", description: "Η ομάδα μας αξιολογεί την αίτησή σου και επικοινωνεί μαζί σου." },
    { number: "03", title: "Ξεκίνα τις Διανομές", description: "Μόλις εγκριθείς, ρυθμίζεσαι στην πλατφόρμα και ξεκινάς τις πρώτες σου παραδόσεις." },
];

export default function RidersPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-surface via-dark-surface-2 to-dark-surface pointer-events-none" />
                <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <AnimatedSection>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                                <Bike size={14} className="text-accent" />
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Ευκαιρίες Rider</span>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={100}>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.05] mb-6 text-white">
                                Κάνε Διανομές με τους Καλύτερους.{" "}
                                <span className="text-accent">Κέρδισε με τους Δικούς σου Όρους.</span>
                            </h1>
                        </AnimatedSection>
                        <AnimatedSection delay={200}>
                            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                                Γίνε μέρος ενός premium, οργανωμένου και αναπτυσσόμενου δικτύου διανομών.
                                Ευέλικτες ευκαιρίες για σοβαρούς riders που εκτιμούν τον επαγγελματισμό.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={300}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#rider-form" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-foreground font-bold text-base rounded-full hover:bg-accent-dark hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20">
                                    Κάνε Αίτηση
                                    <ArrowRight size={18} className="ml-2" />
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Why Join */}
            <SectionWrapper>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <AnimatedSection>
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Γιατί SpeedBoys</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
                            Πολύ Περισσότερο από{" "}
                            <span className="text-muted">μια Δουλειά Διανομής</span>
                        </h2>
                        <p className="text-lg text-muted leading-relaxed">
                            Πιο έξυπνη δρομολόγηση. Επαγγελματική υποστήριξη. Μια σύγχρονη εφαρμογή που
                            κάνει τη δουλειά σου ευκολότερη και πιο ανταμοιβόμενη.
                        </p>
                    </AnimatedSection>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, i) => (
                        <AnimatedSection key={i} delay={i * 80}>
                            <div className="bg-card-bg rounded-2xl p-7 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 h-full group">
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                                    <benefit.icon size={22} className="text-accent" />
                                </div>
                                <h3 className="text-lg font-display font-bold mb-2">{benefit.title}</h3>
                                <p className="text-sm text-muted leading-relaxed">{benefit.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </SectionWrapper>

            {/* Requirements */}
            <SectionWrapper className="bg-border-light/50">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Απαιτήσεις</p>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                            Τι Χρειάζεσαι{" "}
                            <span className="text-muted">για να Ξεκινήσεις</span>
                        </h2>
                        <ul className="space-y-4">
                            {requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"><Check size={14} className="text-accent" /></div>
                                    <span className="text-sm text-muted leading-relaxed">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </AnimatedSection>
                    <AnimatedSection delay={150}>
                        <div className="bg-card-bg rounded-3xl p-8 border border-border">
                            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">Διαδικασία Onboarding</p>
                            <div className="space-y-6">
                                {processSteps.map((step, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <span className="text-sm font-display font-black text-accent">{step.number}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-display font-bold mb-1">{step.title}</h4>
                                            <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </SectionWrapper>

            {/* Rider Form */}
            <SectionWrapper id="rider-form">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                        <AnimatedSection>
                            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Μπες στην Ομάδα</p>
                            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                                Ξεκίνα την{" "}
                                <span className="text-muted">Αίτησή σου</span>
                            </h2>
                            <p className="text-muted">Συμπλήρωσε τη φόρμα παρακάτω και η ομάδα μας θα αξιολογήσει την αίτησή σου.</p>
                        </AnimatedSection>
                    </div>
                    <AnimatedSection delay={100}>
                        <RiderForm />
                    </AnimatedSection>
                </div>
            </SectionWrapper>

            {/* FAQ */}
            <RiderFAQ />

            {/* Final CTA */}
            <SectionWrapper dark>
                <AnimatedSection>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                            Έτοιμος να{" "}
                            <span className="text-accent">Βγεις στον Δρόμο;</span>
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Γίνε μέρος του SpeedBoys και ένα σύγχρονο, επαγγελματικό δίκτυο διανομών.
                        </p>
                        <a href="#rider-form" className="inline-flex items-center justify-center px-10 py-4 bg-accent text-foreground font-bold text-base rounded-full hover:bg-accent-dark hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20">
                            Κάνε Αίτηση
                            <ArrowRight size={18} className="ml-2" />
                        </a>
                    </div>
                </AnimatedSection>
            </SectionWrapper>
        </>
    );
}
