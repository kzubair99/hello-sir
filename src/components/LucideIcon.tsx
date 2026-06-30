import React from 'react';
import {
  FileText,
  DollarSign,
  CheckSquare,
  Activity,
  Percent,
  BarChart3,
  ShieldCheck,
  Award,
  Briefcase,
  Users,
  FileSignature,
  Utensils,
  Globe,
  TrendingUp,
  Gift,
  Compass,
  CheckCircle2,
  Clock,
  Coins,
  HeartHandshake,
  Phone,
  Mail,
  MapPin,
  Search,
  MessageSquare,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Star,
  ArrowRight,
  Send,
  Check,
  ExternalLink,
  User,
  Map,
  ShieldAlert,
  Building
} from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = '', size }: LucideIconProps) {
  const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
    FileText,
    DollarSign,
    CheckSquare,
    Activity,
    Percent,
    BarChart3,
    ShieldCheck,
    Award,
    Briefcase,
    Users,
    FileSignature,
    Utensils,
    Globe,
    TrendingUp,
    Gift,
    Compass,
    CheckCircle2,
    Clock,
    Coins,
    HeartHandshake,
    Phone,
    Mail,
    MapPin,
    Search,
    MessageSquare,
    Menu,
    X,
    ChevronDown,
    ChevronUp,
    Star,
    ArrowRight,
    Send,
    Check,
    ExternalLink,
    User,
    Map,
    ShieldAlert,
    Building
  };

  const IconComponent = iconMap[name] || FileText;
  return <IconComponent className={className} size={size} />;
}
