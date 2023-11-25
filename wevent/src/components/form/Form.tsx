import { FormProvider, useForm } from 'react-hook-form';
import FormController from './FormController';

export type formInfoType = {
  fieldType: 'input';
  name: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  error?: {
    text: string;
  } | null;
  additionalFieldInfo?: {
    label: string;
    inputType: 'text' | 'number' | 'password';
    icon?: any;
    button?: { content: string; clickEvent: () => void };
  } | null;
};

interface props {
  defaultData: { [key: string]: string };
  formList: formInfoType[];
  onSubmitEvent: (result: object) => void;
  buttonList: {
    content: string;
    clickEvent?: () => void;
    type?: 'button' | 'submit';
  }[];
}

const Form = ({ defaultData, formList, onSubmitEvent, buttonList }: props) => {
  const methods = useForm({
    defaultValues: defaultData ?? {},
    mode: 'onChange',
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmitEvent)}
        className={`w-full flex flex-col gap-10`}
      >
        {formList.map((form, index) => {
          return (
            <FormController
              key={index}
              fieldType={form.fieldType}
              required={form.required ?? false}
              name={form.name}
              placeholder={form.placeholder}
              disabled={form.disabled ?? false}
              defaultValue={defaultData[form.name]}
              error={form.error ?? null}
              additionalFieldInfo={form.additionalFieldInfo}
            ></FormController>
          );
        })}

        <section className={`flex flex-col items-center`}>
          {buttonList.map((button, index) => (
            <button
              key={index}
              onClick={() => {
                button.clickEvent && button.clickEvent();
              }}
              type={button.type ?? 'button'}
            >
              {button.content}
            </button>
          ))}
        </section>
      </form>
    </FormProvider>
  );
};

export default Form;
