import React from 'react';
import styled from 'styled-components';
import {
  variant,
  VariantArgs,
  color,
  typography,
  space,
  system
} from 'styled-system';
import { defaults } from '../../../Basic';
import { LabelStyledProps } from './types';

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      color: 'text.dark',
      textAlign: 'left',
      fontSize: '16px',
      whiteSpace: 'nowrap',
      width: '100%',
      lineHeight: '20px',
      fontWeight: 500
    },
    get error() {
      return {
        ...this.base,
        color: 'danger.default'
      };
    }
  }
} as VariantArgs);

export const Label: React.FC<LabelStyledProps> = styled.label<LabelStyledProps>`
    ${defaults}
    ${variants}
    ${color}
    ${typography}
    ${space}
    ${system({
      whiteSpace: true
    })}
`;

export default Label;
