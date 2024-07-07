import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import FormRowContent from '../FormRowContent';

export default function SelectCountry() {
  return (
    <FormRowContent title='Country'>
      <Select>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Country' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='brazil'>Brazil</SelectItem>
          <SelectItem value='eua'>United States</SelectItem>
          <SelectItem value='canada'>Canadá</SelectItem>
        </SelectContent>
      </Select>
    </FormRowContent>
  );
}
