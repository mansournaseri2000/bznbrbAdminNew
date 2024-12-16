// import React from 'react';

// import PointCommentItem from '@/components/develop/confirmations/Point-comment-item/PointCommentItem';
// import { Accordion, Button, Flex, Grid, Text } from '@/libs/primitives';
// import { colorPalette } from '@/theme';
// import { typoVariant } from '@/theme/typo-variants';
// import { PointDetail } from '@/types/confirmations/path-guid';

// const user = {
//   username: 'مصطفی',
//   last_name: 'اجاقلو',
//   date: '۲۶ فروردین ۱۴۰۳',
//   pic: '/image/profile.jpeg',
// };

// type Props = {
//   point: PointDetail;
//   onClose: () => void;
// };

// const PointCommentsModal = (props: Props) => {
//   return (
//     <Grid width={'100%'} gapY={'5'}>
//       <Flex width={'100%'} align={'center'} justify={'between'}>
//         <Flex direction={'column'} gap={'2'}>
//           <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
//             {props.point?.name}
//           </Text>
//           <Text {...typoVariant.description2} style={{ color: colorPalette.gray[11] }}>
//             {`${props.point?.Province} / ${props.point?.city}`}
//           </Text>
//         </Flex>
//         <Accordion triggerText='مرتب سازی'> </Accordion>
//       </Flex>
//       <Grid width={'100%'} gapY={'4'} style={{ maxHeight: 496, overflowY: 'auto' }}>
//         {/* TODO: change to radio select */}
//         <PointCommentItem
//           user={user}
//           comment='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
//         />
//         <PointCommentItem
//           user={user}
//           comment='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
//         />
//         <PointCommentItem
//           user={user}
//           comment='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
//         />
//         <PointCommentItem
//           user={user}
//           comment='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
//         />
//         <PointCommentItem
//           user={user}
//           comment='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
//         />
//         <PointCommentItem
//           user={user}
//           comment='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
//         />
//         <PointCommentItem
//           user={user}
//           comment='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
//         />
//         <PointCommentItem
//           user={user}
//           comment='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
//         />
//       </Grid>
//       <Flex align={'center'} gap={'10px'}>
//         <Button size={'3'} colorVariant='BLUE' variant='soft'>
//           <Text {...typoVariant.body1}>افزودن</Text>
//         </Button>
//         <Button size={'3'} colorVariant='PINK' onClick={props.onClose}>
//           <Text {...typoVariant.body1}>بازگشت</Text>
//         </Button>
//       </Flex>
//     </Grid>
//   );
// };

// export default PointCommentsModal;
