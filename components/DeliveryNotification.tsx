"use client";

import { useEffect, useState } from "react";
import { MapPin, Clock, ChevronRight, Store } from "lucide-react";

/**
 * DeliveryNotification — Wolt-style "Accept Order" overlay
 * 
 * Renders inside a phone screen mockup. Features:
 * - iOS-style glassmorphism notification that slides down
 * - Order details with restaurant, distance, earnings
 * - Animated "slide to accept" bar with auto-sliding thumb
 * - Full animation loop: slide-in → hold → auto-accept → confirmed → reset
 */

export function DeliveryNotification() {
    const [phase, setPhase] = useState<
        "hidden" | "appearing" | "visible" | "sliding" | "accepted" | "fadeout"
    >("hidden");

    useEffect(() => {
        let timeouts: NodeJS.Timeout[] = [];

        function runCycle() {
            // Phase 1: Hidden (wait before appearing)
            setPhase("hidden");
            timeouts.push(
                setTimeout(() => setPhase("appearing"), 2000)
            );
            // Phase 2: Appearing → Visible
            timeouts.push(
                setTimeout(() => setPhase("visible"), 2600)
            );
            // Phase 3: Slide to accept animation
            timeouts.push(
                setTimeout(() => setPhase("sliding"), 4500)
            );
            // Phase 4: Accepted!
            timeouts.push(
                setTimeout(() => setPhase("accepted"), 5800)
            );
            // Phase 5: Fade out
            timeouts.push(
                setTimeout(() => setPhase("fadeout"), 7500)
            );
            // Phase 6: Reset cycle
            timeouts.push(
                setTimeout(() => runCycle(), 9000)
            );
        }

        runCycle();

        return () => timeouts.forEach(clearTimeout);
    }, []);

    if (phase === "hidden") return null;

    return (
        <>
            {/* Dimmed backdrop */}
            <div
                className="absolute inset-0 z-30 transition-opacity duration-500"
                style={{
                    background: "rgba(0,0,0,0.4)",
                    opacity: phase === "fadeout" ? 0 : 1,
                }}
            />

            {/* Notification card */}
            <div
                className="absolute left-2 right-2 z-40 transition-all"
                style={{
                    top: "40px",
                    transform:
                        phase === "appearing"
                            ? "translateY(-120%)"
                            : phase === "fadeout"
                                ? "translateY(-120%)"
                                : "translateY(0)",
                    opacity: phase === "fadeout" ? 0 : 1,
                    transitionDuration: phase === "appearing" ? "0ms" : "600ms",
                    transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                    animation:
                        phase === "visible" || phase === "sliding" || phase === "accepted"
                            ? "notification-slide-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
                            : undefined,
                }}
            >
                <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                        background: "rgba(30, 30, 30, 0.85)",
                        backdropFilter: "blur(40px)",
                        WebkitBackdropFilter: "blur(40px)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        boxShadow:
                            "0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)",
                    }}
                >
                    {/* Header */}
                    <div className="px-3 pt-3 pb-2">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                                <Store size={11} className="text-[#1A1D20]" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] font-bold text-white truncate">
                                    New Delivery Request
                                </p>
                                <p className="text-[8px] text-gray-400">SpeedBoys</p>
                            </div>
                            <span className="text-[8px] text-gray-500">now</span>
                        </div>

                        {/* Order details */}
                        <div className="bg-white/5 rounded-xl p-2.5 mb-2 border border-white/5">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-[10px] font-semibold text-white">Pizza Express</p>
                                <span className="text-[8px] px-1.5 py-0.5 bg-accent/15 text-accent rounded-full font-semibold">
                                    Priority
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1">
                                    <MapPin size={8} className="text-gray-400" />
                                    <span className="text-[8px] text-gray-400">1.2 km</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={8} className="text-gray-400" />
                                    <span className="text-[8px] text-gray-400">~8 min</span>
                                </div>
                            </div>
                        </div>

                        {/* Earnings */}
                        <div className="flex items-center justify-between px-1 mb-2">
                            <span className="text-[9px] text-gray-400">Estimated Earnings</span>
                            <span className="text-sm font-display font-bold text-accent">+4.80</span>
                        </div>
                    </div>

                    {/* Slide to accept bar */}
                    <div className="px-3 pb-3">
                        {phase !== "accepted" ? (
                            <div
                                className="relative h-[36px] rounded-full overflow-hidden"
                                style={{
                                    background: "rgba(212, 255, 0, 0.12)",
                                    border: "1px solid rgba(212, 255, 0, 0.2)",
                                }}
                            >
                                {/* Shimmer effect */}
                                <div
                                    className="absolute inset-0 opacity-30"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, transparent, rgba(212,255,0,0.15), transparent)",
                                        animation: "shimmer 2s infinite",
                                    }}
                                />

                                {/* Text */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-[9px] font-semibold text-accent/60 tracking-wider uppercase">
                                        Slide to Accept
                                    </span>
                                    <ChevronRight size={12} className="text-accent/40 ml-0.5" />
                                    <ChevronRight size={12} className="text-accent/30 -ml-1.5" />
                                </div>

                                {/* Sliding thumb */}
                                <div
                                    className="absolute top-[3px] bottom-[3px] w-[30px] rounded-full bg-accent flex items-center justify-center transition-all"
                                    style={{
                                        left:
                                            phase === "sliding"
                                                ? "calc(100% - 33px)"
                                                : "3px",
                                        transitionDuration: phase === "sliding" ? "1200ms" : "0ms",
                                        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                        boxShadow: "0 2px 8px rgba(212,255,0,0.4)",
                                    }}
                                >
                                    <ChevronRight size={14} className="text-[#1A1D20]" />
                                </div>
                            </div>
                        ) : (
                            /* Accepted state */
                            <div
                                className="h-[36px] rounded-full flex items-center justify-center gap-1.5"
                                style={{
                                    background: "rgba(212, 255, 0, 0.2)",
                                    border: "1px solid rgba(212, 255, 0, 0.4)",
                                    animation: "accepted-pulse 0.6s ease-out",
                                }}
                            >
                                <div className="w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path
                                            d="M2 5L4.5 7.5L8 3"
                                            stroke="#1A1D20"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <span className="text-[10px] font-bold text-accent">
                                    Order Accepted!
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
