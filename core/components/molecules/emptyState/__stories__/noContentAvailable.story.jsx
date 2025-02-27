import * as React from 'react';
import { EmptyState, Button } from '@/index';
import noContent from './assets/noContent.png';

export const noContentAvailable = () => {
  const title = 'Manage your outreach campaigns';
  const description = 'Campaigns let you reach out to patients with text messages, emails and voice calls';
  return (
    <div className="h-100 pb-5 bg-secondary-lightest">
      <EmptyState title={title} description={description} imageSrc={noContent} size="large">
        <Button size="large" appearance="primary">
          Reload page
        </Button>
      </EmptyState>
    </div>
  );
};

export default {
  title: 'Layout/EmptyState/No Content Available',
  component: EmptyState,
};
