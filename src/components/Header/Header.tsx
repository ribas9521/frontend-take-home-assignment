import React from 'react';
import { Box } from '../Basic';
// import { Props } from './types';
import Logo from '../../assets/icons/logo.svg';

const Header: React.FC = () => (
  <>
    <Box pt={30} pb={30} pl={50} mx={-5} my={-10} bg="white">
      <Logo />
    </Box>
  </>
);

export default Header;
