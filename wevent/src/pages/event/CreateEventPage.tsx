import { createPlaceApi } from 'apis/event';
import Header from 'components/Header/Header';
import Form from 'components/form/Form';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { formInfoType } from 'type/formType';

const CreateEventPage = () => {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: {},
    mode: 'onChange',
  });
  const [thumnail, setThumnail] = useState('');
  const formList: formInfoType[] = [
    {
      title: '행사명',
      fieldType: 'input',
      name: 'title',
      placeholder: '행사 주제를 입력해주세요. (최대 20자)',
      required: true,
      disabled: false,
      error: null,
      additionalFieldInfo: null,
    },
    {
      title: '주최사명',
      fieldType: 'input',
      name: 'host',
      placeholder: '주최사명을 입력해주세요.',
      required: true,
      disabled: false,
      error: null,
      additionalFieldInfo: null,
    },
    {
      title: '주최사 이메일',
      fieldType: 'input',
      name: 'host_email',
      placeholder: '협찬사와 컨택할 메일을 입력해주세요.',
      required: true,
      disabled: false,
      error: null,
      additionalFieldInfo: null,
    },
    {
      title: '행사 분야/유형',
      fieldType: 'phased-select',
      name: ['field', 'category'],
      placeholder: ['분야 선택', '세부 분야 선택'],
      required: true,
      disabled: false,
      error: null,
      additionalFieldInfo: {
        menuItemObj: {
          0: [
            { value: '경영', label: '경영' },
            { value: '경제/금융', label: '경제/금융' },
            { value: '과학기술', label: '과학기술' },
            { value: '관광/여행', label: '관광/여행' },
            { value: '디자인/영상', label: '디자인/영상' },
            { value: '라이프', label: '라이프' },
            { value: '마케팅', label: '마케팅' },
            { value: '예술', label: '예술' },
            { value: '의료/의학', label: '의료/의학' },
            { value: '인문/사회', label: '인문/사회' },
            { value: '창업', label: '창업' },
            { value: '커리어', label: '커리어' },
            { value: '행사 기획', label: '행사 기획' },
            { value: 'IT/프로그래밍', label: 'IT/프로그래밍' },
            { value: '기타', label: '기타' },
          ],
          1: [
            { value: '강연/세미나', label: '강연/세미나' },
            { value: '공연/전시', label: '공연/전시' },
            { value: '관광/투어', label: '관광/투어' },
            { value: '기업회의', label: '기업회의' },
            { value: '대회/공모전', label: '대회/공모전' },
            { value: '데모데이', label: '데모데이' },
            { value: '멘토링/대외활동', label: '멘토링/대외활동' },
            { value: '모임/커뮤니티', label: '모임/커뮤니티' },
            { value: '워크샵/클리닉', label: '워크샵/클리닉' },
            { value: '박람회/페어', label: '박람회/페어' },
            { value: '정부회의', label: '정부회의' },
            { value: '축제', label: '축제' },
            { value: '컨벤션', label: '컨벤션' },
            { value: '콘테스트/콩쿠르', label: '콘테스트/콩쿠르' },
            { value: '학술회의', label: '학술회의' },
            { value: '기타', label: '기타' },
          ],
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
    {
      title: '행사 소개',
      fieldType: 'text-area',
      name: 'introduce',
      placeholder:
        '100자 이내로 행사를 소개해주세요! \n(행사 링크를 공유할 때 썸네일 이미지와 함께 공유됩니다!)',
      required: true,
      disabled: false,
      error: null,
      additionalFieldInfo: null,
    },
    {
      title: '행사 날짜',
      fieldType: 'input',
      name: 'date',
      placeholder: '날짜 선택',
      required: true,
      disabled: false,
      error: null,
      additionalFieldInfo: null,
    },
    {
      title: '협찬 마감일',
      fieldType: 'input',
      name: 'deadline',
      placeholder: '날짜 선택',
      required: true,
      disabled: false,
      error: null,
      additionalFieldInfo: null,
    },
    {
      title: '행사 장소',
      fieldType: 'input',
      name: 'detail_location',
      placeholder:
        '오프라인이라면 주소를, 온라인이라면 "온라인"이라고 입력해주세요',
      required: true,
      disabled: false,
      error: null,
      additionalFieldInfo: null,
    },
    {
      title: '협찬 종류',
      fieldType: 'select',
      name: 'sponsor_category',
      placeholder: '협찬 종류 선택',
      required: true,
      disabled: false,
      error: null,
      additionalFieldInfo: {
        menuItemObj: {
          0: [
            { value: '현금', label: '현금' },
            { value: '다과', label: '다과' },
            { value: '기타', label: '기타' },
          ],
        },
        width: '15rem',
      },
    },
    {
      title: '협찬 혜택',
      fieldType: 'text-area',
      name: 'sponsor_advantage',
      placeholder: '협찬사에 제공할 수 있는 혜택은 무엇인가요? (최대 1,000자)',
      required: true,
      disabled: false,
      error: null,
      additionalFieldInfo: null,
    },

    {
      title: '행사 대표 이미지',
      fieldType: 'image',
      name: 'event_image',
      placeholder: '썸네일 이미지를 등록해주세요. \n (640 * 320)',
      required: false,
      disabled: false,
      error: null,
      additionalFieldInfo: { saveImageEvent: (img) => setThumnail(img) },
    },
    {
      title: '참가자 기술',
      fieldType: 'input',
      name: 'participant',
      placeholder: '행사 참여자는 어떤 사람인가요? (최대 100자)',
      required: false,
      disabled: false,
      error: null,
      additionalFieldInfo: null,
    },
    {
      title: '참가자 모집 방법',
      fieldType: 'input',
      name: 'method',
      placeholder: '참가자를 어떻게 모집하시나요?',
      required: false,
      disabled: false,
      error: null,
      additionalFieldInfo: null,
    },
    {
      title: '행사 기록',
      fieldType: 'input',
      name: 'before',
      placeholder: '예년 행사 기록이 있다면 링크를 첨부해주세요!',
      required: false,
      disabled: false,
      error: null,
      additionalFieldInfo: null,
    },
  ];

  const tempSaveHandler = useCallback(async () => {
    const result: any = methods.getValues();
    const formData = new FormData();
    formData.append('title', result.title);
    formData.append('host', result.host);
    formData.append('host_email', result.host_email);
    formData.append('field', result.field);
    formData.append('category', result.category);
    formData.append('size', result.size);
    formData.append('introduce', result.introduce);
    formData.append('date', result.date);
    formData.append('detail_location', result.detail_location);
    formData.append('deadline', result.deadline);
    formData.append('sponsor_category', result.sponsor_category);
    formData.append('sponsor_advantage', result.sponsor_advantage);
    formData.append('event_image', thumnail);

    const response = await createPlaceApi(formData);
    navigate(`/`);
  }, [methods]);

  return (
    <>
      <Header />
      <article className="px-12 flex flex-col gap-12">
        <section
          className={`flex gap-4 items-end py-8 border-b border-solid border-b-black`}
        >
          <div className={`text-4xl font-bold`}>행사 등록</div>
          <div className={`font-bold text-[#ADB3BA]`}>
            5분만에 행사 개설하고 협찬 받으세요!
          </div>
        </section>
        <section>
          <Form
            formClassName="bg-[#F8F8F8] rounded-3xl py-12 px-16"
            globalMethods={methods}
            formList={formList}
            onSubmitEvent={tempSaveHandler}
            buttonInfo={{
              list: [
                // {
                //   content: '임시저장',
                //   clickEvent: tempSaveHandler,
                //   color: 'gray',
                //   width: '9rem',
                // },
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
    </>
  );
};

export default CreateEventPage;
