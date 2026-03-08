import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Truck, Globe, BarChart3, Layers } from "lucide-react";

const features = [
    {
        icon: Truck,
        title: "Outsourced Fleet Operations",
        description:
            "We manage the delivery riders so you don't have to. No hiring, no scheduling, no headaches.",
    },
    {
        icon: Globe,
        title: "Direct Order Channel",
        description:
            "Gain an additional sales stream through the SpeedBoys ecosystem, beyond traditional marketplaces.",
    },
    {
        icon: BarChart3,
        title: "Scalable Logistics",
        description:
            "From one restaurant to fifty locations — our infrastructure scales with your growth, seamlessly.",
    },
    {
        icon: Layers,
        title: "Complementary, Not Competitive",
        description:
            "We work alongside Wolt, efood, and your in-house ops — not against them. A true logistics partner.",
    },
];

export function WhatIsSection() {
    return (
        <SectionWrapper id="what-is-speedboys">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <AnimatedSection>
                    <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                        What We Do
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
                        Your Orders. Our Fleet.{" "}
                        <span className="text-muted">Ultimate Speed.</span>
                    </h2>
                    <p className="text-lg text-muted leading-relaxed">
                        SpeedBoys is a logistics-tech platform that helps food businesses
                        outsource delivery fleet operations while unlocking additional
                        revenue through direct orders.
                    </p>
                </AnimatedSection>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                    <AnimatedSection key={i} delay={i * 100}>
                        <div className="group bg-card-bg rounded-2xl p-7 sm:p-8 border border-border hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 h-full">
                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                                <feature.icon size={22} className="text-accent" />
                            </div>
                            <h3 className="text-lg font-display font-bold mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-muted leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </SectionWrapper>
    );
}
