import { useNavigate } from "@tanstack/react-router";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ideas, missions, network, opportunities, knowledge } from "@/lib/mock/data";
import { studentNav } from "./nav-config";

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const navigate = useNavigate();
  const go = (to: string) => {
    onOpenChange(false);
    void navigate({ to });
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search ideas, people, missions, opportunities..." />
      <CommandList>
        <CommandEmpty>Nothing matched that search.</CommandEmpty>
        <CommandGroup heading="Ideas">
          {ideas.map((i) => (
            <CommandItem key={i.id} value={`idea ${i.title} ${i.domain}`} onSelect={() => go(`/app/ideas/${i.id}`)}>
              <span>{i.title}</span>
              <span className="ml-auto text-xs text-muted-foreground">{i.stage}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="People">
          {network.map((p) => (
            <CommandItem key={p.id} value={`person ${p.name} ${p.skills.join(" ")}`} onSelect={() => go("/app/network")}>
              <span>{p.name}</span>
              <span className="ml-auto text-xs text-muted-foreground">{p.role}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Missions">
          {missions.map((m) => (
            <CommandItem key={m.id} value={`mission ${m.title}`} onSelect={() => go("/app/missions")}>
              <span>{m.title}</span>
              <span className="ml-auto text-xs text-muted-foreground">{m.state}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Opportunities">
          {opportunities.map((o) => (
            <CommandItem key={o.id} value={`opportunity ${o.title} ${o.type}`} onSelect={() => go("/app/opportunities")}>
              <span>{o.title}</span>
              <span className="ml-auto text-xs text-muted-foreground">{o.type}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Resources">
          {knowledge.slice(0, 5).map((k) => (
            <CommandItem key={k.id} value={`resource ${k.title} ${k.category}`} onSelect={() => go("/app/knowledge")}>
              <span>{k.title}</span>
              <span className="ml-auto text-xs text-muted-foreground">{k.type}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Go to">
          {studentNav.map((n) => (
            <CommandItem key={n.to} value={`go ${n.label}`} onSelect={() => go(n.to)}>
              <n.icon className="size-4 text-muted-foreground" />
              <span>{n.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
