export type formFieldType = 'input' | 'select' | 'phased-select' | 'text-area';
export type formInfoType = {
  title?: string;
  fieldType: formFieldType;
  name: string | string[];
  placeholder: string | string[];
  required?: boolean;
  disabled?: boolean;
  error?: {
    text: string;
  } | null;
  additionalFieldInfo?: additionalFieldInfo | null;
};
export type menuItemList = { value: string; label: string }[];
export type additionalFieldInfo = {
  label?: string;
  inputType?: 'text' | 'number' | 'password';
  icon?: any;
  button?: { content: string; clickEvent: () => void };
  menuItemObj?: { [key: string]: menuItemList };
  width?: string;
};
export type formButton = {
  content: string;
  clickEvent?: () => void;
  type?: 'button' | 'submit';
  color?: 'blue' | 'gray';
  width?: string;
};
