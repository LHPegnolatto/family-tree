import { useEffect } from 'react';
import { Button, IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/toast';
import { FiMoon, FiSun } from 'react-icons/fi';

import Head from '../components/common/Head';
import DefaultLayout from '../components/layouts/DefaultLayout';

export default function Home() {
  return (
    <div>
      <Head title="Início | Family Tree" />

      <main>
        <DefaultLayout>
          <Flex h="100%" align="flex-start" justify="flex-end" m={2}>
            Início
          </Flex>
        </DefaultLayout>
      </main>
    </div>
  );
}
