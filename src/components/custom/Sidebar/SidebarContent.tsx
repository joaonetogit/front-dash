import cn from "@/lib/utils";
import type { ISidebarContent } from "@/types/components/SidebarContent";

export default function SidebarContent({ children, className }: ISidebarContent) {
	return <div className={cn("flex w-full flex-col gap-6", className)}>{children}</div>;
}
