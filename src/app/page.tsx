import Sidebar from '@/components/custom/Sidebar';
import HomePage from '@/pages/Home';

export default function Home() {
  return (
    <main className='flex'>
      <Sidebar />
      <HomePage />
    </main>
  );
}
