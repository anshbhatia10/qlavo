import React, { useEffect, useRef } from 'react';

export const LiquidCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        let requestRef: number;
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let curX = window.innerWidth / 2;
        let curY = window.innerHeight / 2;
        
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            // Snappier physics for the "Digital" feel
            const ease = 0.2; 
            
            curX += (mouseX - curX) * ease;
            curY += (mouseY - curY) * ease;
            
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
            }
            
            requestRef = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        requestRef = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(requestRef);
        };
    }, []);

    return (
        <div 
            ref={cursorRef} 
            className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:block mix-blend-difference"
            style={{ willChange: 'transform' }}
        >
            {/* Sharper Square Cursor for Walrus Theme */}
            <div className="w-6 h-6 bg-[#7EE7E7] rotate-45 border-2 border-white shadow-[0_0_15px_rgba(126,231,231,0.5)]"></div>
        </div>
    );
};