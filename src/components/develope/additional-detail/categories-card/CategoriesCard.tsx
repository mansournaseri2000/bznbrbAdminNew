import React from 'react';

import { Button, Flex, Heading, IconButton, Text } from '@/libs/primitives';

type CategoriesCardProps = {
  header: string;
  category: string[];
  //   onDelete: () => void;
  //   onCategoryManagement: () => void;
};

const CategoriesCard: React.FC<CategoriesCardProps> = (props: CategoriesCardProps) => {
  const { header, category } = props;
  return (
    <Flex width={'100%'} direction={'column'} align={'end'} gap={'4'} p={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 4 }}>
      <Flex width={'100%'} align={'center'} justify={'between'} px={'4'} py={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <Heading>{header}</Heading>
        <IconButton size={'3'} radius='full'>
          icon
        </IconButton>
      </Flex>
      <Flex gap={'10px'} wrap={'wrap'}>
        {category.map((item, index) => (
          <Text key={index} style={{ padding: '8px 16px', borderRadius: 16, backgroundColor: '#D4D4D4' }}>
            {item}
          </Text>
        ))}
      </Flex>
      <Button size={'3'} style={{ width: 'fit-content' }}>
        مدیریت دسته بندی
      </Button>
    </Flex>
  );
};

export default CategoriesCard;
