import Image from 'next/image';

import { PlusIcon } from '@radix-ui/react-icons';
import { CopyIcon } from '@radix-ui/react-icons';

import { Box, Flex, Grid, Heading, IconButton, Text, TextArea, TextField } from '@/libs/primitives';
import { Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  data: {
    id: number;
    path: string | null;
    page: string;
    position: string;
    description: string | null;
    alt: string | null;
    slug: string | null;
    summery: string | null;
    website: string | null;
    socialMedia: string | null;
    sponsor: string | null;
    townId: number | null;
    cityId: number | null;
    provincesId: number | null;
    categoryId: number | null;
  };
  onCreateOrEdit: (key: 'edit' | 'create') => void;
  onDelete: () => void;
  onClick: () => void;
};

const AdsDetailCard = ({ data, onCreateOrEdit, onDelete, onClick }: Props) => {
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <>
      {!Boolean(data?.path) && (
        <Flex align={'center'} position={'relative'} minHeight={'200px'} p={'16px'} justify={'center'} style={{ borderRadius: '8px', border: `1px dashed ${colorPalette.blue[9]}` }}>
          <Text style={{ position: 'absolute', color: colorPalette.gray[8], right: '20px', fontSize: '90px' }}>{data?.position}</Text>
          <Flex
            gap={'4px'}
            align={'center'}
            onClick={() => {
              onCreateOrEdit('create');
              onClick();
            }}
            style={{ cursor: 'pointer' }}
          >
            <PlusIcon stroke={colorPalette.blue[7]} />
            <Text {...typoVariant.body1} style={{ color: colorPalette.blue[11] }}>
              افزودن آگهی
            </Text>
          </Flex>
        </Flex>
      )}
      {Boolean(data?.path) && (
        <Grid onClick={onClick} p={'16px'} style={{ borderRadius: '8px', border: `1px solid ${colorPalette.gray[6]}` }}>
          <Flex width={'100%'} align={'center'} justify={'between'}>
            <Heading style={{ color: colorPalette.gray[11], fontSize: '32px', fontWeight: 500, lineHeight: '37.5px' }}>{data.position}</Heading>
            <Flex align={'center'} gap={'4'}>
              <IconButton
                size={'3'}
                onClick={() => {
                  onCreateOrEdit('edit');
                }}
              >
                <Pencil />
              </IconButton>
              <IconButton size={'3'} variant='surface' onClick={onDelete}>
                <Trash />
              </IconButton>
            </Flex>
          </Flex>
          <Flex width={'100%'} gap={'10px'}>
            <Box width={'400px'} height={'200px'} position={'relative'}>
              <Image src={`${process.env.NEXT_PUBLIC_BASE_URL_image}${data.path}`} alt={String(data?.alt)} fill style={{ borderRadius: 8, objectFit: 'cover', objectPosition: 'center' }} />
            </Box>
            <Flex width={'77.5%'} direction={'column'} mt={'2'} style={{ justifyContent: 'space-between' }}>
              <Flex direction={'column'} gap={'3'}>
                <TextField placeholder='متن چایگزین' readOnly value={data.alt ?? ''} style={{ borderRadius: 12 }} />
                <TextArea placeholder='توضیحات تصویر' readOnly value={data.description ?? ''} style={{ borderRadius: 12 }} />
              </Flex>
              {data.path && (
                <Flex p={'12px 16px'} gap={'2'} align={'center'}>
                  <IconButton variant='surface' size={'1'}>
                    <CopyIcon style={{ color: colorPalette.blue[10] }} />
                  </IconButton>
                  <Text {...typoVariant.body3} style={{ color: colorPalette.blue[11] }}>
                    {data.path}
                  </Text>
                </Flex>
              )}
            </Flex>
          </Flex>
        </Grid>
      )}
    </>
  );
};

export default AdsDetailCard;
