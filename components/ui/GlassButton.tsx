import React from 'react';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
    href?: string;
}

export const GlassButton: React.FC<GlassButtonProps> = ({ children, variant = 'primary', className = '', href, ...props }) => {
    // Sharp, boxy, high-tech look
    const baseStyles = "relative group overflow-hidden transition-all duration-200 active:translate-y-0.5 font-bold tracking-tight uppercase text-sm inline-block text-center cursor-pointer";
    
    // Primary: Walrus Cyan or White style
    const primaryStyles = `
        bg-[#7EE7E7]
        text-black
        border-2 border-transparent
        hover:bg-[#5ED4D4]
        px-6 py-3
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        hover:translate-x-[2px] hover:translate-y-[2px]
    `;

    // Secondary: Dark pixel glass
    const secondaryStyles = `
        bg-white/10
        backdrop-blur-md 
        border border-white/20
        text-white
        px-6 py-3
        hover:bg-white/20
        hover:border-white/40
    `;

    const finalStyles = `${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles} ${className}`;

    const content = (
        <div className="relative z-10 flex items-center justify-center gap-2">
            {children}
        </div>
    );

    if (href) {
        return (
            <a href={href} className={finalStyles} {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {content}
            </a>
        );
    }

    return (
        <button className={finalStyles} {...props}>
            {content}
        </button>
    );
};