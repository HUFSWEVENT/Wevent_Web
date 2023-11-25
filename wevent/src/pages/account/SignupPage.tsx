import { postSignUpApi } from 'apis/account';
import AccountPage from 'components/account/AccountPage';
import { formInfoType } from 'components/form/Form';
import LockIcon from 'components/icon/LockIcon';
import MessageIcon from 'components/icon/MessageIcon';
import UserIcon from 'components/icon/UserIcon';
import { useNavigate } from 'react-router-dom';

export type signupFormType = {
  username: string;
  email: string;
  password: string;
  password2?: string;
};

const SignupPage = () => {
  const navigate = useNavigate();

  const signUpHandler = async (result: object) => {
    const signupFormResult = result as signupFormType;
    delete signupFormResult['password2'];
    const response = await postSignUpApi(signupFormResult);

    if (response && (response.status === 200 || response.status === 201)) {
      navigate('/account/validate-email', { state: signupFormResult.email });
    } else {
      alert('회원가입에 실패했습니다.');
    }
  };

  const formList: formInfoType[] = [
    {
      fieldType: 'input',
      name: 'username',
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
  ];

  return (
    <AccountPage
      defaultData={{}}
      formList={formList}
      onSubmitEvent={signUpHandler}
    ></AccountPage>
  );
};

export default SignupPage;
