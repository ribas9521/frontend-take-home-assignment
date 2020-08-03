import React from 'react';
import styled from 'styled-components';
import { variant, VariantArgs } from 'styled-system';
import { defaults } from '..';
import { MonthInputStyledProps } from './index';

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      width: '100%',
      border: '1px solid',
      borderColor: 'gray.light',
      height: '54px',
      bg: 'white',
      color: 'text.dark',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '24px',
      letterSpacing: '-0.166667px;',
      transition: '0.3s ease-in-out all',
      alignItems: 'center',
      textAlign: 'center',
      '&:focus': {
        borderColor: 'gray.default',
        outline: 'none'
      },
      '&:disabled': {
        color: 'gray.light'
      },
      span: {
        fontSize: '20px',
        lineHeight: '24px',
        fontWeight: '600'
      },
      p: {
        fontSize: '16px',
        fontWeight: '100',
        lineHeight: '20px',
        margin: '2px'
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

const MonthInput: React.FC<MonthInputStyledProps> = styled.div`
  ${variants}
  ${defaults}
`;

export default MonthInput;
