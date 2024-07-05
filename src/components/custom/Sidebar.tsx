import Logo from './Logo';
import NavListSidebarDropdown from './NavListSidebar';
import SearchInput from './SearchInput';

export default function Sidebar() {
  return (
    <div className="flex min-h-screen max-w-sidebar flex-1 flex-col gap-6 px-6 py-8">
      <Logo />
      <SearchInput />
      <NavListSidebarDropdown />
    </div>
  );
}
