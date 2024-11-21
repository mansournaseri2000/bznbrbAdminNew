import React from 'react';

import { Flex, Grid, Heading, IconButton, Text } from '@/libs/primitives';

type AccessDetailProps = {
  title: string;
  badge: string[];
  backButton?: boolean;
  //   onBack: () => void;
};

const AccessDetail: React.FC<AccessDetailProps> = (props: AccessDetailProps) => {
  const { title, badge, backButton } = props;
  return (
    <Flex width={'100%'} direction={'column'} gap={'4'} p={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
      <Heading>{title}</Heading>
      <Grid width={'100%'} columns={'2'} gapX={'4'} align={'end'} style={{ gridTemplateColumns: '6fr 0.5fr' }}>
        <Flex align={'center'} gap={'4'} wrap={'wrap'}>
          {badge?.map((item, index) => (
            <Text as='p' key={index}>
              {item}
            </Text>
          ))}
        </Flex>
        {backButton && (
          <IconButton size={'3'} radius='large'>
            lo
          </IconButton>
        )}
      </Grid>
    </Flex>
  );
};

export default AccessDetail;
