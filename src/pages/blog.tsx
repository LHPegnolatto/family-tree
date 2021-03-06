import { Flex } from '@chakra-ui/layout';

import Head from '../components/common/Head';
import DefaultLayout from '../components/layouts/DefaultLayout';

export default function Blog() {
  return (
    <div>
      <Head title="Blog | Family Tree" />

      <main>
        <DefaultLayout>
          <Flex h="100%" align="flex-start" justify="flex-end" m={2}>
            Blog
          </Flex>
        </DefaultLayout>
      </main>
    </div>
  );
}
