import Form from 'components/form/Form';
import React from 'react';

const SignupPage = () => {
  return (
    <article
      className={`bg-pink-50 w-screen flex flex-col justify-center items-center`}
    >
      <section>logo </section>
      <section>
        {/* <form></form> */}
        <Form
          defaultData={{}}
          formList={[
            {
              fieldType: 'input',
              name: 'name',
              placeholder: '성함',
              required: true,
              error: { text: '성함을 입력하세요' },
              additionalFieldInfo: {
                label: '성함',
                inputType: 'text',
              },
            },
            {
              fieldType: 'input',
              name: 'email',
              placeholder: '이메일 주소',
              required: true,
              error: { text: '이메일 주소를 입력하세요' },
              additionalFieldInfo: {
                label: '이메일 주소',
                inputType: 'text',
              },
            },
            {
              fieldType: 'input',
              name: 'password',
              placeholder: '비밀번호',
              required: true,
              error: { text: '비밀번호를 입력하세요' },
              additionalFieldInfo: {
                label: '비밀번호',
                inputType: 'password',
              },
            },
            {
              fieldType: 'input',
              name: 'password2',
              placeholder: '비밀번호 확인',
              required: true,
              error: { text: '비밀번호 확인을 입력하세요' },
              additionalFieldInfo: {
                label: '비밀번호 확인',
                inputType: 'password',
              },
            },
          ]}
        ></Form>
      </section>
      <section>
        <div>다른 서비스로 로그인</div>
        <div>
          <div>kakao</div>
          <div>google</div>
        </div>
        <div>또는</div>
      </section>
    </article>
  );
};

export default SignupPage;
