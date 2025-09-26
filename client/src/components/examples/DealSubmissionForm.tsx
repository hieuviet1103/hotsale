import DealSubmissionForm from '../DealSubmissionForm';

export default function DealSubmissionFormExample() {
  return (
    <div className="p-4">
      <DealSubmissionForm
        onSubmit={(deal) => console.log('Deal submitted:', deal)}
        onClose={() => console.log('Form closed')}
      />
    </div>
  );
}