import React from 'react';

import TourLeader from '@/components/develope/users/tour-leader/TourLeader';
import UserInfoCard from '@/components/develope/users/user-info-Card/UserInfoCard';
import { Flex } from '@/libs/primitives';

const UserProfile = () => {
  return (
    <Flex direction={'column'} gap={'4'}>
      <UserInfoCard
        birthDate='1379/01/24'
        email='example@gmail.com'
        firstName='پویان'
        lastName='احمدی'
        mobile='091212345678'
        profileImg=''
        sex='مرد'
        userRole='تورلیدر'
      />
      <TourLeader
        about='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
        cardExpiryDate='1403/05/20'
        cardIssueDate='1379/01/24'
        city='تهران'
        experienceYears={5}
        image=''
        languages={'انگلیسی، فرانسه'}
        specialties={'آشنا به طبیعت، آشنا به تاریخ'}
        state='تهران'
      />
    </Flex>
  );
};

export default UserProfile;
