import React from 'react';

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
              <Text>{option.label}</Text>
            </ItemWrapper>
          ) : option.type === 'expand' ? (
            <Accordion key={index} triggerText={option.label}>
              {option.items?.map((item, i) => (
                <Flex p={'2'} pr={'5'} mt={'2'} key={i}>
                  <Text>{item.label}</Text>
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
