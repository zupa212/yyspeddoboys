"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Χρειάζεται προηγούμενη εμπειρία στις διανομές;",
        answer: "Όχι απαραίτητα. Αν και η εμπειρία είναι πλεονέκτημα, καλωσορίζουμε αξιόπιστα και επαγγελματικά άτομα. Παρέχουμε καθοδήγηση onboarding.",
    },
    {
        question: "Ποιοι τύποι οχημάτων γίνονται δεκτοί;",
        answer: "Δεχόμαστε σκούτερ, μοτοσικλέτες, αυτοκίνητα, ποδήλατα και ηλεκτρικά ποδήλατα. Η βασική απαίτηση είναι το όχημά σας να είναι αξιόπιστο.",
    },
    {
        question: "Πόσο ευέλικτο είναι το πρόγραμμα;",
        answer: "Πολύ ευέλικτο. Μπορείτε να επιλέξετε τη διαθεσιμότητά σας — πλήρες ωράριο, μερική απασχόληση, μόνο Σαββατοκύριακα ή custom πρόγραμμα.",
    },
    {
        question: "Τι γίνεται μετά την αίτησή μου;",
        answer: "Η ομάδα μας αξιολογεί την αίτησή σας και επικοινωνεί μαζί σας σε λίγες μέρες. Αν εγκριθείτε, σας καθοδηγούμε στη διαδικασία onboarding.",
    },
    {
        question: "Σε ποιες πόλεις δραστηριοποιείται το SpeedBoys;",
        answer: "Επεκτεινόμαστε ενεργά. Κάντε αίτηση και θα σας ενημερώσουμε για τη διαθεσιμότητα και τα επερχόμενα launches στην πόλη σας.",
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

export function RiderFAQ() {
    return (
        <SectionWrapper className="bg-border-light/50">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <AnimatedSection>
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Συχνές Ερωτήσεις</p>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold">
                            Ερωτήσεις <span className="text-muted">Διανομέων</span>
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
