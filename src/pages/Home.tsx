import TabsOnSettings from '@/components/custom/TabsOnSettings';

export default function HomePage() {
  return (
    <div className='w-full flex-1 px-6 pb-6 pt-8 sm:pb-12'>
      <div className='space-y-6'>
        <h1 className='text-2xl font-medium text-zinc-900 sm:text-3xl'>Settings</h1>
        <TabsOnSettings />
      </div>
    </div>
  );
}
