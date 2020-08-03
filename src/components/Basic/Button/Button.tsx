import React from 'react';
import styled from 'styled-components';
import { variant, VariantArgs } from 'styled-system';
import { defaults } from '../../Basic';
import { ButtonProps } from './index';

const commonsButtons = {
  alignItems: 'center',
  borderRadius: '20px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '18px',
  justifyContent: 'center',
  outline: 'none',
  padding: '.6rem',
  position: 'relative',
  fontWeight: 600,
  transition: '0.3s ease-in-out all',
  lineHeight: '24px'
};

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      ...commonsButtons,
      bg: 'blue.default',
      color: 'white',
      '&:hover': {
        textDecoration: 'none'
      }
    },
    get disabled() {
      return {
        ...this.primary,
        bg: 'disabled',
        cursor: 'default',
        opacity: 0.6,
        '&:hover': {
          bg: 'disabled'
        }
      };
    }
  }
} as VariantArgs);

export const Style: React.FC<ButtonProps> = styled.button<ButtonProps>`
  ${variants}
  ${defaults}
`;

const Button: React.FC<ButtonProps> = ({
  children,
  onFocus,
  onBlur,
  ...props
}) => {
  const [focused, set] = React.useState(false);
  const toggleState = () => set(prevState => !prevState);
  return (
    <Style
      className={focused ? 'focused' : ''}
      onFocus={e => {
        toggleState();
        onFocus && onFocus(e);
      }}
      onBlur={e => {
        toggleState();
        onBlur && onBlur(e);
      }}
      {...props}
    >
      {children}
    </Style>
  );
};

export default Button;
