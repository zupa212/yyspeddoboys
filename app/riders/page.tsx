import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import {
    ArrowRight,
    Check,
    Clock,
    DollarSign,
    Headphones,
    Map,
    Shield,
    Smartphone,
    Bike,
} from "lucide-react";
import { RiderForm } from "@/components/forms/RiderForm";
import { RiderFAQ } from "@/components/sections/RiderFAQ";

export const metadata: Metadata = {
    title: "Driver Jobs Thessaloniki | Rider Opportunities | SpeedBoys",
    description:
        "Driver jobs Thessaloniki and rider opportunities with SpeedBoys. Flexible schedules, support, and growth.",
    keywords: [
        "driver jobs thessaloniki",
        "delivery rider thessaloniki",
        "rider jobs thessaloniki",
        "δουλειά διανομέας θεσσαλονίκη",
    ],
    alternates: {
        canonical: "/riders",
    },
    openGraph: {
        title: "Driver Jobs Thessaloniki | SpeedBoys",
        description:
            "Apply for rider opportunities in Thessaloniki with SpeedBoys.",
        url: "/riders",
    },
};

const benefits = [
    {
        icon: Clock,
        title: "Flexible Schedule",
        description:
            "Work when it suits you. Choose your own hours and set your own availability.",
    },
    {
        icon: Smartphone,
        title: "Modern Platform",
        description:
            "A premium app with smart routing, real-time tracking, and instant order notifications.",
    },
    {
        icon: Headphones,
        title: "Professional Support",
        description:
            "A dedicated support team that has your back whenever you need it.",
    },
    {
        icon: Map,
        title: "Smart Routing",
        description:
            "Optimized delivery paths that save time, reduce distance, and maximize your earnings potential.",
    },
    {
        icon: Shield,
        title: "Organized & Reliable",
        description:
            "Work with a serious, well-organized company that respects its riders and values professionalism.",
    },
    {
        icon: DollarSign,
        title: "Growth Opportunity",
        description:
            "Be part of a growing network. As SpeedBoys expands, so do the opportunities for our riders.",
    },
];

const requirements = [
    "Valid driving license (category appropriate for your vehicle)",
    "Reliable vehicle: scooter, motorcycle, car, or bicycle",
    "Smartphone with internet access",
    "Good knowledge of the delivery area",
    "Professional attitude and reliability",
];

const processSteps = [
    {
        number: "01",
        title: "Apply Online",
        description:
            "Fill out our application form with your details and availability.",
    },
    {
        number: "02",
        title: "Get Reviewed",
        description:
            "Our team reviews your application and contacts you for next steps.",
    },
    {
        number: "03",
        title: "Start Delivering",
        description:
            "Once approved, get set up on the platform and begin your first deliveries.",
    },
];

export default function RidersPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-dark-surface via-dark-surface-2 to-dark-surface pointer-events-none" />
                <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <AnimatedSection>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                                <Bike size={14} className="text-accent" />
                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                    Rider Opportunities
                                </span>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={100}>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.05] mb-6 text-white">
                                Ride With the Best.{" "}
                                <span className="text-accent">Earn On Your Terms.</span>
                            </h1>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                                Join a premium, organized, and growing delivery network.
                                Flexible opportunities for serious riders who value
                                professionalism and modern technology.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={300}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#rider-form"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-accent text-foreground font-bold text-base rounded-full hover:bg-accent-dark hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20"
                                >
                                    Apply Now
                                    <ArrowRight size={18} className="ml-2" />
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Why Join */}
            <SectionWrapper>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <AnimatedSection>
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                            Why SpeedBoys
                        </p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
                            More Than Just{" "}
                            <span className="text-muted">a Delivery Job</span>
                        </h2>
                        <p className="text-lg text-muted leading-relaxed">
                            Smarter routing. Professional support. A modern app that makes
                            your job easier and more rewarding.
                        </p>
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

            {/* Requirements */}
            <SectionWrapper className="bg-border-light/50">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                            Requirements
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                            What You Need{" "}
                            <span className="text-muted">to Get Started</span>
                        </h2>
                        <ul className="space-y-4">
                            {requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check size={14} className="text-accent" />
                                    </div>
                                    <span className="text-sm text-muted leading-relaxed">
                                        {req}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </AnimatedSection>

                    <AnimatedSection delay={150}>
                        <div className="bg-card-bg rounded-3xl p-8 border border-border">
                            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">
                                Onboarding Process
                            </p>
                            <div className="space-y-6">
                                {processSteps.map((step, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <span className="text-sm font-display font-black text-accent">
                                                {step.number}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-display font-bold mb-1">
                                                {step.title}
                                            </h4>
                                            <p className="text-sm text-muted leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </SectionWrapper>

            {/* Rider Form */}
            <SectionWrapper id="rider-form">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                        <AnimatedSection>
                            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                                Join the Team
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                                Start Your{" "}
                                <span className="text-muted">Application</span>
                            </h2>
                            <p className="text-muted">
                                Fill out the form below and our team will review your
                                application.
                            </p>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection delay={100}>
                        <RiderForm />
                    </AnimatedSection>
                </div>
            </SectionWrapper>

            {/* FAQ */}
            <RiderFAQ />

            {/* Final CTA */}
            <SectionWrapper dark>
                <AnimatedSection>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                            Ready to{" "}
                            <span className="text-accent">Hit the Road?</span>
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Join SpeedBoys and become part of a modern, professional delivery
                            network.
                        </p>
                        <a
                            href="#rider-form"
                            className="inline-flex items-center justify-center px-10 py-4 bg-accent text-foreground font-bold text-base rounded-full hover:bg-accent-dark hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20"
                        >
                            Apply Now
                            <ArrowRight size={18} className="ml-2" />
                        </a>
                    </div>
                </AnimatedSection>
            </SectionWrapper>
        </>
    );
}

