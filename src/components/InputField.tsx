import { ChangeEventHandler, FormEventHandler } from 'react';
import styled from 'styled-components';
import { lightColor } from '../AppColors';
import Input from './Input';

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

type InputFieldAttributes = HTMLInputElement & {
  labelText: string,
  helperText: string
  onChange: ChangeEventHandler<HTMLInputElement> & FormEventHandler<string>
}

function InputField({
  labelText,
  helperText,
  id,
  type,
  value,
  placeholder,
  onChange,
}: InputFieldAttributes) {
  return (
    <InputFieldStyled>
      <label htmlFor={ id }>{ labelText }</label>
      <Input { ...{
        id, type, value, placeholder, onChange,
      } }
      />
      <span>{ helperText }</span>
    </InputFieldStyled>
  );
}

export default InputField;
