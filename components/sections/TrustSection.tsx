import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Zap, TrendingUp, Shield, Target } from "lucide-react";

const stats = [
    {
        icon: Zap,
        label: "Faster Dispatch",
        description: "Optimized routing and instant rider assignment for minimal wait times.",
    },
    {
        icon: TrendingUp,
        label: "More Direct Orders",
        description: "An additional sales channel that grows alongside your restaurant brand.",
    },
    {
        icon: Shield,
        label: "Reduced Operational Load",
        description: "Zero driver management overhead. We handle recruitment, training, and scheduling.",
    },
    {
        icon: Target,
        label: "Better Last-Mile Execution",
        description: "Professional riders, real-time tracking, and quality delivery every single time.",
    },
];

export function TrustSection() {
    return (
        <SectionWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
                <AnimatedSection>
                    <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                        Why SpeedBoys
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
                        Operational Advantages{" "}
                        <span className="text-muted">That Matter</span>
                    </h2>
                </AnimatedSection>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <AnimatedSection key={i} delay={i * 100}>
                        <div className="text-center p-6 sm:p-8 rounded-2xl bg-card-bg border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group h-full">
                            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                                <stat.icon size={24} className="text-accent" />
                            </div>
                            <h3 className="text-lg font-display font-bold mb-3">
                                {stat.label}
                            </h3>
                            <p className="text-sm text-muted leading-relaxed">
                                {stat.description}
                            </p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </SectionWrapper>
    );
}
