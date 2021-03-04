import { extendTheme } from '@chakra-ui/react';

import styles from './styles';

const overrides = extendTheme({
  ...styles,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export default overrides;
