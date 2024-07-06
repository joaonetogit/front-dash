import { Separator } from '../ui/Separator';
import Logo from './Logo';
import NavListSidebarDropdown from './NavListSidebar';
import SearchInput from './SearchInput';
import SidebarContent from './SidebarContent';
import UsedSpace from './UsedSpace';
import User from './User';

export default function Sidebar() {
  return (
    <aside className="flex min-h-screen max-w-sidebar flex-1 flex-col justify-between gap-6 px-6 py-8">
      <SidebarContent>
        <Logo />
        <SearchInput />
        <NavListSidebarDropdown />
      </SidebarContent>
      <SidebarContent>
        <UsedSpace />
        <Separator />
        <User />
      </SidebarContent>
    </aside>
  );
}
