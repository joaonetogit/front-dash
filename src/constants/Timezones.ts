import { ITimezone } from '@/types/constants/Timezones';

const timezones: ITimezone[] = [
  { name: 'Greenwich Mean Time', utc: 'UTC+00:00' },
  { name: 'Central European Time', utc: 'UTC+01:00' },
  { name: 'Eastern European Time', utc: 'UTC+02:00' },
  { name: 'Eastern Standard Time', utc: 'UTC-05:00' },
  { name: 'Central Standard Time', utc: 'UTC-06:00' },
  { name: 'Mountain Standard Time', utc: 'UTC-07:00' },
  { name: 'Pacific Standard Time', utc: 'UTC-08:00' },
] as const;

export default timezones;
