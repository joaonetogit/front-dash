import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/ToggleGroup';
import DataToogleBioText from '@/constants/ToogleBioText';
import FormRowContent from '../FormRowContent';

export default function BioText() {
  return (
    <FormRowContent
      title='Bio'
      supportText='Write a short introduction.'
    >
      <div className='flex flex-col gap-3'>
        <div className='flex gap-4'>
          <Select>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Normal Text' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='normal'>Normal Text</SelectItem>
              <SelectItem value='heading-1'>Heading 1</SelectItem>
              <SelectItem value='heading-2'>Heading 2</SelectItem>
            </SelectContent>
          </Select>
          <ToggleGroup type='multiple'>
            {DataToogleBioText.map(item => (
              <ToggleGroupItem
                className='p-2 text-[#A1A1AA]'
                key={item.value}
                value={item.value}
                aria-label={item.ariaLabel}
              >
                <div className='h-4 w-4'>{item.icon}</div>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className='space-y-[6px]'>
          <Textarea
            placeholder='Type your bio here.'
            id='message'
            className='resize-none'
          />
          <p className='text-sm text-muted-foreground'>275 characters left</p>
        </div>
      </div>
    </FormRowContent>
  );
}
