import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";

const steps = [
    {
        number: "01",
        title: "Σύνδεση Επιχείρησης",
        description:
            "Γρήγορη εγκατάσταση. Συνδέστε το εστιατόριό σας στην πλατφόρμα SpeedBoys σε λίγα λεπτά — χωρίς πολύπλοκες ενσωματώσεις.",
    },
    {
        number: "02",
        title: "Εμείς Αναλαμβάνουμε",
        description:
            "Ο στόλος μας αναλαμβάνει την παραλαβή και παράδοση. Real-time tracking, έξυπνη ανάθεση, και επαγγελματίες riders.",
    },
    {
        number: "03",
        title: "Εσείς Αναπτύσσεστε",
        description:
            "Εστιάστε στο φαγητό και τους πελάτες σας. Κλιμακώστε τις λειτουργίες χωρίς να διαχειρίζεστε ούτε έναν οδηγό.",
    },
];

export function HowItWorksSection() {
    return (
        <SectionWrapper id="how-it-works">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <AnimatedSection>
                    <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                        Πώς Λειτουργεί
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
                        Τρία Βήματα για{" "}
                        <span className="text-muted">Πιο Έξυπνη Διανομή</span>
                    </h2>
                </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, i) => (
                    <AnimatedSection key={i} delay={i * 150}>
                        <div className="relative text-center md:text-left">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
                                <span className="text-2xl font-display font-black text-accent">
                                    {step.number}
                                </span>
                            </div>
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] right-[-40px] h-px bg-gradient-to-r from-accent/30 to-transparent" />
                            )}
                            <h3 className="text-xl font-display font-bold mb-3">
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
    );
}
