import React from 'react';
import { Controller } from 'react-hook-form';
import { FormInput } from './FormInput';
import { additionalFieldInfo, formFieldType } from 'type/formType';
import FormSelect from './FormSelect';

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
  additionalFieldInfo?: additionalFieldInfo | null;
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
    <div className={`flex-grow`}>
      <Controller
        name={name}
        rules={{ required: required ?? true }}
        render={({ field }) => {
          if (fieldType === 'input') {
            return (
              <FormInput
                field={field}
                placeholder={placeholder}
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
                disabled={disabled}
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
          } else if (fieldType === 'select') {
            return (
              <FormSelect
                field={field}
                name={name}
                label={
                  additionalFieldInfo && additionalFieldInfo.label
                    ? additionalFieldInfo.label
                    : ''
                }
                placeholder={placeholder}
                menuItemList={
                  additionalFieldInfo && additionalFieldInfo.menuItemList
                    ? additionalFieldInfo.menuItemList
                    : [{ value: '', label: '' }]
                }
                required={required}
                disabled={disabled}
                defaultValue={defaultValue}
                error={null}
              ></FormSelect>
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
