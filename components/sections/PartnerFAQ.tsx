"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Do I need to replace my existing delivery setup?",
        answer:
            "No. SpeedBoys is designed to complement your current operations. We work alongside Wolt, efood, and any other platforms you already use.",
    },
    {
        question: "How quickly can my restaurant start using SpeedBoys?",
        answer:
            "Onboarding is fast. Once your partnership is confirmed, we can have your delivery operations running within days — not weeks.",
    },
    {
        question: "Do I need to hire my own drivers?",
        answer:
            "Not at all. That's the whole point. SpeedBoys provides the delivery fleet so you don't have to deal with driver recruitment, management, or scheduling.",
    },
    {
        question: "Can SpeedBoys work for dark kitchens and multi-location brands?",
        answer:
            "Absolutely. We work with restaurants of all types and sizes — from single-location cafés to multi-location food chains and dark kitchens.",
    },
    {
        question: "How does SpeedBoys help me get more direct orders?",
        answer:
            "Beyond fleet support, your restaurant gains visibility in the SpeedBoys consumer app. This creates an additional direct-order revenue stream alongside your existing marketplace presence.",
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

export function PartnerFAQ() {
    return (
        <SectionWrapper className="bg-border-light/50">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <AnimatedSection>
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">FAQ</p>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold">
                            Partner <span className="text-muted">Questions</span>
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
