import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
    restaurants: [
        { label: "Γίνε Συνεργάτης", href: "/partners" },
        { label: "Πώς Λειτουργεί", href: "/partners#partner-form" },
        { label: "Πλεονεκτήματα", href: "/partners" },
        { label: "Συχνές Ερωτήσεις", href: "/partners" },
    ],
    riders: [
        { label: "Γίνε Διανομέας", href: "/riders" },
        { label: "Απαιτήσεις", href: "/riders" },
        { label: "Κάνε Αίτηση", href: "/riders#rider-form" },
        { label: "Συχνές Ερωτήσεις", href: "/riders" },
    ],
    company: [
        { label: "Σχετικά με εμάς", href: "#" },
        { label: "Επικοινωνία", href: "#" },
        { label: "Καριέρα", href: "#" },
        { label: "Πολιτική Απορρήτου", href: "#" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-dark-surface text-gray-400 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                                <span className="text-sm font-display font-black text-foreground">S</span>
                            </div>
                            <span className="text-lg font-display font-bold text-white">
                                Speed<span className="text-gray-400">Boys</span>
                            </span>
                        </Link>
                        <p className="text-sm text-gray-500 leading-relaxed mb-4 max-w-xs">
                            Σύγχρονες λύσεις logistics και διαχείρισης στόλου διανομών για επιχειρήσεις εστίασης.
                        </p>
                        <div className="space-y-2">
                            <a href="mailto:hello@speedboys.gr" className="flex items-center gap-2 text-sm hover:text-accent transition-colors">
                                <Mail size={14} />
                                hello@speedboys.gr
                            </a>
                            <a href="tel:+302101234567" className="flex items-center gap-2 text-sm hover:text-accent transition-colors">
                                <Phone size={14} />
                                +30 210 123 4567
                            </a>
                            <div className="flex items-center gap-2 text-sm">
                                <MapPin size={14} />
                                Θεσσαλονίκη, Ελλάδα
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-display font-semibold mb-4 text-sm uppercase tracking-wider">
                            Για Εστιατόρια
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.restaurants.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm hover:text-accent transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-display font-semibold mb-4 text-sm uppercase tracking-wider">
                            Για Διανομείς
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.riders.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm hover:text-accent transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-display font-semibold mb-4 text-sm uppercase tracking-wider">
                            Εταιρεία
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm hover:text-accent transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-600">
                        &copy; {new Date().getFullYear()} SpeedBoys. Με επιφύλαξη κάθε δικαιώματος.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-xs text-gray-600 hover:text-accent transition-colors">
                            Όροι Χρήσης
                        </Link>
                        <Link href="#" className="text-xs text-gray-600 hover:text-accent transition-colors">
                            Πολιτική Απορρήτου
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
