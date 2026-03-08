import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Zap, TrendingUp, Shield, Target } from "lucide-react";

const stats = [
    {
        icon: Zap,
        label: "Γρηγορότερη Αποστολή",
        description: "Βελτιστοποιημένη δρομολόγηση και άμεση ανάθεση rider για ελάχιστο χρόνο αναμονής.",
    },
    {
        icon: TrendingUp,
        label: "Περισσότερες Παραγγελίες",
        description: "Ένα επιπλέον κανάλι πωλήσεων που αναπτύσσεται μαζί με το brand του εστιατορίου σας.",
    },
    {
        icon: Shield,
        label: "Μειωμένο Λειτουργικό Φορτίο",
        description: "Μηδενική διαχείριση οδηγών. Αναλαμβάνουμε πρόσληψη, εκπαίδευση και προγραμματισμό.",
    },
    {
        icon: Target,
        label: "Καλύτερη Τελική Παράδοση",
        description: "Επαγγελματίες riders, real-time tracking και ποιοτική παράδοση κάθε φορά.",
    },
];

export function TrustSection() {
    return (
        <SectionWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
                <AnimatedSection>
                    <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                        Γιατί SpeedBoys
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
                        Λειτουργικά Πλεονεκτήματα{" "}
                        <span className="text-muted">που Μετράνε</span>
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
                            <h3 className="text-lg font-display font-bold mb-3">{stat.label}</h3>
                            <p className="text-sm text-muted leading-relaxed">{stat.description}</p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </SectionWrapper>
    );
}
