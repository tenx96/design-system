import * as React from 'react';
import { VerificationCodeInput, Label } from '@/index';

// CSF format story
export const WithFourFields = () => {
  return (
    <>
      <Label withInput={true}>Verification code</Label>
      <VerificationCodeInput />
    </>
  );
};

export default {
  title: 'Inputs/VerificationCodeInput/With Four Fields',
  component: VerificationCodeInput,
  parameters: {
    docs: {
      docPage: {
        title: 'Input',
      },
    },
  },
};
