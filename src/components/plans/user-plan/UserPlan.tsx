'use client';

import React, { useCallback, useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';

import { useGetTripViewList } from '@/libs/hooks/useGetTripViewList';
import { Button, Flex, Grid, Heading, Text } from '@/libs/primitives';
import LazyLoadWrapper from '@/libs/shared/LazyLoadWrapper';
import BoxWrapper from '@/libs/shared/wrapper/BoxWrapper';
import { CREATE_PLANNER, LANDING } from '@/routes/local-routes';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { TripResponse } from '@/types/plans/trip';

import UserDetailCard from '../../../libs/shared/UserDetailCard';
import TripCommonView from './common-view/TripCommonView';
import DayList from './day-list/DayList';

const TripMapView = dynamic(() => import('@/components/plans/user-plan/map-view/MapView').then(module => module.default), { ssr: false });

type Props = {
  data: TripResponse;
  tripID: string;
  isLoading: boolean;
};

const UserPlan = ({ data, isLoading }: Props) => {
  /*
    ***
    variables and constant_______________________________________________________________________________
    ***
  */
  const [dayID, setDayID] = useState<number>(data?.days?.length > 0 ? data?.days[0]?.day_id : 0);
  const router = useRouter();
  /*
    ***
    hooks and methods _______________________________________________________________________________
    ***
  */

  useEffect(() => {
    setDayID(data?.days[0]?.day_id);
  }, [data]);

  const { commonViewListItem, mapViewListItem } = useGetTripViewList(dayID, data?.days);

  console.log('data', data);

  /*
    ***
    functions_______________________________________________________________________________
    ***
  */
  const handleChangeDayID = useCallback(
    (value: number) => {
      setDayID(value);
    },
    [setDayID]
  );

  return (
    <Grid width={'100%'} gapY={'5'}>
      <UserDetailCard
        type='PLAN'
        name='اکبر'
        last_name='روشن دل'
        image='/image/profile.jpeg'
        birthday='1379/01/24'
        sex='زن'
        mobile='091212345678'
        email='example@gmail.com'
        onShowProfile={() => router.push('/user/user-profile')}
      />
      {/* 
        ***
        user planner_________________________________________________________________________________________________________________________________________
        ***
      */}
      <Grid width={'100%'} gapX={'5'} style={{ gridTemplateColumns: '39% 59%' }}>
        {/*
        ***
        Trip view for planner _________________________________________________________________________________________________________________________________________
        ***
      */}
        <BoxWrapper hero='برنامه سفر' height={'auto'}>
          <Flex direction={'column'}>{data?.days?.length > 0 && <DayList dayList={data.days} onChangeDay={handleChangeDayID} currentDayId={dayID} />}</Flex>
          {data?.days?.length > 0 ? (
            <LazyLoadWrapper>
              <TripCommonView dayID={dayID} listItem={commonViewListItem} />
              {/* listItem={commonViewListItem} addCommentData={tripData} */}
            </LazyLoadWrapper>
          ) : (
            <>
              {isLoading ? (
                <Spinner size={'3'} style={{ marginInline: 'auto' }} />
              ) : (
                <Flex direction={'column'} height={'calc(100vh - 350px)'} justify={'center'} p={'16px'} gap={'24px'}>
                  <Heading as='h3' size={'3'}>
                    برای این نقطه برنامه ای ندارم!
                  </Heading>
                  <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
                    متاسفانه نمی تونم برای این نقطه برنامه ای بدم، اگر می خوای می تونی برگردی به صفحه اصلی یا دوباره بری به برنامه ساز تا نقطه دیگه ای رو برای سفر انتخاب کنی.
                  </Text>
                  <Flex gap={'16px'}>
                    <Link href={CREATE_PLANNER}>
                      <Button variant='surface' size={'2'} colorVariant='PINK'>
                        <Text {...typoVariant.body1}>برنامه ساز</Text>
                      </Button>
                    </Link>
                    <Link href={LANDING}>
                      <Button variant='surface' size={'2'} colorVariant='BLUE'>
                        <Text {...typoVariant.body1}>صفحه اصلی</Text>
                      </Button>
                    </Link>
                  </Flex>
                </Flex>
              )}
            </>
          )}
        </BoxWrapper>
        {/* 
        ***
        MAP_________________________________________________________________________________________________________________________________________
        ***
      */}
        {isLoading ? (
          <Flex align={'center'} justify={'center'}>
            <Spinner size={'3'} style={{ scale: 2 }} />
          </Flex>
        ) : (
          <Flex position={'relative'} style={{ flex: 1 }}>
            <TripMapView isEmpty={data?.days?.length === 0} locations={data?.days?.length > 0 ? mapViewListItem : ([35.6892, 51.389] as any)} center={getMapCenter(mapViewListItem)} />
          </Flex>
        )}

        {/* <Flex style={{ border: '1px solid red' }}>map</Flex> */}
      </Grid>
      {/* <UserPlanner /> */}
    </Grid>
  );
};

export default UserPlan;

export const getMapCenter = (locations: any[]) => {
  // Filter out locations where lat or lng are empty, invalid, or non-numeric
  const validLocations = locations.filter(location => {
    const lat = parseFloat(location.lat);
    const lng = parseFloat(location.lng);
    return !isNaN(lat) && !isNaN(lng) && Number.isFinite(lat) && Number.isFinite(lng) && location.point_id !== 0;
  });

  if (validLocations.length === 0) return null; // Handle case with no valid locations

  // Calculate average lat and lng
  const total = validLocations.reduce(
    (acc, location) => {
      acc.lat += parseFloat(location.lat);
      acc.lng += parseFloat(location.lng);
      return acc;
    },
    { lat: 0, lng: 0 }
  );

  const center = {
    lat: total.lat / validLocations.length || 0,
    lng: total.lng / validLocations.length || 0,
  };

  // Ensure the center is valid and not NaN
  if (isNaN(center.lat) || isNaN(center.lng)) {
    throw new Error('Invalid LatLng object: (NaN, NaN)');
  }

  return center;
};
