import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Center } from '@chakra-ui/layout';
import Head from 'next/head';

export default function Home() {
  const { toggleColorMode } = useColorMode();

  return (
    <div>
      <Head>
        <title>Family Tree</title>
      </Head>

      <main>
        <Center h="100vh">
          <Button onClick={toggleColorMode}>Toggle theme</Button>
        </Center>
      </main>
    </div>
  );
}
