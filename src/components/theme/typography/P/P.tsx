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
import { PStyledProps } from './types';

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      color: 'text.info',
      fontSize: '18px',
      lineHeight: '26px',
      textAlign: 'center'
    },
    get info() {
      return {
        ...this.base,
        fontSize: '40px',
        letterSpacing: ' -0.266667px'
      };
    }
  }
} as VariantArgs);

export const P: React.FC<PStyledProps> = styled.p`
    ${defaults}
    ${variants}
    ${color}
    ${typography}
    ${space}
    ${system({
      textTransform: true
    })}
`;

export default P;
