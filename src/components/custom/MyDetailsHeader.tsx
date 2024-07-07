import { Button } from '../ui/Button';
import { Separator } from '../ui/Separator';

export default function MyDetailsHeader() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
          <p className="text-sm text-zinc-700">Update your photo and personal details here.</p>
        </div>
        <div className="space-x-3">
          <Button variant="outline">Cancel</Button>
          <Button variant="primary">Save</Button>
        </div>
      </div>
      <Separator className="mt-5" />
    </div>
  );
}
