import { patchValidateEmailApi, postValidateCodeApi } from 'apis/account';
import AccountPage from 'components/account/AccountPage';
import LockIcon from 'components/icon/LockIcon';
import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type validateFormType = {
  email: string;
  code: string;
};

const ValidateEmailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const validateEmailHandler = useCallback(async (result: object) => {
    const validateFormResult = result as validateFormType;
    validateFormResult['email'] = state;
    const response = await patchValidateEmailApi(result);
    if (response && (response.status === 200 || response.status === 201)) {
      navigate('/account/login');
    } else {
      alert('코드 인증에 실패했습니다.');
    }
  }, []);

  const postEmailCodeHandler = useCallback(async () => {
    await postValidateCodeApi({ email: state });
  }, [state]);

  useEffect(() => {
    postEmailCodeHandler();
  }, [state]);

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
            button: { content: '재전송', clickEvent: postEmailCodeHandler },
          },
        },
      ]}
      notification={{
        title: '이메일 인증',
        content: [
          '인증메일을 전송하였습니다.',
          '메일을 확인하고 인증 번호를 입력해주세요.',
        ],
      }}
      onSubmitEvent={validateEmailHandler}
      buttonList={[
        {
          content: '가입하기',
          type: 'submit',
        },
      ]}
    ></AccountPage>
  );
};

export default ValidateEmailPage;
