'use client';

import { useCallback, useEffect, useRef } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useInfiniteQuery } from '@tanstack/react-query';
import { styled } from 'styled-components';

import { getAllPlacesByCityID } from '@/api/place';
import { Button, Flex, Grid, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import { Province } from '@/types/place/place-constant';

import SearchPlaceCard from './SearchPlaceCard';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  province: Province[];
};

type FormData = {
  city: string;
  province: string;
};

const SearchByCity = ({ province }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const methods = useForm<FormData>({
    defaultValues: {
      city: '',
      province: '',
    },
  });

  const { watch, setValue, control } = methods;
  const city = province.filter(item => item.id === Number(watch('province')))[0]?.Cities;
  const cityID = watch('city');
  const observerElem = useRef<HTMLDivElement | null>(null);

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<any>({
    queryKey: ['search-place-by-city', cityID],
    queryFn: ({ pageParam = 1 }) => getAllPlacesByCityID(pageParam, Number(cityID)),
    getNextPageParam: (lastPage: any, allPages: any) => {
      const nextPage = allPages.length + 1;
      return lastPage?.placesDetail?.length !== 0 ? nextPage : undefined;
    },
    enabled: cityID !== undefined,
  } as any);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
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

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <FormProvider {...methods}>
      <Grid mb={'10px'} p={'16px 16px'} gap={'16px'} style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)', borderRadius: '8px' }}>
        <Text>جستجو بر اساس نام شهر</Text>
        <Flex gap={'20px'} align={'center'} position={'relative'}>
          <Controller
            name='province'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                value={field.value}
                onValueChange={val => {
                  field.onChange(val);
                  setValue('city', '');
                }}
                placeholder={'استان'}
                label='استان'
              >
                {province.map(item => {
                  return (
                    <SelectItem key={item.id} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  );
                })}
              </SelectRoot>
            )}
          />
          <Controller
            name='city'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                value={field.value}
                onValueChange={val => {
                  field.onChange(val);
                }}
                placeholder={'شهر'}
                label='شهر'
              >
                {city?.map(item => {
                  return (
                    <SelectItem key={item.id} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  );
                })}
              </SelectRoot>
            )}
          />
          <Button style={{ marginTop: '18px' }} variant='soft' size={'4'} type='submit' onClick={() => setValue('city', '')}>
            بستن لیست
          </Button>
          <SearchContainer top={'75px'} right={'0px'} left={'0px'} position={'absolute'} isShow={watch('city').length !== 0}>
            <Grid position={'relative'} p={'16px'} className='wrapper' height={'auto'} style={{ zIndex: 1000 }}>
              {isSuccess &&
                data?.pages.map((page, index) =>
                  data.pages.length === 1 ? (
                    <Flex key={index} style={{ width: '100%', height: '80px' }}>
                      دیتایی باقت نشد
                    </Flex>
                  ) : (
                    <Grid height={'max-content'} align={'start'} key={index} gap={'16px'} mb={'10px'}>
                      {page?.placesDetail?.map((item: { cityName: string; provinceName: string; id: number; name: string; pictures: any }, index: number) => (
                        <SearchPlaceCard key={item.id} index={index} city={item.cityName} name={item.name} pictures={item.pictures} province={item.provinceName} id={item.id} />
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
        </Flex>
      </Grid>
    </FormProvider>
  );
};

export default SearchByCity;

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
