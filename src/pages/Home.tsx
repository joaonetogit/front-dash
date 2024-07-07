import TabsOnSettings from '@/components/custom/TabsOnSettings';

export default function HomePage() {
  return (
    <div className='w-full flex-1 px-6 pb-12 pt-8'>
      <div className='space-y-6'>
        <h1 className='text-3xl font-medium text-zinc-900'>Settings</h1>
        <TabsOnSettings />
      </div>
    </div>
  );
}
