'use client';

import { useUserContext } from '@/context/UserProvider';
import { Card, CardContent } from '../ui/Card';
import { Progress } from '../ui/Progress';

export default function UsedSpace() {
  const { user } = useUserContext();
  const userPercentStorageUsed = user?.percentStorageUsed;

  return (
    <Card className="rounded-md border-none bg-violet-50 shadow-none">
      <CardContent className="flex flex-col gap-4 px-4 py-5">
        <div className="space-y-1">
          <p className="text-sm font-medium text-[#6D28D9]">Used space</p>
          <p className="text-sm text-violet-500">
            Your team has used {userPercentStorageUsed}% of your available space. Need more?
          </p>
        </div>
        <Progress
          barColor="bg-violet-500"
          className="bg-[#EDE9FE]"
          value={userPercentStorageUsed}
        />
        <div className="flex items-center gap-3 text-sm">
          <button type="button" className="text-violet-500" aria-label="Dismiss more space">
            Dismiss
          </button>
          <button
            type="button"
            className="font-semibold text-violet-700"
            aria-label="Get more space"
          >
            Upgrade plan
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
