import * as React from 'react';
import { StatusHint } from '@/index';

export const info = () => <StatusHint appearance="info">{'Info'}</StatusHint>;

export default {
  title: 'Indicators/StatusHint/Variants/Info',
  component: StatusHint,
  parameters: {
    docs: {
      docPage: {
        title: 'StatusHint',
      },
    },
  },
};
