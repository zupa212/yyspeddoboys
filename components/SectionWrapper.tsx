import { type ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
    dark?: boolean;
}

export function SectionWrapper({
    children,
    className = "",
    id,
    dark = false,
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`py-20 sm:py-28 lg:py-32 ${dark ? "bg-dark-surface text-white" : ""
                } ${className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        </section>
    );
}
