import Form, { formInfoType } from 'components/form/Form';
import React from 'react';
import SocialLoginSection from './SocialLoginSection';

interface props {
  defaultData: { [key: string]: string };
  formList: formInfoType[];
  onSubmitEvent: (result: object) => void;
}

const AccountPage = ({ defaultData, formList, onSubmitEvent }: props) => {
  return (
    <article
      className={`flex flex-col justify-center items-center w-[24rem] mx-auto`}
    >
      <section>logo </section>
      <section className={`w-full flex flex-col`}>
        <Form
          defaultData={defaultData}
          formList={formList}
          onSubmitEvent={onSubmitEvent}
        ></Form>
      </section>
      <SocialLoginSection></SocialLoginSection>
    </article>
  );
};

export default AccountPage;
