"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Τι ακριβώς κάνει το SpeedBoys;",
        answer:
            "Το SpeedBoys είναι μια πλατφόρμα logistics διανομών. Παρέχουμε εξωτερική υποστήριξη στόλου διανομών σε εστιατόρια και επιχειρήσεις εστίασης. Δημιουργούμε επίσης ένα επιπλέον κανάλι απευθείας παραγγελιών μέσω του οικοσυστήματος της εφαρμογής μας.",
    },
    {
        question: "Χρειάζεται να αντικαταστήσω το τρέχον σύστημα διανομών μου;",
        answer:
            "Καθόλου. Το SpeedBoys είναι σχεδιασμένο να συμπληρώνει τις τρέχουσες λειτουργίες σας. Συνεργαζόμαστε με πλατφόρμες όπως το Wolt και το efood, και μπορούμε να ενσωματωθούμε στη ροή παραγγελιών σας.",
    },
    {
        question: "Μπορεί το SpeedBoys να μας φέρει απευθείας παραγγελίες;",
        answer:
            "Ναι. Πέρα από την υποστήριξη στόλου, το SpeedBoys δημιουργεί ευκαιρίες απευθείας παραγγελιών μέσω της εφαρμογής μας. Αυτό δίνει στο εστιατόριό σας ένα πρόσθετο κανάλι εσόδων.",
    },
    {
        question: "Είναι κατάλληλο για μικρά εστιατόρια;",
        answer:
            "Απολύτως. Το SpeedBoys συνεργάζεται με εστιατόρια κάθε μεγέθους — από μονοκατάστημα καφετέριες μέχρι πολυκατάστημα food brands και dark kitchens.",
    },
    {
        question: "Πώς λειτουργεί η αίτηση για riders;",
        answer:
            "Οι riders μπορούν να κάνουν αίτηση μέσω της ιστοσελίδας μας. Μετά την υποβολή, η ομάδα μας αξιολογεί και επικοινωνεί μαζί σας. Η διαδικασία είναι απλή και γρήγορη.",
    },
    {
        question: "Σε ποιες πόλεις είναι διαθέσιμο το SpeedBoys;",
        answer:
            "Επεκτεινόμαστε ενεργά. Επικοινωνήστε μαζί μας για να μάθετε τη διαθεσιμότητα στην πόλη σας και τις επερχόμενες περιοχές κάλυψης.",
    },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-border last:border-b-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left group"
            >
                <span className="text-base sm:text-lg font-display font-semibold pr-4 group-hover:text-accent transition-colors">
                    {question}
                </span>
                <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-6" : "max-h-0"}`}>
                <p className="text-sm text-muted leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}

export function FAQSection() {
    return (
        <SectionWrapper id="faq">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <AnimatedSection>
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                            Συχνές Ερωτήσεις
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold">
                            Ερωτήσεις; <span className="text-muted">Απαντήσεις.</span>
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
