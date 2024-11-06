'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { sidebarOptions } from '@/constants/sidebar';
import { Flex, Grid, Text } from '@/libs/primitives';
import { BznText, Exit, ProfileLogo } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      initial={{ width: '40px' }}
      animate={{ width: isExpanded ? '260px' : '80px' }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        right: '0',
        top: '0',
        bottom: '0',
        backgroundColor: colorPalette.gray[2],
        border: `1px solid ${colorPalette.gray[6]}`,
        borderRadius: '16px 0px 0px 16px',
        zIndex: 100,
      }}
    >
      <Grid mx={'auto'} height={'100%'} style={{ overflow: 'hidden', whiteSpace: 'nowrap', alignContent: 'space-between' }}>
        <Grid width={'fit-content'}>
          <Flex direction='column' p={'4'} gap={'4'} justify='start' align='start' style={{ height: '100%' }}>
            <Link href={''}>
              <ProfileLogo width={'48px'} height={'32px'} />
              <CollapseWrapper
                animate={{
                  maxWidth: isExpanded ? '100%' : '1px',
                  opacity: isExpanded ? 1 : 0,
                }}
                initial={{ maxWidth: '0px', opacity: 0 }}
                transition={{
                  maxWidth: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.2, ease: 'easeInOut' },
                }}
              >
                <BznText width={'113px'} height={'32px'} cursor={'pointer'} />
              </CollapseWrapper>
            </Link>
            {sidebarOptions.map((item, index) => (
              <Link href={item.path && item.type === 'collapse' ? item.path : ''} key={index}>
                <Flex gap={'2'} px={'4'} py={'11px'} align={'center'}>
                  {<item.icon />}
                  <CollapseWrapper
                    animate={{
                      maxWidth: isExpanded ? '100%' : '1px',
                      opacity: isExpanded ? 1 : 0,
                    }}
                    initial={{ maxWidth: '0px', opacity: 0 }}
                    transition={{
                      maxWidth: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.2, ease: 'easeInOut' },
                    }}
                  >
                    <Text {...typoVariant.body3} style={{ color: colorPalette.gray[11] }}>
                      {item.text}
                    </Text>
                    {item.items?.map((option, index) => (
                      <Link key={index} href={option.path}>
                        <Text {...typoVariant.body3} style={{ color: colorPalette.gray[11] }}>
                          {option.text}
                        </Text>
                      </Link>
                    ))}
                  </CollapseWrapper>
                </Flex>
              </Link>
            ))}
          </Flex>
        </Grid>
        <Grid width={'fit-content'}>
          <Flex width={'100%'} justify={'center'} align={'center'} height={'fit-content'} gap={'2'} p={'4'}>
            <Exit width={'16px'} height={'16px'} />
            <CollapseWrapper
              animate={{
                maxWidth: isExpanded ? '100%' : '1px',
                opacity: isExpanded ? 1 : 0,
              }}
              initial={{ maxWidth: '0px', opacity: 0 }}
              transition={{
                maxWidth: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.2, ease: 'easeInOut' },
              }}
            >
              <Text {...typoVariant.body3} style={{ color: colorPalette.pink[11] }}>
                خروج از حساب کاربری
              </Text>
            </CollapseWrapper>
          </Flex>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Sidebar;

const CollapseWrapper = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
