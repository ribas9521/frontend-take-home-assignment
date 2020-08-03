import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { BoxStyledProps } from './index';
import { defaults, viewType } from '../Basic';

export const Box: React.FC<BoxStyledProps> = styled.div<BoxStyledProps>`
    ${viewType}
    ${defaults}
    ${color}   
`;

export default Box;
