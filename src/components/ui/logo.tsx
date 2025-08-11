import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8", 
    lg: "h-12"
  };

  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src="/lovable-uploads/77b5d3f4-a6c7-47f3-9285-2ac9e17fe2a8.png"
        alt="Intelizap - IA para Atendimento" 
        className={cn(
          "transition-all duration-300 hover:scale-105 object-contain", 
          sizeClasses[size]
        )}
      />
    </div>
  );
}