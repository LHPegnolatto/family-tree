import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/toast';
import Head from 'next/head';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  return (
    <div>
      <Head>
        <title>Family Tree</title>
      </Head>

      <main>
        <Flex h="100%" align="flex-start" justify="flex-end" m={2}>
          <IconButton
            aria-label="Search database"
            icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
            onClick={() => {
              toggleColorMode();

              toast.closeAll();
              toast({
                position: 'bottom-left',
                title: 'Tema alterado.',
                description: `O tema foi alterado com sucesso para o modo ${
                  colorMode === 'light' ? 'escuro' : 'claro'
                }.`,
                status: 'info',
                duration: 2000,
              });
            }}
          />
        </Flex>
      </main>
    </div>
  );
}
