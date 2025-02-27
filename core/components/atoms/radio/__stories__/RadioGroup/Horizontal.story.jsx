import * as React from 'react';
import { ChoiceList, Radio } from '@/index';

// CSF format story
export const horizontal = () => {
  return (
    <ChoiceList
      alignment="horizontal"
      choices={[
        { label: 'Male', name: 'gender', value: 'Male' },
        { label: 'Female', name: 'gender', value: 'Female' },
        { label: 'Other', name: 'gender', value: 'Other' },
      ]}
      title="Gender"
    />
  );
};

export default {
  title: 'Selection/Radio/RadioGroup/Horizontal',
  component: Radio,
  subcomponents: { ChoiceList },
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] },
      },
    },
  },
};
