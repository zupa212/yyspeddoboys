import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ArrowRight } from "lucide-react";

export function SplitCTASection() {
    return (
        <SectionWrapper className="bg-border-light/50">
            <AnimatedSection>
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
                        Έτοιμοι να Ξεκινήσετε;
                    </h2>
                    <p className="text-lg text-muted">
                        Είτε είστε εστιατόριο που ψάχνει υποστήριξη στόλου, είτε rider
                        που ψάχνει ευκαιρία — το SpeedBoys είναι φτιαγμένο για εσάς.
                    </p>
                </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <AnimatedSection delay={100}>
                    <Link
                        href="/partners"
                        className="group block bg-card-bg rounded-3xl p-8 sm:p-10 border border-border hover:border-accent/40 hover:shadow-xl transition-all duration-300"
                    >
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                            Για Εστιατόρια
                        </p>
                        <h3 className="text-2xl font-display font-bold mb-3">
                            Γίνε Συνεργάτης
                        </h3>
                        <p className="text-muted text-sm mb-6 leading-relaxed">
                            Εξωτερικεύστε τις λειτουργίες του στόλου διανομών σας και αρχίστε να λαμβάνετε
                            περισσότερες απευθείας παραγγελίες μέσω SpeedBoys.
                        </p>
                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-foreground font-bold text-sm rounded-full group-hover:scale-105 transition-transform">
                            Ξεκινήστε
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </AnimatedSection>

                <AnimatedSection delay={200}>
                    <Link
                        href="/riders"
                        className="group block bg-dark-surface text-white rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-accent/40 hover:shadow-xl transition-all duration-300"
                    >
                        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                            Για Διανομείς
                        </p>
                        <h3 className="text-2xl font-display font-bold mb-3">
                            Γίνε Διανομέας
                        </h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            Ευέλικτη εργασία διανομών με μοντέρνα πλατφόρμα. Μπες σε ένα αναπτυσσόμενο
                            δίκτυο και κέρδισε με τους δικούς σου όρους.
                        </p>
                        <span className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent font-bold text-sm rounded-full group-hover:bg-accent group-hover:text-foreground transition-all">
                            Κάνε Αίτηση
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </AnimatedSection>
            </div>
        </SectionWrapper>
    );
}
