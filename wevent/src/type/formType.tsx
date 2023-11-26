export type formFieldType = 'input' | 'select';
export type formInfoType = {
  fieldType: formFieldType;
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
    icon?: any;
    button?: { content: string; clickEvent: () => void };
  } | null;
};
