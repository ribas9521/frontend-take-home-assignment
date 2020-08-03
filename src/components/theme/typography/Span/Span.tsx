import React, { memo } from 'react';
import styled from 'styled-components';
import { defaults } from '../../../Basic';
import { SpanStyledProps } from './types';

export const Span: React.FC<SpanStyledProps> = styled.span<SpanStyledProps>`
  ${defaults}
`;

export default memo(Span);
