"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Χρειάζεται να αντικαταστήσω το τρέχον σύστημα διανομών μου;",
        answer: "Όχι. Το SpeedBoys είναι σχεδιασμένο να συμπληρώνει τις τρέχουσες λειτουργίες σας. Συνεργαζόμαστε με Wolt, efood και οποιαδήποτε άλλη πλατφόρμα χρησιμοποιείτε.",
    },
    {
        question: "Πόσο γρήγορα μπορεί το εστιατόριό μου να ξεκινήσει;",
        answer: "Το onboarding είναι γρήγορο. Μόλις επιβεβαιωθεί η συνεργασία, μπορούμε να έχουμε τις λειτουργίες διανομής σας ενεργές σε μέρες — όχι εβδομάδες.",
    },
    {
        question: "Χρειάζεται να προσλάβω δικούς μου οδηγούς;",
        answer: "Καθόλου. Αυτό ακριβώς είναι το νόημα. Το SpeedBoys παρέχει τον στόλο διανομών ώστε εσείς να μην ασχολείστε με πρόσληψη, διαχείριση ή προγραμματισμό.",
    },
    {
        question: "Λειτουργεί για dark kitchens και πολυκαταστήματα;",
        answer: "Απολύτως. Συνεργαζόμαστε με εστιατόρια κάθε τύπου και μεγέθους — από μονοκατάστημα καφετέριες μέχρι αλυσίδες fast food και dark kitchens.",
    },
    {
        question: "Πώς με βοηθά το SpeedBoys να πάρω περισσότερες απευθείας παραγγελίες;",
        answer: "Πέρα από την υποστήριξη στόλου, το εστιατόριό σας αποκτά ορατότητα στην εφαρμογή SpeedBoys. Αυτό δημιουργεί ένα επιπλέον κανάλι εσόδων δίπλα στην παρουσία σας σε marketplaces.",
    },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-border last:border-b-0">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between py-6 text-left group">
                <span className="text-base sm:text-lg font-display font-semibold pr-4 group-hover:text-accent transition-colors">{question}</span>
                <ChevronDown size={20} className={`flex-shrink-0 text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-6" : "max-h-0"}`}>
                <p className="text-sm text-muted leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}

export function PartnerFAQ() {
    return (
        <SectionWrapper className="bg-border-light/50">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <AnimatedSection>
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Συχνές Ερωτήσεις</p>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold">
                            Ερωτήσεις <span className="text-muted">Συνεργατών</span>
                        </h2>
                    </AnimatedSection>
                </div>
                <AnimatedSection delay={100}>
                    <div className="bg-card-bg rounded-2xl border border-border p-6 sm:p-8">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </SectionWrapper>
    );
}
