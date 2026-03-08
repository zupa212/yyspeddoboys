"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Store, MapPin, Zap, Check } from "lucide-react";

export function RiderCTA() {
    const [isOpen, setIsOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState(15);
    const router = useRouter();

    useEffect(() => {
        if (!isOpen) {
            setTimeLeft(15);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setIsOpen(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isOpen]);

    const handleAccept = () => {
        setIsOpen(false);
        router.push("/riders");
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground text-foreground font-bold text-base rounded-full hover:bg-foreground hover:text-background transition-all"
            >
                Γίνε Διανομέας
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[100] flex flex-col bg-[#1A1D24] text-white overflow-hidden"
                        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                    >
                        {/* Status Bar Spacer top area */}
                        <div className="h-12 w-full flex-shrink-0" />

                        <div className="flex-1 flex flex-col items-center px-5 max-w-md mx-auto w-full relative">

                            {/* New Order Tag */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="px-4 py-1.5 rounded-full border border-orange-500/40 flex items-center justify-center gap-1.5 mb-8"
                            >
                                <Zap size={14} className="text-orange-400 fill-orange-400" />
                                <span className="text-[11px] font-bold tracking-widest text-orange-400 uppercase">Νεα Παραγγελια</span>
                            </motion.div>

                            {/* Countdown Timer */}
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", delay: 0.3 }}
                                className="relative w-32 h-32 flex flex-col items-center justify-center mb-10"
                            >
                                {/* SVG Circle */}
                                <svg className="absolute inset-0 w-full h-full -rotate-90">
                                    <circle
                                        cx="64" cy="64" r="60"
                                        fill="none"
                                        stroke="#2A2D35"
                                        strokeWidth="6"
                                    />
                                    <motion.circle
                                        cx="64" cy="64" r="60"
                                        fill="none"
                                        stroke="#FF9F1C"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                        initial={{ strokeDasharray: "377", strokeDashoffset: "0" }}
                                        animate={{ strokeDashoffset: 377 * (1 - timeLeft / 15) }}
                                        transition={{ duration: 1, ease: "linear" }}
                                    />
                                </svg>

                                <div className="flex flex-col items-center justify-center mt-2">
                                    <span className="text-4xl font-bold font-display text-orange-400 leading-none">{timeLeft}</span>
                                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-1 rounded-sm px-1">s</span>
                                </div>
                            </motion.div>

                            {/* Order Details Cards */}
                            <div className="w-full space-y-3 mb-10">
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="bg-[#242730] rounded-2xl p-4 flex items-center gap-4 border border-white/5"
                                >
                                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Store size={20} className="text-orange-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Pick up from</p>
                                        <p className="text-sm font-bold text-white">SpeedBoys Hub</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="bg-[#242730] rounded-2xl p-4 flex items-center gap-4 border border-white/5"
                                >
                                    <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin size={20} className="text-blue-400 fill-blue-400/20" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Deliver to</p>
                                        <p className="text-sm font-bold text-white mb-0.5">Η νέα σου καριέρα</p>
                                        <p className="text-xs text-gray-400">Door code: Απεριόριστα</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Payout */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-center mb-auto"
                            >
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Payout</p>
                                <p className="text-[54px] font-black font-display text-[#4ADE80] tracking-tighter">€ +++</p>
                            </motion.div>
                        </div>

                        {/* Bottom Actions */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="w-full px-5 py-8 max-w-md mx-auto mt-auto flex-shrink-0 bg-gradient-to-t from-[#1A1D24] to-transparent"
                        >
                            <button
                                onClick={handleAccept}
                                className="w-full bg-[#4ADE80] hover:bg-[#3bca6b] active:bg-[#2eab55] active:scale-[0.98] transition-all text-[#1A1D24] font-bold text-xl py-4 rounded-xl flex items-center justify-center gap-2 mb-6"
                            >
                                <Check size={24} strokeWidth={3} />
                                Accept
                            </button>

                            <div className="text-center">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-400 hover:text-white font-semibold text-sm transition-colors py-2 px-4"
                                >
                                    Decline
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
