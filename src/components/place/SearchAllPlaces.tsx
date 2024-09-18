'use client';

import { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

import { Popover } from '@radix-ui/themes';
import { useInfiniteQuery } from '@tanstack/react-query';

import { getAllPlacesByName } from '@/api/place';
import { Button, Flex, Grid, Text, TextField } from '@/libs/primitives';

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
    queryKey: ['search-all-places'],
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
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const element = observerElem.current;

    if (!element) {
      console.log('Element is not available for observation');
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

  console.log(data, 'data');

  console.log(watch());

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Grid>
      <Popover.Root>
        <Popover.Trigger>
          <Grid>
            <TextField
              autoFocus
              {...register('searchText')}
              color='red'
              placeholder='نام نقطه مورد نظرتان را وارد کنید ...'
              aria-label='Search field'
              style={{ backgroundColor: '#ffff' }}
            />
          </Grid>
        </Popover.Trigger>
        <Popover.Content
          style={{
            maxHeight: '500px',
            overflowY: 'auto', // Enable scrolling in the popover content
            border: '1px solid red',
            padding: '10px',
            position: 'relative',
          }}
        >
          {/* Main content */}
          <Grid style={{ minHeight: '1000px' }}>
            {isSuccess &&
              data?.pages.map((page, index) =>
                !page?.placesDetail?.length ? (
                  <Flex key={index} style={{ width: '100%', height: '80px' }}>
                    دیتایی باقت نشد
                  </Flex>
                ) : (
                  <Grid key={index} gap={'16px'}>
                    {page?.placesDetail?.map((item: any) => (
                      <Flex key={item} p={'24px'} style={{ border: '1px solid red' }}>
                        data
                      </Flex>
                    ))}
                  </Grid>
                )
              )}
          </Grid>

          {/* Loading element */}
          <div
            ref={observerElem}
            style={{
              height: '50px',
              border: '1px dashed grey',
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {isFetchingNextPage && hasNextPage && <Text>loading</Text>}
          </div>
          {isSuccess && data?.pages[0]?.placesDetail?.length !== 0 && <Button>show more</Button>}
        </Popover.Content>
      </Popover.Root>
    </Grid>
  );
};

export default SearchAllPlaces;

/**
 * styled-component
 * _______________________________________________________________________________
 */
