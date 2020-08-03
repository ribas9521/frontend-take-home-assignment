import React from 'react';
import styled from 'styled-components';
import { variant, VariantArgs, color, typography, space } from 'styled-system';
import { defaults } from '../../../Basic';
import { H1StyledProps } from './types';

const variants = variant({
  prop: 'styling',
  variants: {
    base: {
      color: 'text.dark',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: '40px',
      letterSpacing: '-0.266667px'
    }
  }
} as VariantArgs);

export const H1: React.FC<H1StyledProps> = styled.h1`
    ${defaults}
    ${variants}
    ${color}
    ${typography}
    ${space}
`;

export default H1;
