import { DefaultStyleProps } from '..';
import { Props as InputMaskProps } from 'react-currency-masked-input';

export type MonthInputStyledProps = DefaultStyleProps &
  InputMaskProps & {
    styling: 'base' | 'error' | 'disabled';
  };

export type InputProps = MonthInputStyledProps;
