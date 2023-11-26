import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledTextField = styled(TextField)`
  & {
    .MuiFormLabel-root {
      color: #ccc;
      font-size: 1rem;
      font-weight: 700;
      padding-left: 1.5rem;
    }
    .MuiFormLabel-root.Mui-focused {
      padding-left: 0;
    }
    .MuiInputBase-root {
      ${tw`border-[#72787E] rounded-[0]`}
      input {
        ${tw`pl-10`}
      }
    }
  }
`;

export const StyledSelect = styled(FormControl)<{ width: string }>`
  & {
    .MuiInputBase-root {
      ${tw`border-[#72787E] rounded-[0] h-[3rem]`}
      input {
        ${tw`pl-10`}
      }
      width: ${(props) => props.width};
    }
  }
`;
