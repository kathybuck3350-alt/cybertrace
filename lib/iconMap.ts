import {
  TrendingUp,
  Heart,
  DollarSign,
  Gift,
  UserCheck,
  Ticket,
  Briefcase,
  GraduationCap,
  LucideIcon,
} from 'lucide-react';

// Map icon names to actual icon components
export const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Heart,
  DollarSign,
  Gift,
  UserCheck,
  Ticket,
  Briefcase,
  GraduationCap,
};

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || DollarSign; // Default to DollarSign if icon not found
}

