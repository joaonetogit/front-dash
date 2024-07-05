import Sidebar from '@/components/custom/Sidebar';
import HomePage from '@/pages/Home';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <HomePage />
    </div>
  );
}
