import { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Flex,
  Text,
  Button,
  TextProps,
  Icon,
  useColorMode,
  useToast,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiX, FiMenu, FiMoon, FiSun } from 'react-icons/fi';

import Logo from '../common/Logo';

interface MenuItemsProps extends TextProps {
  isLast?: boolean;
  to?: string;
}

const MenuItems: React.FC<MenuItemsProps> = ({
  children,
  isLast,
  to = '/',
  ...rest
}) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, md: 0 }}
      mr={{ base: 0, md: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

const Header: React.FC = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={[
        'white',
        'white',
        useColorModeValue('primary.700', 'white'),
        useColorModeValue('primary.700', 'white'),
      ]}
    >
      <Flex align="center">
        <Logo
          w="100px"
          color={[
            'white',
            'white',
            useColorModeValue('primary.500', 'white'),
            useColorModeValue('primary.500', 'white'),
          ]}
        />
      </Flex>

      <Box
        display={{ base: 'block', md: 'none' }}
        fontSize="4xl"
        onClick={toggleMenu}
      >
        {show ? <Icon as={FiX} /> : <Icon as={FiMenu} />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'column', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/">Início</MenuItems>
          <MenuItems to="/blog">Blog</MenuItems>
          <MenuItems to="/family-tree">Árvore genealógica</MenuItems>
          <MenuItems to="/chat">Chat</MenuItems>
          <MenuItems to="/signup">
            <Button
              size="sm"
              rounded="md"
              color={['primary.500', 'primary.500', 'white', 'white']}
              bg={['white', 'white', 'primary.500', 'primary.500']}
              _hover={{
                bg: [
                  'primary.100',
                  'primary.100',
                  'primary.600',
                  'primary.600',
                ],
              }}
            >
              Cadastre-se
            </Button>
          </MenuItems>
          <IconButton
            aria-label="Toogle theme"
            variant="ghost"
            mb={{ base: 0, sm: 0 }}
            mr={{ base: 0, sm: 0 }}
            fontSize="2xl"
            icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
            onClick={toggleColorMode}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
