import SocialLoginSection from 'components/account/SocialLoginSection';
import Form from 'components/form/Form';
import LockIcon from 'components/icon/LockIcon';
import MessageIcon from 'components/icon/MessageIcon';
import UserIcon from 'components/icon/UserIcon';

const SignupPage = () => {
  return (
    <article
      className={`bg-pink-50 flex flex-col justify-center items-center w-[24rem] mx-auto`}
    >
      <section>logo </section>
      <section className={`w-full`}>
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
                icon: <UserIcon></UserIcon>,
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
                icon: <MessageIcon></MessageIcon>,
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
                icon: <LockIcon></LockIcon>,
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
                icon: <LockIcon></LockIcon>,
              },
            },
          ]}
        ></Form>
      </section>
      <SocialLoginSection></SocialLoginSection>
    </article>
  );
};

export default SignupPage;
