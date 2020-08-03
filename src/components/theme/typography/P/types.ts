import { DefaultStyleProps } from '../../../Basic';
import { TypographyProps } from 'styled-system';

export type PStyledProps = DefaultStyleProps &
  TypographyProps & {
    styling?: 'base' | 'error' | 'info';
  };
