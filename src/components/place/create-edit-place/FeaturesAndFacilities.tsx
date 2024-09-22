'use client';

import { useFormContext } from 'react-hook-form';

import { Grid, Select } from '@/libs/primitives';
import { FeatureCategory } from '@/types/place';

import Container from './Container';

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
  const { setValue, watch } = useFormContext();

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
          <Select
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
          />
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
