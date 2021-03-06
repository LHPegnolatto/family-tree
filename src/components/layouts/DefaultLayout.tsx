import { Flex } from '@chakra-ui/react';

import Header from '../sections/Header';
// import Footer from '../sections/Footer';

export default function ({ children }) {
  return (
    <Flex direction="column" align="center" maxW={{ xl: '1200px' }} m="0 auto">
      <Header />
      {children}
      {/* <Footer /> */}
    </Flex>
  );
}
