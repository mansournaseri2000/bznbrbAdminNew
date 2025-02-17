'use client';

import dynamic from 'next/dynamic';

import { Spinner } from '@radix-ui/themes';
import { useQueries } from '@tanstack/react-query';

import { getAllPlacesConstants, getPlace } from '@/api/place';
import { Flex, Heading } from '@/libs/primitives';
import { PlaceResponse } from '@/types/place';

const CreateAndEditPlaceRootComponent = dynamic(() => import('@/components/place/create-edit-place/CreateAndEditPlaceRootComponent'), {
  ssr: false,
});

const CreateAndEditPlacePage = ({ params }: { params: { slug: string } }) => {
  const status = params.slug[0];
  const placeID = params.slug[1];

  /**
   * const and variables
   * _______________________________________________________________________________
   */

  const results = useQueries({
    queries: [
      {
        queryKey: ['constant'],
        queryFn: async () => await getAllPlacesConstants(),
      },
      {
        queryKey: ['place'],
        queryFn: async () => await getPlace(Number(placeID)),
        enabled: status === 'edit',
        staleTime: 0,
        gcTime: 0,
      },
    ],
  });
  const [constantResult, editPlaceResult] = results;
  const { data: constantData } = constantResult;
  const { data: placeData, isLoading: placeIsLoading } = editPlaceResult;

  if (!constantData || placeIsLoading)
    return (
      <Flex style={{border:"1px solid red"}} width={'100%'} height={'100vh'} justify={'center'} align={'center'}>
        <Spinner style={{ marginInline: 'auto', scale: 3, marginBlock: '20px' }} />
      </Flex>
    );

 

  /**
   * template
   * _______________________________________________________________________________
   */

  return (
    <>
      {status === 'edit' ? <Heading>ویرایش نقطه</Heading> : <Heading>ساخت نقطه</Heading>}
      <CreateAndEditPlaceRootComponent placeConstant={constantData} status={status} placeID={Number(placeID)} placeData={placeData as PlaceResponse} />
    </>
  );
};

export default CreateAndEditPlacePage;
