'use client';

import DashboardLayout from '@/app/components/DashboardLayout';
import AddSubscriptionForm from '@/app/components/subscriptions/AddSubscriptionForm';

export default function NewSubscriptionPage() {
  return (
    <DashboardLayout title="Dashboard" subtitle="Overview of your subscriptions">
      <div className="py-8 px-4">
        <AddSubscriptionForm />
      </div>
    </DashboardLayout>
  );
}
