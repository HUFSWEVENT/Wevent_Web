import { FormProvider, useForm } from 'react-hook-form';
import FormController from './FormController';
import { formButton, formInfoType } from 'type/formType';
import Button from 'components/button/Button';

interface props {
  formClassName?: string;
  globalMethods?: any;
  defaultData?: { [key: string]: string };
  formList: formInfoType[];
  onSubmitEvent: (result: object) => void;
  buttonList: formButton[];
}

const Form = ({
  formClassName = '',
  globalMethods = null,
  defaultData = {},
  formList,
  onSubmitEvent,
  buttonList,
}: props) => {
  const methods = globalMethods
    ? globalMethods
    : useForm({
        defaultValues: defaultData ?? {},
        mode: 'onChange',
      });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmitEvent)}
        className={`w-full flex flex-col gap-12 ${formClassName}`}
      >
        {formList.map((form, index) => {
          return (
            <div key={index} className={`flex gap-2 w-full items-center`}>
              {form.title && (
                <div className={`font-bold text-xl`}>
                  {form.title}
                  <span className={`text-[#01A0FF]`}>
                    {form.required ? '*' : ''}
                  </span>
                </div>
              )}
              <FormController
                fieldType={form.fieldType}
                required={form.required ?? false}
                name={form.name}
                placeholder={form.placeholder}
                disabled={form.disabled ?? false}
                defaultValue={defaultData[form.name]}
                error={form.error ?? null}
                additionalFieldInfo={form.additionalFieldInfo}
              ></FormController>
            </div>
          );
        })}

        <section className={`flex flex-col items-center gap-2`}>
          {buttonList.map((button, index) => (
            <Button
              key={index}
              color={button.color ?? 'blue'}
              width={button.width ?? '100%'}
            >
              <button
                onClick={() => {
                  button.clickEvent && button.clickEvent();
                }}
                type={button.type ?? 'button'}
              >
                {button.content}
              </button>
            </Button>
          ))}
        </section>
      </form>
    </FormProvider>
  );
};

export default Form;
