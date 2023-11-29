import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { StyledSelect } from 'styles/form';

interface props {
  field: any;
  name: string;
  label: string | null;
  placeholder: string;
  menuItemList: { value: string; label: string }[];
  required: boolean;
  disabled: boolean;
  defaultValue: string;
  error: {
    text: string;
  } | null;
  width?: string;
}

const FormSelect = ({
  field,
  name,
  label,
  placeholder,
  menuItemList,
  required,
  disabled,
  defaultValue,
  error,
  width = '100%',
}: props) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <StyledSelect width={width}>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        displayEmpty
        value={value}
        label={label}
        onChange={handleChange}
        required={required}
        disabled={disabled}
        renderValue={(selected) => {
          if (!selected) {
            return <em className={`text-[#ADB3BA]`}>{placeholder}</em>;
          }

          return selected;
        }}
        {...field}
      >
        {menuItemList.map((menu, index) => (
          <MenuItem value={menu.value} key={index}>
            {menu.label}
          </MenuItem>
        ))}
      </Select>
    </StyledSelect>
  );
};

export default FormSelect;
