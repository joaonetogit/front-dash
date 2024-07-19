import ButtonsForSidebarButtonsConfigs from '@/constants/SidebarButtonsConfigs';

export default function SidebarButtonsConfigs() {
	return (
		<div className="flex flex-col">
			{ButtonsForSidebarButtonsConfigs.map(item => (
				<button
					type="button"
					key={item.title}
					className="group flex items-center gap-3 rounded-md px-3 py-2 transition-all hover:bg-[#F5F3FF]"
				>
					<div className="h-iconSidebar w-iconSidebar text-iconSidebar transition-all group-hover:text-violet-700">
						{item.icon}
					</div>
					<p className="text-md font-medium text-zinc-700 transition-all group-hover:text-violet-700">{item.title}</p>
				</button>
			))}
		</div>
	);
}
