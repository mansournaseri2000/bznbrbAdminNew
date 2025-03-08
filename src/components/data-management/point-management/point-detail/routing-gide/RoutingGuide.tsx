'use client';

import { useState } from 'react';

import Image from 'next/image';

// import Image from 'next/image';
import { useRouter } from '@bprogress/next';
import styled from 'styled-components';
import Cookies from 'universal-cookie';

import { permissionMessage } from '@/constants/status-message';
import { Button, Flex, Grid, Modal, Text } from '@/libs/primitives';
import { useUser } from '@/libs/providers/AuthProvider';
import { ToastError } from '@/libs/shared/toast/Toast';
import EmptyRoutingGuide from '@/public/image/empty-routing-guide.png';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import AddRouteGuide from './AddRouteGuide';
import RouteGuideCard from './RouteGuideCard';

/**
 * props
 * _______________________________________________________________________________
 */

type item = {
  title: string;
  description: string | null;
  type: string;
};

type Props = {
  data: item[];
  placeId: number;
};

const RoutingGuide = ({ data, placeId }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const cookie = new Cookies();
  const { user } = useUser();
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */
  const handleClose = () => {
    setIsOpen(false);
  };

  const handlePermission = () => {
    if (!user?.token) {
      ToastError(permissionMessage);
      cookie.set('falbackurl', `place/${placeId}?view=common`, {
        path: '/',
      });
      push(`/auth/login/receiveCode`);
    } else {
      push(`/place/${placeId}/add-route-guide`);
    }
  };

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <>
      <Root direction={'column'} gap={'16px'} p={'16px'}>
        <Text {...typoVariant.body2} style={{ color: colorPalette.gray[12] }}>
          چجوری برم ؟
        </Text>

        <Flex justify={'between'} gap={'20px'} pr={'8px'}>
          {data.length !== 0 && <div style={{ height: 'auto', width: '1px', borderRight: '1px dashed #0000003c' }} />}
          {data.length === 0 && (
            <Flex direction={{ initial: 'column', lg: 'row' }} gap={'16px'} width={'100%'} align={'center'} style={{ justifyContent: 'space-around' }}>
              <Grid height={'max-content'}>
                <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
                  مثل این که کسی نمی دونه بهترین مسیر برای رسیدن به این نقطه چجوریه!
                </Text>
                <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
                  اگر تو مسیر خوبی رو می شناسی کمک کن به مقصد برسیم.
                </Text>
              </Grid>
              <Image src={EmptyRoutingGuide} alt='EmptyRoutingGuide-image' width={300} height={300} />
            </Flex>
          )}
          <Flex direction={'column'} gap={'16px'} style={{ flex: 1 }}>
            {data.map((item, index) => {
              return <RouteGuideCard id={index} description={item.description} type={item.type as 'bus' | 'taxi' | 'subway' as any} key={index} cardType='route_guide' />;
            })}
          </Flex>
        </Flex>
        <Grid display={{ initial: 'grid', lg: 'none' }}>
          <Button type='button' variant='soft' size={'4'} onClick={handlePermission}>
            {/* <Add /> */}
            <Text {...typoVariant.body1}>افزودن راهنمای مسیر</Text>
          </Button>
        </Grid>
      </Root>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AddRouteGuide handleClose={handleClose} placeId={placeId} />
      </Modal>
    </>
  );
};

export default RoutingGuide;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const Root = styled(Flex)`
  border: 1px solid ${colorPalette.gray[6]};
  border-radius: 8px;
`;
