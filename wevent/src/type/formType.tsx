export type formFieldType = 'input' | 'select';
export type formInfoType = {
  title?: string;
  fieldType: formFieldType;
  name: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  error?: {
    text: string;
  } | null;
  additionalFieldInfo?: additionalFieldInfo | null;
};
export type additionalFieldInfo = {
  label?: string;
  inputType?: 'text' | 'number' | 'password';
  icon?: any;
  button?: { content: string; clickEvent: () => void };
  menuItemList?: { value: string; label: string }[];
};
export type formButton = {
  content: string;
  clickEvent?: () => void;
  type?: 'button' | 'submit';
  color?: 'blue' | 'gray';
  width?: string;
};
