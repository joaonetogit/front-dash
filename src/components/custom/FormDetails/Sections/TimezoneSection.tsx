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
import SelectedValue from '../../SelectedValue';
import FormMyDetailsRowContent from '../FormMyDetailsRowContent';

export default function TimezoneSection({ form }: any) {
  return (
    <FormMyDetailsRowContent title='Timezone'>
      <FormField
        control={form.control}
        name='timezone'
        render={({ field }) => (
          <FormItem className='mt-[6px] flex-1 sm:mt-0'>
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
                    placeholder={<SelectedValue archive={timezones[0]} />}
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
                    <SelectedValue archive={timezone} />
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
