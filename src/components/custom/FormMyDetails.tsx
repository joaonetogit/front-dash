import { Button } from '../ui/Button';
import BioText from './FormSections/BioText';
import EmailText from './FormSections/EmailText';
import NameText from './FormSections/NameText';
import PortfolioProjects from './FormSections/PortfolioProjects';
import RoleText from './FormSections/RoleText';
import SelectCountry from './FormSections/SelectCountry';
import SelectTimezone from './FormSections/SelectTimezone';
import UploadPhoto from './FormSections/UploadPhoto';

export default function FormMyDetails() {
  return (
    <form action=''>
      <NameText />
      <EmailText />
      <UploadPhoto />
      <RoleText />
      <SelectCountry />
      <SelectTimezone />
      <BioText />
      <PortfolioProjects />
      <div className='flex justify-end gap-3 pt-4'>
        <Button variant='outline'>Cancel</Button>
        <Button variant='primary'>Save</Button>
      </div>
    </form>
  );
}
