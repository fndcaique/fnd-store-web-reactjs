import styled from 'styled-components';
import { primaryColor } from '../AppColors';

const Input = styled.input`
  box-sizing: border-box;
  height: 34px;
  margin-bottom: 10px;
  font-size: 18px;
  outline: none;
  /* border-radius: -3px; */
  border: none;
  border-bottom: 1px solid lightgrey;
  &:focus {
    border-color: ${primaryColor};
  }
  &::placeholder {
    content: 'asdf';
  }
`;

export default Input;
