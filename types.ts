import { LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceStep {
  number: string;
  title: string;
  description: string;
}

export interface AuditField {
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'textarea';
}