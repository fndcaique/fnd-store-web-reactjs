import styled, { css } from 'styled-components';
import { lightColor, primaryColor } from '../AppColors';

interface ButtonProps {
  primary?: boolean;
  fullWidth?: boolean;
}

const Button = styled.button<ButtonProps>`
  background: transparent;
  color: ${lightColor};
  border: 1px solid ${lightColor};
  border-radius: 3px;
  padding: 5px;
  height: 34px;
  font-size: 18px;
  opacity: 1;

  &:active {
    /* transform: scale(0.99); */
    /* Scaling button to 0.98 to its original size */
    /* box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.1); */
    /* Lowering the shadow */
    opacity: 0.8;
  }

  ${(props) =>
    props.primary &&
    css`
      background: ${primaryColor};
      border-color: ${primaryColor};
    `}
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

export default Button;
