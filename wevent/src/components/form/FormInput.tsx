import TextField from '@mui/material/TextField';

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
      <TextField
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
        {...field}
      />
    </>
  );
};
