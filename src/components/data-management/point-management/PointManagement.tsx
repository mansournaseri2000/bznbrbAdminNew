'use client';

import React from 'react';

import { Flex } from '@/libs/primitives';

import PointManagementHero from './hero/PointManagementHero';
import PointManagementList from './list/PointManagementList';

// { searchParams }: { params: { slug: string }; searchParams: { page: string } }

const PointManagement = () => {
  return (
    <Flex width={'100%'} direction={'column'} gap={'5'} p={'5'}>
      <PointManagementHero />
      <PointManagementList />
    </Flex>
  );
};

export default PointManagement;

// console.log('********searchParams*****************', searchParams);
// const [page, setPage] = useState(searchParams.page ? Number(searchParams.page) : 1);

// const methods = useForm({
//   defaultValues: { plcaeName: '', city: '', province: '', provinceID: '', categoryID: '' },
// });

// const { watch } = methods;

/**
 * services
 * _______________________________________________________________________________
 */

// const {
//   data: testData,
//   isLoading: testIsLoading,
//   isError,
// } = useQuery({
//   queryKey: ['all-places', page],
//   queryFn: async () => getAllPlaces(page),
// });

// console.log('testData', testData);

{
  /* {isError ? <Text>مشکلی پیش آمده لطفا مجدد تلاش نمایید</Text> : testIsLoading ? <Spinner style={{ marginInline: 'auto', scale: 3, marginBlock: '20px' }} /> : <PointManagementList />} */
}

{
  /* TODO: add pagination */
}
{
  /* <CustomPagination
        current={page}
        total={testData?.totalPages as number}
        onPageChange={p => {
          setPage(p);
          updateUrlWithPageNumber(p);
        }}
      /> */
}
