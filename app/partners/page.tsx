import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import {
    ArrowRight,
    X,
    Check,
    Users,
    Rocket,
    ShieldCheck,
    Layers,
    BarChart3,
    Plug,
    Package,
    MapPin,
    Clock,
    TrendingUp,
} from "lucide-react";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { PartnerFAQ } from "@/components/sections/PartnerFAQ";

export const metadata: Metadata = {
    title: "Outsourcing Στόλου Θεσσαλονίκη | Διανομές Εστιατορίων | SpeedBoys",
    description:
        "Outsourcing στόλου Θεσσαλονίκη και λειτουργίες διανομών εστιατορίων με SpeedBoys. Κλιμακώστε τις παραγγελίες χωρίς διαχείριση οδηγών.",
    keywords: [
        "fleet outsourcing thessaloniki",
        "restaurant delivery thessaloniki",
        "delivery service thessaloniki",
        "διανομή εστιατορίου θεσσαλονίκη",
        "outsourcing στόλου θεσσαλονίκη",
    ],
    alternates: { canonical: "/partners" },
    openGraph: {
        title: "Outsourcing Στόλου Θεσσαλονίκη | SpeedBoys",
        description: "Εξωτερικεύστε τον στόλο διανομών στη Θεσσαλονίκη και αναπτυχθείτε γρηγορότερα με SpeedBoys.",
        url: "/partners",
    },
};

const painPoints = [
    "Δύσκολο να βρεις και να κρατήσεις αξιόπιστους οδηγούς",
    "Οι λειτουργίες διανομής καταναλώνουν χρόνο διαχείρισης",
    "Η κλιμάκωση είναι χαοτική και ακριβή",
    "Υπερβολική εξάρτηση από marketplace εφαρμογές τρίτων",
    "Η ασυνεπής ποιότητα διανομής βλάπτει το brand σας",
];

const solutions = [
    "Πλήρως εξωτερικευμένος στόλος — εμείς προσλαμβάνουμε, διαχειριζόμαστε και αναθέτουμε",
    "Λειτουργική απλότητα — εστιάστε στο φαγητό, όχι στα logistics",
    "Κλιμακούμενη υποδομή που μεγαλώνει μαζί σας",
    "Ευκαιρίες απευθείας παραγγελιών μέσω της εφαρμογής SpeedBoys",
    "Συνεπής, επαγγελματική παράδοση κάθε φορά",
];

const benefits = [
    {
        icon: Users,
        title: "Μηδενικό Στρες Προσλήψεων",
        description: "Ελέγχουμε, εκπαιδεύουμε, διαχειριζόμαστε και προγραμματίζουμε riders. Δεν ανησυχείτε ποτέ ξανά για προσωπικό.",
    },
    {
        icon: Rocket,
        title: "Άμεση Κλιμάκωση",
        description: "Από ώρες αιχμής μέχρι εορταστικές περιόδους — ο στόλος μας προσαρμόζεται αυτόματα στη ζήτησή σας.",
    },
    {
        icon: ShieldCheck,
        title: "Απρόσκοπτη Ενσωμάτωση",
        description: "Λειτουργεί παράλληλα με τις υπάρχουσες λειτουργίες σας. Χωρίς πολύπλοκες ενσωματώσεις.",
    },
    {
        icon: TrendingUp,
        title: "Περισσότερες Απευθείας Παραγγελίες",
        description: "Αξιοποιήστε την εφαρμογή SpeedBoys για νέους πελάτες — πέρα από τις προμήθειες marketplace.",
    },
    {
        icon: Layers,
        title: "Πλήρης Ορατότητα",
        description: "Real-time tracking, analytics διανομών και λειτουργικά insights στα χέρια σας.",
    },
    {
        icon: BarChart3,
        title: "Καλύτερα Οικονομικά",
        description: "Μειώστε το κόστος last-mile ενώ βελτιώνετε ταχύτητα, αξιοπιστία και ικανοποίηση πελατών.",
    },
];

const howItWorks = [
    { number: "01", title: "Σύνδεση Επιχείρησης", description: "Γρήγορη εγκατάσταση. Πείτε μας για το εστιατόριό σας, τις ζώνες διανομής και τον όγκο παραγγελιών." },
    { number: "02", title: "Αναθέτουμε τον Στόλο", description: "Το SpeedBoys αναθέτει riders για τις διανομές σας. Έξυπνη δρομολόγηση, real-time tracking." },
    { number: "03", title: "Εσείς Αναπτύσσεστε", description: "Χωρίς πονοκεφάλους οδηγών. Εστιάστε στην ποιότητα φαγητού, τους πελάτες και την ανάπτυξη." },
    { number: "04", title: "Ξεκλειδώστε Παραγγελίες", description: "Αποκτήστε ορατότητα στο οικοσύστημα SpeedBoys και λάβετε πρόσθετες απευθείας παραγγελίες." },
];

export default function PartnersPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5 pointer-events-none" />
                <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <AnimatedSection>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                                <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                                    Για Εστιατόρια & Επιχειρήσεις Εστίασης
                                </span>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={100}>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.05] mb-6">
                                Κλιμάκωσε τις Διανομές{" "}
                                <span className="relative">
                                    <span className="relative z-10">Χωρίς Οδηγούς.</span>
                                    <span className="absolute bottom-1 left-0 right-0 h-3 sm:h-4 bg-accent/30 -z-0 rounded-sm" />
                                </span>
                            </h1>
                        </AnimatedSection>
                        <AnimatedSection delay={200}>
                            <p className="text-lg sm:text-xl text-muted leading-relaxed mb-8 max-w-2xl">
                                Εξωτερικεύστε τις λειτουργίες στόλου στο SpeedBoys. Εξοικονομήστε χρόνο,
                                μειώστε τον πονοκέφαλο και ξεκλειδώστε περισσότερες απευθείας παραγγελίες.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={300}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#partner-form" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-foreground font-bold text-base rounded-full hover:bg-accent-dark hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20">
                                    Γίνε Συνεργάτης
                                    <ArrowRight size={18} className="ml-2" />
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Problem → Solution */}
            <SectionWrapper className="bg-border-light/50">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <AnimatedSection>
                        <div className="bg-card-bg rounded-3xl p-8 sm:p-10 border border-border h-full">
                            <p className="text-sm font-semibold uppercase tracking-wider text-red-400 mb-4">Το Πρόβλημα</p>
                            <h3 className="text-2xl font-display font-bold mb-6">Η εσωτερική διαχείριση διανομών είναι χάος.</h3>
                            <ul className="space-y-4">
                                {painPoints.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"><X size={14} className="text-red-400" /></div>
                                        <span className="text-sm text-muted leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={150}>
                        <div className="bg-dark-surface text-white rounded-3xl p-8 sm:p-10 border border-white/10 h-full">
                            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Η Λύση SpeedBoys</p>
                            <h3 className="text-2xl font-display font-bold mb-6">Το αφιερωμένο logistics layer σας.</h3>
                            <ul className="space-y-4">
                                {solutions.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"><Check size={14} className="text-accent" /></div>
                                        <span className="text-sm text-gray-300 leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>
                </div>
            </SectionWrapper>

            {/* How Partnership Works */}
            <SectionWrapper>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <AnimatedSection>
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Πώς Λειτουργεί</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
                            Απλά. Γρήγορα. <span className="text-muted">Αποτελεσματικά.</span>
                        </h2>
                    </AnimatedSection>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {howItWorks.map((step, i) => (
                        <AnimatedSection key={i} delay={i * 100}>
                            <div className="text-center p-6">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-2xl mb-5">
                                    <span className="text-xl font-display font-black text-accent">{step.number}</span>
                                </div>
                                <h3 className="text-lg font-display font-bold mb-2">{step.title}</h3>
                                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </SectionWrapper>

            {/* Key Benefits */}
            <SectionWrapper className="bg-border-light/50">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <AnimatedSection>
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Επιχειρηματικά Οφέλη</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
                            Γιατί τα Εστιατόρια{" "}
                            <span className="text-muted">Επιλέγουν SpeedBoys</span>
                        </h2>
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

            {/* Integration / Workflow */}
            <SectionWrapper>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Συμβατότητα Ροής Εργασιών</p>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                            Λειτουργεί με{" "}
                            <span className="text-muted">το Υπάρχον Setup σας</span>
                        </h2>
                        <p className="text-muted leading-relaxed mb-8">
                            Το SpeedBoys ενσωματώνεται ομαλά στις τρέχουσες λειτουργίες σας. Χωρίς αλλαγές
                            συστήματος. Χωρίς αναστάτωση. Απλά πιο έξυπνα logistics πάνω σε αυτό που ήδη κάνετε.
                        </p>
                        <ul className="space-y-4">
                            {[
                                { icon: Plug, text: "Εύκολο onboarding — λειτουργία σε μέρες, όχι εβδομάδες" },
                                { icon: Layers, text: "Ευέλικτο για καφετέριες, fast food, dark kitchens και αλυσίδες" },
                                { icon: ShieldCheck, text: "Λειτουργεί δίπλα στο Wolt, efood και τη δική σας ροή" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <item.icon size={16} className="text-accent" />
                                    </div>
                                    <span className="text-sm font-medium">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <div className="bg-dark-surface rounded-3xl p-8 border border-white/10">
                            <div className="space-y-4">
                                {[
                                    { icon: Package, label: "Παραγγελία Ελήφθη", time: "0:00", status: "Ενεργό" },
                                    { icon: Users, label: "Rider Ανατέθηκε", time: "0:04", status: "Ενεργό" },
                                    { icon: MapPin, label: "Παραλήφθηκε", time: "0:12", status: "Ενεργό" },
                                    { icon: Clock, label: "Παραδόθηκε", time: "0:28", status: "Ολοκλ." },
                                ].map((step, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/5">
                                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center"><step.icon size={18} className="text-accent" /></div>
                                        <div className="flex-1"><p className="text-sm font-semibold text-white">{step.label}</p><p className="text-xs text-gray-500">{step.time}</p></div>
                                        <span className="text-[10px] uppercase tracking-wider text-accent font-semibold">{step.status}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </SectionWrapper>

            {/* Partner Form */}
            <SectionWrapper id="partner-form" className="bg-border-light/50">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                        <AnimatedSection>
                            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Ξεκινήστε</p>
                            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                                Αφήστε το SpeedBoys να{" "}
                                <span className="text-muted">Τροφοδοτεί τις Διανομές σας</span>
                            </h2>
                            <p className="text-muted">
                                Συμπληρώστε τη φόρμα και η ομάδα μας θα επικοινωνήσει μαζί σας εντός 24 ωρών.
                            </p>
                        </AnimatedSection>
                    </div>
                    <AnimatedSection delay={100}>
                        <PartnerForm />
                    </AnimatedSection>
                </div>
            </SectionWrapper>

            {/* FAQ */}
            <PartnerFAQ />

            {/* Final CTA */}
            <SectionWrapper dark>
                <AnimatedSection>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                            Έτοιμοι να Κλιμακώσετε{" "}
                            <span className="text-accent">Χωρίς Πονοκέφαλο;</span>
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Γίνετε μέρος των σύγχρονων επιχειρήσεων εστίασης που εμπιστεύονται το SpeedBoys
                            για πιο έξυπνες, πιο γρήγορες λειτουργίες διανομής.
                        </p>
                        <a href="#partner-form" className="inline-flex items-center justify-center px-10 py-4 bg-accent text-foreground font-bold text-base rounded-full hover:bg-accent-dark hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20">
                            Γίνε Συνεργάτης
                            <ArrowRight size={18} className="ml-2" />
                        </a>
                    </div>
                </AnimatedSection>
            </SectionWrapper>
        </>
    );
}
