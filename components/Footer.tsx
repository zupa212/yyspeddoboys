import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
    restaurants: [
        { label: "Become a Partner", href: "/partners" },
        { label: "How It Works", href: "/partners#partner-form" },
        { label: "Benefits", href: "/partners" },
        { label: "FAQ", href: "/partners" },
    ],
    riders: [
        { label: "Join as a Rider", href: "/riders" },
        { label: "Requirements", href: "/riders" },
        { label: "Apply Now", href: "/riders#rider-form" },
        { label: "FAQ", href: "/riders" },
    ],
    company: [
        { label: "Thessaloniki Delivery", href: "/thessaloniki-delivery" },
        { label: "Restaurant Delivery Thessaloniki", href: "/restaurant-delivery-thessaloniki" },
        { label: "Fleet Outsourcing Thessaloniki", href: "/fleet-outsourcing-thessaloniki" },
        { label: "Driver Jobs Thessaloniki", href: "/driver-jobs-thessaloniki" },
        { label: "About Us", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Privacy Policy", href: "#" },
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
                            Scalable logistics and delivery fleet operations for food businesses.
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
                                Athens, Greece
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-display font-semibold mb-4 text-sm uppercase tracking-wider">
                            For Restaurants
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
                            For Riders
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
                            Company
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
                        &copy; {new Date().getFullYear()} SpeedBoys. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-xs text-gray-600 hover:text-accent transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-xs text-gray-600 hover:text-accent transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
