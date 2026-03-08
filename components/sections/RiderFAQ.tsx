"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Do I need previous delivery experience?",
        answer:
            "Not necessarily. While experience is a plus, we welcome motivated individuals who are reliable, professional, and ready to learn. We provide onboarding guidance.",
    },
    {
        question: "What vehicle types are accepted?",
        answer:
            "We accept scooters, motorcycles, cars, bicycles, and e-bikes. The key requirement is that your vehicle is reliable and in good condition.",
    },
    {
        question: "How flexible is the schedule?",
        answer:
            "Very flexible. You can choose your availability — full-time, part-time, weekends only, or custom schedules that fit your life.",
    },
    {
        question: "What happens after I apply?",
        answer:
            "Our team will review your application and contact you within a few days. If approved, we'll guide you through the onboarding process to get you started.",
    },
    {
        question: "Which cities is SpeedBoys active in?",
        answer:
            "We're actively expanding to new areas. Apply and we'll let you know about availability and upcoming launches in your city.",
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

export function RiderFAQ() {
    return (
        <SectionWrapper className="bg-border-light/50">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <AnimatedSection>
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">FAQ</p>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold">
                            Rider <span className="text-muted">Questions</span>
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
