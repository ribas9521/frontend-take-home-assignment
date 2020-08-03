import { DefaultStyleProps } from '../../Basic';
import { TypographyProps } from 'styled-system';

export type InputIconStyledProps = DefaultStyleProps &
  TypographyProps & {
    styling: 'base' | 'error' | 'baseLight' | 'light' | 'reverse';
    onClick?: (e: React.MouseEvent<HTMLElement> | KeyboardEvent) => void;
  };
