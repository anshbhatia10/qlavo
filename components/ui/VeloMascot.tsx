import React from 'react';

interface VeloMascotProps {
    className?: string;
    small?: boolean;
}

export const VeloMascot: React.FC<VeloMascotProps> = ({ className = '', small = false }) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            {/* Motion Blur / Data Trails Background */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7EE7E7]/20 blur-xl ${small ? 'w-16 h-16' : 'w-64 h-64'}`} />

            <svg
                role="img"
                aria-label="Velo Mascot"
                viewBox="0 0 200 200"
                className={`relative z-10 drop-shadow-[0_0_15px_rgba(126,231,231,0.5)] ${small ? 'w-24 h-24' : 'w-full h-full max-w-[500px] max-h-[500px]'}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g className="animate-float">
                    {/* BODY - Sharp Geometric */}
                    <path
                        d="M140 100 L110 130 L60 110 L50 80 L90 60 L140 100Z"
                        className="fill-[#0B0B0F] stroke-[#7EE7E7] stroke-2"
                    />

                    {/* WINGS - Rapid Flutter Animation */}
                    <g className="origin-[90px_80px] animate-wing-flutter">
                        {/* Upper Wing */}
                        <path
                            d="M90 60 L70 10 L140 20 L110 70"
                            className="stroke-[#E0CCF7] stroke-2 fill-[#E0CCF7]/10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        {/* Lower Wing (Ghosting for speed effect) */}
                        <path
                            d="M90 60 L65 20 L130 30 L105 75"
                            className="stroke-[#7EE7E7]/50 stroke-1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>

                    <g className="origin-[90px_80px] animate-wing-flutter-delayed">
                        <path
                            d="M90 80 L70 140 L130 130 L110 100"
                            className="stroke-[#E0CCF7] stroke-2 fill-[#E0CCF7]/10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>

                    {/* HEAD & BEAK */}
                    <path
                        d="M140 100 L160 90 L155 80 L140 75"
                        className="fill-[#0B0B0F] stroke-[#7EE7E7] stroke-2"
                    />
                    {/* Beak - Long & Precise */}
                    <path
                        d="M160 90 L195 95 L160 98"
                        className="fill-[#CCF381] stroke-[#CCF381] stroke-1"
                    />

                    {/* EYE - The AI Core */}
                    <circle cx="148" cy="88" r="3" className="fill-[#CCF381] animate-pulse">
                        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                    </circle>

                    {/* TAIL - Data Stream */}
                    <path
                        d="M50 80 L20 70 L10 90 L60 110"
                        className="stroke-[#CCF381] stroke-2 fill-none"
                        strokeDasharray="4 4"
                    />
                    <circle cx="15" cy="80" r="1.5" className="fill-[#7EE7E7]" />
                    <circle cx="25" cy="75" r="1.5" className="fill-[#7EE7E7]" />
                </g>
            </svg>
        </div>
    );
};