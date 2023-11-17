import { FormProvider, useForm } from 'react-hook-form';
import FormController from './FormController';

interface props {
  defaultData: { [key: string]: string };
  formList: {
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
    } | null;
  }[];
}

const Form = ({ defaultData, formList }: props) => {
  const methods = useForm({
    defaultValues: defaultData ?? {},
    mode: 'onChange',
  });

  return (
    <FormProvider {...methods}>
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
    </FormProvider>
  );
};

export default Form;
