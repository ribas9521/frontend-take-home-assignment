import React from 'react';
import styled from 'styled-components';
import { default as Input } from 'react-currency-input';
import { variant, VariantArgs } from 'styled-system';
import { defaults } from '../../Basic';
import { InputStyledProps } from './index';

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      width: '100%',
      border: '1px solid',
      borderColor: 'gray.light',
      height: '56px',
      bg: 'white',
      color: 'text.dark',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '24px',
      letterSpacing: '-0.166667px;',
      transition: '0.3s ease-in-out all',
      paddingLeft: '20px',
      '&:focus': {
        borderColor: 'gray.default',
        outline: 'none'
      },
      '&:disabled': {
        color: 'gray.light'
      },
      '&:-webkit-autofill': {
        '-webkit-text-fill-color': (props: InputStyledProps) =>
          props.colors.gray.light,
        '-webkit-box-shadow': (props: InputStyledProps) =>
          `0 0 0px 1000px ${props.colors.gray.light} inset`
      },
      '::-webkit-input-placeholder': {
        color: 'gray.default'
      },
      '::-moz-placeholder': {
        color: 'gray.default'
      }
    },
    get error() {
      return {
        ...this.base,
        borderColor: 'red'
      };
    },
    get disabled() {
      return {
        ...this.base,
        opacity: 0.5
      };
    }
  }
} as VariantArgs);

const CurrencyInput: React.FC<InputStyledProps> = styled(Input)`
  ${variants}
  ${defaults}
`;

export default CurrencyInput;
