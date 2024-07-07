import DragDropFiles from '../DragDropFiles';
import FormRowContent from '../FormRowContent';

export default function PortfolioProjects() {
  return (
    <FormRowContent
      title='Portfolio projects'
      supportText='Share a few snippets of your work.'
    >
      <DragDropFiles />
    </FormRowContent>
  );
}
