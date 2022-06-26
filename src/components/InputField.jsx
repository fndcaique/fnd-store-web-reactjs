import Input from './Input';
import styled from 'styled-components';
import { lightColor } from '../AppColors';

const InputFieldStyled = styled.div`
  label {
    display: block;
    font-size: 0.85rem;
  }
  input {
    width: 100%;
  }
  span {
    display: block;
    font-size: 0.75rem;
    color: ${lightColor};
  }
`;

const InputField = ({
  labelText,
  helperText,
  id,
  type,
  value,
  placeholder,
  onChange
}) => {
  return (
    <InputFieldStyled>
      <label htmlFor={id}>{labelText}</label>
      <Input {...{ id, type, value, placeholder, onChange }} />
      <span>{helperText}</span>
    </InputFieldStyled>
  );
};

export default InputField;
