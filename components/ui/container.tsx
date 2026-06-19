import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("w-full max-w-3xl px-6 lg:px-16", className)}>{children}</div>;
}
