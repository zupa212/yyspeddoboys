import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import {
    ChefHat,
    Bike,
    ArrowRight,
    ShieldCheck,
    Rocket,
    DollarSign,
    Clock,
    Map,
    Headphones,
} from "lucide-react";

const restaurantReasons = [
    { icon: ShieldCheck, text: "No driver hiring or management" },
    { icon: Rocket, text: "Scale delivery operations effortlessly" },
    { icon: DollarSign, text: "Unlock direct-order revenue" },
];

const riderReasons = [
    { icon: Clock, text: "Flexible working hours" },
    { icon: Map, text: "Smart routing & technology" },
    { icon: Headphones, text: "Professional support team" },
];

export function WhySection() {
    return (
        <SectionWrapper className="bg-border-light/50">
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Restaurant Card */}
                <AnimatedSection>
                    <div className="bg-card-bg rounded-3xl p-8 sm:p-10 border border-border h-full flex flex-col">
                        <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                            <ChefHat size={26} className="text-accent" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3">
                            For Restaurants
                        </h3>
                        <p className="text-muted mb-6 leading-relaxed">
                            Keep control of your business. We handle the delivery fleet so you
                            can focus on what matters — your food and your customers.
                        </p>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {restaurantReasons.map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <item.icon size={16} className="text-accent" />
                                    </div>
                                    <span className="text-sm font-medium">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/partners"
                            className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-accent transition-colors group"
                        >
                            Learn More for Restaurants
                            <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                    </div>
                </AnimatedSection>

                {/* Rider Card */}
                <AnimatedSection delay={150}>
                    <div className="bg-dark-surface rounded-3xl p-8 sm:p-10 border border-white/10 h-full flex flex-col text-white">
                        <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                            <Bike size={26} className="text-accent" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3">
                            For Riders
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Flexible shifts. Premium platform. Grow with a smarter delivery
                            network that invests in its riders.
                        </p>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {riderReasons.map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <item.icon size={16} className="text-accent" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-300">
                                        {item.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/riders"
                            className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-dark transition-colors group"
                        >
                            Learn More for Riders
                            <ArrowRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </SectionWrapper>
    );
}
