"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useAnimation, useMotionValue, useTransform } from "motion/react";
import { Store, ChevronRight, X, UserCircle2 } from "lucide-react";

export function RiderCTA() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAccepted, setIsAccepted] = useState(false);
    const router = useRouter();
    const controls = useAnimation();

    // The width of the track is around 280px (for a typical mobile width)
    // The thumb is 30px wide. Max drag is roughly track width - thumb width.
    const maxDrag = 230;

    const handleDragEnd = async (event: any, info: any) => {
        if (info.offset.x > maxDrag * 0.75) {
            // Success! Slide to end and redirect
            setIsAccepted(true);
            await controls.start({ x: maxDrag, transition: { type: "spring", stiffness: 300, damping: 20 } });

            // Wait a moment so they can see the "Accepted" state, then redirect
            setTimeout(() => {
                setIsOpen(false);
                setIsAccepted(false);
                controls.set({ x: 0 });
                router.push("/riders");
            }, 600);
        } else {
            // Reset
            controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 25 } });
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground text-foreground font-bold text-base rounded-full hover:bg-foreground hover:text-background transition-all"
            >
                Γίνε Διανομέας
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl z-10"
                        style={{
                            background: "rgba(30, 30, 30, 0.95)",
                            backdropFilter: "blur(40px)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            boxShadow: "0 24px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
                        }}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={16} />
                        </button>

                        <div className="px-5 pt-6 pb-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(212,255,0,0.3)]">
                                    <UserCircle2 size={24} className="text-[#1A1D20]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-white">Αίτηση Συνεργάτη</p>
                                    <p className="text-xs text-gray-400">SpeedBoys Network</p>
                                </div>
                            </div>

                            <div className="bg-white/5 rounded-xl p-3 mb-4 border border-white/5">
                                <p className="text-sm font-semibold text-white mb-1">Έτοιμος να ξεκινήσεις;</p>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Πρόκειται να μεταφερθείς στην πλατφόρμα εγγραφής νέων διανομέων. Είσαι έτοιμος να γίνεις μέλος της καλύτερης ομάδας;
                                </p>
                            </div>
                        </div>

                        <div className="px-5 pb-6">
                            {!isAccepted ? (
                                <div className="relative h-[48px] rounded-full overflow-hidden" style={{ background: "rgba(212, 255, 0, 0.12)", border: "1px solid rgba(212, 255, 0, 0.2)" }}>
                                    <div className="absolute inset-0 opacity-30" style={{ background: "linear-gradient(90deg, transparent, rgba(212,255,0,0.15), transparent)", animation: "shimmer 2s infinite" }} />

                                    {/* Text in the background */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <span className="text-xs font-semibold text-accent/70 tracking-wider uppercase ml-4">
                                            Σύρε για Συνέχεια
                                        </span>
                                        <ChevronRight size={14} className="text-accent/40 ml-1" />
                                        <ChevronRight size={14} className="text-accent/30 -ml-1" />
                                    </div>

                                    {/* Draggable Thumb */}
                                    <motion.div
                                        drag="x"
                                        dragConstraints={{ left: 0, right: maxDrag }}
                                        dragElastic={0.05}
                                        onDragEnd={handleDragEnd}
                                        animate={controls}
                                        className="absolute top-[4px] bottom-[4px] w-[40px] rounded-full bg-accent flex items-center justify-center cursor-grab active:cursor-grabbing shadow-[0_2px_10px_rgba(212,255,0,0.4)] z-10"
                                        style={{ left: "4px" }}
                                    >
                                        <ChevronRight size={18} className="text-[#1A1D20]" />
                                    </motion.div>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="h-[48px] rounded-full flex items-center justify-center gap-2"
                                    style={{ background: "rgba(212, 255, 0, 0.2)", border: "1px solid rgba(212, 255, 0, 0.4)" }}
                                >
                                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 10 10" fill="none"><path d="M2 5L4.5 7.5L8 3" stroke="#1A1D20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    <span className="text-sm font-bold text-accent">Επιβεβαιώθηκε!</span>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
}
