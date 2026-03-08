import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import {
    Package,
    MapPin,
    BarChart3,
    Bell,
    Clock,
    Users,
} from "lucide-react";

const screens = [
    { icon: Package, label: "Order Management", value: "Real-time flow" },
    { icon: MapPin, label: "Live Tracking", value: "GPS precision" },
    { icon: BarChart3, label: "Analytics", value: "Smart insights" },
    { icon: Bell, label: "Notifications", value: "Instant alerts" },
    { icon: Clock, label: "ETA Engine", value: "Predictive timing" },
    { icon: Users, label: "Fleet Control", value: "Full visibility" },
];

export function ShowcaseSection() {
    return (
        <SectionWrapper dark id="showcase">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <AnimatedSection>
                    <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                        The Platform
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 text-white">
                        Built for Speed.{" "}
                        <span className="text-gray-500">Designed for Control.</span>
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        A modern logistics dashboard that gives restaurants full visibility
                        into their delivery operations — and riders the tools to move faster.
                    </p>
                </AnimatedSection>
            </div>

            {/* App screens mockup grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                {screens.map((screen, i) => (
                    <AnimatedSection key={i} delay={i * 80}>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300 group">
                            <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                                <screen.icon size={20} className="text-accent" />
                            </div>
                            <p className="text-sm font-display font-bold text-white mb-1">
                                {screen.label}
                            </p>
                            <p className="text-xs text-gray-500">{screen.value}</p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>

            {/* Floating phone in center */}
            <AnimatedSection delay={300}>
                <div className="mt-16 flex justify-center">
                    <div className="relative">
                        <div className="w-[240px] sm:w-[280px] h-[480px] sm:h-[560px] bg-dark-surface-2 rounded-[2.5rem] shadow-2xl shadow-black/50 border border-white/10 overflow-hidden p-2.5 animate-float-slow">
                            <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden">
                                <div className="p-5 pt-10 space-y-4">
                                    <div className="text-center">
                                        <p className="text-[10px] text-gray-600 uppercase tracking-widest">
                                            SpeedBoys
                                        </p>
                                        <p className="text-lg font-display font-bold text-white mt-1">
                                            Dashboard
                                        </p>
                                    </div>

                                    <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                                        <p className="text-[10px] text-gray-500 uppercase mb-1">Active Fleet</p>
                                        <div className="flex items-end gap-1">
                                            <span className="text-3xl font-display font-black text-accent">28</span>
                                            <span className="text-xs text-gray-500 mb-1">riders</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                                            <p className="text-[9px] text-gray-600">Completed</p>
                                            <p className="text-lg font-bold text-white">312</p>
                                        </div>
                                        <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                                            <p className="text-[9px] text-gray-600">Avg Time</p>
                                            <p className="text-lg font-bold text-white">22m</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        {[85, 65, 90, 45].map((w, i) => (
                                            <div key={i} className="h-2 bg-white/5 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-accent to-accent/50 rounded-full"
                                                    style={{ width: `${w}%` }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </SectionWrapper>
    );
}
