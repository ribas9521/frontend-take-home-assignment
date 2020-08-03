import React, { MouseEvent, useEffect } from 'react';
import { Box } from '../../Basic';
import { P, Label } from '../../theme/typography';
import InputIcon from '../../Basic/InputIcon/InputIcon';
import Arrow from '../../../assets/icons/arrow.svg';
import MonthInput from '../../Basic/MonthInput';
import moment from 'moment';
import { Span } from '../../theme/typography/Span/Span';

interface DispatchProps {
  value: Date;
  onClickLeft?: (
    e: MouseEvent | KeyboardEvent | React.MouseEvent<HTMLElement>
  ) => void;
  onClickRight?: (
    e: MouseEvent | KeyboardEvent | React.MouseEvent<HTMLElement>
  ) => void;
  error?: string;
  label?: string;
}

type Props = DispatchProps;

const MonthInputForm = ({
  value,
  error,
  label,
  onClickRight,
  onClickLeft,
  ...rest
}: Props) => {
  useEffect(() => {
    const arrowPressed = (e: KeyboardEvent) => {
      if (e.keyCode === 37) {
        onClickLeft(e);
      }
      if (e.keyCode === 39) {
        onClickRight(e);
      }
    };
    document.addEventListener('keydown', arrowPressed, false);

    return () => {
      document.removeEventListener('keydown', arrowPressed, false);
    };
  }, [value, onClickRight, onClickLeft]);

  return (
    <Box styling="column" width="100%" mb="15px" alignItems="flex-start" mx={5}>
      <Label mb={5} styling="base">
        {label}
      </Label>
      <Box
        styling="column"
        position="relative"
        width="100%"
        alignItems="normal"
      >
        <Box styling="row">
          <Box>
            <InputIcon bg="light" styling="base" onClick={onClickLeft}>
              <Box mt={'-5px'} height={25} width={25}>
                <Arrow />
              </Box>
            </InputIcon>
          </Box>
          <MonthInput value={value} styling="base" {...rest}>
            <Box mt={5}>
              <Span>{moment(value).format('MMMM')}</Span>
              <P>{moment(value).format('YYYY')}</P>
            </Box>
          </MonthInput>
          <Box>
            <InputIcon bg="light" styling="reverse" onClick={onClickRight}>
              <Box mt={'-10px'} height={25} width={25}>
                <Arrow />
              </Box>
            </InputIcon>
          </Box>
        </Box>
        {error && (
          <P fontSize="12px" styling="error" width="100%">
            {error}
          </P>
        )}
      </Box>
    </Box>
  );
};

export default MonthInputForm;
