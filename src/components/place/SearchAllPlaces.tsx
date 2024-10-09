'use client';

import { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useInfiniteQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import { getAllPlacesByName } from '@/api/place';
import { Flex, Grid, TextField } from '@/libs/primitives';
import { PlaceDetail } from '@/types/place';

import SearchPlaceCard from './SearchPlaceCard';

/**
 * props
 * _______________________________________________________________________________
 */

const SearchAllPlaces = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const observerElem = useRef<HTMLDivElement | null>(null);

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  const { register, watch } = useForm<{ searchText: string }>({
    defaultValues: { searchText: '' },
  });

  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<any>({
    queryKey: ['search-all-places', watch('searchText')],
    queryFn: ({ pageParam = 1 }) => getAllPlacesByName(pageParam, watch('searchText')),
    getNextPageParam: (lastPage: any, allPages: any) => {
      const nextPage = allPages.length + 1;
      return lastPage?.placesDetail?.length !== 0 ? nextPage : undefined;
    },
  } as any);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        console.log('Observer is intersecting');
        console.log("run");
        
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const element = observerElem.current;

    if (!element) {
      console.log('Element is not ava ilable for obs   ervation');
      return;
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [handleObserver, fetchNextPage, hasNextPage]);

  console.log(data);

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Grid position={'relative'}>
      <TextField
        autoFocus
        {...register('searchText')}
        placeholder='نام نقطه مورد نظرتان را وارد کنید ...'
        aria-label='Search field'
        style={{ backgroundColor: '#ffff' }}
      />
      <SearchContainer
        top={'55px'}
        right={'0px'}
        left={'0px'}
        position={'absolute'}
        isShow={watch('searchText').length > 0}
      >
        <Grid position={'relative'} p={'16px'} className='wrapper' height={'auto'}>
          {isSuccess &&
            data?.pages.map((page, index) =>
              data.pages.length === 1 ? (
                <Flex key={index} style={{ width: '100%', height: '80px' }}>
                  دیتایی باقت نشد
                </Flex>
              ) : (
                <Grid key={index} gap={'16px'} mb={'10px'}>
                  {page?.placesDetail?.map((item: PlaceDetail) => (
                    <SearchPlaceCard
                      key={item.id}
                      city={item.city}
                      name={item.name}
                      pictures={item.pictures}
                      province={item.province}
                      id={item.id}
                    />
                  ))}
                </Grid>
              )
            )}
          <ObserverElement ref={observerElem}>
            {isFetchingNextPage && hasNextPage && (
              <Flex justify={'center'}>
                <Spinner style={{ scale: 2 }} />
              </Flex>
            )}
          </ObserverElement>
        </Grid>
      </SearchContainer>
    </Grid>
  );
};

export default SearchAllPlaces;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const SearchContainer = styled(Grid)<{ isShow: boolean }>`
  opacity: ${({ isShow }) => (isShow ? 1 : 0)} !important;
  height: ${({ isShow }) => (isShow ? '500px' : '0px')} !important;
  transition: all 0.3s;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #00000048;
  z-index: 1000;
  max-height: 500px;
  overflow: auto;

  .wrapper {
  }
`;

const ObserverElement = styled(Grid)`
  height: 50px;
  position: absolute;
  bottom: 0px;
  right: 10px;
  left: 10px;
`;
