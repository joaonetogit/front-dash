import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select';
import { Textarea } from '../ui/Textarea';
import FormRowContent from './FormRowContent';

export default function FormMyDetails() {
  return (
    <form action="">
      <FormRowContent title="Name">
        <div className="flex w-full items-center gap-4">
          <div className="flex-1">
            <Input type="text" id="firstName" placeholder="First Name" />
          </div>
          <div className="flex-1">
            <Input type="text" id="lastName" placeholder="Last Name" />
          </div>
        </div>
      </FormRowContent>
      <FormRowContent title="Email address">
        <Input
          type="email"
          id="email"
          placeholder="Your best e-mail"
          icon={<EnvelopeIcon className="size-4 text-zinc-700" />}
        />
      </FormRowContent>
      <FormRowContent title="Your photo" supportText="This will be displayed on your profile.">
        <Input type="text" id="role" placeholder="Your role" />
      </FormRowContent>
      <FormRowContent title="Role">
        <Input type="text" id="role" placeholder="Your role" />
      </FormRowContent>
      <FormRowContent title="Country">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="brazil">Brazil</SelectItem>
            <SelectItem value="eua">United States</SelectItem>
            <SelectItem value="canada">Canadá</SelectItem>
          </SelectContent>
        </Select>
      </FormRowContent>
      <FormRowContent title="Timezone">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="brazil">Brazil</SelectItem>
            <SelectItem value="eua">United States</SelectItem>
            <SelectItem value="canada">Canadá</SelectItem>
          </SelectContent>
        </Select>
      </FormRowContent>
      <FormRowContent title="Bio" supportText="Write a short introduction.">
        <Textarea placeholder="Type your bio here." id="message" />
        <p className="text-sm text-muted-foreground">275 characters left</p>
      </FormRowContent>
      <FormRowContent title="Portfolio projects" supportText="Share a few snippets of your work.">
        <Input type="text" id="role" placeholder="Your role" />
      </FormRowContent>
      <div className="flex justify-end gap-3 pt-4">
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Save</Button>
      </div>
    </form>
  );
}
