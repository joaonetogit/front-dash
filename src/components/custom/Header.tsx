import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

export default function Header() {
	return (
		<div className="flex w-full items-center justify-between border-b border-border px-4 py-[15.5px] sm:hidden">
			<Logo />
			<Bars3CenterLeftIcon className="h-6 w-6 text-zinc-700" />
		</div>
	);
}
