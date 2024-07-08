import DragDropFiles from '../../DragDropFiles';
import FormMyDetailsRowContent from '../FormMyDetailsRowContent';

export default function PortfolioSection() {
  return (
    <FormMyDetailsRowContent
      title='Portfolio projects'
      supportText='Share a few snippets of your work.'
    >
      <DragDropFiles />
    </FormMyDetailsRowContent>
  );
}
