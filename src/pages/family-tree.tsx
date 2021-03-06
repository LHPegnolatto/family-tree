import { Flex } from '@chakra-ui/layout';

import Head from '../components/common/Head';
import DefaultLayout from '../components/layouts/DefaultLayout';

export default function FamilyTree() {
  return (
    <div>
      <Head title="Family Tree | Family Tree" />

      <main>
        <DefaultLayout>
          <Flex h="100%" align="flex-start" justify="flex-end" m={2}>
            Family Tree
          </Flex>
        </DefaultLayout>
      </main>
    </div>
  );
}
