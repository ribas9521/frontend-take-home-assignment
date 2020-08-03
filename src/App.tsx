import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from './components/theme';
import themeDefault from './assets/themes/default';
import Header from './components/Header';
import { Box } from './components/Basic';
import { P } from './components/theme/typography';
import GlobalStyle from './components/Basic/GlobalStyle/GlobalStyle';
import Main from './components/Main';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider
      theme={{
        ...theme.default,
        colors: {
          ...theme.default.colors,
          ...themeDefault
        }
      }}
    >
      <GlobalStyle />
      <Header />
      <Box
        flexDirection="row"
        justifyContent="center"
        display="flex"
        mt={50}
        mb={30}
      >
        <P styling="base">
          Let&apos;s plan your <strong>saving goal.</strong>
        </P>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Main />
      </Box>
    </ThemeProvider>
  );
};

export default App;
