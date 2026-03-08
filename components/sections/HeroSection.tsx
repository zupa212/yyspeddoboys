"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { RiderCTA } from "@/components/interactive/RiderCTA";
import {
    Zap,
    Shield,
    TrendingUp,
    Clock,
    Package,
    MapPin,
} from "lucide-react";

const trustBullets = [
    { icon: Zap, text: "Αστραπιαία Αποστολή" },
    { icon: Shield, text: "Μηδενικό Στρες Διαχείρισης" },
    { icon: TrendingUp, text: "Περισσότερες Παραγγελίες" },
    { icon: Clock, text: "Σχεδιασμένο για Κλίμακα" },
];

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 sm:pt-24 pb-16 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent/5 pointer-events-none" />
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Top: Text content centered */}
                <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
                    <AnimatedSection delay={100}>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-black tracking-tight leading-[1.0] mb-6">
                            Διανομές χωρίς{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10">Όρια.</span>
                                <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 sm:h-4 lg:h-5 bg-accent/30 -z-0 rounded-sm" />
                            </span>
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <p className="text-lg sm:text-xl lg:text-2xl text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
                            Κλιμάκωσε τις διανομές σου ή γίνε μέλος του στόλου μας. Το SpeedBoys
                            συνδέει επιχειρήσεις εστίασης με ένα δίκτυο logistics υψηλών επιδόσεων.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={300}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Link
                                href="/partners"
                                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-foreground font-bold text-base rounded-full hover:bg-accent-dark hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20 animate-pulse-glow"
                            >
                                Γίνε Συνεργάτης
                            </Link>
                            <RiderCTA />
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={400}>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                            {trustBullets.map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-muted">
                                    <item.icon size={15} className="text-accent flex-shrink-0" />
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>

                {/* Bottom: 3D Perspective Phone Mockups */}
                <AnimatedSection delay={400}>
                    <div
                        className="relative max-w-6xl mx-auto flex items-end justify-center gap-0"
                        style={{
                            perspective: "1800px",
                            perspectiveOrigin: "50% 40%",
                            height: "clamp(420px, 50vw, 640px)",
                        }}
                    >
                        {/* PHONE 1 — Left */}
                        <div className="absolute left-[2%] sm:left-[5%] lg:left-[10%] bottom-0 z-10 hero-phone-left" style={{ transform: "rotateY(18deg) rotateX(2deg) rotateZ(-2deg) translateZ(-30px)", transformStyle: "preserve-3d" }}>
                            <div className="w-[200px] sm:w-[240px] lg:w-[280px] phone-frame animate-float">
                                <PhoneFrame><PhoneScreen1 /></PhoneFrame>
                            </div>
                        </div>

                        {/* PHONE 2 — Center */}
                        <div className="relative z-30 hero-phone-center" style={{ transform: "rotateX(2deg) translateZ(60px) translateY(-10px)", transformStyle: "preserve-3d" }}>
                            <div className="w-[230px] sm:w-[270px] lg:w-[310px] phone-frame animate-float" style={{ animationDelay: "0.8s" }}>
                                <PhoneFrame><PhoneScreen2 /></PhoneFrame>
                            </div>
                        </div>

                        {/* PHONE 3 — Right */}
                        <div className="absolute right-[2%] sm:right-[5%] lg:right-[10%] bottom-0 z-10 hero-phone-right" style={{ transform: "rotateY(-18deg) rotateX(2deg) rotateZ(2deg) translateZ(-30px)", transformStyle: "preserve-3d" }}>
                            <div className="w-[200px] sm:w-[240px] lg:w-[280px] phone-frame animate-float" style={{ animationDelay: "1.6s" }}>
                                <PhoneFrame><PhoneScreen3 /></PhoneFrame>
                            </div>
                        </div>

                        {/* Floating cards */}
                        <div className="absolute left-0 top-[5%] z-40 animate-float-slow hidden lg:block">
                            <div className="glass rounded-2xl p-4 shadow-2xl border border-white/20">
                                <p className="text-[10px] text-muted uppercase tracking-wider mb-1">Παραγγελίες Σήμερα</p>
                                <p className="text-2xl font-display font-bold text-foreground">147</p>
                                <p className="text-xs text-accent mt-1 font-semibold">↑ +23%</p>
                            </div>
                        </div>
                        <div className="absolute right-0 top-[10%] z-40 animate-float hidden lg:block" style={{ animationDelay: "3s" }}>
                            <div className="glass rounded-2xl p-4 shadow-2xl border border-white/20">
                                <p className="text-[10px] text-muted uppercase tracking-wider mb-1">Ταχύτητα Ανάθεσης</p>
                                <p className="text-2xl font-display font-bold text-accent">2.4s</p>
                            </div>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-40 animate-float-slow hidden sm:block" style={{ animationDelay: "1s" }}>
                            <div className="glass rounded-2xl px-5 py-3 shadow-2xl border border-white/20 flex items-center gap-3">
                                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                                    <Package size={16} className="text-foreground" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted uppercase tracking-wider">Νέα Παραγγελία</p>
                                    <p className="text-sm font-display font-bold text-foreground">Ανάθεση σε rider — 2.4s</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative bg-[#1a1a1a] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden" style={{ padding: "8px", boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 4px 6px rgba(0,0,0,0.15), 0 12px 24px rgba(0,0,0,0.2), 0 24px 48px rgba(0,0,0,0.25), 0 48px 80px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
            <div className="absolute right-[-2px] top-[25%] w-[3px] h-[40px] bg-[#2a2a2a] rounded-l-sm" />
            <div className="absolute left-[-2px] top-[20%] w-[3px] h-[25px] bg-[#2a2a2a] rounded-r-sm" />
            <div className="absolute left-[-2px] top-[32%] w-[3px] h-[40px] bg-[#2a2a2a] rounded-r-sm" />
            <div className="absolute left-[-2px] top-[42%] w-[3px] h-[40px] bg-[#2a2a2a] rounded-r-sm" />
            <div className="relative w-full aspect-[9/19.5] bg-black rounded-[2rem] sm:rounded-[2.4rem] overflow-hidden">
                {children}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-10" />
            </div>
        </div>
    );
}

function PhoneScreen1() {
    return (
        <div className="w-full h-full bg-black relative">
            <Image src="/mockups/phone-1.jpg" alt="SpeedBoys Rider App Map" fill className="object-cover" priority />
        </div>
    );
}

function PhoneScreen2() {
    return (
        <div className="w-full h-full bg-black relative">
            <Image src="/mockups/phone-2.jpg" alt="SpeedBoys Delivery Request" fill className="object-cover" priority />
        </div>
    );
}

function PhoneScreen3() {
    return (
        <div className="w-full h-full bg-black relative">
            <Image src="/mockups/phone-3.jpg" alt="SpeedBoys Order Details" fill className="object-cover" priority />
        </div>
    );
}
