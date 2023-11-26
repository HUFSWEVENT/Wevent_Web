import Form from 'components/form/Form';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { formInfoType } from 'type/formType';

const CreateEventPage = () => {
  const methods = useForm({
    defaultValues: {},
    mode: 'onChange',
  });
  const formList: formInfoType[] = [
    {
      title: '행사명',
      fieldType: 'input',
      name: 'name',
      placeholder: '행사 주제를 입력해주세요. (최대 20자)',
      required: true,
      disabled: false,
      error: null,
      additionalFieldInfo: null,
    },
    {
      title: '주최사명',
      fieldType: 'input',
      name: 'boss',
      placeholder: '주최사명을 입력해주세요.',
      required: true,
      disabled: false,
      error: null,
      additionalFieldInfo: null,
    },
    {
      title: '주최사 이메일',
      fieldType: 'input',
      name: 'email',
      placeholder: '협찬사와 컨택할 메일을 입력해주세요.',
      required: true,
      disabled: false,
      error: null,
      additionalFieldInfo: null,
    },
    {
      title: '행사 분야/유형',
      fieldType: 'phased-select',
      name: ['kind', 'kind2'],
      placeholder: ['분야 선택', '세부 분야 선택'],
      required: true,
      disabled: false,
      error: null,
      additionalFieldInfo: {
        menuItemObj: {
          0: [{ value: '경영', label: '경영' }],
          1: [{ value: '강연/세미나', label: '강연/세미나' }],
        },
        width: '15rem',
      },
    },
    {
      title: '행사 규모',
      fieldType: 'select',
      name: 'size',
      placeholder: '예상 참여 인원',
      required: true,
      disabled: false,
      error: null,
      additionalFieldInfo: {
        menuItemObj: {
          0: [
            { value: '50명 이하', label: '50명 이하' },
            { value: '50명', label: '50명' },
            { value: '100명', label: '100명' },
            { value: '150명', label: '150명' },
            { value: '200명', label: '200명' },
            { value: '300명', label: '300명' },
            { value: '400명', label: '400명' },
            { value: '500명', label: '500명' },
            { value: '600명', label: '600명' },
            { value: '700명', label: '700명' },
            { value: '800명', label: '800명' },
            { value: '900명', label: '900명' },
            { value: '1000명', label: '1000명' },
          ],
        },
        width: '15rem',
      },
    },
  ];

  const tempSaveHandler = useCallback(async () => {
    console.log(methods.getValues());
  }, [methods]);

  return (
    <article className="px-12">
      <section>title</section>
      <section>
        <Form
          formClassName="bg-[#F8F8F8] rounded-3xl py-6 px-8"
          globalMethods={methods}
          formList={formList}
          onSubmitEvent={function (result: object): void {
            throw new Error('Function not implemented.');
          }}
          buttonInfo={{
            list: [
              {
                content: '임시저장',
                clickEvent: tempSaveHandler,
                color: 'gray',
                width: '9rem',
              },
              {
                content: '행사등록',
                clickEvent: () => {
                  console.log('행사등록');
                },
                type: 'submit',
                width: '9rem',
              },
            ],
            direction: 'row',
          }}
        ></Form>
      </section>
    </article>
  );
};

export default CreateEventPage;
