import { Flex } from '@chakra-ui/layout';

import Head from '../components/common/Head';
import DefaultLayout from '../components/layouts/DefaultLayout';

export default function Signup() {
  return (
    <div>
      <Head title="Cadastrar-se | Family Tree" />

      <main>
        <DefaultLayout>
          <Flex h="100%" align="flex-start" justify="flex-end" m={2}>
            Cadastrar-se
          </Flex>
        </DefaultLayout>
      </main>
    </div>
  );
}
