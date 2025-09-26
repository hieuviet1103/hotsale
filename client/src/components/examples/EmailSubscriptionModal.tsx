import { useState } from 'react';
import EmailSubscriptionModal from '../EmailSubscriptionModal';
import { Button } from '@/components/ui/button';

export default function EmailSubscriptionModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <Button onClick={() => setIsOpen(true)}>
        Open Email Subscription Modal
      </Button>
      
      <EmailSubscriptionModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={(subscription) => console.log('Subscription:', subscription)}
      />
    </div>
  );
}