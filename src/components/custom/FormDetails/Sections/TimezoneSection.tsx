import { FormControl, FormField, FormItem } from '@/components/ui/Form';
import timezones from '@/constants/Timezones';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/Select';
import { ClockIcon } from '@radix-ui/react-icons';
import FormMyDetailsRowContent from '../FormMyDetailsRowContent';

export default function TimezoneSection({ form }: any) {
  return (
    <FormMyDetailsRowContent title='Timezone'>
      <FormField
        control={form.control}
        name='timezone'
        render={({ field }) => (
          <FormItem className='flex-1'>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger
                  className='w-full'
                  icon={<ClockIcon className='size-4 text-[#71717A]' />}
                >
                  <SelectValue
                    placeholder='Timezone'
                    className='text-left'
                  />
                </SelectTrigger>
              </FormControl>

              <SelectContent>
                {timezones.map(timezone => (
                  <SelectItem
                    key={timezone.utc}
                    value={timezone.utc}
                  >
                    <span className='mr-2 font-medium text-zinc-900'>{timezone.name}</span>
                    <span className='text-muted-foreground'>{timezone.utc}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    </FormMyDetailsRowContent>
  );
}
