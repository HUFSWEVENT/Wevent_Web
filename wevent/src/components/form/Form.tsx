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
  buttonInfo: { list: formButton[]; direction?: 'col' | 'row' };
}

const Form = ({
  formClassName = '',
  globalMethods = null,
  defaultData = {},
  formList,
  onSubmitEvent,
  buttonInfo,
}: props) => {
  const methods = globalMethods
    ? globalMethods
    : useForm({
        defaultValues: defaultData ?? {},
        mode: 'onChange',
      });

  const getDefaultData = (name: string | string[]) => {
    if (typeof name === 'string') {
      return defaultData[name];
    } else {
      const result: { [key: string]: string } = {};
      name.map((_n: string) => (result[_n] = defaultData[_n]));
      return result;
    }
  };

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
                <div className={`font-bold text-xl min-w-[10rem]`}>
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
                defaultValue={getDefaultData(form.name)}
                error={form.error ?? null}
                additionalFieldInfo={form.additionalFieldInfo}
              ></FormController>
            </div>
          );
        })}

        <section
          className={`flex items-center gap-2 justify-center ${
            buttonInfo.direction === 'col' ? 'flex-col' : ''
          }`}
        >
          {buttonInfo.list.map((button, index) => (
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
