import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { StyledSelect } from 'styles/account';

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
  console.log(menuItemList);
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <StyledSelect width={width}>
      {label && <InputLabel id="demo-simple-select-label">{label}</InputLabel>}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
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
