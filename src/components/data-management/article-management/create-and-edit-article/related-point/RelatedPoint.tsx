'use client';

import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { PlusIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

import { Flex, Grid, IconButton, Text, TextField } from '@/libs/primitives';
import { Close } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

const RelatedPoint = () => {
  const { setValue } = useFormContext();
  const [points, setPoints] = useState<number[]>([]);
  const [point, setPoint] = useState<number | string>('');

  const addRelatedPoint = () => {
    if (point) {
      const newPoints = [...points, Number(point)];
      setPoints(newPoints);
      setValue('relationPoints', newPoints);
      setPoint('');
    }
  };

  const removeRelatedPoint = (index: number) => {
    const newPoints = points.filter((_, i) => i !== index);
    setPoints(newPoints);
    setValue('relationPoints', newPoints);
  };
  return (
    <Grid width={'100%'} gapY={'5'}>
      <Flex width={'50%'} align={'center'} gap={'3'}>
        <TextField type='number' value={point} onChange={e => setPoint(e.target.value)} placeholder='آیدی نقطه مرتبط اصلی' />
        <IconButton type='button' variant='soft' size={'3'} onClick={addRelatedPoint} style={{ marginBottom: '10px' }}>
          <PlusIcon />
        </IconButton>
      </Flex>
      {points.length > 0 ? (
        <Flex width={'100%'} gap={'3'} wrap={'wrap'}>
          {points.map((p, index) => (
            <Flex key={index} width={'fit-content'} gap={'3'} p={'9.5px 16px'} align={'center'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                {p}
              </Text>
              <IconButton size={'1'} variant='surface' onClick={() => removeRelatedPoint(index)}>
                <CustomCloseIcon />
              </IconButton>
            </Flex>
          ))}
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

export default RelatedPoint;

const CustomCloseIcon = styled(Close)`
  path {
    fill: ${colorPalette.pink[11]};
  }
`;
// 'use client';

// import React, { useState } from 'react';
// import { useFormContext } from 'react-hook-form';

// import { PlusIcon } from '@radix-ui/react-icons';
// import { Close } from '@radix-ui/themes/dist/esm/components/dialog.js';
// import styled from 'styled-components';

// import { Flex, Grid, IconButton, Text, TextField } from '@/libs/primitives';
// import { colorPalette } from '@/theme';
// import { typoVariant } from '@/theme/typo-variants';

// const RelatedPoint = () => {
//   const { setValue, watch } = useFormContext();
//   const [points, setPoints] = useState<number[] | string[]>();

//   const addRelatedPoints = () => {
//     setValue('relationPoints', points);
//     setPoints([]);
//   };

//   return (
//     <Grid width={'100%'} gapY={'5'}>
//       <Flex width={'50%'} align={'center'} gap={'3'}>
//         <TextField type='number' value={points} placeholder='آیدی نقطه مرتبط اصلی' onChange={e => setPoints(e.target.value)} />
//         <IconButton variant='soft' size={'3'}>
//           <PlusIcon />
//         </IconButton>
//       </Flex>

//       <Flex width={'fit-content'} gap={'3'} p={'9.5px 16px'} align={'center'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
//         <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
//           s
//         </Text>
//         <IconButton size={'1'} variant='surface'>
//           <CustomClose />
//         </IconButton>
//       </Flex>
//     </Grid>
//   );
// };

// export default RelatedPoint;

// const CustomClose = styled(Close)`
//   path {
//     fill: ${colorPalette.pink[11]};
//   }
// `;

// 'use client';

// import React, { useState } from 'react';
// import { Controller, useForm } from 'react-hook-form';

// import { Radio } from '@radix-ui/themes';
// import styled from 'styled-components';

// import { selectPointOptions } from '@/constants/data-management';
// import { Box, Button, Flex, Grid, Heading, Modal, Text, TextField } from '@/libs/primitives';
// import ModalAction from '@/libs/shared/ModalAction';
// import ModalHeader from '@/libs/shared/ModalHeader';
// import { Close, Search } from '@/public/icon';
// import { colorPalette } from '@/theme';
// import { typoVariant } from '@/theme/typo-variants';

// import RelatedPointList from './RelatedPointList';

// type Props = {
//   type: 'create' | 'edit';
// };

// const RelatedPoint = ({ type }: Props) => {
//   /**
//    * variable and constant
//    * _______________________________________________________________________________
//    */

//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const methods = useForm({ defaultValues: { search: '' } });
//   const { control } = methods;
//   /**
//    * table constant
//    * _______________________________________________________________________________
//    */

//   return (
//     <>
//       {type === 'create' ? (
//         <Flex width={'100%'} direction={'column'} justify={'center'} align={'center'} gap={'32px'}>
//           <Heading as='h3' size={'3'} style={{ color: colorPalette.gray[11] }}>
//             هنوز نقطه مرتبطی به این مقاله اضافه نشده است.
//           </Heading>
//           <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
//             نقاط مرتبط در انتهای مقاله به صورتی لیستی نمایش داده می شوند.
//           </Text>
//           <Button size={'3'} style={{ padding: '13.5px 16px' }}>
//             <Flex align={'center'} gap={'2'}>
//               <Text {...typoVariant.body1}>+</Text>
//               <Text {...typoVariant.body1}>افزودن نقاط مرتبط</Text>
//             </Flex>
//           </Button>
//         </Flex>
//       ) : (
//         type === 'edit' && (
//           <Grid gapY={'5'}>
//             <Button size={'3'} onClick={() => setIsOpen(true)} style={{ padding: '13.5px 16px', width: 'fit-content' }}>
//               <Flex align={'center'} gap={'2'}>
//                 <Text {...typoVariant.body1}>+</Text>
//                 <Text {...typoVariant.body1}>افزودن نقطه</Text>
//               </Flex>
//             </Button>
//             <RelatedPointList />
//           </Grid>
//         )
//       )}
//       <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
//         <ModalHeader title='انتخاب نقطه' icon={<Close />} handleClose={() => setIsOpen(false)} />
//         <Grid p={'12px 16px'} gapY={'4'} maxHeight={'450px'} style={{ overflowY: 'auto' }}>
//           <Controller name='search' control={control} render={({ field }) => <TextField {...field} placeholder='جستجو نام نقطه' icon={<SearchIcon />} />} />
//           <Box width={'100%'} height={'100%'} maxHeight={'450px'} style={{ border: '1px solid #D4D4D4', borderRadius: 8, overflow: 'hidden' }}>
//             {selectPointOptions.map((item, index) => (
//               <Grid key={index} p={'13.5px 16px'} width={'100%'} gapX={'9'} style={{ gridTemplateColumns: 'auto 1fr 1fr 1fr ' }}>
//                 <Radio value={''} />
//                 <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
//                   {item.title}
//                 </Text>
//                 <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
//                   {item.province}
//                 </Text>
//                 <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
//                   {item.city}
//                 </Text>
//               </Grid>
//             ))}
//           </Box>
//         </Grid>
//         <ModalAction submitButtonText='ثبت ' closeButtonText='لغو' onCloseButton={() => setIsOpen(false)} />
//       </Modal>
//     </>
//   );
// };

// export default RelatedPoint;

// const SearchIcon = styled(Search)`
//   path {
//     fill: ${colorPalette.gray[11]};
//   }
// `;
