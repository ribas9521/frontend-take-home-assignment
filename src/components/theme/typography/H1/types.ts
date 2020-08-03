import { DefaultStyleProps } from '../../../Basic';
import { TypographyProps } from 'styled-system';

export type H1StyledProps = DefaultStyleProps &
  TypographyProps & {
    styling: 'base' | 'error' | 'baseLight' | 'light';
  };
