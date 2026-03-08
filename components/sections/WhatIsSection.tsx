import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Truck, Globe, BarChart3, Layers } from "lucide-react";

const features = [
    {
        icon: Truck,
        title: "Εξωτερική Διαχείριση Στόλου",
        description:
            "Διαχειριζόμαστε τους διανομείς εμείς. Χωρίς προσλήψεις, χωρίς προγραμματισμό βαρδιών, χωρίς πονοκεφάλους.",
    },
    {
        icon: Globe,
        title: "Κανάλι Απευθείας Παραγγελιών",
        description:
            "Αποκτήστε ένα επιπλέον κανάλι πωλήσεων μέσω του οικοσυστήματος SpeedBoys, πέρα από τα παραδοσιακά marketplaces.",
    },
    {
        icon: BarChart3,
        title: "Κλιμακούμενο Logistics",
        description:
            "Από ένα εστιατόριο σε πενήντα σημεία — η υποδομή μας κλιμακώνεται μαζί με την ανάπτυξή σας.",
    },
    {
        icon: Layers,
        title: "Συμπληρωματικό, Όχι Ανταγωνιστικό",
        description:
            "Λειτουργούμε δίπλα στο Wolt, στο efood και στις δικές σας λειτουργίες — όχι εναντίον τους. Ένας αληθινός logistics partner.",
    },
];

export function WhatIsSection() {
    return (
        <SectionWrapper id="what-is-speedboys">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <AnimatedSection>
                    <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                        Τι Κάνουμε
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
                        Οι Παραγγελίες Σας. Ο Στόλος Μας.{" "}
                        <span className="text-muted">Απόλυτη Ταχύτητα.</span>
                    </h2>
                    <p className="text-lg text-muted leading-relaxed">
                        Το SpeedBoys είναι μια logistics-tech πλατφόρμα που βοηθά επιχειρήσεις εστίασης
                        να εξωτερικεύσουν τη διαχείριση στόλου διανομών, ξεκλειδώνοντας παράλληλα
                        πρόσθετα έσοδα μέσω απευθείας παραγγελιών.
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
