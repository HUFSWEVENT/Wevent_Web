import Form, { formInfoType } from 'components/form/Form';
import SocialLoginSection from './SocialLoginSection';

interface props {
  defaultData: { [key: string]: string };
  formList: formInfoType[];
  onSubmitEvent: (result: object) => void;
}

const AccountPage = ({ defaultData, formList, onSubmitEvent }: props) => {
  return (
    <article
      className={`flex flex-col justify-center items-center w-[24rem] mx-auto h-screen`}
    >
      <section className={`mb-[4.5rem]`}>
        <img src="/Images/Logo.png" alt="logo" className={`w-[13.75rem]`} />
      </section>
      <section className={`w-full flex flex-col mb-[2rem]`}>
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
