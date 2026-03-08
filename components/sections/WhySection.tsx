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
    { icon: ShieldCheck, text: "Χωρίς πρόσληψη ή διαχείριση οδηγών" },
    { icon: Rocket, text: "Κλιμάκωση λειτουργιών χωρίς κόπο" },
    { icon: DollarSign, text: "Ξεκλείδωμα εσόδων απευθείας παραγγελιών" },
];

const riderReasons = [
    { icon: Clock, text: "Ευέλικτο ωράριο εργασίας" },
    { icon: Map, text: "Έξυπνο routing & τεχνολογία" },
    { icon: Headphones, text: "Επαγγελματική ομάδα υποστήριξης" },
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
                            Για Εστιατόρια
                        </h3>
                        <p className="text-muted mb-6 leading-relaxed">
                            Κρατήστε τον έλεγχο της επιχείρησής σας. Εμείς αναλαμβάνουμε τον στόλο
                            διανομών ώστε εσείς να εστιάσετε σε αυτό που μετράει — το φαγητό και τους πελάτες σας.
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
                            Μάθετε Περισσότερα
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
                            Για Διανομείς
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Ευέλικτες βάρδιες. Premium πλατφόρμα. Αναπτύξου μαζί με ένα
                            πιο έξυπνο δίκτυο διανομών που επενδύει στους riders του.
                        </p>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {riderReasons.map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <item.icon size={16} className="text-accent" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-300">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/riders"
                            className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-dark transition-colors group"
                        >
                            Μάθετε Περισσότερα
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </SectionWrapper>
    );
}
