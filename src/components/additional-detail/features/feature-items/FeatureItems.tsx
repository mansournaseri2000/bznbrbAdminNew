'use client';

import React, { useState } from 'react';

import { Flex, Grid } from '@/libs/primitives';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';
import { FeaturesResponse } from '@/types/additional-detail/additional-detail';

import FeatureCard from '../feature-card/FeatureCard';
import FeatureModal from '../feature-modal/FeatureModal';

type KeyOptions = 'edit' | 'add' | '';

const FeatureItems = (props: FeaturesResponse) => {
  const { name, features } = props;
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [key, setKey] = useState<KeyOptions>('');
  return (
    <>
      <Grid width={'100%'} gapY={'5'}>
        <AccordionWrapper
          hero={name}
          withButton
          onEdit={e => {
            e.stopPropagation();
            setOpenEdit(true);
            setKey('edit');
          }}
          onButtonSubmit={e => {
            e.stopPropagation();
            setOpenAdd(true);
            setKey('add');
          }}
        >
          <Flex width={'100%'} gap={'5'} align={'center'} wrap={'wrap'}>
            {features.map(item => (
              <FeatureCard key={item.id} title={item.name} />
            ))}
          </Flex>
        </AccordionWrapper>
      </Grid>
      {key === 'add' ? (
        <FeatureModal type='add_feature_category' isOpen={openAdd} setIsOpen={setOpenAdd} />
      ) : (
        key === 'edit' && <FeatureModal type='edit_feature_category' isOpen={openEdit} setIsOpen={setOpenEdit} />
      )}
    </>
  );
};

export default FeatureItems;
