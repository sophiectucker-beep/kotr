import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  color: string;
  textColor?: string;
  className?: string;
  href?: string;
}

export function CategoryCard({
  title,
  subtitle,
  icon: Icon,
  color,
  textColor = "text-white",
  className,
  href = "#",
}: CategoryCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-3xl p-8 transition-transform hover:scale-[1.03] active:scale-[0.98]",
        color,
        textColor,
        className
      )}
    >
      <Icon className="size-10" strokeWidth={1.8} />
      <span className="text-xl font-bold tracking-wide text-center">
        {title}
      </span>
      {subtitle && (
        <span className="font-sans text-sm font-medium opacity-80 text-center">
          {subtitle}
        </span>
      )}
    </a>
  );
}
