import React from 'react';
import { Controller } from 'react-hook-form';
import { FormInput } from './FormInput';
import { formFieldType } from 'type/formType';

interface props {
  fieldType: formFieldType;
  required: boolean;
  name: string;
  placeholder: string;
  disabled: boolean;
  defaultValue: string;
  error: {
    text: string;
  } | null;
  additionalFieldInfo?: {
    label?: string;
    inputType?: 'text' | 'number' | 'password';
    icon?: any;
    button?: { content: string; clickEvent: () => void };
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
        name={name}
        rules={{ required: required ?? true }}
        render={({ field }) => {
          if (fieldType === 'input') {
            return (
              <FormInput
                field={field}
                placeholder={placeholder}
                disabled={disabled}
                label={
                  additionalFieldInfo && additionalFieldInfo.label
                    ? additionalFieldInfo.label
                    : ''
                }
                inputType={
                  additionalFieldInfo && additionalFieldInfo.inputType
                    ? additionalFieldInfo.inputType
                    : 'text'
                }
                name={name}
                required={required}
                defaultValue={defaultValue}
                error={null}
                icon={
                  additionalFieldInfo && additionalFieldInfo.icon
                    ? additionalFieldInfo.icon
                    : null
                }
                button={
                  additionalFieldInfo && additionalFieldInfo.button
                    ? additionalFieldInfo.button
                    : null
                }
              ></FormInput>
            );
          } else {
            return <div></div>;
          }
        }}
      />
    </div>
  );
};

export default FormController;
