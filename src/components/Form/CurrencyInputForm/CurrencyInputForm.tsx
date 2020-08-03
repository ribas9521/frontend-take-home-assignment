import React from 'react';
import CurrencyInput from '../../Basic/CurrencyInput';
import { Box } from '../../Basic';
import { P, Label } from '../../theme/typography';
import InputIcon from '../../Basic/InputIcon/InputIcon';
import Dolar from '../../../assets/icons/dolar.svg';

interface DispatchProps {
  value: number;
  error?: string | boolean | undefined;
  maxLength?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
  label?: string;
}

type Props = DispatchProps;

const CurrencyInputForm = ({
  value,
  error,
  label,
  onChange,
  ...rest
}: Props) => (
  <Box styling="column" width="100%" mb="15px" alignItems="flex-start" mx={5}>
    <Label mb={5} styling="base">
      {label}
    </Label>
    <Box styling="column" position="relative" width="100%" alignItems="normal">
      <Box styling="row">
        <Box>
          <InputIcon bg="gray.medium" styling="base">
            <Box>
              <Dolar height={25} width={25} />
            </Box>
          </InputIcon>
        </Box>
        <CurrencyInput
          onChange={(e: string, value: number) => {
            onChange(value);
          }}
          value={value}
          styling="base"
          {...rest}
        />
      </Box>
      {error && (
        <P fontSize="12px" styling="error" width="100%">
          {error}
        </P>
      )}
    </Box>
  </Box>
);

export default CurrencyInputForm;
