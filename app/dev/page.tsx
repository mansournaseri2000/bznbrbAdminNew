import React from 'react';

import AutomationBanner from '@/components/develope/automation/automation-banner/AutomationBanner';
import GeographicInfo from '@/components/develope/automation/geographic-info/GeographicInfo';
import PersonnelDetail from '@/components/develope/automation/personnel-detail/PersonnelDetail';
import AutomationProfile from '@/components/develope/automation/profile/AutomationProfile';
import TeamDetailAutomation from '@/components/develope/automation/team-detail-automation/TeamDetailAutomation';
import TourLeaderInfo from '@/components/develope/automation/tour-leader-info/TourLeaderInfo';
import UserAutomation from '@/components/develope/automation/user-automation/UserAutomation';
import UserDetail from '@/components/develope/automation/user-detail/UserDetail';
import Residence from '@/components/develope/plans/residence/Residence';
import TripDetailsCard from '@/components/develope/plans/trip-details-card/TripDetailsCard';
import QuestionCard from '@/components/develope/support/question-card/QuestionCard';
import AccessDetail from '@/components/develope/teams-and-employers/access-detail/AccessDetail';
import EmployDetail from '@/components/develope/teams-and-employers/employ-detail/EmployDetail';
import MemberDetail from '@/components/develope/teams-and-employers/member-detail/MemberDetail';
import TeamDetail from '@/components/develope/teams-and-employers/team-detail/TeamDetail';
import TourLeader from '@/components/develope/users/tour-leader/TourLeader';
import UserInfoCard from '@/components/develope/users/user-info-Card/UserInfoCard';
import BannerDetail from '@/components/develope/web-content/banner-detail/BannerDetail';
import BannerItem from '@/components/develope/web-content/banner-item/BannerItem';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppHeading from '@/libs/primitives/typography/Heading';

const badge = ['حذف کاربر', 'مشاهده لیست پرداختی ها', 'مشاهده لیست پرداختی ها', 'ثبت کاربر'];

const page = () => {
  return (
    <AppFlex width={'100%'} direction={'column'} gap={'5'} p={'5'} justify={'center'}>
      <AppHeading as='h1' color='blue' style={{ fontWeight: 'bold' }}>
        Plans :
      </AppHeading>
      {/* ****
         Plans ________________________________________________________________________________________________
        **** */}
      <AppFlex width={'100%'} direction={'column'} gap={'4'} align={'center'}>
        <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
          رزرو محل اقامت
        </AppHeading>
        <Residence
          PassengerNumbers={8}
          RoomsNumbers={2}
          cost={2220000}
          deliveryDate='تحویل 25 فروردین'
          name='هتل آسیا'
        />
        <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
          وسیله سفر
        </AppHeading>
        <TripDetailsCard
          arrivalTime='8 عصر'
          departureTime='8 صبح'
          fromCity='تهران'
          passengers={8}
          toCity='مشهد'
          travelDuration='12 ساعت پرواز'
          type='رفت'
        />
      </AppFlex>
      <AppHeading as='h1' color='blue' style={{ fontWeight: 'bold' }}>
        Users :
      </AppHeading>
      {/* ****
         Users ________________________________________________________________________________________________
        **** */}
      <AppFlex width={'100%'} direction={'column'} gap={'4'} align={'center'}>
        <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
          اطلاعات کاربر
        </AppHeading>
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
      </AppFlex>
      <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
        اطلاعات تورلیدری
      </AppHeading>
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
      <AppHeading as='h1' color='blue' style={{ fontWeight: 'bold' }}>
        Teams And Employers :
      </AppHeading>
      {/* ****
         Teams And Employers ________________________________________________________________________________________________
        **** */}
      <AppFlex width={'100%'} direction={'column'} gap={'4'} align={'center'}>
        <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
          مشخصات تیم
        </AppHeading>
        <TeamDetail
          name='تیم مدیریت محتوا'
          managerEmail='long.example.123@gmail.com'
          personnelNumber={12}
          teamAccess={'دسترسی اصلی 1، دسترسی اصلی 2'}
          teamManager='حامد احمدی'
        />
        <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
          مشخصات پرسنل
        </AppHeading>
        <MemberDetail
          birthDate='1379/01/24'
          firstName='پویان'
          lastName='احمدی'
          lastSeen='15:35 - 01 فروردین 1403 '
          managerName='حامد احمدی'
          mobile='091212345678'
          nationalId='00112345678'
          orgEmail='long.example.123@BznmBrn.ir'
          position='دبیر محتوا'
          profileImg=''
          teamName='مدیریت محتوا'
        />
        <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
          مشخصات پرسنل
        </AppHeading>
        <EmployDetail
          accountCreatedAt='01 فروردین 1403'
          accountOwner='حامد احمدی'
          address='تهران- خیابان ولیعصر- میدان ولیعصر- بلوار کشاورز- خیابان فلسطین- سرای خلاق- طبقه چهار- دفتر بامداد فصل رویش'
          bankAccountNumber='IR 120 1548 7000 0002 1234 43021'
          birthDate='1379/01/24'
          fatherName='میثم'
          firstName='پویان'
          lastName='احمدی'
          lastSeen='15:35 - 01 فروردین 1403 '
          mobile='091212345678'
          nationalId='00112345678'
          orgEmail='long.example.123@BznmBrn.ir'
          personalEmail='long.example.123@gmail.com'
          profileImg=''
        />

        <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
          تیم ها و دسترسی ها
        </AppHeading>
        <AccessDetail backButton badge={badge} title='مدیریت کاربران' />
        <AccessDetail badge={badge} title='مدیریت کاربران' />
      </AppFlex>
      <AppHeading as='h1' color='blue' style={{ fontWeight: 'bold' }}>
        Web Content :
      </AppHeading>
      {/* 
        ****
         Web Content ________________________________________________________________________________________________
        **** 
        */}
      <AppFlex width={'100%'} direction={'column'} gap={'4'} align={'center'}>
        <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
          محتوای برنامه ساز
        </AppHeading>
        <BannerDetail
          bannerImage=''
          expirationDate='01 فروردین 1403'
          owner='شرکت پویان'
          title='پویان'
          header='بنر اول'
        />
        <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
          لیست بنر های داینامیک
        </AppHeading>
        <BannerItem expirationDate='01 فروردین 1403' owner='شرکت پویان' title='پویان' />
      </AppFlex>
      <AppHeading as='h1' color='blue' style={{ fontWeight: 'bold' }}>
        Automation :
      </AppHeading>
      {/* 
        ****
         WAutomation ________________________________________________________________________________________________
        **** 
        */}
      <AppFlex width={'100%'} direction={'column'} gap={'4'} align={'center'}>
        <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
          اتوماسیون
        </AppHeading>
        <UserAutomation
          date='چهارشنبه 10 فروردین 1401'
          operatedOn='میثم مطیعی'
          operatorName='حامد احمدی'
          status='در انتظار تایید'
          team='منابع انسانی'
          type='ثبت کاربر + تورلیدر'
        />
        <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
          افزوده شده
        </AppHeading>
        <PersonnelDetail
          birthDate='1379/01/24'
          firstName='پویان'
          lastName='احمدی'
          lastSeen='15:35 - 01 فروردین 1403 '
          mobile='091212345678'
          nationalId='00112345678'
          orgEmail='long.example.123@BznmBrn.ir'
          profileImg=''
          role='دبیر محتوا'
          teamManager='حامد احمدی'
          teamName='مدیریت محتوا'
        />
        <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
          اتوماسیون
        </AppHeading>
        <AutomationProfile
          type='افزودن'
          user='حامد احمدی'
          changeDate='چهارشنبه 10 فروردین 1401'
          profileImg=''
          status='بازگشت خورده'
          teamName='محتوا'
        />
        <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
          افزوده شده
        </AppHeading>
        <TeamDetailAutomation
          managerEmail='long.example.123@gmail.com'
          personnelNumber={12}
          teamAccess={'دسترسی اصلی 1، دسترسی اصلی 2'}
          teamManager='حامد احمدی'
          teamName='تیم مدیریت محتوا'
        />
        <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
          حذف شده
        </AppHeading>
        <TourLeaderInfo
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
        <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
          افزوده شده
        </AppHeading>
        <UserDetail
          birthDate='1379/01/24'
          email='example@gmail.com'
          firstName='پویان'
          lastName='احمدی'
          mobile='091212345678'
          profileImg=''
          role='تورلیدر'
          sex='مرد'
        />
        <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
          افزوده شده
        </AppHeading>
        <GeographicInfo
          companyName='فرودگاه دشت ناز '
          description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
        />
        <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
          افزوده شده
        </AppHeading>
        <AutomationBanner
          adOwner='شرکت پویان'
          expiryDate='01 فروردین 1403'
          header='بنر اول'
          imageUrl=''
          title='پویان'
        />
      </AppFlex>
      <AppHeading as='h1' color='blue' style={{ fontWeight: 'bold' }}>
        Support :
      </AppHeading>
      <AppHeading color='red' style={{ width: '100%', borderBottom: '1px solid red', paddingBottom: 8 }}>
        اتوماسیون محتوای وب
      </AppHeading>
      <QuestionCard
        mobile='شماره تماس'
        profileImg=''
        question='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
        username='نام کاربر'
      />
    </AppFlex>
  );
};

export default page;
