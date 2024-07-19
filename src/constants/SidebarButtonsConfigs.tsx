import type { ISidebarButtonsConfigs } from "@/types/constants/SidebarMenu";
import { Cog8ToothIcon, LifebuoyIcon } from "@heroicons/react/24/outline";

const ButtonsForSidebarButtonsConfigs: ISidebarButtonsConfigs[] = [
	{
		title: "Support",
		icon: <LifebuoyIcon />,
		link: "/support",
	},
	{
		title: "Settings",
		icon: <Cog8ToothIcon />,
		link: "/settings",
	},
] as const;

export default ButtonsForSidebarButtonsConfigs;
