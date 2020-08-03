import React from 'react';
import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space } from 'styled-system';
import { defaults } from '../../Basic';
import { InputIconStyledProps } from './types';

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      border: '1px solid',
      borderColor: 'gray.light',
      height: '54px',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      width: '50px',
      alignItems: 'center',
      bg: 'gray.light',
      cursor: 'pointer'
    },
    get reverse() {
      return {
        ...this.base,
        transform: 'rotate(180deg);'
      };
    }
  }
} as VariantArgs);

export const InputIcon: React.FC<InputIconStyledProps> = styled.div`
    ${defaults}
    ${variants}
    ${color}
    ${typography}
    ${space}
`;

export default InputIcon;
