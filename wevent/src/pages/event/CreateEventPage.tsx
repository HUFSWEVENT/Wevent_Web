import Form from 'components/form/Form';
import React from 'react';
import { formInfoType } from 'type/formType';

const CreateEventPage = () => {
  const formList: formInfoType[] = [
    {
      title: '행사명',
      fieldType: 'input',
      name: '행사명',
      placeholder: '행사 주제를 입력해주세요. (최대 20자)',
      required: true,
      disabled: false,
      error: null,
      additionalFieldInfo: null,
    },
    {
      title: '주최사명',
      fieldType: 'input',
      name: '주최사명',
      placeholder: '주최사명을 입력해주세요.',
      required: true,
      disabled: false,
      error: null,
      additionalFieldInfo: null,
    },
    {
      title: '주최사 이메일',
      fieldType: 'input',
      name: '주최사 이메일',
      placeholder: '협찬사와 컨택할 메일을 입력해주세요.',
      required: true,
      disabled: false,
      error: null,
      additionalFieldInfo: null,
    },
  ];
  return (
    <article className="px-12">
      <section>title</section>
      <section>
        <Form
          formClassName="bg-[#F8F8F8] rounded-3xl py-6 px-8"
          formList={formList}
          onSubmitEvent={function (result: object): void {
            throw new Error('Function not implemented.');
          }}
          buttonList={[]}
        ></Form>
      </section>
    </article>
  );
};

export default CreateEventPage;
