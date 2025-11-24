import React from 'react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
    return (
        <div className={`
            relative overflow-hidden
            bg-[#121217]
            border border-white/10
            transition-all duration-300
            hover:border-[#7EE7E7]/50
            group
            ${className}
        `}>
            {/* Grid overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none bg-[linear-gradient(to_right,#7EE7E7_1px,transparent_1px),linear-gradient(to_bottom,#7EE7E7_1px,transparent_1px)] bg-[size:20px_20px] transition-opacity duration-300" />
            
            <div className="relative z-10 p-8 h-full">
                {children}
            </div>
        </div>
    );
};