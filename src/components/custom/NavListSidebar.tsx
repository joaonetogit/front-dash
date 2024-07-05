import SidebarMenu from '@/constants/SidebarMenu';
import { ISidebarMenu } from '@/types/constants/SidebarMenu';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/Accordion';

export default function NavListSidebarDropdown() {
  return (
    <nav className="flex flex-col gap-1">
      {SidebarMenu.map((menu: ISidebarMenu) => (
        <Accordion
          key={menu.id}
          type="single"
          collapsible
          className="ease flex w-full items-center justify-between rounded-md"
        >
          <AccordionItem value={`item-${menu.id}`} className="w-full border-none">
            <AccordionTrigger className="group flex cursor-pointer items-center justify-between px-3 py-2 transition-all hover:bg-[#F9F5FF] hover:no-underline">
              <div className="flex items-center gap-3">
                {menu.icon}
                <p className="text-base font-medium transition-all group-hover:text-[#6941C6]">
                  {menu.title}
                </p>
              </div>
            </AccordionTrigger>
            {menu.subMenu && (
              <AccordionContent className="px-3 py-2">
                {menu.subMenu.map((subMenu) => (
                  <Link
                    key={subMenu.title}
                    href={subMenu.link}
                    className="block px-2 py-1 text-sm text-gray-500 transition-all hover:text-gray-700"
                  >
                    {subMenu.title}
                  </Link>
                ))}
              </AccordionContent>
            )}
          </AccordionItem>
        </Accordion>
      ))}
    </nav>
  );
}
