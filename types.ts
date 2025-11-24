import React from 'react';

export interface Message {
    role: 'user' | 'model';
    text: string;
}

export interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface TestimonialProps {
    name: string;
    role: string;
    company: string;
    quote: string;
}