import React, { useState, useEffect } from 'react';
import { Box } from '../Basic';
import House from '../../assets/icons/house.svg';
import { H1, H3, P } from '../theme/typography';
import { Span } from '../theme/typography/Span/Span';
import CurrencyInputForm from '../Form/CurrencyInputForm';
import MonthInputForm from '../Form/MonthInputForm';
import moment from 'moment';
import { Formik, Field, Form as FormikForm } from 'formik';
import Button from '../Basic/Button';

const Main: React.FC = () => {
  const getFirstDayOfNextMonth = () => {
    const date = moment()
      .add(1, 'month')
      .toDate();
    return new Date(date.getFullYear(), date.getMonth(), 1);
  };
  const [goalDate, setGoalDate] = useState<Date>(getFirstDayOfNextMonth());
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [monthlyAmount, setMonthlyAmount] = useState<number>(0);
  const [installmentsNumber, setInstallmentsNumber] = useState<number>(0);

  useEffect(() => {
    setInstallmentsNumber(
      Math.round(moment(goalDate).diff(moment(), 'months', true))
    );
    setMonthlyAmount(totalAmount / installmentsNumber);
  }, [totalAmount, goalDate, installmentsNumber]);

  const addDate = (amount: number, setFieldValue: (date: Date) => void) => {
    const newDate = moment(goalDate)
      .add(amount, 'months')
      .toDate();
    if (moment(newDate).isAfter(moment())) {
      setGoalDate(newDate);
      setFieldValue(newDate);
    }
  };

  return (
    <>
      <Box
        width="600"
        bg="white"
        border={'1px solid'}
        borderColor={'gray.light'}
        borderRadius={'8px'}
      >
        <Box p={50}>
          <Box>
            <House />
            <H1 styling="base" mb={5}>
              Buy a house
            </H1>
            <Span color="gray.default">Saving Goal</Span>
            <Formik
              enableReinitialize
              initialValues={{}}
              // validationSchema={Schema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                setSubmitting(false);
              }}
            >
              {({ setFieldValue }) => (
                <FormikForm
                  translate="no"
                  style={{ height: '100%', width: '100%' }}
                >
                  <Box
                    alignItems="flex-start"
                    display="flex"
                    flexDirection={{ mobile: 'column', desktop: 'row' }}
                    mt={50}
                  >
                    <Field name="totalAmount">
                      {() => (
                        <CurrencyInputForm
                          value={totalAmount}
                          onChange={setTotalAmount}
                          label="Total amount"
                        />
                      )}
                    </Field>
                    <Field name="goalDate">
                      {() => (
                        <MonthInputForm
                          onClickRight={() => {
                            addDate(1, (date: Date) =>
                              setFieldValue('goalDate', date)
                            );
                          }}
                          onClickLeft={() => {
                            addDate(-1, (date: Date) =>
                              setFieldValue('goalDate', date)
                            );
                          }}
                          value={goalDate}
                          label="Reach goal by"
                        />
                      )}
                    </Field>
                  </Box>
                  <Box
                    border="1px solid"
                    borderColor="gray.light"
                    borderRadius="4px"
                    p={30}
                    mt={30}
                  >
                    <Box styling="row" justifyContent="space-between">
                      <H3 styling="base">Monthly Amount</H3>
                      <P styling="info"> {`$${Math.ceil(monthlyAmount)}`}</P>
                    </Box>
                    <Box mt={50} fontSize={12}>
                      You’re planning{' '}
                      <strong>{installmentsNumber} monthly deposits</strong> to
                      reach your
                      <strong> ${totalAmount}</strong> goal by{' '}
                      <strong>October 2020.</strong>
                    </Box>
                  </Box>
                  <Box styling="row" justifyContent="center">
                    <Button
                      styling="base"
                      width="75%"
                      type="submit"
                      mt={50}
                      p={15}
                      alignSelf={'center'}
                    >
                      Confirm
                    </Button>
                  </Box>
                </FormikForm>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Main;
