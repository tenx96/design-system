import * as React from 'react';
import Dropdown from '../Dropdown';
import Label from '@/components/atoms/label';
import { Uncontrolled, Controlled } from './_common_/types';

const options = [
  {
    label: 'Male',
    value: 'Male',
    selected: true
  },
  {
    label: 'Female',
    value: 'Female',
  }
];

// CSF format story
export const gender = () => (
  <div className="mb-10 w-25">
    <Label withInput={true}>Gender</Label>
    <Dropdown
      options={options}
    />
  </div>
);

export default {
  title: 'Atoms|Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown',
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead']
        }
      }
    }
  }
};
