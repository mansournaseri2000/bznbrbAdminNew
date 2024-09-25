'use client';

import {  Grid, CheckboxGroup,Text } from '@/libs/primitives';
import { FeatureCategory } from '@/types/place';

import Container from './Container';
import { Button, Flex, Popover } from '@radix-ui/themes';
import { colorPalette } from '@/theme';
import { CaretDownIcon } from '@radix-ui/react-icons';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  featureItems: FeatureCategory[];
};

const FeaturesAndFacilities = ({ featureItems }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  
  
  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */


  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Container height='auto' title='ویژگی ها و امکانات'>
      <Grid height={'max-content'} gap={'16px'} columns={'3'}>
        {featureItems.map((featureItem, index) => (
       <Popover.Root key={index}>
       <Popover.Trigger>
         <Button
           style={{
             paddingInline: '15px',
             borderRadius: '8px',
             border: `1px solid ${colorPalette.gray[7]}`,
             color: colorPalette.gray[9],
             backgroundColor: '#fff',
           }}
           variant='solid'
           size={'4'}
         >
           <Flex align={'center'} width={'100%'} justify={'between'}>
             <Text>{featureItem.name}</Text>
             <CaretDownIcon style={{ scale: 1.5 }} />
           </Flex>
         </Button>
       </Popover.Trigger>
       <Popover.Content width='360px'>
         <Flex gap='3'>
           <CheckboxGroup
             isRow={false}
             items={featureItem.features}
             store={'features'}
           />
         </Flex>
       </Popover.Content>
     </Popover.Root>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturesAndFacilities;

/**
 * styled-component
 * _______________________________________________________________________________
 */

{/* <Select
key={index}
selected={featureItem.features.find(item => item.id === watch(`features[${index}][value]`))?.name}
onValueChange={value => {
  const id = featureItem.features.find(item => item.name === value)?.id;
  setValue(`features[${index}][value]`, id);
}}
store={`features[${index}][value]`}
errorText={''}
items={featureItem.features}
placeholder={featureItem.name}
lable={featureItem.name}
/> */}
