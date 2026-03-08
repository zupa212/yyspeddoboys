"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What exactly does SpeedBoys do?",
        answer:
            "SpeedBoys is a delivery logistics platform. We provide outsourced delivery fleet support to restaurants and food businesses. We also create an additional direct-order channel through our app ecosystem.",
    },
    {
        question: "Do I need to replace my existing delivery setup?",
        answer:
            "Not at all. SpeedBoys is designed to complement your current operations. We work alongside platforms like Wolt and efood, and can integrate with your existing order workflow.",
    },
    {
        question: "Can SpeedBoys help us get direct orders too?",
        answer:
            "Yes. Beyond fleet support, SpeedBoys generates direct-order opportunities through its own consumer-facing app. This gives your restaurant an additional revenue stream.",
    },
    {
        question: "Is this suitable for small restaurants?",
        answer:
            "Absolutely. SpeedBoys works with restaurants of all sizes — from single-location cafés to multi-location food brands and dark kitchens.",
    },
    {
        question: "How does the rider application work?",
        answer:
            "Riders can apply through our website. After submitting the application, our team reviews it and contacts you with next steps. The process is straightforward and fast.",
    },
    {
        question: "What cities is SpeedBoys available in?",
        answer:
            "We are actively expanding. Contact us to learn about availability in your city and upcoming launch areas.",
    },
];

function FAQItem({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) {
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
                    className={`flex-shrink-0 text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-6" : "max-h-0"
                    }`}
            >
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
                            FAQ
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold">
                            Questions? <span className="text-muted">Answered.</span>
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
