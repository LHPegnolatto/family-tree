import { Flex } from '@chakra-ui/layout';

import Head from '../components/common/Head';
import DefaultLayout from '../components/layouts/DefaultLayout';

export default function Chat() {
  return (
    <div>
      <Head title="Chat | Family Tree" />

      <main>
        <DefaultLayout>
          <Flex h="100%" align="flex-start" justify="flex-end" m={2}>
            Chat
          </Flex>
        </DefaultLayout>
      </main>
    </div>
  );
}
