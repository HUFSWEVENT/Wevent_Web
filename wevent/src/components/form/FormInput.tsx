import InputAdornment from '@mui/material/InputAdornment';
import { StyledTextField } from 'styles/account';

interface props {
  field: any;
  name: string;
  label: string;
  placeholder: string;
  icon: any;
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
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" className={`absolute`}>
              {icon}
            </InputAdornment>
          ),
        }}
        {...field}
      />
    </>
  );
};
