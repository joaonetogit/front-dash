import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import DataTabsList from '@/constants/TabsList';

export default function HomePage() {
  return (
    <div className="w-full flex-1 px-6 pb-12 pt-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
        <Tabs defaultValue={DataTabsList[0].text} className="w-full">
          <TabsList className="relative border-b border-border p-0">
            <div className="flex gap-4">
              {DataTabsList.map((tab) => (
                <TabsTrigger key={tab.text} value={tab.text}>
                  <p>{tab.text}</p>
                  {tab.qtd && (
                    <span className="ml-2 rounded-2xl bg-zinc-100 px-2 py-[2px] text-xs font-medium text-zinc-700">
                      {tab.qtd}
                    </span>
                  )}
                </TabsTrigger>
              ))}
            </div>
          </TabsList>
          {DataTabsList.map((tab) => (
            <TabsContent key={tab.text} value={tab.text}>
              {tab.component}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
