import AccountPage from 'components/account/AccountPage';
import LockIcon from 'components/icon/LockIcon';
import React from 'react';

const ValidateEmailPage = () => {
  return (
    <AccountPage
      defaultData={{}}
      formList={[
        {
          fieldType: 'input',
          name: 'code',
          placeholder: '인증 번호 입력',
          required: true,
          error: { text: '인증 번호를 입력하세요' },
          additionalFieldInfo: {
            label: '인증 번호 입력',
            inputType: 'text',
            icon: <LockIcon></LockIcon>,
          },
        },
      ]}
      onSubmitEvent={() => {
        console.log('');
      }}
    ></AccountPage>
  );
};

export default ValidateEmailPage;
