import { useState } from "react";
import { conversations as seed, type Conversation } from "@/lib/mock/data";
import { cn } from "@/lib/utils";
import { Avatar, Tag } from "./ui";
import { Paperclip, Send, Smile } from "lucide-react";

const kinds = ["All", "Direct", "Teams", "Missions", "Ideas", "Mentors"] as const;
const kindMatch: Record<string, Conversation["kind"] | "All"> = {
  All: "All",
  Direct: "Direct",
  Teams: "Team",
  Missions: "Mission",
  Ideas: "Idea",
  Mentors: "Mentor",
};

export function ChatPanel({ compact = false }: { compact?: boolean }) {
  const [list, setList] = useState<Conversation[]>(seed);
  const [activeId, setActiveId] = useState(seed[0].id);
  const [filter, setFilter] = useState<(typeof kinds)[number]>("All");
  const [draft, setDraft] = useState("");

  const shown = filter === "All" ? list : list.filter((c) => c.kind === kindMatch[filter]);
  const active = list.find((c) => c.id === activeId) ?? list[0];

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    setList((prev) =>
      prev.map((c) =>
        c.id === active.id
          ? {
              ...c,
              last: `You: ${text}`,
              time: "now",
              messages: [
                ...c.messages,
                { id: `${Date.now()}`, from: "Aarav", me: true, text, time: "now" },
              ],
            }
          : c,
      ),
    );
    setDraft("");
  };

  return (
    <div className={cn("flex h-full min-h-0", compact ? "flex-col" : "flex-col md:flex-row")}>
      <aside
        className={cn(
          "flex min-h-0 flex-col border-border",
          compact ? "border-b" : "md:w-72 md:shrink-0 md:border-r border-b md:border-b-0",
        )}
      >
        <div className="flex gap-1 overflow-x-auto px-3 py-2">
          {kinds.map((k) => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              className={cn(
                "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors",
                filter === k ? "bg-accent text-primary" : "text-muted-foreground hover:bg-muted",
              )}
            >
              {k}
            </button>
          ))}
        </div>
        <ul className={cn("min-h-0 overflow-y-auto", compact && "max-h-52")}>
          {shown.map((c) => (
            <li key={c.id}>
              <button
                onClick={() => {
                  setActiveId(c.id);
                  setList((p) => p.map((x) => (x.id === c.id ? { ...x, unread: 0 } : x)));
                }}
                className={cn(
                  "flex w-full gap-3 px-4 py-3 text-left transition-colors hover:bg-surface",
                  c.id === active.id && "bg-accent/60",
                )}
              >
                <Avatar initials={c.name.slice(0, 2).toUpperCase()} />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm font-medium text-foreground">{c.name}</span>
                    <span className="shrink-0 text-[10px] text-muted-foreground">{c.time}</span>
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-muted-foreground">{c.last}</span>
                </span>
                {c.unread ? (
                  <span className="mt-1 inline-flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                    {c.unread}
                  </span>
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <section className="flex min-h-0 flex-1 flex-col">
        <header className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{active.name}</p>
            <p className="truncate text-xs text-muted-foreground">{active.context ?? "Direct message"}</p>
          </div>
          <Tag tone={active.kind === "Mentor" ? "teal" : "indigo"}>{active.kind}</Tag>
        </header>
        <div className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-surface px-4 py-4">
          {active.messages.map((m) => (
            <div key={m.id} className={cn("flex", m.me ? "justify-end" : "justify-start")}>
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl border px-3.5 py-2.5 text-sm",
                  m.me
                    ? "border-primary/20 bg-accent text-foreground"
                    : "border-border bg-card text-foreground",
                )}
              >
                {!m.me ? (
                  <p className="mb-1 text-[11px] font-semibold text-muted-foreground">{m.from}</p>
                ) : null}
                <p>{m.text}</p>
                <p className="mt-1 text-[10px] text-muted-foreground">{m.time}</p>
              </div>
            </div>
          ))}
        </div>
        <footer className="flex items-center gap-2 border-t border-border px-3 py-3">
          <button className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted" aria-label="Attach file">
            <Paperclip className="size-4" />
          </button>
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder={`Message ${active.name}`}
            className="h-10 min-w-0 flex-1 rounded-xl border border-border bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/40"
          />
          <button className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted" aria-label="Add reaction">
            <Smile className="size-4" />
          </button>
          <button
            onClick={send}
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Send className="size-4" />
            <span className="hidden sm:inline">Send</span>
          </button>
        </footer>
      </section>
    </div>
  );
}
