'use client';

import { ForwardedRef, forwardRef } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Flex, Grid, IconButton, Text } from '@/libs/primitives';
import { Divider } from '@/libs/shared';
import { convertToPersianTime } from '@/libs/utils/convertToPersianLocale';
import { Comment, TriangleLeft } from '@/public/icon';
import { Boxshadow, colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

// import { TripResponse } from '@/types/plans/trip';

type Props = {
  title: string;
  type: string;
  time: string;
  description: string;
  distanceToNextDestination: number;
  tripID: number;
  count: number;
  comment: string;
  dayID: number;
  isExpand: boolean;
  point_id: number;
} & React.HTMLAttributes<HTMLDivElement>;

const CommonViewCard = forwardRef<HTMLDivElement, Props>((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
  const { description, distanceToNextDestination, time, title, count, comment, point_id, isExpand, ...rest } = props;

  console.log('POINT ID', point_id);

  const handleChildClick = (e: { stopPropagation: () => void }) => {
    //  key: 'redirect' | 'comment'
    e.stopPropagation();

    // switch (key) {
    //   case 'trash':
    //     setIsOpen(true);
    //     setKey(key);
    //     break;
    //   case 'redirect':
    //     push(`/place/${tripID}?view=common`);
    //     break;
    //   case 'edit':
    //     push('/category/102460/edit');
    //     break;
    //   case 'comment':
    //     if (!user?.token) {
    //       push(`/auth/login/receiveCode`);
    //       if (!isDesktop) {
    //         ToastError(permissionMessage);
    //         cookie.set('falbackurl', `trip/${addCommentData.trip_id}?view=common`, { path: '/' });
    //       } else {
    //         ToastError(permissionMessage);
    //         cookie.set('falbackurl', `trip/${addCommentData.trip_id}`, { path: '/' });
    //       }
    //     } else {
    //       setIsOpen(true);
    //       setKey(key);
    //     }
    //     break;
    //   default:
    // }
  };

  const handleRedirectToPlace = () => {
    window.open(`https://bezanimbiroon.ir/place/${point_id}`, '_blank');
  };

  return (
    <>
      <Root {...rest} ref={ref} count={count} gap='16px' direction='column'>
        <Flex justify='between'>
          <Text {...typoVariant.body2} style={{ color: count % 2 === 1 ? colorPalette.blue[9] : colorPalette.pink[9] }}>
            {title}
          </Text>
          <Text {...typoVariant.body3} style={{ color: colorPalette.gray[9] }}>
            {convertToPersianTime(time)}
          </Text>
        </Flex>
        <div
          dangerouslySetInnerHTML={{
            __html: isExpand ? description : `${description.substring(0, 200)}...`,
          }}
          {...typoVariant.paragraph2}
          style={{ color: colorPalette.gray[11] }}
        />

        <motion.div initial={false} animate={{ height: isExpand ? 'auto' : 0, opacity: isExpand ? 1 : 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} style={{ overflow: 'hidden' }}>
          <ExpandableContent>
            <Flex direction='column' gap='16px'>
              <Flex justify='between' align={'center'} gap={'8px'}>
                <Text {...typoVariant.body3} style={{ color: colorPalette.gray[9] }}>
                  فاصله تا مقصد بعدی
                </Text>
                <div style={{ borderTop: `1px dashed ${colorPalette.gray[11]}`, display: 'flex', flex: 1 }} />
                <Text {...typoVariant.body3} style={{ color: colorPalette.gray[11] }}>
                  {distanceToNextDestination} کیلومتر
                </Text>
              </Flex>
              <FlexRoot justify={'between'} align={'center'}>
                <IconWrapper gap={'20px'} count={count}>
                  <Comment width={32} height={32} className='comment' onClick={e => handleChildClick(e)} />
                  {/* , 'comment' */}
                </IconWrapper>
                <IconButton
                  style={{
                    backgroundColor: count % 2 === 1 ? colorPalette.blue[9] : colorPalette.pink[9],
                    borderRadius: '12px',
                    cursor: 'pointer',
                    marginInlineStart: 'auto',
                  }}
                  variant='soft'
                  onClick={() => handleRedirectToPlace()}
                  // , 'redirect'
                >
                  <TriangleLeft color='#fff' />
                </IconButton>
              </FlexRoot>
              {Boolean(comment) && (
                <Grid gap={'8px'}>
                  <Divider />
                  <Flex gap={'4px'} align={'center'}>
                    <Text {...typoVariant.body2} style={{ color: colorPalette.gray[8] }}>
                      یادداشت:
                    </Text>
                    <Text {...typoVariant.body2} style={{ color: colorPalette.gray[11] }}>
                      {comment}
                    </Text>
                  </Flex>
                </Grid>
              )}
            </Flex>
          </ExpandableContent>
        </motion.div>
        <FlagRoot
          justify={'center'}
          align={'center'}
          style={{
            borderColor: count % 2 === 1 ? colorPalette.blue[9] : colorPalette.pink[9],
          }}
        >
          <Fleg style={{ backgroundColor: count % 2 === 1 ? colorPalette.blue[9] : colorPalette.pink[9] }} />
        </FlagRoot>
      </Root>
    </>
  );
});

export default CommonViewCard;

// Styled components remain the same
const Root = styled(Flex)<{ count: number }>`
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  position: relative;
  box-shadow: ${Boxshadow.shadow1};
  border: 1px solid ${colorPalette.gray[6]};
  background-color: ${({ count }) => (count % 2 === 1 ? colorPalette.blue[1] : colorPalette.pink[2])};
`;

const ExpandableContent = styled.div`
  padding-top: 16px;
`;

const FlagRoot = styled(Flex)`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 1px solid;
  position: absolute;
  right: -20px;
  top: 0;
`;

const Fleg = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
`;

const IconWrapper = styled(Flex)<{ count: number }>`
  svg {
    path {
      fill: ${({ count }) => (count % 2 === 1 ? colorPalette.turquoise[11] : colorPalette.amber[11])};
    }
  }
`;

const FlexRoot = styled(Flex)`
  .comment {
    svg {
      path {
        fill: ${colorPalette.blue[9]} !important;
      }
    }
  }
`;
