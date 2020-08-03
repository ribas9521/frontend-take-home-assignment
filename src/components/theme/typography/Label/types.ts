import { DefaultStyleProps } from '../../../Basic';
import { TypographyProps } from 'styled-system';

export type LabelStyledProps = DefaultStyleProps &
  TypographyProps & {
    styling: 'base' | 'error' | 'baseLight';
    id?: string;
    htmlFor?: string;
    title?: string;
    whiteSpace?: string;
  };
