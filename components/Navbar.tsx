"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-xl flex items-center justify-center font-display font-black text-foreground text-sm sm:text-base group-hover:scale-105 transition-transform">
                            S
                        </div>
                        <span className="font-display font-bold text-lg sm:text-xl tracking-tight">
                            Speed<span className="text-muted">Boys</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/partners"
                            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                        >
                            Για Εστιατόρια
                        </Link>
                        <Link
                            href="/riders"
                            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                        >
                            Για Διανομείς
                        </Link>
                        <Link
                            href="/partners"
                            className="inline-flex items-center justify-center px-5 py-2.5 bg-accent text-foreground font-semibold text-sm rounded-full hover:bg-accent-dark hover:scale-105 active:scale-95 transition-all shadow-sm"
                        >
                            Γίνε Συνεργάτης
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-xl hover:bg-black/5 transition-colors"
                        aria-label="Εναλλαγή μενού"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden glass border-t border-border-light animate-fade-up">
                    <div className="px-4 py-6 space-y-4">
                        <Link
                            href="/partners"
                            onClick={() => setIsOpen(false)}
                            className="block text-base font-medium text-foreground py-2"
                        >
                            Για Εστιατόρια
                        </Link>
                        <Link
                            href="/riders"
                            onClick={() => setIsOpen(false)}
                            className="block text-base font-medium text-foreground py-2"
                        >
                            Για Διανομείς
                        </Link>
                        <div className="pt-2 space-y-3">
                            <Link
                                href="/partners"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center px-5 py-3 bg-accent text-foreground font-semibold rounded-full"
                            >
                                Γίνε Συνεργάτης
                            </Link>
                            <Link
                                href="/riders"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center px-5 py-3 border-2 border-foreground text-foreground font-semibold rounded-full"
                            >
                                Γίνε Διανομέας
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
