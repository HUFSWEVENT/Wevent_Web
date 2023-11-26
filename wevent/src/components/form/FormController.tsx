import React from 'react';
import { Controller } from 'react-hook-form';
import { FormInput } from './FormInput';
import { additionalFieldInfo, formFieldType } from 'type/formType';
import FormSelect from './FormSelect';
import FormTextArea from './FormTextArea';

interface props {
  fieldType: formFieldType;
  required: boolean;
  name: string | string[];
  placeholder: string | string[];
  disabled: boolean;
  defaultValue: string | { [key: string]: string };
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
  const getList = () => {
    if (typeof name === 'string') {
      return [0];
    } else {
      return name;
    }
  };
  return (
    <div className={`flex-grow flex gap-4`}>
      {getList().map((_i, index) => (
        <Controller
          key={index}
          name={typeof name === 'string' ? name : name[index]}
          rules={{ required: required ?? true }}
          render={({ field }) => {
            if (fieldType === 'input') {
              return (
                <FormInput
                  field={field}
                  name={typeof name === 'string' ? name : name[index]}
                  placeholder={
                    typeof placeholder === 'string'
                      ? placeholder
                      : placeholder[index]
                  }
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
                  required={required}
                  disabled={disabled}
                  defaultValue={
                    typeof defaultValue === 'string'
                      ? defaultValue
                      : defaultValue[name[index]]
                  }
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
            } else if (
              fieldType === 'select' ||
              fieldType === 'phased-select'
            ) {
              return (
                <FormSelect
                  field={field}
                  name={typeof name === 'string' ? name : name[index]}
                  label={
                    additionalFieldInfo && additionalFieldInfo.label
                      ? additionalFieldInfo.label
                      : ''
                  }
                  placeholder={
                    typeof placeholder === 'string'
                      ? placeholder
                      : placeholder[index]
                  }
                  menuItemList={
                    additionalFieldInfo && additionalFieldInfo.menuItemObj
                      ? additionalFieldInfo.menuItemObj[index.toString()]
                      : [{ value: '', label: '' }]
                  }
                  required={required}
                  disabled={disabled}
                  defaultValue={
                    typeof defaultValue === 'string'
                      ? defaultValue
                      : defaultValue[name[index]]
                  }
                  error={null}
                  width={
                    additionalFieldInfo && additionalFieldInfo.width
                      ? additionalFieldInfo.width
                      : ''
                  }
                ></FormSelect>
              );
            } else if (fieldType === 'text-area') {
              return (
                <FormTextArea
                  field={field}
                  name={typeof name === 'string' ? name : name[index]}
                  placeholder={
                    typeof placeholder === 'string'
                      ? placeholder
                      : placeholder[index]
                  }
                  required={required}
                  disabled={disabled}
                  defaultValue={
                    typeof defaultValue === 'string'
                      ? defaultValue
                      : defaultValue[name[index]]
                  }
                  error={null}
                  width={
                    additionalFieldInfo && additionalFieldInfo.width
                      ? additionalFieldInfo.width
                      : ''
                  }
                ></FormTextArea>
              );
            } else {
              return <div></div>;
            }
          }}
        />
      ))}
    </div>
  );
};

export default FormController;
