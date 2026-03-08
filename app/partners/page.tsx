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
    title: "Fleet Outsourcing Thessaloniki | Restaurant Delivery | SpeedBoys",
    description:
        "Fleet outsourcing Thessaloniki and restaurant delivery operations by SpeedBoys. Scale your orders without in-house rider management.",
    keywords: [
        "fleet outsourcing thessaloniki",
        "restaurant delivery thessaloniki",
        "delivery service thessaloniki",
        "διανομή εστιατορίου θεσσαλονίκη",
    ],
    alternates: {
        canonical: "/partners",
    },
    openGraph: {
        title: "Fleet Outsourcing Thessaloniki | SpeedBoys",
        description:
            "Outsource your delivery fleet in Thessaloniki and grow faster with SpeedBoys.",
        url: "/partners",
    },
};

const painPoints = [
    "Hard to find and keep reliable delivery drivers",
    "Delivery operations consume management time",
    "Scaling is messy and expensive",
    "Over-dependence on third-party marketplace apps",
    "Inconsistent delivery quality hurts your brand",
];

const solutions = [
    "Fully outsourced delivery fleet â€” we recruit, manage, and dispatch",
    "Operational simplicity â€” focus on food, not logistics",
    "Scalable infrastructure that grows with you",
    "Direct-order opportunities through the SpeedBoys app",
    "Consistent, professional delivery every time",
];

const benefits = [
    {
        icon: Users,
        title: "Zero Hiring Stress",
        description:
            "We vet, train, manage, and schedule riders. You never worry about driver staffing again.",
    },
    {
        icon: Rocket,
        title: "Instant Scalability",
        description:
            "From peak hours to holiday rushes â€” our fleet scales to match your demand automatically.",
    },
    {
        icon: ShieldCheck,
        title: "Seamless Workflow",
        description:
            "Works alongside your existing operations. No complex integrations or system changes required.",
    },
    {
        icon: TrendingUp,
        title: "More Direct Orders",
        description:
            "Leverage the SpeedBoys app to reach new customers directly â€” beyond marketplace commissions.",
    },
    {
        icon: Layers,
        title: "Full Visibility",
        description:
            "Real-time tracking, delivery analytics, and operational insights at your fingertips.",
    },
    {
        icon: BarChart3,
        title: "Better Unit Economics",
        description:
            "Reduce the cost of last-mile delivery while improving speed, reliability, and customer satisfaction.",
    },
];

const howItWorks = [
    {
        number: "01",
        title: "Onboard Your Business",
        description: "Quick setup. Tell us about your restaurant, delivery zones, and order volume.",
    },
    {
        number: "02",
        title: "We Assign Your Fleet",
        description: "SpeedBoys dispatches riders to handle your deliveries. Smart routing, real-time tracking.",
    },
    {
        number: "03",
        title: "You Focus on Growth",
        description: "No driver headaches. Focus on food quality, customers, and scaling your brand.",
    },
    {
        number: "04",
        title: "Unlock More Orders",
        description: "Gain visibility in the SpeedBoys ecosystem and receive additional direct orders.",
    },
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
                                    For Restaurants & Food Businesses
                                </span>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={100}>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.05] mb-6">
                                Scale Delivery Without{" "}
                                <span className="relative">
                                    <span className="relative z-10">Managing Drivers.</span>
                                    <span className="absolute bottom-1 left-0 right-0 h-3 sm:h-4 bg-accent/30 -z-0 rounded-sm" />
                                </span>
                            </h1>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <p className="text-lg sm:text-xl text-muted leading-relaxed mb-8 max-w-2xl">
                                Outsource your fleet operations to SpeedBoys. Save time, reduce
                                headaches, and unlock more direct orders for your food business.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={300}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#partner-form"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-accent text-foreground font-bold text-base rounded-full hover:bg-accent-dark hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20"
                                >
                                    Become a Partner
                                    <ArrowRight size={18} className="ml-2" />
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Problem â†’ Solution */}
            <SectionWrapper className="bg-border-light/50">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Problems */}
                    <AnimatedSection>
                        <div className="bg-card-bg rounded-3xl p-8 sm:p-10 border border-border h-full">
                            <p className="text-sm font-semibold uppercase tracking-wider text-red-400 mb-4">
                                The Problem
                            </p>
                            <h3 className="text-2xl font-display font-bold mb-6">
                                Managing delivery in-house is chaos.
                            </h3>
                            <ul className="space-y-4">
                                {painPoints.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <X size={14} className="text-red-400" />
                                        </div>
                                        <span className="text-sm text-muted leading-relaxed">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>

                    {/* Solutions */}
                    <AnimatedSection delay={150}>
                        <div className="bg-dark-surface text-white rounded-3xl p-8 sm:p-10 border border-white/10 h-full">
                            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                                The SpeedBoys Solution
                            </p>
                            <h3 className="text-2xl font-display font-bold mb-6">
                                Your dedicated logistics layer.
                            </h3>
                            <ul className="space-y-4">
                                {solutions.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check size={14} className="text-accent" />
                                        </div>
                                        <span className="text-sm text-gray-300 leading-relaxed">
                                            {point}
                                        </span>
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
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                            How It Works
                        </p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
                            Simple. Fast. <span className="text-muted">Effective.</span>
                        </h2>
                    </AnimatedSection>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {howItWorks.map((step, i) => (
                        <AnimatedSection key={i} delay={i * 100}>
                            <div className="text-center p-6">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-2xl mb-5">
                                    <span className="text-xl font-display font-black text-accent">
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-lg font-display font-bold mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </SectionWrapper>

            {/* Key Benefits */}
            <SectionWrapper className="bg-border-light/50">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <AnimatedSection>
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                            Business Benefits
                        </p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
                            Why Restaurants{" "}
                            <span className="text-muted">Choose SpeedBoys</span>
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
                                <h3 className="text-lg font-display font-bold mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </SectionWrapper>

            {/* Integration / Workflow */}
            <SectionWrapper>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                            Workflow Compatible
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                            Works With Your{" "}
                            <span className="text-muted">Existing Setup</span>
                        </h2>
                        <p className="text-muted leading-relaxed mb-8">
                            SpeedBoys integrates seamlessly into your current operations. No
                            system overhauls. No disruption. Just smarter logistics layered on
                            top of what you already do.
                        </p>
                        <ul className="space-y-4">
                            {[
                                { icon: Plug, text: "Easy onboarding â€” operational in days, not weeks" },
                                { icon: Layers, text: "Flexible for cafÃ©s, fast food, dark kitchens, and chains" },
                                { icon: ShieldCheck, text: "Works alongside Wolt, efood, and your own ordering flow" },
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
                                    { icon: Package, label: "Order Received", time: "0:00", status: "Active" },
                                    { icon: Users, label: "Rider Assigned", time: "0:04", status: "Active" },
                                    { icon: MapPin, label: "Picked Up", time: "0:12", status: "Active" },
                                    { icon: Clock, label: "Delivered", time: "0:28", status: "Done" },
                                ].map((step, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/5">
                                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                                            <step.icon size={18} className="text-accent" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-white">
                                                {step.label}
                                            </p>
                                            <p className="text-xs text-gray-500">{step.time}</p>
                                        </div>
                                        <span className="text-[10px] uppercase tracking-wider text-accent font-semibold">
                                            {step.status}
                                        </span>
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
                            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                                Get Started
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                                Let SpeedBoys Power{" "}
                                <span className="text-muted">Your Delivery</span>
                            </h2>
                            <p className="text-muted">
                                Fill out the form and our team will get back to you within 24
                                hours.
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
                            Ready to Scale Delivery{" "}
                            <span className="text-accent">Without the Headache?</span>
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Join modern food businesses that trust SpeedBoys for smarter, faster
                            delivery operations.
                        </p>
                        <a
                            href="#partner-form"
                            className="inline-flex items-center justify-center px-10 py-4 bg-accent text-foreground font-bold text-base rounded-full hover:bg-accent-dark hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20"
                        >
                            Become a Partner
                            <ArrowRight size={18} className="ml-2" />
                        </a>
                    </div>
                </AnimatedSection>
            </SectionWrapper>
        </>
    );
}

