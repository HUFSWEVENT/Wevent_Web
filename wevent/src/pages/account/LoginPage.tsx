import { postLoginApi } from 'apis/account';
import AccountPage from 'components/account/AccountPage';
import LockIcon from 'components/icon/LockIcon';
import MessageIcon from 'components/icon/MessageIcon';
import { useNavigate } from 'react-router-dom';
import { formInfoType } from 'type/formType';

const LoginPage = () => {
  const navigate = useNavigate();
  const loginHandler = async (result: object) => {
    const response = await postLoginApi(result);
    if (response.status === 200 || response.status === 201) {
      navigate('/');
    } else {
      alert('로그인에 실패했습니다.');
    }
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
