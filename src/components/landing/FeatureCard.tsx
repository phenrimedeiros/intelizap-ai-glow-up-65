import { cn } from "@/lib/utils";
import { ComponentType } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
  return (
    <article className={cn(
      "group rounded-xl border bg-card p-5 shadow-sm transition-all duration-300", 
      "hover:shadow-lg hover:translate-y-[-4px] hover:border-brand/20", 
      "animate-fade-in cursor-pointer",
      className
    )}>
      <div className="flex items-start gap-4">
        <div className="rounded-md bg-secondary p-2 text-brand transition-all duration-300 group-hover:bg-brand/10 group-hover:text-brand group-hover:scale-110">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold text-base group-hover:text-foreground transition-colors">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">{description}</p>
        </div>
      </div>
    </article>
  );
}
