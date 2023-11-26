import InputAdornment from '@mui/material/InputAdornment';
import { StyledTextField } from 'styles/form';

interface props {
  field: any;
  name: string;
  label: string;
  placeholder: string;
  icon: any | null;
  button: { content: string; clickEvent: () => void } | null;
  inputType: 'text' | 'number' | 'password';
  required: boolean;
  disabled: boolean;
  defaultValue: string;
  error: {
    text: string;
  } | null;
}

export const FormInput = ({
  field,
  name,
  label,
  placeholder,
  icon,
  button,
  inputType = 'text',
  required = false,
  disabled = false,
  defaultValue = '',
  error = null,
}: props) => {
  return (
    <>
      <StyledTextField
        id={name}
        label={label}
        variant={'outlined'}
        required={required}
        disabled={disabled}
        type={inputType}
        defaultValue={defaultValue}
        error={error}
        helperText={error?.text}
        size="small"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              className={`absolute w-full flex justify-between !m-0`}
            >
              <div className={`ml-2`}>{icon && icon}</div>
              <div
                className={`${
                  button
                    ? 'mr-2 w-[4rem] flex items-center justify-center bg-[#00A0FF] p-1 text-white font-bold cursor-pointer'
                    : ''
                }`}
                onClick={() => button && button.clickEvent()}
              >
                {button && button.content}
              </div>
            </InputAdornment>
          ),
        }}
        {...field}
      />
    </>
  );
};
