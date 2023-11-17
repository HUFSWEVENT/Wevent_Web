import TextField from '@mui/material/TextField';
import { styled } from 'styled-components';
import tw from 'twin.macro';

interface props {
  field: any;
  name: string;
  label: string;
  placeholder: string;
  inputType: 'text' | 'number' | 'password';
  required: boolean;
  disabled: boolean;
  defaultValue: string;
  error: {
    text: string;
  } | null;
}

const StyledTextField = styled(TextField)`
  & {
    .MuiFormLabel-root {
      color: #ccc;
      font-size: 1rem;
      font-weight: 700;
    }
    .MuiInputBase-root {
      ${tw`border-[#72787E] rounded-[0]`}
    }
  }
`;

export const FormInput = ({
  field,
  name,
  label,
  placeholder,
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
        margin="normal"
        fullWidth
        {...field}
      />
    </>
  );
};
