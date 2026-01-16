import { LucideIcon } from "lucide-react";

interface HighlightCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function HighlightCard({ icon: Icon, title, description }: HighlightCardProps) {
  return (
    <div className="group flex flex-col items-center text-center p-6 rounded-xl bg-card card-shadow hover:card-shadow-hover transition-all duration-500">
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
