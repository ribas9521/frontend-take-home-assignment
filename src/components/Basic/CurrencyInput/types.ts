import { DefaultStyleProps } from '../../Basic';
import { Props as InputMaskProps } from 'react-currency-masked-input';

export type InputStyledProps = DefaultStyleProps &
  InputMaskProps & {
    styling: 'base' | 'error' | 'disabled';
  };

export type InputProps = InputStyledProps;
