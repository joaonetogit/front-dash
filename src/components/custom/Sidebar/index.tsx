import { Separator } from "../../ui/Separator";
import Logo from "../Logo";
import UsedSpace from "../UsedSpace";
import User from "../User";
import SearchInput from "./SearchInput";
import SidebarButtonsConfigs from "./SidebarButtonsConfigs";
import SidebarContent from "./SidebarContent";
import SidebarNavListAccordion from "./SidebarNavList";

export default function Sidebar() {
	return (
		<aside className="hidden min-h-screen max-w-sidebar flex-1 flex-col justify-between gap-6 border-r-[1px] border-border px-6 py-8 sm:flex">
			<SidebarContent>
				<Logo />
				<SearchInput />
				<SidebarNavListAccordion />
			</SidebarContent>
			<SidebarContent>
				<SidebarButtonsConfigs />
				<UsedSpace />
				<Separator />
				<User />
			</SidebarContent>
		</aside>
	);
}
