import { StyledTextArea } from 'styles/form';

interface props {
  field: any;
  name: string;
  placeholder: string;
  required: boolean;
  disabled: boolean;
  defaultValue: string;
  error: {
    text: string;
  } | null;
  width: string;
}

const FormTextArea = ({ field, placeholder, width = '100%' }: props) => {
  return (
    <StyledTextArea
      aria-label="minimum height"
      minRows={5}
      placeholder={placeholder}
      width={width}
      {...field}
    />
  );
};

export default FormTextArea;
