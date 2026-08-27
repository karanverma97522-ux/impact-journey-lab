import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { notifications as seed, type NotificationItem } from "@/lib/mock/data";
import { Tag } from "./ui";
import { cn } from "@/lib/utils";

const categories = ["All", "Collaboration", "Mentorship", "Missions", "Incubation"] as const;

export function NotificationsPanel({ onClose }: { onClose?: () => void }) {
  const [items, setItems] = useState<NotificationItem[]>(seed);
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const shown = filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <div className="w-[min(92vw,380px)]">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <h3 className="text-sm font-semibold">Notifications</h3>
        <button
          className="text-xs font-semibold text-primary hover:opacity-80"
          onClick={() => setItems((p) => p.map((i) => ({ ...i, unread: false })))}
        >
          Mark all as read
        </button>
      </div>
      <div className="flex gap-1 overflow-x-auto border-b border-border px-3 py-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={cn(
              "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors",
              filter === c ? "bg-accent text-primary" : "text-muted-foreground hover:bg-muted",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <ul className="max-h-[380px] divide-y divide-border overflow-y-auto">
        {shown.map((n) => (
          <li key={n.id}>
            <button
              onClick={() => setItems((p) => p.map((i) => (i.id === n.id ? { ...i, unread: false } : i)))}
              className="flex w-full gap-3 px-4 py-3 text-left transition-colors hover:bg-surface"
            >
              <span
                className={cn(
                  "mt-1.5 size-1.5 shrink-0 rounded-full",
                  n.unread ? "bg-primary" : "bg-transparent",
                )}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <Tag tone="neutral">{n.category}</Tag>
                  <span className="text-[11px] text-muted-foreground">{n.time}</span>
                </span>
                <span className="mt-1.5 block text-sm font-medium text-foreground">{n.title}</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">{n.body}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="border-t border-border px-4 py-3">
        <Link to="/app/notifications" onClick={onClose} className="text-xs font-semibold text-primary hover:opacity-80">
          Open notification center →
        </Link>
      </div>
    </div>
  );
}
