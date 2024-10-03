import React from 'react';

import Link from 'next/link';

import { Flex, Text } from '@radix-ui/themes';
import styled from 'styled-components';

import { MenuData } from '@/constants/menu';
import { Accordion } from '@/libs/primitives';

const Menu = () => {
  return (
    <MenuWrapper direction={'column'} p={'4'} gap={'4'}>
      {MenuData.map((option, index) => (
        <>
          {option.type === 'collapse' ? (
            <ItemWrapper key={index} p={'2'}>
              <Link style={{ width: '100%' }} href={option.path ? option.path : ''}>
                <Text>{option.label}</Text>
              </Link>
            </ItemWrapper>
          ) : option.type === 'expand' ? (
            <Accordion key={index} triggerText={option.label}>
              {option.items?.map((item, i) => (
                <Flex p={'2'} pr={'5'} mt={'2'} key={i}>
                  <Link style={{ width: '100%' }} href={item.path ? item.path : ''}>
                    <Text>{item.label}</Text>
                  </Link>
                </Flex>
              ))}
            </Accordion>
          ) : (
            ''
          )}
        </>
      ))}
    </MenuWrapper>
  );
};

export default Menu;

const ItemWrapper = styled(Flex)`
  border-radius: 8px;
  border: 1px solid #d4d4d4;
`;

const MenuWrapper = styled(Flex)`
  width: 100%;
  max-width: 260px;
  border-radius: 16px 0px 0px 16px;
  border: 1px solid #6a6a6a;
`;
