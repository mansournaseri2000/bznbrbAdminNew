'use client';

import React, { useState } from 'react';

import { Grid } from '@/libs/primitives';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';

import FeatureCard from '../feature-card/FeatureCard';
import FeatureModal from '../feature-modal/FeatureModal';

type KeyOptions = 'edit' | 'add' | '';

const FeatureItems = () => {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [key, setKey] = useState<KeyOptions>('');
  return (
    <>
      <Grid width={'100%'} gapY={'5'}>
        <AccordionWrapper
          hero='خطرات و محدودیت‌ها'
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
          <FeatureCard title='ویژگی اول' />
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
