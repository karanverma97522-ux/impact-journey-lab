import {
  Home,
  Lightbulb,
  Users,
  Target,
  Compass,
  BookOpen,
  MessageSquare,
  Bell,
  Settings,
  User,
  LifeBuoy,
  Send,
  Flag,
  type LucideIcon,
} from "lucide-react";

export type NavItem = { label: string; to: string; icon: LucideIcon; badge?: number };

export const studentNav: NavItem[] = [
  { label: "Home", to: "/app", icon: Home },
  { label: "My Ideas", to: "/app/ideas", icon: Lightbulb },
  { label: "Network", to: "/app/network", icon: Users },
  { label: "My Missions", to: "/app/missions", icon: Target },
  { label: "Opportunities", to: "/app/opportunities", icon: Compass },
  { label: "Knowledge", to: "/app/knowledge", icon: BookOpen },
  { label: "Chat", to: "/app/chat", icon: MessageSquare, badge: 3 },
  { label: "Notifications", to: "/app/notifications", icon: Bell, badge: 3 },
  { label: "Settings", to: "/app/settings", icon: Settings },
  { label: "Profile", to: "/app/profile", icon: User },
];

export const supportNav: NavItem[] = [
  { label: "Help & Support", to: "/app/help", icon: LifeBuoy },
  { label: "Send Feedback", to: "/app/feedback", icon: Send },
  { label: "Report an Issue", to: "/app/report", icon: Flag },
];

export const mobileNav: NavItem[] = [
  { label: "Home", to: "/app", icon: Home },
  { label: "Ideas", to: "/app/ideas", icon: Lightbulb },
  { label: "Missions", to: "/app/missions", icon: Target },
  { label: "Chat", to: "/app/chat", icon: MessageSquare },
  { label: "More", to: "/app/knowledge", icon: BookOpen },
];
