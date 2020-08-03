import { DefaultStyleProps } from '../../../Basic';
import { TypographyProps } from 'styled-system';

export type H3StyledProps = DefaultStyleProps &
  TypographyProps & {
    styling: 'base' | 'error' | 'baseLight';
  };
