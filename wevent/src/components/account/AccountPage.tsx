import Form, { formInfoType } from 'components/form/Form';
import SocialLoginSection from './SocialLoginSection';

interface props {
  defaultData: { [key: string]: string };
  formList: formInfoType[];
  notification?: { title: string; content: string[] } | null;
  buttonList: {
    content: string;
    clickEvent?: () => void;
    type?: 'button' | 'submit';
  }[];
  onSubmitEvent: (result: object) => void;
}

const AccountPage = ({
  defaultData,
  formList,
  notification = null,
  onSubmitEvent,
  buttonList,
}: props) => {
  return (
    <article
      className={`flex flex-col justify-center items-center w-[24rem] mx-auto h-screen`}
    >
      <section className={`mb-[4.5rem]`}>
        <img src="/Images/Logo.png" alt="logo" className={`w-[13.75rem]`} />
      </section>

      {notification && (
        <section className={`flex flex-col items-center gap-4 mb-12`}>
          <div className={`font-bold text-xl`}>{notification.title}</div>
          <div className={`flex flex-col items-center`}>
            {notification.content.map((text, index) => (
              <div className={`font-bold text-lg text-[#CCC]`} key={index}>
                {text}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className={`w-full flex flex-col mb-[2rem]`}>
        <Form
          defaultData={defaultData}
          formList={formList}
          onSubmitEvent={onSubmitEvent}
          buttonList={buttonList}
        ></Form>
      </section>
      {/* <SocialLoginSection></SocialLoginSection> */}
    </article>
  );
};

export default AccountPage;
