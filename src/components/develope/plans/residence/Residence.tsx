import React from 'react';

import styled from 'styled-components';

import AppFlex from '@/libs/primitives/layout/Flex';
import AppText from '@/libs/primitives/typography/Text';

type ResidenceProps = {
  name: string;
  RoomsNumbers: number;
  PassengerNumbers: number;
  //   logo
  cost: number;
  deliveryDate: string;
};
const Residence = React.memo((props: ResidenceProps) => {
  const { name, RoomsNumbers, PassengerNumbers, cost, deliveryDate } = props;
  return (
    <AppFlex
      direction={'column'}
      px={'4'}
      py={'2'}
      gap={'2'}
      style={{ width: '100%', maxWidth: 640, border: '1px solid #6a6a6a', borderRadius: 8 }}
    >
      <AppFlex width={'100%'} justify={'between'} align={'center'}>
        <AppText as='p'>{name}</AppText>
        {/* TODO: LOGO */}
      </AppFlex>
      <AppFlex gap={'4'}>
        <InfoBox label='تعداد اتاق' value={RoomsNumbers} />
        <InfoBox label='تعداد نفرات' value={PassengerNumbers} />
      </AppFlex>
      <InfoBox label='هزینه' value={cost} fullWidth />

      <AppFlex justify={'center'} mt={'1'} style={{ borderTop: '1px solid #D4D4D4' }}>
        <AppText as='p'>{deliveryDate}</AppText>
      </AppFlex>
    </AppFlex>
  );
});

const InfoBox = ({
  label,
  value,
  fullWidth = false,
}: {
  label: string;
  value: string | number;
  fullWidth?: boolean;
}) => (
  <InfoBoxContainer fullWidth={fullWidth}>
    <AppText as='label'>{label}</AppText>
    <AppText as='p'>{value}</AppText>
  </InfoBoxContainer>
);

const InfoBoxContainer = styled(AppFlex)<{ fullWidth: boolean }>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '50%')};
  justify-content: space-between;
  border: 1px solid #d4d4d4;
  border-radius: 8px;
  padding: 4px 8px;
`;

export default Residence;

// const ResidenceContainer = styled(AppFlex).attrs(() => ({
//   direction: 'column',
//   px: '2',
//   gap: '2',
// }))`
//   width: 100%;
//   max-width: 640px;
//   border: 1px solid #6a6a6a;
//   border-radius: 0.5 rem;
// `;

{
  /* <AppFlex
          width={'50%'}
          justify={'between'}
          style={{ border: '1px solid #d4d4d4', borderRadius: 8, padding: '4px 8px' }}
        >
          <AppText as='label'>تعداد اتاق</AppText>
          <AppText as='p'>{RoomsNumbers}</AppText>
        </AppFlex> */
}
{
  /* <AppFlex
          width={'50%'}
          justify={'between'}
          style={{ border: '1px solid #d4d4d4', borderRadius: 8, padding: '4px 8px' }}
        >
          <AppText as='label'>تعداد نفرات</AppText>
          <AppText as='p'>{PassengerNumbers}</AppText>
        </AppFlex> */
}

{
  /* <AppFlex
        width={'100%'}
        justify={'between'}
        style={{ border: '1px solid #d4d4d4', borderRadius: 8, padding: '4px 8px' }}
      >
        <AppText as='label'>هزینه</AppText>
        <AppText as='p'>{cost}</AppText>
      </AppFlex> */
}
