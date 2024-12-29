'use client';

import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { PlusIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

import { Flex, Grid, IconButton, Text, TextField } from '@/libs/primitives';
import { Close } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

const ArticlePoint = () => {
  const { setValue, watch } = useFormContext();
  const [point, setPoint] = useState<number | string>();

  const addArticlePoint = () => {
    setValue('mainPoint', point);
    setPoint('');
  };

  const removeArticlePoint = () => {
    setValue('mainPoint', null);
  };

  return (
    <Grid width={'100%'} gapY={'5'}>
      <Flex width={'50%'} align={'center'} gap={'3'}>
        <TextField type='number' value={point} onChange={e => setPoint(e.target.value)} placeholder='آیدی نقطه مرتبط اصلی' disabled={Boolean(watch('mainPoint'))} />
        <IconButton type='button' variant='soft' size={'3'} onClick={() => addArticlePoint()} disabled={Boolean(watch('mainPoint'))} style={{ marginBottom: '10px' }}>
          <PlusIcon />
        </IconButton>
      </Flex>
      {Boolean(watch('mainPoint')) ? (
        <Flex width={'fit-content'} gap={'3'} p={'9.5px 16px'} align={'center'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
            {watch('mainPoint')}
          </Text>
          <IconButton size={'1'} variant='surface' onClick={() => removeArticlePoint()}>
            <CustomClose />
          </IconButton>
        </Flex>
      ) : (
        <Flex>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
            نقطه ی مرتبط موجود نیست
          </Text>
        </Flex>
      )}
    </Grid>
  );
};

export default ArticlePoint;

const CustomClose = styled(Close)`
  path {
    fill: ${colorPalette.pink[11]};
  }
`;

// 'use client';

// import React from 'react';

// import Image from 'next/image';

// import styled from 'styled-components';

// import { Box, Button, Flex, Grid, Heading, Text } from '@/libs/primitives';
// import { Star, Trash, Update } from '@/public/icon';
// import { colorPalette } from '@/theme';
// import { typoVariant } from '@/theme/typo-variants';

// type Props = {
//   pic: string;
//   pointName: string;
//   province: string;
//   city: string;
//   score: string;
//   comment: number;
//   description: string;
//   tag: string[];
// };

// const ArticlePoint = (props: Props) => {
//   const { pic, pointName, province, city, score, comment, description, tag } = props;
//   return (
//     <Grid width={'100%'} columns={'2'}>
//       <Box width={'100%'} height={'300px'} position={'relative'} style={{ borderRadius: 8 }}>
//         <Image src={pic} alt='تصویر نقطه ی مرتبط' fill style={{ objectFit: 'cover', borderRadius: 8 }} />
//       </Box>
//       <Flex direction={'column'} p={'18.5px 24px'} gap={'5'}>
//         <Flex width={'100%'} height={'fit-content'} align={'start'} justify={'between'}>
//           <Flex direction={'column'} gap={'2'}>
//             <Heading as='h3' size={'3'} style={{ color: colorPalette.gray[12] }}>
//               {pointName}
//             </Heading>
//             <Text {...typoVariant.description2} style={{ color: colorPalette.gray[9] }}>
//               {province} / {city}
//             </Text>
//           </Flex>
//           <Flex align={'center'} gap={'1'}>
//             <Text {...typoVariant.body3} style={{ color: colorPalette.gray[11] }}>
//               {score}
//             </Text>
//             <StarIcon />
//             <Text {...typoVariant.body3} style={{ color: colorPalette.gray[11] }}>
//               {`( ${comment} نظر)`}
//             </Text>
//           </Flex>
//         </Flex>
//         <Flex direction={'column'} gap={'1'}>
//           <Text {...typoVariant.body3} style={{ color: colorPalette.gray[9] }}>
//             توضیحات
//           </Text>
//           <Text {...typoVariant.paragraph2} style={{ color: colorPalette.gray[11] }}>
//             {description}
//           </Text>
//         </Flex>
//         <Flex align={'center'} gap={'2'}>
//           {tag.map((item, index) => (
//             <Box key={index} p={'2px 12px'} style={{ backgroundColor: colorPalette.pink[3], borderRadius: 8 }}>
//               <Text {...typoVariant.description2} style={{ color: colorPalette.pink[12] }}>
//                 {item}
//               </Text>
//             </Box>
//           ))}
//         </Flex>
//         <Flex width={'100%'} justify={'end'} gap={'5'}>
//           <Button size={'4'}>
//             <Flex align={'center'} gap={'2'}>
//               <Update width={'1rem'} height={'1rem'} />
//               <Text {...typoVariant.body1}>تغییر نقطه</Text>
//             </Flex>
//           </Button>
//           <Button size={'4'} colorVariant='PINK'>
//             <Flex align={'center'} gap={'2'}>
//               <Trash width={'1rem'} height={'1rem'} />
//               <Text {...typoVariant.body1}>حذف نقطه</Text>
//             </Flex>
//           </Button>
//         </Flex>
//       </Flex>
//     </Grid>
//   );
// };

// export default ArticlePoint;

// const StarIcon = styled(Star)`
//   path {
//     fill: ${colorPalette.pink[9]};
//   }
// `;

// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import styled from 'styled-components';
// import { Box, Button, Flex, Grid, Heading, Text } from '@/libs/primitives';
// import { Star, Trash, Update } from '@/public/icon';
// import { colorPalette } from '@/theme';
// import { typoVariant } from '@/theme/typo-variants';
// type Props = {
//   pic: string;
//   pointName: string;
//   province: string;
//   city: string;
//   score: string;
//   comment: number;
//   description: string;
//   tag: string[];
// };
// const ArticlePoint = (props: Props) => {
//   const { pic, pointName, province, city, score, comment, description, tag } = props;
//   return (
//     <Grid width={'100%'} columns={'2'}>
//       <Box width={'100%'} height={'300px'} position={'relative'} style={{ borderRadius: 8 }}>
//         <Image src={pic} alt='تصویر نقطه ی مرتبط' fill style={{ objectFit: 'cover', borderRadius: 8 }} />
//       </Box>
//       <Flex direction={'column'} p={'18.5px 24px'} gap={'5'}>
//         <Flex width={'100%'} height={'fit-content'} align={'start'} justify={'between'}>
//           <Flex direction={'column'} gap={'2'}>
//             <Heading as='h3' size={'3'} style={{ color: colorPalette.gray[12] }}>
//               {pointName}
//             </Heading>
//             <Text {...typoVariant.description2} style={{ color: colorPalette.gray[9] }}>
//               {province} / {city}
//             </Text>
//           </Flex>
//           <Flex align={'center'} gap={'1'}>
//             <Text {...typoVariant.body3} style={{ color: colorPalette.gray[11] }}>
//               {score}
//             </Text>
//             <StarIcon />
//             <Text {...typoVariant.body3} style={{ color: colorPalette.gray[11] }}>
//               {`( ${comment} نظر)`}
//             </Text>
//           </Flex>
//         </Flex>
//         <Flex direction={'column'} gap={'1'}>
//           <Text {...typoVariant.body3} style={{ color: colorPalette.gray[9] }}>
//             توضیحات
//           </Text>
//           <Text {...typoVariant.paragraph2} style={{ color: colorPalette.gray[11] }}>
//             {description}
//           </Text>
//         </Flex>
//         <Flex align={'center'} gap={'2'}>
//           {tag.map((item, index) => (
//             <Box key={index} p={'2px 12px'} style={{ backgroundColor: colorPalette.pink[3], borderRadius: 8 }}>
//               <Text {...typoVariant.description2} style={{ color: colorPalette.pink[12] }}>
//                 {item}
//               </Text>
//             </Box>
//           ))}
//         </Flex>
//         <Flex width={'100%'} justify={'end'} gap={'5'}>
//           <Button size={'4'}>
//             <Flex align={'center'} gap={'2'}>
//               <Update width={'1rem'} height={'1rem'} />
//               <Text {...typoVariant.body1}>تغییر نقطه</Text>
//             </Flex>
//           </Button>
//           <Button size={'4'} colorVariant='PINK'>
//             <Flex align={'center'} gap={'2'}>
//               <Trash width={'1rem'} height={'1rem'} />
//               <Text {...typoVariant.body1}>حذف نقطه</Text>
//             </Flex>
//           </Button>
//         </Flex>
//       </Flex>
//     </Grid>
//   );
// };
// export default ArticlePoint;
// const StarIcon = styled(Star)`
//   path {
//     fill: ${colorPalette.pink[9]};
//   }
// `;
