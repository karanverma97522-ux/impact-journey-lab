import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { studentNav, supportNav, mobileNav } from "./nav-config";
import { CommandPalette } from "./CommandPalette";
import { NotificationsPanel } from "./NotificationsPanel";
import { ChatPanel } from "./ChatPanel";
import { currentUser } from "@/lib/mock/data";
import { Avatar } from "./ui";
import {
  Bell,
  ChevronsLeft,
  ChevronsRight,
  MessageSquare,
  Search,
  Sparkles,
  X,
  Menu,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

function NavList({
  items,
  collapsed,
  pathname,
  onNavigate,
}: {
  items: typeof studentNav;
  collapsed: boolean;
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <ul className="space-y-0.5">
      {items.map((item) => {
        const active = item.to === "/app" ? pathname === "/app" : pathname.startsWith(item.to);
        return (
          <li key={item.to}>
            <Link
              to={item.to}
              onClick={onNavigate}
              title={collapsed ? item.label : undefined}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-accent text-primary"
                  : "text-subtle-foreground hover:bg-surface hover:text-foreground",
                collapsed && "justify-center px-0",
              )}
            >
              <item.icon className={cn("size-4 shrink-0", active ? "text-primary" : "text-muted-foreground")} />
              {!collapsed ? (
                <>
                  <span className="truncate">{item.label}</span>
                  {item.badge ? (
                    <span className="ml-auto inline-flex min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-semibold text-primary-foreground">
                      {item.badge}
                    </span>
                  ) : null}
                </>
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [collapsed, setCollapsed] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const sidebar = (mobile = false) => (
    <div className="flex h-full flex-col">
      <div className={cn("flex h-16 items-center gap-2 px-4", collapsed && !mobile && "justify-center px-0")}>
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Sparkles className="size-4" />
        </span>
        {!collapsed || mobile ? (
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold tracking-[-0.01em]">Innovation OS</span>
            <span className="block truncate text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Student workspace
            </span>
          </span>
        ) : null}
        {mobile ? (
          <button className="ml-auto rounded-lg p-2 hover:bg-muted" onClick={() => setMobileNavOpen(false)}>
            <X className="size-4" />
          </button>
        ) : null}
      </div>

      <nav className={cn("min-h-0 flex-1 overflow-y-auto px-3 py-2", collapsed && !mobile && "px-2")}>
        <NavList
          items={studentNav}
          collapsed={collapsed && !mobile}
          pathname={pathname}
          onNavigate={() => setMobileNavOpen(false)}
        />
        <div className="my-4 h-px bg-border" />
        <NavList
          items={supportNav}
          collapsed={collapsed && !mobile}
          pathname={pathname}
          onNavigate={() => setMobileNavOpen(false)}
        />
      </nav>

      <div className={cn("border-t border-border p-3", collapsed && !mobile && "px-2")}>
        <Link
          to="/app/profile"
          onClick={() => setMobileNavOpen(false)}
          className={cn(
            "flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-surface",
            collapsed && !mobile && "justify-center",
          )}
        >
          <Avatar initials={currentUser.initials} />
          {!collapsed || mobile ? (
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium">{currentUser.name}</span>
              <span className="block truncate text-[11px] text-muted-foreground">{currentUser.institution}</span>
            </span>
          ) : null}
        </Link>
        {!mobile ? (
          <button
            onClick={() => setCollapsed((v) => !v)}
            className={cn(
              "mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-surface",
              collapsed && "justify-center px-0",
            )}
          >
            {collapsed ? <ChevronsRight className="size-4" /> : <ChevronsLeft className="size-4" />}
            {!collapsed ? "Collapse" : null}
          </button>
        ) : null}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-30 hidden border-r border-border bg-card transition-[width] duration-200 lg:block",
          collapsed ? "w-[72px]" : "w-[264px]",
        )}
      >
        {sidebar()}
      </aside>

      <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
        <SheetContent side="left" className="w-[280px] p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          {sidebar(true)}
        </SheetContent>
      </Sheet>

      <div className={cn("transition-[padding] duration-200", collapsed ? "lg:pl-[72px]" : "lg:pl-[264px]")}>
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur md:px-6">
          <button
            className="rounded-lg p-2 text-muted-foreground hover:bg-muted lg:hidden"
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open navigation"
          >
            <Menu className="size-5" />
          </button>

          <button
            onClick={() => setPaletteOpen(true)}
            className="group flex h-10 min-w-0 flex-1 items-center gap-2 rounded-xl border border-border bg-surface px-3 text-left text-sm text-muted-foreground transition-colors hover:border-primary/30 md:max-w-lg"
          >
            <Search className="size-4 shrink-0" />
            <span className="truncate">Search ideas, people, missions, opportunities...</span>
            <kbd className="ml-auto hidden shrink-0 rounded-md border border-border bg-background px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground sm:block">
              ⌘K
            </kbd>
          </button>

          <div className="ml-auto flex items-center gap-1">
            <button
              onClick={() => setChatOpen(true)}
              className="relative rounded-xl p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Open chat"
            >
              <MessageSquare className="size-5" />
              <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-teal ring-2 ring-background" />
            </button>

            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="relative rounded-xl p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Notifications"
                >
                  <Bell className="size-5" />
                  <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-orange ring-2 ring-background" />
                </button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-auto p-0">
                <NotificationsPanel />
              </PopoverContent>
            </Popover>

            <Link to="/app/profile" className="ml-1">
              <Avatar initials={currentUser.initials} className="size-9" />
            </Link>
          </div>
        </header>

        <main className="mx-auto w-full max-w-[1280px] px-4 pb-24 pt-6 md:px-6 md:pb-10 md:pt-8">{children}</main>
      </div>

      {/* Mobile bottom navigation */}
      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur lg:hidden">
        <ul className="flex">
          {mobileNav.map((item) => {
            const active = item.to === "/app" ? pathname === "/app" : pathname.startsWith(item.to);
            return (
              <li key={item.to} className="flex-1">
                <Link
                  to={item.to}
                  className={cn(
                    "flex flex-col items-center gap-1 py-2.5 text-[10px] font-semibold transition-colors",
                    active ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  <item.icon className="size-5" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Sheet open={chatOpen} onOpenChange={setChatOpen}>
        <SheetContent side="right" className="flex w-[min(100vw,460px)] flex-col p-0 sm:max-w-none">
          <SheetTitle className="border-b border-border px-4 py-4 text-sm font-semibold">
            Ecosystem chat
          </SheetTitle>
          <div className="min-h-0 flex-1">
            <ChatPanel compact />
          </div>
        </SheetContent>
      </Sheet>

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </div>
  );
}
