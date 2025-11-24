
import React from 'react';
import { GlassCard } from './ui/GlassCard';

export const AiConsultant: React.FC = () => {
    return (
        <section id="demo" className="py-24 relative z-10">
            <div className="max-w-4xl mx-auto px-4">
                <GlassCard className="text-center p-12">
                    <h2 className="text-3xl text-white font-pixel mb-4">AI Consultant Offline</h2>
                    <p className="text-white/60 font-mono">
                        This feature has been disabled for the static deployment. 
                        Please use the contact form to reach our team.
                    </p>
                </GlassCard>
            </div>
        </section>
    );
};
