import { postLoginApi } from 'apis/account';
import AccountPage from 'components/account/AccountPage';
import { formInfoType } from 'components/form/Form';
import LockIcon from 'components/icon/LockIcon';
import MessageIcon from 'components/icon/MessageIcon';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const loginHandler = async (result: object) => {
    const response = postLoginApi(result);
  };

  const formList: formInfoType[] = [
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
  ];
  return (
    <AccountPage
      defaultData={{}}
      formList={formList}
      onSubmitEvent={loginHandler}
      buttonList={[
        {
          content: '로그인',
          type: 'submit',
        },
        {
          content: '회원가입',
          clickEvent: () => {
            navigate('/account/login');
          },
          type: 'submit',
        },
      ]}
    ></AccountPage>
  );
};

export default LoginPage;
