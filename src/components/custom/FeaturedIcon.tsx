import type { IFeaturedIcon } from "@/types/components/FeaturedIcon";
import { cva } from "class-variance-authority";

const iconStyles = cva("flex items-center justify-center rounded-full border-[6px]", {
	variants: {
		variant: {
			default: "border-[#F9FAFB] h-10 w-10",
			primary: "border-[#F5F3FF] h-10 w-10",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

const innerDivStyles = cva("flex h-full w-full items-center justify-center rounded-full", {
	variants: {
		variant: {
			default: "bg-[#F2F4F7]",
			primary: "bg-[#EDE9FE]",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

const iconVariantStyles = cva("", {
	variants: {
		variant: {
			default: "text-[#52525B] size-5 stroke-[1.67px]",
			primary: "text-violet-600 size-4 stroke-[1.33px]",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export default function FeaturedIcon({ variant = "default", icon }: IFeaturedIcon) {
	return (
		<div className={iconStyles({ variant })}>
			<div className={innerDivStyles({ variant })}>
				<div className={iconVariantStyles({ variant })}>{icon}</div>
			</div>
		</div>
	);
}
