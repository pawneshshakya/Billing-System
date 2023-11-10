import {
  Box,
  Button,
  Input,
  InputLabel,
  Select,
  Typography,
  styled,
} from "@mui/material";

export const CardHeadingText = styled(Typography)`
  font-family: Inter;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const CardSubHeadingText = styled(Typography)`
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const CustomInputLabel = styled(InputLabel)`
  color: #000;
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const CustomInput = styled(Input)`
  background: #f4f4f4;
  padding: 0 16px;
  input {
    width: 313px;
    height: 57px;
  }
  &.MuiInputBase-root:before {
    border-bottom: none !important;
  }
  &.MuiInputBase-root:after {
    border-bottom: none !important;
  }
`;
export const CustomSelect = styled(Select)`
  background: #f4f4f4;
  border-radius: 0 !important;
  min-width: 194px !important;
  height: 57px !important;
  fieldset {
    border: none !important;
  }
`;
export const AddButton = styled(Button)`
  min-width: 154px;
  height: 54px;
  border-radius: 11px;
  background: ${(prop) => prop.bgcolor || "#f7f7f7"};
  color: #1c274c;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &:hover {
    background-color: ${(prop) => prop.bgcolor || "#f7f7f7"} !important;
  }
`;
export const SubmitButton = styled(Button)`
  min-width: 121px;
  height: 43px;
  border-radius: 4px;
  background: #262562;
  color: #fff;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &:hover {
    background-color: #262562 !important;
  }
`;
export const CancelButton = styled(Button)`
  min-width: 121px;
  height: 43px;
  border-radius: 4px;
  border: 1px solid #f00;
  background: #fff8f8;
  color: #f00;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:hover {
    background-color: #fff8f8 !important;
  }
`;

export const SelectedOption = styled(Typography)`
  color: #000;
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const ButtonContainer = styled(Box)`
  margin-top: 25px;
  display: flex;
  gap: 17px;
`;
export const LabelTypography = styled(Typography)`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  min-width: 100px;
`;
export const ValueTypography = styled(Typography)`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const ModalHeading = styled(Typography)`
  color: #000;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const ItemAddButton = styled(Button)`
  align-self: end;
  width: 101px;
  height: 36px;
  border-radius: 4px;
  border-radius: 4px;
  border: 1px solid #262562;
  background: #f6f6f6;
  color: #262562;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &:hover {
    background-color: #f6f6f6 !important;
  }
`;
