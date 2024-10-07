import React from 'react';

import AppIconButton from '@/libs/primitives/components/IconButton';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppGrid from '@/libs/primitives/layout/Grid';
import AppHeading from '@/libs/primitives/typography/Heading';
import AppText from '@/libs/primitives/typography/Text';

type AccessDetailProps = {
  title: string;
  badge: string[];
  backButton?: boolean;
  //   onBack: () => void;
};

const AccessDetail: React.FC<AccessDetailProps> = (props: AccessDetailProps) => {
  const { title, badge, backButton } = props;
  return (
    <AppFlex width={'100%'} direction={'column'} gap={'4'} p={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
      <AppHeading>{title}</AppHeading>
      <AppGrid width={'100%'} columns={'2'} gapX={'4'} align={'end'} style={{ gridTemplateColumns: '6fr 0.5fr' }}>
        <AppFlex align={'center'} gap={'4'} wrap={'wrap'}>
          {badge?.map((item, index) => (
            <AppText as='p' key={index}>
              {item}
            </AppText>
          ))}
        </AppFlex>
        {backButton && (
          <AppIconButton size={'3'} radius='large'>
            lo
          </AppIconButton>
        )}
      </AppGrid>
    </AppFlex>
  );
};

export default AccessDetail;
