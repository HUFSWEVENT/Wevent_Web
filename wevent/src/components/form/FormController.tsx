import React from 'react';
import { Controller } from 'react-hook-form';
import { FormInput } from './FormInput';

interface props {
  fieldType: 'input';
  required: boolean;
  name: string;
  placeholder: string;
  disabled: boolean;
  defaultValue: string;
  error: {
    text: string;
  } | null;
  additionalFieldInfo?: {
    label: string;
    inputType: 'text' | 'number' | 'password';
  } | null;
}

const FormController = ({
  fieldType,
  required,
  name,
  placeholder,
  disabled,
  defaultValue = '',
  error = null,
  additionalFieldInfo = null,
}: props) => {
  return (
    <div>
      <Controller
        // key={key}
        name={name}
        rules={{ required: required ?? true }}
        render={
          ({ field }) => {
            if (fieldType === 'input') {
              return (
                <FormInput
                  field={field}
                  placeholder={placeholder}
                  disabled={disabled}
                  label={additionalFieldInfo ? additionalFieldInfo.label : ''}
                  inputType={
                    additionalFieldInfo ? additionalFieldInfo.inputType : 'text'
                  }
                  name={name}
                  required={required}
                  defaultValue={defaultValue}
                  error={null}
                ></FormInput>
              );
            } else {
              return <div></div>;
            }
          }
          // <FormSelect
          //   data={data}
          //   field={field}
          //   disabled={data.disabled ?? false}
          // ></FormSelect>
        }
      />
    </div>
  );
};

export default FormController;
